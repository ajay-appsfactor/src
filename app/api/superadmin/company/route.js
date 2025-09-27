import { superAdminDb } from "@/lib/db/superadmin";
import { getTenantDb } from "@/lib/db/getTenantClient";
import { NextResponse } from "next/server";
import { exec } from "child_process";
import { promisify } from "util";
import { randomUUID } from "crypto";
import { mkdir, writeFile } from "fs/promises";
import { existsSync } from "fs";
import { join, extname } from "path";
import { hashPassword } from "@/utils/hashPassword";
// import { getCurrentTime } from "@/utils/getCurrentTime";

const execAsync = promisify(exec);

// Fetch All Company
export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);

    // Pagination
    const page = parseInt(searchParams.get("page") || "1", 10);
    const pageSize = parseInt(searchParams.get("pageSize") || "10", 10);

    // Search, Sort, Filter
    const search = searchParams.get("search")?.trim() || "";
    const sort = searchParams.get("sort") || "created_at";
    const order = searchParams.get("order") || "desc";
    const status = searchParams.get("status");

    // Where condition
    const where = {
      AND: [
        search && {
          OR: [
            { company_name: { contains: search, mode: "insensitive" } },
            { sub_domain: { contains: search, mode: "insensitive" } },
          ],
        },
        status && status !== "all" && { is_active: status === "active" },
        { NOT: { sub_domain: "superadmin" } },
      ].filter(Boolean),
    };

    // Fetch companies
    const [companies, totalCount] = await Promise.all([
      superAdminDb.company.findMany({
        where,
        skip: (page - 1) * pageSize,
        take: pageSize,
        orderBy: { [sort]: order },
        select: {
          id: true,
          is_active: true,
          company_name: true,
          sub_domain: true,
          created_at: true,
          db_url: true,
        },
      }),
      superAdminDb.company.count({ where }),
    ]);

    // Attach user counts
    const companiesWithCounts = await Promise.all(
      companies.map(async (company) => {
        try {
          const tenantPrisma = await getTenantDb(company.db_url);
          const userCount = await tenantPrisma.user.count();

          return { ...company, userCount };
        } catch (err) {
          // console.error(`Failed to fetch users for company ${company.id}`, err);
          return { ...company, userCount: 0 };
        }
      })
    );

    return NextResponse.json({ data: companiesWithCounts, totalCount });
  } catch (error) {
    // console.error("Error fetching companies:", error);
    return NextResponse.json(
      { error: "Failed to fetch companies" },
      { status: 500 }
    );
  }
}

// Create Company
export async function POST(req) {
  let tenantClient;

  try {
    const formData = await req.formData();

    const company_name = formData.get("company_name");
    const sub_domain = formData.get("sub_domain");
    const currency_code = formData.get("currency_code");
    const currency_symbol = formData.get("currency_symbol");
    const timezone = formData.get("timezone") || "UTC";
    const email = formData.get("email")?.toLowerCase();
    const password = formData.get("password");
    const first_name = formData.get("first_name");
    const last_name = formData.get("last_name");
    const phone = formData.get("phone") || null;
    const company_logo = formData.get("company_logo");

    // 1. Validate required fields
    if (
      !company_name ||
      !sub_domain ||
      !currency_code ||
      !currency_symbol ||
      !timezone ||
      !first_name ||
      !last_name ||
      !email ||
      !password ||
      !company_logo
    ) {
      return NextResponse.json(
        { success: false, message: "Missing required fields" },
        { status: 400 }
      );
    }

    // 2. Check for duplicate subdomain
    const existingCompany = await superAdminDb.company.findUnique({
      where: { sub_domain },
    });
    if (existingCompany) {
      return NextResponse.json(
        {
          success: false,
          message: `Subdomain '${sub_domain}' already exists.`,
        },
        { status: 400 }
      );
    }

    const lastCompany = await superAdminDb.company.findFirst({
      orderBy: { company_id: "desc" },
    });

    const nextId = lastCompany ? lastCompany.company_id + 1 : 1;

    let file_url = null;
    let file_name = null;
    let logo_size = null;

    // Handle file upload
    if (
      company_logo &&
      typeof company_logo !== "string" &&
      company_logo.size > 0
    ) {
      const uploadDir =
        process.env.NODE_ENV === "production"
          ? join(process.cwd(), "uploads", sub_domain, "company-logo")
          : join(
              process.cwd(),
              "public",
              "uploads",
              sub_domain,
              "company-logo"
            );
      // const uploadDir = join(
      //   process.cwd(),
      //   "public",
      //   "uploads",
      //   sub_domain,
      //   "company-logo"
      // );

      if (!existsSync(uploadDir)) {
        await mkdir(uploadDir, { recursive: true });
      }

      const buffer = Buffer.from(await company_logo.arrayBuffer());
      const ext = extname(company_logo.name).toLowerCase();
      const encryptedName = `${randomUUID()}${ext}`;
      const filePath = join(uploadDir, encryptedName);

      await writeFile(filePath, buffer);

      file_url = encryptedName;
      file_name = company_logo.name;
      logo_size = company_logo.size;
    }

    // 3. Hash password
    const hashedPassword = await hashPassword(password);

    // 4. Generate tenant DB name and URLs
    const shortId = randomUUID().slice(0, 6);
    const dbName = `3dquotepro_${sub_domain}_${shortId}`;
    const baseTenantUrl = process.env.DATABASE_URL;
    const superDbUrl = process.env.DATABASE_URL_SUPERADMIN;
    const tenantDbUrl = `${baseTenantUrl}/${dbName}`;

    // 5. Create tenant DB
    const rawPrisma = superAdminDb.$extends({
      datasources: { db: { url: superDbUrl } },
    });
    await rawPrisma.$executeRawUnsafe(`CREATE DATABASE "${dbName}"`);
    await rawPrisma.$disconnect();

    try {
      // 6. Run tenant migrations
      await execAsync(
        `npx cross-env DATABASE_URL="${tenantDbUrl}" prisma migrate deploy --schema=prisma/schema.tenant.prisma`
      );
    } catch (err) {
      // console.error("Migration failed, dropping DB...");
      // Rollback: drop database if migration fails
      await rawPrisma.$executeRawUnsafe(`DROP DATABASE IF EXISTS "${dbName}"`);
      throw err;
    }

    //  Current time according to company timezone
    // const now = moment().tz(timezone).format();
    // const now = getCurrentTime(timezone);
    // console.log("Company Time :", now);

    // 7. Save company in superadmin DB
    await superAdminDb.company.create({
      data: {
        company_id: nextId,
        company_name,
        sub_domain,
        currency_code,
        currency_symbol,
        timezone,
        // first_name,
        // last_name,
        // phone,
        // email,
        // password: hashedPassword,
        db_url: tenantDbUrl,
        company_logo: file_url,
        logo_name: file_name,
        logo_size: logo_size,
        roles: ["company"],
      },
    });

    // 8. Create tenant admin and copy defaults
    tenantClient = getTenantDb(tenantDbUrl);
    await tenantClient.$transaction(async (tx) => {
      // Company Admin Owner
      await tx.user.create({
        data: {
          first_name,
          last_name,
          email,
          phone,
          password: hashedPassword,
          roles: ["ceosSeniorExecutives"],
        },
      });

      // Copy defaults from superadmin
      const [
        currencies,
        paymentTerms,
        paymentStatuses,
        quoteStatuses,
        orderStatuses,
        logisticsStatuses,
        financeStatuses,
        services,
        vendorCapabilities,
        vendorCertifications,
        vendorFlags,
      ] = await Promise.all([
        superAdminDb.currency.findMany(),
        superAdminDb.payment_terms.findMany(),
        superAdminDb.paymentStatus.findMany(),
        superAdminDb.quoteStatus.findMany(),
        superAdminDb.orderStatus.findMany(),
        superAdminDb.logisticsStatus.findMany(),
        superAdminDb.financeStatus.findMany(),
        superAdminDb.service.findMany({
          include: { materials: true, finishes: true },
        }),
        superAdminDb.vendor_capabilities.findMany({
          include: { subCategories: true },
        }),
        superAdminDb.vendor_certifications.findMany(),
        superAdminDb.vendor_flags.findMany(),
      ]);

      // Currencies
      if (currencies.length > 0) {
        await tx.tenantCurrency.createMany({
          data: currencies.map(
            ({ id, currency_id, created_at, updated_at, ...keep }) => keep
          ),
          skipDuplicates: true,
        });
      }

      // Payment Terms
      if (paymentTerms.length > 0) {
        await tx.tenantPaymentTerms.createMany({
          data: paymentTerms.map(
            ({ id, payment_terms_id, created_at, updated_at, ...keep }) => keep
          ),
          skipDuplicates: true,
        });
      }

      // Payment Statuses
      if (paymentStatuses.length > 0) {
        await tx.tenantPaymentStatus.createMany({
          data: paymentStatuses.map(
            ({ id, payment_status_id, created_at, updated_at, ...keep }) => keep
          ),
          skipDuplicates: true,
        });
      }

      // Quote Statuses
      if (quoteStatuses.length > 0) {
        await tx.tenantQuoteStatus.createMany({
          data: quoteStatuses.map(
            ({ id, quote_status_id, created_at, updated_at, ...keep }) => keep
          ),
          skipDuplicates: true,
        });
      }

      // Order Statuses
      if (orderStatuses.length > 0) {
        await tx.tenantOrderStatus.createMany({
          data: orderStatuses.map(
            ({ id, order_status_id, created_at, updated_at, ...keep }) => keep
          ),
          skipDuplicates: true,
        });
      }

      // Logistics Statuses
      if (logisticsStatuses.length > 0) {
        await tx.tenantLogisticsStatus.createMany({
          data: logisticsStatuses.map(
            ({ id, logistics_status_id, created_at, updated_at, ...keep }) =>
              keep
          ),
          skipDuplicates: true,
        });
      }

      // Finance Statuses
      if (financeStatuses.length > 0) {
        await tx.tenantFinanceStatus.createMany({
          data: financeStatuses.map(
            ({ id, finance_status_id, created_at, updated_at, ...keep }) => keep
          ),
          skipDuplicates: true,
        });
      }

      // Insert services with materials & finishes
      for (const svc of services) {
        const newService = await tx.companyService.create({
          data: {
            name: svc.name,
            exclude_inspection: svc.exclude_inspection,
            invoice50: svc.invoice50,
            fob_china: svc.fob_china,
            require_deposit_invoice: svc.require_deposit_invoice,
          },
        });

        // Insert materials
        if (svc.materials.length > 0) {
          await tx.companyMaterial.createMany({
            data: svc.materials.map((m) => ({
              name: m.name,
              service_id: newService.id,
            })),
            skipDuplicates: true,
          });
        }

        // Insert finishes
        if (svc.finishes.length > 0) {
          await tx.companyFinish.createMany({
            data: svc.finishes.map((f) => ({
              name: f.name,
              service_id: newService.id,
            })),
            skipDuplicates: true,
          });
        }
      }

      // --- Vendor Capabilities & SubCategories ---
      for (const cap of vendorCapabilities) {
        const newCap = await tx.company_vendor_capabilities.create({
          data: {
            name: cap.name,
            is_active: cap.is_active,
          },
        });

        if (cap.subCategories.length > 0) {
          await tx.company_vendor_capability_sub_categories.createMany({
            data: cap.subCategories.map((sub) => ({
              name: sub.name,
              vendor_capability_id: newCap.id,
              is_active: sub.is_active,
            })),
            skipDuplicates: true,
          });
        }
      }

      // --- Vendor Certifications ---
      if (vendorCertifications.length > 0) {
        await tx.company_vendor_certifications.createMany({
          data: vendorCertifications.map(
            ({ id, created_at, updated_at, ...keep }) => keep
          ),
          skipDuplicates: true,
        });
      }

      // --- Vendor Flags ---
      if (vendorFlags.length > 0) {
        await tx.company_vendor_flags.createMany({
          data: vendorFlags.map(
            ({ id, created_at, updated_at, ...keep }) => keep
          ),
          skipDuplicates: true,
        });
      }
    });

    return NextResponse.json(
      {
        success: true,
        message: "Company created with default data successfully.",
      },
      { status: 201 }
    );
  } catch (error) {
    // console.error("Error creating company:", error);
    return NextResponse.json(
      { success: false, message: error.message || "Internal Server Error" },
      { status: 500 }
    );
  } finally {
    if (tenantClient) {
      await tenantClient.$disconnect().catch(() => null);
    }
  }
}

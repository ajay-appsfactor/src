import { NextResponse } from "next/server";
import { headers } from "next/headers";
import { getTenantDb } from "@/lib/db/getTenantClient";
import { superAdminDb } from "@/lib/db/superadmin";
import { getTenantDbFromHeaders } from "@/lib/db/getTenantDbFromRequest";
import path from "path";
import fs from "fs/promises";
import { join } from "path";
import { randomUUID } from "crypto";

// Helper: Get tenant Prisma
async function getTenantPrisma() {
  const headersList = await headers();
  const host = headersList.get("host") || "";
  const subdomain = host.split(".")[0];

  const company = await superAdminDb.company.findUnique({
    where: { sub_domain: subdomain },
  });

  if (!company) {
    throw new Error("Company not found");
  }

  return getTenantDb(company.db_url);
}

export async function GET(req, { params }) {
  const { vendorId } = await params;
  const {tenantDb} = await getTenantDbFromHeaders();
  const checkVendor = await tenantDb.vendor.findUnique({
    where: { id: vendorId },
  });
  if (!checkVendor)
    return NextResponse.json({ error: "Vendor not found." }, { status: 404 });

  const data = await tenantDb.vendorTaxCompliance.findMany({
    orderBy: { created_at: "desc" },
  });

  // console.log("vendor backend fetch: ", data)
  return NextResponse.json(data);
}

// Post Method
export async function POST(req, { params }) {
  try {
    const { vendorId } = await params;
    const {tenantDb} = await getTenantDbFromHeaders();

    const headersList = await headers();
    const host = headersList.get("host") || "";

    // Handle localhost (remove port if present)
    const subdomain = host.split(".")[0];

    const vendor = await tenantDb.vendor.findUnique({
      where: { id: vendorId },
    });

    if (!vendor) {
      return NextResponse.json({ error: "Vendor not found." }, { status: 404 });
    }

    // Pehle check karo
    const existingCompliance = await tenantDb.vendorTaxCompliance.findFirst({
      where: {
        vendor_id: vendorId,
        file_url: { not: null },
      },
    });

    if (existingCompliance) {
      return NextResponse.json(
        { error: "You can only upload one file." },
        { status: 400 }
      );
    }

    const formData = await req.formData();

    const taxNumber = formData.get("tax_number") || null;
    const vatNumber = formData.get("vat_number") || null;
    const companyNumber = formData.get("company_number") || null;
    const complianceType = formData.get("compliance_type") || null;

    const files = formData.getAll("files");

    let fileName = null;
    let fileUrl = null;

    if (files.length > 0 && typeof files[0] === "object" && files[0].size > 0) {
      const file = files[0];
      fileName = file.name;
      const buffer = Buffer.from(await file.arrayBuffer());

      const uploadsDir =
        process.env.NODE_ENV === "production"
          ? join(
              process.cwd(),
              "uploads",
              subdomain,
              "vendors",
              "tax-attachments",
              vendorId
            )
          : join(
              process.cwd(),
              "public",
              "uploads",
              subdomain,
              "vendors",
              "tax-attachments",
              vendorId
            );

      await fs.mkdir(uploadsDir, { recursive: true });

      const ext = path.extname(file.name);
      const encryptedName = `${randomUUID()}${ext}`;
      await fs.writeFile(path.join(uploadsDir, encryptedName), buffer);

      fileUrl = encryptedName;
    }

    await tenantDb.vendorTaxCompliance.create({
      data: {
        vendor_id: vendorId,
        tax_number: taxNumber,
        vat_number: vatNumber,
        company_number: companyNumber,
        compliance_type: complianceType,
        file_name: fileName,
        file_url: fileUrl,
      },
    });

    // console.log("tax block data :", block);
    return NextResponse.json(
      { message: "Tax & Compliance saved." },
      { status: 201 }
    );
  } catch (error) {
    // console.error("Error creating tax compliance:", error);
    return NextResponse.json(
      { error: "Failed to create tax compliance" },
      { status: 500 }
    );
  }
}

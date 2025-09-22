import { NextResponse } from "next/server";
import AdmZip from "adm-zip";
import fs from "fs/promises";
import path from "path";
import { existsSync } from "fs";
import { superAdminDb } from "@/lib/db/superadmin";
import { getTenantDbFromHeaders } from "@/lib/db/getTenantDbFromRequest";
import { headers } from "next/headers";
import { randomUUID } from "crypto";

export async function POST(req, { params }) {
  const { customerId } = await params;

  try {
    const formData = await req.formData();
    const files = formData.getAll("files");

    if (!files || files.length === 0) {
      return NextResponse.json(
        { error: "No files uploaded." },
        { status: 400 }
      );
    }

    // Detect subdomain
    const headersList = await headers();
    const host = headersList.get("host") || "";
    const subdomain = host.split(".")[0];

    if (!subdomain) {
      return NextResponse.json(
        { error: "Company not identified" },
        { status: 400 }
      );
    }

    // Get company from Super Admin DB
    const company = await superAdminDb.company.findUnique({
      where: { sub_domain: subdomain },
    });

    if (!company) {
      return NextResponse.json({ error: "Company not found" }, { status: 404 });
    }

    // Tenant DB connection
    const tenantDb = await getTenantDbFromHeaders();

    // Check if customer exists + default address
    const customer = await tenantDb.customer.findUnique({
      where: { id: customerId },
      select: {
        user: { select: { id: true } },
        addresses: { where: { is_default: true }, take: 1 },
      },
    });

    if (!customer || !customer.user) {
      return NextResponse.json(
        { error: "Customer not found." },
        { status: 404 }
      );
    }

    const userId = customer.user.id;
    console.log("UserID :", userId);
    const customerEmail = customer.user.email;
    const customerAddress = customer.addresses[0];
    console.log("customerAddress :", customerAddress);

    // Current date
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, "0");

    // Create new quote with copied address
    const newQuote = await tenantDb.quote.create({
      data: {
        user_id: userId,

        customer_email: customerEmail,

        billing_address: customerAddress?.billing_address || "",
        billing_address2: customerAddress?.billing_address2 || null,
        billing_city: customerAddress?.billing_city || "",
        billing_state: customerAddress?.billing_state || "",
        billing_zip: customerAddress?.billing_zip || "",
        billing_country: customerAddress?.billing_country || "",

        shipping_address: customerAddress?.shipping_address || "",
        shipping_address2: customerAddress?.shipping_address2 || null,
        shipping_city: customerAddress?.shipping_city || "",
        shipping_state: customerAddress?.shipping_state || "",
        shipping_zip: customerAddress?.shipping_zip || "",
        shipping_country: customerAddress?.shipping_country || "",

        created_month: month,
        created_year: String(year),
      },
      select: {
        id: true,
        user_id: true,
        created_year: true,
        created_month: true,
      },
    });

    // Upload path (dev = public/uploads, prod = uploads)
    const baseUploadPath =
      process.env.NODE_ENV === "production"
        ? path.join(process.cwd(), "uploads")
        : path.join(process.cwd(), "public", "uploads");

    const uploadDir = path.join(
      baseUploadPath,
      subdomain,
      "quote",
      String(year),
      String(month),
      newQuote.id
    );

    if (!existsSync(uploadDir)) {
      await fs.mkdir(uploadDir, { recursive: true });
    }

    const savedFiles = [];

    // Process all uploaded files
    await Promise.all(
      files.map(async (file) => {
        const buffer = Buffer.from(await file.arrayBuffer());

        if (file.name.endsWith(".zip")) {
          // Case 1: Extract ZIP
          const zip = new AdmZip(buffer);
          const zipEntries = zip.getEntries();

          await Promise.all(
            zipEntries.map(async (entry) => {
              if (!entry.isDirectory) {
                const ext = path.extname(entry.entryName);
                const uniqueName = `${randomUUID()}${ext}`;
                const entryPath = path.join(uploadDir, uniqueName);

                await fs.mkdir(path.dirname(entryPath), { recursive: true });
                await fs.writeFile(entryPath, entry.getData());

                const savedFile = await tenantDb.quoteAttachment.create({
                  data: {
                    quote_id: newQuote.id,
                    file_name: entry.entryName,
                    file_url: uniqueName,
                  },
                });

                savedFiles.push(savedFile);
              }
            })
          );
        } else {
          // Case 2: Save normal file
          const ext = path.extname(file.name);
          const uniqueName = `${randomUUID()}${ext}`;
          const filePath = path.join(uploadDir, uniqueName);

          await fs.writeFile(filePath, buffer);

          const savedFile = await tenantDb.quoteAttachment.create({
            data: {
              quote_id: newQuote.id,
              file_name: file.name,
              file_url: uniqueName,
            },
          });

          savedFiles.push(savedFile);
        }
      })
    );

    return NextResponse.json({
      message: "Quote created & files uploaded successfully.",
      quote: newQuote,
      attachments: savedFiles,
    });
  } catch (err) {
    console.error("File upload error:", err);
    return NextResponse.json(
      { error: "Upload failed", details: err.message },
      { status: 500 }
    );
  }
}

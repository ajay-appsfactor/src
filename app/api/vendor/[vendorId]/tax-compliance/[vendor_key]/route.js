import { NextResponse } from "next/server";
import { headers } from "next/headers";
import { getTenantDb } from "@/lib/db/getTenantClient";
import { superAdminDb } from "@/lib/db/superadmin";
import { getTenantDbFromHeaders } from "@/lib/db/getTenantDbFromRequest";
import { randomUUID } from "crypto";
import path from "path";
import fs from "fs/promises";

// Helper: Get tenant Prisma
async function getTenantPrisma() {
  const headersList = await headers();
  const host = headersList.get("host") || "";
  const subdomain = host.split(".")[0];

  const company = await superAdminDb.company.findUnique({
    where: { sub_domain: subdomain },
  });

  if (!company) {
    throw new Error("Company not found.");
  }

  return getTenantDb(company.db_url);
}

// Put Method
export async function PUT(req, { params }) {
  try {
    const { vendor_key, vendorId } = await params;

    // console.log("vendor id :", vendor_key, "vendor_id :", vendorId);
    const {tenantDb} = await getTenantDbFromHeaders();

    const headersList = await headers();
    const host = headersList.get("host") || "";

    // Handle localhost (remove port if present)
    const subdomain = host.split(".")[0];

    const record = await tenantDb.vendorTaxCompliance.findUnique({
      where: { id: vendor_key },
    });
    if (!record) {
      return NextResponse.json({ error: "Record not found." }, { status: 404 });
    }

    const formData = await req.formData();

    const taxNumber = formData.get("tax_number") || null;
    const vatNumber = formData.get("vat_number") || null;
    const companyNumber = formData.get("company_number") || null;
    const complianceType = formData.get("compliance_type") || null;

    const files = formData.getAll("files");

    let fileName = record.file_name;
    let fileUrl = record.file_url;

    if (files.length > 0 && typeof files[0] === "object" && files[0].size > 0) {
      // delete old file
      if (fileUrl) {
        const oldPath = path.join(
          process.cwd(),
          process.env.NODE_ENV === "production" ? "uploads" : "public/uploads",
          subdomain,
          "vendors",
          "tax-attachments",
          vendorId,
          fileUrl
        );
        try {
          await fs.unlink(oldPath);
        } catch {
          console.warn("Old file not found for deletion");
        }
      }

      const file = files[0];
      fileName = file.name;
      const buffer = Buffer.from(await file.arrayBuffer());

      const uploadsDir = path.join(
        process.cwd(),
        process.env.NODE_ENV === "production" ? "uploads" : "public/uploads",
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

    const updated = await tenantDb.vendorTaxCompliance.update({
      where: { id: vendor_key },
      data: {
        tax_number: taxNumber,
        vat_number: vatNumber,
        company_number: companyNumber,
        compliance_type: complianceType,
        file_name: fileName,
        file_url: fileUrl,
      },
    });

    return NextResponse.json(updated, { status: 200 });
  } catch (error) {
    // console.error("Error updating tax compliance:", error);
    return NextResponse.json(
      { error: "Failed to update tax compliance." },
      { status: 500 }
    );
  }
}

// DELETE
export async function DELETE(req, { params }) {
  try {
    const { vendor_key, vendorId } = await params;

    // console.log("Delete vendor id :", vendor_key, "Delete vendor_id :", vendorId);
    const {tenantDb} = await getTenantDbFromHeaders();

    const headersList = await headers();
    const host = headersList.get("host") || "";

    // Handle localhost (remove port if present)
    const subdomain = host.split(".")[0];

    // Check Vendor exists
    const vendor = await tenantDb.vendor.findUnique({
      where: { id: vendorId },
    });

    if (!vendor) {
      return NextResponse.json({ error: "Vendor not found." }, { status: 404 });
    }

    const record = await tenantDb.vendorTaxCompliance.findUnique({
      where: { id: vendor_key },
    });
    if (!record) {
      return NextResponse.json({ error: "Record not found." }, { status: 404 });
    }

    const uploadsDir = path.join(
      process.cwd(),
      process.env.NODE_ENV === "production" ? "uploads" : "public/uploads",
      subdomain,
      "vendors",
      "tax-attachments",
      record.vendor_id
    );

    if (record.file_url) {
      const filePath = path.join(uploadsDir, record.file_url);
      try {
        await fs.unlink(filePath);
      } catch {
        console.warn("File already deleted or not found.");
      }
    }

    await tenantDb.vendorTaxCompliance.delete({ where: { id: vendor_key } });

    return NextResponse.json({ message: "Record deleted." }, { status: 200 });
  } catch (error) {
    // console.error("Error deleting tax compliance:", error);
    return NextResponse.json(
      { error: "Failed to delete tax compliance." },
      { status: 500 }
    );
  }
}

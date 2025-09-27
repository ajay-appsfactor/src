import { existsSync } from "fs";
import { join, extname } from "path";
import { NextResponse } from "next/server";
import { randomUUID } from "crypto";
import { unlink, mkdir, writeFile } from "fs/promises";
import { headers } from "next/headers";
import { superAdminDb } from "@/lib/db/superadmin";
import { getTenantDbFromHeaders } from "@/lib/db/getTenantDbFromRequest";

//  Get subdomain from headers
async function getSubdomainFromHeaders() {
  const headersList = await headers();
  const host = headersList.get("host") || "";
  return host.split(".")[0];
}

// Update Attachments
export async function PUT(req, { params }) {
  const { customerId, customer_key } = await params;

  try {
    const subdomain = await getSubdomainFromHeaders();

    // Get company from Super Admin DB
    // const company = await superAdminDb.company.findUnique({
    //   where: { sub_domain: subdomain },
    // });
    // if (!company) {
    //   return NextResponse.json({ error: "Company not found" }, { status: 404 });
    // }

    // Get tenant DB client
      const { tenantDb, timezone } = await getTenantDbFromHeaders();

    // Check if customer exists
    const existingCustomer = await tenantDb.customer.findUnique({
      where: { id: customerId },
    });
    if (!existingCustomer) {
      return NextResponse.json(
        { error: "Customer not found." },
        { status: 404 }
      );
    }

    // Check if block exists
    const existingBlock = await tenantDb.customerNotesAndAttachments.findUnique(
      {
        where: { id: customer_key },
      }
    );
    if (!existingBlock) {
      return NextResponse.json(
        { error: "Attachment block not found." },
        { status: 404 }
      );
    }

    const formData = await req.formData();
    const internal_notes = formData.get("internal_notes") || "";
    const rawTags = formData.get("tags");
    const file = formData.get("files");

    let tags = [];
    try {
      tags = rawTags ? JSON.parse(rawTags) : [];
    } catch {
      tags = [];
    }

    let file_url = existingBlock.file_url;
    let file_name = existingBlock.file_name;

    // Handle new file upload (optional)
    if (file && typeof file !== "string" && file.size > 0) {
      const baseUploadFolder =
        process.env.NODE_ENV === "production" ? "uploads" : "public/uploads";

      const uploadDir = join(
        process.cwd(),
        baseUploadFolder,
        subdomain,
        "customers",
        "attachment-notes",
        customerId
      );

      if (!existsSync(uploadDir)) {
        await mkdir(uploadDir, { recursive: true });
      }

      // Delete old file if exists
      if (existingBlock.file_url) {
        const oldFilePath = join(uploadDir, existingBlock.file_url);
        try {
          await unlink(oldFilePath);
        } catch {
          console.warn("Old file not found for deletion:", oldFilePath);
        }
      }

      // Save new file
      const buffer = Buffer.from(await file.arrayBuffer());
      const ext = extname(file.name).toLowerCase();
      const encryptedName = `${randomUUID()}${ext}`;
      const filePath = join(uploadDir, encryptedName);

      await writeFile(filePath, buffer);
      file_url = encryptedName;
      file_name = file.name;
    }

    // Validation
    if (!internal_notes && tags.length === 0 && !file_url) {
      return NextResponse.json({ error: "No data provided." }, { status: 400 });
    }

    // Update DB
    const updated = await tenantDb.customerNotesAndAttachments.update({
      where: { id: customer_key },
      data: {
        internal_notes,
        tags,
        file_url,
        file_name,
      },
    });

    return NextResponse.json(
      {
        message: "Attachment updated successfully.",
        id: updated.id,
        file_url: updated.file_url,
        file_name: updated.file_name,
        created_at: updated.created_at,
        updated_at: updated.updated_at,
        internal_notes: updated.internal_notes,
        tags: updated.tags,
      },
      { status: 200 }
    );
  } catch (err) {
    // console.error("Update Error:", err);
    return NextResponse.json(
      { error: "Failed to update attachment." },
      { status: 500 }
    );
  }
}

// Delete Attachments
export async function DELETE(req, { params }) {
  const { customerId, customer_key } = await params;

  try {
    const subdomain = await getSubdomainFromHeaders();

    const company = await superAdminDb.company.findUnique({
      where: { sub_domain: subdomain },
    });
    if (!company) {
      return NextResponse.json({ error: "Company not found." }, { status: 404 });
    }

    const { tenantDb, timezone } = await getTenantDbFromHeaders();

    // Fetch attachments for the customer_key
    const attachments = await tenantDb.customerNotesAndAttachments.findMany({
      where: { id: customer_key },
    });

    // Delete files from disk
    for (const attachment of attachments) {
      if (attachment.file_url) {
        const baseUploadFolder =
          process.env.NODE_ENV === "production" ? "uploads" : "public/uploads";

        const filePath = join(
          process.cwd(),
          baseUploadFolder,
          subdomain,
          "customers",
          "attachment-notes",
          customerId,
          attachment.file_url
        );
        try {
          await unlink(filePath);
        } catch {
          console.warn(`File not found or already deleted: ${filePath}`);
        }
      }
    }

    // Delete DB records
    await tenantDb.customerNotesAndAttachments.deleteMany({
      where: { id: customer_key },
    });

    return NextResponse.json(
      { message: "All customer attachments and notes deleted." },
      { status: 200 }
    );
  } catch (err) {
    // console.error("Delete Error:", err);
    return NextResponse.json(
      { error: "Failed to delete attachments and files." },
      { status: 500 }
    );
  }
}

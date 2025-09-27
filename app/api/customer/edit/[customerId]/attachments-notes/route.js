import { mkdir, writeFile } from "fs/promises";
import { existsSync } from "fs";
import { join, extname } from "path";
import { randomUUID } from "crypto";
import { NextResponse } from "next/server";
import { headers } from "next/headers";
import { superAdminDb } from "@/lib/db/superadmin";
import { getTenantDbFromHeaders } from "@/lib/db/getTenantDbFromRequest";

export const config = {
  api: {
    bodyParser: false,
  },
};

// Get Attachments & Notes Data
export async function GET(req, { params }) {
  const { customerId } = await params;
  // const prisma = await getTenantDbFromHeaders();
  const { tenantDb, timezone } = await getTenantDbFromHeaders();
  const checkCustomer = await tenantDb.customer.findUnique({
    where: { id: customerId },
  });

  if (!checkCustomer)
    return NextResponse.json({ error: "Customer not found" }, { status: 404 });

  const data = await tenantDb.customerNotesAndAttachments.findMany({
    orderBy: { created_at: "desc" },
  });

  // console.log("customer backend data :", data);

  return NextResponse.json(data);
}

// Post Attachments & Notes Data
export async function POST(req, { params }) {
  const { customerId } = await params;

  try {
    // Detect subdomain
    const headersList = await headers();
    const host = headersList.get("host") || "";
    const subdomain = host.split(".")[0];

    // Get company from Super Admin DB
    const company = await superAdminDb.company.findUnique({
      where: { sub_domain: subdomain },
    });

    if (!company) {
      return NextResponse.json({ error: "Company not found" }, { status: 404 });
    }

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

    // Read form data
    const formData = await req.formData();
    const internal_notes = formData.get("internal_notes");
    const rawTags = formData.get("tags");
    const file = formData.get("files");

    let tags = [];
    try {
      tags = rawTags ? JSON.parse(rawTags) : [];
    } catch {
      tags = [];
    }

    let file_url = null;
    let file_name = null;

    // Handle file upload
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

    const internalNotesValue = internal_notes?.trim() || null;
    const tagsValue = tags.length > 0 ? tags : [];

    // Save in tenant DB
    await tenantDb.customerNotesAndAttachments.create({
      data: {
        customer_id: customerId,
        internal_notes: internalNotesValue,
        tags: tagsValue,
        file_url,
        file_name,
      },
    });

    return NextResponse.json(
      {
        message: "Attachment saved.",
      },
      { status: 200 }
    );
  } catch (err) {
    // console.error("Upload Error:", err);
    return NextResponse.json(
      { error: "Failed to save attachment." },
      { status: 500 }
    );
  }
}

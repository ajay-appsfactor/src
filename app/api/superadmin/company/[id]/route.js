import { NextResponse } from "next/server";
import { superAdminDb } from "@/lib/db/superadmin";
import { randomUUID } from "crypto";
import { mkdir, writeFile, unlink } from "fs/promises";
import { existsSync } from "fs";
import { join, extname } from "path";

export async function PATCH(req, { params }) {
  const { id } = await params;
  try {
    const body = await req.json();
    const updated = await superAdminDb.company.update({
      where: { id },
      data: {
        company_name: body.company_name,
        sub_domain: body.sub_domain,
        is_active: body.is_active,
      },
    });
    return NextResponse.json({ success: true, data: updated });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to update company" },
      { status: 500 }
    );
  }
}

// Update Company
export async function PUT(req, { params }) {
  try {
    const { id } = await params;

    // Parse form data
    const formData = await req.formData();
    const company_name = formData.get("company_name");
    const company_logo = formData.get("company_logo");
    const currency_symbol = formData.get("currency_symbol");
    const currency_code = formData.get("currency_code");
    const timezone = formData.get("timezone");
    const sub_domain = formData.get("sub_domain");

    // Find company by ID
    const existingCompany = await superAdminDb.company.findUnique({
      where: { id },
    });

    if (!existingCompany) {
      return NextResponse.json(
        { success: false, message: "Company not found." },
        { status: 404 }
      );
    }

    // File handling
    let file_url = existingCompany.company_logo || null;
    let file_name = existingCompany.logo_name || null;
    let file_size = existingCompany.logo_size || null;

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
      if (!existsSync(uploadDir)) await mkdir(uploadDir, { recursive: true });

      if (file_url) {
        const oldPath = join(uploadDir, file_url);
        if (existsSync(oldPath)) {
          try {
            await unlink(oldPath);
          } catch (err) {
            console.warn("Old logo deletion failed:", err.message);
          }
        }
      }

      const buffer = Buffer.from(await company_logo.arrayBuffer());
      const ext = extname(company_logo.name).toLowerCase();
      const encryptedName = `${randomUUID()}${ext}`;
      const filePath = join(uploadDir, encryptedName);

      await writeFile(filePath, buffer);

      file_url = encryptedName;
      file_name = company_logo.name;
      file_size = company_logo.size;
    }

    // Update company in SuperAdmin DB
    await superAdminDb.company.update({
      where: { id: existingCompany.id },
      data: {
        company_name,
        currency_code,
        currency_symbol,
        timezone,
        company_logo: file_url,
        logo_name: file_name,
        logo_size: file_size,
      },
    });

    return NextResponse.json({
      success: true,
      message: "Company updated successfully.",
      // company: updatedCompany,
    });
  } catch (error) {
    // console.error("Error updating general settings:", error);
    return NextResponse.json(
      { success: false, message: error.message || "Internal Server Error" },
      { status: 500 }
    );
  }
}

// Get Single Company
export async function GET(req, { params }) {
  try {
    const { id } = await params;

    const company = await superAdminDb.company.findUnique({
      where: { id },
      select: {
        id: true,
        company_name: true,
        sub_domain: true,
        currency_code: true,
        currency_symbol: true,
        timezone: true,
        company_logo: true,
        logo_name: true,
        logo_size: true,
      },
    });

    if (!company) {
      return NextResponse.json(
        { success: false, message: "Company not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true, data: company }, { status: 200 });
  } catch (error) {
    // console.error("Get company error:", error);
    return NextResponse.json(
      { success: false, message: "Failed to fetch company" },
      { status: 500 }
    );
  }
}

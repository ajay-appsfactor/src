import { superAdminDb } from "@/lib/db/superadmin";
import { NextResponse } from "next/server";
import { randomUUID } from "crypto";
import { mkdir, writeFile, unlink } from "fs/promises";
import { existsSync } from "fs";
import { join, extname } from "path";
import { getTenantDbFromHeaders } from "@/lib/db/getTenantDbFromRequest";

// GET Company Details
export async function GET(req) {
  try {
    const host = req.headers.get("host");
    const subDomain = host.split(".")[0];

    if (
      !subDomain ||
      subDomain === "www" ||
      subDomain === process.env.ROOT_DOMAIN
    ) {
      return NextResponse.json(
        { success: false, message: "Invalid subdomain." },
        { status: 400 }
      );
    }

    // Fetch company from SuperAdmin DB
    const company = await superAdminDb.company.findUnique({
      where: { sub_domain: subDomain },
      select: {
        company_name: true,
        sub_domain: true,
        company_logo: true,
        logo_name: true,
        logo_size: true,
        currency_code: true,
        currency_symbol: true,
        timezone: true,
      },
    });

    if (!company) {
      return NextResponse.json(
        { success: false, message: "Company not found." },
        { status: 404 }
      );
    }

    // Fetch user info from tenant DB
    const { tenantDb } = await getTenantDbFromHeaders();
    const user = await tenantDb.user.findFirst({
      select: {
        first_name: true,
        last_name: true,
        phone: true,
      },
    });

    return NextResponse.json({
      success: true,
      company: {
        ...company,
        ...user,
      },
    });
  } catch (error) {
    // console.error("Error fetching company:", error);
    return NextResponse.json(
      { success: false, message: "Internal server error" },
      { status: 500 }
    );
  }
}

// Update Company Details
export async function PUT(req) {
  try {
    const host = req.headers.get("host");
    const subDomain = host.split(".")[0];

    if (
      !subDomain ||
      subDomain === "www" ||
      subDomain === process.env.ROOT_DOMAIN
    ) {
      return NextResponse.json(
        { success: false, message: "Invalid subdomain." },
        { status: 400 }
      );
    }

    // Find company in SuperAdmin DB
    const existingCompany = await superAdminDb.company.findUnique({
      where: { sub_domain: subDomain },
    });

    if (!existingCompany) {
      return NextResponse.json(
        { success: false, message: "Company not found." },
        { status: 404 }
      );
    }

    // Parse form data
    const formData = await req.formData();
    const company_name = formData.get("company_name");
    const company_logo = formData.get("company_logo");
    const currency_symbol = formData.get("currency_symbol");
    const currency_code = formData.get("currency_code");
    const timezone = formData.get("timezone");

    // File handling
    let file_url = existingCompany.company_logo || null;
    let file_name = existingCompany.logo_name || null;
    let file_size = existingCompany.logo_size || null;

    if (
      company_logo &&
      typeof company_logo !== "string" &&
      company_logo.size > 0
    ) {
      const baseUploadFolder =
        process.env.NODE_ENV === "production" ? "uploads" : "public/uploads";

      const uploadDir = join(
        process.cwd(),
        baseUploadFolder,
        subDomain,
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
    const updatedCompany = await superAdminDb.company.update({
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
      message: "General settings updated successfully.",
      company: updatedCompany,
    });
  } catch (error) {
    // console.error("Error updating general settings:", error);
    return NextResponse.json(
      { success: false, message: error.message || "Internal Server Error" },
      { status: 500 }
    );
  }
}

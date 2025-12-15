import { NextResponse } from "next/server";
import AdmZip from "adm-zip";
import fs from "fs/promises";
import path from "path";
import { existsSync } from "fs";
import { headers } from "next/headers";
import { randomUUID } from "crypto";

import { superAdminDb } from "@/lib/db/superadmin";
import { getTenantDbFromHeaders } from "@/lib/db/getTenantDbFromRequest";

export async function POST(req, { params }) {
  const { quoteId } = await params;

  try {
    /* ------------------ Form Data ------------------ */
    const formData = await req.formData();
    const files = formData.getAll("files");

    if (!files || files.length === 0) {
      return NextResponse.json(
        { error: "No files uploaded." },
        { status: 400 }
      );
    }

    /* ------------------ Subdomain ------------------ */
    const headersList = await headers();
    const host = headersList.get("host") || "";
    const subdomain = host.split(".")[0];

    if (!subdomain) {
      return NextResponse.json(
        { error: "Company not identified." },
        { status: 400 }
      );
    }

    /* ------------------ Company ------------------ */
    const company = await superAdminDb.company.findUnique({
      where: { sub_domain: subdomain },
    });

    if (!company) {
      return NextResponse.json(
        { error: "Company not found." },
        { status: 404 }
      );
    }

    /* ------------------ Tenant DB ------------------ */
    const { tenantDb } = await getTenantDbFromHeaders();

    /* ------------------ Quote Check ------------------ */
    const quote = await tenantDb.quote.findUnique({
      where: { id: quoteId },
      select: {
        id: true,
        created_year: true,
        created_month: true,
      },
    });

    if (!quote) {
      return NextResponse.json(
        { error: "Quote not found." },
        { status: 404 }
      );
    }

    /* ------------------ Upload Path ------------------ */
    const baseUploadPath =
      process.env.NODE_ENV === "production"
        ? path.join(process.cwd(), "uploads")
        : path.join(process.cwd(), "public", "uploads");

    const uploadDir = path.join(
      baseUploadPath,
      subdomain,
      "quote",
      quote.created_year,
      quote.created_month,
      quote.id
    );

    if (!existsSync(uploadDir)) {
      await fs.mkdir(uploadDir, { recursive: true });
    }

    const savedItems = [];

    /* ------------------ File Processing ------------------ */
    await Promise.all(
      files.map(async (file) => {
        const buffer = Buffer.from(await file.arrayBuffer());

        // -------- ZIP FILE --------
        if (file.name.endsWith(".zip")) {
          const zip = new AdmZip(buffer);
          const entries = zip.getEntries();

          await Promise.all(
            entries.map(async (entry) => {
              if (entry.isDirectory) return;

              const ext = path.extname(entry.entryName);
              const uniqueName = `${randomUUID()}${ext}`;
              const filePath = path.join(uploadDir, uniqueName);

              await fs.writeFile(filePath, entry.getData());

              const item = await tenantDb.quoteItem.create({
                data: {
                  quote_id: quote.id,
                  file_name: entry.entryName,
                  file_url: uniqueName,
                },
              });

              savedItems.push(item);
            })
          );
        }

        // -------- NORMAL FILE --------
        else {
          const ext = path.extname(file.name);
          const uniqueName = `${randomUUID()}${ext}`;
          const filePath = path.join(uploadDir, uniqueName);

          await fs.writeFile(filePath, buffer);

          const item = await tenantDb.quoteItem.create({
            data: {
              quote_id: quote.id,
              file_name: file.name,
              file_url: uniqueName,
            },
          });

          savedItems.push(item);
        }
      })
    );

    /* ------------------ Response ------------------ */
    return NextResponse.json({
      message: "Items added to quote successfully.",
      quote_id: quote.id,
    });
  } catch (error) {
    // console.error("Add Quote Item Error:", error);

    return NextResponse.json(
      {
        error: "Failed to add items to quote",
        details: error.message,
      },
      { status: 500 }
    );
  }
}

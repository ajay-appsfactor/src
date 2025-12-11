import { NextResponse } from "next/server";
import * as XLSX from "xlsx";
import { hashPassword } from "@/utils/hashPassword";
import Papa from "papaparse";
import { getTenantDbFromHeaders } from "@/lib/db/getTenantDbFromRequest";

const normalize = (val) => {
  if (val === undefined || val === null) return "";
  return String(val).trim();
};

export async function POST(req) {
  try {
    // Get tenant-specific Prisma client
    const {tenantDb} = await getTenantDbFromHeaders();

    const formData = await req.formData();
    const file = formData.get("file");

    if (!file) {
      return NextResponse.json({ error: "No file uploaded" }, { status: 400 });
    }

    const mapping = JSON.parse(formData.get("mapping")); 
    const ext = file.name.split(".").pop().toLowerCase();
    const buffer = Buffer.from(await file.arrayBuffer());

    let rows = [];

    if (ext === "csv") {
      const text = buffer.toString();
      const parsed = Papa.parse(text, { header: true });
      rows = parsed.data;
    } else if (["xlsx", "xls"].includes(ext)) {
      const workbook = XLSX.read(buffer, { type: "buffer" });
      const sheet = workbook.Sheets[workbook.SheetNames[0]];
      rows = XLSX.utils.sheet_to_json(sheet);
    } else {
      return NextResponse.json({ error: "Unsupported file format" }, { status: 400 });
    }

    const data = [];

    for (const [index, row] of rows.entries()) {
      const first_name = normalize(row[mapping["First Name"]]);
      const last_name = normalize(row[mapping["Last Name"]]);
      const email = normalize(row[mapping["Email"]]);

      if (!first_name || !last_name || !email) {
        console.warn(`Skipping row ${index + 1}: Missing required fields`);
        continue;
      }

      data.push({
        first_name,
        last_name,
        customer_name: `${first_name} ${last_name}`.trim(),
        email,
        phone: normalize(row[mapping["Phone"]]),
        type: normalize(row[mapping["Type"]]) || "individual",
        website: normalize(row[mapping["Website"]]),
        is_active: normalize(row[mapping["Status"]]) || "Active",
        notes: normalize(row[mapping["Notes"]]),
        password: await hashPassword("Temp1234!"),
      });
    }

    if (data.length === 0) {
      return NextResponse.json({ error: "No valid customer rows to import." }, { status: 400 });
    }

    let importedCount = 0;

    for (const customer of data) {
      await tenantDb.customer.upsert({
        where: { email: customer.email },
        update: {
          first_name: customer.first_name,
          last_name: customer.last_name,
          customer_name: customer.customer_name,
          phone: customer.phone,
          type: customer.type,
          website: customer.website,
          is_active: customer.is_active, // fixed typo
          notes: customer.notes,
        },
        create: customer,
      });
      importedCount++;
    }

    return NextResponse.json({
      success: true,
      message: `${importedCount} customers imported  successfully.`,
    });
  } catch (error) {
    // console.error("IMPORT ERROR:", error);
    return NextResponse.json(
      { error: "Error importing file", details: error.message },
      { status: 500 }
    );
  }
}

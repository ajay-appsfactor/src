import { NextResponse } from "next/server";
import * as XLSX from "xlsx";
import Papa from "papaparse";
import { getTenantDbFromHeaders } from "@/lib/db/getTenantDbFromRequest";
import { hashPassword } from "@/utils/hashPassword";

const normalize = (val) => {
  if (val === undefined || val === null) return "";
  return String(val).trim();
};

export async function POST(req) {
  try {
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

    if (!rows.length) {
      return NextResponse.json({ error: "No rows found in file" }, { status: 400 });
    }

    const tempPassword = "Temp1234!";
    const hashedPassword = await hashPassword(tempPassword);

    let processedCount = 0;

    for (const [index, row] of rows.entries()) {
      const first_name = normalize(row[mapping["First Name"]]);
      const last_name = normalize(row[mapping["Last Name"]]);
      const emailRaw = normalize(row[mapping["Email"]]);
      const email = emailRaw.toLowerCase(); // ✅ lowercase email
      const phone = normalize(row[mapping["Phone"]]);
      const vendor_type = normalize(row[mapping["Type"]]) || "OEM";
      const website = normalize(row[mapping["Website"]]);

      if (!first_name || !last_name || !email) {
        console.warn(`Skipping row ${index + 1}: Missing first name, last name or email`);
        continue;
      }

      await tenantDb.$transaction(async (tx) => {
        // Upsert User
        const user = await tx.user.upsert({
          where: { email },
          update: { first_name, last_name, phone },
          create: {
            first_name,
            last_name,
            email,
            password: hashedPassword,
            phone,
            roles: ["vendor"],
          },
        });

        // Upsert Vendor linked to User
        await tx.vendor.upsert({
          where: { email },
          update: {
            first_name,
            last_name,
            vendor_name: `${first_name} ${last_name}`,
            vendor_type,
            phone,
            website,
          },
          create: {
            first_name,
            last_name,
            vendor_name: `${first_name} ${last_name}`,
            vendor_type,
            email, 
            password: hashedPassword,
            phone,
            website,
            user: { connect: { id: user.id } },
          },
        });
      });

      processedCount++;
    }

    if (processedCount === 0) {
      return NextResponse.json({ error: "No valid vendor rows to import." }, { status: 400 });
    }

    return NextResponse.json({
      success: true,
      message: `${processedCount} vendors (and users) processed successfully.`,
    });
  } catch (error) {
    // console.error("IMPORT ERROR:", error);
    return NextResponse.json(
      { error: "Error importing file", details: error.message },
      { status: 500 }
    );
  }
}

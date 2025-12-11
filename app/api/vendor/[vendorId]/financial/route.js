import { getTenantDbFromHeaders } from "@/lib/db/getTenantDbFromRequest";
import { NextResponse } from "next/server";

export async function PUT(req, { params }) {
  const { vendorId } = await params;
  const body = await req.json();

  try {
    // Get tenant-specific Prisma client
    const {tenantDb} = await getTenantDbFromHeaders();

    // Validate vendor existence
    const vendor = await tenantDb.vendor.findUnique({
      where: { id: vendorId }, 
    });

    if (!vendor) {
      return NextResponse.json({ error: "Vendor not found." }, { status: 404 });
    }

    const {
      bank_name,
      bank_account_number,
      swift_iban_code,
      preferred_currency,
      payment_terms,
      default_tax_rate,
      credit_limit,
    } = body;

    // Required fields validation
    if (
      [bank_name, bank_account_number, swift_iban_code, preferred_currency, payment_terms]
        .some(field => !field || String(field).trim() === "")
    ) {
      return NextResponse.json(
        { error: "Required fields are missing." },
        { status: 400 }
      );
    }

    await tenantDb.vendorFinancial.upsert({
      where: { vendor_id: vendorId },
      update: {
        bank_name,
        bank_account_number,
        swift_iban_code,
        preferred_currency,
        payment_terms,
        default_tax_rate: String(default_tax_rate),
        credit_limit: credit_limit ? parseFloat(credit_limit) : null,
      },
      create: {
        vendor_id: vendorId,
        bank_name,
        bank_account_number,
        swift_iban_code,
        preferred_currency,
        payment_terms,
        default_tax_rate: String(default_tax_rate),
        credit_limit: credit_limit ? parseFloat(credit_limit) : null,
      },
    });

    return NextResponse.json(
      { message: "Payment & Financial Info Saved." },
      { status: 200 }
    );
  } catch (error) {
    // console.error("Vendor Financial PUT Error:", error);
    return NextResponse.json({ error: "Internal server error." }, { status: 500 });
  }
}


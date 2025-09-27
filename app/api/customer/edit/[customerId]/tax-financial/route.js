import { NextResponse } from "next/server";
import { getTenantDbFromHeaders } from "@/lib/db/getTenantDbFromRequest";

export async function PUT(req, { params }) {
  const { customerId } = await params;
  const body = await req.json();
  const {
    tax_number,
    default_tax_rate,
    currency,
    payment_terms,
    credit_limit,
  } = body;

  try {
    // Basic validation
    if (!currency) {
      return NextResponse.json(
        { error: "Missing required fields." },
        { status: 400 }
      );
    }

    const {tenantDb} = await getTenantDbFromHeaders();

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

    // Upsert tax info (create or update)
    await tenantDb.customerTaxInfo.upsert({
      where: { customer_id: customerId },
      update: {
        tax_number,
        default_tax:
          default_tax_rate !== undefined ? Number(default_tax_rate) : null,
        currency,
        payment_terms,
        credit_limit:
          credit_limit !== undefined ? Number(credit_limit) : null,
      },
      create: {
        customer_id: customerId,
        tax_number,
        default_tax:
          default_tax_rate !== undefined ? Number(default_tax_rate) : null,
        currency,
        payment_terms,
        // payment_terms : { id: payment_terms },
        credit_limit:
          credit_limit !== undefined ? Number(credit_limit) : null,
      },
    });

    return NextResponse.json(
      { message: "Tax & Financial Info Saved." },
      { status: 200 }
    );
  } catch (err) {
    // console.error("Update Tax Info Error:", err);
    return NextResponse.json(
      { error: "Failed to update tax info." },
      { status: 500 }
    );
  }
}



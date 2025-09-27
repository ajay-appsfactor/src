import { NextResponse } from "next/server";
import { getTenantDbFromHeaders } from "@/lib/db/getTenantDbFromRequest";

export async function PUT(req, { params }) {
  const { customerId } = await params;
  const body = await req.json();
  // console.log("Operational Body:", body);

  const { delivery_method, quote_format } = body;

  try {
    // Get tenant DB client
    const { tenantDb } = await getTenantDbFromHeaders();

    // Ensure customer exists
    const customer = await tenantDb.customer.findUnique({
      where: { id: customerId },
    });

    if (!customer) {
      return NextResponse.json(
        { error: "Customer not found." },
        { status: 404 }
      );
    }

    // Convert empty fields to null
    const deliveryMethodValue = delivery_method?.trim() || null;
    const quoteFormatValue = quote_format?.trim() || null;

    // Upsert operational info in tenant DB
    await tenantDb.customerOperationalInfo.upsert({
      where: { customer_id: customerId },
      update: {
        delivery_method: deliveryMethodValue,
        quote_format: quoteFormatValue,
      },
      create: {
        customer_id: customerId,
        delivery_method: deliveryMethodValue,
        quote_format: quoteFormatValue,
      },
    });

    return NextResponse.json(
      { message: "Operational Details Saved." },
      { status: 200 }
    );
  } catch (error) {
    // console.error("Update Operational Info Error:", error);
    return NextResponse.json(
      { error: "Failed to update operational details." },
      { status: 500 }
    );
  }
}

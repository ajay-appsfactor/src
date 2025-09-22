import { NextResponse } from "next/server";
import { getTenantDbFromHeaders } from "@/lib/db/getTenantDbFromRequest";

export async function PUT(req, { params }) {
  const { customerId } = await params;
  const body = await req.json();
  // console.log("Operational Body:", body);

  const { delivery_method, quote_format } = body;

  try {
    // Validate required fields
    // if (!delivery_method || !quote_format) {
    //   return NextResponse.json(
    //     { error: "Missing required fields." },
    //     { status: 400 }
    //   );
    // }

    // Get tenant DB client
    const tenantDb =  await getTenantDbFromHeaders();

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

    // Upsert operational info in tenant DB
    await tenantDb.customerOperationalInfo.upsert({
      where: { customer_id: customerId },
      update: {
        delivery_method,
        quote_format,
      },
      create: {
        customer_id: customerId,
        delivery_method,
        quote_format 
      },
    });

    return NextResponse.json(
      { message: "Operational Details Saved." },
      { status: 200 }
    );
  } catch (error) {
    console.error("Update Operational Info Error:", error);
    return NextResponse.json(
      { error: "Failed to update operational details." },
      { status: 500 }
    );
  }
}




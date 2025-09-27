import { NextResponse } from "next/server";
import { getTenantDbFromHeaders } from "@/lib/db/getTenantDbFromRequest";

// Get All Address
export async function GET(req, { params }) {
  const { customerId } = await params;

  const { tenantDb } = await getTenantDbFromHeaders();
  const checkCustomer = await tenantDb.customer.findUnique({
    where: { id: customerId },
  });

  if (!checkCustomer)
    return NextResponse.json({ error: "Customer not found." }, { status: 404 });

  const data = await tenantDb.customerAddress.findMany({
    where: { customer_id: customerId },
    orderBy: { created_at: "desc" },
  });

  return NextResponse.json(data);
}

// Post Method
export async function POST(req, { params }) {
  const { customerId } = await params;
  const body = await req.json();

  try {
    // Get tenant DB client
   const { tenantDb } = await getTenantDbFromHeaders();

    //  Validate customer exists
    const existingCustomer = await tenantDb.customer.findUnique({
      where: { id: customerId },
    });
    if (!existingCustomer) {
      return NextResponse.json(
        { error: "Customer not found." },
        { status: 404 }
      );
    }

    //  Check existing addresses for this customer
    const existingAddresses = await tenantDb.customerAddress.findMany({
      where: { customer_id: customerId },
    });

    let isDefault = false;
    if (existingAddresses.length === 0) {
      isDefault = true;
    } else if (body.is_default === true) {
      await tenantDb.customerAddress.updateMany({
        where: {
          customer_id: customerId,
          is_default: true,
        },
        data: { is_default: false },
      });
      isDefault = true;
    }

    // Create address
    await tenantDb.customerAddress.create({
      data: {
        customer_id: customerId,
        billing_address: body.billing_address,
        billing_address2: body.billing_address2?.trim() || null,
        billing_city: body.billing_city,
        billing_state: body.billing_state,
        billing_zip: body.billing_zip,
        billing_country: body.billing_country,

        shipping_address: body.shipping_address,
        shipping_address2: body.shipping_address2?.trim() || null,
        shipping_city: body.shipping_city,
        shipping_state: body.shipping_state,
        shipping_zip: body.shipping_zip,
        shipping_country: body.shipping_country,

        is_default: isDefault,
      },
    });

    return NextResponse.json(
      { message: "Address saved successfully." },
      { status: 201 }
    );
  } catch (err) {
    // console.error("POST address error:", err);
    return NextResponse.json(
      { error: "Failed to create address" },
      { status: 500 }
    );
  }
}

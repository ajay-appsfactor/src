import { NextResponse } from "next/server";
import { getTenantDbFromHeaders } from "@/lib/db/getTenantDbFromRequest";

export async function PUT(req, { params }) {
  try {
    const body = await req.json();
    const { customer_key } = await params;

    // Get tenant DB client
    const { tenantDb } = await getTenantDbFromHeaders();

    // Get current address
    const existingAddress = await tenantDb.customerAddress.findUnique({
      where: { id: customer_key },
    });

    if (!existingAddress) {
      return NextResponse.json({ error: "Address not found" }, { status: 404 });
    }

    //  Prevent unchecking last default
    if (body.is_default === false) {
      const otherDefault = await tenantDb.customerAddress.findFirst({
        where: {
          customer_id: existingAddress.customer_id,
          is_default: true,
          NOT: { id: customer_key },
        },
      });

      if (!otherDefault) {
        return NextResponse.json(
          { error: "At least one default address must remain." },
          { status: 400 }
        );
      }
    }

    //  If setting this as default, unset all others
    if (body.is_default === true) {
      await tenantDb.customerAddress.updateMany({
        where: {
          customer_id: existingAddress.customer_id,
          is_default: true,
          NOT: { id: customer_key },
        },
        data: { is_default: false },
      });
    }

    // Update the address
    const updated = await tenantDb.customerAddress.update({
      where: { id: customer_key },
      data: {
        billing_address: body.billing_address,
        billing_address2: body.billing_address2 ?? "",
        billing_city: body.billing_city,
        billing_state: body.billing_state,
        billing_zip: body.billing_zip,
        billing_country: body.billing_country,

        shipping_address: body.shipping_address,
        shipping_address2: body.shipping_address2 ?? "",
        shipping_city: body.shipping_city,
        shipping_state: body.shipping_state,
        shipping_zip: body.shipping_zip,
        shipping_country: body.shipping_country,

        is_default: body.is_default === true,
      },
    });

    return NextResponse.json(updated);
  } catch (error) {
    // console.error("PUT address error:", error);
    return NextResponse.json(
      { error: "Failed to update address" },
      { status: 500 }
    );
  }
}

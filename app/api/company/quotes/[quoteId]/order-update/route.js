import { NextResponse } from "next/server";
import { getTenantDbFromHeaders } from "@/lib/db/getTenantDbFromRequest";

export async function PUT(req, { params }) {
  try {
    const { quoteId } = await params;
    const { tenantDb } = await getTenantDbFromHeaders();

    const body = await req.json();
    // console.log("Order detail body:", body);

    // Fetch quote + user + customer + default address
    const quote = await tenantDb.quote.findUnique({
      where: { id: quoteId },
      include: {
        User: {
          include: {
            customer: {
              include: {
                addresses: true, 
              },
            },
          },
        },
        QuoteItems: true, 
      },
    });

    if (!quote) {
      return NextResponse.json(
        { success: false, message: "Quote not found" },
        { status: 404 }
      );
    }

    const userId = quote.user?.id;
    const customerId = quote.user?.customer?.id;
    const defaultAddress = quote.user?.customer?.addresses?.find(
      (a) => a.is_default
    );

    // Update Quote (billing/shipping fields)
    await tenantDb.quote.update({
      where: { id: quoteId },
      data: {
        billing_name: body.billing_name,
        billing_email: body.billing_email,
        billing_phone: body.billing_phone,
        billing_address: body.billing_address,
        billing_city: body.billing_city,
        billing_state: body.billing_state,
        billing_zip: body.billing_zip,
        billing_country: body.billing_country,

        shipping_name: body.shipping_name,
        shipping_phone: body.shipping_phone,
        shipping_address: body.shipping_address,
        shipping_city: body.shipping_city,
        shipping_state: body.shipping_state,
        shipping_zip: body.shipping_zip,
        shipping_country: body.shipping_country,
      },
    });

    // Update User
    if (userId) {
      await tenantDb.user.update({
        where: { id: userId },
        data: {
          first_name: body.billing_first_name,
          last_name: body.billing_last_name,
          email: body.billing_email,
          phone: body.billing_phone,
        },
      });
    }

    // Update Customer default address
    if (defaultAddress) {
      await tenantDb.customerAddress.update({
        where: { id: defaultAddress.id },
        data: {
          billing_address: body.billing_address,
          billing_city: body.billing_city,
          billing_state: body.billing_state,
          billing_zip: body.billing_zip,
          billing_country: body.billing_country,

          shipping_address: body.shipping_address,
          shipping_city: body.shipping_city,
          shipping_state: body.shipping_state,
          shipping_zip: body.shipping_zip,
          shipping_country: body.shipping_country,
        },
      });
    }

    return NextResponse.json({
      success: true,
      message: "Order updated successfully.",
    });
  } catch (error) {
    // console.error(error);
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 500 }
    );
  }
}

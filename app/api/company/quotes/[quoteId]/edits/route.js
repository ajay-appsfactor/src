import { NextResponse } from "next/server";
import { getTenantDbFromHeaders } from "@/lib/db/getTenantDbFromRequest";
import { formatDates } from "@/utils/formatDates";

export async function GET(req, { params }) {
  try {
    const { quoteId } = await params;
    const { tenantDb, timezone } = await getTenantDbFromHeaders();

    // const quoteWithItems = await tenantPrisma.quote.findUnique({
    //   where: { id: quoteId },
    // });

    const quoteWithItems = await tenantDb.quote.findUnique({
      where: { id: quoteId },
      select: {
        id: true,
        created_month: true,
        quote_item_id: true,
        created_year: true,
        customer_email: true,
        billing_name: true,
        billing_address: true,
        billing_city: true,
        billing_state: true,
        billing_country: true,
        billing_zip: true,
        billing_phone: true,
        shipping_address: true,
        shipping_city: true,
        shipping_state: true,
        shipping_country: true,
        shipping_zip: true,
        created_at: true,
        QuoteItems: {
          select: {
            id: true,
            file_name: true,
            quantity: true,
            service: true,
            material: true,
            finish: true,
            description:true
          },
        },
      },
    });

    const formattedData = formatDates([quoteWithItems], timezone)[0];

    // console.log("Quote Items get :", quoteWithItems);

    if (!quoteWithItems) {
      return NextResponse.json({ error: "Quote not found." }, { status: 404 });
    }

    return NextResponse.json(formattedData);
  } catch (error) {
    // console.error("Error fetching quote:", error);
    return NextResponse.json(
      { error: "Internal server error." },
      { status: 500 }
    );
  }
}

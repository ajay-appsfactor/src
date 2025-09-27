import { NextResponse } from "next/server";
import { getTenantDbFromHeaders } from "@/lib/db/getTenantDbFromRequest";

export async function GET(req, { params }) {
  try {
    const { quoteId } = await params;
    // console.log("backend data id :", quoteId)
    const {tenantDb} = await getTenantDbFromHeaders();

    const quoteWithItems = await tenantDb.quote.findUnique({
      where: { id: quoteId },
      select: {
        id: true,
        created_month:true,
        quote_item_id: true,
        created_year:true,
        QuoteItems: {
          select: {
            id: true,
            file_name: true,
            quantity: true,
          },
        },
      },
    });

    // console.log("Quote Items get :",quoteWithItems );

    if (!quoteWithItems) {
      return NextResponse.json({ error: "Quote not found." }, { status: 404 });
    }

    return NextResponse.json(quoteWithItems);
  } catch (error) {
    // console.error("Error fetching quote:", error);
    return NextResponse.json({ error: "Internal server error." }, { status: 500 });
  }
}



export async function PUT(req, { params }) {
  const { quoteId } = await params;
  // console.log("Quote ID :", quoteId)

  try {
    const items = await req.json(); 
    // console.log("items :",items)

    const updatePromises = items.map((item) =>
      prisma.quoteItem.update({
        where: { id: item.id },
        data: {
          quantity: item.quantity,
          description: item.description,
          service: item.service,
          material: item.material,
          finish: item.finish,
        },
      })
    );

    await Promise.all(updatePromises);

    return NextResponse.json(
      { success: true, message: "Quote items updated." },
      { status: 200 }
    );
  } catch (err) {
    // console.error(err);
    return NextResponse.json(
      { success: false, message: "Failed to update items" },
      { status: 500 }
    );
  }
}
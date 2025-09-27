import { NextResponse } from "next/server";
import { getTenantDbFromHeaders } from "@/lib/db/getTenantDbFromRequest";

export async function PUT(req, { params }) {
  const { quoteId } = await params;
  // console.log("Quote ID :", quoteId);

  try {
    const body = await req.json();
    const items = body.items || []; 

    // Check quote-items
    const {tenantDb} = await getTenantDbFromHeaders();
    const existingItems = await tenantDb.quoteItem.findMany({
      where: { quote_id: quoteId },
      select: { id: true },
    });

    const existingIds = existingItems.map((i) => i.id);

    const updatePromises = items
      .filter((item) => existingIds.includes(item.id))
      .map((item) =>
        tenantDb.quoteItem.update({
          where: { id: item.id },
          data: {
            quantity: item.quantity,
            description: item.description || null,
            service: item.service || null,
            material: item.material || null ,
            finish: item.finish || null,
            updated_at: new Date(),
          },
        })
      );

    await Promise.all(updatePromises);

    return NextResponse.json(
      { success: true, message: "Quote items updated." },
      { status: 200 }
    );
  } catch (err) {
    // console.error("PUT error:", err);
    return NextResponse.json(
      { success: false, message: "Failed to update items." },
      { status: 500 }
    );
  }
}

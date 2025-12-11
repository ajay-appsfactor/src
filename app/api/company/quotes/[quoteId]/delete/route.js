import { NextResponse } from "next/server";
import { getTenantDbFromHeaders } from "@/lib/db/getTenantDbFromRequest";

export async function DELETE(req, { params }) {
  try {
    const { quoteId } = await params;
    // console.log("backend data id :", quoteId)
    const { tenantDb } = await getTenantDbFromHeaders();

    const quoteData = await tenantDb.quote.findUnique({
      where: { id: quoteId },
      select: {
        user_id: true,
      },
    });

    if (!quoteData) {
      return NextResponse.json({ error: "Quote not found." }, { status: 404 });
    }

    const userId = quoteData.user_id;

    // Soft delete quote
    await tenantDb.quote.update({
      where: { id: quoteId },
      data: {
        is_deleted: true,
        deleted_at: new Date(),
      },
    });

    // Soft delete items
    await tenantDb.quoteItem.updateMany({
      where: { quote_id: quoteId },
      data: { is_deleted: true },
    });

    return NextResponse.json({ message: "Order deleted successfully.", user_id: userId, });
  } catch (error) {
    // console.log(error);
    return NextResponse.json({ error: "Delete error." }, { status: 500 });
  }
}

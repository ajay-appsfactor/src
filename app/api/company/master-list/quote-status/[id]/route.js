import { NextResponse } from "next/server";
import { getTenantDbFromHeaders } from "@/lib/db/getTenantDbFromRequest";

// Fetch Quote Status
export async function PATCH(req, { params }) {
  const { id } = await params;
  try {
    const body = await req.json();
    const {tenantDb} = await getTenantDbFromHeaders();
    const updated = await tenantDb.tenantQuoteStatus.update({
      where: { id },
      data: {
        name: body.name,
        is_active: body.is_active,
      },
    });
    return NextResponse.json({
      success: true,
      data: updated,
      message: "Quote status updated successfully.",
    });
  } catch (error) {
    // console.error(error);
    return NextResponse.json(
      { error: "Failed to update quote status." },
      { status: 500 }
    );
  }
}

// Delete Quote
export async function DELETE(req, { params }) {
  const { id } = await params;
  try {
    const {tenantDb} = await getTenantDbFromHeaders();
    await tenantDb.tenantQuoteStatus.delete({
      where: { id },
    });

    return NextResponse.json({
      success: true,
      message: "Quote status deleted successfully.",
    });
  } catch (error) {
    // console.error("Delete quote error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to delete quote status." },
      { status: 500 }
    );
  }
}

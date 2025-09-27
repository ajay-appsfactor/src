import { NextResponse } from "next/server";
import { getTenantDbFromHeaders } from "@/lib/db/getTenantDbFromRequest";

// Fetch Payment Status
export async function PATCH(req, { params }) {
  const { id } = await params;
  try {
    const body = await req.json();
    const {tenantDb} = await getTenantDbFromHeaders();
    const updated = await tenantDb.tenantOrderStatus.update({
      where: { id },
      data: {
        name: body.name,
        is_active: body.is_active,
      },
    });
    return NextResponse.json({
      success: true,
      data: updated,
      message: "Order status updated successfully.",
    });
  } catch (error) {
    // console.error(error);
    return NextResponse.json(
      { error: "Failed to update order status" },
      { status: 500 }
    );
  }
}

// Delete Payment
export async function DELETE(req, { params }) {
  const { id } = await params;
  try {
    const {tenantDb} = await getTenantDbFromHeaders();
    await tenantDb.tenantOrderStatus.delete({
      where: { id },
    });

    return NextResponse.json({
      success: true,
      message: "Order status deleted successfully.",
    });
  } catch (error) {
    // console.error("Delete payment error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to delete order status." },
      { status: 500 }
    );
  }
}

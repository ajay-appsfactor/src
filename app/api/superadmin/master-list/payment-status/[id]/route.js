import { NextResponse } from "next/server";
import { superAdminDb } from "@/lib/db/superadmin";

// Fetch Payment Status
export async function PATCH(req, { params }) {
  const { id } = await params;
  try {
    const body = await req.json();
    const updated = await superAdminDb.paymentStatus.update({
      where: { id },
      data: {
        name: body.name,
        is_active: body.is_active,
      },
    });
    return NextResponse.json({
      success: true,
      data: updated,
      message: "Payment status updated successfully.",
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to update payment status" },
      { status: 500 }
    );
  }
}

// Delete Payment
export async function DELETE(req, { params }) {
  const { id } = await params;
  try {
    await superAdminDb.paymentStatus.delete({
      where: { id },
    });

    return NextResponse.json({
      success: true,
      message: "Payment status deleted successfully.",
    });
  } catch (error) {
    console.error("DELETE payment error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to delete payment" },
      { status: 500 }
    );
  }
}

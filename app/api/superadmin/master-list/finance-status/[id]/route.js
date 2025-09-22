import { NextResponse } from "next/server";
import { superAdminDb } from "@/lib/db/superadmin";

// Fetch Finance Status
export async function PATCH(req, { params }) {
  const { id } = await params;
  try {
    const body = await req.json();
    const updated = await superAdminDb.financeStatus.update({
      where: { id },
      data: {
        name: body.name,
        is_active: body.is_active,
      },
    });
    return NextResponse.json({
      success: true,
      data: updated,
      message: "Finance status updated successfully.",
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to update finance status" },
      { status: 500 }
    );
  }
}

// Delete Finance
export async function DELETE(req, { params }) {
  const { id } = await params;
  try {
    await superAdminDb.financeStatus.delete({
      where: { id },
    });

    return NextResponse.json({
      success: true,
      message: "Finance status deleted successfully.",
    });
  } catch (error) {
    console.error("Delete finance error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to delete finance status." },
      { status: 500 }
    );
  }
}

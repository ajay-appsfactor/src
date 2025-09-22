import { NextResponse } from "next/server";
import { superAdminDb } from "@/lib/db/superadmin";

// Fetch Quote Status
export async function PATCH(req, { params }) {
  const { id } = await params;
  try {
    const body = await req.json();
    const updated = await superAdminDb.quoteStatus.update({
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
    console.error(error);
    return NextResponse.json(
      { error: "Failed to update quote status" },
      { status: 500 }
    );
  }
}

// Delete Quote
export async function DELETE(req, { params }) {
  const { id } = await params;
  try {
    await superAdminDb.quoteStatus.delete({
      where: { id },
    });

    return NextResponse.json({
      success: true,
      message: "Quote status deleted successfully.",
    });
  } catch (error) {
    console.error("Delete quote error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to delete quote status." },
      { status: 500 }
    );
  }
}

import { NextResponse } from "next/server";
import { superAdminDb } from "@/lib/db/superadmin";

// Fetch Payment Status
export async function PATCH(req, { params }) {
  const { id } =await params;
  try {
    const body = await req.json();
    const updated = await superAdminDb.logisticsStatus.update({
      where: { id },
      data: {
        name: body.name,
        is_active: body.is_active,
      },
    });
    return NextResponse.json({
      success: true,
      data: updated,
      message: "Logistics status updated successfully.",
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to update logistics status" },
      { status: 500 }
    );
  }
}



// Delete Payment 
export async function DELETE(req, { params }) {
  const { id } =  await params;
  try {
    await superAdminDb.logisticsStatus.delete({
      where: { id },
    });

    return NextResponse.json({
      success: true,
      message: "Logistics status deleted successfully.",
    });
  } catch (error) {
    console.error("Delete logistics error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to delete logistics status." },
      { status: 500 }
    );
  }
}
import { NextResponse } from "next/server";
import { superAdminDb } from "@/lib/db/superadmin";

// Update Vendor capabilities Status
export async function PUT(req, { params }) {
  const { id } = await params;
  try {
    const body = await req.json();

    const updated = await superAdminDb.vendor_capabilities.update({
      where: { id },
      data: {
        name: body.name,
        is_active: body.is_active,
      },
    });
    return NextResponse.json({
      success: true,
      data: updated,
      message: "Vendor capabilities status updated successfully.",
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to update vendor capabilities status" },
      { status: 500 }
    );
  }
}

// Delete Vendor capabilities
export async function DELETE(req, { params }) {
  try {
    const { id } = await params;
    if (!id) {
      return NextResponse.json(
        { error: "Vendor capabilities ID is required." },
        { status: 400 }
      );
    }

    await superAdminDb.vendor_capabilities.delete({ where: { id } });

    return NextResponse.json(
      { message: "Vendor capabilities deleted successfully." },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to delete Vendor capabilities" },
      { status: 500 }
    );
  }
}

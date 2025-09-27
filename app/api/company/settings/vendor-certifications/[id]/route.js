import { NextResponse } from "next/server";
import { getTenantDbFromHeaders } from "@/lib/db/getTenantDbFromRequest";

// Update Vendor certification Status
export async function PUT(req, { params }) {
  const { id } = await params;
  try {
    const body = await req.json();

    const {tenantDb} = await getTenantDbFromHeaders();
    const updated = await tenantDb.company_vendor_certifications.update({
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
    // console.error(error);
    return NextResponse.json(
      { error: "Failed to update vendor capabilities status." },
      { status: 500 }
    );
  }
}

// Delete Vendor certification
export async function DELETE(req, { params }) {
  try {
    const { id } = await params;
    if (!id) {
      return NextResponse.json(
        { error: "Vendor certification ID is required." },
        { status: 400 }
      );
    }

    const {tenantDb} = await getTenantDbFromHeaders();
    await tenantDb.company_vendor_certifications.delete({ where: { id } });

    return NextResponse.json(
      { message: "Vendor certification deleted successfully." },
      { status: 200 }
    );
  } catch (error) {
    // console.error(error);
    return NextResponse.json(
      { error: "Failed to delete Vendor certification." },
      { status: 500 }
    );
  }
}

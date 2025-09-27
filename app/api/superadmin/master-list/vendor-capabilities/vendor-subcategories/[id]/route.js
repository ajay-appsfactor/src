import { NextResponse } from "next/server";
import { superAdminDb } from "@/lib/db/superadmin";

// Fetch subcategories for a specific vendor capability
export async function GET(req,{params}) {
     const { id } = await params;
  try {
    const subcategories = await superAdminDb.vendor_capability_sub_categories.findMany({
      where: {
        vendor_capability_id: id,
      },
      orderBy: {
        created_at: "asc"
      },
      select: { id: true, name: true }
    });
    return NextResponse.json({
      success: true,
      data: subcategories,
      message: "Subcategories fetched successfully.",
    });
  } catch (error) {
    // console.error(error);
    return NextResponse.json(
      { success: false, message: "Internal server error" },
      { status: 500 }
    );
  }
}

// Update Vendor Sub-Category
export async function PUT(req, { params }) {
  const { id } = await params;
  const body = await req.json();
  const { subcategories } = body;

  if (!Array.isArray(subcategories)) {
    return NextResponse.json(
      { success: false, message: "Invalid subcategories data" },
      { status: 400 }
    );
  }

  try {
    for (const sub of subcategories) {
      if (sub.id) {
        // Update existing
        await superAdminDb.vendor_capability_sub_categories.update({
          where: { id: sub.id },
          data: { name: sub.name },
        });
      } else {
        // Create new
        await superAdminDb.vendor_capability_sub_categories.create({
          data: { name: sub.name, vendor_capability_id: id },
        });
      }
    }

    const updated = await superAdminDb.vendor_capability_sub_categories.findMany({
      where: { vendor_capability_id: id },
      orderBy: { created_at: "asc" },
    });

    return NextResponse.json({
      success: true,
      data: updated,
      message: "Subcategories updated successfully.",
    });
  } catch (error) {
    // console.error(error);
    return NextResponse.json(
      { success: false, message: "Internal server error." },
      { status: 500 }
    );
  }
}

// Delete Vendor Sub-Category
export async function DELETE(req, { params }) {
  const { id } = await params;

  try {
    await superAdminDb.vendor_capability_sub_categories.delete({
      where: { id },
    });

    return NextResponse.json({
      success: true,
      message: "Subcategory deleted successfully.",
    });
  } catch (error) {
    // console.error(error);
    return NextResponse.json(
      { success: false, message: "Internal server error." },
      { status: 500 }
    );
  }
}
import { NextResponse } from "next/server";
import { getTenantDbFromHeaders } from "@/lib/db/getTenantDbFromRequest";

// Fetch subcategories for a specific vendor capability
export async function GET(req, { params }) {
  const { id } = await params;
  try {
    // Get tenant-specific Prisma client
    const {tenantDb} = await getTenantDbFromHeaders();
    const subcategories =
      await tenantDb.company_vendor_capability_sub_categories.findMany({
        where: {
          vendor_capability_id: id,
        },
        orderBy: {
          created_at: "asc",
        },
        select: { id: true, name: true },
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
      { success: false, message: "Invalid subcategories data." },
      { status: 400 }
    );
  }

  try {
    const {tenantDb} = await getTenantDbFromHeaders();

    for (const sub of subcategories) {
      if (sub.id) {
        // Update existing
        await tenantDb.company_vendor_capability_sub_categories.update({
          where: { id: sub.id },
          data: { name: sub.name },
        });
      } else {
        // Create new
        await tenantDb.company_vendor_capability_sub_categories.create({
          data: { name: sub.name, vendor_capability_id: id },
        });
      }
    }

    const updated = await tenantDb.company_vendor_capability_sub_categories.findMany({
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
    // Get tenant-specific Prisma client
    const {tenantDb} = await getTenantDbFromHeaders();
    await tenantDb.company_vendor_capability_sub_categories.delete({
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

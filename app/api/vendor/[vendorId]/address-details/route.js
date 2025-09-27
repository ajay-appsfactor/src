import { NextResponse } from "next/server";
import { getTenantDbFromHeaders } from "@/lib/db/getTenantDbFromRequest";

export async function PUT(req, { params }) {
  const { vendorId } = await params;
  const body = await req.json();
  const { address_1, address_2, city, state, zip, country } = body;

  try {
    // Get tenant-specific Prisma client
    const { tenantDb } = await getTenantDbFromHeaders();

    // Check if vendor exists in tenant DB
    const vendor = await tenantDb.vendor.findUnique({
      where: { id: vendorId },
    });

    if (!vendor) {
      return NextResponse.json({ error: "Vendor not found." }, { status: 404 });
    }

    // Create or update vendor address
    await tenantDb.vendorAddress.upsert({
      where: { vendor_id: vendorId },
      update: {
        address_1,
        address_2: address_2.trim() || null,
        city,
        state,
        zip,
        country,
      },
      create: {
        vendor_id: vendorId,
        address_1,
        address_2: address_2.trim() || null,
        city,
        state,
        zip,
        country,
      },
    });

    return NextResponse.json(
      { message: "Address saved successfully." },
      { status: 200 }
    );
  } catch (error) {
    // console.error("Vendor address save failed:", error);
    return NextResponse.json(
      { success: false, error: "Internal Server Error." },
      { status: 500 }
    );
  }
}

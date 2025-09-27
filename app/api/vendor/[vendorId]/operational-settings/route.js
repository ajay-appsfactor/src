import { NextResponse } from "next/server";
import { getTenantDbFromHeaders } from "@/lib/db/getTenantDbFromRequest";

export async function PUT(req, { params }) {
  const { vendorId } = await params;
  const {tenantDb} = await getTenantDbFromHeaders();
  const body = await req.json();

  const {
    status,
    shipping_method,
    lead_time,
    minimum_order_quantity,
    categories,
    manager,
  } = body;

  try {
    // Validate vendor existence
    const vendor = await tenantDb.vendor.findUnique({
      where: { id: vendorId },
    });

    // console.log("vendor found :", vendor);

    if (!vendor) {
      return NextResponse.json({ error: "Vendor not found." }, { status: 404 });
    }

    if (!status) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    await tenantDb.vendorOperationalSetting.upsert({
      where: { vendor_id: vendorId },
      update: {
        status,
        shipping_method,
        lead_time: lead_time ? Number(lead_time) : null,
        minimum_order_quantity: minimum_order_quantity
          ? Number(minimum_order_quantity)
          : null,
        categories,
        manager,
      },
      create: {
        status,
        shipping_method,
        lead_time: lead_time ? Number(lead_time) : null,
        minimum_order_quantity: minimum_order_quantity
          ? Number(minimum_order_quantity)
          : null,
        categories,
        manager,
        vendor: {
          connect: { id: vendorId },
        },
      },
    });

    return NextResponse.json(
      { message: "Operational Settings Saved." },
      { status: 200 }
    );
  } catch (error) {
    // console.error("Operational settings error:", error);
    return NextResponse.json(
      { error: "Failed to save vendor operational settings." },
      { status: 500 }
    );
  }
}

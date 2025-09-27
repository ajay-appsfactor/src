import { NextResponse } from "next/server";
import { getTenantDbFromHeaders } from "@/lib/db/getTenantDbFromRequest";

export async function PUT(request, { params }) {
  const { vendorId } = await params;

  const body = await request.json();
  const { contact_name, contact_email, contact_phone, job_title } = body;

  try {
    // Get tenant-specific Prisma client
    const { tenantDb } = await getTenantDbFromHeaders();

    // Basic validation
    if (!contact_name || !contact_email) {
      return NextResponse.json(
        { error: "Missing required fields." },
        { status: 400 }
      );
    }

    // Validate vendor existence
    const vendor = await tenantDb.vendor.findUnique({
      where: { id: vendorId },
    });

    if (!vendor) {
      return NextResponse.json({ error: "Vendor not found." }, { status: 404 });
    }

    // Upsert contact
    await tenantDb.vendorContact.upsert({
      where: { vendor_id: vendorId },
      update: {
        contact_name,
        email: contact_email,
        phone: contact_phone.trim() || null,
        job_title: job_title.trim() || null,
      },
      create: {
        vendor_id: vendorId,
        contact_name,
        email: contact_email,
        phone: contact_phone.trim() || null,
        job_title: job_title.trim() || null,
      },
    });

    return NextResponse.json(
      { message: "Primary Contact Saved." },
      { status: 200 }
    );
  } catch (error) {
    // console.error("Error updating vendor contact:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

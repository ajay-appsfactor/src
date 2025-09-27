import { NextResponse } from "next/server";
import { getTenantDbFromHeaders } from "@/lib/db/getTenantDbFromRequest";

export async function PUT(req, { params }) {
  const { vendorId } = await params;
  const body = await req.json();
  const { notes, tags, score, last_order, next_review } = body;

  try {
    const {tenantDb} = await getTenantDbFromHeaders();

    //  Validate vendor existence
    const vendor = await tenantDb.vendor.findUnique({
      where: { id: vendorId }, 
    });

    if (!vendor) {
      return NextResponse.json({ error: "Vendor not found." }, { status: 404 });
    }

    // Upsert metadata by vendor_id
    await tenantDb.vendorMetadata.upsert({
      where: { vendor_id: vendorId },
      update: {
        notes,
        tags: tags || [],
        score: score ? Number(score) : null,
        last_order: last_order ? new Date(last_order) : null,
        next_review: next_review ? new Date(next_review) : null,
      },
      create: {
        vendor_id: vendorId,
        notes,
        tags: tags || [],
        score: score ? Number(score) : null,
        last_order: last_order ? new Date(last_order) : null,
        next_review: next_review ? new Date(next_review) : null,
      },
    });

    return NextResponse.json(
      { message: "Notes & Metadata Saved." },
      { status: 200 }
    );
  } catch (error) {
    // console.error("Metadata update error:", error);
    return NextResponse.json(
      { error: "Failed to save vendor metadata." },
      { status: 500 }
    );
  }
}


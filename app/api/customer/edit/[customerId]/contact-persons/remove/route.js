import { NextResponse } from "next/server";
import { getTenantDbFromHeaders } from "@/lib/db/getTenantDbFromRequest";

export async function DELETE(req, { params }) {
  const { customerId } = await params;

  // console.log("Customer Contact Key:", customerId);

  try {
     const { tenantDb } = await getTenantDbFromHeaders();
    await tenantDb.customerContact.delete({
      where: { id: customerId },
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    // console.error("Error deleting contact:", err);
    return NextResponse.json(
      { error: "Failed to delete contact" },
      { status: 500 }
    );
  }
}






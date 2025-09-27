import { NextResponse } from "next/server";
import { getTenantDbFromHeaders } from "@/lib/db/getTenantDbFromRequest";

export async function DELETE(req, { params }) {
  const { customerId } = await params;

  try {
    // Get tenant DB client
    const {tenantDb}  = await getTenantDbFromHeaders();

    // Validate address exists
    const existingAddress = await tenantDb.customerAddress.findUnique({
      where: { id: customerId },
    });

    if (!existingAddress) {
      return NextResponse.json({ error: "Address not found" }, { status: 404 });
    }

    // Delete address
    await tenantDb.customerAddress.delete({
      where: { id: customerId },
    });

    // console.log(`Address ${customerId} deleted successfully`);
    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    // console.error("Error deleting address:", error);
    return NextResponse.json(
      { error: "Failed to delete address" },
      { status: 500 }
    );
  }
}

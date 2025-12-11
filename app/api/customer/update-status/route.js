import { NextResponse } from "next/server";
import { getTenantDbFromHeaders } from "@/lib/db/getTenantDbFromRequest";

export async function PUT(req) {
  try {


    // 3. Create tenant-specific Prisma client
    const {tenantDb} = await  getTenantDbFromHeaders();

    // 4. Parse request body
    const { id, status } = await req.json();

    if (typeof id === "undefined" || typeof status === "undefined") {
      return NextResponse.json({ error: "Missing id or status" }, { status: 400 });
    }

    // 5. Update customer status in tenant DB
    await tenantDb.customer.update({
      where: { id: id },
      data: { is_active: status },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    // console.error("Status update error:", error);
    return NextResponse.json({ error: "Failed to update status." }, { status: 500 });
  }
}

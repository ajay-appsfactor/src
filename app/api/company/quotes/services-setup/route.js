import { getTenantDbFromHeaders } from "@/lib/db/getTenantDbFromRequest";
import { NextResponse } from "next/server";

export async function GET() {
  try {

    const {tenantDb} = await getTenantDbFromHeaders();
    const services = await tenantDb.companyService.findMany({
      include: {
        materials: true,
        finishes: true,
      },
    });

    return NextResponse.json({ success: true, data: services });
  } catch (error) {
    // console.error(error);
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 500 }
    );
  }
}

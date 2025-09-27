import { NextResponse } from "next/server";
import { getTenantDbFromHeaders } from "@/lib/db/getTenantDbFromRequest";


export async function GET(req) {
  try {
    const {tenantDb} = await getTenantDbFromHeaders();

    const currencies = await tenantDb.tenantCurrency.findMany({
      where: { is_active: true },
      orderBy: { name: "asc" },
      select: { code: true, name: true, symbol: true },
    });

    return NextResponse.json({ success: true, data: currencies });
  } catch (error) {
    // console.error("Error fetching currencies:", error);
    return NextResponse.json(
      { success: false, error: "Failed to fetch currencies." },
      { status: 500 }
    );
  }
}

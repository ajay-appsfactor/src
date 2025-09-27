import { NextResponse } from "next/server";
import { getTenantDbFromHeaders } from "@/lib/db/getTenantDbFromRequest";

export async function GET(req) {
  try {
    const {tenantDb} = await getTenantDbFromHeaders();

    const terms = await tenantDb.tenantPaymentTerms.findMany({
      where: { is_active: true },
      orderBy: { name: "asc" },
      select: {
        payment_terms_id: true,
        name: true,
        description: true,
        due_days: true,
        discount_days: true,
        discount_percent: true
      },
    });

    return NextResponse.json({ success: true, data: terms });
  } catch (error) {
    // console.error("Error fetching payment terms:", error);
    return NextResponse.json(
      { success: false, error: "Failed to fetch payment terms." },
      { status: 500 }
    );
  }
}

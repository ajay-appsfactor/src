import { NextResponse } from "next/server";
import { getTenantDbFromHeaders } from "@/lib/db/getTenantDbFromRequest";
import { formatDates } from "@/utils/formatDates";

// GET: Fetch all Payment
export async function GET(req) {
  try {
    const { tenantDb , timezone} = await getTenantDbFromHeaders();
    const logistics = await tenantDb.tenantLogisticsStatus.findMany({
      orderBy: { created_at: "desc" },
    });
    const formattedData = formatDates(logistics, timezone);
    return NextResponse.json({ data: formattedData });
  } catch (err) {
    // console.error("Error fetching logistics:", err);
    return NextResponse.json(
      { error: "Internal Server Error." },
      { status: 500 }
    );
  }
}

// POST: Order Status
export async function POST(req) {
  try {
    const body = await req.json();
    const { logistics } = body;

    // Save all payments in a single transaction
    const { tenantDb } = await getTenantDbFromHeaders();
    const createdlogistics = await tenantDb.tenantLogisticsStatus.createMany({
      data: logistics.map((c) => ({
        name: c.name,
      })),
      // skipDuplicates: true,
    });

    return NextResponse.json({
      message: `${createdlogistics.count} logistics status create successfully.`,
    });
  } catch (err) {
    // console.error("Error creating logistics status:", err);
    return NextResponse.json(
      { error: "Internal Server Error." },
      { status: 500 }
    );
  }
}

import { NextResponse } from "next/server";
import { getTenantDbFromHeaders } from "@/lib/db/getTenantDbFromRequest";
import { formatDates } from "@/utils/formatDates";

// GET: Fetch all Payment
export async function GET(req) {
  try {
    const { tenantDb, timezone } = await getTenantDbFromHeaders();
    const finance = await tenantDb.tenantFinanceStatus.findMany({
      orderBy: { created_at: "desc" },
    });
    const formattedData = formatDates(finance, timezone);
    return NextResponse.json({ data: formattedData });
  } catch (err) {
    // console.error("Error fetching finance:", err);
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
    const { finance } = body;

    // Save all payments in a single transaction
    const { tenantDb } = await getTenantDbFromHeaders();
    const createdfinance = await tenantDb.tenantFinanceStatus.createMany({
      data: finance.map((c) => ({
        name: c.name,
      })),
      // skipDuplicates: true,
    });

    return NextResponse.json(
      {
        status: "success",
        message: `${createdfinance.count} finance status created successfully.`,
      },
      { status: 201 }
    );
  } catch (err) {
    // console.error("Error creating finance status:", err);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

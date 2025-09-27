import { NextResponse } from "next/server";
import { getTenantDbFromHeaders } from "@/lib/db/getTenantDbFromRequest";
import { formatDates } from "@/utils/formatDates";

// GET: Fetch all Payment
export async function GET(req) {
  try {
    const { tenantDb, timezone } = await getTenantDbFromHeaders();
    const orders = await tenantDb.tenantOrderStatus.findMany({
      orderBy: { created_at: "desc" },
    });

    const formattedData = formatDates(orders, timezone);
    return NextResponse.json({ data: formattedData });
  } catch (err) {
    // console.error("Error fetching orders:", err);
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
    const { orders } = body;

    // Save all payments in a single transaction
    const { tenantDb } = await getTenantDbFromHeaders();
    const createdOrder = await tenantDb.tenantOrderStatus.createMany({
      data: orders.map((c) => ({
        name: c.name,
      })),
      // skipDuplicates: true,
    });

    return NextResponse.json(
      {
        status: "success",
        message: `${createdOrder.count} order status created successfully.`,
      },
      { status: 201 }
    );
  } catch (err) {
    // console.error("Error creating payments status:", err);
    return NextResponse.json(
      { error: "Internal Server Error." },
      { status: 500 }
    );
  }
}

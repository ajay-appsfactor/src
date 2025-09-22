import { NextResponse } from "next/server";
import { superAdminDb } from "@/lib/db/superadmin";

// GET: Fetch all Payment
export async function GET(req) {
  try {
    const orders = await superAdminDb.orderStatus.findMany({
      orderBy: { created_at: "desc" },
    });
    return NextResponse.json({ data: orders });
  } catch (err) {
    console.error("Error fetching orders:", err);
    return NextResponse.json(
      { error: "Internal Server Error" },
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
    const createdOrder = await superAdminDb.orderStatus.createMany({
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
    console.error("Error creating payments status:", err);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

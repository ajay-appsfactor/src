import { NextResponse } from "next/server";
import { superAdminDb } from "@/lib/db/superadmin";

// GET: Fetch all Payment
export async function GET(req) {
  try {


    const  payments= await superAdminDb.paymentStatus.findMany({
      orderBy: { created_at: "desc" },
    });
    return NextResponse.json({ data: payments });
  } catch (err) {
    console.error("Error fetching payments:", err);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}



// POST: Payments
export async function POST(req) {
  try {
    const body = await req.json();
    const { payments } = body;

    // Save all payments in a single transaction
    const createdPayments = await superAdminDb.paymentStatus.createMany({
      data: payments.map((c) => ({
        name: c.name,
      })),
      // skipDuplicates: true,
    });

     return NextResponse.json(
      {
        status: "success",
        message: `${createdPayments.count} payment status created successfully.`,
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

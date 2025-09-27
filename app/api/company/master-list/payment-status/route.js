import { NextResponse } from "next/server";
import { getTenantDbFromHeaders } from "@/lib/db/getTenantDbFromRequest";
import { formatDates } from "@/utils/formatDates";

// GET: Fetch all Payment
export async function GET(req) {
  try {
    const {tenantDb, timezone} = await getTenantDbFromHeaders();
    const payments = await tenantDb.tenantPaymentStatus.findMany({
      orderBy: { created_at: "desc" },
    });
        const formattedData = formatDates(payments, timezone);
    return NextResponse.json({ data: formattedData });
  } catch (err) {
    // console.error("Error fetching payments:", err);
    return NextResponse.json(
      { error: "Internal Server Error." },
      { status: 500 }
    );
  }
}

// POST: Payments
export async function POST(req) {
  try {
    const body = await req.json();
    const { payments } = body;

    const {tenantDb} = await getTenantDbFromHeaders();
    // Save all payments in a single transaction
    const createdPayments = await tenantDb.tenantPaymentStatus.createMany({
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
    // console.error("Error creating payments status:", err);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

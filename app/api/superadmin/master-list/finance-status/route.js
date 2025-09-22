import { NextResponse } from "next/server";
import { superAdminDb } from "@/lib/db/superadmin";

// GET: Fetch all Payment
export async function GET(req) {
  try {
    const finance = await superAdminDb.financeStatus.findMany({
      orderBy: { created_at: "desc" },
    });
    return NextResponse.json({ data: finance });
  } catch (err) {
    console.error("Error fetching finance:", err);
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
    const { finance } = body;

    // Save all payments in a single transaction
    const createdfinance = await superAdminDb.financeStatus.createMany({
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
    console.error("Error creating finance status:", err);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

import { NextResponse } from "next/server";
import { superAdminDb } from "@/lib/db/superadmin";

// GET: Fetch all Payment
export async function GET(req) {
  try {
    const logistics = await superAdminDb.logisticsStatus.findMany({
      orderBy: { created_at: "desc" },
    });
    return NextResponse.json({ data: logistics });
  } catch (err) {
    console.error("Error fetching logistics:", err);
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
    const { logistics } = body;

    // Save all payments in a single transaction
    const createdlogistics = await superAdminDb.logisticsStatus.createMany({
      data: logistics.map((c) => ({
        name: c.name,
      })),
      // skipDuplicates: true,
    });

    return NextResponse.json({
      message: `${createdlogistics.count} logistics status create successfully.`,
    });
  } catch (err) {
    console.error("Error creating logistics status:", err);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

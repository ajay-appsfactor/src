import { NextResponse } from "next/server";
import { superAdminDb } from "@/lib/db/superadmin";

// GET: Fetch all Quote Status
export async function GET(req) {
  try {
    const quote = await superAdminDb.quoteStatus.findMany({
      orderBy: { created_at: "desc" },
    });
    return NextResponse.json({ data: quote }, { status: 200 });
  } catch (err) {
    console.error("Error fetching quote:", err);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

// POST: Quote Status
export async function POST(req) {
  try {
    const body = await req.json();
    const { quote } = body;

    // Save all payments in a single transaction
    const createdQuote = await superAdminDb.quoteStatus.createMany({
      data: quote.map((c) => ({
        name: c.name,
      })),
      // skipDuplicates: true,
    });

    return NextResponse.json(
      {
        status: "success",
        message: `${createdQuote.count} quote status created successfully.`,
      },
      { status: 201 }
    );
  } catch (err) {
    console.error("Error creating quote status:", err);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

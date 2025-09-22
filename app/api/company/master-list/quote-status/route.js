import { NextResponse } from "next/server";
import { getTenantDbFromHeaders } from "@/lib/db/getTenantDbFromRequest";
// GET: Fetch all Quote Status
export async function GET(req) {
  try {

    const tenantDb = await getTenantDbFromHeaders();
    const quote = await tenantDb.tenantQuoteStatus.findMany({
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
    const tenantDb = await getTenantDbFromHeaders();
    const createdQuote = await tenantDb.tenantQuoteStatus.createMany({
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

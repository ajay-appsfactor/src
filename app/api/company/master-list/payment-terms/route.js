import { getTenantDbFromHeaders } from "@/lib/db/getTenantDbFromRequest";
import { NextResponse } from "next/server";
import { formatDates } from "@/utils/formatDates";

// GET: Fetch all payment terms
export async function GET() {
  try {
    const { tenantDb, timezone } = await getTenantDbFromHeaders();

    const payment = await tenantDb.tenantPaymentTerms.findMany({
      orderBy: { created_at: "desc" },
    });

    const formattedData = formatDates(payment, timezone);
    return NextResponse.json({ data: formattedData });
  } catch (err) {
    // console.error("Error fetching payment terms:", err);
    return NextResponse.json(
      { error: "Internal Server Error." },
      { status: 500 }
    );
  }
}

function parseNumber(value, fallback = 0) {
  const num = Number(value);
  return isNaN(num) ? fallback : num;
}
// POST: Bulk create payment terms

export async function POST(req) {
  try {
    const body = await req.json();
    const { payment_terms } = body;

    if (!Array.isArray(payment_terms) || payment_terms.length === 0) {
      return NextResponse.json(
        { error: "No payment terms provided." },
        { status: 400 }
      );
    }

    // Clean + validate terms
    const cleanTerms = payment_terms.map((term, index) => {
      if (!term.name || term.name.trim() === "") {
        throw new Error(`Payment term at index ${index} is missing a name`);
      }

      return {
        name: term.name.trim(),
        description: term.description?.trim() || null,
        due_days: parseNumber(term.due_days, 0),
        discount_days: parseNumber(term.discount_days, 0),
        discount_percent: parseNumber(term.discount_percent, 0),
        is_active:
          term.is_active !== undefined ? Boolean(term.is_active) : true,
      };
    });

    const { tenantDb } = await getTenantDbFromHeaders();

    // Bulk insert with duplicate skip
    await tenantDb.tenantPaymentTerms.createMany({
      data: cleanTerms,
      // skipDuplicates: true,
    });

    return NextResponse.json({
      message: "Payment terms saved successfully.",
      count: cleanTerms.length,
    });
  } catch (error) {
    // console.error("Error saving payment terms:", error);
    return NextResponse.json(
      { error: error.message || "Internal Server Error." },
      { status: 500 }
    );
  }
}

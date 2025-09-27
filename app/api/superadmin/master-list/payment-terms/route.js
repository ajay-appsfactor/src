import { superAdminDb } from "@/lib/db/superadmin";
import { NextResponse } from "next/server";

// GET: Fetch all payment terms
export async function GET() {
  try {
    const payment = await superAdminDb.payment_terms.findMany({
      orderBy: { created_at: "desc" },
    });

    return NextResponse.json({ data: payment });
  } catch (err) {
    // console.error("Error fetching payment terms:", err);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

// safe number parser with fallback
function parseNumber(value, fallback = 0) {
  const num = Number(value);
  return isNaN(num) ? fallback : num;
}

// POST:  create payment terms (Super Admin)
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

    // Validate + clean terms
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
        is_active: term.is_active !== undefined ? Boolean(term.is_active) : true,
      };
    });

    // Bulk insert with duplicate skip
    await superAdminDb.payment_terms.createMany({
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

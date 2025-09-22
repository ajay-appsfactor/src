import { getTenantDbFromHeaders } from "@/lib/db/getTenantDbFromRequest";
import { NextResponse } from "next/server";

// GET: Fetch all payment terms
export async function GET() {
  try {
    const tenantDb = await getTenantDbFromHeaders();

    const payment = await tenantDb.tenantPaymentTerms.findMany({
      orderBy: { created_at: "desc" },
    });

    return NextResponse.json({ data: payment });
  } catch (err) {
    console.error("Error fetching payment terms:", err);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

// POST: Bulk create payment terms
export async function POST(req) {
  try {
    const body = await req.json();
    const { payment_terms } = body;

    if (!Array.isArray(payment_terms) || payment_terms.length === 0) {
      return NextResponse.json(
        { error: "No payment terms provided" },
        { status: 400 }
      );
    }

    // Validate each term
    const cleanTerms = payment_terms.map((term, index) => {
      if (!term.name || term.name.trim() === "") {
        throw new Error(`Payment term at index ${index} is missing a name`);
      }

      return {
        name: term.name.trim(),
        description: term.description?.trim() || null,
        due_days:
          term.due_days !== "" && term.due_days != null
            ? Number(term.due_days)
            : 0, // default 0
        discount_days:
          term.discount_days !== "" && term.discount_days != null
            ? Number(term.discount_days)
            : null,
        discount_percent:
          term.discount_percent !== "" && term.discount_percent != null
            ? Number(term.discount_percent)
            : null,
        is_active:
          term.is_active !== undefined ? Boolean(term.is_active) : true,
      };
    });

    const tenantDb = await getTenantDbFromHeaders();

    // Bulk insert with duplicate skip
    await tenantDb.tenantPaymentTerms.createMany({
      data: cleanTerms,
      skipDuplicates: true,
    });

    return NextResponse.json({
      message: "Payment terms saved successfully",
    });
  } catch (error) {
    console.error("Error saving payment terms:", error);
    return NextResponse.json(
      { error: error.message || "Internal Server Error" },
      { status: 500 }
    );
  }
}

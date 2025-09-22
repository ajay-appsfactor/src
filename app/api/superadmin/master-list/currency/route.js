import { NextResponse } from "next/server";
import { superAdminDb } from "@/lib/db/superadmin";

// GET: Fetch all currencies
export async function GET(req) {
  try {


    const currencies = await superAdminDb.currency.findMany({
      orderBy: { name: "asc"  },
    });
    return NextResponse.json({ data: currencies });
  } catch (err) {
    console.error("Error fetching currencies:", err);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}



// POST:  Currency
export async function POST(req) {
  try {
    const body = await req.json();
    const { currencies } = body;

    // Save all currencies in a single transaction
    const createdCurrencies = await superAdminDb.currency.createMany({
      data: currencies.map((c) => ({
        code: c.code,
        name: c.name,
        symbol: c.symbol,
      })),
      // skipDuplicates: true,
    });

    return NextResponse.json({
      message: `${createdCurrencies.count} currencies create successfully.`,
    });
  } catch (err) {
    console.error("Error creating currencies:", err);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

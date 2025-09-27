import { NextResponse } from "next/server";
import { getTenantDbFromHeaders } from "@/lib/db/getTenantDbFromRequest";
import { formatDates } from "@/utils/formatDates";

// GET: Fetch all currencies
export async function GET(req) {
  try {
    const { tenantDb, timezone } = await getTenantDbFromHeaders();

    const currencies = await tenantDb.tenantCurrency.findMany({
      orderBy: { created_at: "desc" },
    });

    const formattedData = formatDates(currencies, timezone);
    return NextResponse.json({ data: formattedData });
  } catch (err) {
    // console.error("Error fetching currencies:", err);
    return NextResponse.json(
      { error: "Internal Server Error." },
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
    const { tenantDb } = await getTenantDbFromHeaders();
    const createdCurrencies = await tenantDb.tenantCurrency.createMany({
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
    // console.error("Error creating currencies:", err);
    return NextResponse.json(
      { error: "Internal Server Error." },
      { status: 500 }
    );
  }
}

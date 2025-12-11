import { NextResponse } from "next/server";
import { formatDates } from "@/utils/formatDates";
import { getTenantDbFromHeaders } from "@/lib/db/getTenantDbFromRequest";

export async function GET(req, { params }) {
  try {
    const { userId } = await params;

    const { tenantDb: tenantPrisma, timezone } = await getTenantDbFromHeaders();

    const { searchParams } = new URL(req.url);

    const page = parseInt(searchParams.get("page") || "1", 10);
    const pageSize = parseInt(searchParams.get("pageSize") || "10", 10);
    const search = searchParams.get("search")?.trim() || "";
    const sort = searchParams.get("sort") || "created_at";
    const order = searchParams.get("order") || "desc";

    const where = {
      AND: [
        { user_id: userId },
         { is_deleted: false },
        search && {
          OR: [
            { billing_name: { contains: search, mode: "insensitive" } },
            { customer_email: { contains: search, mode: "insensitive" } },
            { billing_city: { contains: search, mode: "insensitive" } },
          ],
        },
      ].filter(Boolean),
    };


    const [quotes, totalCount] = await Promise.all([
      tenantPrisma.quote.findMany({
        where,
        skip: (page - 1) * pageSize,
        take: pageSize,
        orderBy: { [sort]: order },
        include: {
          QuoteItems: true,
        },
      }),
      tenantPrisma.quote.count({ where }),
    ]);

    // FORMAT DATES (same as customers API)
    const formattedData = formatDates(quotes, timezone);

    return NextResponse.json({
      data: formattedData,
      totalCount,
    });

  } catch (error) {
    // console.log("Error fetching quotes:", error);
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}



// import { NextResponse } from "next/server";
// import { formatDates } from "@/utils/formatDates";
// import { getTenantDbFromHeaders } from "@/lib/db/getTenantDbFromRequest";

// export async function GET(req, { params }) {
//   try {
//     const { userId } = await params;

    
//     const {tenantDb} = await getTenantDbFromHeaders();

//     const quotes = await tenantDb.quote.findMany({
//       where: { user_id: userId },
//       include: {
//         QuoteItems: true,
//         // User: true, // optional
//       },
//       orderBy: { created_at: "desc" },
//     });

//     console.log("All quotes show :", quotes)

//     return NextResponse.json(quotes);

//   } catch (error) {
//     console.log("Error fetching quotes:", error);
//     return NextResponse.json(
//       { error: "Something went wrong" },
//       { status: 500 }
//     );
//   }
// }

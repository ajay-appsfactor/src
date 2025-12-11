import { NextResponse } from "next/server";
import { formatDates } from "@/utils/formatDates";
import { getTenantDbFromHeaders } from "@/lib/db/getTenantDbFromRequest";

export async function GET(req) {
  try {

    const { tenantDb :tenantPrisma, timezone } = await getTenantDbFromHeaders();
    const { searchParams } = new URL(req.url);

    const page = parseInt(searchParams.get("page") || "1", 10);
    const pageSize = parseInt(searchParams.get("pageSize") || "10", 10);
    const search = searchParams.get("search")?.trim() || "";
    const sort = searchParams.get("sort") || "created_at";
    const order = searchParams.get("order") || "desc";
    const status = searchParams.get("status");

    const where = {
      AND: [
        search && {
          OR: [
            { customer_name: { contains: search, mode: "insensitive" } },
            { email: { contains: search, mode: "insensitive" } },
            { phone: { contains: search, mode: "insensitive" } },
          ],
        },
        status && status !== "all" && { is_active: status },
      ].filter(Boolean),
    };

    const [data, totalCount] = await Promise.all([
      tenantPrisma.customer.findMany({
        where,
        skip: (page - 1) * pageSize,
        take: pageSize,
        orderBy: { [sort]: order },
        select: {
          id: true,
          customer_name: true,
          email: true,
          phone: true,
          created_at: true,
          is_active: true,
          user_id:true
        },
      }),
      tenantPrisma.customer.count({ where }),
    ]);

    const formattedData = formatDates(data, timezone);
    // console.log("formattedData :", formattedData)

    return NextResponse.json({ data: formattedData, totalCount });
  } catch (error) {
    // console.error("GET error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

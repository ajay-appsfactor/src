import { NextResponse } from "next/server";
import { getTenantDbFromHeaders } from "@/lib/db/getTenantDbFromRequest";

export async function GET(req) {
  try {
    // Create tenant Prisma client dynamically
    const prisma =  await getTenantDbFromHeaders();

    const { searchParams } = new URL(req.url);
    const page = parseInt(searchParams.get("page") || "1");
    const pageSize = parseInt(searchParams.get("pageSize") || "10");
    const search = searchParams.get("search")?.trim() || "";
    const sort = searchParams.get("sort") || "created_at";
    const order = searchParams.get("order") || "desc";
    const status = searchParams.get("status");

    const where = {
      AND: [
        search && {
          OR: [
            { vendor_name: { contains: search, mode: "insensitive" } },
            { email: { contains: search, mode: "insensitive" } },
            { phone: { contains: search, mode: "insensitive" } },
          ],
        },
        status && status !== "all" && { status },
      ].filter(Boolean),
    };

    const [data, totalCount] = await Promise.all([
      prisma.vendor.findMany({
        where,
        skip: (page - 1) * pageSize,
        take: pageSize,
        orderBy: { [sort]: order },
        select: {
          id: true,
          vendor_name: true,
          email: true,
          phone: true,
          created_at: true,
        },
      }),
      prisma.vendor.count({ where }),
    ]);

    return NextResponse.json({ data, totalCount });
  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}

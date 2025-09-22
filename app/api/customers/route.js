import { NextResponse } from "next/server";
import { superAdminDb } from "@/lib/db/superadmin";
import { getTenantDb } from "@/lib/db/getTenantClient";

export async function GET(req) {
  try {
    const host = req.headers.get("host") || "";
    const subdomain = host.split(".")[0];

    if (!subdomain) {
      return NextResponse.json({ error: "Subdomain not found in host header" }, { status: 400 });
    }

    const company = await superAdminDb.company.findUnique({
      where: { sub_domain: subdomain },
      select: { db_url: true },
    });

    if (!company) {
      return NextResponse.json({ error: "Company (tenant) not found for subdomain" }, { status: 404 });
    }

    const tenantPrisma = getTenantDb(company.db_url);
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
        },
      }),
      tenantPrisma.customer.count({ where }),
    ]);

    return NextResponse.json({ data, totalCount });
  } catch (error) {
    console.error("GET error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}


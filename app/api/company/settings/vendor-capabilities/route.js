import { NextResponse } from "next/server";
import { getTenantDbFromHeaders } from "@/lib/db/getTenantDbFromRequest";
import { formatDates } from "@/utils/formatDates";

// Get All
export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);

    // Pagination
    const page = Math.max(parseInt(searchParams.get("page") || "1", 10), 1);
    const pageSize = Math.min(
      Math.max(parseInt(searchParams.get("pageSize") || "10", 10), 1),
      100
    );

    // Search + Sorting
    const search = searchParams.get("search")?.trim() || "";
    const sort = searchParams.get("sort") || "created_at";
    const order = searchParams.get("order") === "asc" ? "asc" : "desc";
    const status = searchParams.get("status");

    // Allowed sort fields
    const allowedSortFields = ["name", "created_at", "updated_at", "is_active"];
    const sortField = allowedSortFields.includes(sort) ? sort : "created_at";

    // Search filter
    const where = {
      AND: [
        search && { name: { contains: search, mode: "insensitive" } },
        status &&
          status !== "all" && {
            is_active: status === "Active" ? true : false,
          },
      ].filter(Boolean),
    };

    // Get tenant-specific Prisma client
    const { tenantDb, timezone } = await getTenantDbFromHeaders();

    // Fetch vendor capabilities + total count
    const [data, totalCount] = await Promise.all([
      tenantDb.company_vendor_capabilities.findMany({
        where,
        skip: (page - 1) * pageSize,
        take: pageSize,
        orderBy: { [sortField]: order },
        select: {
          id: true,
          name: true,
          created_at: true,
          updated_at: true,
          is_active: true,
          _count: {
            select: {
              subCategories: true,
            },
          },
        },
      }),
      tenantDb.company_vendor_capabilities.count({ where }),
    ]);

    const formattedData = formatDates(data, timezone);

    return NextResponse.json({ data: formattedData, totalCount });
  } catch (error) {
    // console.error("API Error (vendor capabilities GET):", error);
    return NextResponse.json(
      { error: "Failed to fetch vendor capabilities." },
      { status: 500 }
    );
  }
}

// POST
export async function POST(req) {
  try {
    const body = await req.json();

    if (!body.capabilities || !Array.isArray(body.capabilities)) {
      return NextResponse.json(
        { error: "Invalid request payload." },
        { status: 400 }
      );
    }

    // Insert multiple vendor capabilities
    const { tenantDb } = await getTenantDbFromHeaders();
    const created = await tenantDb.company_vendor_capabilities.createMany({
      data: body.capabilities.map((cap) => ({
        name: cap.name,
        is_active: true,
      })),
      // skipDuplicates: true,
    });

    return NextResponse.json(
      {
        message: "Vendor Capabilities created successfully.",
        count: created.count,
      },
      { status: 201 }
    );
  } catch (error) {
    // console.error("Error creating vendor capabilities:", error);
    return NextResponse.json(
      { error: "Failed to create vendor capabilities." },
      { status: 500 }
    );
  }
}

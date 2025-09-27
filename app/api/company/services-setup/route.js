import { NextResponse } from "next/server";
import { getTenantDbFromHeaders } from "@/lib/db/getTenantDbFromRequest";
import { formatDates } from "@/utils/formatDates";

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);

    // Pagination
    const page = Math.max(parseInt(searchParams.get("page") || "1", 10), 1);
    const pageSize = Math.min(
      Math.max(parseInt(searchParams.get("pageSize") || "10", 10), 1),
      100
    );

    // Search and sorting
    const search = searchParams.get("search")?.trim() || "";
    const sort = searchParams.get("sort") || "created_at";
    const order = searchParams.get("order") === "asc" ? "asc" : "desc";

    // Validate sort field
    const allowedSortFields = [
      "name",
      "created_at",
      "exclude_inspection",
      "invoice50",
      "fob_china",
      "require_deposit_invoice",
    ];
    const sortField = allowedSortFields.includes(sort) ? sort : "created_at";

    // Build search filter
    const where = search
      ? { name: { contains: search, mode: "insensitive" } }
      : {};

    // Get tenant-specific Prisma client
    const { tenantDb, timezone } = await getTenantDbFromHeaders();

    // Fetch services with pagination and total count
    const [data, totalCount] = await Promise.all([
      tenantDb.companyService.findMany({
        where,
        skip: (page - 1) * pageSize,
        take: pageSize,
        orderBy: { [sortField]: order },
        include: {
          materials: true,
          finishes: true,
        },
      }),
      tenantDb.companyService.count({ where }),
    ]);
    const formattedData = formatDates(data, timezone);

    return NextResponse.json({ data: formattedData, totalCount });
  } catch (error) {
    // console.error("API Error:", error);
    return NextResponse.json(
      { error: "Failed to fetch services." },
      { status: 500 }
    );
  }
}

// Post Service
export async function POST(req) {
  try {
    const body = await req.json();
    const {
      name,
      material_name,
      finishes_name,
      exclude_inspection,
      invoice50,
      fob_china,
      require_deposit_invoice,
    } = body;

    if (!name) {
      return NextResponse.json(
        { error: "Service name is required." },
        { status: 400 }
      );
    }

    const {tenantDb} = await getTenantDbFromHeaders();
    // Create service with related materials and finishes
    const service = await tenantDb.companyService.create({
      data: {
        exclude_inspection,
        invoice50,
        fob_china,
        require_deposit_invoice,
        name,
        materials: {
          create: material_name.map((m) => ({ name: m })),
        },
        finishes: {
          create: finishes_name.map((f) => ({ name: f })),
        },
      },
      include: {
        materials: true,
        finishes: true,
      },
    });

    return NextResponse.json(
      { message: "Service created successfully.", service_id: service.id },
      { status: 201 }
    );
  } catch (error) {
    // console.error(error);
    return NextResponse.json(
      { error: "Something went wrong." },
      { status: 500 }
    );
  }
}

import { NextResponse } from "next/server";
import { superAdminDb } from "@/lib/db/superadmin";

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
        status && status !== "all" && {
          is_active: status === "Active" ? true : false,
        },
      ].filter(Boolean),
    };

     // Fetch vendor capabilities + total count
    const [data, totalCount] = await Promise.all([
      superAdminDb.vendor_certifications.findMany({
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
        },
      }),
      superAdminDb.vendor_certifications.count({ where }),
    ]);

    return NextResponse.json({ data, totalCount });
  } catch (error) {
    console.error("API Error vendor certification:", error);
    return NextResponse.json(
      { error: "Failed to fetch vendor certification" },
      { status: 500 }
    );
  }
}


// Post
export async function POST(req) {
  try {
    const body = await req.json();

    if (!body.certifications || !Array.isArray(body.certifications)) {
      return NextResponse.json(
        { error: "Invalid request payload" },
        { status: 400 }
      );
    }

    const created = await superAdminDb.vendor_certifications.createMany({
      data: body.certifications.map((cert) => ({
        name: cert.name,
        is_active: true,
      })),
      skipDuplicates: true,
    });

    return NextResponse.json(
      {
        message: "Vendor Certifications created successfully.",
        count: created.count,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error creating vendor certifications:", error);
    return NextResponse.json(
      { error: "Failed to create vendor certifications." },
      { status: 500 }
    );
  }
}

import { NextResponse } from "next/server";
import { superAdminDb } from "@/lib/db/superadmin";

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);

    const page = parseInt(searchParams.get("page") || "1", 10);
    const pageSize = parseInt(searchParams.get("pageSize") || "10", 10);
    const search = searchParams.get("search")?.trim() || "";
    const sort = searchParams.get("sort") || "created_at";
    const order = searchParams.get("order") === "asc" ? "asc" : "desc";

    // Build search filter
    const where = search
      ? {
          name: { contains: search, mode: "insensitive" },
        }
      : {};

    // Fetch data and total count in parallel
    const [data, totalCount] = await Promise.all([
      superAdminDb.service.findMany({
        where,
        skip: (page - 1) * pageSize,
        take: pageSize,
        orderBy: { [sort]: order },
        select: {
          id: true,
          name: true,
          exclude_inspection: true,
          fob_china: true,
          require_deposit_invoice: true,
          invoice50: true,
          created_at: true,
        },
      }),
      superAdminDb.service.count({ where }),
    ]);

    return NextResponse.json({ data, totalCount });
  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json(
      { error: "Failed to fetch services" },
      { status: 500 }
    );
  }
}

// export async function GET(req) {
//   try {
//     const { searchParams } = new URL(req.url);
//     const page = parseInt(searchParams.get("page") || "1");
//     const pageSize = parseInt(searchParams.get("pageSize") || "10");
//     const search = searchParams.get("search")?.trim() || "";
//     const sort = searchParams.get("sort") || "created_at";
//     const order = searchParams.get("order") || "desc";

//     // where clause for search
//     const where = {
//       AND: [
//         search && {
//           OR: [
//             { name: { contains: search, mode: "insensitive" } },
//           ],
//         },
//       ].filter(Boolean),
//     };

//     const [data, totalCount] = await Promise.all([
//       superAdminDb.service.findMany({
//         where,
//         skip: (page - 1) * pageSize,
//         take: pageSize,
//         orderBy: { [sort]: order },
//         select: {
//           id: true,
//           name: true,
//           exclude_inspection: true,
//           fob_china: true,
//           require_deposit_invoice: true,
//           invoice50: true,
//           created_at: true,
//           // materials: { select: { name: true } },
//           // finishes: { select: { name: true } },
//         },
//       }),
//       superAdminDb.service.count({ where }),
//     ]);

//     return NextResponse.json({ data, totalCount });
//   } catch (error) {
//     console.error("API Error:", error);
//     return NextResponse.json(
//       { error: "Failed to fetch services" },
//       { status: 500 }
//     );
//   }
// }


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
        { error: "Service name is required" },
        { status: 400 }
      );
    }

    // Create service with related materials and finishes
    const service = await superAdminDb.service.create({
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
    console.error(error);
    return NextResponse.json(
      { error: "Something went wrong." },
      { status: 500 }
    );
  }
}

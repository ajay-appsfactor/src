import { NextResponse } from "next/server";
import { superAdminDb } from "@/lib/db/superadmin";
import { getTenantDb } from "@/lib/db/getTenantClient";

export async function PUT(req) {
  try {
    // 1. Extract subdomain from host header
    const host = req.headers.get("host") || "";
    const subdomain = host.split(".")[0];

    if (!subdomain) {
      return NextResponse.json({ error: "Subdomain missing from host header" }, { status: 400 });
    }

    // 2. Find tenant company by subdomain
    const company = await superAdminDb.company.findUnique({
      where: { sub_domain: subdomain }, 
      select: { db_url: true },
    });

    if (!company) {
      return NextResponse.json({ error: "Tenant not found for subdomain" }, { status: 404 });
    }

    // 3. Create tenant-specific Prisma client
    const tenantPrisma = getTenantDb(company.db_url);

    // 4. Parse request body
    const { id, status } = await req.json();

    if (typeof id === "undefined" || typeof status === "undefined") {
      return NextResponse.json({ error: "Missing id or status" }, { status: 400 });
    }

    // 5. Update customer status in tenant DB
    await tenantPrisma.customer.update({
      where: { id: id },
      data: { is_active: status },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Status update error:", error);
    return NextResponse.json({ error: "Failed to update status" }, { status: 500 });
  }
}

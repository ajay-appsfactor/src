import { headers } from "next/headers";
import { superAdminDb } from "@/lib/db/superadmin";
import { getTenantDb } from "@/lib/db/getTenantClient";
import { notFound } from "next/navigation";

export async function getTenantDbFromHeaders() {
  // Read request headers (server-side only)
  const headersList = await headers();
  const host = headersList.get("host") || "";

  // Handle localhost case (remove port)
  const subdomain = host.split(".")[0];

  // Find the company in Super Admin DB
  const company = await superAdminDb.company.findUnique({
    where: { sub_domain: subdomain },
    select: { db_url: true, timezone: true },
  });
  // const company = await superAdminDb.company.findUnique({
  //   where: { sub_domain: subdomain },
  // });

  if (!company) return notFound();

  // Return connected tenant DB client
  return {
    tenantDb: getTenantDb(company.db_url),
    timezone: company.timezone || "UTC",
  };
  // return getTenantDb(company.db_url);
}

export async function getDomain() {
  const headersList = await headers();
  const host = headersList.get("host") || "";

  // Extract subdomain
  const subdomain = host.split(".")[0];
  // console.log(subdomain);

  // Fetch company from Super Admin DB
  const company = await superAdminDb.company.findUnique({
    where: { sub_domain: subdomain },
    select: { company_logo: true, sub_domain: true, company_name: true },
  });

  if (!company) return notFound();

  return company;
}

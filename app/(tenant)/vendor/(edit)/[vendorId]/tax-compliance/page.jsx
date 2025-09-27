import { notFound } from "next/navigation";
import TaxVendorForm from "@/components/vendor/edit/TaxVendorForm";
import { getTenantDbFromHeaders } from "@/lib/db/getTenantDbFromRequest";
import { headers } from "next/headers";

export const metadata = {
  title: "Vendor | Tax & Compliance",
};

export default async function VendorTaxPage({ params }) {
  const { vendorId } = await params;
  if (!vendorId) return notFound();

  // Tenant-specific Prisma client
  const { tenantDb, timezone } = await getTenantDbFromHeaders();

  // Also get subdomain from headers
  const header = await headers();
  const host = header.get("host") || "";

  // Protocol
  const protocol = host.includes("localhost") ? "http:" : "https:";

  // vendor check
  const vendor = await tenantDb.vendor.findUnique({
    where: { id: vendorId },
    select: {
      id: true,
      vendor_name: true,
    },
  });

  if (!vendor) return notFound();

  const vendorWithMeta = {
    ...vendor,
    protocol,
    subdomain: host,
    timezone,
  };

  // console.log("Vendor data :", vendorWithMeta);

  return (
    <main>
      <TaxVendorForm vendor={vendorWithMeta} />
    </main>
  );
}

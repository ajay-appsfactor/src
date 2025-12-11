import { getTenantDbFromHeaders } from "@/lib/db/getTenantDbFromRequest";
import { notFound } from "next/navigation";
import ViewVendor from "@/components/vendor/view-vendor/ViewVendor";
import { headers } from "next/headers";

export const metadata = {
  title: "Vendor | View Vendor",
};

export default async function CustomerViewPage({ params }) {
  const { id } = await params;
    const { tenantDb } = await getTenantDbFromHeaders();

  // Also get subdomain from headers
  const header = await headers();
  const host = header.get("host") || "";

  // Protocol
  const protocol = host.includes("localhost") ? "http:" : "https:";

  const vendor = await tenantDb.vendor.findUnique({
    where: { id },
    include: {
      addresses: true,
      taxCompliances: true,
      contacts: true,
      financials:true,
      operationalSetting: true,
      metadata: true,
    },
  });

  if (!vendor) return notFound();

   const customerWithMeta = {
    ...vendor,
    protocol,
    subdomain :host,
  };

  return (
    <main>
      <ViewVendor vendor={customerWithMeta}/>
    </main>
  );
}

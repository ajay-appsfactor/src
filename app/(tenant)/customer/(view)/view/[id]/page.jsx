import { getTenantDbFromHeaders } from "@/lib/db/getTenantDbFromRequest";
import { notFound } from "next/navigation";
import ViewCustomer from "@/components/customer/view-customer/ViewCustomer";
import { headers } from "next/headers";

export const metadata = {
  title: "Customer | View Customer",
};

export default async function CustomerViewPage({ params }) {
  const { id } = await params;
  const { tenantDb } = await getTenantDbFromHeaders();

  // Also get subdomain from headers
  const header = await headers();
  const host = header.get("host") || "";

  // Protocol
  const protocol = host.includes("localhost") ? "http:" : "https:";

  const customer = await tenantDb.customer.findUnique({
    where: { id },
    include: {
      addresses: true,
      tax_info: true,
      contacts: true,
      operational: true,
      attachments: true,
      // quotation: true,
    },
  });

  if (!customer) return notFound();

  const customerWithMeta = {
    ...customer,
    protocol,
    subdomain: host,
  };

  return (
    <main>
      <ViewCustomer customer={customerWithMeta} />
    </main>
  );
}

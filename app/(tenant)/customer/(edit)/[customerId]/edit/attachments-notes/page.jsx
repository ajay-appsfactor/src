import { notFound } from "next/navigation";
import AttachmentCustomerForm from "@/components/customer/edit/AttachmentCustomerForm";
import { getTenantDbFromHeaders } from "@/lib/db/getTenantDbFromRequest";
import { headers } from "next/headers";

export default async function AttachmentsNotesPage({ params }) {
  const { customerId } = await params;

  // Get tenant DB client
  const { tenantDb, timezone } = await getTenantDbFromHeaders();

  // Also get subdomain from headers
  const header = await headers();
  const host = header.get("host") || "";

  // Protocol
  const protocol = host.includes("localhost") ? "http:" : "https:";

  // Fetch customer with attachments/notes
  const customer = await tenantDb.customer.findUnique({
    where: { id: customerId },
    select: {
      id: true,
      customer_name: true,
    },
  });

  if (!customer) return notFound();

  const customerWithMeta = {
    ...customer,
    protocol,
    subdomain: host,
    timezone,
  };
  // console.log("Customer attachements  data :", customerWithMeta)
  return (
    <main>
      <AttachmentCustomerForm customer={customerWithMeta} />
    </main>
  );
}

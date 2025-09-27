import { notFound } from "next/navigation";
import CreateCustomerInfoForm from "@/components/customer/edit/CreateCustomerInfoForm";
import { getTenantDbFromHeaders } from "@/lib/db/getTenantDbFromRequest";
import { formatDates } from "@/utils/formatDates";

export const metadata = {
  title: "Customer | Edit Information",
};

export default async function EditCustomerPage({ params }) {
  const { customerId } = await params;
  // Get tenant Prisma client
  const { tenantDb, timezone } = await getTenantDbFromHeaders();

  // Fetch customer data from tenant DB
  const customer = await tenantDb.customer.findUnique({
    where: { id: customerId },
    select: {
      id: true,
      first_name: true,
      last_name: true,
      company_name: true,
      customer_name: true,
      email: true,
      phone: true,
      type: true,
      website: true,
      notes: true,
      created_at: true,
      updated_at: true,
    },
  });

  if (!customer) {
    return notFound();
  }

  // Format dates according to tenant timezone
  const [formattedCustomer] = formatDates([customer], timezone);

  return (
    <main>
      <CreateCustomerInfoForm customer={formattedCustomer} />
    </main>
  );
}

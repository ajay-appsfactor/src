import { getTenantDbFromHeaders } from "@/lib/db/getTenantDbFromRequest";
import ContactCustomerForm from "@/components/customer/edit/ContactCustomerForm";
import { notFound } from "next/navigation";

export default async function ContactPersonsPage({ params }) {
  const { customerId } = await params;

  // Get tenant DB from headers
  const prisma = await getTenantDbFromHeaders();

  const customer = await prisma.customer.findUnique({
    where: { id: customerId },
    select: {
      id: true,
      customer_name: true,
    },
  });

  if (!customer) return notFound();

  // console.log("customer contact :", customer);

  return (
    <main>
      <ContactCustomerForm customer={customer} />
    </main>
  );
}

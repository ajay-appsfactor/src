import { notFound } from "next/navigation";
import AddressCustomerForm from "@/components/customer/edit/AddressCustomerForm";
import { getTenantDbFromHeaders } from "@/lib/db/getTenantDbFromRequest";

export const metadata = {
  title: "Customer | Customer Addresses",
};

export default async function AddressDetailsPage({ params }) {
  const { customerId } = await params;

  //  Get tenant DB client
  const { tenantDb } = await getTenantDbFromHeaders();

  //  Query customer
  const customer = await tenantDb.customer.findUnique({
    where: {
      id: customerId,
    },
    select: {
      id: true,
      customer_name: true,
    },
  });

  // console.log("Server Customer Address:", customer);
  if (!customer) return notFound();

  //  Render page
  return (
    <main>
      <AddressCustomerForm customer={customer} />
    </main>
  );
}

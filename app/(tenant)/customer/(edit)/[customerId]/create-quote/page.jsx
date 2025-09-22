import CreateQuotePage from "@/components/customer/create-quote/CreateQuotePage";
import { getTenantDbFromHeaders } from "@/lib/db/getTenantDbFromRequest";
import { notFound } from "next/navigation";

export const metadata = {
  title: "Customer | Create Quote",
};
const Quotepage = async ({ params }) => {
  const { customerId } = await params;

  //  Get tenant DB client
  const tenantPrisma = await getTenantDbFromHeaders();

  //  Query customer
  const customer = await tenantPrisma.customer.findUnique({
    where: {
      id: customerId,
    },
    select: {
      id: true,
      customer_name: true,
      email: true,
    },
  });

  if (!customer) return notFound();

  console.log("customer data :", customer);
  return (
    <main>
      <CreateQuotePage customer={customer} />
    </main>
  );
};

export default Quotepage;

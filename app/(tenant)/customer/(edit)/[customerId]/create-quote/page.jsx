import CreateQuotePage from "@/components/customer/create-quote/CreateQuotePage";
import { getTenantDbFromHeaders } from "@/lib/db/getTenantDbFromRequest";
import { notFound } from "next/navigation";

export const metadata = {
  title: "Customer | Create Quote",
};
const Quotepage = async ({ params }) => {
  const { customerId } = await params;

  //  Get tenant DB client
  const {tenantDb} = await getTenantDbFromHeaders();

  //  Query customer
  const customer = await tenantDb.user.findUnique({
    where: {
      id: customerId,
    },
    select: {
      id: true,
      first_name: true,
      email: true,
    },
  });

  // console.log("User Data :", customer)s
  if (!customer) return notFound();

  // console.log("customer data :", customer);
  return (
    <main>
      <CreateQuotePage customer={customer} />
    </main>
  );
};

export default Quotepage;

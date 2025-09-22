import { getTenantDbFromHeaders } from "@/lib/db/getTenantDbFromRequest";
import { notFound } from "next/navigation";
import QuoteItemID from "@/components/customer/quote-item/page";

const QuoteItemPage = async ({ params }) => {
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

  console.log("Customer:", customer);

  if (!customer) return notFound();

  // Fetch quote
  const quote = await tenantPrisma.quote.findMany({
    where: { customer_id: customerId },
    select: {
      id: true,
    },
  });

  if (!quote) return notFound();

  // console.log("Customer:", customer);
  console.log("Quote:", quote);
  return (
    <main>
      <QuoteItemID quoteID={quote.id} />
    </main>
  );
};

export default QuoteItemPage;

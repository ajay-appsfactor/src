import { notFound } from "next/navigation";
import TaxCustomerForm from "@/components/customer/edit/TaxCustomerForm";
import { getTenantDbFromHeaders } from "@/lib/db/getTenantDbFromRequest";


export default async function TaxFinancialPage({ params }) {
  const { customerId } = await params;

  // Get tenant DB client
  const {tenantDb} = await getTenantDbFromHeaders();

  // Fetch tax info with customer name
  const taxInfo = await tenantDb.customerTaxInfo.findUnique({
    where: { customer_id : customerId },
    include: {
      customer: {
        select: { customer_name: true },
      },
    },
  });


  let customer;

  if (taxInfo) {
    const {
      customer_id,
      tax_number,
      default_tax,
      currency,
      payment_terms,
      credit_limit,
      customer: { customer_name },
    } = taxInfo;

    customer = {
      customer_id,
      customer_name,
      tax_number,
      default_tax,
      currency,
      payment_terms,
      credit_limit,
    };
  } else {
    // Fallback to customer name only
    const fallbackCustomer = await tenantDb.customer.findUnique({
      where: { id: customerId },
      select: {
        id: true,
        customer_name: true,
      },
    });

    if (!fallbackCustomer) return notFound();

    customer = {
      customer_id: fallbackCustomer.id,
      customer_name: fallbackCustomer.customer_name,
      tax_number: "",
      default_tax: null,
      currency: "",
      payment_terms: "",
      credit_limit: null,
    };
  }

  return (
    <main>
      <TaxCustomerForm customer={customer} />
    </main>
  );
}


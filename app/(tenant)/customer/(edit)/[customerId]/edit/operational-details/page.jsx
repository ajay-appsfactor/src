import { getTenantDbFromHeaders } from "@/lib/db/getTenantDbFromRequest";
import { notFound } from "next/navigation";
import OperationalCustomerForm from "@/components/customer/edit/OperationalCustomerForm";


export default async function OperationalDetailsPage({ params }) {
  const { customerId } = await params;

  // Get tenant DB client
    const { tenantDb } = await getTenantDbFromHeaders();

  // Fetch operational info with customer name
  const operationalInfo = await tenantDb.customerOperationalInfo.findUnique({
    where: { customer_id: customerId },
    include: {
      customer: {
        select: {
          customer_name: true,
        },
      },
    },
  });

  let customer;

  if (operationalInfo) {
    customer = {
      ...operationalInfo,
      customer_name: operationalInfo.customer.customer_name,
    };
  } else {
    // Fallback: get basic customer info
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
      delivery_method: "",
      quote_format: "",
    };
  }


  return (
    <main>
      <OperationalCustomerForm customer={customer} />
    </main>
  );
}


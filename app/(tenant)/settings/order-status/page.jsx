import CompanyOrderStatusTable from "@/components/company/setting/OrderStatusTable";

export const metadata = {
  title: "Order Status",
};

const OrderStatusPage = async () => {

  return (
    <main>
      <CompanyOrderStatusTable  />
    </main>
  );
};

export default OrderStatusPage;

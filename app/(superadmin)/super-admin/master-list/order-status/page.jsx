import OrderStatusTable from "@/components/superadmin/master-list/OrderStatusTable";


export const metadata = {
  title: "Order Status",
};

const OrderStatusPage = async () => {

  return (
    <main>
      <OrderStatusTable  />
    </main>
  );
};

export default OrderStatusPage;

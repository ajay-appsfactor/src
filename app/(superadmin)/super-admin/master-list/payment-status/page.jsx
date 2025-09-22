import PaymentTable from "@/components/superadmin/master-list/PaymentStatusTable";


export const metadata = {
  title: "Payment Status",
};

const PaymentStatusPage = async () => {

  return (
    <main>
      <PaymentTable  />
    </main>
  );
};

export default PaymentStatusPage;

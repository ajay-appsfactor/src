import CompanyPaymentStatusTable from "@/components/company/setting/PaymentStatusTable";

export const metadata = {
  title: "Payment Status",
};

const PaymentStatusPage = async () => {

  return (
    <main>
      <CompanyPaymentStatusTable  />
    </main>
  );
};

export default PaymentStatusPage;

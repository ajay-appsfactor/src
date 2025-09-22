import PaymentTable from "@/components/superadmin/master-list/PaymentTable";


export const metadata = {
  title: "Payment Terms",
};

const PaymentTerms = async () => {

  return (
    <main>
      <PaymentTable  />
    </main>
  );
};

export default PaymentTerms;

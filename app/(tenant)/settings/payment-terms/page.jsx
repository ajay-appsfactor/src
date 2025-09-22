import PaymentTermsTable from "@/components/company/setting/PaymentTable";


export const metadata = {
  title: "Payment Terms",
};

const PaymentTerms = async () => {

  return (
    <main>
      <PaymentTermsTable  />
    </main>
  );
};

export default PaymentTerms;

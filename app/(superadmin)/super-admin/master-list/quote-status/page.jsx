import QuoteStatusTable from "@/components/superadmin/master-list/QuoteStatusTable";


export const metadata = {
  title: "Quote Status",
};

const QuoteStatusPage = async () => {

  return (
    <main>
      <QuoteStatusTable  />
    </main>
  );
};

export default QuoteStatusPage;

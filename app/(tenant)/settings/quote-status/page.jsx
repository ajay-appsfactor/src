import CompanyQuoteStatusTable from "@/components/company/setting/QuoteStatusTable";


export const metadata = {
  title: "Quote Status",
};

const QuoteStatusPage = async () => {

  return (
    <main>
      <CompanyQuoteStatusTable  />
    </main>
  );
};

export default QuoteStatusPage;

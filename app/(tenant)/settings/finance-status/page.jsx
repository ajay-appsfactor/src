import CompanyFinanceStatusTable from "@/components/company/setting/FinanceStatusTable";


export const metadata = {
  title: "Finance Status",
};

const FinanceStatusPage = async () => {

  return (
    <main>
      <CompanyFinanceStatusTable  />
    </main>
  );
};

export default FinanceStatusPage;

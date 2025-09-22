import FinanceStatusTable from "@/components/superadmin/master-list/FinanceStatusTable";


export const metadata = {
  title: "Finance Status",
};

const FinanceStatusPage = async () => {

  return (
    <main>
      <FinanceStatusTable  />
    </main>
  );
};

export default FinanceStatusPage;

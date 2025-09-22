import CompanyLogisticsStatusTable from "@/components/company/setting/LogisticsStatusTable";

export const metadata = {
  title: "Logistics Status",
};

const LogisticsStatusPage = async () => {

  return (
    <main>
      <CompanyLogisticsStatusTable  />
    </main>
  );
};

export default LogisticsStatusPage;

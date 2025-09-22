import LogisticsStatusTable from "@/components/superadmin/master-list/LogisticsStatusTable";


export const metadata = {
  title: "Logistics Status",
};

const LogisticsStatusPage = async () => {

  return (
    <main>
      <LogisticsStatusTable  />
    </main>
  );
};

export default LogisticsStatusPage;

import MasterCurrencyForm from "@/components/superadmin/master-list/CurrencyTable";


export const metadata = {
  title: "Currency",
};

const MasterCurrencyPage = async () => {

  return (
    <main>
      <MasterCurrencyForm  />
    </main>
  );
};

export default MasterCurrencyPage;

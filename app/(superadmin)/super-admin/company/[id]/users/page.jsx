import UsersTable from "@/components/superadmin/company/users/users-table/UsersTable";

export const metadata = {
  title: "Users",
};

const UsersPage = async () => {
  return (
    <section className="w-full max-w-8xl mx-auto">
      <UsersTable />
    </section>
  );
};

export default UsersPage;
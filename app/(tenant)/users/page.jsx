
import UsersTable from "@/components/company/users/users-table/UsersTable";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Plus } from "lucide-react";

export const metadata = {
  title: "Users",
};

const UsersPage = () => {
  return (
    <section className="w-full max-w-8xl mx-auto">
      <div className="flex items-center justify-start gap-4 px-6">
        <h2 className="text-lg font-semibold text-gray-800">Users</h2>
        <Button
          asChild
          className="px-5 pt-2 text-sm bg-slate-800 text-white hover:bg-slate-700"
        >
          <Link href="/users/create">
            <Plus className="mr-2 h-4 w-4" />
            Add New User
          </Link>
        </Button>
      </div>
      <UsersTable />
    </section>
  );
};

export default UsersPage;
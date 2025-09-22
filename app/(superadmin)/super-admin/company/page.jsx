"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Plus } from "lucide-react";
import CompanyTable from "@/components/superadmin/company/company-table/CompanyTable";


// export const metadata = {
//   title: "Superadmin | Company",
// };

export default function CompanyPage() {
  return (
    <section className="w-full max-w-8xl mx-auto">
      <div className="flex items-center justify-start gap-4 px-6 py-4">
        <h2 className="text-lg font-semibold text-gray-800">Company</h2>
        <Button
          asChild
          className="px-5 pt-2 text-sm bg-slate-800 text-white hover:bg-slate-700"
        >
          <Link href="/super-admin/company/create">
            <Plus className="mr-2 h-4 w-4" />
            Add New Company
          </Link>
        </Button>
      </div>

      <div className="py-2 overflow-x-auto">
        <CompanyTable />
      </div>
    </section>
  );
}

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Download, Plus  } from 'lucide-react';
import CustomerTable from "@/components/customer/customer-table/CustomerTable";

export const metadata = {
  title: "Customers",
};

export default async function CustomerTablePage() {
  return (
    <section className="w-full max-w-8xl mx-auto">
      <div className="flex items-center justify-start gap-4 px-6">
        <h2 className="text-lg font-semibold text-gray-800">Customers</h2>
        <Button
          asChild
          className="px-5 pt-2 text-sm bg-slate-800 text-white hover:bg-slate-700"
        >
          <Link href="/customer/create"><Plus />Add New Customer</Link>
        </Button>
         <Button
          asChild
          className="px-5 pt-2 text-sm bg-slate-800 text-white hover:bg-slate-700"
        >
          <Link href="/customer/import"><Download />Import Customers</Link>
        </Button>
      </div>
      <CustomerTable />
    </section>
  );
}

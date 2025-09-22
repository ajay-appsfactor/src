import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Download, Plus } from "lucide-react";
import VendorTable from "@/components/vendor/vendor-table/VendorTable";

export const metadata = {
  title: "Vendors",
};

export default async function CustomerTablePage() {
  return (
    <section className="w-full max-w-8xl mx-auto">
      <div className="flex items-center justify-start gap-4 px-6">
        <h2 className="text-lg font-semibold text-gray-800">Vendors</h2>
        <Button
          asChild
          className="px-5 pt-2 text-sm bg-slate-800 text-white hover:bg-slate-700"
        >
          <Link href="/vendor/create">
            <Plus />
            Add New Vendor
          </Link>
        </Button>
        <Button
          asChild
          className="px-5 pt-2 text-sm bg-slate-800 text-white hover:bg-slate-700"
        >
          <Link href="/vendor/import">
            <Download />
            Import Vendor
          </Link>
        </Button>
      </div>
      <VendorTable />
    </section>
  );
}

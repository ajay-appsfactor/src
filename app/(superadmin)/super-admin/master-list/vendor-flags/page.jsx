import ServiceTable from "@/components/superadmin/master-list/vendor-flags-table/ServiceTable";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Plus } from "lucide-react";

export const metadata = {
  title: "Vendor Flags",
};


const VendorFlagPage = () => {
  return (
    <section className="w-full max-w-8xl mx-auto">
      <div className="flex items-center justify-start gap-4 px-6 py-4">
        <h2 className="text-lg font-semibold text-gray-800">Vendor Flags</h2>
        <Button
          asChild
          className="px-5 pt-2 text-sm bg-slate-800 text-white hover:bg-slate-700"
        >
          <Link href="/super-admin/master-list/vendor-flags/create">
            <Plus className="mr-2 h-4 w-4" />
            Add New Vendor Flags
          </Link>
        </Button>
      </div>
      <ServiceTable />
    </section>
  );
};

export default VendorFlagPage;

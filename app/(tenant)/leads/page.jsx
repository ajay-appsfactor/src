import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Download, Plus  } from 'lucide-react';

export const metadata = {
  title: "Leads",
};

export default async function LeadsTablePage() {
  return (
    <section className="w-full max-w-8xl mx-auto">
      <div className="flex items-center justify-start gap-4 px-6">
        <h2 className="text-lg font-semibold text-gray-800">Leads</h2>
        <Button
          asChild
          className="px-5 pt-2 text-sm bg-slate-800 text-white hover:bg-slate-700"
        >
          <Link href="/admin/lead/create"><Plus />Add New Leads</Link>
        </Button>
         {/* <Button
          asChild
          className="px-5 pt-2 text-sm bg-slate-800 text-white hover:bg-slate-700"
        >
          <Link href="/admin/leads/import-leads"><Download />Import Leads</Link>
        </Button> */}
      </div>
    </section>
  );
}

import { notFound } from "next/navigation";
import CreateVendorForm from "@/components/vendor/edit/CreateVendorInfo";
import { getTenantDbFromHeaders } from "@/lib/db/getTenantDbFromRequest";
import { formatDates } from "@/utils/formatDates";

export const metadata = {
  title: "Vendor | Edit Information",
};

export default async function EditVendorPage({ params }) {
  const { vendorId } = await params; 
  const { tenantDb, timezone } = await getTenantDbFromHeaders();

  const vendor = await tenantDb.vendor.findUnique({
    where: { id: vendorId },
    select: {
      id: true,
      first_name: true,
      last_name: true,
      vendor_name: true,
      vendor_type: true,
      email: true,
      phone: true,
      website: true,
      created_at: true,
      updated_at:true,
    },
  });

  if (!vendor) return notFound();
  // console.log("Vendor Info :", vendor);

  // Format dates according to tenant timezone
    const [formattedVendor] = formatDates([vendor], timezone);
  return (
    <main>
      <CreateVendorForm vendor={formattedVendor} />
    </main>
  );
}



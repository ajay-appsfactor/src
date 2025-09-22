import { notFound } from "next/navigation";
import CreateVendorForm from "@/components/vendor/edit/CreateVendorInfo";
import { getTenantDbFromHeaders } from "@/lib/db/getTenantDbFromRequest";

export const metadata = {
  title: "Vendor | Edit Information",
};

export default async function EditVendorPage({ params }) {
  const { vendorId } = await params; 

  const tenantPrisma = await getTenantDbFromHeaders();

  const vendor = await tenantPrisma.vendor.findUnique({
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
    },
  });

  if (!vendor) return notFound();
  // console.log("Vendor Info :", vendor);
  return (
    <main>
      <CreateVendorForm vendor={vendor} />
    </main>
  );
}



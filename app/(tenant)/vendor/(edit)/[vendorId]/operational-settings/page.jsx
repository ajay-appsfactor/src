import OperationalVendorForm from "@/components/vendor/edit/OperationalVendorForm";
import { notFound } from "next/navigation";
import { getTenantDbFromHeaders } from "@/lib/db/getTenantDbFromRequest";

export const metadata = {
  title: "Vendor | Operational Settings",
};

export default async function VendorOperationalPage({ params }) {
  const { vendorId } =  await params;
  if (!vendorId) return notFound();

  // Tenant-specific Prisma client
   const { tenantDb } = await getTenantDbFromHeaders();

  // Fetch operational settings for this vendor 
  const vendorOperational = await tenantDb.vendorOperationalSetting.findUnique({
    where: { vendor_id: vendorId }, 
    include: {
      vendor: {
        select: { vendor_name: true },
      },
    },
  });

  let vendor;
  if (vendorOperational) {
    vendor = {
      id: vendorOperational.vendor_id, 
      vendor_name: vendorOperational.vendor.vendor_name,
      status: vendorOperational.status || "Active",
      shipping_method: vendorOperational.shipping_method || "",
      lead_time: vendorOperational.lead_time?.toString() || "",
      minimum_order_quantity:
        vendorOperational.minimum_order_quantity?.toString() || "",
      categories: vendorOperational.categories || [],
      manager: vendorOperational.manager || "",
    };
  } else {
    // fallback to vendor basic data
    const fallbackVendor = await tenantDb.vendor.findUnique({
      where: { id: vendorId }, 
      select: {
        id: true,
        vendor_name: true,
      },
    });

    if (!fallbackVendor) return notFound();

    vendor = {
      id: fallbackVendor.id,
      vendor_name: fallbackVendor.vendor_name,
      status: "",
      shipping_method: "",
      lead_time: "",
      minimum_order_quantity: "",
      categories: [],
      manager: "",
    };
  }

  // console.log("Vendor operational data:", vendor);

  return (
    <main>
      <OperationalVendorForm vendor={vendor} />
    </main>
  );
}


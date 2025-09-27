import { notFound } from "next/navigation";
import ContactVendorForm from "@/components/vendor/edit/ContactVendorForm";
import { getTenantDbFromHeaders } from "@/lib/db/getTenantDbFromRequest";

export const metadata = {
  title: "Vendor | Primary Contact Details",
};

export default async function ContactPersonsPage({ params }) {
  const { vendorId } = await params;


  // Create tenant-specific Prisma client
  const { tenantDb} = await getTenantDbFromHeaders();


  // Fetch contact info with vendor name
  const vendorContact = await tenantDb.vendorContact.findUnique({
    where: { vendor_id: vendorId },
    include: {
      vendor: {
        select: { vendor_name: true },
      },
    },
  });


  let vendor;

  if (vendorContact) {
    vendor = {
      id: vendorContact.vendor_id,
      vendor_name: vendorContact.vendor.vendor_name,
      contact_name: vendorContact.contact_name || "",
      job_title: vendorContact.job_title || "",
      email: vendorContact.email || "",
      phone: vendorContact.phone || "",
    };
  } else {
    // Fallback to basic vendor if no contact exists
    const fallbackVendor = await tenantDb.vendor.findUnique({
      where: {id: vendorId },
      select: {
        id: true,
        vendor_name: true,
      },
    });

    if (!fallbackVendor) return notFound();

    vendor = {
      id: fallbackVendor.id,
      vendor_name: fallbackVendor.vendor_name,
      contact_name: "",
      job_title: "",
      email: "",
      phone: "",
    };
  }

  // console.log("vendor primary contact data:", vendor);

  return (
    <main>
      <ContactVendorForm vendor={vendor} />
    </main>
  );
}


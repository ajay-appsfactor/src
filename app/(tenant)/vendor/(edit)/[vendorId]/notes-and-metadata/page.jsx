import NotesVendorForm from "@/components/vendor/edit/NotesVendorForm";
import { notFound } from "next/navigation";
import { getTenantDbFromHeaders } from "@/lib/db/getTenantDbFromRequest";

export const metadata = {
  title: "Vendor | Notes & Metadata",
};

export default async function VendorNotesPage({ params }) {
  const { vendorId } = await params;
  if (!vendorId) return notFound();

  // Tenant-specific Prisma client
     const { tenantDb } = await getTenantDbFromHeaders();

  // Fetch metadata for this vendor
  const vendorMetadata = await tenantDb.vendorMetadata.findUnique({
    where: { vendor_id: vendorId }, 
    include: {
      vendor: {
        select: { vendor_name: true },
      },
    },
  });

  let vendor;
  if (vendorMetadata) {
    vendor = {
      id: vendorMetadata.vendor_id, 
      vendor_name: vendorMetadata.vendor.vendor_name,
      notes: vendorMetadata.notes || "",
      tags: vendorMetadata.tags || [],
      score: vendorMetadata.score?.toString() || "",
      last_order: vendorMetadata.last_order
        ? vendorMetadata.last_order.toISOString().split("T")[0]
        : "",
      next_review: vendorMetadata.next_review
        ? vendorMetadata.next_review.toISOString().split("T")[0]
        : "",
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
      notes: "",
      tags: [],
      score: "",
      last_order: new Date().toISOString().split("T")[0],
      next_review: "",
    };
  }

  return (
    <main>
      <NotesVendorForm vendor={vendor} />
    </main>
  );
}



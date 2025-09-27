import { notFound } from "next/navigation";
import AddressVendorForm from "@/components/vendor/edit/AddressVendorForm";
import { getTenantDbFromHeaders } from "@/lib/db/getTenantDbFromRequest";

export const metadata = {
  title: "Vendor | Address Details",
};

export default async function VendorAddressPage({ params }) {
  const { vendorId } = await params;
  // const prisma = await getTenantDbFromHeaders();
  const { tenantDb } = await getTenantDbFromHeaders();

  // Fetch vendor address by vendor_id
  const vendorAddress = await tenantDb.vendorAddress.findUnique({
    where: { vendor_id: vendorId },
    include: {
      vendor: {
        select: { id: true, vendor_name: true },
      },
    },
  });

  let vendor;

  if (vendorAddress) {
    vendor = {
      id: vendorAddress.vendor.id,
      vendor_name: vendorAddress.vendor.vendor_name,
      address_1: vendorAddress.address_1 || "",
      address_2: vendorAddress.address_2 || "",
      city: vendorAddress.city || "",
      state: vendorAddress.state || "",
      zip: vendorAddress.zip || "",
      country: vendorAddress.country || "",
    };
  } else {
    // Fallback: get basic vendor data
    const fallbackVendor = await tenantDb.vendor.findUnique({
      where: { id: vendorId },
      select: { id: true, vendor_name: true },
    });

    if (!fallbackVendor) return notFound();

    vendor = {
      id: fallbackVendor.id,
      vendor_name: fallbackVendor.vendor_name,
      address_1: "",
      address_2: "",
      city: "",
      state: "",
      zip: "",
      country: "",
    };
  }

  return (
    <main>
      <AddressVendorForm vendor={vendor} />
    </main>
  );
}

// import { prisma } from "@/lib/prisma";
// import { notFound } from "next/navigation";
// import AddressVendorForm from "@/components/vendor/edit/AddressVendorForm";

// export const metadata = {
//   title: "Vendor | Address Details",
// };

// export default async function VendorAddressPage({ params }) {
//   const { vendorId } = await params;
//   if (!vendorId) return notFound();

//   // Fetch vendor address
//   const vendorAddress = await prisma.vendorAddress.findUnique({
//     where: { vendor_id: vendorId },
//     include: {
//       vendor: {
//         select: { vendor_name: true },
//       },
//     },
//   });

//   let vendor;

//   if (vendorAddress) {
//     vendor = {
//       vendor_id: vendorAddress.vendor_id,
//       vendor_name: vendorAddress.vendor.vendor_name,
//       address_1: vendorAddress.address_1,
//       address_2: vendorAddress.address_2 || "",
//       city: vendorAddress.city,
//       state: vendorAddress.state,
//       zip: vendorAddress.zip,
//       country: vendorAddress.country,
//     };
//   } else {
//     // Fallback: basic vendor data
//     const fallbackVendor = await prisma.vendor.findUnique({
//       where: { vendor_id: vendorId },
//       select: {
//         vendor_id: true,
//         vendor_name: true,
//       },
//     });

//     if (!fallbackVendor) return notFound();

//     vendor = {
//       vendor_id: fallbackVendor.vendor_id,
//       vendor_name: fallbackVendor.vendor_name,
//       address_1: "",
//       address_2: "",
//       city: "",
//       state: "",
//       zip: "",
//       country: "",
//     };
//   }

//   // console.log("Vendor Address Found :", vendor)

//   return (
//     <main>
//       <AddressVendorForm vendor={vendor} />
//     </main>
//   );
// }

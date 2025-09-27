import FinancialVendorForm from "@/components/vendor/edit/FinancialVendorForm";
import { notFound } from "next/navigation";
import { getTenantDbFromHeaders } from "@/lib/db/getTenantDbFromRequest";

export const metadata = {
  title: "Vendor | Payment & Financial Info",
};

export default async function VendorFinancialPage({ params }) {
  const { vendorId } = await params;
  if (!vendorId) return notFound();

  const { tenantDb } = await getTenantDbFromHeaders();

  // Fetch financial info if exists
  const vendorFinancial = await tenantDb.vendorFinancial.findUnique({
    where: { vendor_id: vendorId }, 
    include: {
      vendor: {
        select: { vendor_name: true },
      },
    },
  });

  let vendor;
  if (vendorFinancial) {
    vendor = {
      id: vendorFinancial.vendor_id, 
      vendor_name: vendorFinancial.vendor.vendor_name,
      bank_name: vendorFinancial.bank_name || "",
      bank_account_number: vendorFinancial.bank_account_number || "",
      swift_iban_code: vendorFinancial.swift_iban_code || "",
      preferred_currency: vendorFinancial.preferred_currency || "",
      payment_terms: vendorFinancial.payment_terms || "",
      default_tax_rate: vendorFinancial.default_tax_rate || "",
      credit_limit: vendorFinancial.credit_limit?.toString() || "",
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
      bank_name: "",
      bank_account_number: "",
      swift_iban_code: "",
      preferred_currency: "",
      payment_terms: "",
      default_tax_rate: "",
      credit_limit: "",
    };
  }

  return (
    <main>
      <FinancialVendorForm vendor={vendor} />
    </main>
  );
}


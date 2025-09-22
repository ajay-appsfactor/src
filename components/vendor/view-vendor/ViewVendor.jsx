"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function ViewVendor({ vendor }) {
  const router = useRouter();
  const subDomain = vendor?.subdomain || "default";
  const domain = vendor?.subdomain?.split(".")[0] || "default";
  const protocol = vendor?.protocol;

 const statusBadgeMap = {
  Active: "bg-green-100 text-green-800",
  Inactive: "bg-gray-200 text-gray-700",
  Blacklisted: "bg-red-100 text-red-800",
};

  //view file
  const getDownloadUrl = (fileUrl) => {
    return `${protocol}//${subDomain}/uploads/${domain}/vendors/tax-attachments/${vendor.id}/${fileUrl}`;
  };
  return (
    <div className="bg-white border border-gray-200 rounded w-full p-6">
      <div className="flex flex-wrap items-center justify-start gap-4 mb-2">
        <h2 className="text-md font-semibold text-slate-800">
          {vendor.first_name} {vendor.last_name}
        </h2>
        <Button
          onClick={() => router.back()}
          variant="outline"
          className="text-sm cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back
        </Button>
      </div>
      <hr />

      {/* Vendor Info */}
      <section className="bg-white mt-4 shadow">
        <h2 className="text-md mb-3 font-semibold text-slate-800">
          Vendor Info
        </h2>
        <Table className="border rounded-lg">
          <TableHeader className="bg-muted">
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Phone</TableHead>
              <TableHead>Website</TableHead>
              <TableHead>Type</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {vendor ? (
              <TableRow key={vendor.id}>
                <TableCell>
                  {vendor.first_name} {vendor.last_name}
                </TableCell>
                <TableCell>{vendor.email}</TableCell>

                <TableCell>{vendor.phone || "-"}</TableCell>
                <TableCell>
                  {vendor.website ? (
                    <Link
                      href={vendor.website}
                      target="_blank"
                      className="text-blue-600 underline"
                    >
                      {vendor.website}
                    </Link>
                  ) : (
                    "-"
                  )}
                </TableCell>
                <TableCell className="max-w-xs truncate">
                  {vendor.vendor_type || "-"}
                </TableCell>
              </TableRow>
            ) : (
              <TableRow>
                <TableCell colSpan={9} className="text-center py-4">
                  No vendor info found.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </section>
      {/* Vendor Contacts */}
      <section className="bg-white mt-4 shadow">
        <h2 className="text-md mb-3 font-semibold text-slate-800">
          Vendor Contacts
        </h2>
        <Table className="border rounded-lg">
          <TableHeader className="bg-muted">
            <TableRow>
              <TableHead>Vendor Name</TableHead>
              <TableHead>Contact Name</TableHead>
              <TableHead>Job Title</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Phone</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {vendor.contacts ? (
              <TableRow key={vendor.contacts.id}>
                <TableCell>{vendor.vendor_name || "-"}</TableCell>
                <TableCell>{vendor.contacts.contact_name || "-"}</TableCell>
                <TableCell>{vendor.contacts.job_title || "-"}</TableCell>
                <TableCell>{vendor.contacts.email || "-"}</TableCell>
                <TableCell>{vendor.contacts.phone || "-"}</TableCell>
              </TableRow>
            ) : (
              <TableRow>
                <TableCell colSpan={5} className="text-center py-4">
                  No contacts found.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </section>

      {/* Vendor Address */}
      <section className="bg-white mt-4 shadow">
        <h2 className="text-md mb-3 font-semibold text-slate-800">
          Vendor Address
        </h2>
        <Table className="border rounded-lg">
          <TableHeader className="bg-muted">
            <TableRow>
              <TableHead>Address</TableHead>
              <TableHead>City</TableHead>
              <TableHead>State</TableHead>
              <TableHead>ZIP</TableHead>
              <TableHead>Country</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {vendor.addresses ? (
              <TableRow key={vendor.addresses.id}>
                <TableCell>
                  {vendor.addresses.address_1}
                  {vendor.addresses.address_2
                    ? `, ${vendor.addresses.address_2}`
                    : ""}
                </TableCell>
                <TableCell>{vendor.addresses.city}</TableCell>
                <TableCell>{vendor.addresses.state}</TableCell>
                <TableCell>{vendor.addresses.zip}</TableCell>
                <TableCell>{vendor.addresses.country}</TableCell>
              </TableRow>
            ) : (
              <TableRow>
                <TableCell colSpan={5} className="text-center py-4">
                  No address found.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </section>

      {/* Vendor Tax Compliance */}
      <section className="bg-white mt-4 shadow">
        <h2 className="text-md mb-3 font-semibold text-slate-800">
          Vendor Tax Compliance
        </h2>
        <Table className="border rounded-lg">
          <TableHeader className="bg-muted">
            <TableRow>
              <TableHead>Tax Number</TableHead>
              <TableHead>VAT Number</TableHead>
              <TableHead>Company Number</TableHead>
              <TableHead>Compliance Type</TableHead>
              <TableHead>File</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {vendor.taxCompliances ? (
              <TableRow key={vendor.taxCompliances.id}>
                <TableCell>{vendor.taxCompliances.tax_number || "-"}</TableCell>
                <TableCell>{vendor.taxCompliances.vat_number || "-"}</TableCell>
                <TableCell>
                  {vendor.taxCompliances.company_number || "-"}
                </TableCell>
                <TableCell>
                  {vendor.taxCompliances.compliance_type || "-"}
                </TableCell>
                <TableCell>
                  {vendor.taxCompliances.file_url ? (
                    <Link
                      href={getDownloadUrl(vendor.taxCompliances.file_url)}
                      target="_blank"
                      className="text-blue-600 underline"
                    >
                      {vendor.taxCompliances.file_name}
                    </Link>
                  ) : (
                    "-"
                  )}
                </TableCell>
              </TableRow>
            ) : (
              <TableRow>
                <TableCell colSpan={6} className="text-center py-4">
                  No compliance info found.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </section>

      {/* Vendor Financial Info */}
      <section className="bg-white mt-4 shadow">
        <h2 className="text-md mb-3 font-semibold text-slate-800">
          Vendor Financial Info
        </h2>
        <Table className="border rounded-lg">
          <TableHeader className="bg-muted">
            <TableRow>
              <TableHead>Bank Name</TableHead>
              <TableHead>Account Number</TableHead>
              <TableHead>SWIFT / IBAN</TableHead>
              <TableHead>Preferred Currency</TableHead>
              <TableHead>Payment Terms</TableHead>
              <TableHead>Default Tax Rate</TableHead>
              <TableHead>Credit Limit</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {vendor.financials ? (
              <TableRow key={vendor.financials.id}>
                <TableCell>{vendor.financials.bank_name || "-"}</TableCell>
                <TableCell>
                  {vendor.financials.bank_account_number || "-"}
                </TableCell>
                <TableCell>
                  {vendor.financials.swift_iban_code || "-"}
                </TableCell>
                <TableCell>{vendor.financials.preferred_currency}</TableCell>
                <TableCell>{vendor.financials.payment_terms}</TableCell>
                <TableCell>
                  {vendor.financials.default_tax_rate || "-"}
                </TableCell>
                <TableCell>
                  {" "}
                  {vendor.financials?.credit_limit
                    ? Number(vendor.financials.credit_limit).toLocaleString()
                    : "-"}
                </TableCell>
              </TableRow>
            ) : (
              <TableRow>
                <TableCell colSpan={7} className="text-center py-4">
                  No financial info found.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </section>

      {/* Vendor Operational Settings */}
      <section className="bg-white mt-4 shadow">
        <h2 className="text-md mb-3 font-semibold text-slate-800">
          Vendor Operational Settings
        </h2>
        <Table className="border rounded-lg">
          <TableHeader className="bg-muted">
            <TableRow>
              <TableHead>Status</TableHead>
              <TableHead>Shipping Method</TableHead>
              <TableHead>Lead Time (days)</TableHead>
              <TableHead>Min Order Qty</TableHead>
              <TableHead>Categories</TableHead>
              <TableHead>Manager</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {vendor.operationalSetting ? (
              <TableRow>
                <TableCell>
                  {vendor.operationalSetting.status ? (
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium ${
                        statusBadgeMap[vendor.operationalSetting.status] ||
                        "bg-gray-100 text-gray-800"
                      }`}
                    >
                      {vendor.operationalSetting.status}
                    </span>
                  ) : (
                    "-"
                  )}
                </TableCell>
                <TableCell>
                  {vendor.operationalSetting.shipping_method || "-"}
                </TableCell>
                <TableCell>
                  {vendor.operationalSetting.lead_time ?? "-"}
                </TableCell>
                <TableCell>
                  {vendor.operationalSetting.minimum_order_quantity ?? "-"}
                </TableCell>
                <TableCell>
                  {vendor.operationalSetting.categories?.length > 0
                    ? vendor.operationalSetting.categories.join(", ")
                    : "-"}
                </TableCell>
                <TableCell>
                  {vendor.operationalSetting.manager || "-"}
                </TableCell>
              </TableRow>
            ) : (
              <TableRow>
                <TableCell colSpan={6} className="text-center py-4">
                  No operational settings found.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </section>

      {/* Vendor Metadata */}
      <section className="bg-white mt-4 shadow">
        <h2 className="text-md mb-3 font-semibold text-slate-800">
          Vendor Metadata
        </h2>
        <Table className="border rounded-lg">
          <TableHeader className="bg-muted">
            <TableRow>
              <TableHead>Notes</TableHead>
              <TableHead>Tags</TableHead>
              <TableHead>Score</TableHead>
              {/* <TableHead>Last Order</TableHead>
              <TableHead>Next Review</TableHead> */}
            </TableRow>
          </TableHeader>
          <TableBody>
            {vendor.metadata ? (
              <TableRow>
                <TableCell className="truncate">
                  {vendor.metadata.notes || "-"}
                </TableCell>
                <TableCell>
                  {vendor.metadata.tags?.length > 0
                    ? vendor.metadata.tags.join(", ")
                    : "-"}
                </TableCell>
                <TableCell>{vendor.metadata.score ?? "-"}</TableCell>
                {/* <TableCell>
                  {vendor.metadata.last_order
                    ? new Date(vendor.metadata.last_order).toLocaleDateString()
                    : "-"}
                </TableCell>
                <TableCell>
                  {vendor.metadata.next_review
                    ? new Date(vendor.metadata.next_review).toLocaleDateString()
                    : "-"}
                </TableCell> */}
              </TableRow>
            ) : (
              <TableRow>
                <TableCell colSpan={5} className="text-center py-4">
                  No metadata found.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </section>
    </div>
  );
}

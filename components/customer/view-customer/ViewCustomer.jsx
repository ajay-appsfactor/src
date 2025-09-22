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

export default function ViewCustomer({ customer }) {
  const router = useRouter();
  const subDomain = customer?.subdomain || "default";
  const domain = customer?.subdomain?.split(".")[0] || "default";
  const protocol = customer?.protocol;

  const statusBadgeMap = {
    Active: "bg-green-100 text-green-800",
    Inactive: "bg-gray-200 text-gray-700",
    Lead: "bg-yellow-100 text-yellow-800",
    Blocked: "bg-red-100 text-red-800",
  };

  //view file
  const getDownloadUrl = (fileUrl) => {
    return `${protocol}//${subDomain}/uploads/${domain}/customers/attachment-notes/${customer.id}/${fileUrl}`;
  };
  return (
    <div className="bg-white border border-gray-200 rounded w-full p-6">
      <div className="flex flex-wrap items-center justify-start gap-4 mb-2">
        <h2 className="text-md font-semibold text-slate-800">
          {customer.first_name} {customer.last_name}
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

      {/* Customer Info */}
      <section className="bg-white mt-4 shadow">
        <h2 className="text-md mb-3 font-semibold text-slate-800">
          Customer Info
        </h2>
        <Table className="border rounded-lg">
          <TableHeader className="bg-muted">
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Company</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Phone</TableHead>
              <TableHead>Website</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Notes</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {customer ? (
              <TableRow key={customer.id}>
                <TableCell>
                  {customer.first_name} {customer.last_name}
                </TableCell>
                <TableCell>{customer.company_name || "-"}</TableCell>
                <TableCell>{customer.email}</TableCell>
                <TableCell>
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-medium ${
                      statusBadgeMap[customer.is_active] ||
                      "bg-gray-100 text-gray-600"
                    }`}
                  >
                    {customer.is_active}
                  </span>
                </TableCell>
                <TableCell>{customer.phone || "-"}</TableCell>
                <TableCell>
                  {customer.website ? (
                    <Link
                      href={customer.website}
                      target="_blank"
                      className="text-blue-600 underline"
                    >
                      {customer.website}
                    </Link>
                  ) : (
                    "-"
                  )}
                </TableCell>
                  <TableCell className="max-w-xs">
                  {customer.type || "-"}
                </TableCell>
                <TableCell className="max-w-xs truncate">
                  {customer.notes || "-"}
                </TableCell>
              </TableRow>
            ) : (
              <TableRow>
                <TableCell colSpan={9} className="text-center py-4">
                  No customer info found.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </section>

      {/* Billing  Addresses */}
      <section className="bg-white mt-4 shadow">
        <h2 className="text-md mb-3 font-semibold text-slate-800">
          Billing Addresses
        </h2>
        <Table className="border rounded-lg">
          <TableHeader className="bg-muted">
            <TableRow>
              <TableHead>Default</TableHead>
              <TableHead>Billing Address</TableHead>
              <TableHead>City</TableHead>
              <TableHead>State</TableHead>
              <TableHead>ZIP</TableHead>
              <TableHead>Country</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {customer.addresses.length > 0 ? (
              customer.addresses.map((addr) => (
                <TableRow key={addr.id}>
                  <TableCell>{addr.is_default ? "Yes" : "No"}</TableCell>
                  <TableCell>
                    {addr.billing_address}
                    {addr.billing_address2 ? `, ${addr.billing_address2}` : ""}
                  </TableCell>
                  <TableCell>{addr.billing_city}</TableCell>
                  <TableCell>{addr.billing_state}</TableCell>
                  <TableCell>{addr.billing_zip}</TableCell>
                  <TableCell>{addr.billing_country}</TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={11} className="text-center py-4">
                  No billing addresses found.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </section>

      {/* Shipping  Addresses */}
      <section className="bg-white mt-4 shadow">
        <h2 className="text-md mb-3 font-semibold text-slate-800">
          Shipping Addresses
        </h2>
        <Table className="border rounded-lg">
          <TableHeader className="bg-muted">
            <TableRow>
              <TableHead>Default</TableHead>
              <TableHead>Shipping Address</TableHead>
              <TableHead>City</TableHead>
              <TableHead>State</TableHead>
              <TableHead>ZIP</TableHead>
              <TableHead>Country</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {customer.addresses.length > 0 ? (
              customer.addresses.map((addr) => (
                <TableRow key={addr.id}>
                  <TableCell>{addr.is_default ? "Yes" : "No"}</TableCell>
                  <TableCell>
                    {addr.shipping_address}
                    {addr.shipping_address2
                      ? `, ${addr.shipping_address2}`
                      : ""}
                  </TableCell>
                  <TableCell>{addr.shipping_city}</TableCell>
                  <TableCell>{addr.shipping_state}</TableCell>
                  <TableCell>{addr.shipping_zip}</TableCell>
                  <TableCell>{addr.shipping_country}</TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={11} className="text-center py-4">
                  No shipping addresses found.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </section>

      {/* Customer Tax Info */}
      <section className="bg-white mt-4 shadow">
        <h2 className="text-md mb-3 font-semibold text-slate-800">
          Customer Tax Info
        </h2>
        <Table className="border rounded-lg">
          <TableHeader className="bg-muted">
            <TableRow>
              <TableHead>Tax Number</TableHead>
              <TableHead>Default Tax (%)</TableHead>
              <TableHead>Currency</TableHead>
              <TableHead>Payment Terms</TableHead>
              <TableHead>Credit Limit</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {customer.tax_info ? (
              <TableRow key={customer.tax_info.id}>
                <TableCell>{customer.tax_info.tax_number || "-"}</TableCell>
                <TableCell>
                  {customer.tax_info.default_tax || "-"}
                </TableCell>
                <TableCell>{customer.tax_info.currency}</TableCell>
                <TableCell>{customer.tax_info.payment_terms}</TableCell>
                <TableCell>
                  {customer.tax_info.credit_limit || "-"}
                </TableCell>
              </TableRow>
            ) : (
              <TableRow>
                <TableCell colSpan={5} className="text-center py-4">
                  No tax info found.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </section>

      {/* Customer Contacts */}
      <section className="bg-white mt-4 shadow">
        <h2 className="text-md mb-3 font-semibold text-slate-800">
          Customer Contacts
        </h2>
        <Table className="border rounded-lg">
          <TableHeader className="bg-muted">
            <TableRow>
              <TableHead>Primary</TableHead>
              <TableHead>Customer Name</TableHead>
              <TableHead>Contact Name</TableHead>
              <TableHead>Job Title</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Phone</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {customer.contacts && customer.contacts.length > 0 ? (
              customer.contacts.map((contact) => (
                <TableRow key={contact.id}>
                  <TableCell>{contact.is_primary ? "Yes" : "No"}</TableCell>
                  <TableCell>{contact.customer_name}</TableCell>
                  <TableCell>{contact.contact_name || "-"}</TableCell>
                  <TableCell>{contact.job_title || "-"}</TableCell>
                  <TableCell>{contact.contact_email || "-"}</TableCell>
                  <TableCell>{contact.contact_phone || "-"}</TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={6} className="text-center py-4">
                  No contacts found.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </section>

      {/* Customer Operational Info */}
      <section className="bg-white mt-4 shadow">
        <h2 className="text-md mb-3 font-semibold text-slate-800">
          Customer Operational Info
        </h2>
        <Table className="border rounded-lg">
          <TableHeader className="bg-muted">
            <TableRow>
              <TableHead>Delivery Method</TableHead>
              <TableHead>Quote Format</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {customer.operational ? (
              <TableRow key={customer.operational.id}>
                <TableCell>
                  {customer.operational.delivery_method || "-"}
                </TableCell>
                <TableCell>
                  {customer.operational.quote_format || "-"}
                </TableCell>
              </TableRow>
            ) : (
              <TableRow>
                <TableCell colSpan={2} className="text-center py-4">
                  No operational info found.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </section>

      {/* Customer Notes & Attachments */}
      <section className="bg-white mt-4 shadow">
        <h2 className="text-md mb-3 font-semibold text-slate-800">
          Customer Notes & Attachments
        </h2>
        <Table className="border rounded-lg">
          <TableHeader className="bg-muted">
            <TableRow>
              <TableHead>Internal Notes</TableHead>
              <TableHead>Tags</TableHead>
              <TableHead>File</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {customer.attachments && customer.attachments.length > 0 ? (
              customer.attachments.map((note) => (
                <TableRow key={note.id}>
                  <TableCell className="max-w-xs truncate">
                    {note.internal_notes || "-"}
                  </TableCell>
                  <TableCell>
                    {note.tags && note.tags.length > 0
                      ? note.tags.join(", ")
                      : "-"}
                  </TableCell>
                  <TableCell>
                    {note.file_url ? (
                      // <a
                      //   href={note.file_url}
                      //   target="_blank"
                      //   rel="noopener noreferrer"
                      //   className="text-blue-600 underline"
                      // >
                      //   {note.file_name || "View File"}
                      // </a>
                      <Link
                        href={getDownloadUrl(note.file_url)}
                        target="_blank"
                        className="text-blue-600 underline"
                      >
                        {note.file_name}
                      </Link>
                    ) : (
                      "-"
                    )}
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={4} className="text-center py-4">
                  No notes or attachments found.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </section>
    </div>
  );
}

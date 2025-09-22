"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const sidebarLinks = [
  { label: "Lead Information", href: "/admin/lead/create" },
  // { label: "Primary Contact Details", href: "/admin/vendor/contact-details" },
  // { label: "Address Details", href: "/admin/vendor/address-details" },
  // { label: "Tax & Compliance", href: "/admin/vendor/tax-compliance" },
  // {
  //   label: "Payment & Financial Info",
  //   href: "/admin/vendor/payment-financial-info",
  // },
  // { label: "Operational Settings", href: "/admin/vendor/operational-settings" },
  // { label: "Notes & Metadata", href: "/admin/vendor/notes-and-metadata" },
];

export default function VendorLayout({ children }) {
  const pathname = usePathname();
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [customerId, setCustomerId] = useState(null);

  // Get values from localStorage on mount
  useEffect(() => {
    const submitted = localStorage.getItem("customerFormSubmitted") === "true";
    const id = localStorage.getItem("customerId");

    setIsFormSubmitted(submitted);
    setCustomerId(id);
  }, []);

  return (
    <div className="flex items-start gap-4">
      {/* Sidebar */}
      <aside className="w-96 bg-white border border-gray-200 sticky top-0 self-start h-fit rounded p-4">
        <nav className="space-y-2">
          {sidebarLinks.map((link, index) => {
            const isFirst = index === 0;
            const isActive = pathname.startsWith(link.href);
            const isDisabled = !isFormSubmitted && !isFirst;

            const finalHref =
              isFirst || !customerId
                ? link.href
                : `${link.href}?customerId=${customerId}`;

            return (
              <Link
                key={index}
                href={isDisabled ? "#" : finalHref}
                className={cn(
                  "block px-4 py-2 rounded text-sm font-medium transition",
                  isDisabled
                    ? "text-gray-400 bg-gray-50 cursor-not-allowed pointer-events-none"
                    : "text-gray-700 hover:bg-gray-100",
                  isActive && "bg-blue-100 text-blue-700"
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
      </aside>

      {/* Main Content */}
      <div className="bg-white border border-gray-200 rounded w-full h-full">
        {children}
      </div>
    </div>
  );
}

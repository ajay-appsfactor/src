"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const sidebarLinks = [
  { label: "Vendor Information", href: "" },
  { label: "Primary Contact Details", href: "/admin/vendor/contact-details" },
  { label: "Address Details", href: "/admin/vendor/address-details" },
  { label: "Tax & Compliance", href: "/admin/vendor/tax-compliance" },
  {
    label: "Payment & Financial Info",
    href: "/admin/vendor/payment-financial-info",
  },
  { label: "Operational Settings", href: "/admin/vendor/operational-settings" },
  { label: "Notes & Metadata", href: "/admin/vendor/notes-and-metadata" },
];

export default function VendorLayout({ children }) {
  const pathname = usePathname();

  return (
    <div className="flex flex-col md:flex-row gap-4">
      {/* Sidebar */}
      <aside className="w-full md:w-80 bg-white border border-gray-200 sticky top-0 self-start h-fit rounded p-4">
        <nav className="space-y-2">
          {sidebarLinks.map((link, index) => {
            const isFirst = index === 0;
            const isActive = isFirst && pathname.startsWith(link.href);
            const isDisabled = !isFirst;

            return (
              <Link
                key={index}
                href={isDisabled ? "#" : link.href}
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
      <div className="flex-1 bg-white border border-gray-200 rounded overflow-auto">
        {children}
      </div>
    </div>
  );
}

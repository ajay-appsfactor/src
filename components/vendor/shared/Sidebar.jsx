"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const sidebarLinks = [
  { label: "Vendor Information", href: "" },
  { label: "Primary Contact Details", href: "contact-details" },
  { label: "Address Details", href: "address-details" },
  { label: "Tax & Compliance", href: "tax-compliance" },
  {
    label: "Payment & Financial Info",
    href: "payment-financial-info",
  },
  { label: "Operational Settings", href: "operational-settings" },
  { label: "Notes & Metadata", href: "notes-and-metadata" },
];

export default function Sidebar({ vendorId }) {
  const pathname = usePathname();
  const normalize = (path) => path.replace(/\/+$/, "");

  return (
    <aside className="w-full md:w-80 bg-white border border-gray-200 sticky top-0 self-start h-fit rounded p-4">
      <nav className="space-y-2">
        {sidebarLinks.map((link) => {
          const fullPath = `/vendor/${vendorId}/${link.href}`;
          const isActive = normalize(pathname) === normalize(fullPath);

          return (
            <Link
              key={link.href}
              href={fullPath}
              className={cn(
                "block px-4 py-2 rounded text-sm font-medium transition",
                isActive
                  ? " bg-blue-100 text-blue-700"
                  : "text-gray-700 hover:bg-gray-100"
              )}
            >
              {link.label}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}

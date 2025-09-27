"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const sidebarLinks = [
  { label: "Customer Information", href: "" },
  { label: "Address Details", href: "address-details" },
  { label: "Tax & Financial Info", href: "tax-financial" },
  { label: "Contact Persons", href: "contact-persons" },
  { label: "Operational Details", href: "operational-details" },
  { label: "Attachments & Notes", href: "attachments-notes" },
];

export default function Sidebar({ customerId }) {
  const pathname = usePathname();
  const normalize = (path) => path.replace(/\/+$/, "");

  return (
    <aside className="w-full md:w-96 bg-white border border-gray-200 rounded p-4 h-fit">
      <nav className="space-y-2"> 
        {sidebarLinks.map((link) => {
          const fullPath = `/customer/${customerId}/edit/${link.href}`;
          const isActive = normalize(pathname) === normalize(fullPath);

          return (
            <Link
              key={link.href}
              href={fullPath}
              className={cn(
                "block px-4 py-2 rounded text-sm font-medium transition",
                isActive
                  ? "bg-blue-100 text-blue-700"
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

"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";

const sidebarLinks = [
  { label: "Add Customer Information", href: "/customer/create" },
  { label: "Address Details", href: "/customer/address-details" },
  { label: "Tax & Financial Info", href: "/customer/tax-financial" },
  { label: "Contact Persons", href: "/customer/contact-persons" },
  { label: "Operational Details", href: "/customer/operational-details" },
  { label: "Attachments & Notes", href: "/customer/attachments-notes" },
];

export default function CustomerLayout({ children }) {
  return (
    <div className="flex flex-col md:flex-row gap-4">
      {/* Sidebar */}
      <aside className="w-full md:w-96 bg-white border border-gray-200 rounded p-4 h-fit">
        <nav className="space-y-2">
          {sidebarLinks.map((link, index) => {
            const isFirst = index === 0;
            const isActive = isFirst; 
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
      <section className="w-full bg-white border border-gray-200 rounded overflow-auto">
        {children}
      </section>
    </div>
  );
}

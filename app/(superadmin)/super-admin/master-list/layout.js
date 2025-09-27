"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const sidebarGroups = [
  {
    title: "Finance & Currency",
    links: [
      { label: "Currency", href: "/super-admin/master-list/currency" },
      { label: "Finance Status", href: "/super-admin/master-list/finance-status" },
    ],
  },
  {
    title: "Logistics & Order",
    links: [
      {
        label: "Logistics Status",
        href: "/super-admin/master-list/logistics-status",
      },
      { label: "Order Status", href: "/super-admin/master-list/order-status" },
    ],
  },
  {
    title: "Payment & Quote",
    links: [
      {
        label: "Payment Status",
        href: "/super-admin/master-list/payment-status",
      },
      {
        label: "Payment Terms",
        href: "/super-admin/master-list/payment-terms",
      },
      { label: "Quote Status", href: "/super-admin/master-list/quote-status" },
    ],
  },
  {
    title: "Services",
    links: [
      {
        label: "Service Setup",
        href: "/super-admin/master-list/services",
      },
    ],
  },
  {
    title: "Vendor Settings",
    links: [
      {
        label: "Vendor Capabilities",
        href: "/super-admin/master-list/vendor-capabilities",
      },
      {
        label: "Vendor Certifications",
        href: "/super-admin/master-list/vendor-certifications",
      },
      { label: "Vendor Flags", href: "/super-admin/master-list/vendor-flags" },
    ],
  },
];

export default function CustomerLayout({ children }) {
  const pathname = usePathname();

  return (
    <div className="flex flex-col md:flex-row gap-4">
      {/* Sidebar */}
      <aside className="w-full md:w-80 bg-white border border-gray-200 rounded p-4 h-fit">
        <nav className="space-y-4">
          {sidebarGroups.map((group, i) => (
            <div key={i} className="space-y-2">
              <h3 className="font-semibold text-sm text-slate-800 tracking-wide">
                {group.title}
              </h3>
              <div className="flex flex-col space-y-1">
                {group.links.map((link, j) => {
                  const isActive = pathname.startsWith(link.href);

                  return (
                    <Link
                      key={j}
                      href={link.href}
                      className={cn(
                        "block px-4 py-2 rounded-md text-sm font-medium transition",
                        "text-gray-700 hover:bg-gray-100",
                        isActive && "bg-blue-100 text-blue-700"
                      )}
                    >
                      {link.label}
                    </Link>
                  );
                })}
              </div>
            </div>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <section className="flex-1 bg-white border border-gray-200 rounded overflow-auto">
        {children}
      </section>
    </div>
  );
}

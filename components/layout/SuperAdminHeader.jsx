"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Menu, Home } from "lucide-react";
import clsx from "clsx";

export default function SuperAdminHeader() {
  const pathname = usePathname();

  const adminLinks = [
    { href: "/super-admin/company", label: "Company" },
    { href: "/super-admin/master-list/currency", label: "Master List", nestedPrefix: "/super-admin/master-list/" },
  ];

  const isLinkActive = (link) => {
    if (link.nestedPrefix) {
      return pathname === link.href || pathname.startsWith(link.nestedPrefix);
    }
    return pathname.startsWith(link.href);
  };

  const renderLink = (link, isMobile = false) => (
    <Link
      key={link.href}
      href={link.href}
      className={clsx(
        "flex items-center justify-start px-3 py-2 transition-all duration-200 border",
        isLinkActive(link)
          ? "bg-white text-black font-medium border-black"
          : "text-white border-transparent hover:bg-white hover:text-black hover:border-gray-400",
        isMobile ? "text-sm rounded-md" : ""
      )}
    >
      {link.label}
    </Link>
  );

  return (
    <header className="sticky top-0 z-50 w-full bg-slate-800 border-b shadow-sm">
      <div className="max-w-8xl mx-auto flex items-center justify-between px-2 md:px-0">
        {/* Desktop Nav */}
        <nav className="hidden md:flex w-full items-center gap-1 text-sm font-medium whitespace-nowrap overflow-x-auto text-white">
          {/* Home */}
          <Link
            href="/super-admin/dashboard"
            className={clsx(
              "flex items-center justify-center px-4 py-2 transition-all duration-200 border",
              pathname.startsWith("/super-admin/dashboard")
                ? "bg-white text-black font-medium border-black"
                : "text-white border-transparent hover:bg-white hover:text-black hover:border-gray-400"
            )}
          >
            <Home className="h-5 w-5" />
          </Link>

          {adminLinks.map((link) => renderLink(link))}
        </nav>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Menu className="h-6 w-6 text-white cursor-pointer" />
            </SheetTrigger>
            <SheetContent side="left" className="w-[260px] p-4 bg-gray-800 text-white">
              <SheetHeader>
                <SheetTitle className="text-white text-lg">Menu</SheetTitle>
              </SheetHeader>
              <nav className="space-y-3 mt-6">
                {/* Home */}
                <Link
                  href="/super-admin/dashboard"
                  className={clsx(
                    "flex items-center justify-start gap-2 px-3 py-2 transition-all duration-200 border",
                    pathname.startsWith("/super-admin/dashboard")
                      ? "bg-white text-black font-medium border-black"
                      : "text-white border-transparent hover:bg-white hover:text-black hover:border-gray-400"
                  )}
                >
                  <Home className="h-4 w-4" />
                  Home
                </Link>

                {adminLinks.map((link) => renderLink(link, true))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

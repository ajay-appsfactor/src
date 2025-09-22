"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Menu, Home } from "lucide-react";
import clsx from "clsx";

export default function SuperAdminHeader() {
  const pathname = usePathname();

  const adminLinks = [
    { href: "/super-admin/company", label: "Company" },
    { href: "/super-admin/master-list/currency", label: "Master List" , nestedPrefix: "/master-list/"},
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-slate-800 border-b shadow-sm">
      <div className="max-w-8xl mx-auto flex items-start justify-start">
        {/* Desktop Nav */}
        <nav className="hidden md:flex w-full items-center gap-1 text-sm font-medium whitespace-nowrap overflow-x-auto text-white">
          {/* Home link */}
          <Link
            href="/super-admin/dashboard"
            className={clsx(
              "flex items-center justify-start px-4 py-2 transition-all duration-200 border",
              pathname.startsWith("/super-admin/dashboard")
                ? "bg-white text-black font-medium border-black"
                : "text-white border-transparent hover:bg-white hover:text-black hover:border-gray-400"
            )}
          >
            <Home className="h-5 w-5" />
          </Link>

          {adminLinks.map((link) => {
            const isActive = pathname.startsWith(link.href);

            return (
              <Link
                key={link.href}
                href={link.href}
                className={clsx(
                  "flex items-center justify-start px-3 py-2 transition-all duration-200 border",
                  isActive
                    ? "bg-white text-black font-medium border-black"
                    : "text-white border-transparent hover:bg-white hover:text-black hover:border-gray-400"
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Mobile Menu */}
        <div className="md:hidden ml-auto">
          <Sheet>
            <SheetTrigger className="text-white" asChild>
              <Menu className="h-6 w-6" />
            </SheetTrigger>

            <SheetContent
              side="left"
              className="w-[260px] p-4 bg-gray-800 text-white"
            >
              <SheetHeader>
                <SheetTitle className="text-white text-lg">Menu</SheetTitle>
              </SheetHeader>

              <nav className="space-y-3 mt-6">
                {/* Mobile Home link */}
                <Link
                  href="/super-admin/dashboard"
                  className={clsx(
                    "flex items-center justify-start gap-2 px-3 py-2 rounded-md transition-all duration-200 border",
                    pathname.startsWith("/super-admin/dashboard")
                      ? "bg-white text-black font-semibold border-black"
                      : "text-white/80 border-transparent hover:bg-white hover:text-black hover:border-gray-400"
                  )}
                >
                  <Home className="h-4 w-4" />
                  Home
                </Link>

                {/* Mobile nav links */}
                {adminLinks.map((link) => {
                  const isActive = pathname.startsWith(link.href);

                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={clsx(
                        "flex items-center justify-start gap-2 text-sm font-medium px-3 py-2 rounded-md transition-all duration-200 border",
                        isActive
                          ? "bg-white text-black font-semibold border-black"
                          : "text-white/80 border-transparent hover:bg-white hover:text-black hover:border-gray-400"
                      )}
                    >
                      {link.label}
                    </Link>
                  );
                })}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

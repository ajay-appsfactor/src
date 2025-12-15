"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home , Menu } from "lucide-react";
import clsx from "clsx";
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from "@/components/ui/sheet";

export default function TenantTopHeader({ session }) {
  const pathname = usePathname();

  const role = session?.user?.roles?.[0];
  const customerId = session?.user?.id;

  const customerLinks = [
    { href: `/customer/${customerId}/create-quote`, label: "Create Quote" },
    { href: `/customer/${customerId}/quotes`, label: "View Projects" },
    { href: `/customer/${customerId}/my-account`, label: "My Account" },
  ];

  const adminLinks = [
    { href: "/customers", label: "Customers", nestedPrefix: "/customer/" },
    { href: "/vendors", label: "Vendors", nestedPrefix: "/vendor/" },
    { href: "/users", label: "Users" },
    {
      href: "/settings/general-settings",
      label: "Settings",
      nestedPrefix: "/settings/",
    },
  ];

  const links = role === "customer" ? customerLinks : adminLinks;

  const isActive = (link) => {
    if (link.nestedPrefix) {
      return pathname === link.href || pathname.startsWith(link.nestedPrefix);
    }
    return pathname === link.href || pathname.startsWith(link.href);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-slate-800 border-b shadow-sm">
      <nav className="hidden md:flex items-center gap-2 text-white">
        <Link
          href="/dashboard"
          className={clsx(
            "px-3 py-2",
            pathname === "/dashboard" && "bg-white text-black"
          )}
        >
          <Home className="h-5 w-5" />
        </Link>

        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={clsx(
              "px-3 py-2 hover:bg-white hover:text-black",
              isActive(link) && "bg-white text-black"
            )}
          >
            {link.label}
          </Link>
        ))}
      </nav>

      {/* Mobile Menu */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <button className="text-white p-2 rounded-md">
                <Menu className="h-6 w-6" />
              </button>
            </SheetTrigger>

            <SheetContent side="left" className="w-64 bg-slate-800 text-white p-4">
              <SheetHeader>
                <SheetTitle className="text-white text-lg">Menu</SheetTitle>
              </SheetHeader>

              <nav className="mt-4 flex flex-col gap-2">
                {links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={clsx(
                      "block px-3 py-2 rounded-md transition-colors",
                      isActive(link) ? "bg-white text-black" : "hover:bg-white hover:text-black text-white/80"
                    )}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
    </header>
  );
}

// "use client";

// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import {
//   Sheet,
//   SheetContent,
//   SheetTrigger,
//   SheetHeader,
//   SheetTitle,
// } from "@/components/ui/sheet";
// import { Menu, Home } from "lucide-react";
// import clsx from "clsx";

// export default function TenantTopHeader() {
//   const pathname = usePathname();

//   // Top-level links with optional nested route prefixes
//   const companyLinks = [
//     { href: "/customers", label: "Customers", nestedPrefix: "/customer/" },
//     { href: "/vendors", label: "Vendors", nestedPrefix: "/vendor/" },
//     { href: "/users", label: "Users" },
//     // { href: "/general-settings", label: "General Settings" },
//     { href: "/settings/general-settings", label: "Settings" , nestedPrefix: "/settings/" }
//   ];

//   // Helper to determine active state
//   const isLinkActive = (link) => {
//     if (link.nestedPrefix) {
//       return pathname === link.href || pathname.startsWith(link.nestedPrefix);
//     }
//     return pathname.startsWith(link.href);
//   };

//   return (
//     <header className="sticky top-0 z-50 w-full bg-slate-800 border-b shadow-sm">
//       <div className="max-w-8xl mx-auto flex items-start justify-start">
//         {/* Desktop Nav */}
//         <nav className="hidden md:flex w-full items-center gap-1 text-sm font-medium whitespace-nowrap overflow-x-auto text-white">
//           {/* Dashboard / Home */}
//           <Link
//             href="/dashboard"
//             className={clsx(
//               "flex items-center justify-start px-4 py-2 transition-all duration-200 border",
//               pathname === "/dashboard"
//                 ? "bg-white text-black font-medium border-black"
//                 : "text-white border-transparent hover:bg-white hover:text-black hover:border-gray-400"
//             )}
//           >
//             <Home className="h-5 w-5" />
//           </Link>

//           {/* Company links */}
//           {companyLinks.map((link) => (
//             <Link
//               key={link.href}
//               href={link.href}
//               className={clsx(
//                 "flex items-center justify-start px-3 py-2 transition-all duration-200 border",
//                 isLinkActive(link)
//                   ? "bg-white text-black font-medium border-black"
//                   : "text-white border-transparent hover:bg-white hover:text-black hover:border-gray-400"
//               )}
//             >
//               {link.label}
//             </Link>
//           ))}
//         </nav>

//         {/* Mobile Menu */}
//         <div className="md:hidden ml-auto">
//           <Sheet>
//             <SheetTrigger className="text-white" asChild>
//               <Menu className="h-6 w-6" />
//             </SheetTrigger>

//             <SheetContent side="left" className="w-[260px] p-4 bg-gray-800 text-white">
//               <SheetHeader>
//                 <SheetTitle className="text-white text-lg">Menu</SheetTitle>
//               </SheetHeader>

//               <nav className="space-y-3 mt-6">
//                 {/* Mobile Dashboard */}
//                 <Link
//                   href="/dashboard"
//                   className={clsx(
//                     "flex items-center justify-start gap-2 px-3 py-2 rounded-md transition-all duration-200 border",
//                     pathname === "/dashboard"
//                       ? "bg-white text-black font-semibold border-black"
//                       : "text-white/80 border-transparent hover:bg-white hover:text-black hover:border-gray-400"
//                   )}
//                 >
//                   <Home className="h-4 w-4" />
//                   Home
//                 </Link>

//                 {/* Mobile Company links */}
//                 <div className="border-t border-white/20 mt-4 pt-4">
//                   {companyLinks.map((link) => (
//                     <Link
//                       key={link.href}
//                       href={link.href}
//                       className={clsx(
//                         "block px-3 py-2 rounded-md text-sm font-medium",
//                         isLinkActive(link)
//                           ? "bg-white text-black"
//                           : "text-white/80 hover:bg-white hover:text-black"
//                       )}
//                     >
//                       {link.label}
//                     </Link>
//                   ))}
//                 </div>
//               </nav>
//             </SheetContent>
//           </Sheet>
//         </div>
//       </div>
//     </header>
//   );
// }

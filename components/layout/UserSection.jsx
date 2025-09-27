"use client";

import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { Users, Settings, LogOut, User } from "lucide-react";
import { useUser } from "@/context/UserContext";
import { useCompany } from "@/context/CompanyContext";
import { useLogout } from "./LogoutButton";
import { Loader } from "lucide-react";

export default function UserSection() {
  const { handleLogout } = useLogout();
  const { company } = useCompany();
  const { user } = useUser();
  // console.log("UserContext :", user);

  if (!company || !user) {
    return (
      <div className="text-gray-400">
        <Loader className="w-4 h-4 animate-spin" />
      </div>
    );
  }

  return (
    <div className="flex items-center gap-4 sm:gap-12 text-sm text-muted-foreground whitespace-nowrap">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <div className="flex items-center gap-2 text-primary cursor-pointer">
            <div className="hidden sm:flex items-center gap-2">
              <Users className="h-5 w-5 shrink-0" />
              <div className="flex flex-col leading-tight text-sm">
                <span className="font-medium">
                  {company?.company_name || "Company"}
                </span>
                <span className="text-gray-900 text-md hidden lg:inline">
                  {user?.name ||
                    `${user?.first_name || ""} ${
                      user?.last_name || ""
                    }`.trim() ||
                    "Guest"}
                </span>
              </div>
            </div>
          </div>
        </DropdownMenuTrigger>

        <DropdownMenuContent align="end" className="w-56">
          {/* <DropdownMenuItem asChild>
            <Link href="/profile" className="flex items-center gap-2">
              <User className="h-4 w-4" /> Profile
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link href="/settings" className="flex items-center gap-2">
              <Settings className="h-4 w-4" /> Settings
            </Link>
          </DropdownMenuItem>
          <DropdownMenuSeparator /> */}
          <DropdownMenuItem
            onClick={handleLogout}
            className="text-red-600 focus:text-red-600 cursor-pointer"
          >
            <LogOut className="h-4 w-4 mr-2" /> Logout
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}

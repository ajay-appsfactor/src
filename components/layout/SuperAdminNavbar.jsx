"use client";

import Link from "next/link";
import { useLogout } from "./LogoutButton";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import {
  SearchIcon,
  MessageCircleQuestionMark,
  Users,
  Settings,
  LogOut,
  User,
  Menu,
} from "lucide-react";
import {  useState } from "react";
import Image from "next/image";
import Logo from "../../../public/logo.png";

export default function SuperAdminNavbar({ user }) {
  const { handleLogout } = useLogout();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const displayName = user?.name 
  const displayCompany = user?.company_name;
 
  return (
    <header className="border-b bg-white dark:bg-gray-900 w-full">
      <div className="max-w-8xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
        {/* Left section: Mobile menu + Logo */}
        <div className="flex items-center gap-4">
          <button
            className="sm:hidden text-gray-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Menu className="h-6 w-6" />
          </button>

          <Image
            src={Logo}
            alt="logo"
            className="h-10 w-40"
            draggable="false"
            priority
          />
        </div>

       
        {/* Right section */}
        <div className="flex items-center gap-4 sm:gap-12 text-sm text-muted-foreground whitespace-nowrap">
          <button
            className="sm:hidden text-gray-700"
            onClick={() => setSearchOpen(true)}
          >
            <SearchIcon className="h-5 w-5" />
          </button>

          <div className="hidden sm:flex items-center gap-1 cursor-pointer text-gray-900 hover:text-primary">
            <MessageCircleQuestionMark className="h-4 w-4" />
            <span className="hidden md:inline">Help</span>
          </div>

          {/* User menu */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <div className="flex items-center gap-2 text-primary cursor-pointer">
                <div className="sm:hidden">
                  <User className="h-5 w-5" />
                </div>
                <div className="hidden sm:flex items-center gap-2">
                  <Users className="h-5 w-5 shrink-0" />
                  <div className="flex flex-col leading-tight text-sm">
                    <span className="font-medium">{displayCompany}</span>
                    <span className="text-gray-900 text-md hidden lg:inline">
                      {displayName}
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
              </DropdownMenuItem> */}
              {/* <DropdownMenuItem asChild>
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
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-white border-t absolute w-full z-10 left-0 px-4 py-2">
          <div className="flex flex-col gap-3">
            {/* <Link
              href="/profile"
              className="flex items-center gap-2 py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              <User className="h-4 w-4" /> Profile
            </Link>
            <Link
              href="/settings"
              className="flex items-center gap-2 py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              <Settings className="h-4 w-4" /> Settings
            </Link> */}
            <div
              className="flex items-center gap-2 py-2 text-red-600 cursor-pointer"
              onClick={() => {
                handleLogout();
                setMobileMenuOpen(false);
              }}
            >
              <LogOut className="h-4 w-4" /> Logout
            </div>
            <div className="flex items-center gap-2 py-2">
              <MessageCircleQuestionMark className="h-4 w-4" /> Help
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

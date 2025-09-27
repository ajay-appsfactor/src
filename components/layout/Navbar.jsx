"use client";

import { Suspense, useState } from "react";
import CompanyLogo from "./CompanyLogo";
import UserSection from "./UserSection";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import {
  SearchIcon,
  MessageCircleQuestionMark,
  Settings,
  LogOut,
  User,
  Menu,
} from "lucide-react";
import Image from "next/image";
import Logo from "../../../public/logo.png";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

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

          {/* Company Logo */}

          <Suspense fallback={<div className="h-10 w-40 bg-gray-100" />}>
            <CompanyLogo />
          </Suspense>

          {/* Our Main Company logo  */}
          <div className="h-10 w-40 flex items-center justify-start bg-white">
            <Image
              src={Logo}
              alt="logo"
              width={160}
              height={40}
              className="object-contain w-full h-full"
              draggable="false"
              priority
            />
          </div>
        </div>

        {/* Search bar */}
        {searchOpen ? (
          <div className="flex-1 mx-4 sm:hidden absolute left-0 right-0 top-16 bg-white px-4 py-2 z-10">
            <div className="relative">
              <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                type="text"
                placeholder="Search..."
                className="pl-10 h-9 w-full"
                autoFocus
              />
              <button
                className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500"
                onClick={() => setSearchOpen(false)}
              >
                ✕
              </button>
            </div>
          </div>
        ) : (
          <div className="flex-1 max-w-md mx-4 hidden sm:block">
            <div className="relative">
              <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                type="text"
                placeholder="Search..."
                className="pl-10 h-9"
              />
            </div>
          </div>
        )}

        {/* Right section */}
        <div className="flex items-center gap-4 sm:gap-12 text-sm text-muted-foreground whitespace-nowrap">
          {/* Mobile search button */}
          <button
            className="sm:hidden text-gray-700"
            onClick={() => setSearchOpen(true)}
          >
            <SearchIcon className="h-5 w-5" />
          </button>

          {/* Help (static, suspense ki need nahi) */}
          <div className="hidden sm:flex items-center gap-1 cursor-pointer text-gray-900 hover:text-primary">
            <MessageCircleQuestionMark className="h-4 w-4" />
            <span className="hidden md:inline">Help</span>
          </div>

          {/* User section (Suspense) */}
          <Suspense fallback={<div className="text-gray-400">Loading...</div>}>
            <UserSection />
          </Suspense>
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
              Profile
            </Link>
            <Link
              href="/settings"
              className="flex items-center gap-2 py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Settings
            </Link> */}
            <div
              className="flex items-center gap-2 py-2 text-red-600 cursor-pointer"
              onClick={() => setMobileMenuOpen(false)}
            >
              Logout
            </div>
            <div className="flex items-center gap-2 py-2">Help</div>
          </div>
        </div>
      )}
    </header>
  );
}

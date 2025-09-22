"use client";

import { useCompany } from "@/context/CompanyContext";
import { Loader } from "lucide-react";

export default function CompanyLogo() {
  const { company } = useCompany();

  if (!company) {
    return (
      <div className="h-10 flex items-center justify-start text-gray-400">
          <Loader className="w-4 h-4 animate-spin" />
      </div>
    );
  }

  return (
    <div className="h-10 flex items-center justify-start bg-white">
      <img
        src={company?.company_logo_url || Logo.src}
        alt="logo"
        width={160}
        height={40}
        className="object-contain w-full h-full"
        draggable="false"
      />
    </div>
  );
}
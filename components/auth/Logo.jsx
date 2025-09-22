"use client";

import DefaultLogo from "../../../public/logo.png";

export default function Logo({ company }) {
  const finalLogo = company?.company_logo
    ? `/uploads/${company.sub_domain}/company-logo/${company.company_logo}`
    : DefaultLogo.src;

  return (
    <div className="w-32 h-16 flex items-center justify-center">
      <img
        src={finalLogo}
        alt="Logo"
        className="object-contain max-w-full max-h-full"
        draggable={false}
      />
    </div>
  );
}

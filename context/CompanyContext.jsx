"use client";
import { createContext, useContext, useState, useEffect } from "react";

const CompanyContext = createContext();

export function CompanyProvider({ children }) {
  const [company, setCompany] = useState(null);

  useEffect(() => {
    async function fetchCompany() {
      const res = await fetch("/api/company/general-settings", {
        cache: "no-store",
      });
      if (res.ok) {
        const data = await res.json();
        const companyData = data.company;
        setCompany({
          company_name: companyData.company_name,
          // first_name: companyData.first_name,
          // last_name: companyData.last_name,
          // phone: companyData.phone,
          sub_domain: companyData.sub_domain,
          currency_symbol:companyData.currency_symbol,
          currency_code:companyData.currency_code,
          timezone:companyData.timezone,
          company_logo: companyData.company_logo,
          logo_name: companyData.logo_name,
          logo_size:companyData.logo_size,
          company_logo_url: companyData.company_logo
            ? `/uploads/${companyData.sub_domain}/company-logo/${
                companyData.company_logo
              }?t=${Date.now()}`
            : null,
        });
      }
    }
    fetchCompany();
  }, []);

  return (
    <CompanyContext.Provider value={{ company, setCompany }}>
      {children}
    </CompanyContext.Provider>
  );
}

export function useCompany() {
  return useContext(CompanyContext);
}

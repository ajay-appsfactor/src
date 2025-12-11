import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth/auth";
import Navbar from "@/components/layout/Navbar";
import TenantTopHeader from "@/components/layout/TenantTopHeader";
import { redirect } from "next/navigation";
import { CompanyProvider } from "@/context/CompanyContext";
import { UserProvider } from "@/context/UserContext";

export default async function SuperAdminLayout({ children }) {
  const session = await getServerSession(authOptions);
  // console.log("Company Customer: ", session)

  if (!session) {
    redirect("/login");
  }

  // Ensure user has super admin role
  if (session.user.roles?.includes("super_admin")) {
    redirect("/unauthorized");
  }

  return (
    <CompanyProvider>
      <UserProvider>
        <div className="min-h-screen flex flex-col bg-gray-100">
          {/* Navbar at top */}
          <Navbar />

          {/* Top Header under Navbar */}
          <TenantTopHeader session={session} />

          {/* Main Content below headers */}
          <main className="flex-1 overflow-auto p-4 md:p-6">{children}</main>
        </div>
      </UserProvider>
    </CompanyProvider>
  );
}

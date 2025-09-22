import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth/auth";
import SuperAdminNavbar from "@/components/layout/SuperAdminNavbar";
import SuperAdminHeader from "@/components/layout/SuperAdminHeader";
import { redirect } from "next/navigation";

export default async function SuperAdminLayout({ children }) {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/login");
  }

  // Ensure user has super admin role
  if (!session.user.roles?.includes("super_admin")) {
    redirect("/unauthorized");
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      {/* Navbar at top */}
      <SuperAdminNavbar user={session.user} />

      {/* Top Header under Navbar */}
      <SuperAdminHeader />

      {/* Main Content below headers */}
      <main className="flex-1 overflow-auto p-4 md:p-6">{children}</main>
    </div>
  );
}

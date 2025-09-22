import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";

import { authOptions } from "@/lib/auth/auth";


export default async function TenantDashboard() {
  const session = await getServerSession(authOptions);
  
  if (!session) {
    return redirect('/login');
  }

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Welcome, {session.user.name}</h2>
    
    </div>
  );
}
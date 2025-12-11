import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth/auth";

export default async function SuperAdminPage() {

    const session = await getServerSession(authOptions);
  
    // console.log("session user :", session)
    
    if (!session) {
      return redirect('/login');
    }


  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Welcome, SuperAdmin</h2>
    
    </div>
  );
}



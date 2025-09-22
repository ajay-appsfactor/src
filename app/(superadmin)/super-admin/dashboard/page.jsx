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
    <div className=" bg-gray-100">
    
        <h2>Super Admin Page</h2>
    </div>
  );
}



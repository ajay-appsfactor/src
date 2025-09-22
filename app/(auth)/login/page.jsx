// import { Suspense } from "react";
// import { Loader } from "lucide-react";
import LoginInner from "@/components/auth/LoginInner";
import { getDomain } from "@/lib/db/getTenantDbFromRequest";

export default async function LoginPage() {
  const company = await getDomain();
  // console.log("Company :", company)

  return (
    <LoginInner company={company} />

    // <Suspense
    //   fallback={
    //     <div className="min-h-screen flex items-center justify-center">
    //       <Loader className="w-5 h-5 animate-spin" />
    //     </div>
    //   }
    // >
    //   <LoginInner company={company} />
    // </Suspense>
  );
}

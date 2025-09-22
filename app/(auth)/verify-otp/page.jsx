import VerifyOtpPage from "@/components/auth/VerifyOTP";
import { getDomain } from "@/lib/db/getTenantDbFromRequest";

export default async function VerifyOTPPage() {
  const company = await getDomain();
  return (
      <main>
        <VerifyOtpPage company={company} />
      </main>
    );
}

import ResetPasswordForm from "@/components/auth/ResetPassword";
import { getDomain } from "@/lib/db/getTenantDbFromRequest";

export default async function ResetPasswordPage() {
  const company = await getDomain();
  return (
      <main>
        <ResetPasswordForm company={company} />
      </main>
    );
}

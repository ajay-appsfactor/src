import ForgetPasswordForm from "@/components/auth/ForgetPasswordForm";
import { getDomain } from "@/lib/db/getTenantDbFromRequest";

export default async function ForgetPasswordPage() {
  const company = await getDomain();
  return (
      <main>
        <ForgetPasswordForm company={company} />
      </main>
    );
}

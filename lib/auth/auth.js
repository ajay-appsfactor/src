import CredentialsProvider from "next-auth/providers/credentials";
import { superAdminDb } from "../db/superadmin";
import bcrypt from "bcryptjs";
import { getTenantDbFromHeaders } from "../db/getTenantDbFromRequest";

async function verifyPassword(plain, hash) {
  const isValid = await bcrypt.compare(plain, hash);
  if (!isValid) throw new Error("Invalid credentials");
  return true;
}

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        if (!credentials?.email || !credentials?.password)
          throw new Error("Email and password are required");

        // Extract subdomain
        const host = req.headers?.host || "";
        const hostname = host.split(":")[0];
        const subdomain = hostname.split(".")[0] || "";

        if (!subdomain) throw new Error("Invalid domain configuration");

        if (subdomain === "superadmin") {
          // Super Admin login
          const admin = await superAdminDb.company.findUnique({
            where: {
              email: credentials.email,
              sub_domain: subdomain,
            },
          });

          // console.log("admin check :", admin);

          if (!admin) throw new Error("Invalid credentials");
          await verifyPassword(credentials.password, admin.password);

          return {
            id: admin.id,
            // name: admin.company_name,
            name: admin.first_name + " " + (admin.last_name || ""),
            roles: Array.isArray(admin.roles)
              ? admin.roles
              : [admin.roles || "super_admin"],
            email: admin.email,
            company_name: admin.company_name,
            subdomain
          };
        } else {
          // Tenant login
          const {tenantDb}  = await getTenantDbFromHeaders();

          const user = await tenantDb.user.findUnique({
            where: { email: credentials.email },
          });

          // console.log("user find tenant:", user);

          if (!user) throw new Error("Invalid credentials");
          await verifyPassword(credentials.password, user.password);

          return {
            id: user.id,
            // name: user.first_name || user.email,
            name: user.first_name + " " + (user.last_name || ""),
            roles: Array.isArray(user.roles)
              ? user.roles
              : [user.roles || "tenant_user"],
            email: user.email,
            subdomain,
          };
        }
      },
    }),
  ],
  pages: {
    signIn: "/login",
    error: "/login",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) token.user = user;
      return token;
    },
    async session({ session, token }) {
      if (token.user) session.user = token.user;
      return session;
    },
  },
  session: {
    strategy: "jwt",
    maxAge: 12 * 60 * 60, // 12 hour
  },
  secret: process.env.NEXTAUTH_SECRET,
};

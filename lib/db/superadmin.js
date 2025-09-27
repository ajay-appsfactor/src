// import { PrismaClient as SuperAdminClient } from "@/generated/superadmin";
import { PrismaClient as SuperAdminClient } from "../../generated/superadmin/index.js";

const globalForSuperAdmin = globalThis;

if (!globalForSuperAdmin.__superAdminDb) {
  globalForSuperAdmin.__superAdminDb = new SuperAdminClient();
}

export const superAdminDb = globalForSuperAdmin.__superAdminDb;



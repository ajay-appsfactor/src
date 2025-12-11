// import { PrismaClient as SuperAdminClient } from "@/generated/superadmin";
import { PrismaClient as SuperAdminClient } from "../../generated/superadmin/index.js";

const globalForSuperAdmin = globalThis;

if (!globalForSuperAdmin.__superAdminDb) {
  globalForSuperAdmin.__superAdminDb = new SuperAdminClient();
}

export const superAdminDb = globalForSuperAdmin.__superAdminDb;



// import { getSuperAdminDb } from "@/lib/db/superadmin";
// const superAdminDb = getSuperAdminDb();
// import { PrismaClient as SuperAdminClient } from "../../generated/superadmin/index.js";

// let superAdminDb;

// export function getSuperAdminDb() {
//   if (!superAdminDb) superAdminDb = new SuperAdminClient();
//   return superAdminDb;
// }

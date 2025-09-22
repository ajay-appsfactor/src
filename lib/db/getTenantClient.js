import { PrismaClient as TenantClient } from "@/generated/tenant";

const tenantClients = {};

export function getTenantDb(connectionString) {
  if (!tenantClients[connectionString]) {
    tenantClients[connectionString] = new TenantClient({
      datasources: { tenantDb: { url: connectionString } }
    });
  }
  return tenantClients[connectionString];
}
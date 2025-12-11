import { PrismaClient as TenantClient } from "@/generated/tenant";
// import { PrismaClient as TenantClient } from '../../generated/tenant/index.js';

const tenantClients = {};

export function getTenantDb(connectionString) {
  if (!tenantClients[connectionString]) {
    tenantClients[connectionString] = new TenantClient({
      datasources: { tenantDb: { url: connectionString } }
    });
  }
  return tenantClients[connectionString];
}
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge"

export function getRootDomain() {
  if (process.env.NODE_ENV === "production") {
    return process.env.ROOT_DOMAIN || "3dquotepro.com"; // production domain
  }
  return process.env.ROOT_DOMAIN || "localhost:3000"; // development
}

export function getSubdomain(hostname) {
  const root = getRootDomain();
  const cleanHost = hostname.split(":")[0];

  if (cleanHost === root || cleanHost === `www.${root}`) {
    return null;
  }

  // Local dev: subdomain.localhost
  if (root.includes("localhost")) {
    const parts = cleanHost.split(".");
    if (parts.length > 1) {
      return parts[0];
    }
    return null;
  }

 return cleanHost.replace(`.${root}`, "");
}

export const protocol =
  process.env.NODE_ENV === "production" ? "https" : "http";  //production

export const rootDomain = getRootDomain();



export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

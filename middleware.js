import { NextResponse } from "next/server";

export async function middleware(req) {
  const url = req.nextUrl;
  // console.log("url middleware :", url)
  const hostname = req.headers.get("host") || "";

  const subdomain = hostname.split(".")[0]; 
   const ROOT_DOMAIN = process.env.ROOT_DOMAIN;

  if (hostname === ROOT_DOMAIN || subdomain === "app") {

    // check /login
    if (url.pathname !== "/") {
      return NextResponse.redirect(new URL("/", req.url));
    }
    return NextResponse.next();
  }

  // go through /login
  if (url.pathname === "/") {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  return NextResponse.next();
}

// export const config = {
//   matcher: ["/:path*"], 
// };

export const config = {
  matcher: ["/", "/login", "/dashboard", "/super-admin/:path*"],
};

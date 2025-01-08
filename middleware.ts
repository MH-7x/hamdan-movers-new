import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";
import { NextRequest, NextResponse } from "next/server";
import { detectLocaleBasedOnCountry, getCountryFromIP } from "./lib/utils";

export default async function middleware(req: NextRequest) {
  const pathname = req.nextUrl.pathname;

  if (pathname.startsWith("/ar") || pathname.startsWith("/en")) {
    return createMiddleware(routing)(req);
  }

  const country = await getCountryFromIP();
  const preferredLocale = detectLocaleBasedOnCountry(country || "US");

  const url = req.nextUrl.clone();
  url.pathname = `/${preferredLocale}${pathname}`;
  return NextResponse.redirect(url, 307);
}

export const config = {
  matcher: ["/", "/(ar|en)/:path*"],
};

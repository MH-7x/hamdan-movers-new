import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";
import { NextRequest } from "next/server";

export default async function middleware(req: NextRequest) {
  return createMiddleware(routing)(req);
}

export const config = {
  matcher: ["/", "/(ar|en)/:path*"],
};

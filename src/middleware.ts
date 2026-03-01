import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const CANONICAL_HOST = "huy-digital.com";

const REDIRECT_HOSTS = [
  "www.huy-digital.com",
  "huy-digital.ch",
  "www.huy-digital.ch",
];

export function middleware(request: NextRequest) {
  const host = request.headers.get("host")?.split(":")[0] ?? "";

  if (REDIRECT_HOSTS.includes(host)) {
    const url = new URL(request.url);
    url.host = CANONICAL_HOST;
    url.port = "";
    url.protocol = "https:";
    return NextResponse.redirect(url, 301);
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/((?!_next/static|_next/image|favicon.ico).*)",
};

import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const CANONICAL_HOST = "huy-digital.com";

const REDIRECT_HOSTS = [
  "www.huy-digital.com",
  "huy-digital.ch",
  "www.huy-digital.ch",
];

/** Dashboard-Pfade die eine Authentifizierung erfordern */
const GESCHUETZTE_PFADE = [
  "/uebersicht",
  "/marktdaten",
  "/signale",
  "/portfolio",
  "/einstellungen",
  "/profil",
];

export function middleware(request: NextRequest) {
  const host = request.headers.get("host")?.split(":")[0] ?? "";

  // 1. Domain-Redirects
  if (REDIRECT_HOSTS.includes(host)) {
    const url = new URL(request.url);
    url.host = CANONICAL_HOST;
    url.port = "";
    url.protocol = "https:";
    return NextResponse.redirect(url, 301);
  }

  // 2. Auth-Schutz für Dashboard-Routen
  const pfad = request.nextUrl.pathname;
  const istGeschuetzt = GESCHUETZTE_PFADE.some(
    (p) => pfad === p || pfad.startsWith(`${p}/`)
  );

  if (istGeschuetzt) {
    const sessionToken =
      request.cookies.get("next-auth.session-token")?.value ??
      request.cookies.get("__Secure-next-auth.session-token")?.value;

    if (!sessionToken) {
      const loginUrl = new URL("/login", request.url);
      loginUrl.searchParams.set("callbackUrl", pfad);
      return NextResponse.redirect(loginUrl);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/((?!_next/static|_next/image|favicon.ico|api).*)",
};

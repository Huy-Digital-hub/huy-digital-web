import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { prisma } from "@/lib/db";

export async function GET(request: NextRequest) {
  const token = request.nextUrl.searchParams.get("token");

  if (!token) {
    return NextResponse.redirect(
      new URL("/login?verifizierung=fehler&grund=kein-token", request.url)
    );
  }

  try {
    const benutzer = await prisma.benutzer.findFirst({
      where: { verifizierungsToken: token },
    });

    if (!benutzer) {
      return NextResponse.redirect(
        new URL("/login?verifizierung=fehler&grund=ungueltig", request.url)
      );
    }

    if (benutzer.emailVerifiziert) {
      return NextResponse.redirect(
        new URL("/login?verifizierung=bereits", request.url)
      );
    }

    // Token-Ablauf prüfen
    if (
      benutzer.verifizierungsTokenAblauftAm &&
      new Date() > benutzer.verifizierungsTokenAblauftAm
    ) {
      return NextResponse.redirect(
        new URL("/login?verifizierung=fehler&grund=abgelaufen", request.url)
      );
    }

    // E-Mail verifizieren und Token entfernen
    await prisma.benutzer.update({
      where: { id: benutzer.id },
      data: {
        emailVerifiziert: true,
        verifizierungsToken: null,
        verifizierungsTokenAblauftAm: null,
      },
    });

    return NextResponse.redirect(
      new URL("/login?verifizierung=erfolg", request.url)
    );
  } catch {
    return NextResponse.redirect(
      new URL("/login?verifizierung=fehler&grund=server", request.url)
    );
  }
}

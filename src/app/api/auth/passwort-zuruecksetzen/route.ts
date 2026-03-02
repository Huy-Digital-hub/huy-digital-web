import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { passwortZuruecksetzenSchema } from "@/lib/validators";
import { istRateLimitiert } from "@/lib/auth/rate-limit";
import { prisma } from "@/lib/db";

export async function POST(request: Request) {
  try {
    // Rate Limiting
    const ip = request.headers.get("x-forwarded-for") ?? "unknown";
    if (istRateLimitiert(`passwort-zuruecksetzen:${ip}`, 5)) {
      return NextResponse.json(
        { fehler: "Zu viele Anfragen. Bitte versuche es später erneut." },
        { status: 429 }
      );
    }

    const body = await request.json();
    const ergebnis = passwortZuruecksetzenSchema.safeParse(body);

    if (!ergebnis.success) {
      const ersteFehler = ergebnis.error.issues[0];
      return NextResponse.json(
        { fehler: ersteFehler?.message ?? "Ungültige Eingabe" },
        { status: 400 }
      );
    }

    const { token, passwort } = ergebnis.data;

    // Token in der Datenbank suchen
    const resetToken = await prisma.passwortResetToken.findUnique({
      where: { token },
    });

    if (!resetToken) {
      return NextResponse.json(
        { fehler: "Ungültiger oder abgelaufener Link." },
        { status: 400 }
      );
    }

    // Prüfen ob Token bereits benutzt wurde
    if (resetToken.benutztAm) {
      return NextResponse.json(
        { fehler: "Dieser Link wurde bereits verwendet." },
        { status: 400 }
      );
    }

    // Prüfen ob Token abgelaufen ist
    if (new Date() > resetToken.ablauftAm) {
      return NextResponse.json(
        { fehler: "Dieser Link ist abgelaufen. Bitte fordere einen neuen an." },
        { status: 400 }
      );
    }

    // Passwort hashen und aktualisieren
    const passwortHash = await bcrypt.hash(passwort, 12);

    await prisma.$transaction([
      prisma.benutzer.update({
        where: { email: resetToken.email },
        data: { passwortHash },
      }),
      prisma.passwortResetToken.update({
        where: { id: resetToken.id },
        data: { benutztAm: new Date() },
      }),
    ]);

    return NextResponse.json({
      nachricht: "Passwort erfolgreich geändert. Du kannst dich jetzt anmelden.",
    });
  } catch {
    return NextResponse.json(
      { fehler: "Ein Fehler ist aufgetreten. Bitte versuche es erneut." },
      { status: 500 }
    );
  }
}

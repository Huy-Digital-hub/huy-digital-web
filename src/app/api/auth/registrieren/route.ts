import { NextResponse } from "next/server";
import { randomBytes } from "crypto";
import bcrypt from "bcryptjs";
import { prisma } from "@/lib/db";
import { registrierungSchema } from "@/lib/validators";
import { istRateLimitiert } from "@/lib/auth/rate-limit";
import { sendeEmail, verifizierungsEmail } from "@/lib/email/sende-email";

export async function POST(request: Request) {
  try {
    // Rate Limiting
    const ip = request.headers.get("x-forwarded-for") ?? "unknown";
    if (istRateLimitiert(`registrieren:${ip}`, 3)) {
      return NextResponse.json(
        { fehler: "Zu viele Anfragen. Bitte versuche es später erneut." },
        { status: 429 }
      );
    }

    const body = await request.json();
    const ergebnis = registrierungSchema.safeParse(body);

    if (!ergebnis.success) {
      const ersteFehler = ergebnis.error.issues[0];
      return NextResponse.json(
        { fehler: ersteFehler?.message ?? "Ungültige Eingabe" },
        { status: 400 }
      );
    }

    const { email, passwort } = ergebnis.data;

    // Prüfen ob E-Mail bereits existiert
    const existiert = await prisma.benutzer.findUnique({
      where: { email: email.toLowerCase() },
    });

    if (existiert) {
      return NextResponse.json(
        { fehler: "Diese E-Mail-Adresse ist bereits registriert." },
        { status: 409 }
      );
    }

    // Passwort hashen und Benutzer erstellen
    const passwortHash = await bcrypt.hash(passwort, 12);
    const token = randomBytes(32).toString("hex");

    await prisma.benutzer.create({
      data: {
        email: email.toLowerCase(),
        passwortHash,
        verifizierungsToken: token,
        verifizierungsTokenAblauftAm: new Date(Date.now() + 24 * 60 * 60 * 1000),
      },
    });

    // Verifizierungs-E-Mail senden
    const verifizierungsUrl = `${process.env.NEXTAUTH_URL}/api/auth/verifizieren?token=${token}`;
    try {
      await sendeEmail({
        an: email.toLowerCase(),
        betreff: "E-Mail bestätigen — Huy Digital",
        html: verifizierungsEmail(verifizierungsUrl),
        von: '"Huy Digital" <support@huy-digital.com>',
      });
    } catch (emailFehler) {
      console.error("Verifizierungs-E-Mail fehlgeschlagen:", emailFehler);
    }

    return NextResponse.json(
      { nachricht: "Registrierung erfolgreich. Bitte prüfe dein E-Mail-Postfach und bestätige deine E-Mail-Adresse." },
      { status: 201 }
    );
  } catch {
    return NextResponse.json(
      { fehler: "Ein Fehler ist aufgetreten. Bitte versuche es erneut." },
      { status: 500 }
    );
  }
}

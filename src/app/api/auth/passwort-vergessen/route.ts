import { NextResponse } from "next/server";
import { randomBytes } from "crypto";
import { passwortVergessenSchema } from "@/lib/validators";
import { istRateLimitiert } from "@/lib/auth/rate-limit";
import { prisma } from "@/lib/db";
import { sendeEmail, passwortResetEmail } from "@/lib/email/sende-email";

const ANTWORT_NACHRICHT =
  "Falls ein Konto mit dieser E-Mail existiert, erhältst du eine E-Mail mit Anweisungen zum Zurücksetzen deines Passworts.";

export async function POST(request: Request) {
  try {
    // Rate Limiting
    const ip = request.headers.get("x-forwarded-for") ?? "unknown";
    if (istRateLimitiert(`passwort-vergessen:${ip}`, 3)) {
      return NextResponse.json(
        { fehler: "Zu viele Anfragen. Bitte versuche es später erneut." },
        { status: 429 }
      );
    }

    const body = await request.json();
    const ergebnis = passwortVergessenSchema.safeParse(body);

    if (!ergebnis.success) {
      const ersteFehler = ergebnis.error.issues[0];
      return NextResponse.json(
        { fehler: ersteFehler?.message ?? "Ungültige Eingabe" },
        { status: 400 }
      );
    }

    const { email } = ergebnis.data;

    // Benutzer suchen — Antwort ist immer gleich (Sicherheit)
    const benutzer = await prisma.benutzer.findUnique({
      where: { email: email.toLowerCase() },
    });

    if (benutzer) {
      // Alte unbenutzte Tokens für diese E-Mail invalidieren
      await prisma.passwortResetToken.deleteMany({
        where: { email: benutzer.email, benutztAm: null },
      });

      // Neuen Token generieren (1 Stunde gültig)
      const token = randomBytes(32).toString("hex");
      await prisma.passwortResetToken.create({
        data: {
          token,
          email: benutzer.email,
          ablauftAm: new Date(Date.now() + 60 * 60 * 1000),
        },
      });

      // Reset-E-Mail senden
      const resetUrl = `${process.env.NEXTAUTH_URL}/passwort-zuruecksetzen?token=${token}`;
      try {
        await sendeEmail({
          an: benutzer.email,
          betreff: "Passwort zurücksetzen — Huy Digital",
          html: passwortResetEmail(resetUrl),
        });
      } catch (emailFehler) {
        console.error("E-Mail-Versand fehlgeschlagen:", emailFehler);
      }
    }

    // Aus Sicherheitsgründen immer die gleiche Antwort
    return NextResponse.json({ nachricht: ANTWORT_NACHRICHT });
  } catch {
    return NextResponse.json(
      { fehler: "Ein Fehler ist aufgetreten. Bitte versuche es erneut." },
      { status: 500 }
    );
  }
}

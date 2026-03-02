import { NextResponse } from "next/server";
import { randomBytes } from "crypto";
import { prisma } from "@/lib/db";
import { istRateLimitiert } from "@/lib/auth/rate-limit";
import { sendeEmail, verifizierungsEmail } from "@/lib/email/sende-email";

export async function POST(request: Request) {
  try {
    const ip = request.headers.get("x-forwarded-for") ?? "unknown";
    if (istRateLimitiert(`verifizierung-erneut:${ip}`, 3)) {
      return NextResponse.json(
        { fehler: "Zu viele Anfragen. Bitte versuche es später erneut." },
        { status: 429 }
      );
    }

    const body = await request.json();
    const email = body.email?.toLowerCase();

    if (!email) {
      return NextResponse.json(
        { fehler: "E-Mail ist erforderlich." },
        { status: 400 }
      );
    }

    // Aus Sicherheitsgründen immer gleiche Antwort
    const benutzer = await prisma.benutzer.findUnique({
      where: { email },
    });

    if (benutzer && !benutzer.emailVerifiziert) {
      const token = randomBytes(32).toString("hex");

      await prisma.benutzer.update({
        where: { id: benutzer.id },
        data: {
          verifizierungsToken: token,
          verifizierungsTokenAblauftAm: new Date(Date.now() + 24 * 60 * 60 * 1000),
        },
      });

      const verifizierungsUrl = `${process.env.NEXTAUTH_URL}/api/auth/verifizieren?token=${token}`;
      try {
        await sendeEmail({
          an: benutzer.email,
          betreff: "E-Mail bestätigen — Huy Digital",
          html: verifizierungsEmail(verifizierungsUrl),
          von: '"Huy Digital" <support@huy-digital.com>',
        });
      } catch (emailFehler) {
        console.error("Verifizierungs-E-Mail erneut fehlgeschlagen:", emailFehler);
      }
    }

    return NextResponse.json({
      nachricht: "Falls ein nicht verifiziertes Konto mit dieser E-Mail existiert, wurde eine neue Verifizierungs-E-Mail gesendet.",
    });
  } catch {
    return NextResponse.json(
      { fehler: "Ein Fehler ist aufgetreten. Bitte versuche es erneut." },
      { status: 500 }
    );
  }
}

import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { prisma } from "@/lib/db";
import { registrierungSchema } from "@/lib/validators";
import { istRateLimitiert } from "@/lib/auth/rate-limit";

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

    await prisma.benutzer.create({
      data: {
        email: email.toLowerCase(),
        passwortHash,
      },
    });

    return NextResponse.json(
      { nachricht: "Registrierung erfolgreich." },
      { status: 201 }
    );
  } catch {
    return NextResponse.json(
      { fehler: "Ein Fehler ist aufgetreten. Bitte versuche es erneut." },
      { status: 500 }
    );
  }
}

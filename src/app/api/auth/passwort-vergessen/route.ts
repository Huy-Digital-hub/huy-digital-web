import { NextResponse } from "next/server";
import { passwortVergessenSchema } from "@/lib/validators";
import { istRateLimitiert } from "@/lib/auth/rate-limit";

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

    // Hinweis: Hier würde der echte E-Mail-Versand implementiert werden.
    // Aus Sicherheitsgründen geben wir immer die gleiche Antwort zurück,
    // unabhängig davon ob die E-Mail existiert oder nicht.

    return NextResponse.json({
      nachricht:
        "Falls ein Konto mit dieser E-Mail existiert, erhältst du eine E-Mail mit Anweisungen zum Zurücksetzen deines Passworts.",
    });
  } catch {
    return NextResponse.json(
      { fehler: "Ein Fehler ist aufgetreten. Bitte versuche es erneut." },
      { status: 500 }
    );
  }
}

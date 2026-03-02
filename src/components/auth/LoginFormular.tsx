"use client";

import { useState, useEffect } from "react";
import { signIn } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import { loginSchema } from "@/lib/validators";

export default function LoginFormular() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [email, setEmail] = useState("");
  const [passwort, setPasswort] = useState("");
  const [fehler, setFehler] = useState("");
  const [info, setInfo] = useState("");
  const [nichtVerifiziert, setNichtVerifiziert] = useState(false);
  const [erneutGesendet, setErneutGesendet] = useState(false);
  const [laedt, setLaedt] = useState(false);

  // Verifizierungs-Status aus URL-Parametern lesen
  useEffect(() => {
    const verifizierung = searchParams.get("verifizierung");
    const grund = searchParams.get("grund");

    if (verifizierung === "erfolg") {
      setInfo("E-Mail erfolgreich bestätigt! Du kannst dich jetzt anmelden.");
    } else if (verifizierung === "bereits") {
      setInfo("Deine E-Mail wurde bereits bestätigt. Du kannst dich anmelden.");
    } else if (verifizierung === "fehler") {
      if (grund === "abgelaufen") {
        setFehler("Der Bestätigungslink ist abgelaufen. Bitte fordere einen neuen an.");
      } else if (grund === "ungueltig") {
        setFehler("Ungültiger Bestätigungslink.");
      } else {
        setFehler("Bei der E-Mail-Bestätigung ist ein Fehler aufgetreten.");
      }
    }
  }, [searchParams]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setFehler("");
    setInfo("");
    setNichtVerifiziert(false);
    setErneutGesendet(false);

    const validierung = loginSchema.safeParse({ email, passwort });
    if (!validierung.success) {
      setFehler(validierung.error.issues[0]?.message ?? "Ungültige Eingabe");
      return;
    }

    setLaedt(true);

    try {
      const ergebnis = await signIn("credentials", {
        email,
        passwort,
        redirect: false,
      });

      if (ergebnis?.error) {
        if (ergebnis.error.includes("EMAIL_NICHT_VERIFIZIERT")) {
          setNichtVerifiziert(true);
          setFehler("Bitte bestätige zuerst deine E-Mail-Adresse.");
        } else {
          setFehler("Ungültige E-Mail oder Passwort.");
        }
      } else {
        router.push("/dashboard/uebersicht");
        router.refresh();
      }
    } catch {
      setFehler("Ein Fehler ist aufgetreten. Bitte versuche es erneut.");
    } finally {
      setLaedt(false);
    }
  }

  async function handleErneutSenden() {
    setLaedt(true);
    try {
      const antwort = await fetch("/api/auth/verifizierung-erneut-senden", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (antwort.ok) {
        setErneutGesendet(true);
        setFehler("");
        setNichtVerifiziert(false);
      }
    } catch {
      setFehler("Fehler beim erneuten Senden. Bitte versuche es später.");
    } finally {
      setLaedt(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {info && (
        <div className="rounded-md border border-green-500/30 bg-green-500/10 px-4 py-3 text-sm text-green-400">
          {info}
        </div>
      )}

      {fehler && (
        <div className="rounded-md border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-400">
          {fehler}
        </div>
      )}

      {nichtVerifiziert && (
        <button
          type="button"
          onClick={handleErneutSenden}
          disabled={laedt}
          className="w-full rounded-md border border-huy-gold/30 bg-huy-gold/10 px-4 py-2.5 text-sm text-huy-gold transition-colors hover:bg-huy-gold/20 disabled:opacity-50"
        >
          Verifizierungs-E-Mail erneut senden
        </button>
      )}

      {erneutGesendet && (
        <div className="rounded-md border border-green-500/30 bg-green-500/10 px-4 py-3 text-sm text-green-400">
          Neue Verifizierungs-E-Mail gesendet! Bitte prüfe dein Postfach.
        </div>
      )}

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-huy-muted">
          E-Mail
        </label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mt-1 w-full rounded-md border border-white/10 bg-huy-bg px-4 py-2.5 text-huy-text placeholder:text-huy-muted/50 focus:border-huy-gold focus:outline-none focus:ring-1 focus:ring-huy-gold"
          placeholder="deine@email.com"
          required
        />
      </div>

      <div>
        <label htmlFor="passwort" className="block text-sm font-medium text-huy-muted">
          Passwort
        </label>
        <input
          id="passwort"
          type="password"
          value={passwort}
          onChange={(e) => setPasswort(e.target.value)}
          className="mt-1 w-full rounded-md border border-white/10 bg-huy-bg px-4 py-2.5 text-huy-text placeholder:text-huy-muted/50 focus:border-huy-gold focus:outline-none focus:ring-1 focus:ring-huy-gold"
          placeholder="••••••••"
          required
        />
      </div>

      <button
        type="submit"
        disabled={laedt}
        className="w-full rounded-md bg-huy-gold px-4 py-2.5 font-semibold text-huy-bg transition-colors hover:bg-huy-gold/90 disabled:cursor-not-allowed disabled:opacity-50"
      >
        {laedt ? "Wird angemeldet..." : "Anmelden"}
      </button>

      <div className="flex items-center justify-between text-sm">
        <Link
          href="/registrierung"
          className="text-huy-muted transition-colors hover:text-huy-gold"
        >
          Konto erstellen
        </Link>
        <Link
          href="/passwort-vergessen"
          className="text-huy-muted transition-colors hover:text-huy-gold"
        >
          Passwort vergessen?
        </Link>
      </div>
    </form>
  );
}

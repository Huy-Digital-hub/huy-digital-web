"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { passwortZuruecksetzenSchema } from "@/lib/validators";

export default function PasswortZuruecksetzenFormular() {
  const searchParams = useSearchParams();
  const token = searchParams.get("token") ?? "";

  const [passwort, setPasswort] = useState("");
  const [passwortBestaetigung, setPasswortBestaetigung] = useState("");
  const [fehler, setFehler] = useState("");
  const [erfolg, setErfolg] = useState(false);
  const [laedt, setLaedt] = useState(false);

  if (!token) {
    return (
      <div className="space-y-4">
        <div className="rounded-md border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-400">
          Ungültiger Link. Bitte fordere einen neuen Passwort-Reset an.
        </div>
        <Link
          href="/passwort-vergessen"
          className="block text-center text-sm text-huy-muted transition-colors hover:text-huy-gold"
        >
          Neuen Link anfordern
        </Link>
      </div>
    );
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setFehler("");

    const validierung = passwortZuruecksetzenSchema.safeParse({
      token,
      passwort,
      passwortBestaetigung,
    });

    if (!validierung.success) {
      setFehler(validierung.error.issues[0]?.message ?? "Ungültige Eingabe");
      return;
    }

    setLaedt(true);

    try {
      const antwort = await fetch("/api/auth/passwort-zuruecksetzen", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token, passwort, passwortBestaetigung }),
      });

      const daten = await antwort.json();

      if (antwort.ok) {
        setErfolg(true);
      } else {
        setFehler(daten.fehler ?? "Ein Fehler ist aufgetreten.");
      }
    } catch {
      setFehler("Ein Fehler ist aufgetreten. Bitte versuche es erneut.");
    } finally {
      setLaedt(false);
    }
  }

  if (erfolg) {
    return (
      <div className="space-y-4">
        <div className="rounded-md border border-green-500/30 bg-green-500/10 px-4 py-3 text-sm text-green-400">
          Passwort erfolgreich geändert!
        </div>
        <Link
          href="/login"
          className="btn-gold block text-center text-sm"
        >
          Jetzt anmelden
        </Link>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {fehler && (
        <div className="rounded-md border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-400">
          {fehler}
        </div>
      )}

      <div>
        <label htmlFor="passwort" className="block text-sm font-medium text-huy-muted">
          Neues Passwort
        </label>
        <input
          id="passwort"
          type="password"
          value={passwort}
          onChange={(e) => setPasswort(e.target.value)}
          className="mt-1 w-full rounded-md border border-white/10 bg-huy-bg px-4 py-2.5 text-huy-text placeholder:text-huy-muted/50 focus:border-huy-gold focus:outline-none focus:ring-1 focus:ring-huy-gold"
          placeholder="Mindestens 8 Zeichen"
          required
        />
      </div>

      <div>
        <label htmlFor="passwortBestaetigung" className="block text-sm font-medium text-huy-muted">
          Passwort bestätigen
        </label>
        <input
          id="passwortBestaetigung"
          type="password"
          value={passwortBestaetigung}
          onChange={(e) => setPasswortBestaetigung(e.target.value)}
          className="mt-1 w-full rounded-md border border-white/10 bg-huy-bg px-4 py-2.5 text-huy-text placeholder:text-huy-muted/50 focus:border-huy-gold focus:outline-none focus:ring-1 focus:ring-huy-gold"
          placeholder="Passwort wiederholen"
          required
        />
      </div>

      <button
        type="submit"
        disabled={laedt}
        className="w-full rounded-md bg-huy-gold px-4 py-2.5 font-semibold text-huy-bg transition-colors hover:bg-huy-gold/90 disabled:cursor-not-allowed disabled:opacity-50"
      >
        {laedt ? "Wird gespeichert..." : "Passwort ändern"}
      </button>

      <p className="text-center text-sm text-huy-muted">
        <Link
          href="/login"
          className="text-huy-gold transition-colors hover:text-huy-gold/80"
        >
          Zurück zum Login
        </Link>
      </p>
    </form>
  );
}

"use client";

import { useState } from "react";
import Link from "next/link";
import { passwortVergessenSchema } from "@/lib/validators";

export default function PasswortVergessenFormular() {
  const [email, setEmail] = useState("");
  const [fehler, setFehler] = useState("");
  const [erfolg, setErfolg] = useState(false);
  const [laedt, setLaedt] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setFehler("");

    const validierung = passwortVergessenSchema.safeParse({ email });
    if (!validierung.success) {
      setFehler(validierung.error.issues[0]?.message ?? "Ungültige Eingabe");
      return;
    }

    setLaedt(true);

    try {
      const antwort = await fetch("/api/auth/passwort-vergessen", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (antwort.ok) {
        setErfolg(true);
      } else {
        const daten = await antwort.json();
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
          Falls ein Konto mit dieser E-Mail existiert, erhältst du eine E-Mail
          mit Anweisungen zum Zurücksetzen deines Passworts.
        </div>
        <Link
          href="/login"
          className="block text-center text-sm text-huy-muted transition-colors hover:text-huy-gold"
        >
          Zurück zum Login
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

      <button
        type="submit"
        disabled={laedt}
        className="w-full rounded-md bg-huy-gold px-4 py-2.5 font-semibold text-huy-bg transition-colors hover:bg-huy-gold/90 disabled:cursor-not-allowed disabled:opacity-50"
      >
        {laedt ? "Wird gesendet..." : "Link zum Zurücksetzen senden"}
      </button>

      <p className="text-center text-sm text-huy-muted">
        Passwort wieder eingefallen?{" "}
        <Link
          href="/login"
          className="text-huy-gold transition-colors hover:text-huy-gold/80"
        >
          Anmelden
        </Link>
      </p>
    </form>
  );
}

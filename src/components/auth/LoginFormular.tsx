"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { loginSchema } from "@/lib/validators";

export default function LoginFormular() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [passwort, setPasswort] = useState("");
  const [fehler, setFehler] = useState("");
  const [laedt, setLaedt] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setFehler("");

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
        setFehler("Ungültige E-Mail oder Passwort.");
      } else {
        router.push("/uebersicht");
        router.refresh();
      }
    } catch {
      setFehler("Ein Fehler ist aufgetreten. Bitte versuche es erneut.");
    } finally {
      setLaedt(false);
    }
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

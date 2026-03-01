import Link from "next/link";

export default function StartSeite() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-huy-bg px-4">
      <h1 className="text-center text-5xl font-bold tracking-tight text-huy-text sm:text-7xl">
        Huy Digital
        <span className="block text-huy-gold">Trading Intelligence</span>
      </h1>
      <p className="mt-6 max-w-xl text-center text-lg text-huy-muted">
        Professionelle Marktanalyse-Tools für Schweizer Trader. Regime-Erkennung,
        Sentiment, COT-Daten und Smart Money — alles auf einer Plattform.
      </p>
      <div className="mt-10 flex gap-4">
        <Link href="/login" className="btn-gold">
          Anmelden
        </Link>
        <Link href="/registrierung" className="btn-sekundaer">
          Registrieren
        </Link>
      </div>
    </div>
  );
}

import Link from "next/link";

export function HeroSektion() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4"
    >
      {/* Hintergrund-Gitter */}
      <div className="bg-grid-pattern absolute inset-0" />

      {/* Gold-Glow Effekt */}
      <div className="absolute left-1/2 top-1/4 h-96 w-96 -translate-x-1/2 rounded-full bg-huy-gold/5 blur-3xl" />

      {/* Inhalt */}
      <div className="relative z-10 mx-auto max-w-4xl text-center">
        {/* Terminal-Badge */}
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-huy-card/80 px-4 py-2 font-mono text-sm backdrop-blur">
          <span className="inline-block h-2 w-2 rounded-full bg-huy-success" />
          <span className="text-huy-muted">
            LIVE — Marktdaten in Echtzeit
          </span>
        </div>

        <h1 className="text-4xl font-bold tracking-tight text-huy-text sm:text-5xl md:text-6xl lg:text-7xl">
          Institutionelle Marktdaten
          <br />
          <span className="text-huy-gold">für Retail-Trader</span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-huy-muted md:mt-8 md:text-xl">
          Die gleichen Daten, die Hedgefonds und institutionelle Trader nutzen —
          aufbereitet für dich. Regime-Erkennung, Sentiment, COT und Smart Money
          auf einer Plattform.
        </p>

        <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row md:mt-10">
          <Link
            href="/registrierung"
            className="btn-gold px-8 py-3 text-center text-lg"
          >
            Kostenlos starten
          </Link>
          <a
            href="#terminal"
            className="btn-sekundaer px-8 py-3 text-center text-lg"
          >
            Demo ansehen
          </a>
        </div>

        {/* Trust-Indikatoren */}
        <div className="mt-12 flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm text-huy-muted">
          <span className="flex items-center gap-2">
            <span className="text-huy-success">&#10003;</span>
            Keine Kreditkarte nötig
          </span>
          <span className="flex items-center gap-2">
            <span className="text-huy-success">&#10003;</span>
            Schweizer Datenschutz
          </span>
          <span className="flex items-center gap-2">
            <span className="text-huy-success">&#10003;</span>
            Sofort einsatzbereit
          </span>
        </div>
      </div>
    </section>
  );
}

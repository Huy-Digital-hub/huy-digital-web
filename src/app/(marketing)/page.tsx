export default function LandingPage() {
  return (
    <div className="min-h-screen bg-huy-bg">
      {/* Hero-Sektion */}
      <section className="flex min-h-[80vh] flex-col items-center justify-center px-4 text-center">
        <h1 className="text-4xl font-bold tracking-tight text-huy-text sm:text-6xl">
          Trading Intelligence
          <span className="block text-huy-gold">von Huy Digital</span>
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-huy-muted">
          Professionelle Marktanalyse-Tools für Trader. Regime-Erkennung,
          Sentiment-Analyse, COT-Daten und Smart Money Tracking — alles auf
          einer Plattform.
        </p>
      </section>
    </div>
  );
}

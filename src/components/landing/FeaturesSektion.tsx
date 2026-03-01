import { AbschnittContainer } from "@/components/ui/AbschnittContainer";
import { SektionUeberschrift } from "@/components/ui/SektionUeberschrift";
import { FeatureKarte } from "./FeatureKarte";

const FEATURES = [
  {
    titel: "News Bot LIVE",
    beschreibung:
      "Marktrelevante Nachrichten in Sekunden — direkt auf dein Telegram. Schneller als Bloomberg Terminal für Retail-Trader.",
    icon: "\u26A1",
    status: "live" as const,
  },
  {
    titel: "Regime Dashboard",
    beschreibung:
      "Automatische Erkennung von Marktregimen: Risk-On, Risk-Off, Transition. Wisse immer, in welchem Marktumfeld du tradest.",
    icon: "\uD83D\uDCCA",
    status: "beta" as const,
  },
  {
    titel: "Sentiment-Analyse",
    beschreibung:
      "Aggregierte Sentiment-Daten aus mehreren Quellen. Erkenne Extremwerte und Wendepunkte im Markt.",
    icon: "\uD83E\uDDE0",
    status: "beta" as const,
  },
  {
    titel: "COT-Daten",
    beschreibung:
      "Commitments of Traders — visualisiert und analysiert. Sieh, wie sich Commercials, Large Specs und Small Specs positionieren.",
    icon: "\uD83D\uDCC8",
    status: "beta" as const,
  },
  {
    titel: "Smart Money",
    beschreibung:
      "Institutionelle Kapitalflüsse verfolgen. Dark Pool Aktivität, Block Trades und Insider-Bewegungen.",
    icon: "\uD83C\uDFE6",
    status: "bald" as const,
  },
  {
    titel: "Korrelationen",
    beschreibung:
      "Interaktive Korrelationsmatrix zwischen Assets. Entdecke versteckte Zusammenhänge und diversifiziere besser.",
    icon: "\uD83D\uDD17",
    status: "bald" as const,
  },
];

export function FeaturesSektion() {
  return (
    <section id="features" className="py-24 md:py-32">
      <AbschnittContainer>
        <SektionUeberschrift
          tagline="Features"
          titel="Alles, was du für professionelles Trading brauchst"
          beschreibung="Sechs leistungsstarke Module — von Echtzeit-News bis zur Korrelationsanalyse."
        />

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((feature) => (
            <FeatureKarte key={feature.titel} {...feature} />
          ))}
        </div>
      </AbschnittContainer>
    </section>
  );
}

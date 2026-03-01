import { AbschnittContainer } from "@/components/ui/AbschnittContainer";
import { SektionUeberschrift } from "@/components/ui/SektionUeberschrift";
import { RoadmapEintrag } from "./RoadmapEintrag";

const ROADMAP = [
  {
    quartal: "Q1 2025",
    titel: "Foundation",
    beschreibung: "Plattform-Launch und Kern-Features",
    status: "erledigt" as const,
    features: [
      "News Bot LIVE auf Telegram",
      "Basis-Plattform und Authentifizierung",
      "Stripe-Abo-Integration",
    ],
  },
  {
    quartal: "Q2 2025",
    titel: "Analyse-Suite",
    beschreibung: "Erweiterte Analyse-Tools",
    status: "aktuell" as const,
    features: [
      "Regime Dashboard",
      "Sentiment-Analyse",
      "COT-Daten Visualisierung",
    ],
  },
  {
    quartal: "Q3 2025",
    titel: "Smart Money",
    beschreibung: "Institutionelle Intelligenz",
    status: "geplant" as const,
    features: [
      "Smart Money Flow Tracking",
      "Dark Pool Daten",
      "Korrelationsmatrix",
    ],
  },
  {
    quartal: "Q4 2025",
    titel: "API & Automation",
    beschreibung: "Programmatischer Zugang",
    status: "geplant" as const,
    features: [
      "REST API für alle Daten",
      "Custom Alert Engine",
      "Webhook-Integration",
    ],
  },
];

export function RoadmapSektion() {
  return (
    <section id="roadmap" className="py-24 md:py-32">
      <AbschnittContainer>
        <SektionUeberschrift
          tagline="Roadmap"
          titel="Was kommt als Nächstes"
          beschreibung="Unser Entwicklungsplan — transparent und ambitioniert."
        />

        <div className="relative mt-16">
          {/* Vertikale Timeline-Linie */}
          <div className="absolute bottom-0 left-[19px] top-0 w-px bg-white/10 md:left-1/2" />

          {ROADMAP.map((item, index) => (
            <RoadmapEintrag key={item.quartal} {...item} index={index} />
          ))}
        </div>
      </AbschnittContainer>
    </section>
  );
}

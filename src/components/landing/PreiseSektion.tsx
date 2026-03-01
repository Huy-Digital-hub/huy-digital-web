import { AbschnittContainer } from "@/components/ui/AbschnittContainer";
import { SektionUeberschrift } from "@/components/ui/SektionUeberschrift";
import { PreisKarte } from "./PreisKarte";

const PREIS_PLAENE = [
  {
    name: "Free",
    preis: "0",
    beschreibung: "Perfekt zum Kennenlernen. News Bot und Basis-Features.",
    features: [
      "News Bot LIVE (verzögert)",
      "Basis Regime-Anzeige",
      "Community-Zugang",
    ],
    hervorgehoben: false,
    ctaText: "Kostenlos starten",
    ctaHref: "/registrierung",
  },
  {
    name: "Starter",
    preis: "14.90",
    beschreibung: "Für aktive Trader, die einen Informationsvorsprung wollen.",
    features: [
      "News Bot LIVE (Echtzeit)",
      "Regime Dashboard",
      "Basis Sentiment-Daten",
      "E-Mail-Support",
    ],
    hervorgehoben: false,
    ctaText: "Starter wählen",
    ctaHref: "/registrierung?plan=starter",
  },
  {
    name: "Pro",
    preis: "29.90",
    beschreibung: "Das volle Arsenal. Alle Tools, alle Daten, volle Transparenz.",
    features: [
      "Alles aus Starter",
      "COT-Daten & Analyse",
      "Smart Money Tracking",
      "Korrelationsmatrix",
      "Erweiterte Sentiment-Analyse",
      "Prioritäts-Support",
    ],
    hervorgehoben: true,
    ctaText: "Pro wählen",
    ctaHref: "/registrierung?plan=pro",
  },
  {
    name: "Elite",
    preis: "49.90",
    beschreibung: "Für professionelle Trader und kleine Teams.",
    features: [
      "Alles aus Pro",
      "API-Zugang",
      "Custom Alerts",
      "Persönlicher Account Manager",
      "Früher Zugang zu neuen Features",
      "1-on-1 Onboarding",
    ],
    hervorgehoben: false,
    ctaText: "Elite wählen",
    ctaHref: "/registrierung?plan=elite",
  },
];

export function PreiseSektion() {
  return (
    <section id="preise" className="py-24 md:py-32">
      <AbschnittContainer>
        <SektionUeberschrift
          tagline="Preise"
          titel="Transparente Preise, kein Kleingedrucktes"
          beschreibung="Starte kostenlos und upgrade, wenn du bereit bist. Jederzeit kündbar."
        />

        <div className="mt-16 grid items-start gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PREIS_PLAENE.map((plan) => (
            <PreisKarte key={plan.name} {...plan} />
          ))}
        </div>
      </AbschnittContainer>
    </section>
  );
}

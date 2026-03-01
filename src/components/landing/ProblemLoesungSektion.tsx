import { AbschnittContainer } from "@/components/ui/AbschnittContainer";
import { SektionUeberschrift } from "@/components/ui/SektionUeberschrift";

const PROBLEME = [
  "Verzögerte Nachrichten aus Mainstream-Medien",
  "Kein Einblick in institutionelle Positionierung",
  "Sentiment-Daten hinter teuren Paywalls",
  "Keine Erkennung von Marktregime-Wechseln",
  "Fragmentierte Tools ohne Zusammenhang",
];

const LOESUNGEN = [
  "Live-Trading-News in Sekunden via Telegram",
  "COT-Daten und Smart Money Tracking",
  "Sentiment-Analyse in Echtzeit",
  "Automatische Marktregime-Erkennung",
  "Alle Tools auf einer Plattform vereint",
];

export function ProblemLoesungSektion() {
  return (
    <section id="problem" className="bg-huy-bg-alt py-24 md:py-32">
      <AbschnittContainer>
        <SektionUeberschrift
          tagline="Das Problem"
          titel="Retail-Trader handeln blind"
          beschreibung="Institutionelle Trader haben Zugang zu Daten, die Retail-Tradern verborgen bleiben. Das verschafft ihnen einen unfairen Vorteil."
        />

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {/* Problem */}
          <div className="karte border-huy-danger/20">
            <div className="mb-6 font-mono text-sm font-medium text-huy-danger">
              OHNE HUY DIGITAL
            </div>
            <ul className="space-y-4">
              {PROBLEME.map((text) => (
                <li
                  key={text}
                  className="flex items-start gap-3 text-huy-muted"
                >
                  <span className="mt-0.5 text-huy-danger">&#10007;</span>
                  {text}
                </li>
              ))}
            </ul>
          </div>

          {/* Lösung */}
          <div className="karte border-huy-success/20">
            <div className="mb-6 font-mono text-sm font-medium text-huy-success">
              MIT HUY DIGITAL
            </div>
            <ul className="space-y-4">
              {LOESUNGEN.map((text) => (
                <li
                  key={text}
                  className="flex items-start gap-3 text-huy-text"
                >
                  <span className="mt-0.5 text-huy-success">&#10003;</span>
                  {text}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </AbschnittContainer>
    </section>
  );
}

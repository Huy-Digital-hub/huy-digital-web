import { AbschnittContainer } from "@/components/ui/AbschnittContainer";

export default function ImpressumSeite() {
  return (
    <section className="py-24 md:py-32">
      <AbschnittContainer className="max-w-3xl">
        <h1 className="text-3xl font-bold text-huy-text md:text-4xl">
          Impressum
        </h1>

        <div className="mt-12 space-y-8 text-huy-muted">
          <div>
            <h2 className="mb-3 text-lg font-semibold text-huy-text">
              Angaben gemäss Schweizer Recht
            </h2>
            <p>Marcel Huy</p>
            <p>Mittelstrasse 5</p>
            <p>3414 Oberburg, Schweiz</p>
          </div>

          <div>
            <h2 className="mb-3 text-lg font-semibold text-huy-text">
              Kontakt
            </h2>
            <p>
              E-Mail:{" "}
              <a
                href="mailto:marcel@huy-digital.com"
                className="text-huy-gold transition-colors hover:text-huy-gold-light"
              >
                marcel@huy-digital.com
              </a>
            </p>
          </div>

          <div>
            <h2 className="mb-3 text-lg font-semibold text-huy-text">
              Verantwortlich für den Inhalt
            </h2>
            <p>Marcel Huy</p>
            <p>Mittelstrasse 5</p>
            <p>3414 Oberburg, Schweiz</p>
          </div>

          <div>
            <h2 className="mb-3 text-lg font-semibold text-huy-text">
              Haftungsausschluss
            </h2>
            <p className="leading-relaxed">
              Huy Digital ist eine reine Informationsplattform. Alle Inhalte
              dienen ausschliesslich zu Informationszwecken und stellen keine
              Empfehlung zum Kauf oder Verkauf von Finanzinstrumenten dar. Für
              die Richtigkeit, Vollständigkeit und Aktualität der bereitgestellten
              Informationen wird keine Gewähr übernommen. Jegliche Haftung für
              Schäden, die direkt oder indirekt aus der Nutzung dieser
              Plattform entstehen, wird ausgeschlossen.
            </p>
          </div>

          <div>
            <h2 className="mb-3 text-lg font-semibold text-huy-text">
              Urheberrecht
            </h2>
            <p className="leading-relaxed">
              Die auf dieser Plattform veröffentlichten Inhalte und Werke
              unterliegen dem Schweizer Urheberrecht. Jede Vervielfältigung,
              Bearbeitung, Verbreitung oder jede Art der Verwertung ausserhalb
              der Grenzen des Urheberrechts bedarf der schriftlichen Zustimmung
              des Autors.
            </p>
          </div>
        </div>
      </AbschnittContainer>
    </section>
  );
}

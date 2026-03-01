import { AbschnittContainer } from "@/components/ui/AbschnittContainer";

export default function AgbSeite() {
  return (
    <section className="py-24 md:py-32">
      <AbschnittContainer className="max-w-3xl">
        <h1 className="text-3xl font-bold text-huy-text md:text-4xl">
          Allgemeine Geschäftsbedingungen
        </h1>
        <p className="mt-4 text-sm text-huy-muted">
          Stand: März 2026
        </p>

        <div className="mt-12 space-y-10 text-huy-muted">
          {/* 1. Geltungsbereich */}
          <div>
            <h2 className="mb-3 text-lg font-semibold text-huy-text">
              1. Geltungsbereich
            </h2>
            <p className="leading-relaxed">
              Diese Allgemeinen Geschäftsbedingungen (AGB) gelten für die
              Nutzung der Plattform Huy Digital (huy-digital.com), betrieben von
              Marcel Huy, Mittelstrasse 5, 3414 Oberburg, Schweiz. Mit der
              Registrierung und Nutzung der Plattform akzeptieren Sie diese AGB.
            </p>
          </div>

          {/* 2. Leistungen */}
          <div>
            <h2 className="mb-3 text-lg font-semibold text-huy-text">
              2. Leistungen
            </h2>
            <p className="mb-3 leading-relaxed">
              Huy Digital ist eine Informationsplattform, die Marktdaten,
              Analysen und Trading-Tools bereitstellt. Die Plattform bietet
              unter anderem:
            </p>
            <ul className="list-inside list-disc space-y-2">
              <li>Marktregime-Erkennung und Sentiment-Analyse</li>
              <li>COT-Daten und Smart Money Tracking</li>
              <li>Korrelationsanalysen</li>
              <li>Echtzeit-Trading-News via Telegram</li>
              <li>Live-Transkription von Pressekonferenzen</li>
            </ul>
            <div className="mt-4 rounded-lg border border-huy-gold/30 bg-huy-gold/5 p-4">
              <p className="text-sm font-medium leading-relaxed text-huy-text">
                Wichtiger Hinweis: Huy Digital bietet ausschliesslich
                Informationen und keine Anlageberatung. Alle dargestellten
                Inhalte, Daten und Analysen stellen keine Empfehlung zum Kauf
                oder Verkauf von Finanzinstrumenten dar. Jede
                Investitionsentscheidung liegt in der alleinigen Verantwortung
                des Nutzers.
              </p>
            </div>
          </div>

          {/* 3. Abo-Bedingungen */}
          <div>
            <h2 className="mb-3 text-lg font-semibold text-huy-text">
              3. Abonnement und Kündigung
            </h2>
            <p className="mb-3 leading-relaxed">
              Huy Digital bietet verschiedene Abonnement-Pläne an (Free,
              Starter, Pro, Elite). Für kostenpflichtige Pläne gilt:
            </p>
            <ul className="list-inside list-disc space-y-2">
              <li>
                Die Abrechnung erfolgt monatlich über den Zahlungsdienstleister
                Stripe.
              </li>
              <li>
                Das Abonnement verlängert sich automatisch um einen weiteren
                Monat, sofern es nicht vor Ablauf der aktuellen Laufzeit
                gekündigt wird.
              </li>
              <li>
                Die Kündigung ist jederzeit zum Ende des aktuellen
                Abrechnungszeitraums möglich — direkt über das Dashboard oder
                per E-Mail an{" "}
                <a
                  href="mailto:marcel@huy-digital.com"
                  className="text-huy-gold transition-colors hover:text-huy-gold-light"
                >
                  marcel@huy-digital.com
                </a>
                .
              </li>
              <li>
                Bereits bezahlte Beiträge werden nicht zurückerstattet, es sei
                denn, es liegt ein gesetzlicher Anspruch vor.
              </li>
              <li>
                Preisänderungen werden mindestens 30 Tage im Voraus per E-Mail
                angekündigt.
              </li>
            </ul>
          </div>

          {/* 4. Haftungsausschluss */}
          <div>
            <h2 className="mb-3 text-lg font-semibold text-huy-text">
              4. Haftungsausschluss
            </h2>
            <div className="rounded-lg border border-huy-danger/30 bg-huy-danger/5 p-4">
              <p className="mb-3 text-sm font-medium leading-relaxed text-huy-text">
                Dieser Abschnitt ist besonders wichtig. Bitte lesen Sie ihn
                sorgfältig.
              </p>
            </div>
            <ul className="mt-4 list-inside list-disc space-y-3 leading-relaxed">
              <li>
                Huy Digital übernimmt <strong className="text-huy-text">keine Haftung</strong> für
                finanzielle Verluste, die direkt oder indirekt aus der Nutzung
                der Plattform, ihrer Daten oder Analysen entstehen.
              </li>
              <li>
                Die bereitgestellten Informationen, Daten und Analysen werden
                ohne Gewähr auf Richtigkeit, Vollständigkeit oder Aktualität
                zur Verfügung gestellt.
              </li>
              <li>
                Vergangene Ergebnisse oder Analysen sind kein verlässlicher
                Indikator für zukünftige Entwicklungen.
              </li>
              <li>
                Der Handel mit Finanzinstrumenten ist mit erheblichen Risiken
                verbunden und kann zum Totalverlust des eingesetzten Kapitals
                führen.
              </li>
              <li>
                Der Nutzer handelt stets auf eigenes Risiko und eigene
                Verantwortung. Huy Digital empfiehlt, vor jeder
                Investitionsentscheidung einen qualifizierten Finanzberater zu
                konsultieren.
              </li>
              <li>
                Huy Digital haftet nicht für technische Ausfälle,
                Datenverluste oder Verzögerungen bei der Datenbereitstellung.
              </li>
            </ul>
          </div>

          {/* 5. Gewährleistung */}
          <div>
            <h2 className="mb-3 text-lg font-semibold text-huy-text">
              5. Gewährleistung
            </h2>
            <p className="leading-relaxed">
              Huy Digital bemüht sich um eine hohe Verfügbarkeit und Qualität
              der Plattform, kann jedoch keine ununterbrochene Verfügbarkeit
              garantieren. Wartungsarbeiten, technische Störungen oder
              Aktualisierungen können zu vorübergehenden Einschränkungen
              führen. Ein Anspruch auf ständige Verfügbarkeit besteht nicht.
            </p>
          </div>

          {/* 6. Datenschutz */}
          <div>
            <h2 className="mb-3 text-lg font-semibold text-huy-text">
              6. Datenschutz
            </h2>
            <p className="leading-relaxed">
              Der Schutz Ihrer persönlichen Daten ist uns wichtig. Details zur
              Erhebung, Verarbeitung und Nutzung Ihrer Daten finden Sie in
              unserer{" "}
              <a
                href="/datenschutz"
                className="text-huy-gold transition-colors hover:text-huy-gold-light"
              >
                Datenschutzerklärung
              </a>
              .
            </p>
          </div>

          {/* 7. Anwendbares Recht */}
          <div>
            <h2 className="mb-3 text-lg font-semibold text-huy-text">
              7. Anwendbares Recht und Gerichtsstand
            </h2>
            <p className="leading-relaxed">
              Es gilt ausschliesslich Schweizer Recht. Gerichtsstand ist Bern,
              Schweiz. Zwingende gesetzliche Bestimmungen über den
              Gerichtsstand bleiben vorbehalten.
            </p>
          </div>

          {/* 8. Schlussbestimmungen */}
          <div>
            <h2 className="mb-3 text-lg font-semibold text-huy-text">
              8. Schlussbestimmungen
            </h2>
            <p className="leading-relaxed">
              Sollten einzelne Bestimmungen dieser AGB unwirksam sein oder
              werden, bleibt die Wirksamkeit der übrigen Bestimmungen davon
              unberührt. Anstelle der unwirksamen Bestimmung gilt eine
              Regelung, die dem wirtschaftlichen Zweck der unwirksamen
              Bestimmung am nächsten kommt. Huy Digital behält sich vor, diese
              AGB jederzeit zu ändern. Die aktuelle Version ist stets auf
              dieser Seite verfügbar.
            </p>
          </div>
        </div>
      </AbschnittContainer>
    </section>
  );
}

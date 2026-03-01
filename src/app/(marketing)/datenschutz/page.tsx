import { AbschnittContainer } from "@/components/ui/AbschnittContainer";

export default function DatenschutzSeite() {
  return (
    <section className="py-24 md:py-32">
      <AbschnittContainer className="max-w-3xl">
        <h1 className="text-3xl font-bold text-huy-text md:text-4xl">
          Datenschutzerklärung
        </h1>
        <p className="mt-4 text-sm text-huy-muted">
          Stand: März 2026
        </p>

        <div className="mt-12 space-y-10 text-huy-muted">
          {/* 1. Verantwortlicher */}
          <div>
            <h2 className="mb-3 text-lg font-semibold text-huy-text">
              1. Verantwortlicher
            </h2>
            <p className="leading-relaxed">
              Verantwortlich für die Datenverarbeitung auf dieser Plattform ist:
            </p>
            <p className="mt-2">Marcel Huy</p>
            <p>Mittelstrasse 5</p>
            <p>3414 Oberburg, Schweiz</p>
            <p className="mt-2">
              E-Mail:{" "}
              <a
                href="mailto:marcel@huy-digital.com"
                className="text-huy-gold transition-colors hover:text-huy-gold-light"
              >
                marcel@huy-digital.com
              </a>
            </p>
          </div>

          {/* 2. Erhobene Daten */}
          <div>
            <h2 className="mb-3 text-lg font-semibold text-huy-text">
              2. Welche Daten werden erhoben
            </h2>
            <p className="mb-3 leading-relaxed">
              Wir erheben und verarbeiten folgende personenbezogene Daten:
            </p>
            <ul className="list-inside list-disc space-y-2">
              <li>
                <strong className="text-huy-text">Kontodaten:</strong> Name,
                E-Mail-Adresse, Passwort (verschlüsselt)
              </li>
              <li>
                <strong className="text-huy-text">Zahlungsdaten:</strong>{" "}
                Zahlungsinformationen werden direkt von Stripe verarbeitet. Wir
                speichern keine Kreditkartendaten.
              </li>
              <li>
                <strong className="text-huy-text">Nutzungsdaten:</strong>{" "}
                IP-Adresse, Browsertyp, Zugriffszeiten, aufgerufene Seiten
              </li>
              <li>
                <strong className="text-huy-text">Kommunikationsdaten:</strong>{" "}
                E-Mail-Korrespondenz bei Support-Anfragen
              </li>
            </ul>
          </div>

          {/* 3. Zweck */}
          <div>
            <h2 className="mb-3 text-lg font-semibold text-huy-text">
              3. Zweck der Verarbeitung
            </h2>
            <ul className="list-inside list-disc space-y-2">
              <li>Bereitstellung und Betrieb der Plattform</li>
              <li>Benutzerkonto-Verwaltung und Authentifizierung</li>
              <li>Abwicklung von Zahlungen und Abonnements</li>
              <li>Verbesserung unserer Dienste und Nutzererfahrung</li>
              <li>Kommunikation bei Support-Anfragen</li>
              <li>
                Einhaltung gesetzlicher Pflichten (Schweizer DSG und DSGVO)
              </li>
            </ul>
          </div>

          {/* 4. Stripe */}
          <div>
            <h2 className="mb-3 text-lg font-semibold text-huy-text">
              4. Zahlungsabwicklung (Stripe)
            </h2>
            <p className="leading-relaxed">
              Für die Zahlungsabwicklung nutzen wir den Dienst Stripe, Inc.
              (510 Townsend Street, San Francisco, CA 94103, USA).
              Zahlungsdaten werden direkt an Stripe übermittelt und dort gemäss
              deren Datenschutzrichtlinien verarbeitet. Stripe ist PCI DSS Level
              1 zertifiziert. Wir selbst speichern keine vollständigen
              Kreditkartennummern oder Bankdaten. Weitere Informationen finden
              Sie in der{" "}
              <a
                href="https://stripe.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-huy-gold transition-colors hover:text-huy-gold-light"
              >
                Datenschutzerklärung von Stripe
              </a>
              .
            </p>
          </div>

          {/* 5. Cookies */}
          <div>
            <h2 className="mb-3 text-lg font-semibold text-huy-text">
              5. Cookies
            </h2>
            <p className="leading-relaxed">
              Wir verwenden technisch notwendige Cookies für die
              Authentifizierung und Session-Verwaltung. Diese Cookies sind für
              den Betrieb der Plattform erforderlich und können nicht
              deaktiviert werden. Wir setzen keine Tracking- oder
              Werbe-Cookies ein.
            </p>
          </div>

          {/* 6. Rechte */}
          <div>
            <h2 className="mb-3 text-lg font-semibold text-huy-text">
              6. Ihre Rechte
            </h2>
            <p className="mb-3 leading-relaxed">
              Gemäss dem Schweizer Datenschutzgesetz (DSG) und der
              EU-Datenschutz-Grundverordnung (DSGVO) haben Sie folgende Rechte:
            </p>
            <ul className="list-inside list-disc space-y-2">
              <li>
                <strong className="text-huy-text">Auskunftsrecht:</strong>{" "}
                Sie können jederzeit Auskunft über Ihre gespeicherten Daten
                verlangen.
              </li>
              <li>
                <strong className="text-huy-text">Berichtigungsrecht:</strong>{" "}
                Sie können die Korrektur unrichtiger Daten verlangen.
              </li>
              <li>
                <strong className="text-huy-text">Löschungsrecht:</strong>{" "}
                Sie können die Löschung Ihrer Daten verlangen, sofern keine
                gesetzliche Aufbewahrungspflicht besteht.
              </li>
              <li>
                <strong className="text-huy-text">Datenportabilität:</strong>{" "}
                Sie können die Herausgabe Ihrer Daten in einem gängigen Format
                verlangen.
              </li>
              <li>
                <strong className="text-huy-text">Widerspruchsrecht:</strong>{" "}
                Sie können der Verarbeitung Ihrer Daten jederzeit
                widersprechen.
              </li>
            </ul>
          </div>

          {/* 7. Kontakt */}
          <div>
            <h2 className="mb-3 text-lg font-semibold text-huy-text">
              7. Kontakt
            </h2>
            <p className="leading-relaxed">
              Bei Fragen zum Datenschutz oder zur Ausübung Ihrer Rechte
              kontaktieren Sie uns unter:{" "}
              <a
                href="mailto:marcel@huy-digital.com"
                className="text-huy-gold transition-colors hover:text-huy-gold-light"
              >
                marcel@huy-digital.com
              </a>
            </p>
          </div>

          {/* 8. Änderungen */}
          <div>
            <h2 className="mb-3 text-lg font-semibold text-huy-text">
              8. Änderungen dieser Datenschutzerklärung
            </h2>
            <p className="leading-relaxed">
              Wir behalten uns vor, diese Datenschutzerklärung jederzeit
              anzupassen. Die aktuelle Version ist stets auf dieser Seite
              verfügbar.
            </p>
          </div>
        </div>
      </AbschnittContainer>
    </section>
  );
}

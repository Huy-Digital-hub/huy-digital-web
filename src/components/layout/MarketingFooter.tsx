import Link from "next/link";

const PRODUKT_LINKS = [
  { label: "Features", href: "#features" },
  { label: "Preise", href: "#preise" },
  { label: "Roadmap", href: "#roadmap" },
  { label: "Demo", href: "#terminal" },
];

const RESSOURCEN_LINKS = [
  { label: "Telegram News Bot", href: "https://t.me/trading_news_deutsch", extern: true },
  { label: "Anmelden", href: "/login", extern: false },
  { label: "Registrieren", href: "/registrierung", extern: false },
];

const RECHTLICHES_LINKS = [
  { label: "Impressum", href: "/impressum" },
  { label: "Datenschutz", href: "/datenschutz" },
  { label: "AGB", href: "/agb" },
];

export function MarketingFooter() {
  return (
    <footer className="border-t border-white/10 bg-huy-bg-alt pt-16 pb-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Marke */}
          <div>
            <span className="font-mono text-lg font-bold text-huy-gold">
              HUY <span className="font-light text-huy-text">DIGITAL</span>
            </span>
            <p className="mt-4 text-sm leading-relaxed text-huy-muted">
              Professionelle Trading Intelligence für Retail-Trader.
              Institutionelle Daten, verständlich aufbereitet.
            </p>
          </div>

          {/* Produkt */}
          <div>
            <h4 className="mb-4 font-semibold text-huy-text">Produkt</h4>
            <ul className="space-y-2 text-sm text-huy-muted">
              {PRODUKT_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="transition-colors hover:text-huy-text"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Ressourcen */}
          <div>
            <h4 className="mb-4 font-semibold text-huy-text">Ressourcen</h4>
            <ul className="space-y-2 text-sm text-huy-muted">
              {RESSOURCEN_LINKS.map((link) => (
                <li key={link.href}>
                  {link.extern ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition-colors hover:text-huy-text"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link
                      href={link.href}
                      className="transition-colors hover:text-huy-text"
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Rechtliches */}
          <div>
            <h4 className="mb-4 font-semibold text-huy-text">Rechtliches</h4>
            <ul className="space-y-2 text-sm text-huy-muted">
              {RECHTLICHES_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="transition-colors hover:text-huy-text"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-12 border-t border-white/10 pt-8">
          <p className="text-xs leading-relaxed text-huy-muted/70">
            Huy Digital ist eine reine Informationsplattform. Keine
            Anlageberatung. Alle Inhalte dienen ausschliesslich zu
            Informationszwecken und stellen keine Empfehlung zum Kauf oder
            Verkauf von Finanzinstrumenten dar.
          </p>
        </div>

        {/* Untere Leiste */}
        <div className="mt-6 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs text-huy-muted sm:flex-row">
          <p>&copy; {new Date().getFullYear()} Huy Digital. Alle Rechte vorbehalten.</p>
          <p>Made in Switzerland</p>
        </div>
      </div>
    </footer>
  );
}

import Link from "next/link";
import SessionWrapper from "@/components/dashboard/SessionWrapper";
import BenutzerNav from "@/components/dashboard/BenutzerNav";

const navLinks = [
  { href: "/dashboard/uebersicht", label: "Übersicht" },
  { href: "/dashboard/marktdaten", label: "Marktdaten" },
  { href: "/dashboard/signale", label: "Signale" },
  { href: "/dashboard/portfolio", label: "Portfolio" },
  { href: "/dashboard/einstellungen", label: "Einstellungen" },
];

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SessionWrapper>
      <div className="flex min-h-screen bg-huy-bg">
        {/* Sidebar */}
        <aside className="hidden w-64 flex-col border-r border-white/10 bg-huy-card lg:flex">
          <div className="p-6">
            <Link href="/dashboard/uebersicht">
              <h2 className="text-lg font-bold text-huy-gold">Huy Digital</h2>
            </Link>
          </div>
          <nav className="flex-1 space-y-1 px-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block rounded-md px-3 py-2 text-sm text-huy-muted transition-colors hover:bg-white/5 hover:text-huy-text"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <BenutzerNav />
        </aside>

        {/* Hauptinhalt */}
        <div className="flex flex-1 flex-col">
          <main className="flex-1 p-6">{children}</main>
          <footer className="border-t border-white/10 px-6 py-4">
            <p className="text-xs leading-relaxed text-huy-muted/70">
              Huy Digital ist eine reine Informationsplattform. Keine
              Anlageberatung. Alle Inhalte dienen ausschliesslich zu
              Informationszwecken und stellen keine Empfehlung zum Kauf oder
              Verkauf von Finanzinstrumenten dar.
            </p>
          </footer>
        </div>
      </div>
    </SessionWrapper>
  );
}

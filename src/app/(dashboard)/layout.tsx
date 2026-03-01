export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex min-h-screen bg-huy-bg">
      {/* Sidebar — wird implementiert */}
      <aside className="hidden w-64 border-r border-white/10 bg-huy-card lg:block">
        <div className="p-6">
          <h2 className="text-lg font-bold text-huy-gold">Huy Digital</h2>
        </div>
        <nav className="space-y-1 px-3">
          {/* Navigation wird implementiert */}
        </nav>
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
  );
}

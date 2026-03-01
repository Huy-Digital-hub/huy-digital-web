export default function MarketingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen bg-huy-bg">
      {/* Header — wird implementiert */}
      <header className="border-b border-white/10 bg-huy-card/50 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
          <span className="text-lg font-bold text-huy-gold">Huy Digital</span>
          {/* Navigation wird implementiert */}
        </div>
      </header>

      {children}

      {/* Footer — wird implementiert */}
      <footer className="border-t border-white/10 py-8 text-center text-sm text-huy-muted">
        &copy; {new Date().getFullYear()} Huy Digital. Alle Rechte vorbehalten.
      </footer>
    </div>
  );
}

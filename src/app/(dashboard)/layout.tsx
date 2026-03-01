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
      <main className="flex-1 p-6">{children}</main>
    </div>
  );
}

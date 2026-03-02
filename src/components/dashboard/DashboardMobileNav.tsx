"use client";

import { useState } from "react";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";

const navLinks = [
  { href: "/dashboard/uebersicht", label: "Übersicht" },
  { href: "/dashboard/marktdaten", label: "Marktdaten" },
  { href: "/dashboard/signale", label: "Signale" },
  { href: "/dashboard/portfolio", label: "Portfolio" },
  { href: "/dashboard/einstellungen", label: "Einstellungen" },
];

export default function DashboardMobileNav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { data: session } = useSession();

  return (
    <>
      {/* Mobile Header-Bar */}
      <div className="flex h-14 items-center justify-between border-b border-white/10 bg-huy-card px-4 lg:hidden">
        <Link href="/" className="text-sm text-huy-muted transition-colors hover:text-huy-gold">
          &larr; Startseite
        </Link>

        <Link href="/dashboard/uebersicht">
          <span className="font-mono text-base font-bold text-huy-gold">HUY</span>
          <span className="font-mono text-base font-light text-huy-text"> DIGITAL</span>
        </Link>

        <button
          type="button"
          aria-label={menuOpen ? "Menü schliessen" : "Menü öffnen"}
          aria-expanded={menuOpen}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10"
          style={{ touchAction: "manipulation" }}
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            className="pointer-events-none text-huy-text"
          >
            {menuOpen ? (
              <>
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </>
            ) : (
              <>
                <line x1="4" y1="6" x2="20" y2="6" />
                <line x1="4" y1="12" x2="20" y2="12" />
                <line x1="4" y1="18" x2="20" y2="18" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Dropdown-Menu */}
      {menuOpen && (
        <div className="border-b border-white/10 bg-huy-card lg:hidden">
          <nav className="flex flex-col px-4 py-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-md px-3 py-2.5 text-sm text-huy-muted transition-colors active:bg-white/10 hover:text-huy-text"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {session?.user && (
            <div className="border-t border-white/10 px-4 py-3">
              <p className="mb-2 truncate px-3 text-xs text-huy-muted">
                {session.user.name ?? session.user.email}
              </p>
              <Link
                href="/dashboard/profil"
                onClick={() => setMenuOpen(false)}
                className="block rounded-md px-3 py-2.5 text-sm text-huy-muted transition-colors hover:text-huy-text"
              >
                Profil
              </Link>
              <button
                onClick={() => signOut({ callbackUrl: "/login" })}
                className="w-full rounded-md px-3 py-2.5 text-left text-sm text-red-400 transition-colors hover:bg-white/5"
              >
                Abmelden
              </button>
            </div>
          )}
        </div>
      )}
    </>
  );
}

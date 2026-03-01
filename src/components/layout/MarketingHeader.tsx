"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { label: "Features", href: "#features" },
  { label: "Demo", href: "#terminal" },
  { label: "Preise", href: "#preise" },
  { label: "Roadmap", href: "#roadmap" },
];

export function MarketingHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sectionIds = NAV_LINKS.map((l) => l.href.replace("#", ""));
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        }
      },
      { rootMargin: "-80px 0px -50% 0px", threshold: 0 }
    );

    for (const id of sectionIds) {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    }

    return () => observer.disconnect();
  }, []);

  function scrollToSection(href: string) {
    const id = href.replace("#", "");
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  }

  return (
    <header
      className={cn(
        "sticky top-0 z-40 border-b border-white/10 transition-colors duration-300",
        scrolled ? "bg-huy-bg" : "bg-huy-bg/80"
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-1.5">
          <span className="font-mono text-lg font-bold text-huy-gold">HUY</span>
          <span className="font-mono text-lg font-light text-huy-text">DIGITAL</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(link.href);
              }}
              className={cn(
                "text-sm font-medium transition-colors duration-200",
                activeSection === link.href.replace("#", "")
                  ? "text-huy-gold"
                  : "text-huy-muted hover:text-huy-text"
              )}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTAs */}
        <div className="hidden items-center gap-3 md:flex">
          <Link href="/login" className="btn-sekundaer text-sm">
            Anmelden
          </Link>
          <Link href="/registrierung" className="btn-gold text-sm">
            Kostenlos starten
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          type="button"
          aria-label={menuOpen ? "Menü schliessen" : "Menü öffnen"}
          aria-expanded={menuOpen}
          className="relative z-50 flex h-12 w-12 cursor-pointer items-center justify-center rounded-lg border border-white/10 bg-huy-card md:hidden"
          style={{ WebkitTapHighlightColor: "transparent", touchAction: "manipulation" }}
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          <svg
            width="24"
            height="24"
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

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute left-0 right-0 top-16 z-50 border-b border-white/10 bg-huy-bg shadow-2xl md:hidden">
          <nav className="flex flex-col px-4 py-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(link.href);
                }}
                className={cn(
                  "block rounded-lg px-4 py-3 text-base font-medium",
                  activeSection === link.href.replace("#", "")
                    ? "bg-huy-gold/10 text-huy-gold"
                    : "text-huy-muted active:bg-white/10"
                )}
              >
                {link.label}
              </a>
            ))}
            <div className="mt-3 flex flex-col gap-2 border-t border-white/10 pt-3">
              <Link
                href="/login"
                className="btn-sekundaer block text-center text-sm"
                onClick={() => setMenuOpen(false)}
              >
                Anmelden
              </Link>
              <Link
                href="/registrierung"
                className="btn-gold block text-center text-sm"
                onClick={() => setMenuOpen(false)}
              >
                Kostenlos starten
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

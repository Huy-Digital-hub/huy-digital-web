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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
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

  function handleNavClick(e: React.MouseEvent<HTMLAnchorElement>, href: string) {
    e.preventDefault();
    const id = href.replace("#", "");
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileMenuOpen(false);
  }

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b border-white/10 transition-all duration-300",
        scrolled ? "bg-huy-bg/90 backdrop-blur-lg" : "bg-transparent"
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
              onClick={(e) => handleNavClick(e, link.href)}
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
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 md:hidden"
          aria-label="Menü öffnen"
        >
          <div className="flex w-5 flex-col gap-1">
            <span
              className={cn(
                "h-0.5 w-full bg-huy-text transition-all duration-200",
                mobileMenuOpen && "translate-y-1.5 rotate-45"
              )}
            />
            <span
              className={cn(
                "h-0.5 w-full bg-huy-text transition-all duration-200",
                mobileMenuOpen && "opacity-0"
              )}
            />
            <span
              className={cn(
                "h-0.5 w-full bg-huy-text transition-all duration-200",
                mobileMenuOpen && "-translate-y-1.5 -rotate-45"
              )}
            />
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="border-t border-white/10 bg-huy-bg/95 backdrop-blur-lg md:hidden">
          <nav className="flex flex-col gap-1 px-4 py-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={cn(
                  "rounded-lg px-4 py-2.5 text-sm font-medium transition-colors",
                  activeSection === link.href.replace("#", "")
                    ? "bg-huy-gold/10 text-huy-gold"
                    : "text-huy-muted hover:bg-white/5 hover:text-huy-text"
                )}
              >
                {link.label}
              </a>
            ))}
            <div className="mt-3 flex flex-col gap-2 border-t border-white/10 pt-3">
              <Link href="/login" className="btn-sekundaer text-center text-sm">
                Anmelden
              </Link>
              <Link href="/registrierung" className="btn-gold text-center text-sm">
                Kostenlos starten
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

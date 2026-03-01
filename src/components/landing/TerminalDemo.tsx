"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { AbschnittContainer } from "@/components/ui/AbschnittContainer";
import { SektionUeberschrift } from "@/components/ui/SektionUeberschrift";

type ZeilenTyp = "system" | "header" | "news" | "daten" | "cot" | "smart" | "leer";

interface TerminalZeile {
  typ: ZeilenTyp;
  inhalt: string;
}

const TERMINAL_ZEILEN: TerminalZeile[] = [
  { typ: "system", inhalt: "> HUY DIGITAL Terminal v2.1.0 initialisiert..." },
  { typ: "system", inhalt: "> Verbindung zu Marktdaten-Feed hergestellt \u2713" },
  { typ: "leer", inhalt: "" },
  { typ: "header", inhalt: "\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550" },
  { typ: "header", inhalt: "  MARKTREGIME: RISK-ON    |    SENTIMENT: 72/100  " },
  { typ: "header", inhalt: "\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550" },
  { typ: "leer", inhalt: "" },
  { typ: "news", inhalt: "[NEWS] 14:32:05 \u2014 Fed l\u00e4sst Zinsen unver\u00e4ndert bei 4.50%" },
  { typ: "news", inhalt: "[NEWS] 14:32:07 \u2014 EUR/USD +45 Pips in 2 Minuten" },
  { typ: "leer", inhalt: "" },
  { typ: "daten", inhalt: "\u250C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510" },
  { typ: "daten", inhalt: "\u2502 Asset   \u2502 Preis    \u2502 Chg %  \u2502 Signal   \u2502" },
  { typ: "daten", inhalt: "\u251C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524" },
  { typ: "daten", inhalt: "\u2502 EUR/USD \u2502 1.0892   \u2502 +0.34% \u2502 \u25B2 LONG   \u2502" },
  { typ: "daten", inhalt: "\u2502 GBP/USD \u2502 1.2741   \u2502 +0.12% \u2502 \u2014 FLAT   \u2502" },
  { typ: "daten", inhalt: "\u2502 XAU/USD \u2502 2,341.50 \u2502 -0.21% \u2502 \u25BC SHORT  \u2502" },
  { typ: "daten", inhalt: "\u2502 SPX 500 \u2502 5,234.18 \u2502 +0.67% \u2502 \u25B2 LONG   \u2502" },
  { typ: "daten", inhalt: "\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518" },
  { typ: "leer", inhalt: "" },
  { typ: "cot", inhalt: "[COT] EUR Commercials: Net Short -142,350 (\u25BC -3.2%)" },
  { typ: "cot", inhalt: "[COT] GBP Large Specs: Net Long +58,230 (\u25B2 +1.8%)" },
  { typ: "leer", inhalt: "" },
  { typ: "smart", inhalt: "[SMART MONEY] Unusual Options Activity: SPY $530 Calls" },
  { typ: "smart", inhalt: "[SMART MONEY] Dark Pool Volume: +340% \u00FCber Durchschnitt" },
];

const ZEILEN_FARBE: Record<ZeilenTyp, string> = {
  system: "text-huy-muted",
  header: "text-huy-gold font-bold",
  news: "text-huy-gold-light",
  daten: "text-huy-text",
  cot: "text-emerald-400",
  smart: "text-cyan-400",
  leer: "",
};

export function TerminalDemo() {
  const [sichtbareZeilen, setSichtbareZeilen] = useState(0);
  const [phase, setPhase] = useState<"tippen" | "pause" | "reset">("tippen");

  useEffect(() => {
    if (phase === "tippen") {
      const timer = setInterval(() => {
        setSichtbareZeilen((prev) => {
          if (prev >= TERMINAL_ZEILEN.length) {
            setPhase("pause");
            return prev;
          }
          return prev + 1;
        });
      }, 150);
      return () => clearInterval(timer);
    }

    if (phase === "pause") {
      const timer = setTimeout(() => {
        setPhase("reset");
      }, 4000);
      return () => clearTimeout(timer);
    }

    if (phase === "reset") {
      setSichtbareZeilen(0);
      setPhase("tippen");
    }
  }, [phase]);

  const zeilen = TERMINAL_ZEILEN.slice(0, sichtbareZeilen);

  return (
    <section id="terminal" className="bg-huy-bg-alt py-24 md:py-32">
      <AbschnittContainer>
        <SektionUeberschrift
          tagline="Live Demo"
          titel="Dein Trading-Terminal"
          beschreibung="So sieht professionelle Marktanalyse aus — alles auf einen Blick."
        />

        <div className="mx-auto mt-16 max-w-4xl">
          {/* Terminal-Fenster Titelleiste */}
          <div className="flex items-center gap-2 rounded-t-lg border border-white/10 bg-huy-card px-4 py-3">
            <div className="h-3 w-3 rounded-full bg-huy-danger" />
            <div className="h-3 w-3 rounded-full bg-huy-gold" />
            <div className="h-3 w-3 rounded-full bg-huy-success" />
            <span className="ml-4 font-mono text-xs text-huy-muted">
              huy-digital-terminal — Marktdaten
            </span>
          </div>

          {/* Terminal-Body */}
          <div className="min-h-[420px] overflow-x-auto rounded-b-lg border border-t-0 border-white/10 bg-[#0d0d14] p-4 sm:p-6">
            <div className="font-mono text-xs leading-relaxed sm:text-sm">
              {zeilen.map((zeile, i) => (
                <div
                  key={i}
                  className={cn(
                    "animate-slide-in whitespace-pre",
                    ZEILEN_FARBE[zeile.typ]
                  )}
                >
                  {zeile.inhalt || "\u00A0"}
                </div>
              ))}
              <span className="inline-block h-4 w-2 animate-cursor-blink bg-huy-gold" />
            </div>
          </div>
        </div>
      </AbschnittContainer>
    </section>
  );
}

import Link from "next/link";
import { cn } from "@/lib/utils";

interface PreisKarteProps {
  name: string;
  preis: string;
  beschreibung: string;
  features: string[];
  hervorgehoben: boolean;
  ctaText: string;
  ctaHref: string;
}

export function PreisKarte({
  name,
  preis,
  beschreibung,
  features,
  hervorgehoben,
  ctaText,
  ctaHref,
}: PreisKarteProps) {
  return (
    <div
      className={cn(
        "karte relative flex flex-col",
        hervorgehoben
          ? "border-huy-gold/50 shadow-lg shadow-huy-gold/10 sm:scale-105"
          : ""
      )}
    >
      {hervorgehoben && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-huy-gold px-3 py-1 text-xs font-bold text-huy-bg">
          EMPFOHLEN
        </div>
      )}

      <div className="mb-6">
        <h3 className="text-lg font-semibold text-huy-text">{name}</h3>
        <p className="mt-1 text-sm text-huy-muted">{beschreibung}</p>
      </div>

      <div className="mb-6">
        <span className="text-4xl font-bold text-huy-text">{preis}</span>
        <span className="ml-1 text-huy-muted">&euro;/Monat</span>
      </div>

      <ul className="mb-8 flex-1 space-y-3">
        {features.map((feature) => (
          <li
            key={feature}
            className="flex items-start gap-2 text-sm text-huy-muted"
          >
            <span className="mt-0.5 text-huy-success">&#10003;</span>
            {feature}
          </li>
        ))}
      </ul>

      <Link
        href={ctaHref}
        className={cn(
          "w-full text-center",
          hervorgehoben ? "btn-gold" : "btn-sekundaer"
        )}
      >
        {ctaText}
      </Link>
    </div>
  );
}

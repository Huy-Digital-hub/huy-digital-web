import { cn } from "@/lib/utils";

interface FeatureKarteProps {
  titel: string;
  beschreibung: string;
  icon: string;
  status: "live" | "beta" | "bald";
}

export function FeatureKarte({ titel, beschreibung, icon, status }: FeatureKarteProps) {
  return (
    <div className="karte group transition-all duration-300 hover:border-huy-gold/30">
      <div className="mb-4 flex items-center justify-between">
        <span className="text-3xl">{icon}</span>
        <span
          className={cn(
            "rounded px-2 py-1 font-mono text-xs uppercase",
            status === "live" && "bg-huy-success/10 text-huy-success",
            status === "beta" && "bg-huy-gold/10 text-huy-gold",
            status === "bald" && "bg-white/5 text-huy-muted"
          )}
        >
          {status}
        </span>
      </div>
      <h3 className="text-lg font-semibold text-huy-text transition-colors group-hover:text-huy-gold">
        {titel}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-huy-muted">
        {beschreibung}
      </p>
    </div>
  );
}

import { cn } from "@/lib/utils";

interface RoadmapEintragProps {
  quartal: string;
  titel: string;
  beschreibung: string;
  status: "erledigt" | "aktuell" | "geplant";
  features: string[];
  index: number;
}

export function RoadmapEintrag({
  quartal,
  titel,
  beschreibung,
  status,
  features,
  index,
}: RoadmapEintragProps) {
  const istRechts = index % 2 !== 0;

  return (
    <div
      className={cn(
        "relative mb-12 pl-12 md:w-1/2 md:pl-0",
        istRechts ? "md:ml-auto md:pl-12" : "md:pr-12 md:text-right"
      )}
    >
      {/* Timeline-Punkt */}
      <div
        className={cn(
          "absolute left-[13px] top-6 h-3 w-3 rounded-full border-2 md:left-auto",
          istRechts ? "md:-left-[7px]" : "md:-right-[7px]",
          status === "erledigt" && "border-huy-success bg-huy-success",
          status === "aktuell" && "border-huy-gold bg-huy-gold",
          status === "geplant" && "border-white/20 bg-huy-card"
        )}
      />

      <div className="karte">
        <span className="font-mono text-xs text-huy-gold">{quartal}</span>
        <h3 className="mt-2 text-lg font-semibold text-huy-text">{titel}</h3>
        <p className="mt-1 text-sm text-huy-muted">{beschreibung}</p>
        <ul className={cn("mt-3 space-y-1", istRechts ? "" : "md:text-right")}>
          {features.map((feature) => (
            <li
              key={feature}
              className={cn(
                "flex items-center gap-2 text-sm text-huy-muted",
                istRechts ? "" : "md:flex-row-reverse"
              )}
            >
              <span
                className={cn(
                  status === "erledigt" && "text-huy-success",
                  status === "aktuell" && "text-huy-gold",
                  status === "geplant" && "text-huy-muted"
                )}
              >
                {status === "erledigt"
                  ? "\u2713"
                  : status === "aktuell"
                    ? "\u25B6"
                    : "\u25CB"}
              </span>
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

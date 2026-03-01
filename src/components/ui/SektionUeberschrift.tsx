interface SektionUeberschriftProps {
  tagline: string;
  titel: string;
  beschreibung?: string;
}

export function SektionUeberschrift({ tagline, titel, beschreibung }: SektionUeberschriftProps) {
  return (
    <div className="text-center">
      <span className="font-mono text-sm uppercase tracking-widest text-huy-gold">
        {tagline}
      </span>
      <h2 className="mt-4 text-3xl font-bold tracking-tight text-huy-text sm:text-4xl md:text-5xl">
        {titel}
      </h2>
      {beschreibung && (
        <p className="mx-auto mt-4 max-w-2xl text-lg text-huy-muted">
          {beschreibung}
        </p>
      )}
    </div>
  );
}

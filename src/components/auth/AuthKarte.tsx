import Link from "next/link";

interface AuthKarteProps {
  titel: string;
  beschreibung: string;
  children: React.ReactNode;
}

export default function AuthKarte({
  titel,
  beschreibung,
  children,
}: AuthKarteProps) {
  return (
    <div className="rounded-lg border border-white/10 bg-huy-card p-8">
      <div className="mb-6">
        <Link
          href="/"
          className="text-sm text-huy-muted transition-colors hover:text-huy-gold"
        >
          &larr; Zurück zur Startseite
        </Link>
      </div>
      <h1 className="text-2xl font-bold text-huy-text">{titel}</h1>
      <p className="mt-2 text-sm text-huy-muted">{beschreibung}</p>
      <div className="mt-6">{children}</div>
    </div>
  );
}

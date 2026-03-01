import { getSession } from "@/lib/auth";
import { redirect } from "next/navigation";

export const metadata = {
  title: "Profil",
};

export default async function ProfilSeite() {
  const session = await getSession();

  if (!session?.user) {
    redirect("/login");
  }

  return (
    <div>
      <h1 className="text-2xl font-bold text-huy-text">Profil</h1>
      <p className="mt-2 text-huy-muted">Deine Kontoinformationen.</p>

      <div className="mt-6 max-w-lg rounded-lg border border-white/10 bg-huy-card p-6">
        <dl className="space-y-4">
          <div>
            <dt className="text-sm font-medium text-huy-muted">E-Mail</dt>
            <dd className="mt-1 text-huy-text">{session.user.email}</dd>
          </div>
          {session.user.name && (
            <div>
              <dt className="text-sm font-medium text-huy-muted">Name</dt>
              <dd className="mt-1 text-huy-text">{session.user.name}</dd>
            </div>
          )}
          <div>
            <dt className="text-sm font-medium text-huy-muted">Rolle</dt>
            <dd className="mt-1 text-huy-text">
              {session.user.rolle === "admin" ? "Administrator" : "Benutzer"}
            </dd>
          </div>
          <div>
            <dt className="text-sm font-medium text-huy-muted">Benutzer-ID</dt>
            <dd className="mt-1 font-mono text-sm text-huy-muted">
              {session.user.id}
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );
}

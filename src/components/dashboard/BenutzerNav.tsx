"use client";

import { signOut, useSession } from "next-auth/react";
import Link from "next/link";

export default function BenutzerNav() {
  const { data: session } = useSession();

  if (!session?.user) return null;

  return (
    <div className="border-t border-white/10 p-4">
      <div className="mb-3">
        <p className="truncate text-sm font-medium text-huy-text">
          {session.user.name ?? session.user.email}
        </p>
        <p className="text-xs text-huy-muted">
          {session.user.rolle === "admin" ? "Administrator" : "Benutzer"}
        </p>
      </div>
      <div className="space-y-1">
        <Link
          href="/profil"
          className="block rounded-md px-3 py-2 text-sm text-huy-muted transition-colors hover:bg-white/5 hover:text-huy-text"
        >
          Profil
        </Link>
        <button
          onClick={() => signOut({ callbackUrl: "/login" })}
          className="w-full rounded-md px-3 py-2 text-left text-sm text-huy-muted transition-colors hover:bg-white/5 hover:text-red-400"
        >
          Abmelden
        </button>
      </div>
    </div>
  );
}

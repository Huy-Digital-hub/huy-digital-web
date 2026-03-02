import { Suspense } from "react";
import AuthKarte from "@/components/auth/AuthKarte";
import PasswortZuruecksetzenFormular from "@/components/auth/PasswortZuruecksetzenFormular";

export const metadata = {
  title: "Neues Passwort setzen",
};

export default function PasswortZuruecksetzenSeite() {
  return (
    <AuthKarte
      titel="Neues Passwort setzen"
      beschreibung="Gib dein neues Passwort ein."
    >
      <Suspense fallback={<div className="text-center text-sm text-huy-muted">Laden...</div>}>
        <PasswortZuruecksetzenFormular />
      </Suspense>
    </AuthKarte>
  );
}

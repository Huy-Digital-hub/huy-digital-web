import { Suspense } from "react";
import AuthKarte from "@/components/auth/AuthKarte";
import LoginFormular from "@/components/auth/LoginFormular";

export const metadata = {
  title: "Anmelden",
};

export default function LoginSeite() {
  return (
    <AuthKarte
      titel="Anmelden"
      beschreibung="Melde dich mit deinem Konto an."
    >
      <Suspense fallback={<div className="text-center text-sm text-huy-muted">Laden...</div>}>
        <LoginFormular />
      </Suspense>
    </AuthKarte>
  );
}

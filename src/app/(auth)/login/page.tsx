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
      <LoginFormular />
    </AuthKarte>
  );
}

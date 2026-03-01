import AuthKarte from "@/components/auth/AuthKarte";
import PasswortVergessenFormular from "@/components/auth/PasswortVergessenFormular";

export const metadata = {
  title: "Passwort vergessen",
};

export default function PasswortVergessenSeite() {
  return (
    <AuthKarte
      titel="Passwort vergessen"
      beschreibung="Gib deine E-Mail-Adresse ein, um dein Passwort zurückzusetzen."
    >
      <PasswortVergessenFormular />
    </AuthKarte>
  );
}

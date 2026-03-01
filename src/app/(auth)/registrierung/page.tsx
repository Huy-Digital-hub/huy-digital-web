import AuthKarte from "@/components/auth/AuthKarte";
import RegistrierungFormular from "@/components/auth/RegistrierungFormular";

export const metadata = {
  title: "Registrieren",
};

export default function RegistrierungSeite() {
  return (
    <AuthKarte
      titel="Konto erstellen"
      beschreibung="Erstelle ein kostenloses Konto für Huy Digital."
    >
      <RegistrierungFormular />
    </AuthKarte>
  );
}

import { z } from "zod";

export const loginSchema = z.object({
  email: z
    .string()
    .min(1, "E-Mail ist erforderlich")
    .email("Ungültige E-Mail-Adresse"),
  passwort: z
    .string()
    .min(1, "Passwort ist erforderlich"),
});

export const registrierungSchema = z
  .object({
    email: z
      .string()
      .min(1, "E-Mail ist erforderlich")
      .email("Ungültige E-Mail-Adresse"),
    passwort: z
      .string()
      .min(8, "Passwort muss mindestens 8 Zeichen lang sein")
      .regex(/[A-Z]/, "Passwort muss mindestens einen Grossbuchstaben enthalten")
      .regex(/[0-9]/, "Passwort muss mindestens eine Zahl enthalten"),
    passwortBestaetigung: z.string().min(1, "Passwort-Bestätigung ist erforderlich"),
  })
  .refine((data) => data.passwort === data.passwortBestaetigung, {
    message: "Passwörter stimmen nicht überein",
    path: ["passwortBestaetigung"],
  });

export const passwortVergessenSchema = z.object({
  email: z
    .string()
    .min(1, "E-Mail ist erforderlich")
    .email("Ungültige E-Mail-Adresse"),
});

export const passwortZuruecksetzenSchema = z
  .object({
    token: z.string().min(1, "Token ist erforderlich"),
    passwort: z
      .string()
      .min(8, "Passwort muss mindestens 8 Zeichen lang sein")
      .regex(/[A-Z]/, "Passwort muss mindestens einen Grossbuchstaben enthalten")
      .regex(/[0-9]/, "Passwort muss mindestens eine Zahl enthalten"),
    passwortBestaetigung: z.string().min(1, "Passwort-Bestätigung ist erforderlich"),
  })
  .refine((data) => data.passwort === data.passwortBestaetigung, {
    message: "Passwörter stimmen nicht überein",
    path: ["passwortBestaetigung"],
  });

export type LoginInput = z.infer<typeof loginSchema>;
export type RegistrierungInput = z.infer<typeof registrierungSchema>;
export type PasswortVergessenInput = z.infer<typeof passwortVergessenSchema>;
export type PasswortZuruecksetzenInput = z.infer<typeof passwortZuruecksetzenSchema>;

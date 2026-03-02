import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT) || 587,
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

interface EmailOptionen {
  an: string;
  betreff: string;
  html: string;
  von?: string;
}

export async function sendeEmail({ an, betreff, html, von }: EmailOptionen) {
  await transporter.sendMail({
    from: von ?? `"Huy Digital" <${process.env.SMTP_USER}>`,
    to: an,
    subject: betreff,
    html,
  });
}

export function verifizierungsEmail(verifizierungsUrl: string): string {
  return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #0a0a0f; color: #e4e4e7; padding: 40px; border-radius: 8px;">
      <h1 style="color: #D4AF37; font-size: 24px; margin-bottom: 24px;">E-Mail bestätigen</h1>
      <p style="margin-bottom: 16px; line-height: 1.6;">
        Willkommen bei Huy Digital! Bitte bestätige deine E-Mail-Adresse, um dein Konto zu aktivieren.
      </p>
      <a href="${verifizierungsUrl}" style="display: inline-block; background-color: #D4AF37; color: #0a0a0f; padding: 12px 32px; border-radius: 6px; text-decoration: none; font-weight: bold; margin: 16px 0;">
        E-Mail bestätigen
      </a>
      <p style="margin-top: 24px; font-size: 14px; color: #a1a1aa; line-height: 1.6;">
        Dieser Link ist <strong>24 Stunden</strong> gültig. Falls du kein Konto erstellt hast, kannst du diese E-Mail ignorieren.
      </p>
      <hr style="border: none; border-top: 1px solid #333; margin: 24px 0;" />
      <p style="font-size: 12px; color: #666;">Huy Digital — huy-digital.com</p>
    </div>
  `;
}

export function passwortResetEmail(resetUrl: string): string {
  return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #0a0a0f; color: #e4e4e7; padding: 40px; border-radius: 8px;">
      <h1 style="color: #D4AF37; font-size: 24px; margin-bottom: 24px;">Passwort zurücksetzen</h1>
      <p style="margin-bottom: 16px; line-height: 1.6;">
        Du hast eine Anfrage zum Zurücksetzen deines Passworts gestellt.
        Klicke auf den Button unten, um ein neues Passwort zu setzen.
      </p>
      <a href="${resetUrl}" style="display: inline-block; background-color: #D4AF37; color: #0a0a0f; padding: 12px 32px; border-radius: 6px; text-decoration: none; font-weight: bold; margin: 16px 0;">
        Neues Passwort setzen
      </a>
      <p style="margin-top: 24px; font-size: 14px; color: #a1a1aa; line-height: 1.6;">
        Dieser Link ist <strong>1 Stunde</strong> gültig. Falls du diese Anfrage nicht gestellt hast, kannst du diese E-Mail ignorieren.
      </p>
      <hr style="border: none; border-top: 1px solid #333; margin: 24px 0;" />
      <p style="font-size: 12px; color: #666;">Huy Digital — huy-digital.com</p>
    </div>
  `;
}

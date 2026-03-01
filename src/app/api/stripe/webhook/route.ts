import { NextResponse } from "next/server";

// Stripe Webhook-Handler — Implementierung folgt
export async function POST() {
  // Webhook-Signatur verifizieren
  // Abo-Events verarbeiten
  return NextResponse.json({ empfangen: true });
}

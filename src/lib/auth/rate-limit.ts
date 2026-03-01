interface RateLimitEintrag {
  anzahl: number;
  zuruecksetzenUm: number;
}

const anfragen = new Map<string, RateLimitEintrag>();

/** Prüft Rate Limit. Gibt true zurück wenn blockiert. */
export function istRateLimitiert(
  schluessel: string,
  maxAnfragen: number = 5,
  fensterMs: number = 60_000
): boolean {
  const jetzt = Date.now();
  const eintrag = anfragen.get(schluessel);

  if (!eintrag || jetzt > eintrag.zuruecksetzenUm) {
    anfragen.set(schluessel, { anzahl: 1, zuruecksetzenUm: jetzt + fensterMs });
    return false;
  }

  eintrag.anzahl++;

  if (eintrag.anzahl > maxAnfragen) {
    return true;
  }

  return false;
}

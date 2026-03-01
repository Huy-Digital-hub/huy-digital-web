import { type ClassValue, clsx } from "clsx";

/** Hilfsfunktion zum Zusammenführen von Tailwind-Klassen */
export function cn(...inputs: ClassValue[]): string {
  return clsx(inputs);
}

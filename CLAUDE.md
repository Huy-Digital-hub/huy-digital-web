# CLAUDE.md — Huy Digital Trading Intelligence Platform

## KRITISCHE DEPLOYMENT-REGELN (NIEMALS BRECHEN)

1. **NIEMALS `npm run build` auf dem Infomaniak Server ausführen** — Der Server hat zu wenig RAM. Build passiert AUSSCHLIESSLICH lokal.
2. **`deploy.sh` auf dem Server NIEMALS überschreiben oder verändern** — Diese Datei darf KEIN `npm run build` enthalten.
3. **Deployment-Workflow:**
   - Lokal: `npm run build`
   - Lokal: `git add -f .next/standalone/ .next/static/`
   - Lokal: `git commit` und `git push`
   - Server: `cd ~/sites/huy-digital.com && ./deploy.sh`

## SCHUTZREGELN FÜR CODE-ÄNDERUNGEN

- Lies ZUERST alle betroffenen Dateien bevor du etwas änderst
- Zeige mir einen Plan BEVOR du Dateien änderst: welche Dateien, welche Zeilen, was genau
- Warte auf meine Bestätigung bevor du Änderungen durchführst
- Ändere NUR die Dateien und Zeilen die explizit mit der Aufgabe zu tun haben
- Wenn eine Datei funktioniert und nicht direkt betroffen ist: NICHT ANFASSEN
- Nach jeder Änderung: erkläre was du geändert hast und warum
- Bestehende Seiten NIEMALS komplett neu erstellen — nur gezielt ändern

## PROJEKT-BESCHREIBUNG

- Huy Digital ist eine Markt-Intelligence Plattform
- Zielgruppe: Trader, Investoren UND Börsen-Interessierte (nicht nur Trader!)
- Alle UI-Texte auf Deutsch
- Design: Dark Theme, Gold-Akzente (#D4AF37), Fonts: JetBrains Mono + Inter

## Sprache

- Immer auf Deutsch kommunizieren
- Alle Fragen, Erklärungen und Zusammenfassungen auf Deutsch

## Design

- Dark Theme mit Gold-Akzenten (#D4AF37)
- Fonts: JetBrains Mono + Inter
- Deutsche UI-Texte
- Bestehende Seiten NICHT komplett neu erstellen, sondern nur gezielt ändern

## Projekt-Übersicht

**Plattform:** Huy Digital Trading Intelligence (huy-digital.com)
**Typ:** SaaS Web-Plattform für Trading-Analyse und Marktintelligenz
**Sprache:** Deutsch (Schweiz) — sämtliche UI-Texte, Kommentare und Dokumentation auf Deutsch
**Repository:** https://github.com/Huy-Digital-hub/huy-digital-web

## Tech-Stack

| Komponente       | Technologie                          |
| ---------------- | ------------------------------------ |
| Framework        | Next.js 14 (App Router)             |
| Sprache          | TypeScript (strict mode)             |
| Styling          | Tailwind CSS                         |
| ORM              | Prisma                               |
| Datenbank        | MySQL (MariaDB auf Infomaniak)       |
| Auth             | NextAuth.js (JWT, Credentials)       |
| Zahlung          | Stripe (serverseitig)                |
| Validierung      | Zod                                  |
| Hosting          | Infomaniak (Node.js 24, Port 3000)   |

## Projektstruktur

```
src/
├── app/                    # Next.js App Router
│   ├── (auth)/             # Login, Registrierung, 2FA
│   ├── (dashboard)/        # Geschützter Bereich
│   │   ├── regime/         # Marktregime Dashboard
│   │   ├── sentiment/      # Sentiment-Analyse
│   │   ├── cot/            # COT-Daten
│   │   ├── smart-money/    # Smart Money Tracking
│   │   └── korrelationen/  # Korrelationsmatrix
│   ├── (marketing)/        # Landing Page, öffentliche Seiten
│   ├── api/                # API-Routen
│   └── layout.tsx          # Root Layout
├── components/
│   ├── ui/                 # Basis-UI-Komponenten
│   ├── charts/             # Chart-Komponenten
│   ├── dashboard/          # Dashboard-spezifische Komponenten
│   └── layout/             # Header, Sidebar, Footer
├── lib/
│   ├── auth/               # NextAuth Konfiguration
│   ├── db/                 # Prisma Client & Hilfsfunktionen
│   ├── stripe/             # Stripe-Integration
│   ├── validators/         # Zod-Schemas
│   └── utils/              # Hilfsfunktionen
├── types/                  # TypeScript-Typen
└── styles/                 # Globale Styles
prisma/
├── schema.prisma           # Datenbank-Schema
└── migrations/             # Migrationen
```

## Module

### 1. Landing Page (`(marketing)/`)
- Hero-Sektion mit Value Proposition
- Feature-Übersicht der Analyse-Tools
- Preismodelle (Stripe-Anbindung)
- Testimonials und Social Proof

### 2. Auth (`(auth)/`)
- Login / Registrierung via NextAuth.js
- Zwei-Faktor-Authentifizierung (2FA) obligatorisch
- Passwort-Zurücksetzen
- Session-Management

### 3. User Dashboard (`(dashboard)/`)
- Übersichtsseite mit Key-Metriken
- Abo-Status und Verwaltung (Stripe)
- Profileinstellungen

### 4. Stripe Abo-Verwaltung
- Serverseitige Zahlungsabwicklung (kein Client-seitiger Stripe-Key)
- Webhook-Verarbeitung für Abo-Events
- Abo-Pläne: Free / Pro / Enterprise

### 5. Regime Dashboard (`regime/`)
- Marktregime-Erkennung und -Visualisierung
- Historische Regime-Daten

### 6. Sentiment (`sentiment/`)
- Sentiment-Indikatoren und Heatmaps
- Zeitreihen-Darstellung

### 7. COT-Daten (`cot/`)
- Commitments of Traders Berichte
- Positionierungsanalyse

### 8. Smart Money (`smart-money/`)
- Institutionelle Flüsse
- Smart Money Indikator-Tracking

### 9. Korrelationen (`korrelationen/`)
- Korrelationsmatrix zwischen Assets
- Interaktive Visualisierung

## Sicherheitsrichtlinien (HÖCHSTE PRIORITÄT)

### Authentifizierung & Autorisierung
- NextAuth.js mit 2FA für alle Benutzer
- Session-Tokens serverseitig validieren
- Rollenbasierte Zugriffskontrolle (RBAC)

### API-Sicherheit
- Rate Limiting auf **allen** API-Routen (z.B. via `next-rate-limit` oder Custom Middleware)
- CSRF-Schutz auf allen mutierbaren Endpunkten
- Input-Validierung mit Zod auf jeder API-Route — keine unvalidierten Daten verarbeiten
- Content Security Policy (CSP) Headers in `next.config.js` konfigurieren

### Daten-Sicherheit
- **Keine API-Keys, Secrets oder sensible Daten im Frontend-Code**
- Sensible Daten (Tokens, Keys) verschlüsselt in der Datenbank speichern
- Daten nur serverseitig fetchen (Server Components, Route Handlers)
- Umgebungsvariablen: nur `NEXT_PUBLIC_*` für unkritische Werte
- `.env`-Dateien niemals committen

### Stripe-Sicherheit
- Zahlungslogik ausschliesslich serverseitig
- Webhook-Signaturen immer verifizieren
- Keine Preise oder Abo-Details clientseitig manipulierbar

## Design-Richtlinien

### Visueller Stil: Dark Financial Terminal (Bloomberg-Style)
- **Hintergrund:** Dunkle Töne (`#0a0a0f`, `#111118`, `#1a1a2e`)
- **Akzentfarbe:** Gold/Amber (`#d4a017`, `#f5c842`, `#b8860b`)
- **Text:** Helles Grau auf dunklem Grund (`#e4e4e7`, `#a1a1aa`)
- **Erfolg/Fehler:** Grün (`#22c55e`) / Rot (`#ef4444`)
- **Schriftart:** Monospace für Daten (z.B. `JetBrains Mono`), Sans-Serif für UI (z.B. `Inter`)

### Responsive Design
- Mobile-first Ansatz
- Breakpoints: `sm` (640px), `md` (768px), `lg` (1024px), `xl` (1280px)
- Dashboard-Layout: Sidebar auf Desktop, Bottom-Nav auf Mobile

### Komponenten-Stil
- Abgerundete Ecken (`rounded-lg`)
- Subtile Borders (`border border-white/10`)
- Glasmorphismus-Effekte für Karten (`backdrop-blur`)
- Dezente Hover-Animationen (`transition-all duration-200`)

## Code-Konventionen

### TypeScript
- `strict: true` in `tsconfig.json` — keine `any`-Typen
- Interfaces für Datenmodelle, Types für Unions/Utility-Typen
- Alle Funktionsparameter und Rückgabewerte typisieren

### Namensgebung
- Komponenten: PascalCase (`MarktRegimeKarte.tsx`)
- Funktionen/Variablen: camelCase (`berechneSentiment()`)
- Konstanten: UPPER_SNAKE_CASE (`MAX_ANFRAGEN_PRO_MINUTE`)
- Dateien: kebab-case für Nicht-Komponenten (`api-helfer.ts`)
- Prisma-Modelle: PascalCase Singular (`Benutzer`, `Abonnement`)

### Kommentare
- Auf Deutsch schreiben
- Nur wo nötig — Code soll selbsterklärend sein
- JSDoc für exportierte Funktionen und Komponenten-Props

### Imports
- Absolute Imports via `@/`-Alias (z.B. `@/components/ui/Button`)
- Reihenfolge: React/Next → Externe Pakete → Interne Module → Typen

## Befehle

```bash
npm run dev          # Entwicklungsserver starten
npm run build        # Produktions-Build
npm run lint         # ESLint ausführen
npx prisma migrate dev    # Datenbank-Migration
npx prisma studio        # Datenbank-GUI
```

## Umgebungsvariablen

Erforderliche `.env`-Variablen (niemals committen):

```
DATABASE_URL=
NEXTAUTH_SECRET=
NEXTAUTH_URL=
STRIPE_SECRET_KEY=
STRIPE_WEBHOOK_SECRET=
```

Öffentliche Variablen (sicher für Client):

```
NEXT_PUBLIC_APP_URL=
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=
```

## Wichtige Hinweise für die Entwicklung

1. **Sicherheit vor Features** — Jede neue Route/API braucht Validierung, Auth-Check und Rate Limiting
2. **Server Components bevorzugen** — Client Components (`"use client"`) nur wenn interaktiv nötig
3. **Prisma-Typen nutzen** — Keine manuellen DB-Typen, Prisma generiert sie
4. **Fehlerbehandlung** — Benutzerfreundliche Fehlermeldungen auf Deutsch, technische Details nur im Log
5. **Barrierefreiheit** — Semantisches HTML, ARIA-Labels, Tastatur-Navigation
6. **Performance** — Bilder via `next/image`, dynamische Imports für schwere Komponenten

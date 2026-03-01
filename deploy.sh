#!/bin/bash
set -e

DEPLOY_DIR="deploy"

echo "=== Huy Digital — Build & Deploy Vorbereitung ==="
echo ""

# 1. Build
echo "[1/3] Erstelle Produktions-Build..."
npm run build
echo ""

# 2. Deploy-Ordner vorbereiten
echo "[2/3] Kopiere Dateien in /$DEPLOY_DIR..."
rm -rf "$DEPLOY_DIR"
cp -r .next/standalone "$DEPLOY_DIR"
cp -r .next/static "$DEPLOY_DIR/.next/static"

if [ -d "public" ]; then
  cp -r public "$DEPLOY_DIR/public"
fi

echo ""

# 3. Anleitung
echo "[3/3] Fertig!"
echo ""
echo "=== Deploy-Anleitung ==="
echo ""
echo "Der Ordner ./$DEPLOY_DIR/ enthält alles für den Server."
echo ""
echo "1. Lade den kompletten '$DEPLOY_DIR'-Ordner auf deinen Server hoch:"
echo "   scp -r $DEPLOY_DIR/ user@server:/pfad/zur/app/"
echo ""
echo "2. Setze die Umgebungsvariablen auf dem Server (.env oder export):"
echo "   DATABASE_URL, NEXTAUTH_SECRET, NEXTAUTH_URL,"
echo "   STRIPE_SECRET_KEY, STRIPE_WEBHOOK_SECRET"
echo ""
echo "3. Starte die App auf dem Server:"
echo "   cd /pfad/zur/app && PORT=3000 node server.js"
echo ""
echo "4. Für Dauerbetrieb (z.B. mit pm2):"
echo "   pm2 start server.js --name huy-digital -- -p 3000"
echo ""

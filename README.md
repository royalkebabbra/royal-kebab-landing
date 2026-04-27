# Royal Kebab Center — Sito web ufficiale

Sito vetrina one-page per Royal Kebab Center, Bra (CN).

## 🌐 Dominio
Production: https://royalkebabbra.it/

## 📁 Struttura
- `index.html` — pagina principale
- `styles.css` — stili
- `script.js` — logica menu, orari, recensioni
- `404.html` — pagina errore personalizzata
- `sitemap.xml` — sitemap per crawler
- `robots.txt` — direttive crawler
- `manifest.json` — Web App Manifest (PWA base)
- `.nojekyll` — disabilita Jekyll
- `.gitignore` — esclusioni Git
- `fonts/` — font self-hosted (no CDN esterni per privacy)
- `images/` — asset grafici pubblici
- `screenRecensioni/` — screenshot recensioni Google (esclusi da indicizzazione, materiale interno/legale)

## 🚀 Deploy
Hostato su GitHub Pages tramite branch `main` come project site.
Push automatico su `main` → deploy live.

## 🔒 Privacy & GDPR
- Nessuno script esterno (no Google Fonts, no Analytics, no CDN)
- Font self-hosted nella cartella `fonts/`
- Mappa Google statica come immagine, non iframe
- Solo link esterni a Deliveroo e Google Maps (apertura in nuova scheda)
- Privacy Policy e Cookie Policy gestite tramite Iubenda

## 📜 Licenze
- Icons: Lucide (https://lucide.dev) — MIT License
- Font: Inter self-hosted — licenza da verificare; nessun file `LICENSE.txt`, `OFL.txt` o simile presente in `fonts/`
- © 2026 Royal Kebab Center di El Kassab Ahmed

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
- Privacy Policy e Cookie Policy gestite tramite Iubenda (link diretto, no script)

## 🔧 TODO post-deploy
1. Configurare DNS del dominio royalkebabbra.it verso GitHub Pages quando si passerà al dominio personalizzato
2. Verificare proprietà su Google Search Console e inserire meta tag
3. Verificare proprietà su Bing Webmaster Tools e inserire meta tag
4. Inviare sitemap.xml a Search Console e Bing usando l'URL attuale `https://royalkebabbra.it/sitemap.xml`
5. Generare icone PNG dedicate 192x192 e 512x512 per il manifest
6. Aggiornare `theme_color` in `manifest.json` leggendo il valore reale da `--primary` o equivalente in `styles.css`
7. Aggiungere link Privacy Policy e Cookie Policy Iubenda nel footer
8. Ottimizzare scheda Google Business Profile
9. Verificare la licenza dei font in `fonts/`: al momento sono presenti solo file `.woff2` Inter e non risultano file `LICENSE.txt`, `OFL.txt` o simili

## 📜 Licenze
- Icons: Lucide (https://lucide.dev) — MIT License
- Font: Inter self-hosted — licenza da verificare; nessun file `LICENSE.txt`, `OFL.txt` o simile presente in `fonts/`
- © 2026 Royal Kebab Center di El Kassab Ahmed

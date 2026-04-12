# Royal Kebab Center — Sito Vetrina

Sito vetrina ufficiale per **Royal Kebab Center Pizza & Fast Food**, ristorante halal di kebab e pizza a Bra (CN), Piemonte.

Costruito con **Next.js 14 (App Router)**, **Tailwind CSS**, **Framer Motion** e **TypeScript**. Pronto per il deploy su **Vercel**.

## Stack tecnico

- ⚡ **Next.js 14** (App Router) + TypeScript
- 🎨 **Tailwind CSS** con palette custom (rosso kebab / arancione / oro)
- 🎬 **Framer Motion** per animazioni e scroll-triggered reveals
- 🪶 **Lucide React** per le icone
- 🔤 **Google Fonts** via `next/font` — Playfair Display + Lato
- 🖼️ **next/image** con placeholder blur
- 🔍 **SEO**: metadata API + JSON-LD structured data (Restaurant schema)

## Struttura del progetto

```
royal-kebab-center/
├── app/
│   ├── layout.tsx          # Font, metadata globali, JSON-LD, navbar
│   ├── page.tsx            # Single-page con tutte le sezioni
│   └── globals.css         # Tailwind directives + utility custom
├── components/
│   ├── Navbar.tsx          # Sticky con backdrop blur, hamburger mobile
│   ├── Hero.tsx            # Hero con badge HALAL e CTA delivery
│   ├── About.tsx           # Chi siamo + 4 feature cards
│   ├── Menu.tsx            # Tab switcher con griglia dei piatti
│   ├── Hours.tsx           # Orari con highlight giorno corrente + "Aperto Ora"
│   ├── Reviews.tsx         # Rating + bars + 3 recensioni
│   └── Footer.tsx          # Info legali, link delivery, orari brevi
├── lib/
│   ├── menuData.ts         # Dati menu tipizzati
│   └── hours.ts            # Orari + helper isOpenNow()
├── public/images/          # Foto piatti / logo (placeholder)
├── next.config.js
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

## Setup locale

```bash
# 1. Installa le dipendenze
npm install

# 2. Avvia il server di sviluppo
npm run dev

# 3. Apri http://localhost:3000
```

## Build di produzione

```bash
npm run build
npm run start
```

## Deploy su Vercel

Il progetto è pronto al deploy su Vercel senza configurazioni aggiuntive.

```bash
# Installa la CLI Vercel se non la hai già
npm i -g vercel

# Deploy in produzione
vercel --prod
```

In alternativa, importa il repository su [vercel.com/new](https://vercel.com/new) e clicca **Deploy**.

## Personalizzazione

### Sostituire le immagini placeholder

Le immagini dei piatti usano `https://placehold.co` con i colori del brand. Per sostituirle:

1. Aggiungi i tuoi file in `public/images/`
2. Aggiorna i campi `image` in `lib/menuData.ts` con i percorsi locali (es. `/images/kebab-l.jpg`)

### Modificare il menu

Modifica `lib/menuData.ts` — i tipi TypeScript ti guideranno.

### Modificare gli orari

Modifica `lib/hours.ts`. La funzione `isOpenNow()` calcola in tempo reale lo stato "Aperto / Chiuso".

## Info attività

- **Nome**: Royal Kebab Center Pizza & Fast Food
- **Indirizzo**: Bra (CN), Piemonte
- **P.IVA**: 04048840047
- **Rating**: 4.4★ su Deliveroo (188+ recensioni)
- **Ordine minimo**: €10,00 — **Consegna**: €2,50

## Licenza

© 2026 Royal Kebab Center. Tutti i diritti riservati.

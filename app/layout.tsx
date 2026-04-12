import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://royal-kebab-center.vercel.app"),
  title: "Royal Kebab Center | Kebab & Pizza a Bra, Cuneo",
  description:
    "Royal Kebab Center a Bra (CN): kebab halal, pizza, pollo e piadine. Fast food di qualità con consegna a domicilio. 4.4★ su Deliveroo. Ordina online.",
  keywords: [
    "kebab Bra",
    "kebab Cuneo",
    "pizza Bra",
    "fast food halal",
    "Royal Kebab Center",
    "consegna a domicilio Bra",
    "kebab halal Piemonte",
    "Deliveroo Bra",
  ],
  authors: [{ name: "Royal Kebab Center" }],
  openGraph: {
    title: "Royal Kebab Center | Kebab & Pizza a Bra, Cuneo",
    description:
      "Sapori autentici del Medio Oriente nel cuore del Piemonte. Kebab halal, pizza e fast food di qualità a Bra (CN).",
    url: "https://royal-kebab-center.vercel.app",
    siteName: "Royal Kebab Center",
    locale: "it_IT",
    type: "website",
    images: [
      {
        url: "/images/hero-kebab.png",
        width: 1200,
        height: 630,
        alt: "Royal Kebab Center - Bra, CN",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Royal Kebab Center | Kebab & Pizza a Bra, Cuneo",
    description:
      "Kebab halal, pizza e fast food di qualità a Bra (CN). 4.4★ su Deliveroo.",
    images: ["/images/hero-kebab.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/images/logo.png",
    apple: "/images/logo.png",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: "Royal Kebab Center Pizza & Fast Food",
  image: "/images/hero-kebab.png",
  url: "https://royal-kebab-center.vercel.app",
  servesCuisine: ["Kebab", "Pizza", "Halal", "Mediterranean", "Fast Food"],
  priceRange: "€€",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Bra",
    addressLocality: "Bra",
    addressRegion: "CN",
    postalCode: "12042",
    addressCountry: "IT",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Wednesday", "Thursday"],
      opens: "12:00",
      closes: "15:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Wednesday", "Thursday"],
      opens: "18:00",
      closes: "23:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Friday",
      opens: "12:00",
      closes: "15:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Friday",
      opens: "18:00",
      closes: "23:30",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "18:00",
      closes: "23:30",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Sunday",
      opens: "18:00",
      closes: "23:00",
    },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.4",
    reviewCount: "188",
    bestRating: "5",
    worstRating: "1",
  },
  vatID: "IT04048840047",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="it" className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans bg-background text-foreground">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

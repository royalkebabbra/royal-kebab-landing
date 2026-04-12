import { ShoppingBag, MapPin, Clock } from "lucide-react";
import Logo from "./Logo";

const DELIVEROO_URL =
  "https://deliveroo.it/it/menu/bra/bra/royal-kebab-center";

const quickLinks = [
  { href: "#menu", label: "Menu" },
  { href: "#storia", label: "La Nostra Storia" },
  { href: "#orari", label: "Orari" },
  { href: "#contatti", label: "Dove Siamo" },
];

const briefHours = [
  { day: "Mer–Gio", hours: "12:00–15:00 / 18:00–23:00" },
  { day: "Venerdì", hours: "12:00–15:00 / 18:00–23:30" },
  { day: "Sabato", hours: "18:00–23:30" },
  { day: "Domenica", hours: "18:00–23:00" },
  { day: "Lun–Mar", hours: "Chiuso" },
];

export default function Footer() {
  return (
    <footer
      id="contatti"
      className="bg-[#0a0a0a] border-t border-white/5 pt-16 pb-8"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Logo size="md" />
            <p className="mt-5 text-sm text-foreground/60 leading-relaxed">
              Pizza & Fast Food Halal nel cuore di Bra (CN). Sapori autentici,
              , passione artigianale.
            </p>
            <div className="mt-5 inline-flex items-center gap-2 rounded-full bg-primary/15 border border-primary/40 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-primary">
              Halal Certified
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.25em] text-foreground/40 mb-5">
              Naviga
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-foreground/70 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Order */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.25em] text-foreground/40 mb-5">
              Ordina online
            </h4>
            <a
              href={DELIVEROO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-foreground/70 hover:text-primary transition-colors"
            >
              <ShoppingBag size={16} />
              Deliveroo
            </a>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.25em] text-foreground/40 mb-5 flex items-center gap-2">
              <Clock size={12} />
              Orari
            </h4>
            <ul className="space-y-2 text-xs text-foreground/60">
              {briefHours.map((row) => (
                <li key={row.day} className="flex justify-between gap-3">
                  <span className="font-bold text-foreground/80">
                    {row.day}
                  </span>
                  <span className="text-right">{row.hours}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Legal */}
        <div className="mt-14 pt-6 border-t border-white/5 flex flex-col sm:flex-row gap-3 items-center justify-between text-xs text-foreground/40">
          <p className="flex items-center gap-2">
            <MapPin size={12} />
            Piazza Roma 44, Bra — P.IVA 04048840047
          </p>
          <p>© 2026 Royal Kebab Center. Tutti i diritti riservati.</p>
        </div>
      </div>
    </footer>
  );
}

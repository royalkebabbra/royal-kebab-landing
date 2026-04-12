"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Clock, ExternalLink, ShoppingBag } from "lucide-react";
import { weekHours, isOpenNow } from "@/lib/hours";

const DELIVEROO_URL =
  "https://deliveroo.it/it/menu/bra/bra/royal-kebab-center";

const MAPS_EMBED_URL =
  "https://maps.google.com/maps?q=Piazza+Roma+44+12042+Bra+CN&t=m&z=16&ie=UTF8&iwloc=B&output=embed";
const MAPS_LINK =
  "https://www.google.com/maps/search/?api=1&query=Piazza+Roma+44+12042+Bra+CN";

export default function Hours() {
  const [today, setToday] = useState<number | null>(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const update = () => {
      const now = new Date();
      setToday(now.getDay());
      setOpen(isOpenNow(now));
    };
    update();
    const id = setInterval(update, 60_000);
    return () => clearInterval(id);
  }, []);

  return (
    <section
      id="orari"
      className="section-py bg-background relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <span className="inline-block text-xs font-bold uppercase tracking-[0.35em] text-primary mb-4">
            Vieni a Trovarci
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight">
            Orari & <span className="text-primary">Posizione</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Hours card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="bg-[#161616] rounded-2xl p-6 sm:p-8 border border-white/5"
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-black text-2xl text-foreground flex items-center gap-3">
                <Clock className="text-primary" size={24} />
                Orari
              </h3>
              {today !== null && (
                <span
                  className={`inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-bold uppercase tracking-wider ${
                    open
                      ? "bg-green-500/15 text-green-400 border border-green-500/30"
                      : "bg-primary/15 text-primary border border-primary/30"
                  }`}
                >
                  <span
                    className={`h-2 w-2 rounded-full ${
                      open ? "bg-green-400 animate-pulse" : "bg-primary"
                    }`}
                  />
                  {open ? "Aperto Ora" : "Chiuso"}
                </span>
              )}
            </div>

            <ul className="divide-y divide-white/5">
              {weekHours.map((d) => {
                const isToday = today === d.weekday;
                return (
                  <li
                    key={d.day}
                    className={`flex items-center justify-between py-3.5 px-3 rounded-lg transition-colors -mx-3 ${
                      isToday ? "bg-primary/10" : ""
                    }`}
                  >
                    <span
                      className={`font-bold ${
                        isToday ? "text-primary" : "text-foreground"
                      }`}
                    >
                      {d.day}
                      {isToday && (
                        <span className="ml-2 text-[10px] font-bold uppercase bg-primary text-primary-foreground rounded-full px-2 py-0.5">
                          Oggi
                        </span>
                      )}
                    </span>
                    <span
                      className={`text-sm ${
                        d.closed
                          ? "text-primary font-bold"
                          : "text-foreground/60"
                      }`}
                    >
                      {d.display}
                    </span>
                  </li>
                );
              })}
            </ul>
          </motion.div>

          {/* Location card with Maps embed */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="bg-[#161616] rounded-2xl border border-white/5 overflow-hidden flex flex-col"
          >
            {/* Address header */}
            <div className="p-6 sm:p-8 pb-5">
              <h3 className="font-black text-2xl text-foreground flex items-center gap-3 mb-4">
                <MapPin className="text-primary" size={24} />
                Dove Siamo
              </h3>
              <p className="text-foreground font-bold text-lg">
                Piazza Roma, 44
              </p>
              <p className="text-foreground/60 text-sm">
                12042 Bra (CN), Italia
              </p>
            </div>

            {/* Maps iframe */}
            <div className="relative w-full aspect-[16/10] bg-[#0d0d0d] border-y border-white/5 overflow-hidden">
              <iframe
                title="Mappa Royal Kebab Center — Piazza Roma 44, Bra"
                src={MAPS_EMBED_URL}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 w-full h-full"
                style={{
                  border: 0,
                  filter:
                    "invert(0.92) hue-rotate(180deg) brightness(0.95) contrast(0.9) saturate(0.85)",
                }}
                allowFullScreen
              />
            </div>

            {/* Action buttons */}
            <div className="p-6 sm:p-8 pt-5 flex flex-col gap-3">
              <a
                href={MAPS_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline w-full"
              >
                <MapPin size={16} />
                Apri in Google Maps
                <ExternalLink size={14} />
              </a>
              <a
                href={DELIVEROO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full"
              >
                <ShoppingBag size={16} />
                Ordina su Deliveroo
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

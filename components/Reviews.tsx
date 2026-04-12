"use client";

import { motion } from "framer-motion";
import { Star, ExternalLink, Quote } from "lucide-react";

const DELIVEROO_URL =
  "https://deliveroo.it/it/menu/bra/bra/royal-kebab-center";

const overall = {
  rating: 4.4,
  total: 188,
  breakdown: [
    { stars: 5, percent: 70 },
    { stars: 4, percent: 18 },
    { stars: 3, percent: 7 },
    { stars: 2, percent: 3 },
    { stars: 1, percent: 2 },
  ],
};

const reviews = [
  {
    name: "Marco R.",
    rating: 5,
    date: "2 settimane fa",
    text: "Kebab davvero ottimo, carne morbida e salse fatte in casa. Consegna puntuale e porzione generosa. Lo consiglio vivamente!",
  },
  {
    name: "Sofia L.",
    rating: 5,
    date: "1 mese fa",
    text: "Il Royal Kebab è la loro specialità e si capisce perché. Ingredienti freschi, sapore autentico. Tornerò sicuramente.",
  },
  {
    name: "Alessandro B.",
    rating: 4,
    date: "1 mese fa",
    text: "Pizza kebab fantastica, finalmente un fast food halal di qualità a Bra. Personale gentile e prezzi onesti.",
  },
];

const Stars = ({
  value,
  size = 16,
}: {
  value: number;
  size?: number;
}) => (
  <div className="inline-flex items-center gap-0.5">
    {Array.from({ length: 5 }).map((_, i) => (
      <Star
        key={i}
        size={size}
        className={
          i < Math.round(value)
            ? "text-primary fill-primary"
            : "text-foreground/15 fill-foreground/10"
        }
      />
    ))}
  </div>
);

export default function Reviews() {
  return (
    <section
      id="recensioni"
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
            Recensioni
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight">
            Cosa dicono i nostri{" "}
            <span className="text-primary">clienti</span>
          </h2>
        </motion.div>

        {/* Overall rating */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="bg-[#161616] rounded-2xl p-6 sm:p-8 mb-10 border border-white/5 grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
        >
          <div className="text-center md:text-left">
            <div className="font-black text-7xl text-primary leading-none">
              {overall.rating.toFixed(1)}
            </div>
            <div className="mt-3">
              <Stars value={overall.rating} size={22} />
            </div>
            <p className="mt-3 text-foreground/60 text-sm">
              Basato su {overall.total}+ recensioni su Deliveroo
            </p>
          </div>
          <div className="space-y-2">
            {overall.breakdown.map((b) => (
              <div key={b.stars} className="flex items-center gap-3">
                <span className="text-sm text-foreground/60 w-3">
                  {b.stars}
                </span>
                <Star size={14} className="text-primary fill-primary" />
                <div className="flex-1 h-1.5 bg-white/10 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${b.percent}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.1 }}
                    className="h-full bg-primary rounded-full"
                  />
                </div>
                <span className="text-xs text-foreground/40 w-10 text-right">
                  {b.percent}%
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Review cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {reviews.map((review, i) => (
            <motion.article
              key={review.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="relative bg-[#161616] rounded-2xl p-6 border border-white/5 hover:border-primary/30 hover:-translate-y-1 transition-all duration-300"
            >
              <Quote
                className="absolute top-5 right-5 text-primary/15"
                size={36}
              />
              <Stars value={review.rating} />
              <p className="mt-4 text-foreground/80 leading-relaxed text-sm">
                {review.text}
              </p>
              <div className="mt-6 pt-4 border-t border-white/5">
                <p className="font-bold text-foreground">{review.name}</p>
                <p className="text-xs text-foreground/40 uppercase tracking-wider mt-1">
                  {review.date}
                </p>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="text-center mt-10">
          <a
            href={DELIVEROO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary hover:text-[#b00f0f] font-bold uppercase text-sm tracking-wider transition-colors"
          >
            Leggi tutte le recensioni su Deliveroo
            <ExternalLink size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}

"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { BadgeCheck, Clock } from "lucide-react";

const features = [
  {
    image: "/images/pizza-al-taglio.png",
    title: "Pizza al taglio",
    subtitle: "Impasto soffice, base croccante e gusti preparati ogni giorno.",
  },
  {
    image: "/images/kebab-in-piadina.png",
    title: "Kebab in piadina",
    subtitle: "Piadina calda, ripieno abbondante e tutto il gusto del kebab.",
  },
  {
    image: "/images/french-tacos.png",
    title: "French Tacos",
    subtitle: "Ripieno abbondante, carne, patatine e salse dentro a ogni morso.",
  },
  {
    image: "/images/sfiziosita.png",
    title: "Sfiziosità",
    subtitle: "Tutto quello che ci vuole per completare il tuo ordine.",
  },
];

const badges = [
  {
    icon: BadgeCheck,
    title: "Halal Certificato",
    subtitle: "",
  },
  {
    icon: Clock,
    title: "Fatto al Momento",
    subtitle: "",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6 },
  }),
};

export default function About() {
  return (
    <section id="storia" className="section-py bg-background relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block text-xs font-bold uppercase tracking-[0.35em] text-primary mb-4">
            La Differenza
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight">
            Solo il <span className="text-primary">Meglio</span>
          </h2>
          <p className="mt-6 text-base sm:text-lg text-foreground/60 leading-relaxed">
            Usiamo carne halal, verdure fresche e ingredienti semplici,
            preparati ogni giorno con cura.
          </p>
        </motion.div>

        {/* Ingredient cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeUp}
              className="group relative rounded-2xl overflow-hidden border border-white/5 bg-[#161616]"
            >
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 25vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <h3 className="font-black text-lg text-foreground">
                  {feature.title}
                </h3>
                <p className="text-xs uppercase tracking-wider text-foreground/60 mt-1">
                  {feature.subtitle}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Badges row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {badges.map((badge, i) => {
            const Icon = badge.icon;
            return (
              <motion.div
                key={badge.title}
                custom={i + 4}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={fadeUp}
                className="flex items-center gap-4 bg-[#161616] border border-white/5 rounded-2xl p-6"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary/15 text-primary shrink-0">
                  <Icon size={28} />
                </div>
                <div>
                  <h3 className="font-black text-lg text-foreground">
                    {badge.title}
                  </h3>
                  <p className="text-sm text-foreground/60">{badge.subtitle}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

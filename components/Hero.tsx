"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { MapPin, ShoppingBag, Phone, ChevronDown } from "lucide-react";

const DELIVEROO_URL =
  "https://deliveroo.it/it/menu/bra/bra/royal-kebab-center";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-background"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-kebab.png"
          alt="Royal Kebab Center - kebab alla griglia"
          fill
          priority
          sizes="100vw"
          className="object-cover object-right"
        />
      </div>

      {/* Gradient overlays */}
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/40"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/30"
      />

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-6 lg:px-12 w-full pt-32 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.25em] text-foreground/60 mb-8"
        >
          <MapPin size={14} className="text-primary" />
          Piazza Roma 44, Bra
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="flex items-center gap-5 sm:gap-8 max-w-3xl"
        >
          <Image
            src="/images/logo.png"
            alt="Royal Kebab Center logo"
            width={120}
            height={120}
            priority
            className="w-20 h-20 sm:w-28 sm:h-28 lg:w-36 lg:h-36 object-contain shrink-0"
          />
          <h1 className="font-black leading-[0.85] tracking-tight">
            <span className="block text-primary text-6xl sm:text-7xl lg:text-8xl">
              ROYAL
            </span>
            <span className="block text-foreground text-6xl sm:text-7xl lg:text-8xl">
              KEBAB
            </span>
            <span className="block text-foreground text-2xl sm:text-3xl lg:text-4xl tracking-[0.35em] font-bold mt-3">
              CENTER
            </span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mt-8 max-w-xl text-base sm:text-lg text-foreground/70 leading-relaxed"
        >
          Carne alla griglia, ingredienti freschi e sapori che conosci bene. Kebab, panini e piatti preparati al momento, sempre 100% halal.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-10 flex flex-col sm:flex-row gap-4"
        >
          <a
            href={DELIVEROO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            <ShoppingBag size={18} />
            Ordina su Deliveroo
          </a>
          <a href="tel:0172752529" className="btn-outline">
            <Phone size={18} />
            Chiama Ora
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#menu"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-foreground/40 hover:text-primary transition-colors animate-bounce-slow"
        aria-label="Scorri verso il basso"
      >
        <ChevronDown size={32} />
      </motion.a>
    </section>
  );
}

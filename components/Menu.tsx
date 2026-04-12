"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingBag, Sparkles } from "lucide-react";
import {
  categories,
  menuItems,
  formatPrice,
  type MenuCategory,
  type MenuItem,
} from "@/lib/menuData";

const DELIVEROO_URL =
  "https://deliveroo.it/it/menu/bra/bra/royal-kebab-center";

function ItemCard({ item }: { item: MenuItem }) {
  return (
    <article className="group relative rounded-2xl bg-[#161616] border border-white/5 p-6 transition-all duration-300 hover:border-primary/40 hover:-translate-y-1">
      {item.highlight && (
        <div className="absolute top-4 right-4 inline-flex items-center gap-1 rounded-full bg-primary/15 border border-primary/30 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-primary">
          <Sparkles size={10} />
          Top
        </div>
      )}

      <h3 className="font-black text-xl text-foreground mb-2 pr-16">
        {item.name}
      </h3>
      {item.description && (
        <p className="text-sm text-foreground/60 leading-relaxed mb-4">
          {item.description}
        </p>
      )}

      <div className="flex items-center justify-between pt-4 border-t border-white/5">
        <div className="flex flex-col">
          <span className="text-2xl font-black text-primary leading-none">
            {formatPrice(item.price)}
          </span>
          {item.menuPrice !== undefined && (
            <span className="mt-1.5 text-[11px] font-bold uppercase tracking-wider text-foreground/50">
              Menù: {formatPrice(item.menuPrice)}
              {item.menuDescription && (
                <span className="block mt-0.5 normal-case tracking-normal font-normal text-foreground/40">
                  {item.menuDescription}
                </span>
              )}
            </span>
          )}
        </div>
        <a
          href={DELIVEROO_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-foreground/70 hover:text-primary transition-colors shrink-0 self-start"
        >
          <ShoppingBag size={14} />
          Ordina
        </a>
      </div>
    </article>
  );
}

export default function Menu() {
  const [active, setActive] = useState<MenuCategory>("tacos");

  const grouped = useMemo(() => {
    const items = menuItems.filter((item) => item.category === active);
    const groups = new Map<string | undefined, MenuItem[]>();
    for (const item of items) {
      const key = item.subGroup;
      if (!groups.has(key)) groups.set(key, []);
      groups.get(key)!.push(item);
    }
    return Array.from(groups.entries());
  }, [active]);

  return (
    <section id="menu" className="section-py bg-background relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <span className="inline-block text-xs font-bold uppercase tracking-[0.35em] text-primary mb-4">
            I Nostri Piatti
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight">
            Il <span className="text-primary">Menu</span>
          </h2>
          <p className="mt-6 text-base sm:text-lg text-foreground/60 leading-relaxed">
            Prepariamo ogni piatto al momento con ingredienti freschi e carne
            halal.
          </p>
        </motion.div>

        {/* Tabs — horizontal scroll on mobile */}
        <div className="flex justify-start md:justify-center gap-2 mb-12 overflow-x-auto no-scrollbar -mx-6 px-6 pb-2">
          {categories.map((cat) => {
            const isActive = cat.id === active;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActive(cat.id)}
                className={`shrink-0 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 whitespace-nowrap ${isActive
                    ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20"
                    : "text-foreground/60 hover:text-foreground"
                  }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
          >
            {grouped.map(([subGroup, items]) => (
              <div key={subGroup ?? "default"} className="mb-10 last:mb-0">
                {subGroup && (
                  <h3 className="text-xs font-bold uppercase tracking-[0.3em] text-primary mb-5">
                    — {subGroup}
                  </h3>
                )}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                  {items.map((item) => (
                    <ItemCard key={item.id} item={item} />
                  ))}
                </div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { Coffee, IceCream2, Martini } from "lucide-react";
import DrinkCard from "./DrinkCard";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-chalat-highlight/30 via-chalat-light to-chalat-accent/10 dark:from-chalat-accent/10 dark:via-chalat-dark dark:to-chalat-highlight/10" />
      <div className="mx-auto max-w-7xl px-4 py-20 sm:py-28 grid md:grid-cols-2 gap-10 items-center">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight tracking-tight">
            Fresh & Fun Drinks,
            <span className="text-chalat-accent"> Chewy Mochi</span>,<br className="hidden sm:block" />
            Made with Love by KonKhmer
          </h1>
          <p className="mt-4 text-lg text-chalat-accent/80 max-w-prose">
            ChaLat brings café-quality matcha, milk teas, and hand-crafted snacks to your neighborhood — portable, fast, and always delicious.
          </p>
          <div className="mt-6 flex gap-3">
            <a href="#order" className="rounded-2xl bg-chalat-accent px-6 py-3 text-chalat-light font-medium hover:bg-chalat-highlight">
              Order on WhatsApp
            </a>
            <a href="#menu" className="rounded-2xl border border-chalat-accent px-6 py-3 font-medium hover:bg-chalat-highlight/20">
              See Menu
            </a>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.1 }} className="relative">
          <div className="aspect-square rounded-3xl bg-chalat-light dark:bg-chalat-dark shadow-2xl p-6 flex items-center justify-center">
            <div className="grid grid-cols-2 gap-4 w-full">
              <DrinkCard name="Matcha Latte" tag="Best Seller" price={2.2} icon={<Coffee />} />
              <DrinkCard name="Mochi Trio" tag="Snack" price={1.5} icon={<IceCream2 />} />
              <DrinkCard name="Yuzu Sparkle" price={1.7} icon={<Martini />} />
              <DrinkCard name="Thai Milk Tea" price={1.8} icon={<Coffee />} />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

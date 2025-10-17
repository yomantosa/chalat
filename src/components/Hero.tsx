"use client";
import { motion } from "framer-motion";
import { Coffee, IceCream2, Martini } from "lucide-react";
import DrinkCard from "./DrinkCard";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-chalat-light via-white to-chalat-highlight/30 dark:from-chalat-dark/50 dark:via-chalat-dark dark:to-chalat-accent/40" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
        <div className="grid md:grid-cols-2 items-center gap-10">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight tracking-tight">
              Fresh & Fun Drinks,{" "}
              <span className="text-chalat-accent">Chewy Mochi</span>,<br className="hidden sm:block" />
              Made with Love by KonKhmer
            </h1>
            <p className="mt-4 text-lg text-zinc-700 dark:text-zinc-300">
              ChaLat brings café-quality matcha, milk teas, and hand-crafted snacks to your neighborhood — portable, fast, and always delicious.
            </p>
            <div className="mt-6 flex gap-3">
              <a href="#order" className="rounded-2xl bg-chalat-accent px-6 py-3 text-white font-medium hover:bg-chalat-dark focus:ring-2 focus:ring-chalat-highlight">
                Order on WhatsApp
              </a>
              <a href="#menu" className="rounded-2xl border border-chalat-accent/40 px-6 py-3 font-medium hover:bg-chalat-light/70 dark:hover:bg-chalat-dark/50">
                See Menu
              </a>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.1 }}>
            <div className="aspect-square rounded-3xl bg-white dark:bg-chalat-dark shadow-2xl p-6 grid grid-cols-2 gap-4">
              <DrinkCard name="Matcha Latte" tag="Best Seller" price={2.2} icon={<Coffee />} />
              <DrinkCard name="Mochi Trio" tag="Snack" price={1.5} icon={<IceCream2 />} />
              <DrinkCard name="Yuzu Sparkle" price={1.7} icon={<Martini />} />
              <DrinkCard name="Thai Milk Tea" price={1.8} icon={<Coffee />} />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { Coffee, IceCream2, Martini } from "lucide-react";
// import DrinkCard from "./DrinkCard";

const menuItems = [
  { id: 1, name: "Matcha Latte", desc: "Uji-grade matcha with fresh milk", price: 2.2, tag: "Best Seller", icon: <Coffee /> },
  { id: 2, name: "Dirty Matcha", desc: "Double shot espresso + matcha", price: 2.5, tag: "New", icon: <Martini /> },
  { id: 3, name: "Milk Tea", desc: "Bold black tea, silky and sweet", price: 1.8, icon: <Coffee /> },
  { id: 4, name: "Brown Sugar Milk", desc: "Slow-cooked syrup, creamy", price: 2.0, icon: <Coffee /> },
  { id: 5, name: "Mochi Trio", desc: "Chewy, stuffed, fresh daily", price: 1.5, icon: <IceCream2 /> },
  { id: 6, name: "Yuzu Sparkle", desc: "Citrus soda, ice-cold", price: 1.7, icon: <Martini /> },
];

export default function MenuSection() {
  return (
    <section id="menu" className="py-16 sm:py-20 border-t border-chalat-accent/20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Menu Highlights</h2>
            <p className="mt-2 text-chalat-accent/80">Balanced sweetness, premium ingredients, and customizable ice levels.</p>
          </div>
          <a href="#order" className="hidden sm:inline-flex rounded-xl bg-chalat-accent px-4 py-2 text-chalat-light font-medium hover:bg-chalat-highlight">
            Order
          </a>
        </div>

        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {menuItems.map((m) => (
            <motion.article
              key={m.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="group rounded-2xl border border-chalat-accent/20 p-5 hover:shadow-xl hover:-translate-y-0.5 transition-all bg-chalat-light dark:bg-chalat-dark"
            >
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-xl bg-chalat-highlight/20 text-chalat-accent">{m.icon}</div>
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <h3 className="font-semibold text-lg">{m.name}</h3>
                    {m.tag && (
                      <span className="inline-flex items-center rounded-full bg-chalat-highlight/30 text-chalat-accent px-2 py-0.5 text-xs font-medium">
                        {m.tag}
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-chalat-accent/80 mt-1">{m.desc}</p>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-chalat-accent">${m.price.toFixed(2)}</p>
                  <p className="text-xs text-chalat-accent/60">16oz</p>
                </div>
              </div>
              <div className="mt-4 flex gap-2 text-xs text-chalat-accent/70">
                <span className="rounded-full border border-chalat-accent/30 px-2 py-0.5">0% sugar</span>
                <span className="rounded-full border border-chalat-accent/30 px-2 py-0.5">50% ice</span>
                <span className="rounded-full border border-chalat-accent/30 px-2 py-0.5">Oatly +$0.50</span>
              </div>
            </motion.article>
          ))}
        </div>
        <p className="mt-4 text-xs text-chalat-accent/70">Prices are indicative; adjust to local market (Cambodia).</p>
      </div>
    </section>
  );
}

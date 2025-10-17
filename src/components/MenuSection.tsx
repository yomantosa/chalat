"use client";
import { motion } from "framer-motion";
import { Coffee, IceCream2, Martini } from "lucide-react";
import Badge from "./Badge";

const menuItems = [
  { id: 1, name: "Matcha Latte", desc: "Uji-grade matcha with fresh milk", price: 2.2, tag: "Best Seller", icon: <Coffee /> },
  { id: 2, name: "Dirty Matcha", desc: "Double shot espresso + matcha", price: 2.5, tag: "New", icon: <Martini /> },
  { id: 3, name: "Milk Tea", desc: "Bold black tea, silky and sweet", price: 1.8, icon: <Coffee /> },
  { id: 4, name: "Mochi Trio", desc: "Chewy, stuffed, fresh daily", price: 1.5, icon: <IceCream2 /> },
];

export default function MenuSection() {
  return (
    <section id="menu" className="py-16 sm:py-20 border-t border-chalat-accent/20 bg-chalat-light dark:bg-chalat-dark transition-colors">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-chalat-accent">Menu Highlights</h2>
        <p className="mt-2 text-chalat-text/80 dark:text-chalat-highlight/80">
          Balanced sweetness, premium ingredients, and customizable ice levels.
        </p>

        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {menuItems.map((m) => (
            <motion.article
              key={m.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="rounded-2xl border border-chalat-accent/30 p-5 bg-chalat-light dark:bg-chalat-dark shadow-sm hover:shadow-xl transition-all"
            >
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-xl bg-chalat-highlight/20 text-chalat-accent">
                  {m.icon}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <h3 className="font-semibold text-lg text-chalat-text dark:text-chalat-highlight">
                      {m.name}
                    </h3>
                    {m.tag && <Badge>{m.tag}</Badge>}
                  </div>
                  <p className="text-sm text-chalat-text/80 dark:text-chalat-highlight/70 mt-1">
                    {m.desc}
                  </p>
                </div>
                <p className="font-semibold text-chalat-accent">${m.price.toFixed(2)}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

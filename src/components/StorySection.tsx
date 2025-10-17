"use client";
import { motion } from "framer-motion";

export default function StorySection() {
  return (
    <section id="story" className="py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 grid md:grid-cols-2 gap-10 items-center">
        <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-chalat-text">Our Story</h2>
          <p className="mt-3 text-zinc-700 dark:text-zinc-300">
            ChaLat was born from a simple idea: bring specialty drinks and snacks to the street — quick, consistent, and joyful.
          </p>
          <ul className="mt-4 list-disc pl-5 space-y-2 text-chalat-text dark:text-chalat-highlight">
            <li>Customizable sweetness and ice.</li>
            <li>Fresh milk only; no creamers.</li>
            <li>Fast service from a compact setup.</li>
          </ul>
        </motion.div>
        <motion.img
          src="https://images.unsplash.com/photo-1517705008128-361805f42e86?q=80&w=1200&auto=format&fit=crop"
          alt="ChaLat Cart"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="rounded-3xl shadow-2xl"
        />
      </div>
    </section>
  );
}

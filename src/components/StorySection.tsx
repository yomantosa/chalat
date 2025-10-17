"use client";

import { motion } from "framer-motion";
import Image from "next/image";


export default function StorySection() {
  return (
    <section id="story" className="py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10 items-center">
        <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Our Story</h2>
          <p className="mt-3 text-chalat-accent/90">
            ChaLat was born from a simple idea: bring specialty drinks and snacks to the street — quick, consistent, and joyful.
            Crafted by <strong>KonKhmer</strong>, our portable café serves thoughtfully sourced matcha, teas, and mochi with a Cambodian flavor profile.
          </p>
          <ul className="mt-4 text-chalat-accent list-disc pl-5 space-y-2">
            <li>Customizable sweetness and ice.</li>
            <li>Fresh milk only; no creamers in base drinks.</li>
            <li>Fast service from a compact, clean setup.</li>
          </ul>
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }} className="relative rounded-3xl overflow-hidden shadow-2xl">
          <Image
            src="https://github.com/yomantosa/chalat-webapp/blob/main/public/chalatStory.jpg?raw=true"
            alt="ChaLat cart serving drinks"
            width={800}
            height={600}
            className="w-full h-full object-cover"
            />
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";

export default function GallerySection() {
  const images = [
    "https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1542326237-94b1c5a538b6?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1525385133512-2f3bdd039054?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1535043934128-cf0b28d52f35?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?q=80&w=1200&auto=format&fit=crop",
  ];

  return (
    <section id="gallery" className="py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Gallery</h2>
          <a href="#" className="text-sm hover:text-chalat-accent">@chalat.official</a>
        </div>
        <div className="mt-6 grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((src, i) => (
            <motion.div key={i} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="overflow-hidden rounded-2xl">
              <img
                src={src}
                alt="ChaLat product"
                className="w-full h-48 object-cover hover:scale-105 transition-transform"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

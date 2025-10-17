"use client";

import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Phallin S.",
    text: "The matcha is smooth and not too sweet. Mochi texture is perfect!",
    rating: 5,
  },
  {
    name: "Dalin K.",
    text: "Finally a place that nails the balance. Service is fast and friendly.",
    rating: 5,
  },
  {
    name: "Ratanak T.",
    text: "Dirty matcha is my new obsession. Great price for the quality!",
    rating: 5,
  },
];

function StarRow({ n }: { n: number }) {
  return (
    <div className="flex gap-1" aria-label={`${n} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className={`w-4 h-4 ${i < n ? "fill-chalat-highlight text-chalat-highlight" : "text-chalat-accent/40"}`} />
      ))}
    </div>
  );
}

export default function ReviewsSection() {
  return (
    <section className="py-16 sm:py-20 border-t border-chalat-accent/20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">What people say</h2>
        <div className="mt-6 grid md:grid-cols-3 gap-6">
          {testimonials.map((t, idx) => (
            <article
              key={idx}
              className="rounded-2xl border border-chalat-accent/20 p-6 bg-chalat-light dark:bg-chalat-dark"
            >
              <StarRow n={t.rating} />
              <p className="mt-3 text-chalat-accent/90">“{t.text}”</p>
              <p className="mt-2 text-sm text-chalat-accent/70">— {t.name}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

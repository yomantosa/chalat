"use client";
import StarRow from "./StarRow";

const testimonials = [
  { name: "Phallin S.", text: "The matcha is smooth and not too sweet. Mochi texture is perfect!", rating: 5 },
  { name: "Dalin K.", text: "Finally a place that nails the balance. Service is fast and friendly.", rating: 5 },
  { name: "Ratanak T.", text: "Dirty matcha is my new obsession. Great price for the quality!", rating: 5 },
];

export default function ReviewsSection() {
  return (
    <section className="py-16 sm:py-20 border-t border-zinc-200/60 dark:border-zinc-800">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">What people say</h2>
        <div className="mt-6 grid md:grid-cols-3 gap-6">
          {testimonials.map((t, idx) => (
            <article key={idx} className="rounded-2xl border border-zinc-200 dark:border-zinc-800 p-6 bg-white dark:bg-zinc-900">
              <StarRow n={t.rating} />
              <p className="mt-3 text-zinc-700 dark:text-zinc-200">“{t.text}”</p>
              <p className="mt-2 text-sm text-zinc-500">— {t.name}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

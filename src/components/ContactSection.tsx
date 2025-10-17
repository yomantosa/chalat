"use client";
import { Phone, Mail, Instagram, Facebook } from "lucide-react";

const socials = [
  { name: "Instagram", href: "https://instagram.com/", icon: <Instagram className="w-5 h-5" /> },
  { name: "Facebook", href: "https://facebook.com/", icon: <Facebook className="w-5 h-5" /> },
];

export default function ContactSection() {
  return (
    <section id="order" className="py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 grid lg:grid-cols-2 gap-10 items-start">
        {/* Contact Form */}
        <div className="rounded-2xl border border-zinc-200 dark:border-zinc-800 p-6 bg-white dark:bg-zinc-900">
          <h3 className="text-2xl font-bold">Order / Contact</h3>
          <p className="mt-2 text-zinc-600 dark:text-zinc-300">Message us directly. We’ll confirm availability and pickup spot.</p>

          <form className="mt-4 grid gap-4" onSubmit={(e) => e.preventDefault()}>
            <label className="grid gap-1">
              <span className="text-sm text-zinc-600 dark:text-zinc-300">Name</span>
              <input className="rounded-xl border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-950 px-3 py-2" placeholder="Your name" required />
            </label>
            <label className="grid gap-1">
              <span className="text-sm text-zinc-600 dark:text-zinc-300">WhatsApp</span>
              <input className="rounded-xl border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-950 px-3 py-2" placeholder="+855 ..." required />
            </label>
            <label className="grid gap-1">
              <span className="text-sm text-zinc-600 dark:text-zinc-300">Order details</span>
              <textarea rows={4} className="rounded-xl border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-950 px-3 py-2" placeholder="e.g., 2x Matcha, 1x Mochi Trio" />
            </label>
            <button className="rounded-2xl bg-emerald-600 px-5 py-2.5 text-white font-medium hover:bg-emerald-700 w-fit">Send</button>
          </form>

          <div className="mt-6 flex flex-wrap gap-4 text-sm">
            <a className="inline-flex items-center gap-2 rounded-xl border border-zinc-300 dark:border-zinc-700 px-3 py-2" href="tel:+85512345678">
              <Phone className="w-4 h-4" /> +855 12 345 678
            </a>
            <a className="inline-flex items-center gap-2 rounded-xl border border-zinc-300 dark:border-zinc-700 px-3 py-2" href="mailto:hello@chalat.co">
              <Mail className="w-4 h-4" /> hello@chalat.co
            </a>
            {socials.map((s, i) => (
              <a key={i} className="inline-flex items-center gap-2 rounded-xl border border-zinc-300 dark:border-zinc-700 px-3 py-2" href={s.href} target="_blank" rel="noreferrer">
                {s.icon} {s.name}
              </a>
            ))}
          </div>
        </div>

        {/* Events */}
        <div className="rounded-2xl border border-zinc-200 dark:border-zinc-800 p-6 bg-white dark:bg-zinc-900">
          <h3 className="text-2xl font-bold">Catering / Events</h3>
          <p className="mt-2 text-zinc-600 dark:text-zinc-300">Book our portable café for office days, fairs, and private events.</p>
          <ul className="mt-4 space-y-2 list-disc pl-5 text-zinc-700 dark:text-zinc-200">
            <li>Flexible 2–6 hour slots</li>
            <li>Custom menu and branding available</li>
            <li>Up to 150 drinks/hour capacity</li>
          </ul>
          <a href="#contact" className="mt-5 inline-flex rounded-2xl border border-zinc-300 dark:border-zinc-700 px-4 py-2 font-medium">
            Get a quote
          </a>
        </div>
      </div>
    </section>
  );
}

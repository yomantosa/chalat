"use client";

import { Phone, Mail, Instagram, Facebook } from "lucide-react";

const socials = [
  { name: "Instagram", href: "https://instagram.com/", icon: <Instagram className="w-5 h-5" /> },
  { name: "Facebook", href: "https://facebook.com/", icon: <Facebook className="w-5 h-5" /> },
];

export default function ContactSection() {
  return (
    <section id="order" className="py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-start">
        <div className="rounded-2xl border border-chalat-accent/20 p-6 bg-chalat-light dark:bg-chalat-dark">
          <h3 className="text-2xl font-bold">Order / Contact</h3>
          <p className="mt-2 text-chalat-accent/80">
            Message us directly. We’ll confirm availability and pickup spot.
          </p>
          <form className="mt-4 grid grid-cols-1 gap-4" onSubmit={(e) => e.preventDefault()}>
            <label className="grid gap-1">
              <span className="text-sm text-chalat-accent/80">Name</span>
              <input required className="rounded-xl border border-chalat-accent/30 bg-chalat-light dark:bg-chalat-dark px-3 py-2" placeholder="Your name" />
            </label>
            <label className="grid gap-1">
              <span className="text-sm text-chalat-accent/80">WhatsApp</span>
              <input required className="rounded-xl border border-chalat-accent/30 bg-chalat-light dark:bg-chalat-dark px-3 py-2" placeholder="+855 ..." />
            </label>
            <label className="grid gap-1">
              <span className="text-sm text-chalat-accent/80">Order details</span>
              <textarea rows={4} className="rounded-xl border border-chalat-accent/30 bg-chalat-light dark:bg-chalat-dark px-3 py-2" placeholder="e.g., 2x Matcha (50% sugar, less ice), 1x Mochi Trio" />
            </label>
            <button className="rounded-2xl bg-chalat-accent px-5 py-2.5 text-chalat-light font-medium hover:bg-chalat-highlight w-fit">
              Send
            </button>
          </form>
          <div className="mt-6 flex flex-wrap gap-4 text-sm">
            <a className="inline-flex items-center gap-2 rounded-xl border border-chalat-accent/30 px-3 py-2" href="tel:+85512345678">
              <Phone className="w-4 h-4" /> +855 12 345 678
            </a>
            <a className="inline-flex items-center gap-2 rounded-xl border border-chalat-accent/30 px-3 py-2" href="mailto:hello@chalat.co">
              <Mail className="w-4 h-4" /> hello@chalat.co
            </a>
            {socials.map((s, i) => (
              <a key={i} className="inline-flex items-center gap-2 rounded-xl border border-chalat-accent/30 px-3 py-2" href={s.href} target="_blank" rel="noreferrer">
                {s.icon} {s.name}
              </a>
            ))}
          </div>
        </div>

        <div className="rounded-2xl border border-chalat-accent/20 p-6 bg-chalat-light dark:bg-chalat-dark">
          <h3 className="text-2xl font-bold">Catering / Events</h3>
          <p className="mt-2 text-chalat-accent/80">
            Book our portable café for office days, fairs, and private events.
          </p>
          <ul className="mt-4 space-y-2 text-chalat-accent list-disc pl-5">
            <li>Flexible 2–6 hour slots</li>
            <li>Custom menu and branding available</li>
            <li>Up to 150 drinks/hour capacity</li>
          </ul>
          <a href="#contact" className="mt-5 inline-flex rounded-2xl border border-chalat-accent/30 px-4 py-2 font-medium hover:bg-chalat-highlight/20">
            Get a quote
          </a>
        </div>
      </div>
    </section>
  );
}

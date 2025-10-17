"use client";

import { MapPin, Clock, Phone } from "lucide-react";

export default function LocationsSection() {
  return (
    <section id="locations" className="py-16 sm:py-20 border-t border-chalat-accent/20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Find Us</h2>
        <div className="mt-6 grid lg:grid-cols-2 gap-8 items-start">
          <div className="rounded-2xl border border-chalat-accent/20 p-6 bg-chalat-light dark:bg-chalat-dark">
            <div className="flex items-center gap-2 text-chalat-accent">
              <MapPin className="w-5 h-5 text-chalat-accent" /> <strong>Phnom Penh</strong>
            </div>
            <p className="mt-2 text-sm text-chalat-accent/80">
              Mobile cart — rotating spots near universities and office hubs. DM us on Instagram for today’s drop.
            </p>
            <div className="mt-4 flex items-center gap-6 text-sm text-chalat-accent">
              <span className="inline-flex items-center gap-2"><Clock className="w-4 h-4" /> Mon–Sun: 9:00–19:00</span>
              <span className="inline-flex items-center gap-2"><Phone className="w-4 h-4" /> +855 12 345 678</span>
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden border border-chalat-accent/20 h-[320px] bg-chalat-highlight/10">
            <iframe
              title="ChaLat Location"
              className="w-full h-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src="https://maps.google.com/maps?q=Phnom%20Penh&t=&z=12&ie=UTF8&iwloc=&output=embed"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

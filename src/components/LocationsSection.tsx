"use client";

import { MapPin, Clock, Phone } from "lucide-react";

export default function LocationsSection() {
  return (
    <section
      id="locations"
      className="py-16 sm:py-20 border-t border-chalat-accent/20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
          Find Us
        </h2>
        <div className="mt-6 grid lg:grid-cols-2 gap-8 items-start">
          <div className="rounded-2xl border border-chalat-accent/20 p-6 bg-chalat-light dark:bg-chalat-dark">
            <div className="flex items-center gap-2 text-chalat-accent">
              <MapPin className="w-5 h-5 text-chalat-accent" />{" "}
              <strong>Phnom Penh</strong>
            </div>
            <p className="mt-2 text-sm text-chalat-accent/80">
              Mobile cart — rotating spots near universities and office hubs. DM
              us on Instagram for today’s drop.
            </p>
            <div className="mt-4 flex items-center gap-6 text-sm text-chalat-accent">
              <span className="inline-flex items-center gap-2">
                <Clock className="w-4 h-4" /> Mon-Sun: 7:30-19:00
              </span>
              <span className="inline-flex items-center gap-2">
                <Phone className="w-4 h-4" /> +855 12 345 678
              </span>
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden border border-chalat-accent/20 h-[320px] bg-chalat-highlight/10">
            <iframe
              title="ChaLat Location"
              className="w-full h-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3908.9408117718076!2d104.8679696!3d11.556100899999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x310951e7a3209247%3A0xad83fcdc18d2ed6b!2z4Z6F4Z6b4Z-Q4Z6PLUNoYUxhdA!5e0!3m2!1sen!2scz!4v1761055890100!5m2!1sen!2scz"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

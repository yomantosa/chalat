import { MapPin, Clock, Phone } from "lucide-react";

export default function LocationsSection() {
  return (
    <section id="locations" className="py-16 sm:py-20 border-t border-zinc-200/60 dark:border-zinc-800">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Find Us</h2>
        <div className="mt-6 grid lg:grid-cols-2 gap-8">
          <div className="rounded-2xl border border-zinc-200 dark:border-zinc-800 p-6 bg-white dark:bg-zinc-900">
            <div className="flex items-center gap-2 text-zinc-700 dark:text-zinc-200">
              <MapPin className="w-5 h-5 text-emerald-600" /> Phnom Penh
            </div>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300">
              Mobile cart — rotating spots near universities and offices.
            </p>
            <div className="mt-4 flex items-center gap-6 text-sm">
              <span className="inline-flex items-center gap-2"><Clock className="w-4 h-4" /> 9:00–19:00</span>
              <span className="inline-flex items-center gap-2"><Phone className="w-4 h-4" /> +855 12 345 678</span>
            </div>
          </div>
          <iframe
            title="Map"
            className="rounded-2xl w-full h-[320px]"
            src="https://maps.google.com/maps?q=Phnom%20Penh&t=&z=12&ie=UTF8&iwloc=&output=embed"
          />
        </div>
      </div>
    </section>
  );
}

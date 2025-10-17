"use client";

import { useState } from "react";
import { Menu as MenuIcon } from "lucide-react";
import Image from "next/image";


export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-chalat-light/80 dark:supports-[backdrop-filter]:bg-chalat-dark/80 border-b border-chalat-accent/20">
      <div className="mx-auto max-w-7xl px-4 flex h-16 items-center justify-between">
        <a href="#top" className="flex items-center gap-2 font-semibold text-chalat-accent">
          <Image src="https://raw.githubusercontent.com/yomantosa/chalat-webapp/refs/heads/main/src/app/favicon.ico" alt="ChaLat logo" className="h-8 w-8 rounded-xl object-contain" />
          <span className="text-lg tracking-wide">ChaLat</span>
        </a>

        <nav className="hidden md:flex items-center gap-8 text-sm">
          {["Menu", "Our Story", "Locations", "Gallery", "Contact"].map((item) => (
            <a key={item} href={`#${item.toLowerCase().replace(" ", "")}`} className="hover:text-chalat-accent">
              {item}
            </a>
          ))}
          <a href="#order" className="rounded-xl bg-chalat-accent px-4 py-2 font-medium text-chalat-light hover:bg-chalat-highlight transition">
            Order
          </a>
        </nav>

        <button onClick={() => setOpen(!open)} className="md:hidden p-2 rounded-xl border border-chalat-accent/30">
          <MenuIcon className="w-5 h-5 text-chalat-accent" />
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-chalat-accent/20 bg-chalat-light dark:bg-chalat-dark">
          <div className="mx-auto max-w-7xl px-4 py-3 flex flex-col gap-3">
            {["Menu", "Our Story", "Locations", "Gallery", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(" ", "")}`}
                onClick={() => setOpen(false)}
                className="hover:text-chalat-accent"
              >
                {item}
              </a>
            ))}
            <a href="#order" className="rounded-xl bg-chalat-accent px-4 py-2 text-chalat-light w-fit">
              Order
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

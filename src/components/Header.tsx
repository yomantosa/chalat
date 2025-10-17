"use client";
import { useState } from "react";
import { Menu as MenuIcon } from "lucide-react";

export default function Header() {
    const [open, setOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-chalat-light/70 dark:supports-[backdrop-filter]:bg-chalat-dark/60 border-b border-chalat-text/10">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    <a
                        href="#top"
                        className="flex items-center gap-2 font-semibold text-chalat-accent"
                    >
                        <span className="inline-block h-8 w-8 rounded-2xl bg-chalat-accent"></span>
                        <span className="text-lg tracking-wide">
                            ChaLat Snacks & Drinks
                        </span>
                    </a>
                    <nav className="hidden md:flex items-center gap-8 text-sm">
                        <a href="#menu" className="hover:text-chalat-accent">
                            Menu
                        </a>
                        <a href="#story" className="hover:text-chalat-accent">
                            Our Story
                        </a>
                        <a
                            href="#locations"
                            className="hover:text-chalat-accent"
                        >
                            Locations
                        </a>
                        <a href="#gallery" className="hover:text-chalat-accent">
                            Gallery
                        </a>
                        <a href="#contact" className="hover:text-chalat-accent">
                            Contact
                        </a>
                        <a
                            href="#order"
                            className="rounded-xl bg-chalat-accent px-4 py-2 font-medium text-white hover:bg-chalat-dark"
                        >
                            Order
                        </a>
                    </nav>
                </div>
            </div>
        </header>
    );
}

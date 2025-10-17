"use client";

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-chalat-accent/20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div>
          <div className="flex items-center gap-2 font-semibold text-chalat-accent">
            <img src="/favicon.ico" alt="ChaLat logo" className="h-8 w-8 rounded-xl object-contain" />
            <span>ChaLat Snacks & Drinks</span>
          </div>
          <p className="mt-2 text-sm text-chalat-accent/70">
            © {new Date().getFullYear()} KonKhmer. All rights reserved.
          </p>
        </div>
        <div className="flex gap-4 text-sm">
          <a href="#menu" className="hover:text-chalat-accent">Menu</a>
          <a href="#locations" className="hover:text-chalat-accent">Locations</a>
          <a href="#order" className="hover:text-chalat-accent">Order</a>
        </div>
      </div>
    </footer>
  );
}

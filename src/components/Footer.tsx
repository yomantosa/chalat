export default function Footer() {
  return (
    <footer id="contact" className="border-t border-chalat-accent/20 bg-chalat-light dark:bg-chalat-dark">
      <div className="mx-auto max-w-7xl px-4 py-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div>
          <div className="flex items-center gap-2 font-semibold text-chalat-accent">
            <span className="inline-block h-6 w-6 rounded-xl bg-chalat-accent" />
            <span>ChaLat Snacks & Drinks</span>
          </div>
          <p className="mt-2 text-sm text-chalat-text/70">© {new Date().getFullYear()} KonKhmer. All rights reserved.</p>
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

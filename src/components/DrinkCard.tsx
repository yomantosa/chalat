"use client";

export default function DrinkCard({ name, price, icon, tag }: { name: string; price: number; icon: React.ReactNode; tag?: string }) {
  return (
    <div className="relative rounded-2xl border border-chalat-accent/20 p-4 bg-chalat-light dark:bg-chalat-dark">
      {tag && (
        <span className="absolute -top-2 -right-2 rounded-full bg-chalat-highlight text-chalat-dark text-xs font-semibold px-2 py-0.5 shadow">
          {tag}
        </span>
      )}
      <div className="flex items-start gap-3">
        <div className="p-2 rounded-xl bg-chalat-highlight/30 text-chalat-accent">{icon}</div>
        <div className="flex-1">
          <h4 className="font-semibold">{name}</h4>
          <p className="text-sm text-chalat-accent/70">16oz</p>
        </div>
        <div className="text-right font-semibold text-chalat-accent">${price.toFixed(2)}</div>
      </div>
    </div>
  );
}

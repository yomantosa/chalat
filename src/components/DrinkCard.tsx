import React from "react";

export default function DrinkCard({
  name,
  price,
  icon,
  tag,
}: {
  name: string;
  price: number;
  icon: React.ReactNode;
  tag?: string;
}) {
  return (
    <div className="relative rounded-2xl border border-zinc-200 dark:border-zinc-800 p-4 bg-white dark:bg-zinc-900">
      {tag && (
        <span className="absolute -top-2 -right-2 rounded-full bg-amber-400 text-zinc-900 text-xs font-semibold px-2 py-0.5 shadow">
          {tag}
        </span>
      )}
      <div className="flex items-start gap-3">
        <div className="p-2 rounded-xl bg-emerald-50 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300">{icon}</div>
        <div className="flex-1">
          <h4 className="font-semibold">{name}</h4>
          <p className="text-sm text-zinc-500">16oz</p>
        </div>
        <div className="text-right font-semibold">${price.toFixed(2)}</div>
      </div>
    </div>
  );
}

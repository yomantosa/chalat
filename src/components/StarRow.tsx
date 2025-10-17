import { Star } from "lucide-react";

export default function StarRow({ n }: { n: number }) {
  return (
    <div className="flex gap-1" aria-label={`${n} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className={`w-4 h-4 ${i < n ? "fill-amber-400 text-amber-400" : "text-zinc-400"}`} />
      ))}
    </div>
  );
}

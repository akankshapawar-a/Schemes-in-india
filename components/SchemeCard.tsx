import Link from "next/link";
import type { Scheme } from "@/lib/schemes-data";
import { categories } from "@/lib/schemes-data";

interface Props {
  scheme: Scheme;
  href: string;
}

export default function SchemeCard({ scheme, href }: Props) {
  const cat = categories.find((c) => c.slug === scheme.category);

  return (
    <Link href={href} className="scheme-card block border border-gray-200 rounded-xl p-4 hover:border-[#1A3C6E] bg-white">
      <div className="flex items-start justify-between gap-2 mb-2">
        <span className="category-badge" style={{ background: cat?.color + "18", color: cat?.color }}>
          {cat?.icon} {cat?.label}
        </span>
        {scheme.isPopular && <span className="popular-badge">🔥 Popular</span>}
      </div>
      <h3 className="font-semibold text-gray-900 text-sm leading-snug mb-1.5 line-clamp-2">
        {scheme.title}
      </h3>
      <p className="text-xs text-gray-500 leading-relaxed line-clamp-2 mb-3">
        {scheme.description}
      </p>
      <div className="flex items-center justify-between">
        <span className="text-xs font-semibold text-[#128807] bg-green-50 px-2 py-1 rounded-md line-clamp-1 flex-1 mr-2">
          ✅ {scheme.benefit}
        </span>
        <span className="text-xs text-[#1A3C6E] font-medium shrink-0 hover:underline">Details →</span>
      </div>
    </Link>
  );
}

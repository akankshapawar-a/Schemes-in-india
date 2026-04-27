import Link from "next/link";
import type { State } from "@/lib/schemes-data";

export default function StateCard({ state }: { state: State }) {
  return (
    <Link
      href={`/schemes/${state.slug}`}
      className="scheme-card flex flex-col items-center gap-1 p-3 border border-gray-200 rounded-xl hover:border-[#1A3C6E] hover:bg-blue-50/50 bg-white text-center"
    >
      <span className="text-2xl">{state.icon}</span>
      <span className="text-xs font-semibold text-gray-900 leading-tight">{state.name}</span>
      <span className="text-[10px] text-gray-500 font-devanagari">{state.hindiName}</span>
      <span className="text-[10px] text-[#1A3C6E] font-medium">{state.totalSchemes} Schemes</span>
    </Link>
  );
}

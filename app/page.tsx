import type { Metadata } from "next";
import Link from "next/link";
import { centralSchemes, states, categories } from "@/lib/schemes-data";
import { AdTopBanner, AdMidContent, AdInFeed, AdEndArticle } from "@/components/AdUnit";
import SchemeCard from "@/components/SchemeCard";
import StateCard from "@/components/StateCard";

export const metadata: Metadata = {
  title: "Schemes In India 2025 — Complete Guide to All Government Yojanas",
  description:
    "Get complete information on all Indian government schemes 2025 — PM Vishwakarma, PM Kisan, Ayushman Bharat, PMAY, PM Ujjwala and 500+ more. State-wise and central scheme eligibility, registration & benefits.",
  alternates: { canonical: "https://schemesindia.in" },
};

const popularSchemes = centralSchemes.filter((s) => s.isPopular);
const recentSchemes = centralSchemes.slice(0, 6);

export default function HomePage() {
  return (
    <>
      {/* ── Hero banner ─────────────────────────────────────────────────── */}
      <section className="bg-gradient-to-br from-[#1A3C6E] via-[#1E4D8C] to-[#15305A] text-white py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-2">
              <span className="bg-[#FF6B00] text-white text-xs font-bold px-2 py-0.5 rounded">Updated 2025</span>
              <span className="text-orange-200 text-sm">500+ Government Schemes</span>
            </div>
            <h1 className="text-2xl md:text-3xl font-bold leading-tight mb-3">
              All Indian Government Schemes 2025 —<br />
              <span className="text-orange-300">State Wise & Central Yojana List</span>
            </h1>
            <p className="text-blue-100 text-sm md:text-base leading-relaxed mb-5">
              Complete eligibility, registration guide, required documents & benefits for every government scheme in India. Updated regularly for 2025.
            </p>
            <div className="flex gap-3 flex-wrap">
              <Link href="/central" className="bg-[#FF6B00] hover:bg-[#E55F00] text-white font-semibold px-5 py-2.5 rounded-lg text-sm transition-colors">
                Central Schemes →
              </Link>
              <Link href="/states" className="bg-white/15 hover:bg-white/25 text-white font-semibold px-5 py-2.5 rounded-lg text-sm transition-colors border border-white/20">
                State Wise Schemes
              </Link>
            </div>
          </div>

          {/* Stats row */}
          <div className="grid grid-cols-3 md:grid-cols-5 gap-3 mt-7 pt-6 border-t border-white/10">
            {[
              { num: "500+", label: "Total Schemes" },
              { num: "28", label: "States Covered" },
              { num: "8", label: "Categories" },
              { num: "2025", label: "Latest Updated" },
              { num: "Free", label: "Always Free" },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <p className="text-xl md:text-2xl font-bold text-orange-300">{s.num}</p>
                <p className="text-xs text-blue-200">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Top Banner Ad ────────────────────────────────────────────────── */}
      <AdTopBanner />

      <div className="max-w-7xl mx-auto px-4">
        {/* ── Category quick links ─────────────────────────────────────── */}
        <section className="py-6">
          <h2 className="text-lg font-bold text-gray-900 section-heading mb-4">Browse by Category</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 gap-2">
            {categories.map((cat) => (
              <Link
                key={cat.slug}
                href={`/category/${cat.slug}`}
                className="flex flex-col items-center gap-1.5 p-3 rounded-xl border border-gray-200 hover:border-[#1A3C6E] hover:bg-blue-50 transition-all text-center group"
              >
                <span className="text-2xl">{cat.icon}</span>
                <span className="text-xs font-medium text-gray-700 group-hover:text-[#1A3C6E]">{cat.label}</span>
              </Link>
            ))}
          </div>
        </section>

        <div className="flex flex-col lg:flex-row gap-6">
          {/* ── Main content ──────────────────────────────────────────── */}
          <div className="flex-1 min-w-0">
            {/* Popular schemes */}
            <section className="mb-8">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-bold text-gray-900 section-heading">
                  🔥 Most Searched Schemes 2025
                </h2>
                <Link href="/central" className="text-sm text-[#1A3C6E] font-medium hover:underline">
                  View All →
                </Link>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {popularSchemes.map((scheme) => (
                  <SchemeCard key={scheme.slug} scheme={scheme} href={`/central/${scheme.slug}`} />
                ))}
              </div>
            </section>

            {/* Mid content Ad */}
            <AdMidContent />

            {/* Recent/All schemes */}
            <section className="mb-8">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-bold text-gray-900 section-heading">
                  📋 Latest Government Schemes
                </h2>
                <Link href="/schemes" className="text-sm text-[#1A3C6E] font-medium hover:underline">
                  View All →
                </Link>
              </div>
              <div className="space-y-3">
                {recentSchemes.map((scheme, i) => (
                  <>
                    <Link
                      key={scheme.slug}
                      href={`/central/${scheme.slug}`}
                      className="flex items-start gap-3 p-4 border border-gray-200 rounded-xl hover:border-[#1A3C6E] hover:bg-blue-50/50 transition-all group"
                    >
                      <span className="text-2xl mt-0.5 shrink-0">
                        {categories.find((c) => c.slug === scheme.category)?.icon ?? "📋"}
                      </span>
                      <div className="min-w-0">
                        <h3 className="font-semibold text-gray-900 group-hover:text-[#1A3C6E] text-sm leading-snug">
                          {scheme.title}
                        </h3>
                        <p className="text-xs text-gray-500 mt-0.5 line-clamp-2">{scheme.description}</p>
                        <span className="inline-block mt-1.5 text-xs font-semibold text-[#128807] bg-green-50 px-2 py-0.5 rounded">
                          {scheme.benefit}
                        </span>
                      </div>
                    </Link>
                    {/* Insert in-feed ad after 3rd item */}
                    {i === 2 && <AdInFeed key="infeed-ad" />}
                  </>
                ))}
              </div>
            </section>

            {/* State wise section */}
            <section className="mb-8">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-bold text-gray-900 section-heading">
                  🗺️ State Wise Schemes
                </h2>
                <Link href="/states" className="text-sm text-[#1A3C6E] font-medium hover:underline">
                  All States →
                </Link>
              </div>
              <div className="state-grid">
                {states.map((state) => (
                  <StateCard key={state.slug} state={state} />
                ))}
              </div>
            </section>

            <AdEndArticle />
          </div>

          {/* ── Sidebar ──────────────────────────────────────────────── */}
          <aside className="hidden lg:block w-[300px] shrink-0">
            <div className="sidebar-sticky space-y-5">
              {/* Sidebar Ad */}
              <div>
                <p className="text-[10px] text-gray-400 text-center mb-1 uppercase tracking-wide">Advertisement</p>
                <div className="bg-gray-100 rounded-lg" style={{ width: 300, height: 250 }} />
              </div>

              {/* Quick links */}
              <div className="border border-gray-200 rounded-xl p-4">
                <h3 className="font-bold text-gray-900 mb-3 text-sm section-heading">⭐ Most Popular</h3>
                <ul className="space-y-2">
                  {centralSchemes.map((s) => (
                    <li key={s.slug}>
                      <Link
                        href={`/central/${s.slug}`}
                        className="flex items-start gap-2 text-sm text-gray-700 hover:text-[#1A3C6E] group"
                      >
                        <span className="text-[#FF6B00] mt-0.5">›</span>
                        <span className="group-hover:underline line-clamp-2">{s.title}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Important notice */}
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
                <h3 className="font-bold text-amber-800 text-sm mb-2">⚠️ Important Note</h3>
                <p className="text-xs text-amber-700 leading-relaxed">
                  This website is not affiliated with any government body. Information is provided for reference only. Always verify on official government portals before applying.
                </p>
              </div>

              {/* Second sidebar ad */}
              <div>
                <p className="text-[10px] text-gray-400 text-center mb-1 uppercase tracking-wide">Advertisement</p>
                <div className="bg-gray-100 rounded-lg" style={{ width: 300, height: 250 }} />
              </div>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
}

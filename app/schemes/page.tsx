import type { Metadata } from "next";
import Link from "next/link";
import { centralSchemes, states, categories } from "@/lib/schemes-data";
import { AdTopBanner, AdMidContent, AdEndArticle } from "@/components/AdUnit";
import SchemeCard from "@/components/SchemeCard";

export const metadata: Metadata = {
  title: "All Government Schemes India 2025 — State & Central Yojana List",
  description:
    "Browse all Indian government schemes 2025 — central and state-wise. PM Vishwakarma, PM Kisan, Ayushman Bharat, PM Awas Yojana and hundreds more. Check eligibility and apply online.",
  alternates: { canonical: "https://schemesindia.in/schemes" },
};

export default function AllSchemesPage() {
  return (
    <>
      <div className="bg-gradient-to-r from-[#1A3C6E] to-[#1E4D8C] text-white py-6 px-4">
        <div className="max-w-7xl mx-auto">
          <nav className="text-xs text-blue-200 mb-2">
            <Link href="/" className="hover:text-white">Home</Link> › All Schemes
          </nav>
          <h1 className="text-xl md:text-2xl font-bold">
            📋 All Government Schemes India 2025
          </h1>
          <p className="text-blue-200 text-sm mt-1">
            Central &amp; state government yojanas — eligibility, registration &amp; benefits
          </p>
        </div>
      </div>

      <AdTopBanner />

      <div className="max-w-7xl mx-auto px-4 py-6">
        {/* Category filter pills */}
        <div className="flex gap-2 flex-wrap mb-6">
          {categories.map((cat) => (
            <Link
              key={cat.slug}
              href={`/category/${cat.slug}`}
              className="category-badge border border-gray-200 text-gray-600 hover:border-[#1A3C6E] hover:text-[#1A3C6E] transition-all"
              style={{ background: cat.color + "12" }}
            >
              {cat.icon} {cat.label}
            </Link>
          ))}
        </div>

        {/* Central schemes */}
        <section className="mb-10">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-bold text-gray-900 section-heading">
              🇮🇳 Central Government Schemes ({centralSchemes.length})
            </h2>
            <Link href="/central" className="text-sm text-[#1A3C6E] font-medium hover:underline">
              View All →
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {centralSchemes.map((scheme) => (
              <SchemeCard key={scheme.slug} scheme={scheme} href={`/central/${scheme.slug}`} />
            ))}
          </div>
        </section>

        <AdMidContent />

        {/* State-wise browse */}
        <section className="mb-10">
          <h2 className="text-lg font-bold text-gray-900 section-heading mb-4">
            🗺️ Browse by State ({states.length} States)
          </h2>
          <div className="state-grid">
            {states.map((state) => (
              <Link
                key={state.slug}
                href={`/schemes/${state.slug}`}
                className="scheme-card flex flex-col items-center gap-1 p-3 border border-gray-200 rounded-xl hover:border-[#1A3C6E] hover:bg-blue-50/50 bg-white text-center"
              >
                <span className="text-2xl">{state.icon}</span>
                <span className="text-xs font-semibold text-gray-900 leading-tight">{state.name}</span>
                <span className="text-[10px] text-gray-500">{state.hindiName}</span>
                <span className="text-[10px] text-[#1A3C6E] font-medium">{state.totalSchemes} Schemes</span>
              </Link>
            ))}
          </div>
        </section>

        <AdEndArticle />
      </div>
    </>
  );
}

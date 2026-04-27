import type { Metadata } from "next";
import Link from "next/link";
import { centralSchemes, categories } from "@/lib/schemes-data";
import { AdTopBanner, AdMidContent, AdInFeed, AdEndArticle } from "@/components/AdUnit";
import SchemeCard from "@/components/SchemeCard";

export const metadata: Metadata = {
  title: "Central Government Schemes 2025 — Complete List of PM Yojanas",
  description:
    "Complete list of all central government schemes 2025 — PM Vishwakarma, PM Kisan, Ayushman Bharat, PM Awas Yojana, PM Ujjwala and more. Check eligibility and apply online.",
  alternates: { canonical: "https://schemesindia.in/central" },
};

export default function CentralSchemesPage() {
  const byCategory = categories.map((cat) => ({
    ...cat,
    schemes: centralSchemes.filter((s) => s.category === cat.slug),
  })).filter((c) => c.schemes.length > 0);

  return (
    <>
      <div className="bg-gradient-to-r from-[#1A3C6E] to-[#1E4D8C] text-white py-6 px-4">
        <div className="max-w-7xl mx-auto">
          <nav className="text-xs text-blue-200 mb-2">
            <Link href="/" className="hover:text-white">Home</Link> › Central Government Schemes
          </nav>
          <h1 className="text-xl md:text-2xl font-bold">
            🇮🇳 Central Government Schemes 2025 — Complete List
          </h1>
          <p className="text-blue-200 text-sm mt-1">
            All PM Yojanas and central schemes — eligibility, registration & benefits
          </p>
        </div>
      </div>

      <AdTopBanner />

      <div className="max-w-7xl mx-auto px-4 py-6">
        {/* Category filter pills */}
        <div className="flex gap-2 flex-wrap mb-6">
          <span className="category-badge bg-[#1A3C6E] text-white cursor-default">All Schemes</span>
          {categories.map((cat) => (
            <Link key={cat.slug} href={`/category/${cat.slug}`}
              className="category-badge border border-gray-200 text-gray-600 hover:border-[#1A3C6E] hover:text-[#1A3C6E] transition-all"
              style={{ background: cat.color + "12" }}>
              {cat.icon} {cat.label}
            </Link>
          ))}
        </div>

        {/* All schemes grid */}
        <section className="mb-8">
          <h2 className="text-lg font-bold text-gray-900 mb-4 section-heading">
            All Central Government Schemes ({centralSchemes.length})
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {centralSchemes.map((scheme, i) => (
              <>
                <SchemeCard key={scheme.slug} scheme={scheme} href={`/central/${scheme.slug}`} />
                {i === 5 && <div key="ad-infeed" className="sm:col-span-2 lg:col-span-3"><AdInFeed /></div>}
              </>
            ))}
          </div>
        </section>

        {/* By category */}
        {byCategory.map((cat, i) => (
          <section key={cat.slug} className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-base font-bold text-gray-900 section-heading">
                {cat.icon} {cat.label} Schemes
              </h2>
              <Link href={`/category/${cat.slug}`} className="text-sm text-[#1A3C6E] hover:underline">
                View All →
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {cat.schemes.map((scheme) => (
                <SchemeCard key={scheme.slug} scheme={scheme} href={`/central/${scheme.slug}`} />
              ))}
            </div>
            {i === 1 && <AdMidContent />}
          </section>
        ))}

        <AdEndArticle />
      </div>
    </>
  );
}

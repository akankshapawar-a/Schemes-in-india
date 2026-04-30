import type { Metadata } from "next";
import Link from "next/link";
import { newsArticles } from "@/lib/news-data";
import { AdTopBanner, AdMidContent } from "@/components/AdUnit";

export const metadata: Metadata = {
  title: "Government Scheme News & Updates 2025 — Latest Yojana Updates",
  description:
    "Latest government scheme updates 2025 — PM Kisan installment dates, Ayushman card download, new scheme launches, beneficiary lists and more. Updated daily.",
  alternates: { canonical: "https://schemesindia.in/blog" },
};

const categoryColors: Record<string, { bg: string; text: string; label: string }> = {
  central:     { bg: "#E6F1FB", text: "#185FA5", label: "Central Govt" },
  state:       { bg: "#EAF3DE", text: "#3B6D11", label: "State Scheme" },
  agriculture: { bg: "#EAF3DE", text: "#3B6D11", label: "Agriculture" },
  education:   { bg: "#E6F1FB", text: "#185FA5", label: "Education" },
  health:      { bg: "#FCEBEB", text: "#A32D2D", label: "Health" },
  women:       { bg: "#FBEAF0", text: "#993556", label: "Women" },
  finance:     { bg: "#FAEEDA", text: "#854F0B", label: "Finance" },
  employment:  { bg: "#EEEDFE", text: "#534AB7", label: "Employment" },
};

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-IN", {
    day: "numeric", month: "long", year: "numeric",
  });
}

const sorted = [...newsArticles].sort(
  (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
);
const featured = sorted.slice(0, 3);
const rest = sorted.slice(3);

export default function BlogPage() {
  return (
    <>
      <div className="bg-gradient-to-r from-[#1A3C6E] to-[#1E4D8C] text-white py-6 px-4">
        <div className="max-w-7xl mx-auto">
          <nav className="text-xs text-blue-200 mb-2">
            <Link href="/" className="hover:text-white">Home</Link> › News & Updates
          </nav>
          <h1 className="text-xl md:text-2xl font-bold">
            📰 Government Scheme News & Updates 2025
          </h1>
          <p className="text-blue-200 text-sm mt-1">
            Latest scheme updates, installment dates, new launches &amp; beneficiary lists
          </p>
        </div>
      </div>

      <AdTopBanner />

      <div className="max-w-7xl mx-auto px-4 py-6">

        {/* Featured articles */}
        <section className="mb-10">
          <h2 className="text-lg font-bold text-gray-900 section-heading mb-4">🔥 Latest Updates</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {featured.map((article) => {
              const c = categoryColors[article.category] ?? categoryColors.central;
              return (
                <Link
                  key={article.slug}
                  href={`/blog/${article.slug}`}
                  className="scheme-card border border-gray-200 rounded-xl p-4 hover:border-[#1A3C6E] bg-white block group"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span
                      className="category-badge text-xs"
                      style={{ background: c.bg, color: c.text }}
                    >
                      {c.label}
                    </span>
                    {article.isPopular && (
                      <span className="text-[10px] text-orange-600 font-semibold bg-orange-50 px-2 py-0.5 rounded">
                        🔥 Trending
                      </span>
                    )}
                  </div>
                  <h3 className="font-semibold text-gray-900 text-sm leading-snug mb-2 group-hover:text-[#1A3C6E] line-clamp-3">
                    {article.title}
                  </h3>
                  <p className="text-xs text-gray-500 line-clamp-2 mb-3">{article.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-400">{formatDate(article.date)}</span>
                    <span className="text-xs text-[#1A3C6E] font-medium">Read more →</span>
                  </div>
                </Link>
              );
            })}
          </div>
        </section>

        <AdMidContent />

        {/* All articles list */}
        {rest.length > 0 && (
          <section>
            <h2 className="text-lg font-bold text-gray-900 section-heading mb-4">📋 All Articles</h2>
            <div className="space-y-3">
              {rest.map((article) => {
                const c = categoryColors[article.category] ?? categoryColors.central;
                return (
                  <Link
                    key={article.slug}
                    href={`/blog/${article.slug}`}
                    className="flex items-start gap-4 p-4 border border-gray-200 rounded-xl hover:border-[#1A3C6E] hover:bg-blue-50/40 transition-all group block"
                  >
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1 flex-wrap">
                        <span
                          className="category-badge text-[11px]"
                          style={{ background: c.bg, color: c.text }}
                        >
                          {c.label}
                        </span>
                        <span className="text-[11px] text-gray-400">{formatDate(article.date)}</span>
                      </div>
                      <h3 className="font-semibold text-gray-900 text-sm leading-snug group-hover:text-[#1A3C6E] line-clamp-2">
                        {article.title}
                      </h3>
                      <p className="text-xs text-gray-500 mt-1 line-clamp-1">{article.excerpt}</p>
                    </div>
                    <span className="text-xs text-[#1A3C6E] font-medium shrink-0 mt-1">Read →</span>
                  </Link>
                );
              })}
            </div>
          </section>
        )}

        {/* SEO text */}
        <div className="mt-10 bg-gray-50 rounded-xl border border-gray-200 p-5">
          <h2 className="text-base font-bold text-gray-900 mb-2">About Our News Section</h2>
          <p className="text-sm text-gray-600 leading-relaxed">
            We publish the latest updates on all Indian government schemes including PM Kisan installment dates,
            Ayushman Bharat card downloads, PM Awas Yojana beneficiary lists, and new scheme launches by
            central and state governments. Our articles are updated regularly to ensure you always have the
            most accurate information.
          </p>
        </div>
      </div>
    </>
  );
}

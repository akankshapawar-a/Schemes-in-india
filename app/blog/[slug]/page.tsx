import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Script from "next/script";
import { newsArticles, getArticleBySlug, getRelatedArticles } from "@/lib/news-data";
import { centralSchemes } from "@/lib/schemes-data";
import { AdTopBanner, AdMidContent, AdEndArticle, AdSidebar } from "@/components/AdUnit";

interface Props { params: { slug: string } }

export async function generateStaticParams() {
  return newsArticles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const article = getArticleBySlug(params.slug);
  if (!article) return {};
  return {
    title: article.title,
    description: article.excerpt,
    keywords: article.tags,
    alternates: { canonical: `https://schemesindia.in/blog/${article.slug}` },
    openGraph: {
      title: article.title,
      description: article.excerpt,
      type: "article",
      publishedTime: article.date,
      modifiedTime: article.lastModified ?? article.date,
    },
  };
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-IN", {
    day: "numeric", month: "long", year: "numeric",
  });
}

export default function BlogArticlePage({ params }: Props) {
  const article = getArticleBySlug(params.slug);
  if (!article) notFound();

  const related = getRelatedArticles(article, 3);
  const linkedScheme = article.schemeSlug
    ? centralSchemes.find((s) => s.slug === article.schemeSlug)
    : null;

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: article.title,
    description: article.excerpt,
    datePublished: article.date,
    dateModified: article.lastModified ?? article.date,
    author: { "@type": "Organization", name: "Schemes In India" },
    publisher: { "@type": "Organization", name: "Schemes In India", url: "https://schemesindia.in" },
    keywords: article.tags.join(", "),
  };

  return (
    <>
      <Script id="article-schema" type="application/ld+json" strategy="beforeInteractive">
        {JSON.stringify(articleSchema)}
      </Script>

      {/* Hero */}
      <div className="bg-gradient-to-r from-[#1A3C6E] to-[#1E4D8C] text-white py-6 px-4">
        <div className="max-w-7xl mx-auto">
          <nav className="text-xs text-blue-200 mb-3 flex items-center gap-1 flex-wrap">
            <Link href="/" className="hover:text-white">Home</Link>
            <span>›</span>
            <Link href="/blog" className="hover:text-white">News & Updates</Link>
            <span>›</span>
            <span className="text-white line-clamp-1">{article.title.substring(0, 50)}...</span>
          </nav>
          <h1 className="text-lg md:text-2xl font-bold leading-tight">{article.title}</h1>
          {article.titleHindi && (
            <p className="text-blue-200 text-sm mt-1 font-devanagari">{article.titleHindi}</p>
          )}
          <div className="flex items-center gap-3 mt-3 flex-wrap text-xs text-blue-200">
            <span>📅 {formatDate(article.date)}</span>
            {article.lastModified && article.lastModified !== article.date && (
              <span>✏️ Updated: {formatDate(article.lastModified)}</span>
            )}
            <span>By Schemes In India Team</span>
          </div>
        </div>
      </div>

      <AdTopBanner />

      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex flex-col lg:flex-row gap-6">

          {/* Article */}
          <article className="flex-1 min-w-0">
            {/* Excerpt callout */}
            <div className="bg-blue-50 border-l-4 border-[#1A3C6E] rounded-r-xl p-4 mb-6">
              <p className="text-sm text-gray-700 font-medium leading-relaxed">{article.excerpt}</p>
              {article.excerptHindi && (
                <p className="text-sm text-gray-600 mt-2 font-devanagari">{article.excerptHindi}</p>
              )}
            </div>

            {/* Linked scheme quick-info */}
            {linkedScheme && (
              <div className="bg-green-50 border border-green-200 rounded-xl p-4 mb-6 flex items-start gap-3">
                <span className="text-2xl">📋</span>
                <div className="flex-1">
                  <p className="text-xs text-green-700 font-semibold mb-0.5">About this scheme</p>
                  <p className="text-sm font-bold text-gray-900">{linkedScheme.title}</p>
                  <p className="text-xs text-[#128807] font-semibold mt-0.5">✅ {linkedScheme.benefit}</p>
                  <Link
                    href={`/central/${linkedScheme.slug}`}
                    className="inline-block mt-2 text-xs text-white bg-[#128807] px-3 py-1 rounded-md hover:bg-[#0E6B05] transition-colors"
                  >
                    Full Scheme Details →
                  </Link>
                </div>
              </div>
            )}

            {/* Main content */}
            <div
              className="prose-article text-gray-800 text-sm leading-relaxed"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />

            <AdMidContent />

            {/* Hindi version */}
            {article.contentHindi && (
              <div className="mt-8 border border-orange-200 rounded-xl overflow-hidden">
                <div className="bg-orange-50 border-b border-orange-200 px-4 py-3">
                  <h2 className="font-bold text-orange-800 text-sm">🇮🇳 हिंदी में पढ़ें (Read in Hindi)</h2>
                </div>
                <div
                  className="prose-article p-4 text-gray-800 text-sm leading-relaxed font-devanagari"
                  dangerouslySetInnerHTML={{ __html: article.contentHindi }}
                />
              </div>
            )}

            {/* Tags */}
            <div className="mt-8 pt-4 border-t border-gray-200">
              <p className="text-xs text-gray-500 mb-2 font-medium uppercase tracking-wide">Topics</p>
              <div className="flex flex-wrap gap-2">
                {article.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs bg-gray-100 text-gray-600 px-3 py-1 rounded-full border border-gray-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <AdEndArticle />

            {/* Related articles */}
            {related.length > 0 && (
              <section className="mt-8">
                <h2 className="text-base font-bold text-gray-900 section-heading mb-4">
                  📰 Related Articles
                </h2>
                <div className="space-y-3">
                  {related.map((a) => (
                    <Link
                      key={a.slug}
                      href={`/blog/${a.slug}`}
                      className="flex items-start gap-3 p-3 border border-gray-200 rounded-xl hover:border-[#1A3C6E] hover:bg-blue-50/40 transition-all group"
                    >
                      <span className="text-xl shrink-0">📄</span>
                      <div>
                        <h3 className="text-sm font-semibold text-gray-900 group-hover:text-[#1A3C6E] line-clamp-2">
                          {a.title}
                        </h3>
                        <p className="text-xs text-gray-400 mt-0.5">{formatDate(a.date)}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </section>
            )}
          </article>

          {/* Sidebar */}
          <aside className="hidden lg:block w-[300px] shrink-0">
            <AdSidebar />
            <div className="mt-5 border border-gray-200 rounded-xl p-4">
              <h3 className="font-bold text-gray-900 mb-3 text-sm section-heading">📰 Recent Articles</h3>
              <ul className="space-y-3">
                {newsArticles.slice(0, 8).map((a) => (
                  <li key={a.slug}>
                    <Link href={`/blog/${a.slug}`} className="text-sm text-gray-600 hover:text-[#1A3C6E] flex items-start gap-1.5 group">
                      <span className="text-[#FF6B00] mt-0.5 shrink-0">›</span>
                      <span className="group-hover:underline line-clamp-2">{a.title}</span>
                    </Link>
                  </li>
                ))}
              </ul>
              <Link href="/blog" className="block text-center text-xs text-[#1A3C6E] font-medium mt-3 hover:underline">
                View All Articles →
              </Link>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Script from "next/script";
import { centralSchemes, categories } from "@/lib/schemes-data";
import { AdTopBanner, AdMidContent, AdEndArticle, AdSidebar } from "@/components/AdUnit";
import Breadcrumb from "@/components/Breadcrumb";
import FaqAccordion from "@/components/FaqAccordion";
import SchemeCard from "@/components/SchemeCard";

interface Props {
  params: { scheme: string };
}

export async function generateStaticParams() {
  return centralSchemes.map((s) => ({ scheme: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const scheme = centralSchemes.find((s) => s.slug === params.scheme);
  if (!scheme) return {};
  return {
    title: `${scheme.title} — Eligibility, Registration & Benefits`,
    description: `Complete guide to ${scheme.title}: eligibility criteria, online registration process, required documents, and benefits. ${scheme.benefit}. Apply at official portal.`,
    keywords: scheme.keywords,
    alternates: { canonical: `https://schemesindia.in/central/${scheme.slug}` },
    openGraph: {
      title: scheme.title,
      description: `${scheme.benefit} — Complete registration guide for ${scheme.title}`,
    },
  };
}

export default function CentralSchemePage({ params }: Props) {
  const scheme = centralSchemes.find((s) => s.slug === params.scheme);
  if (!scheme) notFound();

  const cat = categories.find((c) => c.slug === scheme.category);
  const relatedSchemes = centralSchemes.filter((s) => s.slug !== scheme.slug && s.category === scheme.category).slice(0, 4);

  // Schema markup
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: scheme.title,
    description: scheme.description,
    datePublished: `${scheme.launchYear}-01-01`,
    dateModified: "2025-01-01",
    author: { "@type": "Organization", name: "Schemes In India" },
    publisher: { "@type": "Organization", name: "Schemes In India", url: "https://schemesindia.in" },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: scheme.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://schemesindia.in" },
      { "@type": "ListItem", position: 2, name: "Central Schemes", item: "https://schemesindia.in/central" },
      { "@type": "ListItem", position: 3, name: scheme.title, item: `https://schemesindia.in/central/${scheme.slug}` },
    ],
  };

  return (
    <>
      {/* Schema markup */}
      <Script id="article-schema" type="application/ld+json" strategy="beforeInteractive">
        {JSON.stringify(articleSchema)}
      </Script>
      <Script id="faq-schema" type="application/ld+json" strategy="beforeInteractive">
        {JSON.stringify(faqSchema)}
      </Script>
      <Script id="breadcrumb-schema" type="application/ld+json" strategy="beforeInteractive">
        {JSON.stringify(breadcrumbSchema)}
      </Script>

      {/* Hero */}
      <div className="bg-gradient-to-r from-[#1A3C6E] to-[#1E4D8C] text-white py-6 px-4">
        <div className="max-w-7xl mx-auto">
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Central Schemes", href: "/central" },
              { label: scheme.shortTitle },
            ]}
          />
          <div className="mt-3 flex items-start gap-3">
            <span className="text-3xl mt-1 shrink-0">{cat?.icon}</span>
            <div>
              <h1 className="text-xl md:text-2xl font-bold leading-tight">{scheme.title}</h1>
              <div className="flex items-center gap-2 mt-2 flex-wrap">
                <span className="text-xs bg-white/20 px-2 py-0.5 rounded">{cat?.label}</span>
                <span className="text-xs bg-green-500/30 text-green-100 px-2 py-0.5 rounded font-semibold">
                  ✅ {scheme.benefit}
                </span>
                <span className="text-xs text-blue-200">Launched: {scheme.launchYear}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <AdTopBanner />

      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* ── Main article ────────────────────────────────────── */}
          <article className="flex-1 min-w-0">

            {/* Overview summary table — CRITICAL for Google Featured Snippets */}
            <div className="mb-6">
              <h2 className="text-base font-bold text-gray-900 mb-3 section-heading">
                {scheme.shortTitle} — Quick Overview
              </h2>
              <div className="overflow-x-auto">
                <table className="scheme-summary-table">
                  <tbody>
                    <tr><td>Scheme Name</td><td>{scheme.title}</td></tr>
                    <tr><td>Launched By</td><td>Government of India</td></tr>
                    <tr><td>Launch Year</td><td>{scheme.launchYear}</td></tr>
                    <tr><td>Benefit</td><td>{scheme.benefit}</td></tr>
                    <tr><td>Category</td><td>{cat?.label}</td></tr>
                    <tr><td>Official Portal</td><td><a href={scheme.applyLink} target="_blank" rel="noopener noreferrer" className="text-[#1A3C6E] hover:underline">{scheme.applyLink}</a></td></tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* What is section */}
            <section className="mb-6">
              <h2 className="text-base font-bold text-gray-900 mb-3 section-heading">
                What is {scheme.shortTitle}?
              </h2>
              <p className="text-gray-700 leading-relaxed text-sm">{scheme.description}</p>
              <p className="text-gray-700 leading-relaxed text-sm mt-3">
                Under this scheme, eligible beneficiaries receive <strong>{scheme.benefit}</strong>. The scheme was launched in {scheme.launchYear} and is implemented by the Government of India.
              </p>
            </section>

            {/* Benefits */}
            <section className="bg-green-50 border border-green-200 rounded-xl p-4 mb-6">
              <h2 className="text-base font-bold text-gray-900 mb-3">
                ✅ Benefits of {scheme.shortTitle}
              </h2>
              <div className="text-sm text-gray-700 font-semibold text-[#128807] leading-relaxed">
                {scheme.benefit}
              </div>
            </section>

            {/* Eligibility */}
            <section className="mb-6">
              <h2 className="text-base font-bold text-gray-900 mb-3 section-heading">
                Who is Eligible for {scheme.shortTitle}?
              </h2>
              <ul className="space-y-2">
                {scheme.eligibility.map((e, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                    <span className="text-[#128807] font-bold mt-0.5 shrink-0">✓</span>
                    {e}
                  </li>
                ))}
              </ul>
            </section>

            <AdMidContent />

            {/* Documents */}
            <section className="mb-6">
              <h2 className="text-base font-bold text-gray-900 mb-3 section-heading">
                Documents Required for {scheme.shortTitle}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {scheme.documents.map((doc, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm text-gray-700 bg-gray-50 border border-gray-200 rounded-lg px-3 py-2">
                    <span className="text-[#FF6B00]">📄</span> {doc}
                  </div>
                ))}
              </div>
            </section>

            {/* How to apply */}
            <section className="mb-6">
              <h2 className="text-base font-bold text-gray-900 mb-3 section-heading">
                How to Apply for {scheme.shortTitle} Online?
              </h2>
              <ol className="space-y-3">
                {[
                  `Visit the official portal at ${scheme.applyLink}`,
                  "Click on 'Apply Now' or 'Register' button on the homepage",
                  "Enter your Aadhaar-linked mobile number and verify OTP",
                  "Fill in the online application form with required details",
                  "Upload the required documents (Aadhaar, bank passbook, etc.)",
                  "Review all details and submit the application",
                  "Note down the application/reference number for future tracking",
                  "Wait for verification and approval from the concerned authority",
                ].map((step, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-gray-700">
                    <span className="bg-[#1A3C6E] text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                      {i + 1}
                    </span>
                    {step}
                  </li>
                ))}
              </ol>

              <a
                href={scheme.applyLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-4 bg-[#128807] hover:bg-[#0E6B05] text-white font-semibold px-5 py-2.5 rounded-lg text-sm transition-colors"
              >
                Apply on Official Portal ↗
              </a>
            </section>

            {/* FAQ — CRITICAL for Google Featured Snippets */}
            <section className="mb-6">
              <h2 className="text-base font-bold text-gray-900 mb-3 section-heading">
                Frequently Asked Questions — {scheme.shortTitle}
              </h2>
              <FaqAccordion faqs={scheme.faqs} />
            </section>

            <AdEndArticle />

            {/* Related schemes */}
            {relatedSchemes.length > 0 && (
              <section className="mt-6">
                <h2 className="text-base font-bold text-gray-900 mb-4 section-heading">
                  Related {cat?.label} Schemes
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {relatedSchemes.map((s) => (
                    <SchemeCard key={s.slug} scheme={s} href={`/central/${s.slug}`} />
                  ))}
                </div>
              </section>
            )}
          </article>

          {/* ── Sidebar ─────────────────────────────────────────── */}
          <aside className="hidden lg:block w-[300px] shrink-0">
            <AdSidebar />

            <div className="mt-5 border border-gray-200 rounded-xl p-4">
              <h3 className="font-bold text-gray-900 mb-3 text-sm section-heading">All Central Schemes</h3>
              <ul className="space-y-2">
                {centralSchemes.map((s) => (
                  <li key={s.slug}>
                    <Link
                      href={`/central/${s.slug}`}
                      className={`text-sm flex items-start gap-1.5 ${s.slug === scheme.slug ? "text-[#1A3C6E] font-semibold" : "text-gray-600 hover:text-[#1A3C6E]"}`}
                    >
                      <span className="shrink-0 mt-0.5">{s.slug === scheme.slug ? "▶" : "›"}</span>
                      <span className="line-clamp-2">{s.title}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
}

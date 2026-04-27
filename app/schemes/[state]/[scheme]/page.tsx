import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Script from "next/script";
import { states, getSchemesByState, categories } from "@/lib/schemes-data";
import { AdTopBanner, AdMidContent, AdEndArticle, AdSidebar } from "@/components/AdUnit";
import Breadcrumb from "@/components/Breadcrumb";
import FaqAccordion from "@/components/FaqAccordion";

interface Props {
  params: { state: string; scheme: string };
}

export async function generateStaticParams() {
  const paths: { state: string; scheme: string }[] = [];
  for (const state of states) {
    const schemes = getSchemesByState(state.slug);
    for (const scheme of schemes) {
      paths.push({ state: state.slug, scheme: scheme.slug });
    }
  }
  return paths;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const state = states.find((s) => s.slug === params.state);
  const schemes = getSchemesByState(params.state);
  const scheme = schemes.find((s) => s.slug === params.scheme);
  if (!state || !scheme) return {};

  return {
    title: `${scheme.title} — ${state.name} | Eligibility & Registration`,
    description: `Complete guide to ${scheme.title} in ${state.name}: eligibility, online registration process, required documents, and benefits. ${scheme.benefit}.`,
    keywords: [...scheme.keywords, `${state.name} schemes`, `${state.name.toLowerCase()} yojana`],
    alternates: { canonical: `https://schemesindia.in/schemes/${params.state}/${params.scheme}` },
  };
}

export default function StateSchemeDetailPage({ params }: Props) {
  const state = states.find((s) => s.slug === params.state);
  const schemes = getSchemesByState(params.state);
  const scheme = schemes.find((s) => s.slug === params.scheme);
  if (!state || !scheme) notFound();

  const cat = categories.find((c) => c.slug === scheme.category);

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
      { "@type": "ListItem", position: 2, name: "States", item: "https://schemesindia.in/states" },
      { "@type": "ListItem", position: 3, name: state.name, item: `https://schemesindia.in/schemes/${params.state}` },
      { "@type": "ListItem", position: 4, name: scheme.shortTitle },
    ],
  };

  return (
    <>
      <Script id="faq-schema" type="application/ld+json" strategy="beforeInteractive">
        {JSON.stringify(faqSchema)}
      </Script>
      <Script id="breadcrumb-schema" type="application/ld+json" strategy="beforeInteractive">
        {JSON.stringify(breadcrumbSchema)}
      </Script>

      {/* Hero */}
      <div className="bg-gradient-to-r from-[#1A3C6E] to-[#1E4D8C] text-white py-6 px-4">
        <div className="max-w-7xl mx-auto">
          <Breadcrumb items={[
            { label: "Home", href: "/" },
            { label: "States", href: "/states" },
            { label: state.name, href: `/schemes/${params.state}` },
            { label: scheme.shortTitle },
          ]} />
          <div className="mt-3 flex items-start gap-3">
            <span className="text-3xl mt-1 shrink-0">{state.icon}</span>
            <div>
              <h1 className="text-xl md:text-2xl font-bold leading-tight">{scheme.title}</h1>
              <div className="flex items-center gap-2 mt-2 flex-wrap">
                <span className="text-xs bg-white/20 px-2 py-0.5 rounded">{state.name}</span>
                <span className="text-xs bg-green-500/30 text-green-100 px-2 py-0.5 rounded font-semibold">
                  ✅ {scheme.benefit}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <AdTopBanner />

      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex flex-col lg:flex-row gap-6">
          <article className="flex-1 min-w-0">
            {/* Summary table */}
            <div className="mb-6">
              <h2 className="text-base font-bold text-gray-900 mb-3 section-heading">Quick Overview</h2>
              <div className="overflow-x-auto">
                <table className="scheme-summary-table">
                  <tbody>
                    <tr><td>Scheme Name</td><td>{scheme.title}</td></tr>
                    <tr><td>State</td><td>{state.name} ({state.hindiName})</td></tr>
                    <tr><td>Launch Year</td><td>{scheme.launchYear}</td></tr>
                    <tr><td>Benefit</td><td>{scheme.benefit}</td></tr>
                    <tr><td>Category</td><td>{cat?.label}</td></tr>
                    <tr><td>Apply Online</td><td><a href={scheme.applyLink} target="_blank" rel="noopener noreferrer" className="text-[#1A3C6E] hover:underline">{scheme.applyLink}</a></td></tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Description */}
            <section className="mb-6">
              <h2 className="text-base font-bold text-gray-900 mb-3 section-heading">
                What is {scheme.shortTitle}?
              </h2>
              <p className="text-gray-700 leading-relaxed text-sm">{scheme.description}</p>
            </section>

            {/* Eligibility */}
            <section className="mb-6">
              <h2 className="text-base font-bold text-gray-900 mb-3 section-heading">Eligibility Criteria</h2>
              <ul className="space-y-2">
                {scheme.eligibility.map((e, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                    <span className="text-[#128807] font-bold mt-0.5 shrink-0">✓</span> {e}
                  </li>
                ))}
              </ul>
            </section>

            <AdMidContent />

            {/* Documents */}
            <section className="mb-6">
              <h2 className="text-base font-bold text-gray-900 mb-3 section-heading">Documents Required</h2>
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
              <h2 className="text-base font-bold text-gray-900 mb-3 section-heading">How to Apply</h2>
              <ol className="space-y-3">
                {[
                  `Visit the official portal: ${scheme.applyLink}`,
                  "Register using your Aadhaar-linked mobile number",
                  "Fill in the application form with personal and bank details",
                  "Upload required documents",
                  "Submit the application and note down reference number",
                  "Track application status on the official portal",
                ].map((step, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-gray-700">
                    <span className="bg-[#1A3C6E] text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                      {i + 1}
                    </span>
                    {step}
                  </li>
                ))}
              </ol>
              <a href={scheme.applyLink} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-4 bg-[#128807] hover:bg-[#0E6B05] text-white font-semibold px-5 py-2.5 rounded-lg text-sm transition-colors">
                Apply on Official Portal ↗
              </a>
            </section>

            {/* FAQ */}
            <section className="mb-6">
              <h2 className="text-base font-bold text-gray-900 mb-3 section-heading">
                Frequently Asked Questions
              </h2>
              <FaqAccordion faqs={scheme.faqs} />
            </section>

            <AdEndArticle />
          </article>

          {/* Sidebar */}
          <aside className="hidden lg:block w-[300px] shrink-0">
            <AdSidebar />
            <div className="mt-5 border border-gray-200 rounded-xl p-4">
              <h3 className="font-bold text-gray-900 mb-3 text-sm">More {state.name} Schemes</h3>
              <ul className="space-y-2">
                {schemes.filter((s) => s.slug !== params.scheme).map((s) => (
                  <li key={s.slug}>
                    <Link href={`/schemes/${params.state}/${s.slug}`}
                      className="text-sm text-gray-600 hover:text-[#1A3C6E] flex items-start gap-1.5">
                      <span className="shrink-0 mt-0.5">›</span>
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

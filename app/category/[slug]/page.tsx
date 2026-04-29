import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { centralSchemes, categories } from "@/lib/schemes-data";
import { AdTopBanner, AdMidContent, AdEndArticle } from "@/components/AdUnit";
import SchemeCard from "@/components/SchemeCard";

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return categories.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const cat = categories.find((c) => c.slug === params.slug);
  if (!cat) return {};
  return {
    title: `${cat.label} Government Schemes India 2025 — Complete Yojana List`,
    description: `Complete list of all ${cat.label.toLowerCase()} government schemes in India 2025. Check eligibility, required documents, benefits and apply online for ${cat.label.toLowerCase()} yojanas.`,
    alternates: { canonical: `https://schemesindia.in/category/${params.slug}` },
  };
}

export default function CategoryPage({ params }: Props) {
  const cat = categories.find((c) => c.slug === params.slug);
  if (!cat) notFound();

  const schemes = centralSchemes.filter((s) => s.category === params.slug);

  return (
    <>
      <div className="bg-gradient-to-r from-[#1A3C6E] to-[#1E4D8C] text-white py-6 px-4">
        <div className="max-w-7xl mx-auto">
          <nav className="text-xs text-blue-200 mb-2">
            <Link href="/" className="hover:text-white">Home</Link>
            {" › "}
            <Link href="/central" className="hover:text-white">Central Schemes</Link>
            {" › "}
            {cat.label}
          </nav>
          <h1 className="text-xl md:text-2xl font-bold mt-1">
            {cat.icon} {cat.label} Government Schemes 2025
          </h1>
          <p className="text-blue-200 text-sm mt-1">
            {schemes.length} scheme{schemes.length !== 1 ? "s" : ""} — eligibility, registration &amp; benefits
          </p>
        </div>
      </div>

      <AdTopBanner />

      <div className="max-w-7xl mx-auto px-4 py-6">
        {/* Other categories */}
        <div className="flex gap-2 flex-wrap mb-6">
          {categories.map((c) => (
            <Link
              key={c.slug}
              href={`/category/${c.slug}`}
              className={`category-badge border transition-all ${
                c.slug === params.slug
                  ? "text-white border-transparent"
                  : "border-gray-200 text-gray-600 hover:border-[#1A3C6E]"
              }`}
              style={
                c.slug === params.slug
                  ? { background: cat.color, borderColor: cat.color }
                  : { background: c.color + "12" }
              }
            >
              {c.icon} {c.label}
            </Link>
          ))}
        </div>

        {schemes.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-5xl mb-4">{cat.icon}</p>
            <p className="text-gray-600 font-medium text-lg">No schemes listed yet for {cat.label}</p>
            <p className="text-gray-400 text-sm mt-2">Check back soon — we update regularly.</p>
            <Link href="/central" className="mt-5 inline-block bg-[#1A3C6E] text-white px-5 py-2 rounded-lg text-sm font-medium hover:bg-[#15305A]">
              View All Central Schemes
            </Link>
          </div>
        ) : (
          <>
            <section className="mb-8">
              <h2 className="text-lg font-bold text-gray-900 mb-4 section-heading">
                All {cat.label} Schemes ({schemes.length})
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {schemes.map((scheme) => (
                  <SchemeCard key={scheme.slug} scheme={scheme} href={`/central/${scheme.slug}`} />
                ))}
              </div>
            </section>

            <AdMidContent />

            {/* SEO text */}
            <div className="bg-gray-50 rounded-xl border border-gray-200 p-5 mt-6">
              <h2 className="text-base font-bold text-gray-900 mb-2">
                About {cat.label} Schemes in India
              </h2>
              <p className="text-sm text-gray-600 leading-relaxed">
                The Government of India runs several welfare schemes under the {cat.label.toLowerCase()} category
                to support citizens across all states. These schemes provide financial assistance, subsidies,
                training, and other benefits to eligible beneficiaries. All residents of India can apply for
                central government {cat.label.toLowerCase()} schemes by meeting the required eligibility criteria
                and submitting the necessary documents.
              </p>
            </div>
          </>
        )}

        <AdEndArticle />
      </div>
    </>
  );
}

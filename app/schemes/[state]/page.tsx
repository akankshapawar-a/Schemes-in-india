import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { states, centralSchemes, getSchemesByState, categories } from "@/lib/schemes-data";
import { AdTopBanner, AdMidContent, AdEndArticle, AdSidebar } from "@/components/AdUnit";
import SchemeCard from "@/components/SchemeCard";
import Breadcrumb from "@/components/Breadcrumb";

interface Props {
  params: { state: string };
}

export async function generateStaticParams() {
  return states.map((s) => ({ state: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const state = states.find((s) => s.slug === params.state);
  if (!state) return {};
  return {
    title: `${state.name} Government Schemes 2025 — Complete Yojana List`,
    description: `Get the complete list of ${state.name} state government schemes 2025 — eligibility, registration, documents required and benefits. ${state.totalSchemes}+ schemes for residents of ${state.name}.`,
    keywords: [`${state.name} government schemes`, `${state.name} yojana list 2025`, `${state.name.toLowerCase()} sarkari yojana`, `${state.name} state schemes apply`],
    alternates: { canonical: `https://schemesindia.in/schemes/${state.slug}` },
    openGraph: {
      title: `${state.name} Government Schemes 2025`,
      description: `${state.totalSchemes}+ state and central government schemes for ${state.name} residents.`,
    },
  };
}

export default function StateSchemesPage({ params }: Props) {
  const state = states.find((s) => s.slug === params.state);
  if (!state) notFound();

  const stateSchemes = getSchemesByState(params.state);
  // Show state schemes + relevant central schemes
  const allSchemes = [...stateSchemes, ...centralSchemes];

  return (
    <>
      {/* Page hero */}
      <div className="bg-gradient-to-r from-[#1A3C6E] to-[#1E4D8C] text-white py-6 px-4">
        <div className="max-w-7xl mx-auto">
          <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "States", href: "/states" }, { label: state.name }]} />
          <h1 className="text-xl md:text-2xl font-bold mt-2">
            {state.icon} {state.name} Government Schemes 2025
          </h1>
          <p className="text-blue-200 text-sm mt-1">
            {state.hindiName} • Capital: {state.capital} • Population: {state.population} • {state.totalSchemes}+ schemes
          </p>
        </div>
      </div>

      <AdTopBanner />

      <div className="max-w-7xl mx-auto px-4 py-6">
        {/* Summary table */}
        <div className="overflow-x-auto mb-6">
          <table className="scheme-summary-table">
            <tbody>
              <tr><td>State</td><td>{state.name} ({state.hindiName})</td></tr>
              <tr><td>Capital</td><td>{state.capital}</td></tr>
              <tr><td>Population</td><td>{state.population}</td></tr>
              <tr><td>Total Schemes Listed</td><td>{state.totalSchemes}+</td></tr>
              <tr><td>Central Schemes Available</td><td>All central government schemes apply</td></tr>
            </tbody>
          </table>
        </div>

        <div className="flex flex-col lg:flex-row gap-6">
          <div className="flex-1 min-w-0">
            {/* State-specific schemes */}
            {stateSchemes.length > 0 && (
              <section className="mb-8">
                <h2 className="text-lg font-bold mb-4 section-heading">
                  🏛️ {state.name} State Government Schemes
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {stateSchemes.map((s) => (
                    <SchemeCard key={s.slug} scheme={s} href={`/schemes/${params.state}/${s.slug}`} />
                  ))}
                </div>
              </section>
            )}

            <AdMidContent />

            {/* Central schemes also applicable */}
            <section className="mb-8">
              <h2 className="text-lg font-bold mb-4 section-heading">
                🇮🇳 Central Government Schemes for {state.name} Residents
              </h2>
              <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                All central government schemes launched by the Government of India are applicable to residents of {state.name}. Here are the most popular central schemes you can apply for:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {centralSchemes.map((s) => (
                  <SchemeCard key={s.slug} scheme={s} href={`/central/${s.slug}`} />
                ))}
              </div>
            </section>

            {/* Category filter */}
            <section className="mb-8">
              <h2 className="text-lg font-bold mb-4 section-heading">Browse {state.name} Schemes by Category</h2>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {categories.map((cat) => (
                  <Link
                    key={cat.slug}
                    href={`/schemes/${params.state}?category=${cat.slug}`}
                    className="flex items-center gap-2 p-3 border border-gray-200 rounded-xl hover:border-[#1A3C6E] hover:bg-blue-50 transition-all"
                  >
                    <span className="text-xl">{cat.icon}</span>
                    <span className="text-sm font-medium text-gray-700">{cat.label}</span>
                  </Link>
                ))}
              </div>
            </section>

            <AdEndArticle />
          </div>

          {/* Sidebar */}
          <aside className="hidden lg:block w-[300px] shrink-0">
            <AdSidebar />
            <div className="mt-5 border border-gray-200 rounded-xl p-4">
              <h3 className="font-bold text-gray-900 mb-3 text-sm">Other States</h3>
              <ul className="space-y-1.5">
                {states.filter((s) => s.slug !== params.state).slice(0, 12).map((s) => (
                  <li key={s.slug}>
                    <Link href={`/schemes/${s.slug}`} className="text-sm text-gray-600 hover:text-[#1A3C6E] flex items-center gap-1.5">
                      <span>{s.icon}</span> {s.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </div>

      {/* SEO text block */}
      <div className="bg-gray-50 border-t border-gray-200 py-8 px-4">
        <div className="max-w-4xl mx-auto prose prose-sm text-gray-600">
          <h2 className="text-base font-bold text-gray-900 mb-3">
            About {state.name} Government Schemes
          </h2>
          <p>
            {state.name} residents can avail of both state government schemes and all central government schemes launched by the Government of India.
            The state government regularly launches welfare schemes covering agriculture, education, health, housing, women empowerment, and employment.
          </p>
          <p className="mt-3">
            Popular central schemes like PM Vishwakarma Yojana, PM Kisan Samman Nidhi, Ayushman Bharat, and PM Awas Yojana are fully applicable to residents of {state.name}.
            State-specific schemes like {stateSchemes.length > 0 ? stateSchemes[0].shortTitle : "various welfare yojanas"} provide additional benefits exclusive to {state.name} residents.
          </p>
        </div>
      </div>
    </>
  );
}

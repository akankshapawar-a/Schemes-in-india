import type { Metadata } from "next";
import Link from "next/link";
import { states } from "@/lib/schemes-data";
import { AdTopBanner, AdMidContent, AdEndArticle } from "@/components/AdUnit";

export const metadata: Metadata = {
  title: "State Wise Government Schemes 2025 — All 28 States & UTs",
  description:
    "Find government schemes by state — Maharashtra, Uttar Pradesh, Rajasthan, Bihar, Gujarat and all 28 states. State-specific yojana list with eligibility and registration details.",
  alternates: { canonical: "https://schemesindia.in/states" },
};

export default function StatesPage() {
  return (
    <>
      <div className="bg-gradient-to-r from-[#1A3C6E] to-[#1E4D8C] text-white py-6 px-4">
        <div className="max-w-7xl mx-auto">
          <nav className="text-xs text-blue-200 mb-2">
            <Link href="/" className="hover:text-white">Home</Link> › States
          </nav>
          <h1 className="text-xl md:text-2xl font-bold">
            🗺️ State Wise Government Schemes 2025
          </h1>
          <p className="text-blue-200 text-sm mt-1">
            Select your state to see all applicable state & central government schemes
          </p>
        </div>
      </div>

      <AdTopBanner />

      <div className="max-w-7xl mx-auto px-4 py-6">
        <p className="text-sm text-gray-600 mb-6 leading-relaxed">
          Every Indian state has its own set of welfare schemes in addition to central government schemes. Select your state below to see the complete list of schemes available for residents, including eligibility criteria, registration process, and benefits.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mb-8">
          {states.map((state, i) => (
            <>
              <Link
                key={state.slug}
                href={`/schemes/${state.slug}`}
                className="scheme-card flex flex-col items-center gap-2 p-4 border border-gray-200 rounded-xl hover:border-[#1A3C6E] hover:bg-blue-50/50 bg-white text-center group"
              >
                <span className="text-3xl">{state.icon}</span>
                <div>
                  <p className="text-sm font-semibold text-gray-900 group-hover:text-[#1A3C6E]">{state.name}</p>
                  <p className="text-xs text-gray-500">{state.hindiName}</p>
                  <p className="text-xs text-[#128807] font-medium mt-1">{state.totalSchemes} Schemes</p>
                </div>
              </Link>
              {i === 9 && <div key="ad-mid" className="col-span-full"><AdMidContent /></div>}
            </>
          ))}
        </div>

        {/* SEO text */}
        <div className="bg-gray-50 rounded-xl p-5 border border-gray-200">
          <h2 className="text-base font-bold text-gray-900 mb-3 section-heading">
            About State Government Schemes in India
          </h2>
          <div className="text-sm text-gray-600 leading-relaxed space-y-3">
            <p>
              India's federal structure allows state governments to launch their own welfare schemes targeting specific needs of their residents. These state schemes work alongside central government schemes to provide comprehensive support in areas like agriculture, health, education, housing, and women empowerment.
            </p>
            <p>
              Popular state schemes include Maharashtra's Ladki Bahin Yojana, Madhya Pradesh's Ladli Bahna Yojana, Rajasthan's Chiranjeevi Health Insurance, UP's Kanya Sumangala Yojana, and many more. All residents also remain eligible for central schemes like PM Vishwakarma, PM Kisan, Ayushman Bharat, and PM Awas Yojana.
            </p>
          </div>
        </div>

        <AdEndArticle />
      </div>
    </>
  );
}

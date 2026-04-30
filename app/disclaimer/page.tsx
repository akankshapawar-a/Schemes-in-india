import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Disclaimer — Schemes In India",
  description: "Disclaimer for SchemesinIndia.in — this is an independent information portal, not affiliated with any government.",
  alternates: { canonical: "https://schemesindia.in/disclaimer" },
};

export default function DisclaimerPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-xs text-gray-500 mb-6">
        <Link href="/" className="hover:text-[#1A3C6E]">Home</Link> › Disclaimer
      </nav>
      <h1 className="text-2xl font-bold text-gray-900 mb-2">Disclaimer</h1>
      <p className="text-xs text-gray-400 mb-8">Last updated: April 2025</p>

      <div className="prose-article space-y-5 text-sm text-gray-700 leading-relaxed">
        <div className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl">
          <p className="font-bold text-amber-800">
            Schemes In India is NOT affiliated with, endorsed by, or connected to any Indian government body,
            ministry, or department.
          </p>
        </div>
        <h2>Information Purpose Only</h2>
        <p>
          All content on schemesindia.in is provided for general information and educational purposes only.
          While we strive to keep information accurate and up to date, we make no representations or warranties
          of any kind about the completeness, accuracy, reliability, or suitability of the information.
        </p>
        <h2>Always Verify on Official Portals</h2>
        <p>
          Government scheme details — eligibility criteria, benefit amounts, application deadlines, and
          document requirements — can change at any time. Always verify the latest details on the official
          government portal before applying. We provide links to official portals on every scheme page.
        </p>
        <h2>No Application Processing</h2>
        <p>
          We do not process applications, accept documents, or have access to any government database.
          We cannot check your application status, payment status, or beneficiary eligibility. Please use
          the official portals or contact your nearest government office for these.
        </p>
        <h2>External Links</h2>
        <p>
          Links to official government portals and other websites are provided as a convenience. We have
          no control over the nature, content, and availability of those sites.
        </p>
        <h2>Advertising</h2>
        <p>
          This website displays advertisements via Google AdSense. These are clearly labelled as
          "Advertisement". We do not endorse any advertised products or services.
        </p>
      </div>
    </div>
  );
}

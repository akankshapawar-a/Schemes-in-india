import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy — Schemes In India",
  description: "Privacy Policy for SchemesinIndia.in — how we collect, use, and protect your data.",
  alternates: { canonical: "https://schemesindia.in/privacy-policy" },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-xs text-gray-500 mb-6">
        <Link href="/" className="hover:text-[#1A3C6E]">Home</Link> › Privacy Policy
      </nav>
      <h1 className="text-2xl font-bold text-gray-900 mb-2">Privacy Policy</h1>
      <p className="text-xs text-gray-400 mb-8">Last updated: April 2025</p>

      <div className="prose-article space-y-5 text-sm text-gray-700 leading-relaxed">
        <p>
          This Privacy Policy describes how Schemes In India (<strong>schemesindia.in</strong>, "we", "us", or "our")
          collects, uses, and shares information when you visit our website.
        </p>
        <h2>Information We Collect</h2>
        <p>
          We do not require you to create an account or submit personal information to use this website.
          We automatically collect standard web analytics data including pages visited, time spent, browser type,
          and approximate geographic location through Google Analytics. This data is aggregated and anonymised.
        </p>
        <h2>Cookies</h2>
        <p>
          We use cookies for Google Analytics and, once activated, Google AdSense. Google Analytics cookies
          help us understand how visitors use the site. AdSense cookies allow Google to show relevant
          advertisements. You can opt out of Google Analytics using the
          <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="text-[#1A3C6E] underline"> Google Analytics Opt-out Browser Add-on</a>.
        </p>
        <h2>Google AdSense & Third-Party Advertising</h2>
        <p>
          We use Google AdSense to display advertisements. Google may use cookies to serve ads based on a
          user's prior visits to our website and other websites. You may opt out of personalised advertising
          at <a href="https://www.google.com/settings/ads" className="text-[#1A3C6E] underline" target="_blank" rel="noopener noreferrer">google.com/settings/ads</a>.
        </p>
        <h2>External Links</h2>
        <p>
          Our website contains links to official government portals and third-party websites. We are not
          responsible for the privacy practices or content of those external sites.
        </p>
        <h2>Data Security</h2>
        <p>
          We do not store personal user data on our servers. All analytics data is processed by Google
          Analytics under their privacy policy.
        </p>
        <h2>Children's Privacy</h2>
        <p>
          Our website is a general information resource and is not directed at children under 13.
          We do not knowingly collect personal data from children.
        </p>
        <h2>Changes to This Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. Changes will be posted on this page with
          an updated "Last updated" date.
        </p>
        <h2>Contact</h2>
        <p>
          For privacy-related questions, contact us at <a href="mailto:contact@schemesindia.in" className="text-[#1A3C6E] underline">contact@schemesindia.in</a>.
        </p>
      </div>
    </div>
  );
}

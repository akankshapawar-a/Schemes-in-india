import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact Us — Schemes In India",
  description: "Contact the Schemes In India team for corrections, scheme update requests, or general enquiries.",
  alternates: { canonical: "https://schemesindia.in/contact" },
};

export default function ContactPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-10">
      <nav className="text-xs text-gray-500 mb-6">
        <Link href="/" className="hover:text-[#1A3C6E]">Home</Link> › Contact
      </nav>
      <h1 className="text-2xl font-bold text-gray-900 mb-2 section-heading">Contact Us</h1>
      <p className="text-sm text-gray-500 mb-8">We aim to respond within 48 hours.</p>

      <div className="space-y-5">
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
          <h2 className="font-bold text-gray-900 text-sm mb-1">📧 Email Us</h2>
          <p className="text-sm text-gray-600">
            For corrections, new scheme additions, or business enquiries:
          </p>
          <a href="mailto:contact@schemesindia.in" className="text-[#1A3C6E] font-semibold text-sm underline mt-1 block">
            contact@schemesindia.in
          </a>
        </div>

        <div className="bg-orange-50 border border-orange-200 rounded-xl p-4">
          <h2 className="font-bold text-gray-900 text-sm mb-1">⚠️ Reporting Incorrect Information</h2>
          <p className="text-sm text-gray-600 leading-relaxed">
            If you find outdated or incorrect information about any scheme, please email us with the scheme name,
            the incorrect detail, and the correct information with a source link. We will update it within 24 hours.
          </p>
        </div>

        <div className="bg-gray-50 border border-gray-200 rounded-xl p-4">
          <h2 className="font-bold text-gray-900 text-sm mb-1">🚫 We Cannot Help With</h2>
          <ul className="text-sm text-gray-600 space-y-1 mt-2">
            <li>• Processing your actual scheme application (contact the official portal)</li>
            <li>• Checking your payment status (visit the official scheme website)</li>
            <li>• Government complaints or grievances (contact <a href="https://pgportal.gov.in" className="text-[#1A3C6E] underline" target="_blank" rel="noopener noreferrer">pgportal.gov.in</a>)</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

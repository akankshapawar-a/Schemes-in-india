import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us — Schemes In India",
  description: "About Schemes In India — your trusted guide to all central and state government schemes, yojanas, and welfare programmes in India.",
  alternates: { canonical: "https://schemesindia.in/about" },
};

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-xs text-gray-500 mb-6">
        <Link href="/" className="hover:text-[#1A3C6E]">Home</Link> › About Us
      </nav>
      <h1 className="text-2xl font-bold text-gray-900 mb-6 section-heading">About Schemes In India</h1>

      <div className="prose-article space-y-5 text-sm text-gray-700 leading-relaxed">
        <p>
          <strong>Schemes In India (schemesindia.in)</strong> is a free, independent information portal dedicated to
          helping Indian citizens understand, find, and apply for government schemes and welfare programmes run by
          the central government and all state governments.
        </p>
        <h2>Our Mission</h2>
        <p>
          Millions of Indians miss out on benefits they are entitled to — simply because they don't know the scheme
          exists, don't understand the eligibility, or don't know how to apply. We exist to change that. Our goal
          is to make government scheme information accessible, accurate, and easy to understand for every Indian
          — regardless of education level or internet experience.
        </p>
        <h2>What We Cover</h2>
        <ul>
          <li>All central government schemes — PM Kisan, Ayushman Bharat, PM Awas Yojana, PM Vishwakarma, and 500+ more</li>
          <li>State-specific schemes from all 28 states and union territories</li>
          <li>Latest updates — installment dates, new scheme launches, beneficiary lists</li>
          <li>Step-by-step application guides and document checklists</li>
          <li>FAQs and eligibility details in simple language</li>
        </ul>
        <h2>Important Disclaimer</h2>
        <p>
          Schemes In India is <strong>not affiliated with any government body</strong>. We are an independent
          information platform. All information on this website is provided for reference and educational purposes
          only. Always verify information on the official government portals before making any application or
          financial decision.
        </p>
        <h2>Contact Us</h2>
        <p>
          Have a correction, suggestion, or question? <Link href="/contact" className="text-[#1A3C6E] underline">Contact us here</Link>.
        </p>
      </div>
    </div>
  );
}

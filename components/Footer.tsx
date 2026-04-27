import Link from "next/link";
import { states, categories } from "@/lib/schemes-data";

export default function Footer() {
  return (
    <footer className="bg-[#1A3C6E] text-white mt-12">
      <div className="max-w-7xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-2xl">🇮🇳</span>
              <div>
                <span className="text-lg font-bold leading-none block">Schemes In India</span>
                <span className="text-xs text-orange-300 font-medium">Your Government Scheme Guide</span>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Trusted guide to all Indian government schemes. Get complete information on eligibility, registration, and benefits for 500+ yojanas.
            </p>
          </div>

          {/* Popular States */}
          <div>
            <h3 className="font-semibold text-orange-300 mb-3 text-sm uppercase tracking-wide">Popular States</h3>
            <ul className="space-y-1.5">
              {states.slice(0, 8).map((s) => (
                <li key={s.slug}>
                  <Link href={`/schemes/${s.slug}`} className="text-gray-300 hover:text-white text-sm transition-colors">
                    {s.name} Schemes
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="font-semibold text-orange-300 mb-3 text-sm uppercase tracking-wide">By Category</h3>
            <ul className="space-y-1.5">
              {categories.map((c) => (
                <li key={c.slug}>
                  <Link href={`/category/${c.slug}`} className="text-gray-300 hover:text-white text-sm transition-colors flex items-center gap-1.5">
                    <span>{c.icon}</span> {c.label} Schemes
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Popular Schemes */}
          <div>
            <h3 className="font-semibold text-orange-300 mb-3 text-sm uppercase tracking-wide">Popular Schemes</h3>
            <ul className="space-y-1.5">
              {[
                { slug: "pm-vishwakarma-yojana", label: "PM Vishwakarma Yojana" },
                { slug: "pm-awas-yojana", label: "PM Awas Yojana" },
                { slug: "pm-kisan-samman-nidhi", label: "PM Kisan Yojana" },
                { slug: "ayushman-bharat-yojana", label: "Ayushman Bharat" },
                { slug: "pm-ujjwala-yojana", label: "PM Ujjwala Yojana" },
                { slug: "pm-yasasvi-scholarship", label: "PM YASASVI Scholarship" },
                { slug: "pm-svanidhi", label: "PM SVANidhi Scheme" },
                { slug: "pm-suraksha-bima-yojana", label: "PM Suraksha Bima" },
              ].map((s) => (
                <li key={s.slug}>
                  <Link href={`/central/${s.slug}`} className="text-gray-300 hover:text-white text-sm transition-colors">
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-blue-800 mt-8 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-400">
          <p>© 2025 SchemesinIndia.in — All rights reserved. Not affiliated with any government body.</p>
          <div className="flex gap-4">
            <Link href="/about" className="hover:text-white transition-colors">About</Link>
            <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/disclaimer" className="hover:text-white transition-colors">Disclaimer</Link>
            <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

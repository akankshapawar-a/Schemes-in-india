"use client";

import Link from "next/link";
import { useState } from "react";
import { categories } from "@/lib/schemes-data";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-40 shadow-sm">
      {/* Tricolor bar */}
      <div className="tricolor-bar" />

      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-14">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <span className="text-2xl">🇮🇳</span>
            <div>
              <span className="text-lg font-bold text-[#1A3C6E] leading-none block">Schemes</span>
              <span className="text-[11px] text-[#FF6B00] font-semibold tracking-wide leading-none">IN INDIA</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1 text-sm">
            <Link href="/" className="px-3 py-2 rounded hover:bg-gray-100 font-medium text-gray-700">Home</Link>
            <Link href="/schemes" className="px-3 py-2 rounded hover:bg-gray-100 font-medium text-gray-700">All Schemes</Link>
            <Link href="/states" className="px-3 py-2 rounded hover:bg-gray-100 font-medium text-gray-700">State Wise</Link>
            <Link href="/central" className="px-3 py-2 rounded hover:bg-gray-100 font-medium text-gray-700">Central Govt</Link>
            <Link href="/blog" className="px-3 py-2 rounded hover:bg-gray-100 font-medium text-[#FF6B00] flex items-center gap-1">
              <span className="text-xs">📰</span> Updates
            </Link>

            {/* Category dropdown */}
            <div className="relative group">
              <button className="px-3 py-2 rounded hover:bg-gray-100 font-medium text-gray-700 flex items-center gap-1">
                Categories <span className="text-xs">▾</span>
              </button>
              <div className="absolute top-full left-0 bg-white border border-gray-200 rounded-lg shadow-lg py-2 w-44 hidden group-hover:block z-50">
                {categories.map((cat) => (
                  <Link
                    key={cat.slug}
                    href={`/category/${cat.slug}`}
                    className="flex items-center gap-2 px-4 py-2 hover:bg-gray-50 text-gray-700 text-sm"
                  >
                    <span>{cat.icon}</span> {cat.label}
                  </Link>
                ))}
              </div>
            </div>
          </nav>

          {/* Search + Mobile menu */}
          <div className="flex items-center gap-2">
            <Link
              href="/search"
              className="flex items-center gap-1.5 bg-[#1A3C6E] text-white text-sm px-3 py-1.5 rounded-lg hover:bg-[#15305A] transition-colors"
            >
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <span className="hidden sm:inline">Search</span>
            </Link>
            <button
              className="md:hidden p-2 rounded hover:bg-gray-100"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden border-t border-gray-100 py-3 space-y-1">
            {[
              { href: "/", label: "Home" },
              { href: "/schemes", label: "All Schemes" },
              { href: "/states", label: "State Wise Schemes" },
              { href: "/central", label: "Central Government Schemes" },
              { href: "/blog", label: "📰 News & Updates" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block px-3 py-2 rounded hover:bg-gray-100 font-medium text-gray-700"
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="px-3 pt-2 pb-1">
              <p className="text-xs text-gray-500 font-semibold uppercase tracking-wide mb-1">Categories</p>
              <div className="grid grid-cols-2 gap-1">
                {categories.map((cat) => (
                  <Link
                    key={cat.slug}
                    href={`/category/${cat.slug}`}
                    className="flex items-center gap-1.5 py-1.5 text-sm text-gray-700"
                    onClick={() => setMenuOpen(false)}
                  >
                    <span>{cat.icon}</span> {cat.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { centralSchemes, categories } from "@/lib/schemes-data";

export default function SearchPage() {
  const [query, setQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const results = useMemo(() => {
    const q = query.toLowerCase().trim();
    return centralSchemes.filter((scheme) => {
      const matchesQuery =
        !q ||
        scheme.title.toLowerCase().includes(q) ||
        scheme.description.toLowerCase().includes(q) ||
        scheme.shortTitle.toLowerCase().includes(q) ||
        scheme.keywords.some((k) => k.toLowerCase().includes(q));
      const matchesCategory =
        selectedCategory === "all" || scheme.category === selectedCategory;
      return matchesQuery && matchesCategory;
    });
  }, [query, selectedCategory]);

  return (
    <>
      {/* Header */}
      <div className="bg-gradient-to-r from-[#1A3C6E] to-[#1E4D8C] text-white py-8 px-4">
        <div className="max-w-3xl mx-auto">
          <nav className="text-xs text-blue-200 mb-3">
            <Link href="/" className="hover:text-white">Home</Link> › Search
          </nav>
          <h1 className="text-xl md:text-2xl font-bold mb-4">
            🔍 Search Government Schemes
          </h1>
          {/* Search box */}
          <div className="relative">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search PM Kisan, Ayushman Bharat, housing schemes..."
              className="w-full px-4 py-3 pr-12 rounded-xl text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
              autoFocus
            />
            <svg
              className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-6">
        {/* Category filter */}
        <div className="flex gap-2 flex-wrap mb-6">
          <button
            onClick={() => setSelectedCategory("all")}
            className={`category-badge border transition-all ${
              selectedCategory === "all"
                ? "bg-[#1A3C6E] text-white border-[#1A3C6E]"
                : "border-gray-200 text-gray-600 hover:border-[#1A3C6E]"
            }`}
          >
            All Categories
          </button>
          {categories.map((cat) => (
            <button
              key={cat.slug}
              onClick={() => setSelectedCategory(cat.slug)}
              className={`category-badge border transition-all ${
                selectedCategory === cat.slug
                  ? "text-white border-transparent"
                  : "border-gray-200 text-gray-600 hover:border-[#1A3C6E]"
              }`}
              style={
                selectedCategory === cat.slug
                  ? { background: cat.color, borderColor: cat.color }
                  : { background: cat.color + "12" }
              }
            >
              {cat.icon} {cat.label}
            </button>
          ))}
        </div>

        {/* Results */}
        <p className="text-sm text-gray-500 mb-4">
          {query || selectedCategory !== "all"
            ? `${results.length} scheme${results.length !== 1 ? "s" : ""} found`
            : `Showing all ${centralSchemes.length} central schemes`}
        </p>

        {results.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-4xl mb-4">🔍</p>
            <p className="text-gray-600 font-medium">No schemes found for &quot;{query}&quot;</p>
            <p className="text-gray-400 text-sm mt-1">Try a different keyword like &quot;housing&quot;, &quot;farmer&quot;, or &quot;education&quot;</p>
            <button
              onClick={() => { setQuery(""); setSelectedCategory("all"); }}
              className="mt-4 text-[#1A3C6E] underline text-sm"
            >
              Clear search
            </button>
          </div>
        ) : (
          <div className="space-y-3">
            {results.map((scheme) => {
              const cat = categories.find((c) => c.slug === scheme.category);
              return (
                <Link
                  key={scheme.slug}
                  href={`/central/${scheme.slug}`}
                  className="flex items-start gap-3 p-4 border border-gray-200 rounded-xl hover:border-[#1A3C6E] hover:bg-blue-50/50 transition-all group block"
                >
                  <span className="text-2xl mt-0.5 shrink-0">{cat?.icon ?? "📋"}</span>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2 flex-wrap mb-1">
                      <h3 className="font-semibold text-gray-900 group-hover:text-[#1A3C6E] text-sm leading-snug">
                        {scheme.title}
                      </h3>
                      {scheme.isPopular && (
                        <span className="popular-badge text-[10px] px-1.5 py-0.5">🔥 Popular</span>
                      )}
                    </div>
                    <p className="text-xs text-gray-500 leading-relaxed line-clamp-2 mb-2">
                      {scheme.description}
                    </p>
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-xs font-semibold text-[#128807] bg-green-50 px-2 py-0.5 rounded">
                        ✅ {scheme.benefit}
                      </span>
                      <span
                        className="category-badge text-[10px] px-2 py-0.5"
                        style={{ background: cat?.color + "18", color: cat?.color }}
                      >
                        {cat?.label}
                      </span>
                    </div>
                  </div>
                  <span className="text-xs text-[#1A3C6E] font-medium shrink-0 mt-1">Details →</span>
                </Link>
              );
            })}
          </div>
        )}

        {/* Popular searches */}
        {!query && (
          <div className="mt-10 p-4 bg-gray-50 rounded-xl border border-gray-200">
            <p className="text-sm font-semibold text-gray-700 mb-3">🔥 Popular Searches</p>
            <div className="flex flex-wrap gap-2">
              {["PM Kisan", "Ayushman Bharat", "PM Awas", "PM Vishwakarma", "Ujjwala Yojana", "SVANidhi", "Scholarship", "Agriculture"].map((term) => (
                <button
                  key={term}
                  onClick={() => setQuery(term)}
                  className="px-3 py-1.5 bg-white border border-gray-200 rounded-full text-sm text-gray-700 hover:border-[#1A3C6E] hover:text-[#1A3C6E] transition-all"
                >
                  {term}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
}

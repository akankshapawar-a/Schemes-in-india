"use client";

import { useState } from "react";

interface Faq {
  q: string;
  a: string;
}

export default function FaqAccordion({ faqs }: { faqs: Faq[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="border border-gray-200 rounded-xl overflow-hidden">
      {faqs.map((faq, i) => (
        <div key={i} className="faq-item border-b border-gray-200 last:border-0 px-4">
          <button
            className="faq-question text-left w-full text-sm"
            onClick={() => setOpen(open === i ? null : i)}
            aria-expanded={open === i}
          >
            <span className="text-gray-900">{faq.q}</span>
            <span className="text-[#1A3C6E] text-lg shrink-0 ml-2">{open === i ? "−" : "+"}</span>
          </button>
          {open === i && (
            <div className="faq-answer text-sm">{faq.a}</div>
          )}
        </div>
      ))}
    </div>
  );
}

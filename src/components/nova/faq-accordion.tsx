"use client";

import { useState } from "react";
import { faqs } from "@/content/concierge";

export function FaqAccordion() {
  const [open, setOpen] = useState<string | null>(faqs[0].q);

  return (
    <div className="mt-[30px] rounded-[24px] bg-white p-9 max-[680px]:p-6">
      {faqs.map((faq) => {
        const isOpen = open === faq.q;
        return (
          <div key={faq.q} className="border-b border-nova-line last:border-b-0">
            <button
              type="button"
              aria-expanded={isOpen}
              onClick={() => setOpen(isOpen ? null : faq.q)}
              className={`flex w-full cursor-pointer items-center justify-between gap-4 border-0 bg-transparent py-[18px] text-left font-nova-display text-base font-medium transition-colors ${
                isOpen ? "text-coral" : "text-nova-ink"
              }`}
            >
              {faq.q}
              <span className={`text-base ${isOpen ? "text-coral" : "text-nova-muted-2"}`}>
                {isOpen ? "↗" : "↘"}
              </span>
            </button>
            {isOpen ? (
              <p className="mb-[18px] text-[13.5px] leading-[1.8] text-nova-muted">{faq.a}</p>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}

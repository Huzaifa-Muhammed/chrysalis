"use client";

import { useState } from "react";
import { benefitTabs, benefits, overviewBlocks, type BenefitTab } from "@/content/concierge";

export function BenefitsPanel() {
  const [tab, setTab] = useState<BenefitTab>("overview");
  const [open, setOpen] = useState<string | null>(null);
  const visible = benefits.filter((item) => item.tab === tab);

  return (
    <div className="rounded-[24px] bg-white p-9 max-[680px]:p-6">
      <div role="tablist" className="mb-[22px] flex flex-wrap gap-2">
        {benefitTabs.map((item) => (
          <button
            key={item.id}
            type="button"
            role="tab"
            aria-selected={tab === item.id}
            onClick={() => {
              setTab(item.id);
              setOpen(null);
            }}
            className={`inline-flex cursor-pointer items-center gap-[7px] rounded-full border-0 px-[18px] py-2.5 font-nova-display text-[12.5px] font-medium transition-all duration-200 ${
              tab === item.id
                ? "bg-coral text-white"
                : "bg-[#EDEBE8] text-nova-ink-2 hover:bg-[#e2dfdb]"
            }`}
          >
            {item.id !== "overview" ? (
              <span
                className={`text-[10px] ${tab === item.id ? "text-white/80" : "text-nova-muted-2"}`}
              >
                ✻
              </span>
            ) : null}
            {item.label}
          </button>
        ))}
      </div>

      {tab === "overview" ? (
        <div>
          <p className="font-nova-display text-[19px] leading-[1.3] text-nova-ink-2">
            A child should not have to navigate their education alone — and neither should their
            parents.
          </p>
          {overviewBlocks.map((block) => (
            <div key={block.k} className="mt-6 border-t border-nova-line pt-5">
              <span className="font-nova-display text-[11.5px] font-medium tracking-[2.2px] text-nova-muted-2 uppercase">
                {block.k}
              </span>
              <p className="mt-2.5 text-[13.5px] leading-[1.8] text-nova-muted">{block.body}</p>
            </div>
          ))}
        </div>
      ) : (
        <div>
          {visible.map((item) => {
            const isOpen = open === item.q;
            return (
              <div key={item.q} className="border-b border-nova-line last:border-b-0">
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => setOpen(isOpen ? null : item.q)}
                  className={`relative flex w-full cursor-pointer items-center justify-between gap-4 border-0 bg-transparent py-[18px] pr-0.5 text-left font-nova-display text-base font-medium transition-colors ${
                    isOpen ? "text-coral" : "text-nova-ink"
                  }`}
                >
                  {item.q}
                  <span className={`text-base ${isOpen ? "text-coral" : "text-nova-muted-2"}`}>
                    {isOpen ? "↗" : "↘"}
                  </span>
                </button>
                {isOpen ? (
                  item.list ? (
                    <ul className="mb-[18px] grid list-none grid-cols-2 gap-x-6 gap-y-2 p-0 max-[680px]:grid-cols-1">
                      {item.list.map((entry) => (
                        <li
                          key={entry}
                          className="grid grid-cols-[16px_1fr] gap-2 text-[13.5px] leading-[1.7] text-nova-muted"
                        >
                          <span className="text-coral">✓</span>
                          <span>{entry}</span>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="mb-[18px] text-[13.5px] leading-[1.8] text-nova-muted">{item.a}</p>
                  )
                ) : null}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

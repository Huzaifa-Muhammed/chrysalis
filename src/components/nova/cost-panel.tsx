"use client";

import { useState } from "react";
import { costs } from "@/content/concierge";

export function CostPanel() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="mt-7 flex justify-center">
        <button
          type="button"
          aria-expanded={open}
          aria-controls="cost-panel"
          onClick={() => setOpen((value) => !value)}
          className="inline-flex cursor-pointer items-center gap-2.5 rounded-full border border-nova-line bg-white px-6 py-3 font-nova-display text-[13px] font-medium text-nova-ink transition-colors hover:border-nova-ink"
        >
          <span>{open ? "Hide the numbers" : "See what it actually costs"}</span>
          <span className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}>↓</span>
        </button>
      </div>

      <div id="cost-panel" hidden={!open} className="mt-7">
        <div className="grid grid-cols-4 gap-3.5 max-[1000px]:grid-cols-2 max-[680px]:grid-cols-1">
          {costs.map((cost) => (
            <div key={cost.label} className="rounded-[18px] bg-white p-6">
              <b className="block font-nova-display text-[22px] font-medium tracking-[-.02em]">
                {cost.amount}
              </b>
              <span className="mt-1.5 block font-nova-display text-[11px] tracking-[1.8px] text-coral uppercase">
                {cost.label}
              </span>
              <p className="mt-2.5 text-[12.5px] leading-[1.7] text-nova-muted">{cost.note}</p>
            </div>
          ))}
        </div>
        <p className="mt-5 max-w-[86ch] text-[11.5px] leading-[1.8] text-nova-muted-2">
          Fee ranges are indicative, compiled from public schooling-fee surveys across the GCC,
          2024–2025, covering private and international schools. They vary by city, board and tier.
          Families across the region are increasingly using personal loans and school-fee finance to
          meet these costs — reflected in regional banking and consumer-finance reporting,
          2023–2025.
        </p>
      </div>
    </>
  );
}

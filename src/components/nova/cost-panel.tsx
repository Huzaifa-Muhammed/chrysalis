"use client";

import { useState } from "react";
import { costs } from "@/content/concierge";

export function CostPanel() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="relative mt-10 text-center before:absolute before:inset-x-0 before:top-1/2 before:h-px before:bg-nova-line">
        <button
          type="button"
          aria-expanded={open}
          aria-controls="cost-panel"
          onClick={() => setOpen((value) => !value)}
          className="relative inline-flex cursor-pointer items-center gap-2.5 rounded-full border border-nova-line bg-nova-band px-[22px] py-[11px] font-nova-display text-[13px] font-medium text-nova-ink transition-colors hover:border-nova-ink"
        >
          <span>{open ? "Hide the numbers" : "See what it actually costs"}</span>
          <span className={`text-coral transition-transform duration-200 ${open ? "rotate-180" : ""}`}>
            ↓
          </span>
        </button>
      </div>

      <div id="cost-panel" hidden={!open} className="pt-8">
        <div className="grid grid-cols-4 gap-4 max-[1000px]:grid-cols-2 max-[680px]:grid-cols-1">
          {costs.map((cost) => (
            <div key={cost.label} className="rounded-[18px] bg-white p-6">
              <b className="block font-nova-display text-[clamp(20px,2vw,27px)] leading-[1.05] font-medium tracking-[-.02em] text-coral">
                {cost.amount}
              </b>
              <span className="mt-2 block font-nova-display text-[13px] font-semibold">
                {cost.label}
              </span>
              <p className="mt-2 text-xs leading-[1.6] text-nova-muted">{cost.note}</p>
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

"use client";

import { useState } from "react";
import { familyPricing, featureGroups, plans, type FeatureRow } from "@/content/concierge";

const columnLabel = ["Free", "Base", "Plus", "Family"];

export function PlanTable() {
  // Below 1000px only one plan column is shown at a time.
  const [column, setColumn] = useState(2);
  const [family, setFamily] = useState<2 | 3>(2);
  const [showAll, setShowAll] = useState(false);

  const total = featureGroups.reduce((sum, group) => sum + group.rows.length, 0);
  const rowVisible = (row: FeatureRow) => showAll || row.key;

  return (
    <div>
      <div
        role="group"
        aria-label="Choose a plan to view"
        className="mb-4 hidden gap-2 max-[1000px]:flex"
      >
        {columnLabel.map((label, index) => (
          <button
            key={label}
            type="button"
            onClick={() => setColumn(index)}
            className={`flex-1 cursor-pointer rounded-full border px-3 py-2.5 font-nova-display text-[12.5px] font-medium transition-colors ${
              column === index
                ? "border-coral bg-coral text-white"
                : "border-nova-line bg-white text-nova-ink"
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      <div className="overflow-hidden rounded-[24px] bg-white">
        {/* Plan heads */}
        <div className="grid grid-cols-[minmax(0,1.5fr)_repeat(4,minmax(0,1fr))] gap-x-3 border-b border-nova-line p-6 max-[1000px]:grid-cols-1 max-[680px]:p-4">
          <span className="max-[1000px]:hidden" />
          {plans.map((plan, index) => {
            const isFamily = plan.id === "family";
            const price = isFamily ? familyPricing[family].price : plan.price;
            const per = isFamily ? familyPricing[family].per : plan.per;
            return (
              <span
                key={plan.id}
                className={`relative flex flex-col gap-1.5 rounded-2xl p-4 ${
                  plan.best ? "bg-coral-lt" : ""
                } ${column === index ? "" : "max-[1000px]:hidden"}`}
              >
                {plan.best ? (
                  <span className="absolute -top-0.5 right-3 rounded-full bg-coral px-2.5 py-1 font-nova-display text-[9.5px] tracking-[1.2px] text-white uppercase">
                    Most popular
                  </span>
                ) : null}
                <b className="font-nova-display text-[15px] font-semibold">{plan.name}</b>
                <i className="font-nova-display text-[26px] font-medium tracking-[-.02em] not-italic">
                  {price}
                </i>
                <em className="text-[11.5px] leading-[1.5] text-nova-muted not-italic">{per}</em>
                {isFamily ? (
                  <span className="mt-1 inline-flex gap-1.5">
                    {([2, 3] as const).map((count) => (
                      <button
                        key={count}
                        type="button"
                        onClick={() => setFamily(count)}
                        aria-pressed={family === count}
                        className={`h-7 w-7 cursor-pointer rounded-full border text-[12px] transition-colors ${
                          family === count
                            ? "border-coral bg-coral text-white"
                            : "border-nova-line bg-white text-nova-ink"
                        }`}
                      >
                        {count}
                      </button>
                    ))}
                  </span>
                ) : null}
                <a
                  href="#get-started"
                  className={`mt-2 inline-flex items-center justify-center gap-2 rounded-full px-3.5 py-2 font-nova-display text-[12px] font-semibold transition-colors ${
                    plan.best
                      ? "bg-coral text-white hover:bg-coral-dk"
                      : "border border-nova-line bg-white text-nova-ink hover:border-nova-ink"
                  }`}
                >
                  <span>↗</span>
                  <span>{plan.cta}</span>
                </a>
              </span>
            );
          })}
        </div>

        {featureGroups.map((group) => {
          const rows = group.rows.filter(rowVisible);
          if (rows.length === 0) return null;
          return (
            <div key={group.group}>
              <div className="bg-nova-band px-6 py-2.5 font-nova-display text-[11px] tracking-[2px] text-nova-muted-2 uppercase max-[680px]:px-4">
                {group.group}
              </div>
              {rows.map((row) => (
                <div
                  key={row.label}
                  className="grid grid-cols-[minmax(0,1.5fr)_repeat(4,minmax(0,1fr))] items-center gap-x-3 border-b border-nova-line px-6 py-3.5 last:border-b-0 max-[1000px]:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)] max-[680px]:px-4"
                >
                  <span className="text-[13.5px] leading-[1.5] text-nova-ink">
                    {row.label}
                    {row.note ? (
                      <small className="mt-1 block text-[11.5px] leading-[1.5] text-nova-muted-2">
                        {row.note}
                      </small>
                    ) : null}
                  </span>
                  {row.values.map((value, index) => (
                    <span
                      key={`${row.label}-${index}`}
                      className={`text-center text-[13px] whitespace-pre-line ${
                        value === "✓"
                          ? "text-coral"
                          : value === "—"
                            ? "text-nova-muted-2"
                            : "text-nova-ink"
                      } ${column === index ? "" : "max-[1000px]:hidden"}`}
                    >
                      {value}
                    </span>
                  ))}
                </div>
              ))}
            </div>
          );
        })}

        <div className="flex justify-center border-t border-nova-line px-6 py-4">
          <button
            type="button"
            aria-expanded={showAll}
            onClick={() => setShowAll((value) => !value)}
            className="inline-flex cursor-pointer items-center gap-2 border-0 bg-transparent font-nova-display text-[13px] font-medium text-nova-ink"
          >
            <span>{showAll ? "Show fewer features" : `Show all ${total} features`}</span>
            <span className={`transition-transform ${showAll ? "rotate-180" : ""}`}>↓</span>
          </button>
        </div>

        <div className="border-t border-nova-line px-6 py-4 text-[12.5px] text-nova-muted max-[680px]:px-4">
          Same price in every region. No hidden extras.
        </div>
      </div>
    </div>
  );
}

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
            className={`flex-1 cursor-pointer rounded-full border px-2 py-2.5 font-nova-display text-[13px] font-medium transition-colors ${
              column === index
                ? "border-nova-ink bg-nova-ink text-white"
                : "border-nova-line bg-white text-nova-muted"
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      <div className="mt-[34px] rounded-[24px] bg-white px-7 pt-1.5 pb-[26px] max-[860px]:px-[18px] max-[860px]:pb-[22px]">
        {/* Plan heads */}
        <div
          data-fab-stand-down
          className="grid grid-cols-[minmax(0,1.5fr)_repeat(4,minmax(0,1fr))] items-end gap-x-3 pt-[22px] pb-[18px] max-[1000px]:grid-cols-1"
        >
          <span className="max-[1000px]:hidden" />
          {plans.map((plan, index) => {
            const isFamily = plan.id === "family";
            const price = isFamily ? familyPricing[family].price : plan.price;
            const per = isFamily ? familyPricing[family].per : plan.per;
            return (
              <span
                key={plan.id}
                className={`relative flex flex-col items-center gap-[3px] rounded-[18px] px-3 py-4 text-center ${
                  plan.best ? "bg-nova-band" : ""
                } ${column === index ? "" : "max-[1000px]:hidden"}`}
              >
                {plan.best ? (
                  <span className="absolute -top-2.5 left-1/2 -translate-x-1/2 rounded-full bg-coral px-2.5 py-1 font-nova-display text-[9.5px] font-semibold tracking-[1.2px] whitespace-nowrap text-white uppercase">
                    Most popular
                  </span>
                ) : null}
                <b className="font-nova-display text-sm font-semibold tracking-[1.6px] uppercase">
                  {plan.name}
                </b>
                <i className="font-nova-display text-2xl leading-[1.1] font-medium tracking-[-.02em] not-italic max-[860px]:text-[32px]">
                  {price}
                </i>
                <em className="text-[11px] leading-[1.4] text-nova-muted-2 not-italic">{per}</em>
                {isFamily ? (
                  <span className="mt-2 inline-flex gap-[5px]">
                    {([2, 3] as const).map((count) => (
                      <button
                        key={count}
                        type="button"
                        onClick={() => setFamily(count)}
                        aria-pressed={family === count}
                        className={`h-[26px] w-[30px] cursor-pointer rounded-full border font-nova-display text-[12px] font-medium transition-colors ${
                          family === count
                            ? "border-nova-ink bg-nova-ink text-white"
                            : "border-nova-line bg-white text-nova-muted"
                        }`}
                      >
                        {count}
                      </button>
                    ))}
                  </span>
                ) : null}
                <a
                  href="#get-started"
                  data-join={plan.name}
                  className={`mt-2.5 inline-flex items-center gap-2 rounded-full border py-[5px] pr-4 pl-[5px] font-nova-display text-[12.5px] font-medium transition-colors ${
                    plan.best
                      ? "border-coral bg-coral text-white hover:bg-coral-dk"
                      : "border-nova-line bg-white text-nova-ink hover:border-nova-ink"
                  }`}
                >
                  <span
                    className={`flex h-[26px] w-[26px] items-center justify-center rounded-full text-[12px] ${
                      plan.best ? "bg-white/25 text-white" : "bg-coral text-white"
                    }`}
                  >
                    ↗
                  </span>
                  <span>{plan.headCta}</span>
                </a>
              </span>
            );
          })}
        </div>

        {featureGroups.map((group, groupIndex) => {
          const rows = group.rows.filter(rowVisible);
          if (rows.length === 0) return null;
          return (
            <div key={group.group}>
              {showAll || groupIndex === 0 ? (
                <div className="mt-1 border-t border-nova-line pt-5 pb-1 font-nova-display text-[10.5px] tracking-[2px] text-nova-muted-2 uppercase">
                  {group.group}
                </div>
              ) : null}
              {rows.map((row) => (
                <div
                  key={row.label}
                  className="grid grid-cols-[minmax(0,1.5fr)_repeat(4,minmax(0,1fr))] items-center gap-x-3 border-t border-nova-line py-[15px] transition-colors hover:bg-[#FAF9F8] max-[1000px]:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)]"
                >
                  <span className="text-[13.5px] leading-[1.45] text-nova-ink">
                    {row.label}
                    {row.note ? (
                      <small className="mt-0.5 block text-[11.5px] leading-[1.45] text-nova-muted-2">
                        {row.note}
                      </small>
                    ) : null}
                  </span>
                  {row.values.map((value, index) => (
                    <span
                      key={`${row.label}-${index}`}
                      className={`flex justify-center text-center text-[12.5px] leading-[1.45] whitespace-pre-line text-nova-ink-2 ${
                        column === index ? "" : "max-[1000px]:hidden"
                      }`}
                    >
                      {value === "✓" || value === "—" ? (
                        <span
                          aria-label={value === "✓" ? "Included" : "Not included"}
                          className={`flex h-[26px] w-[26px] items-center justify-center rounded-full text-[13px] leading-none ${
                            value === "✓"
                              ? "bg-coral font-bold text-white"
                              : "bg-[#F1EFEC] text-[#B8B4AE]"
                          }`}
                        >
                          {value === "✓" ? "✓" : "–"}
                        </span>
                      ) : (
                        value
                      )}
                    </span>
                  ))}
                </div>
              ))}
            </div>
          );
        })}

        <div className="mt-1.5 flex justify-center border-t border-nova-line pt-[22px] pb-1">
          <button
            type="button"
            aria-expanded={showAll}
            onClick={() => setShowAll((value) => !value)}
            className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-nova-line bg-white px-[22px] py-[11px] font-nova-display text-[13px] font-medium text-nova-ink transition-colors hover:border-nova-ink"
          >
            <span>{showAll ? "Show less" : `Show all ${total} features`}</span>
            <span className={`text-coral transition-transform duration-200 ${showAll ? "rotate-180" : ""}`}>
              ↓
            </span>
          </button>
        </div>

        <div
          data-fab-stand-down
          className="mt-1.5 grid grid-cols-[minmax(0,1.5fr)_repeat(4,minmax(0,1fr))] items-center gap-x-3 border-t border-nova-line pt-5 max-[1000px]:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)]"
        >
          <span className="text-[12.5px] text-nova-muted">
            Same price in every region. No hidden extras.
          </span>
          {plans.map((plan, index) => (
            <span
              key={plan.id}
              className={`flex justify-center ${column === index ? "" : "max-[1000px]:hidden"}`}
            >
              <a
                href="#get-started"
                data-join={plan.name}
                className={`inline-flex items-center gap-2 rounded-full border py-[5px] pr-4 pl-[5px] font-nova-display text-[12.5px] font-medium transition-colors ${
                  plan.best
                    ? "border-coral bg-coral text-white hover:bg-coral-dk"
                    : "border-nova-line bg-white text-nova-ink hover:border-nova-ink"
                }`}
              >
                <span
                  className={`flex h-[26px] w-[26px] items-center justify-center rounded-full text-[12px] ${
                    plan.best ? "bg-white/25 text-white" : "bg-coral text-white"
                  }`}
                >
                  ↗
                </span>
                <span>{plan.cta}</span>
              </a>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

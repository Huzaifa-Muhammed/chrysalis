"use client";

import { useState } from "react";
import { audiences, type Tier } from "@/content/dexter";

export function DexterAudienceTabs() {
  const [active, setActive] = useState(audiences[0].id);
  const audience = audiences.find((item) => item.id === active) ?? audiences[0];

  return (
    <>
      <div role="tablist" className="mt-8 flex flex-wrap gap-2">
        {audiences.map((item) => (
          <button
            key={item.id}
            type="button"
            role="tab"
            aria-selected={item.id === active}
            onClick={() => setActive(item.id)}
            className={`cursor-pointer rounded-full border px-6 py-[11px] font-display text-sm font-semibold transition-all duration-200 ${
              item.id === active
                ? "border-accent bg-accent text-white"
                : "border-line bg-white text-muted hover:border-ink hover:text-ink"
            }`}
          >
            {item.tab}
          </button>
        ))}
      </div>

      <div className="mt-4">
        <div className="rounded-[14px] border border-line bg-white px-8 py-[30px] max-[680px]:px-5">
          <div className="flex flex-wrap items-baseline gap-5">
            <h3 className="font-display text-[22px] font-semibold tracking-[-.015em]">
              {audience.heading}
            </h3>
          </div>

          <div className="mt-[22px] grid grid-cols-2 gap-[18px] max-[760px]:grid-cols-1">
            <div className="rounded-xl bg-paper px-[22px] py-5">
              <span className="font-mono text-[10.5px] tracking-[1.6px] text-muted-2 uppercase">
                Learners
              </span>
              <p className="mt-[9px] text-sm leading-[1.7] text-ink-soft">{audience.learners}</p>
            </div>
            <div className="rounded-xl bg-paper px-[22px] py-5">
              <span className="font-mono text-[10.5px] tracking-[1.6px] text-muted-2 uppercase">
                Content
              </span>
              <p className="mt-[9px] text-sm leading-[1.7] text-ink-soft">{audience.content}</p>
            </div>
          </div>

          <div className="mt-[18px] grid grid-cols-[minmax(0,1fr)_44px_minmax(0,1fr)] items-stretch max-[760px]:grid-cols-1">
            <div className="rounded-[14px] border border-line bg-[#F2F0ED] p-6">
              <span className="font-mono text-[10.5px] tracking-[1.8px] text-muted-2 uppercase">
                Today
              </span>
              <p className="mt-2.5 text-sm leading-[1.7] text-muted">{audience.today}</p>
            </div>
            <div
              aria-hidden="true"
              className="flex items-center justify-center text-[18px] text-accent max-[760px]:rotate-90 max-[760px]:py-2"
            >
              →
            </div>
            <div className="rounded-[14px] bg-ink p-6 text-white">
              <span className="font-mono text-[10.5px] tracking-[1.8px] text-accent uppercase">
                With Dexter
              </span>
              <p className="mt-2.5 text-sm leading-[1.7] text-white/[.86]">{audience.withDexter}</p>
            </div>
          </div>

          <div
            className={
              audience.tiersBeside
                ? "mt-6 grid grid-cols-[minmax(0,1fr)_minmax(0,330px)] items-start gap-[26px] border-t border-line pt-[22px] max-[1000px]:grid-cols-1"
                : "mt-6 border-t border-line pt-[22px]"
            }
          >
            <div>
              <div className="mb-3.5 font-mono text-[11px] tracking-[2px] text-muted-2 uppercase">
                Getting started
              </div>
              <div
                className={`grid gap-px overflow-hidden rounded-[14px] border border-line bg-line max-[1000px]:grid-cols-2 max-[680px]:grid-cols-1 ${
                  audience.tiersBeside ? "grid-cols-2" : "grid-cols-4"
                }`}
              >
                {audience.steps.map((step, index) => (
                  <div key={step.title} className="bg-paper px-[22px] py-6">
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-accent-soft font-display text-xs font-bold text-accent-deep">
                      {index + 1}
                    </span>
                    <h4 className="mt-3 font-display text-[14.5px] font-semibold">{step.title}</h4>
                    <p className="mt-2 text-[13px] leading-[1.7] text-muted">{step.body}</p>
                  </div>
                ))}
              </div>
            </div>

            <div
              className={`grid gap-3 ${
                audience.tiersBeside
                  ? "grid-cols-1"
                  : "mt-6 grid-cols-3 border-t border-line pt-[22px] max-[1000px]:grid-cols-1"
              }`}
            >
              {audience.tiers.map((tier) => (
                <TierCard key={tier.name} tier={tier} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function TierCard({ tier }: { tier: Tier }) {
  return (
    <div
      className={`relative flex flex-col rounded-[14px] border bg-white px-5 py-6 ${
        tier.hot ? "border-2 border-accent" : "border-line"
      }`}
    >
      {tier.hot ? (
        <span className="absolute -top-2.5 left-[18px] rounded-full bg-accent px-[9px] py-1 font-mono text-[9.5px] tracking-[1.4px] text-white uppercase">
          Popular
        </span>
      ) : null}
      <h3 className="font-display text-[15px] font-bold tracking-[1.2px] uppercase">{tier.name}</h3>
      <div className="mt-2.5 font-display text-[26px] font-semibold tracking-[-.02em]">
        {tier.amount}
        <small className="mt-[3px] block text-xs font-normal text-muted">{tier.per}</small>
      </div>
      <p className="mt-2.5 min-h-[52px] text-[12.5px] leading-[1.65] text-muted">{tier.blurb}</p>
      <ul className="mt-3.5 mb-[18px] flex flex-1 list-none flex-col gap-2 p-0">
        {tier.features.map((feature) => (
          <li
            key={feature}
            className="grid grid-cols-[13px_1fr] gap-2 text-[12.5px] leading-[1.5] text-ink-soft"
          >
            <i className="font-bold text-accent not-italic">✓</i>
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <a
        href={tier.href}
        className={`block rounded-full border p-[11px] text-center font-display text-[13px] font-semibold transition-colors ${
          tier.hot || tier.free
            ? "border-accent bg-accent text-white hover:border-accent-deep hover:bg-accent-deep"
            : "border-line hover:border-ink"
        }`}
      >
        {tier.cta}
      </a>
    </div>
  );
}

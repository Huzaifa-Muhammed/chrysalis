"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import {
  beyondRows,
  comparePlans,
  compareRate,
  compareWeeks,
  type ComparePlan,
} from "@/content/concierge";

const money = (value: number) => `AED ${Math.round(value).toLocaleString("en-US")}`;

function planFor(kids: number, hoursPerChild: number): ComparePlan {
  if (kids >= 3) return comparePlans.fam3;
  if (kids === 2) return comparePlans.fam2;
  return hoursPerChild <= comparePlans.base.hours ? comparePlans.base : comparePlans.plus;
}

type StepperProps = {
  label: string;
  hint?: string;
  value: number;
  min: number;
  max: number;
  onChange: (value: number) => void;
  decLabel: string;
  incLabel: string;
};

function Stepper({ label, hint, value, min, max, onChange, decLabel, incLabel }: StepperProps) {
  const button =
    "h-8 w-8 cursor-pointer rounded-full border border-nova-line bg-white text-[16px] leading-none text-nova-ink transition-colors hover:border-nova-ink disabled:cursor-default disabled:opacity-35 disabled:hover:border-nova-line";
  return (
    <div className="rounded-[18px] bg-white px-[18px] py-4">
      <div className="font-nova-display text-[11.5px] tracking-[1.5px] text-nova-muted-2 uppercase">
        {label}
        {hint ? <span className="tracking-[.6px] normal-case"> {hint}</span> : null}
      </div>
      <div className="mt-2.5 flex items-center justify-between gap-2.5">
        <button
          type="button"
          aria-label={decLabel}
          disabled={value <= min}
          onClick={() => onChange(Math.max(min, value - 1))}
          className={button}
        >
          −
        </button>
        <span className="font-nova-display text-[22px] font-medium">{value}</span>
        <button
          type="button"
          aria-label={incLabel}
          disabled={value >= max}
          onClick={() => onChange(Math.min(max, value + 1))}
          className={button}
        >
          +
        </button>
      </div>
    </div>
  );
}

export function CompareCost() {
  const [open, setOpen] = useState(false);
  const [subjects, setSubjects] = useState(2);
  const [hours, setHours] = useState(1);
  const [kids, setKids] = useState(1);
  const [rateText, setRateText] = useState(String(compareRate));
  const closeRef = useRef<HTMLButtonElement>(null);

  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      document.removeEventListener("keydown", onKey);
    };
  }, [open, close]);

  const parsedRate = parseFloat(rateText);
  const rate = Number.isFinite(parsedRate) && parsedRate > 0 ? parsedRate : compareRate;

  const hoursPerChild = subjects * hours * compareWeeks;
  const monthlyHours = hoursPerChild * kids;
  const privateCost = monthlyHours * rate;
  const plan = planFor(kids, hoursPerChild);
  const saving = privateCost - plan.price;
  const multiple = privateCost / plan.price;

  let note =
    `Based on ${subjects} subject${subjects > 1 ? "s" : ""} at ${hours} hour${hours > 1 ? "s" : ""}` +
    ` a week per child, over four weeks, for ${kids} child${kids > 1 ? "ren" : ""}, at ${money(rate)}` +
    " an hour. AED 150 is a typical UAE mid-market rate; rates range roughly AED 80–150.";
  if (hoursPerChild > plan.hours) {
    note +=
      ` ${plan.name} includes ${plan.hours} hours a month per child — you’ve set ${hoursPerChild},` +
      ` so the figures above compare your plan cost against buying all ${monthlyHours} hours` +
      " privately. Talk to us about additional sessions beyond what’s included.";
  }

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="inline-flex cursor-pointer items-center gap-2.5 rounded-full border border-nova-line bg-white py-2.5 pr-5 pl-2.5 font-nova-display text-[13px] font-medium text-nova-ink transition-colors hover:border-nova-ink"
      >
        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-coral text-[12px] text-white">
          ⇄
        </span>
        <span>Compare the cost</span>
      </button>

      {open ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="cmp-title"
          onClick={(event) => {
            if (event.target === event.currentTarget) close();
          }}
          className="fixed inset-0 z-[600] flex items-center justify-center bg-[rgba(30,20,14,.62)] p-5 backdrop-blur-[5px] max-[680px]:p-0"
        >
          <div className="relative max-h-[92vh] w-[min(760px,100%)] overflow-y-auto rounded-[24px] bg-nova-shell p-[34px] max-[680px]:h-screen max-[680px]:max-h-screen max-[680px]:rounded-none max-[680px]:px-5 max-[680px]:py-[26px]">
            <button
              ref={closeRef}
              type="button"
              aria-label="Close"
              onClick={close}
              className="absolute top-[18px] right-[18px] flex h-[34px] w-[34px] cursor-pointer items-center justify-center rounded-full border-0 bg-[#EDEBE8] text-[14px] text-nova-ink"
            >
              ✕
            </button>

            <span className="inline-flex items-center rounded-full bg-coral-lt px-3 py-1.5 font-nova-display text-[10.5px] tracking-[1.6px] text-coral uppercase">
              Cost comparison
            </span>
            <h3
              id="cmp-title"
              className="mt-4 max-w-[20ch] font-nova-display text-[clamp(20px,2.4vw,28px)] leading-[1.1] font-normal tracking-[-.01em] uppercase"
            >
              The same hours, bought two ways
            </h3>
            <p className="mt-3 max-w-[56ch] text-[13.5px] leading-[1.8] text-nova-muted">
              Private tutoring in the UAE runs about{" "}
              <strong className="font-semibold text-nova-ink">AED 150 an hour, per subject</strong> —
              adjust the rate below if you have your own quote. Set the hours you’d actually buy and
              see what the same teaching costs inside a plan.
            </p>

            <div className="mt-6 grid grid-cols-2 gap-3.5 max-[680px]:grid-cols-1">
              <Stepper
                label="Extra tuitions"
                hint="(how many subjects)"
                value={subjects}
                min={1}
                max={6}
                onChange={setSubjects}
                decLabel="Fewer subjects"
                incLabel="More subjects"
              />
              <Stepper
                label="Hours per subject, per week"
                value={hours}
                min={1}
                max={4}
                onChange={setHours}
                decLabel="Fewer hours"
                incLabel="More hours"
              />
              <Stepper
                label="Children"
                value={kids}
                min={1}
                max={3}
                onChange={setKids}
                decLabel="Fewer children"
                incLabel="More children"
              />
              <div className="rounded-[18px] bg-white px-[18px] py-4">
                <label
                  htmlFor="cmp-rate"
                  className="font-nova-display text-[11.5px] tracking-[1.5px] text-nova-muted-2 uppercase"
                >
                  Private rate per hour
                </label>
                <div className="mt-2 flex items-baseline gap-[7px] border-b-2 border-nova-line pb-[5px] focus-within:border-coral">
                  <span className="font-nova-display text-[13px] font-semibold text-nova-muted-2">
                    AED
                  </span>
                  <input
                    id="cmp-rate"
                    type="number"
                    inputMode="numeric"
                    min={1}
                    max={2000}
                    step={5}
                    value={rateText}
                    onChange={(event) => setRateText(event.target.value)}
                    className="min-w-0 flex-1 border-0 bg-transparent p-0 font-nova-display text-[22px] font-medium text-nova-ink outline-0 [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                  />
                  <span className="text-[12px] text-nova-muted-2">/hr</span>
                </div>
                <p className="mt-[7px] text-[10.5px] leading-[1.4] text-nova-muted-2">
                  UAE average. Change it to your own quote.
                </p>
              </div>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-3.5 max-[680px]:grid-cols-1">
              <div className="flex flex-col gap-1.5 rounded-[18px] bg-white p-[22px]">
                <span className="font-nova-display text-[11.5px] tracking-[1.5px] text-nova-muted-2 uppercase">
                  Private tutoring
                </span>
                <span className="font-nova-display text-[clamp(26px,3.2vw,36px)] leading-none font-medium tracking-[-.03em]">
                  {money(privateCost)}
                </span>
                <span className="text-[12px] leading-[1.6] text-nova-muted">
                  {monthlyHours} hours a month × {money(rate)}
                  {kids > 1 ? ` · ${kids} children` : ""}
                </span>
              </div>
              <div className="flex flex-col gap-1.5 rounded-[18px] bg-coral p-[22px] text-white">
                <span className="font-nova-display text-[11.5px] tracking-[1.5px] text-white/80 uppercase">
                  EDU Concierge
                </span>
                <span className="font-nova-display text-[clamp(26px,3.2vw,36px)] leading-none font-medium tracking-[-.03em]">
                  {money(plan.price)}
                </span>
                <span className="text-[12px] leading-[1.6] text-white/85">
                  {plan.name} — {plan.includes}
                </span>
              </div>
            </div>

            <div className="mt-3.5 flex flex-wrap items-baseline gap-4 rounded-[18px] bg-nova-ink px-6 py-[22px] text-white">
              <b className="font-nova-display text-[clamp(24px,3vw,34px)] font-medium tracking-[-.03em]">
                {money(saving)}
              </b>
              <span className="text-[12.5px] text-white/75">
                saved every month · {money(saving * 12)} a year ·{" "}
                {multiple >= 10 ? Math.round(multiple) : multiple.toFixed(1)}× cheaper — before
                counting everything below
              </span>
            </div>

            <div className="mt-7">
              <h4 className="font-nova-display text-[16px] font-semibold">
                What the hourly rate doesn’t buy
              </h4>
              <p className="mt-2 text-[12.5px] leading-[1.7] text-nova-muted">
                {money(rate)} an hour buys teaching time. Everything below is included in your plan
                at no extra cost — and most of it has no hourly equivalent to shop for.
              </p>
              <div className="mt-4 overflow-hidden rounded-[18px] bg-white">
                <div className="grid grid-cols-[minmax(0,1fr)_120px_120px] items-center gap-3 border-b border-nova-line px-4 py-2.5 font-nova-display text-[11px] tracking-[1.4px] text-nova-muted-2 uppercase max-[680px]:grid-cols-[minmax(0,1fr)_60px_60px] max-[680px]:gap-1.5">
                  <span>&nbsp;</span>
                  <span className="text-center">Private tutor</span>
                  <span className="text-center">EDU Concierge</span>
                </div>
                {beyondRows.map((row) => (
                  <div
                    key={row.label}
                    className="grid grid-cols-[minmax(0,1fr)_120px_120px] items-center gap-3 border-b border-nova-line px-4 py-3 last:border-b-0 max-[680px]:grid-cols-[minmax(0,1fr)_60px_60px] max-[680px]:gap-1.5"
                  >
                    <span className="text-[13.5px] leading-[1.5] text-nova-ink max-[680px]:text-[12.5px]">
                      {row.label}
                      {row.note ? (
                        <small className="mt-1 block text-[11.5px] leading-[1.5] text-nova-muted-2">
                          {row.note}
                        </small>
                      ) : null}
                    </span>
                    <span
                      className={`text-center text-[13px] ${
                        row.tutor === "✓" ? "text-coral" : "text-nova-muted-2"
                      }`}
                    >
                      {row.tutor}
                    </span>
                    <span className="text-center text-[13px] text-coral">✓</span>
                  </div>
                ))}
              </div>
              <p className="mt-3.5 text-[11.5px] leading-[1.65] text-nova-muted-2">
                A private tutor may of course help with revision or sit an assessment with your
                child — but you arrange it, coordinate it, and pay for the hour. None of it is
                joined up across subjects, terms or years.
              </p>
            </div>

            <p className="mt-4 text-[11.5px] leading-[1.75] text-nova-muted">{note}</p>

            <div className="mt-5">
              <a
                href="#get-started"
                onClick={close}
                className="inline-flex items-center gap-2.5 rounded-full bg-coral py-2.5 pr-5 pl-2.5 font-nova-display text-[13px] font-semibold text-white transition-colors hover:bg-coral-dk"
              >
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/20 text-[12px]">
                  ↗
                </span>
                <span>Book a free consultation</span>
              </a>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}

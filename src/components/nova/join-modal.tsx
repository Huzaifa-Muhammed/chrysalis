"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { joinDefaultPlan, joinPlanOptions, onboardingSteps } from "@/content/concierge";

/**
 * Get-started form, mounted once per page. Rather than threading a context
 * through every server-rendered CTA, it listens for clicks on any `[data-join]`
 * element — the attribute's value preselects the membership level — so the
 * links themselves stay plain anchors that still work without JavaScript.
 */
export function JoinModal() {
  const [open, setOpen] = useState(false);
  const [sent, setSent] = useState(false);
  const [plan, setPlan] = useState(joinDefaultPlan);
  const panelRef = useRef<HTMLDivElement>(null);
  const firstFieldRef = useRef<HTMLInputElement>(null);

  const close = useCallback(() => {
    setOpen(false);
    setSent(false);
  }, []);

  // Delegated opener: any [data-join] anchor or button anywhere on the page.
  useEffect(() => {
    function onClick(event: MouseEvent) {
      if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey) return;
      const trigger = (event.target as HTMLElement | null)?.closest?.("[data-join]");
      if (!trigger) return;
      event.preventDefault();
      const wanted = trigger.getAttribute("data-join") || joinDefaultPlan;
      setPlan(joinPlanOptions.some((o) => o.value === wanted) ? wanted : joinDefaultPlan);
      setSent(false);
      setOpen(true);
    }
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const focusTimer = window.setTimeout(() => firstFieldRef.current?.focus(), 60);
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") close();
    }
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      document.removeEventListener("keydown", onKey);
      window.clearTimeout(focusTimer);
    };
  }, [open, close]);

  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const value = (name: string) => String(data.get(name) ?? "").trim();
    const notes = value("notes");
    const body =
      `Parent name: ${value("parent")}\n` +
      `Contact number: ${value("phone")}\n` +
      `Student name: ${value("student")}\n` +
      `Class / year: ${value("year")}\n` +
      `School: ${value("school")}\n` +
      `City & country: ${value("city")}\n` +
      `Membership level: ${value("plan")}\n` +
      (notes ? `\nNotes: ${notes}\n` : "");
    const subject = `EDU Concierge — ${value("plan") || "enquiry"} — ${value("student")}`;
    window.location.href =
      "mailto:concierge@chrysalis.education" +
      `?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
    if (panelRef.current) panelRef.current.scrollTop = 0;
  }

  if (!open) return null;

  const field =
    "mt-[7px] block w-full rounded-xl border border-transparent bg-nova-band px-3.5 py-[13px] font-nova-body text-[15px] text-nova-ink transition-colors outline-0 focus:border-coral focus:bg-white";
  const labelText =
    "block font-nova-display text-[10.5px] tracking-[1.6px] text-nova-muted-2 uppercase";
  const sendButton =
    "w-full cursor-pointer rounded-full border-0 bg-coral p-4 font-nova-display text-[15px] font-semibold text-white transition-colors hover:bg-coral-dk";

  return (
    <div
      id="get-started"
      role="dialog"
      aria-modal="true"
      aria-labelledby="join-title"
      className="fixed inset-0 z-[600] flex items-center justify-center p-5"
    >
      <div
        className="absolute inset-0 bg-[rgba(28,28,28,.55)] backdrop-blur-[3px]"
        onClick={close}
        aria-hidden="true"
      />
      <div
        ref={panelRef}
        className="relative max-h-[92vh] w-[min(660px,100%)] overflow-y-auto rounded-[24px] bg-white px-[34px] pt-[34px] pb-[30px] shadow-[0_30px_80px_rgba(0,0,0,.35)] max-[680px]:px-5 max-[680px]:pt-7 max-[680px]:pb-6"
      >
        <button
          type="button"
          aria-label="Close"
          onClick={close}
          className="absolute top-4 right-[18px] flex h-[34px] w-[34px] cursor-pointer items-center justify-center rounded-full border border-nova-line bg-white text-[19px] leading-none text-nova-ink transition-colors hover:border-nova-ink"
        >
          ×
        </button>

        {sent ? (
          <div>
            <span className="flex h-[46px] w-[46px] items-center justify-center rounded-full bg-coral text-xl text-white">
              ✓
            </span>
            <h3
              id="join-title"
              className="mt-4 font-nova-display text-[22px] leading-[1.15] font-normal tracking-[-.01em] uppercase"
            >
              Your form is submitted.
            </h3>
            <p className="mt-2.5 max-w-[54ch] text-[14.5px] leading-[1.7] text-nova-ink-2">
              One of our representatives will contact you within two working days to begin the
              onboarding process, which includes:
            </p>
            <ol className="mt-5 flex list-none flex-col gap-0.5 p-0">
              {onboardingSteps.map((step, index) => (
                <li
                  key={step.title}
                  className="grid grid-cols-[30px_1fr] gap-[13px] border-t border-nova-line py-[13px]"
                >
                  <span className="flex h-[26px] w-[26px] items-center justify-center rounded-full bg-nova-band font-nova-display text-[12px] font-semibold text-nova-ink">
                    {index + 1}
                  </span>
                  <span>
                    <b className="block font-nova-display text-[14.5px] font-semibold">
                      {step.title}
                    </b>
                    <span className="mt-[3px] block text-[13px] leading-[1.65] text-nova-muted">
                      {step.body}
                    </span>
                  </span>
                </li>
              ))}
            </ol>
            <p className="mt-5 text-[12.5px] leading-[1.65] text-nova-muted-2">
              Nothing is charged until you confirm a plan, and you can cancel within 14 days for a
              full refund.
            </p>
            <button type="button" onClick={close} className={`${sendButton} mt-5`}>
              Close
            </button>
          </div>
        ) : (
          <>
            <span className="font-nova-display text-[11.5px] font-medium tracking-[2.2px] text-nova-muted-2 uppercase">
              Get started
            </span>
            <h2
              id="join-title"
              className="mt-3 font-nova-display text-[26px] leading-[1.06] font-normal tracking-[-.01em] uppercase"
            >
              Tell us about your child
            </h2>
            <p className="mt-2.5 max-w-[52ch] text-sm leading-[1.7] text-nova-muted">
              We&rsquo;ll come back to you within two working days with next steps — no charge, no
              obligation.
            </p>

            <form onSubmit={onSubmit} className="mt-[22px]">
              <div className="mb-3.5 grid grid-cols-2 gap-3.5 max-[680px]:grid-cols-1">
                <label className={labelText}>
                  Your name
                  <input
                    ref={firstFieldRef}
                    type="text"
                    name="parent"
                    required
                    autoComplete="name"
                    className={field}
                  />
                </label>
                <label className={labelText}>
                  Contact number
                  <input
                    type="tel"
                    name="phone"
                    required
                    autoComplete="tel"
                    inputMode="tel"
                    className={field}
                  />
                </label>
              </div>
              <div className="mb-3.5 grid grid-cols-2 gap-3.5 max-[680px]:grid-cols-1">
                <label className={labelText}>
                  Student&rsquo;s name
                  <input type="text" name="student" required className={field} />
                </label>
                <label className={labelText}>
                  Class / year group
                  <input type="text" name="year" placeholder="e.g. Year 8" required className={field} />
                </label>
              </div>
              <div className="mb-3.5 grid grid-cols-2 gap-3.5 max-[680px]:grid-cols-1">
                <label className={labelText}>
                  School
                  <input type="text" name="school" required className={field} />
                </label>
                <label className={labelText}>
                  City &amp; country
                  <input
                    type="text"
                    name="city"
                    placeholder="e.g. Dubai, UAE"
                    required
                    className={field}
                  />
                </label>
              </div>
              <label className={`${labelText} mb-3.5`}>
                Membership level
                <select
                  name="plan"
                  required
                  value={plan}
                  onChange={(event) => setPlan(event.target.value)}
                  className={field}
                >
                  {joinPlanOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </label>
              <label className={`${labelText} mb-3.5`}>
                Anything we should know?{" "}
                <span className="font-nova-body tracking-normal normal-case">optional</span>
                <textarea name="notes" rows={3} className={`${field} resize-y`} />
              </label>
              <button type="submit" className={sendButton}>
                Send and get started
              </button>
              <p className="mt-3 text-center text-xs text-nova-muted-2">
                ✓ Cancel within 14 days for a full refund · opens your email app to send
              </p>
            </form>
          </>
        )}
      </div>
    </div>
  );
}

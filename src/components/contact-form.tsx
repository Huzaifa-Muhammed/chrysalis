"use client";

import { useState } from "react";

const topics = [
  "EDU Concierge — for my child",
  "Dexter — for my school or tuition centre",
  "Spark — programmes for students",
  "Careers at Chrysalis",
  "Something else",
];

const fieldClass =
  "mt-[7px] block w-full rounded-[10px] border border-transparent bg-[#F4F3F1] p-3.5 font-body text-[15px] text-ink transition-[border-color,background] duration-200 focus:border-plum focus:bg-white focus:outline-none";
const labelClass =
  "block font-mono text-[10.5px] tracking-[1.6px] text-muted-3 uppercase";

export function ContactForm() {
  const [sent, setSent] = useState(false);

  // UI only — no endpoint is wired yet. Replace this handler with a fetch()
  // POST to the forms endpoint; the rest of the form can stay as it is.
  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
  }

  if (sent) {
    return (
      <div className="flex flex-col items-center gap-3 py-10 text-center">
        <span className="flex h-11 w-11 items-center justify-center rounded-full bg-plum text-[19px] text-white">
          ✓
        </span>
        <h3 className="font-display text-[21px] font-semibold">Thanks — that&rsquo;s with us.</h3>
        <p className="max-w-[46ch] text-[14.5px] leading-[1.7] text-ink-soft">
          We reply to enquiries within two working days. Members hear from their Education Manager
          sooner.
        </p>
        <button
          type="button"
          onClick={() => setSent(false)}
          className="mt-2 cursor-pointer border-0 bg-transparent text-[13.5px] font-semibold text-plum underline underline-offset-4"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit}>
      <div className="mb-3.5 grid grid-cols-2 gap-3.5 max-[680px]:grid-cols-1">
        <label className={labelClass}>
          First name
          <input type="text" name="first" required autoComplete="given-name" className={fieldClass} />
        </label>
        <label className={labelClass}>
          Last name
          <input type="text" name="last" required autoComplete="family-name" className={fieldClass} />
        </label>
      </div>

      <label className={`${labelClass} mb-3.5`}>
        Email
        <input type="email" name="email" required autoComplete="email" className={fieldClass} />
      </label>

      <div className="mb-3.5 grid grid-cols-2 gap-3.5 max-[680px]:grid-cols-1">
        <label className={labelClass}>
          What is this about?
          <select name="topic" required defaultValue="" className={fieldClass}>
            <option value="" disabled>
              Select…
            </option>
            {topics.map((topic) => (
              <option key={topic}>{topic}</option>
            ))}
          </select>
        </label>
        <label className={labelClass}>
          Child&rsquo;s age{" "}
          <span className="font-body tracking-normal normal-case">optional</span>
          <input type="text" name="age" inputMode="numeric" className={fieldClass} />
        </label>
      </div>

      <label className={`${labelClass} mb-3.5`}>
        How can we help?
        <textarea
          name="message"
          rows={5}
          required
          className={`${fieldClass} min-h-[120px] resize-y`}
        />
      </label>

      <button
        type="submit"
        className="mt-1.5 w-full cursor-pointer rounded-xl border-0 bg-plum p-[17px] font-display text-[15px] font-semibold text-white transition-colors hover:bg-plum-dark"
      >
        Submit
      </button>
      <p className="mt-3 text-center font-mono text-[10.5px] tracking-[1.4px] text-muted-3 uppercase">
        {"// Not yet connected to a form endpoint"}
      </p>
    </form>
  );
}

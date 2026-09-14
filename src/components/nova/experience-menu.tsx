"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const options = [
  {
    href: "mailto:concierge@chrysalis.education?subject=Try%20EDU%20Concierge%20for%20free",
    title: "Try for free",
    note: "2 hours a month, when a seat is open",
    external: true,
  },
  {
    href: "#plans",
    title: "Get started",
    note: "Pick a plan and begin this term",
    external: false,
  },
  {
    href: "/contact",
    title: "Talk to us",
    note: "Speak to an Education Concierge",
    external: false,
  },
];

export function ExperienceMenu() {
  const [open, setOpen] = useState(false);
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    function onPointerDown(event: MouseEvent) {
      if (!wrapRef.current?.contains(event.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", onPointerDown);
    return () => document.removeEventListener("mousedown", onPointerDown);
  }, [open]);

  return (
    <div ref={wrapRef} className="relative inline-block">
      <button
        type="button"
        aria-expanded={open}
        aria-controls="experience-menu"
        onClick={() => setOpen((value) => !value)}
        className="inline-flex cursor-pointer items-center justify-center gap-3 rounded-full border-0 bg-nova-ink px-[26px] py-[17px] font-nova-display text-[12.5px] font-semibold tracking-[1.4px] whitespace-nowrap text-white uppercase transition-colors hover:bg-coral"
      >
        <span>Experience EC today</span>
        <span className={`text-[15px] leading-none transition-transform duration-200 ${open ? "rotate-180" : ""}`}>
          ⌄
        </span>
      </button>

      <div
        id="experience-menu"
        hidden={!open}
        className="absolute top-[calc(100%+10px)] left-0 z-20 flex w-[298px] flex-col rounded-[18px] bg-white p-2 shadow-[0_18px_44px_rgba(0,0,0,.14)]"
      >
        {options.map((option) =>
          option.external ? (
            <a
              key={option.title}
              href={option.href}
              className="flex items-center gap-[13px] rounded-xl px-3.5 py-[13px] transition-colors hover:bg-nova-band"
            >
              <MenuRow {...option} />
            </a>
          ) : (
            <Link
              key={option.title}
              href={option.href}
              onClick={() => setOpen(false)}
              className="flex items-center gap-[13px] rounded-xl px-3.5 py-[13px] transition-colors hover:bg-nova-band"
            >
              <MenuRow {...option} />
            </Link>
          ),
        )}
      </div>
    </div>
  );
}

function MenuRow({ title, note }: { title: string; note: string }) {
  return (
    <>
      <span className="flex h-8 w-8 flex-none items-center justify-center rounded-full bg-coral text-sm text-white">
        ↗
      </span>
      <span>
        <b className="block font-nova-display text-[14.5px] font-semibold">{title}</b>
        <small className="mt-0.5 block text-[11.5px] text-nova-muted">{note}</small>
      </span>
    </>
  );
}

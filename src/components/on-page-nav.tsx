"use client";

import { useEffect, useRef, useState } from "react";
import type { NavItem } from "@/content/nav";

/** Sticky in-page nav. Pins to the top on scroll and highlights the section
 *  currently in view, inserting a spacer so the page doesn't jump when it pins. */
const tones = {
  plum: "border-plum text-plum",
  accent: "border-accent text-accent",
};

export function OnPageNav({
  items,
  tone = "plum",
}: {
  items: NavItem[];
  tone?: keyof typeof tones;
}) {
  const navRef = useRef<HTMLElement>(null);
  const [stuck, setStuck] = useState(false);
  const [height, setHeight] = useState(0);
  const [active, setActive] = useState("");

  useEffect(() => {
    const nav = navRef.current;
    if (!nav) return;

    const anchorTop = nav.offsetTop;
    setHeight(nav.offsetHeight);

    function onScroll() {
      setStuck(window.scrollY > anchorTop);

      // The section whose top has most recently passed the nav wins.
      let current = "";
      for (const item of items) {
        const target = document.querySelector(item.href.replace(/^.*#/, "#"));
        if (target instanceof HTMLElement && target.getBoundingClientRect().top <= 90) {
          current = item.href;
        }
      }
      setActive(current);
    }

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [items]);

  return (
    <>
      <nav
        ref={navRef}
        aria-label="On this page"
        className={`relative z-30 border-b border-line bg-cream ${
          stuck ? "fixed top-0 right-0 left-0 shadow-[0_6px_20px_rgba(0,0,0,.07)]" : ""
        }`}
      >
        <div className="mx-auto flex min-h-14 max-w-[1180px] items-center gap-[30px] px-[var(--gutter)] max-[860px]:min-h-[50px] max-[860px]:gap-0">
          <span className="flex-none text-[15px] font-medium text-muted max-[860px]:hidden">
            On this page
          </span>
          <div className="flex min-w-0 flex-1 items-center gap-[26px] overflow-x-auto [scrollbar-width:none] max-[860px]:gap-[22px] [&::-webkit-scrollbar]:hidden">
            {items.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`border-b-2 py-[18px] text-sm whitespace-nowrap transition-colors max-[860px]:py-[15px] max-[860px]:text-[13.5px] ${
                  active === item.href
                    ? tones[tone]
                    : `border-transparent text-ink-soft ${tone === "plum" ? "hover:text-plum" : "hover:text-accent"}`
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </nav>
      {stuck ? <div style={{ height }} aria-hidden="true" /> : null}
    </>
  );
}

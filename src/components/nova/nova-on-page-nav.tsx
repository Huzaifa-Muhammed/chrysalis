"use client";

import { useEffect, useRef, useState } from "react";
import type { NavItem } from "@/content/nav";

/**
 * "On this page" nav in the Nova palette. It pins to the top of the viewport
 * once scrolled past — breaking out of the rounded shell, as the design does —
 * and highlights whichever section has most recently passed under it.
 */
export function NovaOnPageNav({ items }: { items: NavItem[] }) {
  const navRef = useRef<HTMLElement>(null);
  const [stuck, setStuck] = useState(false);
  const [height, setHeight] = useState(0);
  const [active, setActive] = useState(items[0]?.href ?? "");

  useEffect(() => {
    const nav = navRef.current;
    if (!nav) return;

    // Measured while unpinned, so the anchor point stays honest across resizes.
    let anchorTop = 0;
    function measure() {
      if (!nav) return;
      setHeight(nav.offsetHeight);
      anchorTop = nav.getBoundingClientRect().top + window.scrollY;
    }

    function onScroll() {
      setStuck(window.scrollY > anchorTop);

      let current = items[0]?.href ?? "";
      for (const item of items) {
        const target = document.querySelector(item.href);
        if (target instanceof HTMLElement && target.getBoundingClientRect().top <= 140) {
          current = item.href;
        }
      }
      setActive(current);
    }

    function onResize() {
      setStuck(false);
      measure();
      onScroll();
    }

    measure();
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, [items]);

  return (
    <>
      <nav
        ref={navRef}
        aria-label="On this page"
        className={`z-30 border-b border-nova-line bg-nova-band ${
          stuck
            ? "fixed top-0 right-0 left-0 shadow-[0_6px_20px_rgba(0,0,0,.07)]"
            : "relative"
        }`}
      >
        <div className="mx-auto flex min-h-14 max-w-[var(--nova-max)] items-center gap-[30px] px-[var(--nova-gut)] max-[860px]:min-h-[50px] max-[860px]:gap-0">
          <span className="flex-none font-nova-display text-[15px] font-medium text-nova-muted max-[860px]:hidden">
            On this page
          </span>
          <div className="flex min-w-0 flex-1 items-center gap-[26px] overflow-x-auto [scrollbar-width:none] max-[860px]:gap-[22px] [&::-webkit-scrollbar]:hidden">
            {items.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`border-b-2 py-[18px] text-sm whitespace-nowrap transition-colors max-[860px]:py-[15px] max-[860px]:text-[13.5px] ${
                  active === item.href
                    ? "border-coral text-coral"
                    : "border-transparent text-nova-ink-2 hover:text-nova-ink"
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

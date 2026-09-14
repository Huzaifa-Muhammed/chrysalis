"use client";

import { useEffect, useState } from "react";

/**
 * Floating Get Started button. It appears once the hero CTA has scrolled away
 * and stands down again over any band that already shows its own Start buttons,
 * so it never sits on top of the plan table or a rail footer.
 */
export function GetStartedFab() {
  const [shown, setShown] = useState(false);

  useEffect(() => {
    function sync() {
      const hero = document.getElementById("experience-cta");
      let show = hero ? hero.getBoundingClientRect().bottom < 0 : false;

      if (show) {
        const standDowns = document.querySelectorAll("[data-fab-stand-down]");
        for (const element of standDowns) {
          const box = element.getBoundingClientRect();
          if (box.bottom > 0 && box.top < window.innerHeight) {
            show = false;
            break;
          }
        }
      }
      setShown(show);
    }

    sync();
    window.addEventListener("scroll", sync, { passive: true });
    window.addEventListener("resize", sync);
    return () => {
      window.removeEventListener("scroll", sync);
      window.removeEventListener("resize", sync);
    };
  }, []);

  return (
    <a
      href="#get-started"
      data-join="Not sure yet"
      aria-label="Get started with EDU Concierge"
      aria-hidden={!shown}
      tabIndex={shown ? 0 : -1}
      className={`group fixed right-[26px] bottom-[26px] z-[400] inline-flex items-center gap-[11px] rounded-full bg-coral py-2 pr-6 pl-2 font-nova-display text-sm font-semibold text-white shadow-[0_12px_30px_rgba(244,85,43,.36)] transition-[opacity,transform,visibility,background] duration-300 hover:bg-coral-dk max-[680px]:right-3.5 max-[680px]:bottom-3.5 max-[680px]:py-[7px] max-[680px]:pr-5 max-[680px]:pl-[7px] max-[680px]:text-[13.5px] ${
        shown ? "visible translate-y-0 opacity-100" : "invisible translate-y-3.5 opacity-0"
      }`}
    >
      <span className="flex h-[34px] w-[34px] flex-none items-center justify-center rounded-full bg-white/25 text-[15px] transition-transform duration-300 group-hover:rotate-45 max-[680px]:h-8 max-[680px]:w-8">
        ↗
      </span>
      <span>Get Started</span>
    </a>
  );
}

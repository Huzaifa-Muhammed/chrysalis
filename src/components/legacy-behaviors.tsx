"use client";

import { useEffect } from "react";

/** Scroll behaviours for the static-markup pages: fade-in on `.reveal`, and
 *  (with `onPage`) the sticky "On this page" bar with its active-section
 *  highlight. Works on the server-rendered DOM, so the markup stays static. */
export function LegacyBehaviors({ onPage = false }: { onPage?: boolean }) {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 },
    );
    document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!onPage) return;
    const bar = document.getElementById("onPage");
    if (!bar) return;
    const links = Array.from(bar.querySelectorAll<HTMLAnchorElement>(".onpage-links a"));
    const targets = links.map((a) => document.querySelector(a.getAttribute("href") ?? ""));
    let top = 0;
    let spacer: HTMLDivElement | null = null;

    function measure() {
      bar!.classList.remove("stuck");
      if (spacer) spacer.style.height = "0px";
      top = bar!.getBoundingClientRect().top + window.pageYOffset;
    }
    function update() {
      const stuck = window.pageYOffset > top;
      if (stuck && !bar!.classList.contains("stuck")) {
        if (!spacer) {
          spacer = document.createElement("div");
          bar!.parentNode?.insertBefore(spacer, bar!.nextSibling);
        }
        spacer.style.height = `${bar!.offsetHeight}px`;
        bar!.classList.add("stuck");
      } else if (!stuck && bar!.classList.contains("stuck")) {
        bar!.classList.remove("stuck");
        if (spacer) spacer.style.height = "0px";
      }
      let current = -1;
      targets.forEach((t, i) => {
        if (t && t.getBoundingClientRect().top <= 140) current = i;
      });
      links.forEach((a, i) => a.classList.toggle("on", i === current));
    }
    function onResize() {
      measure();
      update();
    }

    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", onResize);
    measure();
    update();
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", onResize);
      spacer?.remove();
      bar.classList.remove("stuck");
    };
  }, [onPage]);

  return null;
}

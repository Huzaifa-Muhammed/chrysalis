"use client";

import { useCallback, useEffect, useRef, useState } from "react";

/** One generic slider drives every card rail on the Nova pages: native
 *  horizontal scrolling, arrows that page by one card, and a progress bar. */
export function CardRail({
  title,
  lede,
  children,
  footer,
}: {
  title: string;
  lede?: string;
  children: React.ReactNode;
  footer?: React.ReactNode;
}) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const measure = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    const scrollable = track.scrollWidth - track.clientWidth;
    setProgress(scrollable > 0 ? track.scrollLeft / scrollable : 1);
    setAtStart(track.scrollLeft <= 1);
    setAtEnd(track.scrollLeft >= scrollable - 1);
  }, []);

  useEffect(() => {
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [measure]);

  function page(direction: 1 | -1) {
    const track = trackRef.current;
    if (!track) return;
    const card = track.firstElementChild as HTMLElement | null;
    const step = card ? card.offsetWidth + 16 : track.clientWidth * 0.8;
    track.scrollBy({ left: step * direction, behavior: "smooth" });
  }

  return (
    <>
      <div className="flex flex-wrap items-end justify-between gap-5">
        <div>
          <h2 className="font-nova-display text-[clamp(24px,2.5vw,34px)] leading-[1.06] font-normal tracking-[-.01em] uppercase">
            {title}
          </h2>
          {lede ? (
            <p className="mt-3.5 max-w-[52ch] text-[13.5px] leading-[1.75] text-nova-muted">{lede}</p>
          ) : null}
        </div>
        <div className="flex gap-2">
          <button
            type="button"
            aria-label="Previous"
            onClick={() => page(-1)}
            disabled={atStart}
            className="h-10 w-10 cursor-pointer rounded-full border border-nova-line bg-white text-nova-ink transition-opacity disabled:cursor-default disabled:opacity-35"
          >
            ←
          </button>
          <button
            type="button"
            aria-label="Next"
            onClick={() => page(1)}
            disabled={atEnd}
            className="h-10 w-10 cursor-pointer rounded-full border border-coral bg-coral text-white transition-opacity disabled:cursor-default disabled:opacity-35"
          >
            →
          </button>
        </div>
      </div>

      <div
        ref={trackRef}
        onScroll={measure}
        className="mt-[34px] flex snap-x snap-mandatory gap-4 overflow-x-auto pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {children}
      </div>

      <div
        data-fab-stand-down={footer ? "" : undefined}
        className="mt-[26px] flex flex-wrap items-center gap-6"
      >
        <span className="block h-[3px] min-w-[120px] flex-1 overflow-hidden rounded-full bg-nova-line">
          <i
            className="block h-full rounded-full bg-coral transition-[width] duration-200"
            style={{ width: `${Math.max(progress * 100, 8)}%` }}
          />
        </span>
        {footer}
      </div>
    </>
  );
}

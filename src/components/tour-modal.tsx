"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { tourCards, type TourCard } from "@/content/home";

/** The 30-second tour: a phone-shaped story player over a scrim.
 *  Arrow keys, swipe and the tap-through bars all move between slides. */
export function TourModal({ onClose }: { onClose: () => void }) {
  const [index, setIndex] = useState(0);
  const touchStart = useRef<number | null>(null);
  const last = tourCards.length - 1;

  const go = useCallback(
    (next: number) => setIndex(Math.min(Math.max(next, 0), last)),
    [last],
  );

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowRight") setIndex((i) => Math.min(i + 1, last));
      if (event.key === "ArrowLeft") setIndex((i) => Math.max(i - 1, 0));
    }
    document.addEventListener("keydown", onKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [last, onClose]);

  const card = tourCards[index];

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Education Concierge — a 30 second tour"
      className="fixed inset-0 z-[500] flex items-center justify-center bg-[rgba(40,26,66,.8)] backdrop-blur-[4px]"
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div className="relative h-[min(760px,90vh)] w-[min(430px,94vw)] overflow-hidden rounded-[22px] bg-white shadow-[0_30px_80px_rgba(0,0,0,.5)] max-[720px]:h-screen max-[720px]:w-screen max-[720px]:rounded-none">
        {card.cover ? (
          <button
            type="button"
            aria-label="Close tour"
            onClick={onClose}
            className="absolute top-4 right-[18px] z-[4] h-8 w-8 cursor-pointer rounded-full border-0 bg-white/20 text-[13px] text-white"
          >
            ✕
          </button>
        ) : (
          <>
            <div className="pointer-events-none absolute inset-x-0 top-0 z-[2] h-24 bg-gradient-to-b from-white/95 via-white/85 to-transparent" />
            <div className="absolute inset-x-0 top-0 z-[3] flex items-center gap-3 px-[18px] pt-4 pb-1.5">
              <div className="flex flex-1 gap-[5px]">
                {tourCards.map((slide, i) => (
                  <button
                    key={slide.heading}
                    type="button"
                    aria-label={"Slide " + (i + 1)}
                    onClick={() => go(i)}
                    className="h-[3px] flex-1 cursor-pointer overflow-hidden border-0 bg-ink/[.14] p-0"
                  >
                    <span
                      className="block h-full bg-ink transition-[width] duration-300"
                      style={{ width: i <= index ? "100%" : "0%" }}
                    />
                  </button>
                ))}
              </div>
              <button
                type="button"
                aria-label="Close tour"
                onClick={onClose}
                className="h-8 w-8 flex-none cursor-pointer rounded-full border-0 bg-ink/[.08] text-[13px] text-ink"
              >
                ✕
              </button>
            </div>
            <div className="absolute inset-x-0 top-10 z-[3] px-5 pt-1 font-mono text-[11px] font-medium tracking-[3px] text-muted-3 uppercase">
              Education Concierge
            </div>
          </>
        )}

        <div
          className="absolute inset-0 z-[1] overflow-hidden [touch-action:pan-y]"
          onTouchStart={(event) => {
            touchStart.current = event.touches[0].clientX;
          }}
          onTouchEnd={(event) => {
            if (touchStart.current === null) return;
            const delta = event.changedTouches[0].clientX - touchStart.current;
            if (Math.abs(delta) > 40) go(index + (delta < 0 ? 1 : -1));
            touchStart.current = null;
          }}
        >
          <div
            className="flex h-full w-full transition-transform duration-300 ease-[cubic-bezier(.4,0,.2,1)]"
            style={{ transform: "translateX(-" + index * 100 + "%)" }}
          >
            {tourCards.map((slide) => (
              <TourSlide key={slide.heading} card={slide} />
            ))}
          </div>
        </div>

        {card.closing ? (
          <div className="absolute inset-x-0 bottom-0 z-[3] flex items-center gap-2.5 border-t border-line-2 bg-white px-[18px] py-3.5">
            <a
              href="mailto:concierge@chrysalis.education?subject=Book%20a%20free%20consultation"
              className="block flex-1 rounded-lg bg-ink p-3.5 text-center font-display text-sm font-bold text-white"
            >
              Book a free consultation
            </a>
          </div>
        ) : null}
      </div>
    </div>
  );
}

function TourSlide({ card }: { card: TourCard }) {
  if (card.cover) {
    return (
      <div className="flex h-full w-full flex-none flex-col overflow-hidden">
        <div className="relative flex-1 overflow-hidden" style={{ background: card.bg }}>
          <Image
            src="/img/tour-cover.jpg"
            alt=""
            fill
            sizes="430px"
            className="object-cover object-[50%_30%]"
          />
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(20,14,30,.72)_0%,rgba(20,14,30,.28)_42%,rgba(20,14,30,.86)_100%)]" />
          <div className="absolute inset-0 flex flex-col justify-end gap-3.5 px-[30px] pt-[34px] pb-11">
            <div className="font-mono text-[10.5px] tracking-[3px] text-white/70 uppercase">
              A 30 second tour
            </div>
            <h3 className="font-display text-[30px] leading-[1.08] font-extrabold tracking-[-.02em] whitespace-pre-line text-white">
              {card.heading}
            </h3>
            <div className="h-[3px] w-[46px] bg-amber-2" />
            <div className="text-[13px] text-white/80">{card.sub}</div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex h-full w-full flex-none flex-col overflow-hidden">
      <div className="flex h-full flex-col overflow-hidden bg-white px-[62px] pt-[88px] pb-[78px] max-[720px]:px-[30px] max-[720px]:pt-[76px] max-[720px]:pb-[68px]">
        <div
          className="relative flex flex-none basis-[40%] items-center justify-center overflow-hidden rounded-2xl"
          style={{ background: card.bg }}
        >
          <span className="font-mono text-[10px] tracking-[2px] text-white/60 uppercase">
            {card.slot ?? "Photo"}
          </span>
        </div>
        <div className="flex min-h-0 flex-1 flex-col items-center justify-center gap-3.5 px-0.5 pt-[34px] pb-2.5 text-center">
          {card.emoji ? <div className="text-[30px] leading-none">{card.emoji}</div> : null}
          <h3
            className="font-display leading-[1.18] font-bold tracking-[-.015em] text-pretty text-ink"
            style={{ fontSize: card.closing ? 24 : 21 }}
          >
            {card.heading}
          </h3>
          {card.chip ? (
            <span className="inline-flex items-center gap-[9px] rounded-lg border border-current px-3.5 py-[9px] font-display text-[11.5px] font-bold tracking-[1.6px] text-plum uppercase">
              {card.chip}
            </span>
          ) : null}
          {card.sub ? (
            <p className="max-w-[30ch] text-[12.5px] leading-[1.65] text-ink-soft">{card.sub}</p>
          ) : null}
        </div>
      </div>
    </div>
  );
}

"use client";

import { useEffect } from "react";

/** The 30-second tour: the standalone /tour.html story player, shown full-screen
 *  in an iframe. Escape or the close button dismisses it. */
export function TourModal({ onClose }: { onClose: () => void }) {
  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") onClose();
    }
    document.addEventListener("keydown", onKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [onClose]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="EDU Concierge — a short tour"
      className="fixed inset-0 z-[500] bg-[#2a1a45]"
    >
      <iframe
        src="/tour.html"
        title="EDU Concierge — a short tour"
        className="absolute inset-0 block h-full w-full border-0"
      />
      <button
        type="button"
        aria-label="Close tour"
        onClick={onClose}
        className="absolute top-[22px] right-6 z-[2] h-[42px] w-[42px] cursor-pointer rounded-full border border-white/[.28] bg-white/[.12] text-[15px] text-white backdrop-blur-[6px] transition-colors hover:bg-white/[.24] max-[720px]:top-[calc(env(safe-area-inset-top,0px)+34px)] max-[720px]:right-3 max-[720px]:h-[34px] max-[720px]:w-[34px] max-[720px]:border-white/[.35] max-[720px]:bg-[rgba(20,20,26,.35)] max-[720px]:text-[13px]"
      >
        ✕
      </button>
    </div>
  );
}

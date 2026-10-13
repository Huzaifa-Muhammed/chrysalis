"use client";

import { useEffect, useRef, useState } from "react";

/** Counts up to `end` the first time it scrolls into view. Renders the final
 *  value on the server and when reduced motion is requested. */
export function CountUp({ end, duration = 1400 }: { end: number; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [value, setValue] = useState(end);

  useEffect(() => {
    const el = ref.current;
    if (!el || !("IntersectionObserver" in window)) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let raf = 0;
    const io = new IntersectionObserver(
      (entries) => {
        if (!entries[0].isIntersecting) return;
        io.disconnect();
        let t0: number | null = null;
        const step = (t: number) => {
          if (t0 === null) t0 = t;
          const k = Math.min((t - t0) / duration, 1);
          setValue(Math.round(end * (1 - Math.pow(1 - k, 3))));
          if (k < 1) raf = requestAnimationFrame(step);
        };
        setValue(0);
        raf = requestAnimationFrame(step);
      },
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [end, duration]);

  return <span ref={ref}>{value.toLocaleString("en-US")}</span>;
}

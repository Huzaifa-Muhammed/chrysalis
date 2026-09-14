"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { mainNav } from "@/content/nav";

export type Brand = "chrysalis" | "nova" | "dexter";

const drawerTheme: Record<Brand, { panel: string; hover: string; eyebrow: string }> = {
  chrysalis: {
    panel: "bg-drawer",
    hover: "hover:text-gold focus-visible:text-gold",
    eyebrow: "text-terracotta",
  },
  nova: {
    panel: "bg-drawer",
    hover: "hover:text-coral focus-visible:text-coral",
    eyebrow: "text-coral",
  },
  dexter: {
    panel: "bg-dexter-drawer",
    hover: "hover:text-accent focus-visible:text-accent",
    eyebrow: "text-accent",
  },
};

export function SiteHeader({ brand = "chrysalis" }: { brand?: Brand }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const wrapRef = useRef<HTMLDivElement>(null);
  const theme = drawerTheme[brand];

  // Click-away and Escape both close the drawer, matching the static build.
  useEffect(() => {
    if (!open) return;
    function onPointerDown(event: MouseEvent) {
      if (!wrapRef.current?.contains(event.target as Node)) setOpen(false);
    }
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }
    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <header className="relative z-50 mx-auto grid max-w-[var(--shell)] grid-cols-[auto_1fr_auto] items-center gap-8 px-[var(--gutter)] py-[34px] max-[720px]:gap-4 max-[720px]:py-[22px]">
      <Link href="/" className="block">
        <Image
          src="/img/chrysalis-logo.png"
          alt="Chrysalis Education"
          width={720}
          height={360}
          priority
          className="h-[54px] w-auto max-[720px]:h-[42px]"
        />
      </Link>
      <div />
      <div ref={wrapRef} className="relative flex items-center gap-[26px] max-[720px]:gap-[14px]">
        <button
          type="button"
          aria-label="Menu"
          aria-expanded={open}
          aria-controls="drawer"
          onClick={() => setOpen((value) => !value)}
          className="flex h-11 w-11 cursor-pointer flex-col items-center justify-center gap-[5px] border-0 bg-transparent"
        >
          <span
            className={`block h-0.5 w-5 bg-ink-2 transition-transform duration-200 ${open ? "translate-y-[7px] rotate-45" : ""}`}
          />
          <span
            className={`block h-0.5 w-[14px] bg-ink-2 transition-opacity duration-200 ${open ? "opacity-0" : ""}`}
          />
          <span
            className={`block h-0.5 bg-ink-2 transition-transform duration-200 ${open ? "w-5 -translate-y-[7px] -rotate-45" : "w-5"}`}
          />
        </button>

        <nav
          id="drawer"
          aria-label="Main"
          hidden={!open}
          className={`absolute top-14 right-0 z-40 flex w-[318px] flex-col pb-[22px] shadow-[0_20px_50px_rgba(0,0,0,.35)] max-[720px]:fixed max-[720px]:inset-y-0 max-[720px]:top-0 max-[720px]:w-[min(88vw,318px)] max-[720px]:overflow-y-auto max-[720px]:pt-20 ${theme.panel}`}
        >
          <div
            className={`px-[26px] pt-[26px] pb-[22px] font-mono text-[11px] tracking-[3px] uppercase ${theme.eyebrow}`}
          >
            {"// Navigate Chrysalis"}
          </div>
          {mainNav.map((item) => {
            const current = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={current ? "page" : undefined}
                onClick={() => setOpen(false)}
                className={`block border-b border-white/[.14] px-[26px] py-5 font-display text-[17px] font-semibold tracking-[-.01em] transition-colors last:border-b-0 hover:bg-white/[.04] ${current ? "text-amber" : "text-cream"} ${theme.hover}`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}

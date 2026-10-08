"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

/** Top bar, slide-out menu and "Speak to us" button for the Chrysalis School
 *  pages (Why Chrysalis, Support Center). Styled by the page's own scoped CSS. */

type Key = "why" | "support";

const sections: {
  key?: Key;
  label: string;
  href?: string;
  links?: { href: string; label: string }[];
}[] = [
  {
    label: "About",
    links: [
      { href: "/about#welcome", label: "Welcome Message from Principal" },
      { href: "/about#vision", label: "Vision and Mission" },
      { href: "/about#team", label: "Our Team" },
      { href: "/about#documents", label: "Key Documents and Policies" },
    ],
  },
  {
    key: "why",
    label: "Why Chrysalis School",
    links: [
      { href: "/why#innovation", label: "Innovation" },
      { href: "/why#life", label: "Life at Chrysalis" },
      { href: "/concierge", label: "Education Concierge" },
      { href: "/why#promise", label: "Our Promise" },
    ],
  },
  {
    label: "Admission",
    links: [
      { href: "/admission#process", label: "Process" },
      { href: "/admission#fee", label: "Fee" },
      { href: "/admission#register", label: "Register" },
    ],
  },
  {
    label: "Curriculum",
    links: [
      { href: "/curriculum#overview", label: "Overview" },
      { href: "/curriculum#secondary", label: "Secondary" },
      { href: "/curriculum#approaches", label: "Learning Approaches" },
    ],
  },
  {
    label: "Dexter",
    links: [
      { href: "/dexter", label: "Overview" },
      { href: "/dexter/dexter-vs", label: "10 Reasons" },
      { href: "/dexter/a-day-with-dexter", label: "A Day with Dexter" },
      { href: "/dexter/behind-dexter", label: "Behind Dexter" },
    ],
  },
  {
    label: "Parent Resources",
    links: [
      { href: "/parent-resources#news", label: "News" },
      { href: "/parent-resources#calendar", label: "Calendar" },
      { href: "/parent-resources#portal", label: "Parent Portal" },
      { href: "/library", label: "Knowledge Library" },
      { href: "/community", label: "Community" },
    ],
  },
  { label: "Careers", href: "/careers" },
  {
    key: "support",
    label: "Support Center",
    links: [
      { href: "/support#chat", label: "Chat" },
      { href: "/support#faqs", label: "FAQs" },
    ],
  },
];

export function SchoolChrome({ active }: { active: Key }) {
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState<string>(
    () => sections.find((section) => section.key === active)?.label ?? "",
  );

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    if (!open) return;
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header className="page-topbar">
        <button
          className="pill-explore"
          id="menuBtn"
          aria-label="Explore the school"
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          <span className="ham">
            <span />
            <span />
            <span />
          </span>
          <span className="pill-text">Explore the school</span>
        </button>

        <Link href="/school" className="brand">
          <span className="brand-mark">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/img/chrysalis-logo.png" alt="Chrysalis" />
          </span>
          <span className="brand-text">
            <span className="b1">Chrysalis</span>
            <span className="b2">School</span>
          </span>
        </Link>

        <nav className="nav-right">
          <Link href="/admission#register" className="nav-login">
            Apply
          </Link>
          <Link href="/admission" className="nav-reg">
            <span className="reg-dot" aria-hidden="true" />
            <span className="reg-text">
              Registration open · <strong>Sep 2026</strong>
            </span>
          </Link>
        </nav>
      </header>

      <div
        className={`menu-backdrop${open ? " open" : ""}`}
        aria-hidden="true"
        onClick={() => setOpen(false)}
      />
      <div className={`menu-overlay${open ? " open" : ""}`}>
        <div className="menu-overlay-inner">
          <div className="menu-eyebrow">{"// Explore the school"}</div>
          <nav className="menu-links">
            {sections.map((section) =>
              section.links ? (
                <div
                  key={section.label}
                  className={`menu-section${expanded === section.label ? " open" : ""}`}
                >
                  <button
                    className={`menu-section-head${section.key === active ? " is-active" : ""}`}
                    type="button"
                    aria-expanded={expanded === section.label}
                    onClick={() => setExpanded(expanded === section.label ? "" : section.label)}
                  >
                    <span>{section.label}</span>
                    <svg
                      className="chev"
                      viewBox="0 0 12 12"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.6"
                    >
                      <path d="M2 4 L6 8 L10 4" />
                    </svg>
                  </button>
                  <div className="menu-sub">
                    {section.links.map((link) => (
                      <Link key={link.href} href={link.href} onClick={() => setOpen(false)}>
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <div key={section.label} className="menu-section">
                  <Link
                    href={section.href!}
                    className="menu-section-head menu-section-flat"
                    onClick={() => setOpen(false)}
                  >
                    <span>{section.label}</span>
                  </Link>
                </div>
              ),
            )}
          </nav>
          <div className="menu-foot">
            <Link href="/" className="menu-foot-link" onClick={() => setOpen(false)}>
              ↗ Chrysalis hub
            </Link>
            <a href="mailto:hello@chrysalis.education" className="menu-foot-email">
              hello@chrysalis.education
            </a>
          </div>
        </div>
      </div>

      <a
        href="mailto:hello@chrysalis.education?subject=I%27d%20like%20to%20speak%20with%20you"
        className="speak-fab"
        aria-label="Speak to us now"
      >
        <span className="fab-pulse" aria-hidden="true" />
        <span className="fab-icon">
          <svg viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.6">
            <path d="M3 4 Q3 2.5 4.5 2.5 L9.5 2.5 Q11 2.5 11 4 L11 8 Q11 9.5 9.5 9.5 L7 9.5 L4.5 11.5 L4.5 9.5 Q3 9.5 3 8 Z" />
            <circle cx="5.5" cy="6" r="0.6" fill="currentColor" />
            <circle cx="7" cy="6" r="0.6" fill="currentColor" />
            <circle cx="8.5" cy="6" r="0.6" fill="currentColor" />
          </svg>
        </span>
        <span className="fab-text">Speak to us</span>
      </a>
    </>
  );
}

/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import Link from "next/link";
import { PageScripts } from "@/components/page-scripts";
import { SiteFooter } from "@/components/site-footer";
import scripts from "./scripts";
import "./school.css";

export const metadata: Metadata = {
  title: "Chrysalis School",
  description:
    "Chrysalis School — an online school built for the medium first.",
};

export default function SchoolPage() {
  return (
    <>
      <div className="pg-school">
        <section className="hero">
          <div className="hero-frame">
            <header className="topbar">
              <button className="pill-explore" id="menuBtn" aria-label="Explore" aria-expanded="false">
                <span className="ham">
                  <span />
                  <span />
                  <span />
                </span>
                <span className="pill-text">Explore the school</span>
              </button>
              <Link href="/" className="brand">
                <span className="brand-mark">
                  <img src="/img/chrysalis-logo.png" alt="Chrysalis" />
                </span>
                <span className="brand-text">
                  <span className="b1">Chrysalis</span>
                  <span className="b2">School</span>
                </span>
              </Link>
              <nav className="nav-right">
                <a href="#login" className="nav-login">Student Login</a>
                <a href="#admissions" className="nav-reg">
                  <span className="reg-dot" aria-hidden="true" />
                  <span className="reg-text">Registration open · <strong>Sep 2026</strong></span>
                </a>
              </nav>
            </header>
            <h1 className="hero-headline">
              <div className="row">
                <span>BUILT FOR</span>
              </div>
              <div className="row">
                <span><em>learning</em>.</span>
              </div>
            </h1>
            <p className="hero-sub"><em>Designed</em> for online learning — not adapted to it. We built the online experience first, then built the school around it.</p>
            <div className="hero-links">
              <a href="#about" className="hero-link">
                <span className="hl-label">About</span>
                <svg className="hl-arr" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <path d="M3 11 L11 3 M5 3 L11 3 L11 9" />
                </svg>
              </a>
              <a href="#why" className="hero-link">
                <span className="hl-label">Why Chrysalis</span>
                <svg className="hl-arr" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <path d="M3 11 L11 3 M5 3 L11 3 L11 9" />
                </svg>
              </a>
              <a href="#admission" className="hero-link">
                <span className="hl-label">Admission</span>
                <svg className="hl-arr" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <path d="M3 11 L11 3 M5 3 L11 3 L11 9" />
                </svg>
              </a>
              <a href="#curriculum" className="hero-link">
                <span className="hl-label">Curriculum</span>
                <svg className="hl-arr" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <path d="M3 11 L11 3 M5 3 L11 3 L11 9" />
                </svg>
              </a>
              <a href="#parents" className="hero-link">
                <span className="hl-label">Parent Resources</span>
                <svg className="hl-arr" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <path d="M3 11 L11 3 M5 3 L11 3 L11 9" />
                </svg>
              </a>
            </div>
          </div>
        </section>
        <div className="menu-backdrop" id="menuBackdrop" aria-hidden="true" />
        <div className="menu-overlay" id="menuOverlay">
          <div className="menu-overlay-inner">
            <div className="menu-eyebrow">/&#47; Explore the school</div>
            <nav className="menu-links">
              <div className="menu-section" data-collapsible="">
                <button className="menu-section-head" type="button" aria-expanded="false">
                  <span>About</span>
                  <svg className="chev" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.6">
                    <path d="M2 4 L6 8 L10 4" />
                  </svg>
                </button>
                <div className="menu-sub">
                  <Link href="/about#welcome">Welcome Message from Principal</Link>
                  <Link href="/about#vision">Vision and Mission</Link>
                  <Link href="/about#team">Our Team</Link>
                  <Link href="/about#documents">Key Documents and Policies</Link>
                </div>
              </div>
              <div className="menu-section" data-collapsible="">
                <button className="menu-section-head" type="button" aria-expanded="false">
                  <span>Why Chrysalis School</span>
                  <svg className="chev" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.6">
                    <path d="M2 4 L6 8 L10 4" />
                  </svg>
                </button>
                <div className="menu-sub">
                  <Link href="/why#innovation">Innovation</Link>
                  <Link href="/why#life">Life at Chrysalis</Link>
                  <Link href="/concierge">Education Concierge</Link>
                  <Link href="/why#promise">Our Promise</Link>
                </div>
              </div>
              <div className="menu-section" data-collapsible="">
                <button className="menu-section-head" type="button" aria-expanded="false">
                  <span>Admission</span>
                  <svg className="chev" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.6">
                    <path d="M2 4 L6 8 L10 4" />
                  </svg>
                </button>
                <div className="menu-sub">
                  <Link href="/admission#process">Process</Link>
                  <Link href="/admission#fee">Fee</Link>
                  <Link href="/admission#register">Register</Link>
                </div>
              </div>
              <div className="menu-section" data-collapsible="">
                <button className="menu-section-head" type="button" aria-expanded="false">
                  <span>Curriculum</span>
                  <svg className="chev" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.6">
                    <path d="M2 4 L6 8 L10 4" />
                  </svg>
                </button>
                <div className="menu-sub">
                  <Link href="/curriculum#overview">Overview</Link>
                  <Link href="/curriculum#secondary">Secondary</Link>
                  <Link href="/curriculum#approaches">Learning Approaches</Link>
                </div>
              </div>
              <div className="menu-section" data-collapsible="">
                <button className="menu-section-head" type="button" aria-expanded="false">
                  <span>Dexter</span>
                  <svg className="chev" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.6">
                    <path d="M2 4 L6 8 L10 4" />
                  </svg>
                </button>
                <div className="menu-sub">
                  <Link href="/dexter">Overview</Link>
                  <Link href="/dexter/dexter-vs">10 Reasons</Link>
                  <Link href="/dexter/a-day-with-dexter">A Day with Dexter</Link>
                  <Link href="/dexter/behind-dexter">Behind Dexter</Link>
                </div>
              </div>
              <div className="menu-section" data-collapsible="">
                <button className="menu-section-head" type="button" aria-expanded="false">
                  <span>Parent Resources</span>
                  <svg className="chev" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.6">
                    <path d="M2 4 L6 8 L10 4" />
                  </svg>
                </button>
                <div className="menu-sub">
                  <Link href="/parent-resources#news">News</Link>
                  <Link href="/parent-resources#calendar">Calendar</Link>
                  <Link href="/parent-resources#portal">Parent Portal</Link>
                  <Link href="/library">Knowledge Library</Link>
                  <Link href="/community">Community</Link>
                </div>
              </div>
              <div className="menu-section">
                <Link href="/careers" className="menu-section-head menu-section-flat">
                  <span>Careers</span>
                </Link>
              </div>
              <div className="menu-section" data-collapsible="">
                <button className="menu-section-head" type="button" aria-expanded="false">
                  <span>Support Center</span>
                  <svg className="chev" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.6">
                    <path d="M2 4 L6 8 L10 4" />
                  </svg>
                </button>
                <div className="menu-sub">
                  <Link href="/support#chat">Chat</Link>
                  <Link href="/support#faqs">FAQs</Link>
                </div>
              </div>
            </nav>
            <div className="menu-foot">
              <Link href="/" className="menu-foot-link">↗ Back to Chrysalis</Link>
              <Link href="/concierge" className="menu-foot-link">↗ EDU Concierge</Link>
              <Link href="/dexter" className="menu-foot-link">↗ Dexter</Link>
              <a href="mailto:hello@chrysalis.education" className="menu-foot-email">hello@chrysalis.education</a>
            </div>
          </div>
        </div>
        <a href="mailto:hello@chrysalis.education?subject=I%27d%20like%20to%20speak%20with%20you" className="speak-fab" aria-label="Speak to us now">
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
        <PageScripts scripts={scripts} />
        <SiteFooter variant="spread" />
      </div>
    </>
  );
}

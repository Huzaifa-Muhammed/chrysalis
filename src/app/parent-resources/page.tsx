/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import Link from "next/link";
import { PageScripts } from "@/components/page-scripts";
import { SiteFooter } from "@/components/site-footer";
import scripts from "./scripts";
import "./parent-resources.css";

export const metadata: Metadata = {
  title: "Parent Resources",
  description:
    "Term dates, exam calendars, news and the parent portal for Chrysalis Education families.",
};

export default function ParentResourcesPage() {
  return (
    <>
      <div className="pg-parent-resources">
        <div className="page-wrap">
          <header className="page-topbar">
            <button className="pill-explore" id="menuBtn" aria-label="Explore the school" aria-expanded="false">
              <span className="ham">
                <span />
                <span />
                <span />
              </span>
              <span className="pill-text">Explore the school</span>
            </button>
            <Link href="/school" className="brand">
              <span className="brand-mark">
                <img src="/img/chrysalis-logo.png" alt="Chrysalis" />
              </span>
              <span className="brand-text">
                <span className="b1">Chrysalis</span>
                <span className="b2">School</span>
              </span>
            </Link>
            <nav className="nav-right">
              <Link href="/admission#register" className="nav-login">Apply</Link>
              <Link href="/admission" className="nav-reg">
                <span className="reg-dot" aria-hidden="true" />
                <span className="reg-text">Registration open · <strong>Sep 2026</strong></span>
              </Link>
            </nav>
          </header>
          <nav className="onpage" id="onPage" aria-label="On this page">
            <div className="onpage-in">
              <span className="onpage-label">On this page</span>
              <div className="onpage-links">
                <a href="#news">News</a>
                <a href="#calendar">Calendar</a>
                <a href="#portal">Parent Portal</a>
              </div>
            </div>
          </nav>
          <section className="page-hero">
            <div className="page-hero-inner">
              <div>
                <div className="eyebrow-mono">Parent Resources</div>
                <h1>Everything a parent <em>needs</em>, in one place.</h1>
              </div>
              <p className="hero-lead">School news, term calendar, parent portal access, and the wider Chrysalis ecosystem — Knowledge Library and Community — all linked from here.</p>
            </div>
          </section>
          <section className="section paper reveal">
            <div className="section-inner">
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>
                <Link href="/library" className="card" style={{ padding: "36px", display: "flex", flexDirection: "column", gap: "12px", cursor: "pointer" }}>
                  <div className="eyebrow-mono">↗ External resource</div>
                  <h3>Knowledge <em>Library</em>.</h3>
                  <p style={{ margin: "0" }}>Weekly editorial notes from Chrysalis School on learning, parenting, and wellbeing — written by educators, for parents.</p>
                  <span className="btn-secondary" style={{ alignSelf: "flex-start", marginTop: "14px" }}>Open Library</span>
                </Link>
                <Link href="/community" className="card plum" style={{ padding: "36px", display: "flex", flexDirection: "column", gap: "12px" }}>
                  <div className="eyebrow-mono" style={{ color: "var(--butter)" }}>↗ External resource</div>
                  <h3>Parent <em>Community</em>.</h3>
                  <p style={{ margin: "0" }}>Year-group circles, topic forums, principal&apos;s open hours, and live events — the social fabric of the school.</p>
                  <span className="btn-secondary" style={{ alignSelf: "flex-start", marginTop: "14px", borderColor: "var(--paper)", color: "var(--paper)" }}>Open Community</span>
                </Link>
              </div>
            </div>
          </section>
          <section className="section reveal" id="news">
            <div className="section-inner two-col">
              <div>
                <div className="section-eyebrow"><span className="num">01</span> News</div>
                <h2>What&apos;s <em>happening</em>.</h2>
                <p>School news, parent letters, announcement archive, and the Friday briefing. We send one weekly digest by email; everything is also archived here.</p>
                <p style={{ marginTop: "20px" }}>
                  <a href="#" className="btn-secondary">Subscribe to the Friday Briefing</a>
                </p>
              </div>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <div style={{ display: "grid", gridTemplateColumns: "110px 1fr auto", gap: "20px", alignItems: "start", padding: "18px 0", borderBottom: "1px solid var(--hairline-soft)" }}>
                  <span style={{ fontFamily: "var(--mono)", fontSize: "11px", letterSpacing: "0.06em", color: "var(--muted)", paddingTop: "3px" }}>10 May 2026</span>
                  <div>
                    <div style={{ fontFamily: "var(--display)", fontWeight: "500", fontSize: "15px", color: "var(--ink)" }}>Inaugural intake — final two weeks of applications open</div>
                  </div>
                  <span className="pill" style={{ fontSize: "10px" }}>Announcement</span>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "110px 1fr auto", gap: "20px", alignItems: "start", padding: "18px 0", borderBottom: "1px solid var(--hairline-soft)" }}>
                  <span style={{ fontFamily: "var(--mono)", fontSize: "11px", letterSpacing: "0.06em", color: "var(--muted)", paddingTop: "3px" }}>28 Apr 2026</span>
                  <div>
                    <div style={{ fontFamily: "var(--display)", fontWeight: "500", fontSize: "15px", color: "var(--ink)" }}>Meet the Heads of Subject — recorded session now available</div>
                  </div>
                  <span className="pill" style={{ fontSize: "10px" }}>Event</span>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "110px 1fr auto", gap: "20px", alignItems: "start", padding: "18px 0", borderBottom: "1px solid var(--hairline-soft)" }}>
                  <span style={{ fontFamily: "var(--mono)", fontSize: "11px", letterSpacing: "0.06em", color: "var(--muted)", paddingTop: "3px" }}>12 Apr 2026</span>
                  <div>
                    <div style={{ fontFamily: "var(--display)", fontWeight: "500", fontSize: "15px", color: "var(--ink)" }}>Spring parent briefing: how we will handle exam preparation in Y10–11</div>
                  </div>
                  <span className="pill" style={{ fontSize: "10px" }}>Briefing</span>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "110px 1fr auto", gap: "20px", alignItems: "start", padding: "18px 0", borderBottom: "1px solid var(--hairline-soft)" }}>
                  <span style={{ fontFamily: "var(--mono)", fontSize: "11px", letterSpacing: "0.06em", color: "var(--muted)", paddingTop: "3px" }}>30 Mar 2026</span>
                  <div>
                    <div style={{ fontFamily: "var(--display)", fontWeight: "500", fontSize: "15px", color: "var(--ink)" }}>Curriculum approval finalised — Pearson Edexcel partnership confirmed</div>
                  </div>
                  <span className="pill" style={{ fontSize: "10px" }}>Announcement</span>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "110px 1fr auto", gap: "20px", alignItems: "start", padding: "18px 0", borderBottom: "1px solid var(--hairline-soft)" }}>
                  <span style={{ fontFamily: "var(--mono)", fontSize: "11px", letterSpacing: "0.06em", color: "var(--muted)", paddingTop: "3px" }}>15 Mar 2026</span>
                  <div>
                    <div style={{ fontFamily: "var(--display)", fontWeight: "500", fontSize: "15px", color: "var(--ink)" }}>Principal&apos;s March letter to applying families</div>
                  </div>
                  <span className="pill" style={{ fontSize: "10px" }}>Letter</span>
                </div>
              </div>
            </div>
          </section>
          <section className="section paper reveal" id="calendar">
            <div className="section-inner">
              <div className="section-eyebrow"><span className="num">02</span> Calendar</div>
              <h2>Term <em>dates</em>, exam windows, and key events.</h2>
              <p style={{ maxWidth: "720px", marginBottom: "48px" }}>Three full terms a year. Six half-term breaks. External exam sittings in May–June. The current 2026–2027 academic calendar is shown below.</p>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "20px" }}>
                <div className="card">
                  <h3 style={{ fontSize: "18px" }}>Autumn Term 2026</h3>
                  <p style={{ fontFamily: "var(--mono)", fontSize: "12px", letterSpacing: "0.04em", color: "var(--accent)", marginBottom: "14px" }}>Mon 07 Sep 2026 → Fri 18 Dec 2026</p>
                  <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "6px" }}>
                    <li style={{ fontSize: "13.5px", color: "var(--ink-soft)", padding: "4px 0", borderTop: "1px solid var(--hairline-soft)" }}>Mid-term break: 19–23 Oct</li>
                    <li style={{ fontSize: "13.5px", color: "var(--ink-soft)", padding: "4px 0", borderTop: "1px solid var(--hairline-soft)" }}>Parent week: 09–13 Nov</li>
                    <li style={{ fontSize: "13.5px", color: "var(--ink-soft)", padding: "4px 0", borderTop: "1px solid var(--hairline-soft)" }}>Project week: 14–18 Dec</li>
                  </ul>
                </div>
                <div className="card">
                  <h3 style={{ fontSize: "18px" }}>Spring Term 2027</h3>
                  <p style={{ fontFamily: "var(--mono)", fontSize: "12px", letterSpacing: "0.04em", color: "var(--accent)", marginBottom: "14px" }}>Mon 11 Jan 2027 → Fri 02 Apr 2027</p>
                  <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "6px" }}>
                    <li style={{ fontSize: "13.5px", color: "var(--ink-soft)", padding: "4px 0", borderTop: "1px solid var(--hairline-soft)" }}>Mid-term break: 22–26 Feb</li>
                    <li style={{ fontSize: "13.5px", color: "var(--ink-soft)", padding: "4px 0", borderTop: "1px solid var(--hairline-soft)" }}>Parent week: 08–12 Mar</li>
                    <li style={{ fontSize: "13.5px", color: "var(--ink-soft)", padding: "4px 0", borderTop: "1px solid var(--hairline-soft)" }}>IGCSE mocks: 22 Mar – 02 Apr</li>
                  </ul>
                </div>
                <div className="card">
                  <h3 style={{ fontSize: "18px" }}>Summer Term 2027</h3>
                  <p style={{ fontFamily: "var(--mono)", fontSize: "12px", letterSpacing: "0.04em", color: "var(--accent)", marginBottom: "14px" }}>Mon 26 Apr 2027 → Fri 16 Jul 2027</p>
                  <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "6px" }}>
                    <li style={{ fontSize: "13.5px", color: "var(--ink-soft)", padding: "4px 0", borderTop: "1px solid var(--hairline-soft)" }}>Mid-term break: 31 May – 04 Jun</li>
                    <li style={{ fontSize: "13.5px", color: "var(--ink-soft)", padding: "4px 0", borderTop: "1px solid var(--hairline-soft)" }}>IGCSE/IAL exam window: 03 May – 18 Jun</li>
                    <li style={{ fontSize: "13.5px", color: "var(--ink-soft)", padding: "4px 0", borderTop: "1px solid var(--hairline-soft)" }}>Project showcase: 12–16 Jul</li>
                  </ul>
                </div>
              </div>
              <p style={{ marginTop: "32px", fontSize: "13px", color: "var(--muted)" }}>Download as ICS (calendar subscribe) · Print-friendly PDF — both available via Parent Portal once enrolled.</p>
            </div>
          </section>
          <section className="section reveal" id="portal">
            <div className="section-inner two-col">
              <div>
                <div className="section-eyebrow"><span className="num">03</span> Parent Portal</div>
                <h2>The <em>portal</em>.</h2>
                <p>Once enrolled, every family gets a Parent Portal account. It is where you see — in one place — your child&apos;s timetable, attendance, current work, recent feedback, billing, and the message thread with their Education Manager.</p>
                <p style={{ marginTop: "20px" }}>
                  <a href="#" className="btn-primary">Sign in to Portal</a>
                </p>
                <p style={{ marginTop: "16px", fontSize: "13px", color: "var(--muted)" }}>Forgot your password? Email <a href="mailto:portal@chrysalis.education" style={{ color: "var(--ink)", borderBottom: "1px solid var(--hairline)" }}>portal@chrysalis.education</a>.</p>
              </div>
              <div className="card" style={{ background: "var(--paper)", padding: "28px" }}>
                <div className="eyebrow-mono" style={{ marginBottom: "18px" }}>/&#47; What&apos;s in the portal</div>
                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "12px" }}>
                  <li style={{ display: "grid", gridTemplateColumns: "auto 1fr", gap: "12px", alignItems: "start" }}>
                    <span style={{ fontFamily: "var(--mono)", fontSize: "11px", color: "var(--accent)", paddingTop: "2px" }}>→</span>
                    <div>
                      <div style={{ fontFamily: "var(--display)", fontWeight: "500", fontSize: "14.5px", color: "var(--ink)" }}>Live timetable & class links</div>
                      <div style={{ fontSize: "13px", color: "var(--ink-soft)", marginTop: "2px" }}>One-click join. Lesson recordings appear here within 1 hour.</div>
                    </div>
                  </li>
                  <li style={{ display: "grid", gridTemplateColumns: "auto 1fr", gap: "12px", alignItems: "start" }}>
                    <span style={{ fontFamily: "var(--mono)", fontSize: "11px", color: "var(--accent)", paddingTop: "2px" }}>→</span>
                    <div>
                      <div style={{ fontFamily: "var(--display)", fontWeight: "500", fontSize: "14.5px", color: "var(--ink)" }}>Attendance & punctuality</div>
                      <div style={{ fontSize: "13px", color: "var(--ink-soft)", marginTop: "2px" }}>Updated each lesson. Trend view across the term.</div>
                    </div>
                  </li>
                  <li style={{ display: "grid", gridTemplateColumns: "auto 1fr", gap: "12px", alignItems: "start" }}>
                    <span style={{ fontFamily: "var(--mono)", fontSize: "11px", color: "var(--accent)", paddingTop: "2px" }}>→</span>
                    <div>
                      <div style={{ fontFamily: "var(--display)", fontWeight: "500", fontSize: "14.5px", color: "var(--ink)" }}>Coursework & feedback</div>
                      <div style={{ fontSize: "13px", color: "var(--ink-soft)", marginTop: "2px" }}>Every piece submitted, every teacher comment, all in one feed.</div>
                    </div>
                  </li>
                  <li style={{ display: "grid", gridTemplateColumns: "auto 1fr", gap: "12px", alignItems: "start" }}>
                    <span style={{ fontFamily: "var(--mono)", fontSize: "11px", color: "var(--accent)", paddingTop: "2px" }}>→</span>
                    <div>
                      <div style={{ fontFamily: "var(--display)", fontWeight: "500", fontSize: "14.5px", color: "var(--ink)" }}>Reports & progress</div>
                      <div style={{ fontSize: "13px", color: "var(--ink-soft)", marginTop: "2px" }}>Half-termly reports, end-of-term written commentary.</div>
                    </div>
                  </li>
                  <li style={{ display: "grid", gridTemplateColumns: "auto 1fr", gap: "12px", alignItems: "start" }}>
                    <span style={{ fontFamily: "var(--mono)", fontSize: "11px", color: "var(--accent)", paddingTop: "2px" }}>→</span>
                    <div>
                      <div style={{ fontFamily: "var(--display)", fontWeight: "500", fontSize: "14.5px", color: "var(--ink)" }}>Billing & invoices</div>
                      <div style={{ fontSize: "13px", color: "var(--ink-soft)", marginTop: "2px" }}>View and download. Auto-renewal at term change.</div>
                    </div>
                  </li>
                  <li style={{ display: "grid", gridTemplateColumns: "auto 1fr", gap: "12px", alignItems: "start" }}>
                    <span style={{ fontFamily: "var(--mono)", fontSize: "11px", color: "var(--accent)", paddingTop: "2px" }}>→</span>
                    <div>
                      <div style={{ fontFamily: "var(--display)", fontWeight: "500", fontSize: "14.5px", color: "var(--ink)" }}>Direct message to EM</div>
                      <div style={{ fontSize: "13px", color: "var(--ink-soft)", marginTop: "2px" }}>Your Education Manager, two-way thread.</div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </div>
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
              <div className="menu-section open" data-collapsible="">
                <button className="menu-section-head is-active" type="button" aria-expanded="true">
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
              <Link href="/" className="menu-foot-link">↗ Chrysalis hub</Link>
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

/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import Link from "next/link";
import { PageScripts } from "@/components/page-scripts";
import { SiteFooter } from "@/components/site-footer";
import scripts from "./scripts";
import "./curriculum.css";

export const metadata: Metadata = {
  title: "Curriculum",
  description:
    "What your child studies at Chrysalis Education — curriculum overview from primary through to sixth form, and how we teach it.",
};

export default function CurriculumPage() {
  return (
    <>
      <div className="pg-curriculum">
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
                <a href="#overview">Overview</a>
                <a href="#secondary">Secondary</a>
                <a href="#approaches">Learning Approaches</a>
              </div>
            </div>
          </nav>
          <section className="page-hero">
            <div className="page-hero-inner">
              <div>
                <div className="eyebrow-mono">Curriculum</div>
                <h1>British curriculum. <em>Bent</em> around the student.</h1>
              </div>
              <p className="hero-lead">Pearson Edexcel International GCSE and International A-Level. The most portable, university-recognised, examined-by-an-external-body framework we could choose. Then made flexible by the way we teach it.</p>
            </div>
          </section>
          <section className="section paper reveal" id="overview">
            <div className="section-inner">
              <div className="section-eyebrow"><span className="num">01</span> Overview</div>
              <h2>What your child <em>studies</em>, and why.</h2>
              <div className="two-col" style={{ marginTop: "40px" }}>
                <div>
                  <h3>Why <em>British</em>.</h3>
                  <p>The Pearson Edexcel International GCSE and IAL are the most widely recognised pre-university qualifications outside the US. Universities in the UK, the GCC, Singapore, Australia, and a large chunk of Europe accept them without hesitation. US universities accept them through standardised conversion. They are also examined externally by an independent board — meaning your child&apos;s grades are not just our judgment of their work.</p>
                </div>
                <div>
                  <h3>Why <em>international</em>.</h3>
                  <p>The International (IGCSE/IAL) variant — rather than the domestic UK GCSE — is designed for students outside the UK. Content is globally relevant rather than UK-centric. Exam timings work across time zones. Crucially, your child can take exams in approved centres anywhere in the world.</p>
                </div>
              </div>
              <div style={{ marginTop: "56px", paddingTop: "40px", borderTop: "1px solid var(--hairline)" }}>
                <h3>Subject <em>landscape</em>.</h3>
                <p>The full Edexcel International subject menu is available to us. The subjects below are what we run as full live cohorts from September 2026 onwards. Specialist subjects are available on individual-study tracks with Chrysalis Concierge support.</p>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "12px", marginTop: "28px" }}>
                  <div className="card" style={{ background: "var(--paper)", padding: "20px" }}>
                    <div className="eyebrow-mono" style={{ marginBottom: "12px", fontSize: "10px" }}>/&#47; Core</div>
                    <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "6px" }}>
                      <li style={{ fontSize: "14px", color: "var(--ink)", borderBottom: "1px solid var(--hairline-soft)", paddingBottom: "6px" }}>English Language</li>
                      <li style={{ fontSize: "14px", color: "var(--ink)", borderBottom: "1px solid var(--hairline-soft)", paddingBottom: "6px" }}>English Literature</li>
                      <li style={{ fontSize: "14px", color: "var(--ink)", borderBottom: "1px solid var(--hairline-soft)", paddingBottom: "6px" }}>Mathematics</li>
                      <li style={{ fontSize: "14px", color: "var(--ink)", borderBottom: "1px solid var(--hairline-soft)", paddingBottom: "6px" }}>Further Pure Maths (Y10+)</li>
                    </ul>
                  </div>
                  <div className="card" style={{ background: "var(--paper)", padding: "20px" }}>
                    <div className="eyebrow-mono" style={{ marginBottom: "12px", fontSize: "10px" }}>/&#47; Sciences</div>
                    <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "6px" }}>
                      <li style={{ fontSize: "14px", color: "var(--ink)", borderBottom: "1px solid var(--hairline-soft)", paddingBottom: "6px" }}>Biology</li>
                      <li style={{ fontSize: "14px", color: "var(--ink)", borderBottom: "1px solid var(--hairline-soft)", paddingBottom: "6px" }}>Chemistry</li>
                      <li style={{ fontSize: "14px", color: "var(--ink)", borderBottom: "1px solid var(--hairline-soft)", paddingBottom: "6px" }}>Physics</li>
                      <li style={{ fontSize: "14px", color: "var(--ink)", borderBottom: "1px solid var(--hairline-soft)", paddingBottom: "6px" }}>Combined Science track</li>
                    </ul>
                  </div>
                  <div className="card" style={{ background: "var(--paper)", padding: "20px" }}>
                    <div className="eyebrow-mono" style={{ marginBottom: "12px", fontSize: "10px" }}>/&#47; Humanities</div>
                    <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "6px" }}>
                      <li style={{ fontSize: "14px", color: "var(--ink)", borderBottom: "1px solid var(--hairline-soft)", paddingBottom: "6px" }}>History</li>
                      <li style={{ fontSize: "14px", color: "var(--ink)", borderBottom: "1px solid var(--hairline-soft)", paddingBottom: "6px" }}>Geography</li>
                      <li style={{ fontSize: "14px", color: "var(--ink)", borderBottom: "1px solid var(--hairline-soft)", paddingBottom: "6px" }}>Global Citizenship</li>
                    </ul>
                  </div>
                  <div className="card" style={{ background: "var(--paper)", padding: "20px" }}>
                    <div className="eyebrow-mono" style={{ marginBottom: "12px", fontSize: "10px" }}>/&#47; Languages</div>
                    <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "6px" }}>
                      <li style={{ fontSize: "14px", color: "var(--ink)", borderBottom: "1px solid var(--hairline-soft)", paddingBottom: "6px" }}>Arabic (First & Foreign)</li>
                      <li style={{ fontSize: "14px", color: "var(--ink)", borderBottom: "1px solid var(--hairline-soft)", paddingBottom: "6px" }}>French</li>
                      <li style={{ fontSize: "14px", color: "var(--ink)", borderBottom: "1px solid var(--hairline-soft)", paddingBottom: "6px" }}>Spanish</li>
                    </ul>
                  </div>
                  <div className="card" style={{ background: "var(--paper)", padding: "20px" }}>
                    <div className="eyebrow-mono" style={{ marginBottom: "12px", fontSize: "10px" }}>/&#47; The Arts & Tech</div>
                    <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "6px" }}>
                      <li style={{ fontSize: "14px", color: "var(--ink)", borderBottom: "1px solid var(--hairline-soft)", paddingBottom: "6px" }}>Art & Design</li>
                      <li style={{ fontSize: "14px", color: "var(--ink)", borderBottom: "1px solid var(--hairline-soft)", paddingBottom: "6px" }}>Computer Science</li>
                      <li style={{ fontSize: "14px", color: "var(--ink)", borderBottom: "1px solid var(--hairline-soft)", paddingBottom: "6px" }}>Digital Information Tech</li>
                    </ul>
                  </div>
                  <div className="card" style={{ background: "var(--paper)", padding: "20px" }}>
                    <div className="eyebrow-mono" style={{ marginBottom: "12px", fontSize: "10px" }}>/&#47; Sixth Form Add-ons</div>
                    <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "6px" }}>
                      <li style={{ fontSize: "14px", color: "var(--ink)", borderBottom: "1px solid var(--hairline-soft)", paddingBottom: "6px" }}>Business</li>
                      <li style={{ fontSize: "14px", color: "var(--ink)", borderBottom: "1px solid var(--hairline-soft)", paddingBottom: "6px" }}>Economics</li>
                      <li style={{ fontSize: "14px", color: "var(--ink)", borderBottom: "1px solid var(--hairline-soft)", paddingBottom: "6px" }}>Psychology</li>
                      <li style={{ fontSize: "14px", color: "var(--ink)", borderBottom: "1px solid var(--hairline-soft)", paddingBottom: "6px" }}>EPQ</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="section reveal" id="secondary">
            <div className="section-inner">
              <div className="section-eyebrow"><span className="num">02</span> Secondary</div>
              <h2>From Year 7 to <em>university</em>.</h2>
              <p style={{ maxWidth: "720px", marginBottom: "56px" }}>Secondary at Chrysalis runs over seven years: Lower-Secondary (Y7–9), IGCSE phase (Y10–11), and Sixth Form (Y12–13 = International A-Levels). Each phase is structured differently because each one does a different job.</p>
              <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
                <div className="card" style={{ display: "grid", gridTemplateColumns: "220px 1fr", gap: "32px", alignItems: "start", padding: "32px" }}>
                  <div>
                    <div className="pill butter" style={{ marginBottom: "12px" }}>Y7–9 · Lower Secondary</div>
                    <h3 style={{ margin: "0" }}>Broad foundation</h3>
                  </div>
                  <p style={{ margin: "0" }}>Eleven to thirteen subjects across all departments. The job is not yet specialisation — it&apos;s building the habits and habits of mind that make Y10+ possible. Live class load is moderate; independent study and project work fill the rest.</p>
                </div>
                <div className="card" style={{ display: "grid", gridTemplateColumns: "220px 1fr", gap: "32px", alignItems: "start", padding: "32px" }}>
                  <div>
                    <div className="pill terra" style={{ marginBottom: "12px" }}>Y10–11 · IGCSE Phase</div>
                    <h3 style={{ margin: "0" }}>Externally-examined depth</h3>
                  </div>
                  <p style={{ margin: "0" }}>Eight to ten subjects taken to formal IGCSE qualification. Live teaching is intensive, examination preparation is systematic, and the academic baseline starts being measurable against international peers.</p>
                </div>
                <div className="card" style={{ display: "grid", gridTemplateColumns: "220px 1fr", gap: "32px", alignItems: "start", padding: "32px" }}>
                  <div>
                    <div className="pill leaf" style={{ marginBottom: "12px" }}>Y12–13 · Sixth Form (IAL)</div>
                    <h3 style={{ margin: "0" }}>University specialisation</h3>
                  </div>
                  <p style={{ margin: "0" }}>Three to four subjects taken to A-Level standard. Smaller cohorts, deeper work, structured university guidance from term one. Every student has a named university coach.</p>
                </div>
              </div>
            </div>
          </section>
          <section className="section paper reveal" id="approaches">
            <div className="section-inner">
              <div className="section-eyebrow"><span className="num">03</span> Learning Approaches</div>
              <h2>How we <em>teach</em>.</h2>
              <p style={{ maxWidth: "720px", marginBottom: "48px" }}>The framework is the British curriculum. The pedagogy is something we have built ourselves over four years of working out how children actually learn online.</p>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px" }}>
                <div className="card">
                  <h3>Live, small, interactive</h3>
                  <p style={{ margin: "0" }}>Every timetabled lesson is live. Classes capped at 15. No &quot;lecture-and-leave.&quot; Teachers can hear every student&apos;s voice each lesson.</p>
                </div>
                <div className="card">
                  <h3>Differentiated within the class</h3>
                  <p style={{ margin: "0" }}>Stretch tasks for the student who finishes the core exercise in seven minutes. Targeted scaffolding for the one who needs longer. Same class, same teacher — different paths through it.</p>
                </div>
                <div className="card">
                  <h3>Mastery before pace</h3>
                  <p style={{ margin: "0" }}>A topic is not done when the calendar says it is — it&apos;s done when the class actually understands it. We have the flexibility to slow down where it matters.</p>
                </div>
                <div className="card">
                  <h3>Project work and synthesis</h3>
                  <p style={{ margin: "0" }}>Each term ends with a multi-subject project. The goal isn&apos;t the project per se — it&apos;s practising what it feels like to use everything you&apos;ve learned together.</p>
                </div>
                <div className="card">
                  <h3>Built-in reflection time</h3>
                  <p style={{ margin: "0" }}>Friday afternoons are protected for pastoral check-ins, study skills, and student-led discussion. Not optional.</p>
                </div>
                <div className="card">
                  <h3>Continuous formative feedback</h3>
                  <p style={{ margin: "0" }}>Every piece of work gets feedback. Most of it within 48 hours. No &quot;submit and wait three weeks for a grade.&quot;</p>
                </div>
              </div>
              <div style={{ marginTop: "56px", padding: "32px", background: "var(--plum)", color: "var(--paper)", borderRadius: "18px" }}>
                <p style={{ fontSize: "19px", fontWeight: "500", lineHeight: "1.5", margin: "0", color: "var(--paper)" }}>
                  <em className="serif-em" style={{ fontFamily: "var(--serif)", fontStyle: "italic", color: "var(--butter-bright)", fontWeight: "400" }}>&quot;The framework matters. The way you teach inside the framework matters more.&quot;</em>
                </p>
                <p style={{ margin: "12px 0 0", color: "rgba(255,255,255,0.7)", fontSize: "13px" }}>— Director of Studies</p>
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
              <div className="menu-section open" data-collapsible="">
                <button className="menu-section-head is-active" type="button" aria-expanded="true">
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

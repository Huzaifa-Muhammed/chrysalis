/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import Link from "next/link";
import { PageScripts } from "@/components/page-scripts";
import { SiteFooter } from "@/components/site-footer";
import scripts from "./scripts";
import "./admission.css";

export const metadata: Metadata = {
  title: "Admission",
  description:
    "How to join Chrysalis Education — the admissions process, fees and how to register your interest.",
};

export default function AdmissionPage() {
  return (
    <>
      <div className="pg-admission">
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
                <a href="#process">Process</a>
                <a href="#fee">Fee</a>
                <a href="#register">Register</a>
              </div>
            </div>
          </nav>
          <section className="page-hero">
            <div className="page-hero-inner">
              <div>
                <div className="eyebrow-mono">Admission · September 2026</div>
                <h1>A clear path <em>in</em>.</h1>
              </div>
              <p className="hero-lead">No mystery. No &quot;drop us a CV and we&apos;ll get back to you.&quot; Three steps, predictable fees, a real conversation with someone who knows the school.</p>
            </div>
          </section>
          <section className="section paper reveal" id="process">
            <div className="section-inner">
              <div className="section-eyebrow"><span className="num">01</span> Process</div>
              <h2>Four <em>steps</em>. About two weeks.</h2>
              <p style={{ maxWidth: "720px", marginBottom: "56px" }}>From your first enquiry to a confirmed place. We move at a pace that gives you space to think — but never makes you wait.</p>
              <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
                <div style={{ display: "grid", gridTemplateColumns: "70px 1fr 140px", gap: "32px", padding: "28px 0", borderBottom: "1px solid var(--hairline-soft)" }}>
                  <div style={{ fontFamily: "var(--mono)", fontSize: "14px", letterSpacing: "0.08em", color: "var(--accent)", fontWeight: "600", paddingTop: "6px" }}>/ 01</div>
                  <div>
                    <h3 style={{ marginBottom: "8px" }}>Discovery Call</h3>
                    <p style={{ margin: "0" }}>30 minutes with our Director of Admissions. We listen first. You tell us about your child — current school, strengths, challenges, ambitions. We tell you honestly whether Chrysalis is the right fit.</p>
                  </div>
                  <div style={{ fontFamily: "var(--mono)", fontSize: "11px", letterSpacing: "0.14em", color: "var(--muted)", paddingTop: "8px", textTransform: "uppercase" }}>Day 1</div>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "70px 1fr 140px", gap: "32px", padding: "28px 0", borderBottom: "1px solid var(--hairline-soft)" }}>
                  <div style={{ fontFamily: "var(--mono)", fontSize: "14px", letterSpacing: "0.08em", color: "var(--accent)", fontWeight: "600", paddingTop: "6px" }}>/ 02</div>
                  <div>
                    <h3 style={{ marginBottom: "8px" }}>Family Visit</h3>
                    <p style={{ margin: "0" }}>A working session with the family (online). Your child meets a Head of Year, sees a real live class in action, and asks anything they want. You and we both come out of this knowing.</p>
                  </div>
                  <div style={{ fontFamily: "var(--mono)", fontSize: "11px", letterSpacing: "0.14em", color: "var(--muted)", paddingTop: "8px", textTransform: "uppercase" }}>Day 3–5</div>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "70px 1fr 140px", gap: "32px", padding: "28px 0", borderBottom: "1px solid var(--hairline-soft)" }}>
                  <div style={{ fontFamily: "var(--mono)", fontSize: "14px", letterSpacing: "0.08em", color: "var(--accent)", fontWeight: "600", paddingTop: "6px" }}>/ 03</div>
                  <div>
                    <h3 style={{ marginBottom: "8px" }}>Academic Baseline</h3>
                    <p style={{ margin: "0" }}>A short, unintimidating assessment in core subjects. This isn&apos;t a gatekeeping exam — it tells us where to pitch your child from day one.</p>
                  </div>
                  <div style={{ fontFamily: "var(--mono)", fontSize: "11px", letterSpacing: "0.14em", color: "var(--muted)", paddingTop: "8px", textTransform: "uppercase" }}>Day 7</div>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "70px 1fr 140px", gap: "32px", padding: "28px 0", borderBottom: "1px solid var(--hairline-soft)" }}>
                  <div style={{ fontFamily: "var(--mono)", fontSize: "14px", letterSpacing: "0.08em", color: "var(--accent)", fontWeight: "600", paddingTop: "6px" }}>/ 04</div>
                  <div>
                    <h3 style={{ marginBottom: "8px" }}>Offer & Onboarding</h3>
                    <p style={{ margin: "0" }}>If we offer a place and you accept, your dedicated Education Manager begins onboarding within 48 hours. Devices, schedules, parent portal, first-week plan.</p>
                  </div>
                  <div style={{ fontFamily: "var(--mono)", fontSize: "11px", letterSpacing: "0.14em", color: "var(--muted)", paddingTop: "8px", textTransform: "uppercase" }}>Day 10–14</div>
                </div>
              </div>
            </div>
          </section>
          <section className="section reveal" id="fee">
            <div className="section-inner">
              <div className="section-eyebrow"><span className="num">02</span> Fee</div>
              <h2>Predictable. <em>Transparent</em>. Auditable.</h2>
              <p style={{ maxWidth: "720px", marginBottom: "48px" }}>One published fee per year group. No &quot;discovery&quot; pricing. No hidden uniform, tech, or activity fees on top.</p>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "28px", marginBottom: "56px" }}>
                <div className="card" style={{ background: "var(--plum)", color: "var(--paper)" }}>
                  <div className="pill" style={{ marginBottom: "18px", background: "var(--butter)", color: "var(--ink)", borderColor: "var(--butter)" }}>Annual fee · Year 7–9</div>
                  <h3 style={{ color: "var(--paper)", fontSize: "38px", marginBottom: "12px" }}>[Figure] <span style={{ fontSize: "16px", color: "rgba(255,255,255,0.7)", fontWeight: "500" }}>per year</span></h3>
                  <p style={{ color: "rgba(255,255,255,0.78)", margin: "0", fontSize: "14.5px" }}>Lower-secondary years. Includes all live teaching, assessments, pastoral support, and platform access. Term-by-term billing available.</p>
                </div>
                <div className="card" style={{ background: "var(--plum)", color: "var(--paper)" }}>
                  <div className="pill" style={{ marginBottom: "18px", background: "var(--butter)", color: "var(--ink)", borderColor: "var(--butter)" }}>Annual fee · Year 10–13</div>
                  <h3 style={{ color: "var(--paper)", fontSize: "38px", marginBottom: "12px" }}>[Figure] <span style={{ fontSize: "16px", color: "rgba(255,255,255,0.7)", fontWeight: "500" }}>per year</span></h3>
                  <p style={{ color: "rgba(255,255,255,0.78)", margin: "0", fontSize: "14.5px" }}>IGCSE and IAL years. Includes exam preparation, university guidance, and full pastoral wraparound. Term-by-term billing available.</p>
                </div>
              </div>
              <div style={{ padding: "32px", background: "var(--paper)", borderRadius: "18px", border: "1px solid var(--hairline-soft)" }}>
                <h3 style={{ marginBottom: "18px" }}>What&apos;s <em>included</em>:</h3>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px 32px" }}>
                  <div style={{ display: "flex", gap: "10px", fontSize: "14.5px", padding: "6px 0", color: "var(--ink-soft)" }}><span style={{ color: "var(--leaf-deep)" }}>✓</span>All timetabled live lessons</div>
                  <div style={{ display: "flex", gap: "10px", fontSize: "14.5px", padding: "6px 0", color: "var(--ink-soft)" }}><span style={{ color: "var(--leaf-deep)" }}>✓</span>Termly assessments and reports</div>
                  <div style={{ display: "flex", gap: "10px", fontSize: "14.5px", padding: "6px 0", color: "var(--ink-soft)" }}><span style={{ color: "var(--leaf-deep)" }}>✓</span>Dedicated Education Manager</div>
                  <div style={{ display: "flex", gap: "10px", fontSize: "14.5px", padding: "6px 0", color: "var(--ink-soft)" }}><span style={{ color: "var(--leaf-deep)" }}>✓</span>Pastoral and wellbeing support</div>
                  <div style={{ display: "flex", gap: "10px", fontSize: "14.5px", padding: "6px 0", color: "var(--ink-soft)" }}><span style={{ color: "var(--leaf-deep)" }}>✓</span>Curriculum platform access</div>
                  <div style={{ display: "flex", gap: "10px", fontSize: "14.5px", padding: "6px 0", color: "var(--ink-soft)" }}><span style={{ color: "var(--leaf-deep)" }}>✓</span>Parent portal and community</div>
                  <div style={{ display: "flex", gap: "10px", fontSize: "14.5px", padding: "6px 0", color: "var(--ink-soft)" }}><span style={{ color: "var(--leaf-deep)" }}>✓</span>Exam entry fees (IGCSE/IAL)</div>
                  <div style={{ display: "flex", gap: "10px", fontSize: "14.5px", padding: "6px 0", color: "var(--ink-soft)" }}><span style={{ color: "var(--leaf-deep)" }}>✓</span>University guidance (Y12–13)</div>
                </div>
                <h3 style={{ margin: "28px 0 14px" }}>Sibling and bursary <em>support</em>:</h3>
                <p style={{ margin: "0", fontSize: "14.5px" }}>10% sibling discount from the second child onwards. Limited needs-assessed bursary places per intake — apply at the same time as your main application.</p>
              </div>
              <p style={{ marginTop: "40px", fontSize: "13px", color: "var(--muted)", maxWidth: "720px" }}>Figures will be confirmed in the published Fees Schedule. We commit to no surprise increases mid-year and to giving 12 months&apos; notice of any fee adjustment between academic years.</p>
            </div>
          </section>
          <section className="section paper reveal" id="register">
            <div className="section-inner-narrow">
              <div className="section-eyebrow"><span className="num">03</span> Register</div>
              <h2>Start the <em>conversation</em>.</h2>
              <p>The form below tells us enough to schedule your Discovery Call. Nothing here commits you to anything. If we&apos;re not the right school for your child, the call will tell both of us — and you&apos;ll have lost half an hour, not three months.</p>
              <form style={{ marginTop: "40px", display: "grid", gap: "20px" }} id="admitForm" data-ih0="">
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>
                  <div>
                    <label style={{ display: "block", fontFamily: "var(--mono)", fontSize: "10.5px", letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--ink-soft)", marginBottom: "8px" }}>Parent / Guardian name</label>
                    <input type="text" required style={{ width: "100%", padding: "12px 16px", border: "1px solid var(--hairline)", background: "var(--paper)", borderRadius: "10px", fontFamily: "inherit", fontSize: "15px", color: "var(--ink)" }} />
                  </div>
                  <div>
                    <label style={{ display: "block", fontFamily: "var(--mono)", fontSize: "10.5px", letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--ink-soft)", marginBottom: "8px" }}>Email</label>
                    <input type="email" required style={{ width: "100%", padding: "12px 16px", border: "1px solid var(--hairline)", background: "var(--paper)", borderRadius: "10px", fontFamily: "inherit", fontSize: "15px", color: "var(--ink)" }} />
                  </div>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>
                  <div>
                    <label style={{ display: "block", fontFamily: "var(--mono)", fontSize: "10.5px", letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--ink-soft)", marginBottom: "8px" }}>Child&apos;s age / year group</label>
                    <input type="text" required placeholder="e.g. 13 / Year 9" style={{ width: "100%", padding: "12px 16px", border: "1px solid var(--hairline)", background: "var(--paper)", borderRadius: "10px", fontFamily: "inherit", fontSize: "15px", color: "var(--ink)" }} />
                  </div>
                  <div>
                    <label style={{ display: "block", fontFamily: "var(--mono)", fontSize: "10.5px", letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--ink-soft)", marginBottom: "8px" }}>Time zone / country</label>
                    <input type="text" required placeholder="e.g. UAE, GMT+4" style={{ width: "100%", padding: "12px 16px", border: "1px solid var(--hairline)", background: "var(--paper)", borderRadius: "10px", fontFamily: "inherit", fontSize: "15px", color: "var(--ink)" }} />
                  </div>
                </div>
                <div>
                  <label style={{ display: "block", fontFamily: "var(--mono)", fontSize: "10.5px", letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--ink-soft)", marginBottom: "8px" }}>What&apos;s prompting your interest? (Optional)</label>
                  <textarea rows={3} style={{ width: "100%", padding: "12px 16px", border: "1px solid var(--hairline)", background: "var(--paper)", borderRadius: "10px", fontFamily: "inherit", fontSize: "15px", color: "var(--ink)", resize: "vertical" }} />
                </div>
                <button type="submit" className="btn-primary" style={{ justifySelf: "start", marginTop: "8px" }}>Request Discovery Call</button>
              </form>
              <p style={{ marginTop: "24px", fontSize: "13px", color: "var(--muted)" }}>Or write directly to <a href="mailto:admissions@chrysalis.education" style={{ color: "var(--ink)", borderBottom: "1px solid var(--hairline)" }}>admissions@chrysalis.education</a> — replies within 24 hours.</p>
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
              <div className="menu-section open" data-collapsible="">
                <button className="menu-section-head is-active" type="button" aria-expanded="true">
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

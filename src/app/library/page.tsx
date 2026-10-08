/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import Link from "next/link";
import { PageScripts } from "@/components/page-scripts";
import { SiteFooter } from "@/components/site-footer";
import scripts from "./scripts";
import "./library.css";

export const metadata: Metadata = {
  title: "Knowledge Library",
  description:
    "Learning resources, past papers and revision materials for Chrysalis Education students and families.",
};

export default function LibraryPage() {
  return (
    <>
      <div className="pg-library">
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
          <main className="lib-page">
            <header className="lib-masthead">
              <div className="lib-masthead-inner">
                <div>
                  <div className="lib-mast-mono">
                    <strong>Chrysalis School</strong>
                    <span className="sep">·</span>
                    <span>Volume 01</span>
                    <span className="sep">·</span>
                    <span>Issue 12 · Week of 06 May 2026</span>
                    <span className="sep">·</span>
                    <span>Weekly</span>
                  </div>
                  <h1 className="lib-mast-title">The Knowledge <em>Library</em>.</h1>
                </div>
                <p className="lib-mast-dek"> Editorial writing on <strong>learning, parenting, wellbeing,</strong> and the modern realities of raising school-age children — published weekly by the educators at Chrysalis School. </p>
              </div>
            </header>
            <nav className="lib-tabs" aria-label="Filter articles by category">
              <div className="lib-tabs-inner" id="libTabs">
                <button className="lib-tab active" data-cat="all">All</button>
                <button className="lib-tab" data-cat="learning">Learning</button>
                <button className="lib-tab" data-cat="wellbeing">Wellbeing</button>
                <button className="lib-tab" data-cat="parenting">Parenting</button>
                <button className="lib-tab" data-cat="curriculum">Curriculum</button>
                <button className="lib-tab" data-cat="digital">Digital</button>
                <button className="lib-tab" data-cat="careers">Careers</button>
                <button className="lib-tab" data-cat="from-school">From the School</button>
              </div>
            </nav>
            <section className="lib-lead" data-cat="learning">
              <div className="lib-lead-inner">
                <div className="lib-lead-fig">
                  <svg viewBox="0 0 400 280" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
                    <rect width="400" height="280" fill="#FAF7F1" />
                    <circle cx="200" cy="140" r="80" fill="none" stroke="#4A2C4B" strokeWidth="1" />
                    <circle cx="200" cy="140" r="50" fill="none" stroke="#C77B4F" strokeWidth="1" />
                    <circle cx="200" cy="140" r="20" fill="#D4B968" />
                    <circle cx="120" cy="140" r="3" fill="#4A2C4B" />
                    <circle cx="280" cy="140" r="3" fill="#4A2C4B" />
                    <circle cx="200" cy="60" r="3" fill="#4A2C4B" />
                    <circle cx="200" cy="220" r="3" fill="#4A2C4B" />
                    <text x="200" y="270" textAnchor="middle" fontFamily="JetBrains Mono, ui-monospace, monospace" fontSize="9" letterSpacing="2" fill="#8B8276">FIG. 01 — COGNITIVE ARCHITECTURE</text>
                  </svg>
                </div>
                <div className="lib-lead-text">
                  <div className="lib-lead-eyebrow">
                    <span className="feat">Featured</span>
                    <span className="sep">·</span>
                    <span>Learning</span>
                  </div>
                  <h2>How children actually <em>learn</em> — and what that means for school.</h2>
                  <p className="lib-lead-dek">A century of cognitive science has settled enough of the debate to draw conclusions. Most schools haven&apos;t caught up.</p>
                  <div className="lib-byline">
                    <span className="author">Dr. Sarah Mansfield<small>Director of Studies</small></span>
                    <span className="dot">·</span>
                    <span>06 May 2026</span>
                    <span className="dot">·</span>
                    <span>12 min read</span>
                  </div>
                  <a href="#article-1" className="lib-cta-read">Read the essay →</a>
                </div>
              </div>
            </section>
            <section className="lib-recent">
              <div className="lib-section-head">
                <h3>Recent <em>writing</em>.</h3>
                <span className="count">6 articles</span>
              </div>
              <div className="lib-grid" id="libGrid">
                <a href="#article-2" className="lib-card" data-cat="wellbeing">
                  <div className="lib-card-fig">
                    <svg viewBox="0 0 400 280" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
                      <rect width="400" height="280" fill="#4A2C4B" />
                      <circle cx="280" cy="100" r="40" fill="#F5D88A" />
                      <circle cx="295" cy="92" r="32" fill="#4A2C4B" />
                      <g opacity="0.45">
                        <circle cx="80" cy="60" r="1.5" fill="#FAF7F1" />
                        <circle cx="140" cy="40" r="1.5" fill="#FAF7F1" />
                        <circle cx="180" cy="80" r="1" fill="#FAF7F1" />
                        <circle cx="60" cy="120" r="1" fill="#FAF7F1" />
                        <circle cx="220" cy="160" r="1.5" fill="#FAF7F1" />
                        <circle cx="340" cy="200" r="1.5" fill="#FAF7F1" />
                        <circle cx="40" cy="200" r="1" fill="#FAF7F1" />
                      </g>
                      <text x="200" y="265" textAnchor="middle" fontFamily="JetBrains Mono, ui-monospace, monospace" fontSize="9" letterSpacing="2" fill="#F5D88A" opacity="0.7">FIG. 02 — NIGHTS LOST</text>
                    </svg>
                  </div>
                  <div className="lib-card-cat">Wellbeing</div>
                  <h4>Sleep, screens, and the teenage brain.</h4>
                  <p className="dek">What the AAP, the WHO, and a generation of sleep researchers actually agree on — and what changes when you act on it.</p>
                  <div className="meta">
                    <span className="author">Dr. Imran Khan</span>
                    <span>02 May 2026</span>
                    <span>8 min</span>
                  </div>
                </a>
                <a href="#article-3" className="lib-card" data-cat="parenting">
                  <div className="lib-card-fig">
                    <svg viewBox="0 0 400 280" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
                      <rect width="400" height="280" fill="#D6CDC0" />
                      <rect x="100" y="80" width="200" height="140" rx="6" fill="#FAF7F1" stroke="#1A1612" strokeWidth="1.5" />
                      <line x1="130" y1="120" x2="270" y2="120" stroke="#8B8276" strokeWidth="1" />
                      <line x1="130" y1="140" x2="240" y2="140" stroke="#8B8276" strokeWidth="1" />
                      <line x1="130" y1="160" x2="260" y2="160" stroke="#8B8276" strokeWidth="1" />
                      <line x1="130" y1="180" x2="180" y2="180" stroke="#8B8276" strokeWidth="1" />
                      <circle cx="200" cy="60" r="14" fill="#C77B4F" />
                      <text x="200" y="270" textAnchor="middle" fontFamily="JetBrains Mono, ui-monospace, monospace" fontSize="9" letterSpacing="2" fill="#8B8276">FIG. 03 — THE BLANK PAGE</text>
                    </svg>
                  </div>
                  <div className="lib-card-cat">Parenting</div>
                  <h4>The real reason your child won&apos;t talk about school.</h4>
                  <p className="dek">It isn&apos;t secrecy. It isn&apos;t a phase. The literature on adolescent disclosure has a clearer answer.</p>
                  <div className="meta">
                    <span className="author">Sara Whitfield</span>
                    <span>29 Apr 2026</span>
                    <span>7 min</span>
                  </div>
                </a>
                <a href="#article-4" className="lib-card" data-cat="curriculum">
                  <div className="lib-card-fig">
                    <svg viewBox="0 0 400 280" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
                      <rect width="400" height="280" fill="#FAF7F1" />
                      <g stroke="#1A1612" strokeWidth="1" fill="none">
                        <line x1="60" y1="220" x2="340" y2="220" />
                        <line x1="60" y1="220" x2="60" y2="60" />
                        <path d="M60 200 Q 130 160 200 130 T 340 80" stroke="#C77B4F" strokeWidth="1.8" />
                        <path d="M60 215 L 200 180 L 340 100" stroke="#4A2C4B" strokeWidth="1.5" strokeDasharray="3 3" />
                      </g>
                      <circle cx="60" cy="200" r="3" fill="#1A1612" />
                      <circle cx="200" cy="130" r="3" fill="#C77B4F" />
                      <circle cx="340" cy="80" r="3" fill="#C77B4F" />
                      <text x="200" y="265" textAnchor="middle" fontFamily="JetBrains Mono, ui-monospace, monospace" fontSize="9" letterSpacing="2" fill="#8B8276">FIG. 04 — PROGRESSION CURVE</text>
                    </svg>
                  </div>
                  <div className="lib-card-cat">Curriculum</div>
                  <h4>Why we teach maths the way we do.</h4>
                  <p className="dek">Three pedagogical principles, three subject heads, one short answer to a question parents ask weekly.</p>
                  <div className="meta">
                    <span className="author">Head of Mathematics</span>
                    <span>24 Apr 2026</span>
                    <span>9 min</span>
                  </div>
                </a>
                <a href="#article-5" className="lib-card" data-cat="digital">
                  <div className="lib-card-fig">
                    <svg viewBox="0 0 400 280" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
                      <rect width="400" height="280" fill="#1A1612" />
                      <rect x="170" y="60" width="60" height="120" rx="8" fill="#FAF7F1" stroke="#D4B968" strokeWidth="1" />
                      <rect x="178" y="72" width="44" height="80" fill="#1A1612" />
                      <circle cx="200" cy="168" r="3" fill="#1A1612" />
                      <text x="200" y="265" textAnchor="middle" fontFamily="JetBrains Mono, ui-monospace, monospace" fontSize="9" letterSpacing="2" fill="#D4B968" opacity="0.7">FIG. 05 — THRESHOLD MOMENT</text>
                    </svg>
                  </div>
                  <div className="lib-card-cat">Digital</div>
                  <h4>Your child&apos;s first phone.</h4>
                  <p className="dek">The decision matrix every parent eventually faces — without the moral panic and without the techno-optimism.</p>
                  <div className="meta">
                    <span className="author">Tarek Hassan</span>
                    <span>19 Apr 2026</span>
                    <span>11 min</span>
                  </div>
                </a>
                <a href="#article-6" className="lib-card" data-cat="learning">
                  <div className="lib-card-fig">
                    <svg viewBox="0 0 400 280" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
                      <rect width="400" height="280" fill="#D6CDC0" />
                      <line x1="80" y1="140" x2="320" y2="140" stroke="#1A1612" strokeWidth="1" />
                      <circle cx="200" cy="140" r="6" fill="#1A1612" />
                      <text x="200" y="265" textAnchor="middle" fontFamily="JetBrains Mono, ui-monospace, monospace" fontSize="9" letterSpacing="2" fill="#8B8276">FIG. 06 — SILENCE</text>
                    </svg>
                  </div>
                  <div className="lib-card-cat">Learning</div>
                  <h4>The case for boredom.</h4>
                  <p className="dek">Why the absence of stimulation is one of the most under-rated educational inputs in modern childhood.</p>
                  <div className="meta">
                    <span className="author">Dr. Sarah Mansfield</span>
                    <span>15 Apr 2026</span>
                    <span>6 min</span>
                  </div>
                </a>
                <a href="#article-7" className="lib-card" data-cat="parenting">
                  <div className="lib-card-fig">
                    <svg viewBox="0 0 400 280" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
                      <rect width="400" height="280" fill="#FAF7F1" />
                      <rect x="100" y="80" width="200" height="120" fill="#F2EBDC" stroke="#1A1612" strokeWidth="1.5" />
                      <line x1="130" y1="120" x2="270" y2="120" stroke="#8B8276" strokeWidth="1" />
                      <line x1="130" y1="140" x2="270" y2="140" stroke="#8B8276" strokeWidth="1" />
                      <line x1="130" y1="160" x2="220" y2="160" stroke="#8B8276" strokeWidth="1" />
                      <path d="M250 100 L 290 180" stroke="#C77B4F" strokeWidth="3" />
                      <path d="M290 100 L 250 180" stroke="#C77B4F" strokeWidth="3" />
                      <text x="200" y="265" textAnchor="middle" fontFamily="JetBrains Mono, ui-monospace, monospace" fontSize="9" letterSpacing="2" fill="#8B8276">FIG. 07 — RECOVERY</text>
                    </svg>
                  </div>
                  <div className="lib-card-cat">Parenting</div>
                  <h4>What to say when they fail a test.</h4>
                  <p className="dek">A short scripted-conversation framework, drawn from twenty years of work with families.</p>
                  <div className="meta">
                    <span className="author">Sara Whitfield</span>
                    <span>10 Apr 2026</span>
                    <span>5 min</span>
                  </div>
                </a>
              </div>
            </section>
            <section className="lib-series">
              <div className="lib-series-inner">
                <div className="lib-series-head">
                  <h3>Ongoing <em>series</em>.</h3>
                </div>
                <div className="lib-series-grid">
                  <a href="#series-learn" className="lib-series-card">
                    <div className="ix">/ Series 01</div>
                    <h4>How children <em>learn</em>.</h4>
                    <p>Six essays drawing on cognitive science and classroom experience. From how memory forms to why repetition matters.</p>
                    <div className="progress">
                      <span>4 of 6 published</span>
                      <span>·</span>
                      <span>Next: 13 May</span>
                    </div>
                  </a>
                  <a href="#series-pastoral" className="lib-series-card">
                    <div className="ix">/ Series 02</div>
                    <h4>Pastoral <em>notes</em>.</h4>
                    <p>Conversations the school has with parents, week in and week out — written up so they reach further than one family at a time.</p>
                    <div className="progress">
                      <span>3 of 8 published</span>
                      <span>·</span>
                      <span>Next: 16 May</span>
                    </div>
                  </a>
                  <a href="#series-modern" className="lib-series-card">
                    <div className="ix">/ Series 03</div>
                    <h4>The <em>modern</em> classroom.</h4>
                    <p>What changes — and what doesn&apos;t — when teaching moves online. Lessons from four years of building this in practice.</p>
                    <div className="progress">
                      <span>2 of 5 published</span>
                      <span>·</span>
                      <span>Next: 20 May</span>
                    </div>
                  </a>
                </div>
              </div>
            </section>
            <section className="lib-archive">
              <div className="lib-archive-inner">
                <div className="lib-archive-head">
                  <h3>From the <em>archive</em>.</h3>
                  <p>Earlier writing — searchable, dated, kept open.</p>
                </div>
                <div className="lib-archive-list">
                  <a href="#article-8" className="lib-archive-row" data-cat="careers">
                    <span className="date">05 Apr 2026</span>
                    <span className="cat">Careers</span>
                    <span className="title">A-Level choices that don&apos;t close doors.</span>
                    <span className="read">10 min</span>
                  </a>
                  <a href="#article-9" className="lib-archive-row" data-cat="wellbeing">
                    <span className="date">01 Apr 2026</span>
                    <span className="cat">Wellbeing</span>
                    <span className="title">The quiet kid problem.</span>
                    <span className="read">7 min</span>
                  </a>
                  <a href="#article-10" className="lib-archive-row" data-cat="from-school">
                    <span className="date">25 Mar 2026</span>
                    <span className="cat">From the School</span>
                    <span className="title">A letter from our Principal: Term One reflections.</span>
                    <span className="read">4 min</span>
                  </a>
                  <a href="#article-11" className="lib-archive-row" data-cat="curriculum">
                    <span className="date">20 Mar 2026</span>
                    <span className="cat">Curriculum</span>
                    <span className="title">IGCSE vs A-Level: the gap year nobody talks about.</span>
                    <span className="read">8 min</span>
                  </a>
                  <a href="#article-12" className="lib-archive-row" data-cat="digital">
                    <span className="date">15 Mar 2026</span>
                    <span className="cat">Digital</span>
                    <span className="title">Why we don&apos;t ban screens — and what we do instead.</span>
                    <span className="read">9 min</span>
                  </a>
                </div>
              </div>
            </section>
            <section className="lib-subscribe">
              <div className="lib-subscribe-inner">
                <div>
                  <div className="lib-subscribe-eyebrow">/&#47; THE FRIDAY BRIEFING</div>
                  <h3>One <em>essay</em>. One <em>note</em>. Every Friday.</h3>
                  <p>A five-minute read from the school&apos;s editorial team. No advertising, no upsell — just one piece of writing worth your weekend.</p>
                </div>
                <div>
                  <form className="lib-subscribe-form" data-ih0="">
                    <input type="email" required placeholder="you@example.com" aria-label="Email address" />
                    <button type="submit">Subscribe</button>
                  </form>
                  <div className="lib-subscribe-meta">Weekly · Free · Unsubscribe in one click</div>
                </div>
              </div>
            </section>
          </main>
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

/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import Link from "next/link";
import { PageScripts } from "@/components/page-scripts";
import { SiteFooter } from "@/components/site-footer";
import scripts from "./scripts";
import "./concierge-detail.css";

export const metadata: Metadata = {
  title: "EDU Concierge",
  description:
    "The full EDU Concierge programme: your dedicated Education Manager, the team behind them, the technology, pricing and how it all works.",
};

export default function ConciergeDetailPage() {
  return (
    <>
      <div className="pg-concierge-detail">
        <nav className="onpage" id="onPage" aria-label="On this page">
          <div className="onpage-in">
            <span className="onpage-label">On this page</span>
            <div className="onpage-links">
              <a href="#framing">The idea</a>
              <a href="#problem">The problem</a>
              <a href="#costs">The costs</a>
              <a href="#manager">Your manager</a>
              <a href="#ec-team">The team</a>
            </div>
          </div>
        </nav>
        <section className="hero">
          <Link href="/" className="brand-mark">
            <div className="logo-row">
              <div className="logo-img">
                <img src="edu-concierge-logo.png" alt="EDU Concierge" />
              </div>
              <div className="name">
                <span className="br">(</span>
                <span>EDU_CONCIERGE</span>
                <span className="br">)</span>
              </div>
            </div>
            <div className="version"> <span className="br">[</span> Education Delivered <span className="br">·</span> v.2026 <span className="br">]</span> </div>
          </Link>
          <nav className="nav">
            <div className="nav-item">
              <button className="nav-trigger" type="button" aria-haspopup="true" aria-expanded="false">the problem <svg className="chev" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.6">
  <path d="M2 4 L6 8 L10 4" />
</svg> </button>
              <div className="nav-sub" role="menu">
                <a href="#problem"><span className="sub-num">02</span>The Problem</a>
                <a href="#costs"><span className="sub-num">03</span>Schooling Costs</a>
              </div>
            </div>
            <div className="nav-item">
              <button className="nav-trigger" type="button" aria-haspopup="true" aria-expanded="false">our approach <svg className="chev" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.6">
  <path d="M2 4 L6 8 L10 4" />
</svg> </button>
              <div className="nav-sub" role="menu">
                <a href="#manager"><span className="sub-num">04</span>Education Manager</a>
                <a href="#ec-team"><span className="sub-num">05</span>Who are the ECs</a>
                <a href="#how"><span className="sub-num">06</span>How It Works</a>
                <a href="#trust"><span className="sub-num">08</span>Trust &amp; Engagement</a>
              </div>
            </div>
            <a href="#technology">technology <svg className="arr" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5">
  <path d="M3 11 L11 3 M5 3 L11 3 L11 9" />
</svg> </a>
            <div className="nav-item">
              <button className="nav-trigger" type="button" aria-haspopup="true" aria-expanded="false">plans <svg className="chev" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.6">
  <path d="M2 4 L6 8 L10 4" />
</svg> </button>
              <div className="nav-sub" role="menu">
                <a href="#value"><span className="sub-num">09</span>The Value</a>
                <a href="#pricing"><span className="sub-num">10</span>Pricing Plans</a>
                <a href="#systems"><span className="sub-num">11</span>Education Systems</a>
              </div>
            </div>
            <a href="#faq">faq <svg className="arr" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5">
  <path d="M3 11 L11 3 M5 3 L11 3 L11 9" />
</svg> </a>
            <a href="#contact">contact <svg className="arr" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5">
  <path d="M3 11 L11 3 M5 3 L11 3 L11 9" />
</svg> </a>
          </nav>
          <div className="hero-viz">
            <svg viewBox="0 0 1000 700" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet">
              <defs>
                <radialGradient id="glow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#E89066" stopOpacity="1" />
                  <stop offset="60%" stopColor="#C77B4F" stopOpacity="0.5" />
                  <stop offset="100%" stopColor="#C77B4F" stopOpacity="0" />
                  <radialGradient id="leafGlow" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#9DBA94" stopOpacity="0.9" />
                    <stop offset="100%" stopColor="#9DBA94" stopOpacity="0" />
                    <filter id="bigBlur" x="-50%" y="-50%" width="200%" height="200%">
                      <feGaussianBlur stdDeviation="20" />
                    </filter>
                  </radialGradient>
                </radialGradient>
              </defs>
              <ellipse cx="500" cy="380" rx="280" ry="220" fill="url(#glow)" filter="url(#bigBlur)" opacity="0.45" />
              <g opacity="0.9">
                <circle cx="500" cy="380" r="240" fill="none" stroke="rgba(26,22,18,0.10)" strokeWidth="1" />
                <circle cx="500" cy="380" r="170" fill="none" stroke="rgba(26,22,18,0.13)" strokeWidth="1" />
                <circle cx="500" cy="380" r="100" fill="none" stroke="rgba(26,22,18,0.17)" strokeWidth="1" />
                <line x1="500" y1="380" x2="320" y2="240" stroke="rgba(91,58,92,0.4)" strokeWidth="1.4" />
                <line x1="500" y1="380" x2="680" y2="220" stroke="rgba(199,123,79,0.55)" strokeWidth="1.4" />
                <line x1="500" y1="380" x2="700" y2="500" stroke="rgba(122,148,114,0.55)" strokeWidth="1.4" />
                <line x1="500" y1="380" x2="320" y2="520" stroke="rgba(107,163,199,0.5)" strokeWidth="1.4" />
                <line x1="500" y1="380" x2="500" y2="180" stroke="rgba(199,123,79,0.4)" strokeWidth="1.2" />
                <line x1="500" y1="380" x2="500" y2="580" stroke="rgba(91,58,92,0.4)" strokeWidth="1.2" />
                <circle cx="320" cy="240" r="14" fill="rgba(91,58,92,0.18)" />
                <circle cx="320" cy="240" r="6" fill="#5B3A5C" />
                <circle cx="680" cy="220" r="16" fill="url(#glow)" />
                <circle cx="680" cy="220" r="7" fill="#C77B4F" />
                <circle cx="700" cy="500" r="13" fill="url(#leafGlow)" />
                <circle cx="700" cy="500" r="6" fill="#7A9472" />
                <circle cx="320" cy="520" r="6" fill="#6BA3C7" />
                <circle cx="500" cy="180" r="5" fill="#C77B4F" />
                <circle cx="500" cy="580" r="5" fill="#5B3A5C" />
                <circle cx="500" cy="380" r="40" fill="none" stroke="rgba(26,22,18,0.25)" strokeWidth="1" strokeDasharray="3 4" />
                <circle cx="500" cy="380" r="22" fill="#1A1612" />
                <circle cx="500" cy="380" r="8" fill="#F5D88A" />
              </g>
            </svg>
          </div>
          <span className="particle" style={{ top: "54%", left: "62%", width: "6px", height: "6px", "--dx": "8px", "--dy": "-30px", animationDelay: "0s" } as import("react").CSSProperties} />
          <span className="particle" style={{ top: "48%", left: "67%", width: "4px", height: "4px", "--dx": "-12px", "--dy": "-40px", animationDelay: "1s" } as import("react").CSSProperties} />
          <span className="particle" style={{ top: "60%", left: "58%", width: "5px", height: "5px", "--dx": "14px", "--dy": "-50px", animationDelay: "2s" } as import("react").CSSProperties} />
          <span className="particle" style={{ top: "52%", left: "72%", width: "7px", height: "7px", "--dx": "-6px", "--dy": "-60px", animationDelay: "3s" } as import("react").CSSProperties} />
          <span className="particle" style={{ top: "65%", left: "65%", width: "4px", height: "4px", "--dx": "18px", "--dy": "-35px", animationDelay: "4s" } as import("react").CSSProperties} />
          <span className="particle" style={{ top: "58%", left: "70%", width: "5px", height: "5px", "--dx": "-20px", "--dy": "-50px", animationDelay: "5s" } as import("react").CSSProperties} />
          <h1 className="hero-headline">
            <div className="row">
              <span>one <em>manager.</em></span>
            </div>
            <div className="row">
              <span>one plan.</span>
            </div>
            <div className="row">
              <span>every step</span>
            </div>
            <div className="row">
              <span><span className="slash">/&#47;</span>of the way</span>
            </div>
          </h1>
          <div className="share-mark" title="Share">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
              <circle cx="6" cy="12" r="2" />
              <circle cx="18" cy="6" r="2" />
              <circle cx="18" cy="18" r="2" />
              <path d="M8 11 L16 7 M8 13 L16 17" />
            </svg>
          </div>
          <div className="scroll-cue">
            <span>scroll</span>
            <span className="arrow" />
          </div>
          <div className="hero-corner">
            <div className="anchor">
              <span className="a-mark">( EDC )</span>
              <span className="pages"><span className="br">[</span> 001 <span className="br">/</span> 014 <span className="br">]</span></span>
            </div>
            <p>Meet your dedicated Education Manager. We track your child&apos;s progress, arrange lessons when needed, connect with specialists, and keep you fully updated — so there&apos;s still plenty of time for everything else.</p>
            <div className="pill-row">
              <a href="#contact" className="pill pill-filled">Try for Free</a>
              <a href="#pricing" className="pill">View plans</a>
            </div>
          </div>
        </section>
        <div className="marquee">
          <div className="marquee-track">
            <span>Dedicated Education Manager <span className="dot" /> Live Tutoring <span className="dot" /> Assessments &amp; Exam Prep <span className="dot" /> All Core Subjects <span className="dot" /> Parent Progress Reporting <span className="dot" /> Mobile App Included <span className="dot" /></span>
            <span>Dedicated Education Manager <span className="dot" /> Live Tutoring <span className="dot" /> Assessments &amp; Exam Prep <span className="dot" /> All Core Subjects <span className="dot" /> Parent Progress Reporting <span className="dot" /> Mobile App Included <span className="dot" /></span>
          </div>
        </div>
        <section className="framing reveal" id="framing">
          <div className="container">
            <div className="framing-grid">
              <div>
                <div className="section-label">
                  <span className="br">[</span>
                  <span className="num">01</span>
                  <span className="br">]</span>
                  <span className="bar" />
                  <span>Why this exists</span>
                </div>
                <h2>Every vital asset gets a relationship <em>manager</em>. Education shouldn&apos;t be the exception.</h2>
              </div>
              <div className="framing-body">
                <p>Buy a property, get a property manager. Open a meaningful bank account, get a relationship banker. Manage real wealth, get a private banker. Even your health gets a primary doctor whose job is to know you.</p>
                <p>Yet middle-class families pay <strong>considerable amounts</strong> across thirteen years of schooling and then again for university — sums that, added up, rival a property — and they&apos;re expected to <em>just figure it out</em>. While holding down jobs, raising the rest of the family, and somehow keeping abreast of curriculum changes, exam reforms, and the right next move at every transition.</p>
                <p>It isn&apos;t realistic, and it isn&apos;t fair. Education is too important — and too expensive — to leave to chance and goodwill alone. <strong>It deserves the same dedicated relationship layer that every other vital asset class already has.</strong></p>
                <div className="rm-row">
                  <div className="rm-cell">
                    <span className="rm-asset">/ Real Estate</span>
                    <span className="rm-name">Property</span>
                    <span className="rm-role">Has a property manager</span>
                    <span className="rm-check">Standard</span>
                  </div>
                  <div className="rm-cell">
                    <span className="rm-asset">/ Capital</span>
                    <span className="rm-name">Wealth</span>
                    <span className="rm-role">Has a private banker</span>
                    <span className="rm-check">Standard</span>
                  </div>
                  <div className="rm-cell">
                    <span className="rm-asset">/ Wellbeing</span>
                    <span className="rm-name">Health</span>
                    <span className="rm-role">Has a primary doctor</span>
                    <span className="rm-check">Standard</span>
                  </div>
                  <div className="rm-cell rm-cell-edu">
                    <span className="rm-asset">/ The Missing One</span>
                    <span className="rm-name">
                      <em>Education</em>
                    </span>
                    <span className="rm-role">Now has an Education Manager</span>
                    <span className="rm-check">EDU Concierge</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="problem reveal" id="problem">
          <div className="container">
            <div className="problem-grid">
              <div>
                <div className="section-label">
                  <span className="br">[</span>
                  <span className="num">02</span>
                  <span className="br">]</span>
                  <span className="bar" />
                  <span>The Problem</span>
                </div>
                <h2 className="heading-xl">Rising costs, distracted children, and <em>fragmented</em> study systems.</h2>
              </div>
              <div className="problem-body">
                <p>Modern parenting around education has become an exhausting full-time job that overlaps with your actual full-time job. School fees keep rising. Children are digitally distracted. Working parents struggle to keep up with what&apos;s being taught, what&apos;s being assessed, and which extra classes are actually worth the time and money.</p>
                <p>Meanwhile, learning has become fragmented — school plus tutor plus app plus exam prep plus enrichment programs, each pulling in a different direction, each charging separately, none of them talking to each other.</p>
              </div>
            </div>
            <div className="problem-cards">
              <div className="pcard">
                <div className="pcard-num">/ 01</div>
                <svg className="pcard-icon" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <path d="M5 28 L5 14 L16 6 L27 14 L27 28 Z M5 28 L27 28" />
                  <path d="M16 28 L16 18 M12 18 L20 18" />
                </svg>
                <h3>High Cost of Schooling</h3>
                <p>Fees that compound year after year, with no clear value justification or comparison.</p>
              </div>
              <div className="pcard">
                <div className="pcard-num">/ 02</div>
                <svg className="pcard-icon" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <rect x="6" y="6" width="20" height="14" rx="1.5" />
                  <path d="M6 10 H26 M11 24 H21 M16 20 V24" />
                </svg>
                <h3>Digitally Distracted Children</h3>
                <p>Phones, games, and endless content fighting for your child&apos;s attention every hour of the day.</p>
              </div>
              <div className="pcard">
                <div className="pcard-num">/ 03</div>
                <svg className="pcard-icon" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <circle cx="16" cy="16" r="11" />
                  <path d="M16 9 V16 L21 19" />
                </svg>
                <h3>Working Parents, Short on Time</h3>
                <p>You can&apos;t be on every parent-teacher call, track every assignment, or vet every tutor on your own.</p>
              </div>
              <div className="pcard">
                <div className="pcard-num">/ 04</div>
                <svg className="pcard-icon" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <path d="M6 8 H14 V14 H6 Z M18 8 H26 V14 H18 Z M6 18 H14 V24 H6 Z M18 18 H26 V24 H18 Z" />
                </svg>
                <h3>Fragmented Learning</h3>
                <p>School, tutor, app, exam prep — none of it coordinated, all of it adding up financially.</p>
              </div>
            </div>
            <div className="data-callout">
              <div className="stat">
                <span className="stat-num">Loans</span>
                <span className="stat-label">/ Funding the next generation</span>
              </div>
              <div className="body">
                <div className="heading">Parents are now <em>borrowing</em> to pay for their children&apos;s schooling.</div>
                <p>Across the GCC and beyond, families are increasingly taking out <strong>personal loans, school-fee finance, and education loans</strong> just to keep their children in the schools they chose. What used to be a straight cost of living has become, for many, <strong>a financed liability</strong> — and the trend is climbing.</p>
                <div className="source">/&#47; Reflected in regional banking and consumer-finance reporting, 2023–2025</div>
              </div>
            </div>
          </div>
        </section>
        <section className="costs reveal" id="costs">
          <div className="container">
            <div className="costs-header">
              <div className="section-label">
                <span className="br">[</span>
                <span className="num">03</span>
                <span className="br">]</span>
                <span className="bar" />
                <span>Typical Schooling Costs</span>
              </div>
              <h2 className="heading-xl">The bill parents are not<br />told about <em>up front</em>.</h2>
              <p className="costs-lead">Across the GCC, the fee structure keeps <strong>rising periodically</strong> — year on year, often well above inflation, with little notice or explanation.</p>
            </div>
            <div className="costs-table">
              <div className="ct-head">
                <div className="ct-cell">
                  <span className="ct-corner">/ Education stage</span>
                </div>
                <div className="ct-cell">
                  <span className="ct-flag f-uae" />
                  <span className="ct-name">UAE <span className="ct-iso">AED</span></span>
                </div>
                <div className="ct-cell">
                  <span className="ct-flag f-ksa" />
                  <span className="ct-name">Saudi Arabia <span className="ct-iso">SAR</span></span>
                </div>
                <div className="ct-cell">
                  <span className="ct-flag f-qa" />
                  <span className="ct-name">Qatar <span className="ct-iso">QAR</span></span>
                </div>
              </div>
              <div className="ct-row">
                <div className="ct-stage">
                  <span className="stage-label">/ 01</span>
                  <span className="stage-name">Primary</span>
                  <span className="stage-detail">p.a. per child · plus extras</span>
                </div>
                <div className="ct-amt" data-country="UAE">
                  <span className="amount"><span className="ccy">AED</span>30K–65K</span>
                  <span className="aed-equiv">+ 1.5K–3K extras</span>
                </div>
                <div className="ct-amt" data-country="KSA">
                  <span className="amount"><span className="ccy">SAR</span>25K–55K</span>
                  <span className="aed-equiv">+ 1.5K–3K extras</span>
                </div>
                <div className="ct-amt" data-country="Qatar">
                  <span className="amount"><span className="ccy">QAR</span>32K–70K</span>
                  <span className="aed-equiv">+ 1.5K–3.5K extras</span>
                </div>
              </div>
              <div className="ct-row">
                <div className="ct-stage">
                  <span className="stage-label">/ 02</span>
                  <span className="stage-name">Secondary</span>
                  <span className="stage-detail">p.a. per child · plus extras</span>
                </div>
                <div className="ct-amt" data-country="UAE">
                  <span className="amount"><span className="ccy">AED</span>45K–100K</span>
                  <span className="aed-equiv">+ 3K–12K extras</span>
                </div>
                <div className="ct-amt" data-country="KSA">
                  <span className="amount"><span className="ccy">SAR</span>40K–90K</span>
                  <span className="aed-equiv">+ 3K–10K extras</span>
                </div>
                <div className="ct-amt" data-country="Qatar">
                  <span className="amount"><span className="ccy">QAR</span>50K–110K</span>
                  <span className="aed-equiv">+ 3K–12K extras</span>
                </div>
              </div>
              <div className="ct-row">
                <div className="ct-stage">
                  <span className="stage-label">/ 03</span>
                  <span className="stage-name">University</span>
                  <span className="stage-detail">total degree · programme fee</span>
                </div>
                <div className="ct-amt" data-country="UAE">
                  <span className="amount"><span className="ccy">AED</span>240K–600K</span>
                  <span className="aed-equiv">programme fee</span>
                </div>
                <div className="ct-amt" data-country="KSA">
                  <span className="amount"><span className="ccy">SAR</span>200K–500K</span>
                  <span className="aed-equiv">programme fee</span>
                </div>
                <div className="ct-amt" data-country="Qatar">
                  <span className="amount"><span className="ccy">QAR</span>260K–600K</span>
                  <span className="aed-equiv">programme fee</span>
                </div>
              </div>
              <div className="ct-row ct-row-total">
                <div className="ct-stage">
                  <span className="stage-label">/ Lifetime</span>
                  <span className="stage-name">Total Schooling</span>
                  <span className="stage-detail">per child · K–12 + university</span>
                </div>
                <div className="ct-amt" data-country="UAE">
                  <span className="amount"><span className="ccy">AED</span>~980K</span>
                  <span className="aed-equiv">lifetime · approximate</span>
                </div>
                <div className="ct-amt" data-country="KSA">
                  <span className="amount"><span className="ccy">SAR</span>~850K</span>
                  <span className="aed-equiv">lifetime · approximate</span>
                </div>
                <div className="ct-amt" data-country="Qatar">
                  <span className="amount"><span className="ccy">QAR</span>~1.05M</span>
                  <span className="aed-equiv">lifetime · approximate</span>
                </div>
              </div>
            </div>
            <div className="costs-disclaimer">
              <span className="label">/ Note</span>
              <p>These are <strong>indicative ranges</strong> compiled from public schooling-fee surveys across the GCC (2024–2025). They cover private and international schools, which is the cohort EDU Concierge typically supports. Numbers vary widely by city, board, and tier — they are shown here only to make the case for why the bulk of a family&apos;s investment in a child deserves <em>active management</em>.</p>
            </div>
            <div className="costs-note">
              <span>/&#47; Sources: regional schooling surveys, 2024–2025</span>
              <span className="total"><span className="v">~AED 1.5M+</span> typical full lifetime educational spend per child, with university (UAE indicative)</span>
            </div>
          </div>
        </section>
        <section className="promise-strip reveal">
          <div className="container">
            <p className="quote">Your child&apos;s education, <em>handled</em> — quietly, properly, by a team that knows them.</p>
            <div className="attr">— The EDU Concierge promise</div>
          </div>
        </section>
        <section className="em-section reveal" id="manager">
          <div className="container">
            <div className="em-grid">
              <div className="em-text">
                <div className="section-label">
                  <span className="br">[</span>
                  <span className="num">04</span>
                  <span className="br">]</span>
                  <span className="bar" />
                  <span>Your Education Manager</span>
                </div>
                <h2 className="heading-xl">Meet your dedicated <em>Education Manager</em>.</h2>
                <p>Every member of EDU Concierge is paired with an experienced Education Manager — a single point of contact who knows your child, knows your goals, and runs the operational side of education on your behalf.</p>
                <div className="quote-block"> I&apos;ll track your child&apos;s progress, arrange lessons when needed, connect with specialists if required, and keep you fully updated — all while ensuring there&apos;s still plenty of time for regular activities. </div>
                <ul className="em-features">
                  <li>Manage and monitor your child&apos;s educational progress</li>
                  <li>Address any academic or school-related concerns</li>
                  <li>Find suitable options for further education or career pathways</li>
                  <li>Guide you through admissions, assessments, and transitions between schools or systems</li>
                </ul>
              </div>
              <div className="em-visual">
                <div className="em-portrait">
                  <img src="em-portrait.jpg" alt="An EDU Concierge Education Manager" className="portrait-img" />
                  <span className="portrait-corner">[ EM · 2026 ]</span>
                  <div className="portrait-caption">
                    <span className="role-tag">EM</span>
                    <span className="caption-text">&quot;I&apos;ll know your child by name, before <em>their first session</em>.&quot;</span>
                  </div>
                </div>
                <div className="em-orbital">
                  <svg viewBox="0 0 480 480" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <radialGradient id="emGlow" cx="50%" cy="50%" r="50%">
                        <stop offset="0%" stopColor="#F5D88A" stopOpacity="0.6" />
                        <stop offset="100%" stopColor="#F5D88A" stopOpacity="0" />
                      </radialGradient>
                    </defs>
                    <circle cx="240" cy="240" r="200" fill="url(#emGlow)" />
                    <circle cx="240" cy="240" r="180" fill="none" stroke="rgba(26,22,18,0.15)" strokeWidth="1" strokeDasharray="3 6" />
                    <circle cx="240" cy="240" r="130" fill="none" stroke="rgba(26,22,18,0.18)" strokeWidth="1" />
                    <circle cx="240" cy="240" r="80" fill="none" stroke="rgba(26,22,18,0.22)" strokeWidth="1" />
                    <g>
                      <circle cx="240" cy="60" r="10" fill="#5B3A5C" />
                      <text x="240" y="38" fontFamily="JetBrains Mono" fontSize="9" fill="#3A332C" textAnchor="middle" letterSpacing="0.05em">PROGRESS</text>
                    </g>
                    <g>
                      <circle cx="420" cy="240" r="10" fill="#C77B4F" />
                      <text x="420" y="218" fontFamily="JetBrains Mono" fontSize="9" fill="#3A332C" textAnchor="middle" letterSpacing="0.05em">LESSONS</text>
                    </g>
                    <g>
                      <circle cx="240" cy="420" r="10" fill="#7A9472" />
                      <text x="240" y="445" fontFamily="JetBrains Mono" fontSize="9" fill="#3A332C" textAnchor="middle" letterSpacing="0.05em">ASSESSMENTS</text>
                    </g>
                    <g>
                      <circle cx="60" cy="240" r="10" fill="#6BA3C7" />
                      <text x="60" y="218" fontFamily="JetBrains Mono" fontSize="9" fill="#3A332C" textAnchor="middle" letterSpacing="0.05em">SPECIALISTS</text>
                    </g>
                    <g>
                      <circle cx="370" cy="110" r="7" fill="#5B3A5C" opacity="0.7" />
                    </g>
                    <g>
                      <circle cx="110" cy="370" r="7" fill="#C77B4F" opacity="0.7" />
                    </g>
                    <g>
                      <circle cx="370" cy="370" r="7" fill="#7A9472" opacity="0.7" />
                    </g>
                    <g>
                      <circle cx="110" cy="110" r="7" fill="#6BA3C7" opacity="0.7" />
                    </g>
                    <circle cx="240" cy="240" r="44" fill="#1A1612" />
                    <circle cx="240" cy="240" r="14" fill="#F5D88A" />
                    <text x="240" y="312" fontFamily="Archivo" fontSize="12" fontWeight="600" fill="#1A1612" textAnchor="middle" letterSpacing="0.12em">EDU. MANAGER</text>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="ec-team reveal" id="ec-team">
          <div className="container">
            <div className="ec-team-header">
              <div>
                <span className="first-badge">First of its kind · Live monitoring layer</span>
                <div className="section-label">
                  <span className="br">[</span>
                  <span className="num">05</span>
                  <span className="br">]</span>
                  <span className="bar" />
                  <span>Who are the ECs</span>
                </div>
                <h2 className="heading-xl">A <em>mentor layer</em> built around the student.</h2>
              </div>
              <p className="lead">Traditionally, the work of tracking a child&apos;s learning, spotting stress before it tips into burnout, and adjusting the schedule accordingly was <strong>done by parents</strong> — who simply don&apos;t have the time. Studies consistently show what a dedicated mentor adds. EDU Concierge is the first programme to build that role into the operating model.</p>
            </div>
            <div className="ec-structure">
              <div className="ec-card">
                <div className="ec-role-tag">
                  <span className="badge">EC</span>
                  <span>Education Concierge</span>
                  <span className="reports">· reports to ECM</span>
                </div>
                <h3>Your child&apos;s <em>mentor</em>, in practice.</h3>
                <div className="ec-acronym">/&#47; Exceptionally trained &amp; experienced support staff</div>
                <p>ECs are the practitioners — they understand each student at an individual level, track learning patterns, and watch the human factors that academic systems usually ignore.</p>
                <ul className="ec-list">
                  <li>Track learning patterns over time, not just grades</li>
                  <li>Monitor stress, rest, and burnout signals as part of the schedule</li>
                  <li>Build a balanced support plan, weekly and termly</li>
                  <li>Step in proactively when something needs adjusting</li>
                </ul>
              </div>
              <div className="ec-card ec-card-mgr">
                <div className="ec-role-tag">
                  <span className="badge">ECM</span>
                  <span>Education Concierge Manager</span>
                </div>
                <h3>The <em>oversight</em> layer above every EC.</h3>
                <div className="ec-acronym">/&#47; Each EC reports to an ECM</div>
                <p>ECMs bring years of experience in <strong>high-demand customer service and student care.</strong> They supervise EC teams, hold service standards, and step in on complex family situations.</p>
                <ul className="ec-list">
                  <li>Supervise multiple ECs across age groups and curriculums</li>
                  <li>Quality-control every learning track and intervention</li>
                  <li>Escalation point for complex academic or pastoral cases</li>
                  <li>Long-tenure team members — not rotating contractors</li>
                </ul>
              </div>
            </div>
            <div className="ec-watch">
              <div className="watch-narrative">
                <span className="narrative-tag">/ The Quiet Work</span>
                <h4>Holding the <em>whole picture</em> — academic and otherwise.</h4>
                <p>An EC is not just managing studies. They&apos;re tracking the <strong>deadlines a parent shouldn&apos;t have to memorise</strong> — exam windows, coursework due dates, university milestones — and watching the parts of your child that academic systems don&apos;t measure: how much rest they&apos;re getting, where stress is building, what they care about beyond school, whether their interests and chosen path are still aligned.</p>
                <p>Education takes the bulk of a young person&apos;s waking hours for over a decade. Without active management, the cost of that — academically, emotionally, on the family — quietly compounds.</p>
                <div className="study-quote"> <strong>/&#47; On burnout in students</strong> Studies consistently link unmanaged academic load to chronic stress, sleep disruption, and a measurable drop in long-term performance. The signals are there well before the breakdown — they just need someone watching for them. </div>
              </div>
              <div className="watchlist">
                <div className="wl-bar">
                  <span className="wl-title">EC Watchlist · Live</span>
                  <span className="wl-stamp">[ updates · weekly ]</span>
                </div>
                <div className="wl-rows">
                  <div className="wl-row">
                    <div className="wl-icon">
                      <svg viewBox="0 0 13 13" fill="none" stroke="currentColor" strokeWidth="1.6">
                        <path d="M2 4 H11 V11 H2 Z M2 4 V2 M11 4 V2 M5 7 H8" />
                      </svg>
                    </div>
                    <div className="wl-body">
                      <span className="wl-name">Exam &amp; coursework <em>deadlines</em></span>
                      <span className="wl-detail">IGCSE mocks · A-Level UCAS predictions · paper submissions</span>
                    </div>
                    <span className="wl-status s-due">Tracked</span>
                  </div>
                  <div className="wl-row">
                    <div className="wl-icon">
                      <svg viewBox="0 0 13 13" fill="none" stroke="currentColor" strokeWidth="1.6">
                        <path d="M2 11 Q5 6 7 8 T11 3" />
                        <circle cx="11" cy="3" r="1" />
                      </svg>
                    </div>
                    <div className="wl-body">
                      <span className="wl-name">Subject-by-subject <em>progress</em></span>
                      <span className="wl-detail">Pace, comprehension, recurring stuck-points</span>
                    </div>
                    <span className="wl-status s-track">On Track</span>
                  </div>
                  <div className="wl-row">
                    <div className="wl-icon">
                      <svg viewBox="0 0 13 13" fill="none" stroke="currentColor" strokeWidth="1.6">
                        <circle cx="6.5" cy="4.5" r="2.5" />
                        <path d="M2 12 C2 9.5 4 8 6.5 8 C9 8 11 9.5 11 12" />
                      </svg>
                    </div>
                    <div className="wl-body">
                      <span className="wl-name">Career interests &amp; <em>aspirations</em></span>
                      <span className="wl-detail">Subject choices that keep doors open · university trajectory</span>
                    </div>
                    <span className="wl-status s-track">Aligned</span>
                  </div>
                  <div className="wl-row">
                    <div className="wl-icon">
                      <svg viewBox="0 0 13 13" fill="none" stroke="currentColor" strokeWidth="1.6">
                        <path d="M3 6 Q5 4 6.5 5 T10 3" />
                        <path d="M3 9 Q5 7 6.5 8 T10 6" />
                      </svg>
                    </div>
                    <div className="wl-body">
                      <span className="wl-name">Other <em>interests</em></span>
                      <span className="wl-detail">Music, sport, time off — held in view alongside studies</span>
                    </div>
                    <span className="wl-status s-track">Held</span>
                  </div>
                  <div className="wl-row">
                    <div className="wl-icon">
                      <svg viewBox="0 0 13 13" fill="none" stroke="currentColor" strokeWidth="1.6">
                        <circle cx="6.5" cy="6.5" r="4" />
                        <path d="M6.5 4 V6.5 L8 8" />
                      </svg>
                    </div>
                    <div className="wl-body">
                      <span className="wl-name">Rest, sleep &amp; <em>recovery</em></span>
                      <span className="wl-detail">Schedule density · downtime · reported energy</span>
                    </div>
                    <span className="wl-status s-watch">Watch</span>
                  </div>
                  <div className="wl-row">
                    <div className="wl-icon">
                      <svg viewBox="0 0 13 13" fill="none" stroke="currentColor" strokeWidth="1.6">
                        <path d="M6.5 2 L11 5 V8.5 Q11 11 6.5 12 Q2 11 2 8.5 V5 Z" />
                        <path d="M5 7 L6 8 L8.5 5.5" />
                      </svg>
                    </div>
                    <div className="wl-body">
                      <span className="wl-name">Stress &amp; burnout <em>signals</em></span>
                      <span className="wl-detail">Engagement drop · withdrawal · workload pressure</span>
                    </div>
                    <span className="wl-status s-flag">Flag &amp; act</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="with-ec">
              <div className="with-ec-head">
                <span className="label">/ Stack behind every EC</span>
                <h4>With one EC, you get a <em>full team</em>.</h4>
              </div>
              <div className="with-ec-grid">
                <div className="with-ec-cell">
                  <span className="role-tag">/ Teaching</span>
                  <span className="role-name">Subject-expert teachers</span>
                  <span className="role-desc">Live class support across the core curriculum, taught by full-time specialists.</span>
                </div>
                <div className="with-ec-cell">
                  <span className="role-tag">/ Pedagogy</span>
                  <span className="role-name">Learning specialists</span>
                  <span className="role-desc">Assess how your child learns and shape the support around it — not the other way round.</span>
                </div>
                <div className="with-ec-cell">
                  <span className="role-tag">/ Platform</span>
                  <span className="role-name">A smart system</span>
                  <span className="role-desc">An AI-supported platform that surfaces what matters before anyone has to ask.</span>
                </div>
                <div className="with-ec-cell">
                  <span className="role-tag">/ Oversight</span>
                  <span className="role-name">Senior management layer</span>
                  <span className="role-desc">Highly experienced ECMs supervising every plan, every escalation, every term.</span>
                </div>
              </div>
            </div>
            <div className="ec-monitor-strip">
              <span className="strip-tag">/ Monitoring System</span>
              <span className="strip-text">Built with input from <em>learning specialists, psychologists, and tech experts</em> — to surface what matters across thousands of student interactions, swiftly.</span>
              <a href="#contact" className="strip-cta">See how it works <svg viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ width: "12px", height: "12px" }}>
  <path d="M3 11 L11 3 M5 3 L11 3 L11 9" />
</svg> </a>
            </div>
          </div>
        </section>
        <section className="experience reveal" id="how">
          <div className="container">
            <div className="section-label">
              <span className="br">[</span>
              <span className="num">06</span>
              <span className="br">]</span>
              <span className="bar" />
              <span>The EDC Experience</span>
            </div>
            <h2 className="heading-xl">From registration to ongoing <em>oversight</em> — every stage in one flow.</h2>
            <div className="exp-flow">
              <div className="exp-stage">
                <div className="stage-num"><span className="br">[</span> 01 <span className="br">]</span></div>
                <div className="stage-info">
                  <h4>Registration</h4>
                  <p>You sign up online. Your child is matched to an Education Manager based on age, year group, school system, and learning needs.</p>
                </div>
                <div className="stage-tag"> / first contact <span className="who parent">Parent</span> </div>
              </div>
              <div className="exp-stage">
                <div className="stage-num"><span className="br">[</span> 02 <span className="br">]</span></div>
                <div className="stage-info">
                  <h4>1:1 Welcome Call with Parents</h4>
                  <p>Your Education Manager runs a structured intake call to understand your situation, your child, your school, and what success looks like for your family.</p>
                </div>
                <div className="stage-tag"> / 30 minutes <span className="who parent">Parent</span> </div>
              </div>
              <div className="exp-stage">
                <div className="stage-num"><span className="br">[</span> 03 <span className="br">]</span></div>
                <div className="stage-info">
                  <h4>Learning Style Assessment</h4>
                  <p>A short structured assessment for your child to identify how they learn best, where they&apos;re confident, and where targeted support will move the needle most.</p>
                </div>
                <div className="stage-tag"> / structured <span className="who student">Student</span> </div>
              </div>
              <div className="exp-stage">
                <div className="stage-num"><span className="br">[</span> 04 <span className="br">]</span></div>
                <div className="stage-info">
                  <h4>Welcome Session for Students</h4>
                  <p>Your child is onboarded onto the platform, meets their Education Manager, and is shown how to use the mobile app and live learning tools.</p>
                </div>
                <div className="stage-tag"> / 1:1 onboarding <span className="who student">Student</span> </div>
              </div>
              <div className="exp-stage">
                <div className="stage-num"><span className="br">[</span> 05 <span className="br">]</span></div>
                <div className="stage-info">
                  <h4>Learning Track &amp; Milestones</h4>
                  <p>Your Education Manager builds a personalised learning track with milestones and checkpoints, agreed with you and adjusted termly.</p>
                </div>
                <div className="stage-tag"> / personalised <span className="who both">EM + Family</span> </div>
              </div>
              <div className="exp-stage">
                <div className="stage-num"><span className="br">[</span> 06 <span className="br">]</span></div>
                <div className="stage-info">
                  <h4>Ongoing Programme Management</h4>
                  <p>Live lessons when needed, regular progress reporting, exam prep cycles, school-liaison support, and proactive alerts when something needs your attention.</p>
                </div>
                <div className="stage-tag"> / continuous <span className="who both">EM + Family</span> </div>
              </div>
            </div>
          </div>
        </section>
        <section className="technology reveal" id="technology">
          <div className="container">
            <div className="tech-header">
              <div>
                <div className="section-label">
                  <span className="br">[</span>
                  <span className="num">07</span>
                  <span className="br">]</span>
                  <span className="bar" />
                  <span>Technology</span>
                </div>
                <h2 className="heading-xl">A platform built for <em>insight</em>, not just admin.</h2>
              </div>
              <p className="lead">Most education platforms are glorified spreadsheets — places where homework gets logged and reports get generated. Ours is built to do something <strong>fundamentally different</strong>: surface what matters about a student <em>before</em> a parent or teacher would have noticed it.</p>
            </div>
            <div className="tech-pillars">
              <div className="tech-pillar">
                <div className="pillar-num">/ 01</div>
                <svg className="pillar-icon" viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <circle cx="18" cy="18" r="14" />
                  <circle cx="18" cy="18" r="6" />
                  <path d="M18 4 V11 M32 18 H25 M18 32 V25 M4 18 H11" />
                </svg>
                <h3>Smart, not <em>just</em> managed</h3>
                <p>The system tracks far beyond grades — engagement, pace, missed sessions, recurring stuck-points. Every signal feeds a continuously updated picture of your child.</p>
              </div>
              <div className="tech-pillar">
                <div className="pillar-num">/ 02</div>
                <svg className="pillar-icon" viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <rect x="6" y="6" width="24" height="24" rx="3" />
                  <circle cx="13" cy="13" r="2" />
                  <circle cx="23" cy="13" r="2" />
                  <path d="M11 22 Q18 26 25 22" />
                  <path d="M18 6 V3 M14 3 H22" />
                </svg>
                <h3>AI <em>copilot</em> for ECs</h3>
                <p>An AI assistant that flags where each EC&apos;s attention will pay off most this week — students at risk of stress, learners ready to be stretched, families to check in on.</p>
              </div>
              <div className="tech-pillar">
                <div className="pillar-num">/ 03</div>
                <svg className="pillar-icon" viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <path d="M6 30 Q12 22 18 26 T30 18" />
                  <path d="M6 22 Q14 16 20 20 T30 12" />
                  <circle cx="30" cy="12" r="2.5" />
                  <circle cx="30" cy="18" r="2.5" />
                </svg>
                <h3>Deep <em>insights</em></h3>
                <p>Long-arc views your school report card never gives you — multi-month learning patterns, subject correlations, wellbeing trends, intervention outcomes.</p>
              </div>
              <div className="tech-pillar">
                <div className="pillar-num">/ 04</div>
                <svg className="pillar-icon" viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <path d="M6 12 H30 V28 H6 Z" />
                  <path d="M6 12 L18 4 L30 12" />
                  <circle cx="18" cy="20" r="3" />
                  <path d="M18 23 V26" />
                </svg>
                <h3>Dynamic, <em>interactive</em> content</h3>
                <p>Lessons that respond — adaptive practice, branching examples, instant feedback. Less lecture, more conversation between the student and the material.</p>
              </div>
            </div>
            <div className="tech-portals">
              <div className="text">
                <h3>Three portals.<br />One <em>state-of-the-art</em> stack.</h3>
                <p>The EC, Student, and Teacher portals are <strong>designed by collecting feedback from real users</strong> — learning specialists, classroom teachers, and the families themselves — then refined through ongoing release cycles.</p>
                <p>Nothing ships and goes stale. The platform updates continuously, with every release shaped by the people actually using it on the ground.</p>
                <span className="signal-line">Live · shipped weekly · feedback-driven</span>
              </div>
              <div className="portals-stack">
                <span className="tech-upgrade">v.2026 → Continuous</span>
                <div className="portal-window w-ec">
                  <div className="pw-bar">
                    <span className="dot r" />
                    <span className="dot y" />
                    <span className="dot g" />
                    <span className="label">EC Portal · Caseload</span>
                  </div>
                  <div className="pw-body">
                    <div className="pw-row">
                      <span className="pw-dot" style={{ background: "#7A9472" }} />
                      <span style={{ fontWeight: "500" }}>A. Khan</span>
                      <span className="pw-bar-fill">
                        <span className="fill" style={{ width: "84%" }} />
                      </span>
                      <span className="pw-num">on track</span>
                    </div>
                    <div className="pw-row">
                      <span className="pw-dot" style={{ background: "#F5D88A" }} />
                      <span style={{ fontWeight: "500" }}>M. Singh</span>
                      <span className="pw-bar-fill">
                        <span className="fill" style={{ width: "62%", background: "#F5D88A" }} />
                      </span>
                      <span className="pw-num">watch</span>
                    </div>
                    <div className="pw-row">
                      <span className="pw-dot" style={{ background: "#C77B4F" }} />
                      <span style={{ fontWeight: "500" }}>L. Hassan</span>
                      <span className="pw-bar-fill">
                        <span className="fill" style={{ width: "42%" }} />
                      </span>
                      <span className="pw-num">flag</span>
                    </div>
                    <div className="pw-row">
                      <span className="pw-dot" style={{ background: "#7A9472" }} />
                      <span style={{ fontWeight: "500" }}>R. Rao</span>
                      <span className="pw-bar-fill">
                        <span className="fill" style={{ width: "91%" }} />
                      </span>
                      <span className="pw-num">on track</span>
                    </div>
                  </div>
                </div>
                <div className="portal-window w-student">
                  <div className="pw-bar">
                    <span className="dot r" />
                    <span className="dot y" />
                    <span className="dot g" />
                    <span className="label">Student · Today</span>
                  </div>
                  <div className="pw-body">
                    <div className="pw-bubble user">/&#47; algebra Q4 — i&apos;m stuck</div>
                    <div className="pw-bubble bot">try this — what&apos;s x in 3x+2=14?</div>
                    <div className="pw-bubble user">x = 4</div>
                  </div>
                </div>
                <div className="portal-window w-teacher">
                  <div className="pw-bar">
                    <span className="dot r" />
                    <span className="dot y" />
                    <span className="dot g" />
                    <span className="label">Teacher · Class 9B</span>
                  </div>
                  <div className="pw-body">
                    <div className="pw-tile t-active">Live</div>
                    <div className="pw-tile">Lesson</div>
                    <div className="pw-tile t-warn">3 ⚑</div>
                    <div className="pw-tile">Practice</div>
                    <div className="pw-tile">Quiz</div>
                    <div className="pw-tile">Notes</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="trust-engage reveal" id="trust">
          <div className="container">
            <div className="te-header">
              <div>
                <div className="section-label">
                  <span className="br">[</span>
                  <span className="num">08</span>
                  <span className="br">]</span>
                  <span className="bar" />
                  <span>Trust &amp; Parent Engagement</span>
                </div>
                <h2 className="heading-xl">How we <em>actually</em> show up.</h2>
              </div>
              <p className="lead">Two things every family is right to ask before they hand over their child&apos;s education to anyone: <strong>&quot;How do you operate?&quot;</strong> and <strong>&quot;How will you keep me in the loop?&quot;</strong> Here are direct answers to both.</p>
            </div>
            <div className="te-columns">
              <div className="te-card">
                <div className="te-tag">/ The Trust Layer</div>
                <h3>Protocols we <em>follow</em>.</h3>
                <p className="te-intro">A short, deliberate list — not legal copy, not a pile of ISO numbers. The actual operating rules every EC, ECM, and team member abides by, every day, no exceptions.</p>
                <ol className="protocols-list">
                  <li>
                    <span className="num">/ 01</span>
                    <div className="body">
                      <span className="name">Strict Confidentiality</span>
                      <span className="desc">Everything you share — your child&apos;s grades, situation, family context — stays inside the engagement. We do not share, sell, or repurpose it. Ever.</span>
                    </div>
                  </li>
                  <li>
                    <span className="num">/ 02</span>
                    <div className="body">
                      <span className="name">Encrypted, Owned by You</span>
                      <span className="desc">All data — assessments, progress notes, session recordings — is encrypted in transit and at rest. You can request a full export, or full deletion, at any time.</span>
                    </div>
                  </li>
                  <li>
                    <span className="num">/ 03</span>
                    <div className="body">
                      <span className="name">Vetted Staff Only</span>
                      <span className="desc">Background checks, qualification verification, ongoing professional review. No freelancer hand-offs. Every adult interacting with your child is on our team.</span>
                    </div>
                  </li>
                  <li>
                    <span className="num">/ 04</span>
                    <div className="body">
                      <span className="name">Layered Oversight</span>
                      <span className="desc">Every EC reports to an ECM. Every interaction is logged. Every plan is peer-reviewed. No single person is the only safeguard around your child.</span>
                    </div>
                  </li>
                  <li>
                    <span className="num">/ 05</span>
                    <div className="body">
                      <span className="name">Safeguarding First</span>
                      <span className="desc">Wellbeing concerns — stress, withdrawal, signals of harm — are escalated through a documented, expert-led safeguarding pathway. Always, immediately, without exception.</span>
                    </div>
                  </li>
                </ol>
              </div>
              <div className="te-card">
                <div className="te-tag">/ The Relationship Layer</div>
                <h3>You stay <em>in the loop</em>.</h3>
                <p className="te-intro">A real cadence of contact — not just a quarterly portal login. You hear from us before you have to ask. And when something is on your mind, we want to know.</p>
                <div className="engage-touch">
                  <div className="engage-row">
                    <div className="icon-circle">
                      <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6">
                        <rect x="2" y="3" width="12" height="10" rx="1.5" />
                        <path d="M2 6 H14 M5 9 H8 M5 11 H10" />
                      </svg>
                    </div>
                    <div className="body">
                      <span className="label">Monthly Progress Report</span>
                      <span className="desc">A clear written summary of your child&apos;s month — academic, engagement, wellbeing.</span>
                    </div>
                    <span className="cadence">Monthly</span>
                  </div>
                  <div className="engage-row">
                    <div className="icon-circle">
                      <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6">
                        <circle cx="8" cy="8" r="6" />
                        <path d="M8 4 V8 L11 10" />
                      </svg>
                    </div>
                    <div className="body">
                      <span className="label">Termly 1:1 Review Call</span>
                      <span className="desc">A scheduled call with your EC to review the term, adjust the plan, and look ahead.</span>
                    </div>
                    <span className="cadence">Termly</span>
                  </div>
                  <div className="engage-row">
                    <div className="icon-circle">
                      <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6">
                        <path d="M3 4 L13 4 L13 12 L9 12 L7 14 L7 12 L3 12 Z" />
                        <circle cx="6" cy="8" r="0.6" fill="currentColor" />
                        <circle cx="8" cy="8" r="0.6" fill="currentColor" />
                        <circle cx="10" cy="8" r="0.6" fill="currentColor" />
                      </svg>
                    </div>
                    <div className="body">
                      <span className="label">Direct Line, Always Open</span>
                      <span className="desc">Message your EC anytime through the app — questions, worries, anything.</span>
                    </div>
                    <span className="cadence">Anytime</span>
                  </div>
                  <div className="engage-row">
                    <div className="icon-circle">
                      <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6">
                        <path d="M3 13 L8 8 L13 13" />
                        <path d="M3 8 L8 3 L13 8" />
                      </svg>
                    </div>
                    <div className="body">
                      <span className="label">Proactive Alerts</span>
                      <span className="desc">If a pattern shifts — grades, mood, attendance — we tell you before you&apos;d have noticed.</span>
                    </div>
                    <span className="cadence">As Needed</span>
                  </div>
                </div>
                <div className="talk-pull">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                    <path d="M4 6 H20 V16 H13 L9 20 L9 16 L4 16 Z" />
                    <circle cx="9" cy="11" r="0.8" fill="currentColor" />
                    <circle cx="12" cy="11" r="0.8" fill="currentColor" />
                    <circle cx="15" cy="11" r="0.8" fill="currentColor" />
                  </svg>
                  <span className="text">Worried about <em>rising school fees</em>, a tough term, or something you&apos;re not sure how to handle? Your EC is here to listen and help — not just on academics, but on the wider weight of educating a child in 2026.</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="value reveal" id="value">
          <div className="container">
            <div className="value-header">
              <div>
                <div className="section-label">
                  <span className="br">[</span>
                  <span className="num">09</span>
                  <span className="br">]</span>
                  <span className="bar" />
                  <span>The Value</span>
                </div>
                <h2 className="heading-xl">Two halves of <em>worth</em>.</h2>
              </div>
              <p className="lead">The value of EDU Concierge splits cleanly in two. The <strong>tangible</strong> part — the hours of learning support — has a market price, and ours is roughly <em>a tenth</em> of buying it through a tuition centre. The <strong>intangible</strong> part — the people, the system, the follow-up — has no sticker price, but it&apos;s where the programme really earns its keep.</p>
            </div>
            <div className="value-half">
              <div className="half-head">
                <span className="half-tag tag-tangible">/ 01 Tangible</span>
                <h3>Foundation hours.<br />Same maths, <em>different</em> price.</h3>
              </div>
              <div className="tier-toggle" role="tablist" aria-label="Compare plan">
                <button className="active" data-tier="basic" role="tab" aria-selected="true">Basic Tier</button>
                <button data-tier="plus" role="tab" aria-selected="false">Plus Tier</button>
              </div>
              <div className="tangible-pair" data-tier-pane="basic">
                <div className="tangible-card">
                  <span className="t-label">/ Tuition Centre Route</span>
                  <h4 className="t-headline">Same hours, paid <em>by the hour</em>.</h4>
                  <div className="t-math">
                    <div className="math-row">
                      <span className="label">/ Hours</span>
                      <span className="value-line">1.5 hrs/week × 4 weeks = <em>6 hrs</em></span>
                    </div>
                    <div className="math-row">
                      <span className="label">/ Rate</span>
                      <span className="value-line">AED 80–150 / hour</span>
                    </div>
                    <div className="calc-line">6 hrs <span className="equals">×</span> AED 80–150/hr <span className="equals">=</span> AED 480–900</div>
                  </div>
                  <div className="t-total">
                    <span className="total-label">Tuition centre · monthly</span>
                    <div className="amount"> <span className="currency">AED</span>480–900 <span className="period">per month, per student</span> </div>
                  </div>
                </div>
                <div className="tangible-card card-edc">
                  <span className="t-label">/ EDC Basic</span>
                  <h4 className="t-headline">Same hours. <em>Bundled.</em></h4>
                  <div className="t-math">
                    <div className="math-row">
                      <span className="label">/ Hours</span>
                      <span className="value-line">1.5 hrs/week × 4 weeks = <em>6 hrs</em></span>
                    </div>
                    <div className="math-row">
                      <span className="label">/ Rate</span>
                      <span className="value-line">All-in subscription</span>
                    </div>
                    <div className="calc-line">Live class support · subject-expert teachers <span className="equals">·</span> Limited exam help included</div>
                  </div>
                  <div className="t-total">
                    <span className="total-label">EDC Basic · monthly</span>
                    <div className="amount"> <span className="currency">AED</span>30 <span className="period">per month, per student</span> </div>
                  </div>
                </div>
              </div>
              <div className="tangible-pair" data-tier-pane="plus" style={{ display: "none" }}>
                <div className="tangible-card">
                  <span className="t-label">/ Tuition Centre Route</span>
                  <h4 className="t-headline">Same hours, paid <em>by the hour</em>.</h4>
                  <div className="t-math">
                    <div className="math-row">
                      <span className="label">/ Hours</span>
                      <span className="value-line">3 hrs/week × 4 weeks = <em>12 hrs</em></span>
                    </div>
                    <div className="math-row">
                      <span className="label">/ Rate</span>
                      <span className="value-line">AED 80–150 / hour</span>
                    </div>
                    <div className="calc-line">12 hrs <span className="equals">×</span> AED 80–150/hr <span className="equals">=</span> AED 960–1,800</div>
                  </div>
                  <div className="t-total">
                    <span className="total-label">Tuition centre · monthly</span>
                    <div className="amount"> <span className="currency">AED</span>960–1,800 <span className="period">per month, per student</span> </div>
                  </div>
                </div>
                <div className="tangible-card card-edc">
                  <span className="t-label">/ EDC Plus</span>
                  <h4 className="t-headline">Same hours. <em>Bundled.</em></h4>
                  <div className="t-math">
                    <div className="math-row">
                      <span className="label">/ Hours</span>
                      <span className="value-line">3 hrs/week × 4 weeks = <em>12 hrs</em></span>
                    </div>
                    <div className="math-row">
                      <span className="label">/ Rate</span>
                      <span className="value-line">All-in subscription</span>
                    </div>
                    <div className="calc-line">Foundation classes <span className="equals">+</span> 1hr/week 1:1 <span className="equals">+</span> unlimited exam help</div>
                  </div>
                  <div className="t-total">
                    <span className="total-label">EDC Plus · monthly</span>
                    <div className="amount"> <span className="currency">AED</span>200 <span className="period">per month, per student</span> </div>
                  </div>
                </div>
              </div>
              <div className="tangible-savings">
                <div className="text" data-tangible-text=""> On <strong>foundation hours alone</strong>, EDC Basic costs roughly <em>a sixteenth</em> of paying for the same teaching at a tuition centre. </div>
                <div className="stamp" data-tangible-stamp=""> <span className="currency">~</span>16× </div>
              </div>
            </div>
            <div className="value-half">
              <div className="half-head">
                <span className="half-tag tag-intangible">/ 02 Intangible</span>
                <h3>What you can&apos;t <em>price by the hour</em>.</h3>
              </div>
              <div className="intangible-grid">
                <div className="intangible-card">
                  <div className="ic-num">/ 01</div>
                  <svg className="ic-icon" viewBox="0 0 30 30" fill="none" stroke="currentColor" strokeWidth="1.6">
                    <circle cx="15" cy="11" r="4" />
                    <path d="M5 26 C5 20 10 17 15 17 C20 17 25 20 25 26" />
                  </svg>
                  <h4>A dedicated <em>Education Manager</em></h4>
                  <p>Someone who knows your child by name. Tracks the long arc, not just this week. Picks up the phone when you need them.</p>
                  <div className="ic-tag">/&#47; Plus &amp; Family tiers</div>
                </div>
                <div className="intangible-card">
                  <div className="ic-num">/ 02</div>
                  <svg className="ic-icon" viewBox="0 0 30 30" fill="none" stroke="currentColor" strokeWidth="1.6">
                    <circle cx="9" cy="11" r="3" />
                    <circle cx="21" cy="11" r="3" />
                    <path d="M3 24 C3 19 6 17 9 17 C12 17 15 19 15 24" />
                    <path d="M15 24 C15 19 18 17 21 17 C24 17 27 19 27 24" />
                  </svg>
                  <h4>Learning specialists, <em>on call</em></h4>
                  <p>Pedagogy experts, psychologists, subject specialists — pulled in when your child needs a layer beyond the regular session.</p>
                  <div className="ic-tag">/&#47; As needed</div>
                </div>
                <div className="intangible-card">
                  <div className="ic-num">/ 03</div>
                  <svg className="ic-icon" viewBox="0 0 30 30" fill="none" stroke="currentColor" strokeWidth="1.6">
                    <path d="M5 24 Q11 16 15 18 T25 6" />
                    <circle cx="25" cy="6" r="2" />
                    <circle cx="15" cy="18" r="1.5" />
                  </svg>
                  <h4>Active <em>follow-up</em></h4>
                  <p>Patterns spotted before they become problems. Nudges to your child when momentum dips. Adjustments to the plan, term by term.</p>
                  <div className="ic-tag">/&#47; Continuous</div>
                </div>
                <div className="intangible-card">
                  <div className="ic-num">/ 04</div>
                  <svg className="ic-icon" viewBox="0 0 30 30" fill="none" stroke="currentColor" strokeWidth="1.6">
                    <rect x="5" y="6" width="20" height="18" rx="2" />
                    <path d="M5 11 H25 M9 16 H15 M9 20 H19" />
                  </svg>
                  <h4>Regular parent <em>reporting</em></h4>
                  <p>Monthly written summaries. Termly 1:1 review calls. Proactive alerts when something shifts. You hear from us before you have to ask.</p>
                  <div className="ic-tag">/&#47; Monthly + termly</div>
                </div>
                <div className="intangible-card">
                  <div className="ic-num">/ 05</div>
                  <svg className="ic-icon" viewBox="0 0 30 30" fill="none" stroke="currentColor" strokeWidth="1.6">
                    <circle cx="15" cy="15" r="11" />
                    <circle cx="15" cy="15" r="5" />
                    <path d="M15 4 V8 M26 15 H22 M15 26 V22 M4 15 H8" />
                  </svg>
                  <h4>The <em>system</em>, watching</h4>
                  <p>An AI-supported platform tracking learning patterns, engagement, wellbeing — surfacing what matters to the team before anyone has to ask.</p>
                  <div className="ic-tag">/&#47; All tiers</div>
                </div>
                <div className="intangible-card">
                  <div className="ic-num">/ 06</div>
                  <svg className="ic-icon" viewBox="0 0 30 30" fill="none" stroke="currentColor" strokeWidth="1.6">
                    <path d="M15 4 L24 8 V16 Q24 22 15 26 Q6 22 6 16 V8 Z" />
                    <path d="M11 15 L14 18 L20 12" />
                  </svg>
                  <h4>An <em>oversight</em> layer</h4>
                  <p>ECMs supervising every plan. Documented safeguarding pathway. Strict confidentiality, vetted staff, layered review. Your child is never one person&apos;s responsibility alone.</p>
                  <div className="ic-tag">/&#47; Always</div>
                </div>
                <div className="intangible-card">
                  <div className="ic-num">/ 07</div>
                  <svg className="ic-icon" viewBox="0 0 30 30" fill="none" stroke="currentColor" strokeWidth="1.6">
                    <circle cx="15" cy="15" r="11" />
                    <path d="M15 8 V15 L20 18" />
                  </svg>
                  <h4>The <em>time</em> you get back</h4>
                  <p>The hours you&apos;d have spent chasing tutors, vetting tutors, comparing tutors, and patching their feedback into something that makes sense. That&apos;s a real cost. We absorb it.</p>
                  <div className="ic-tag">/&#47; Hard to quantify · easy to feel</div>
                </div>
                <div className="intangible-card">
                  <div className="ic-num">/ 08</div>
                  <svg className="ic-icon" viewBox="0 0 30 30" fill="none" stroke="currentColor" strokeWidth="1.6">
                    <path d="M6 18 L14 22 L24 8" />
                    <circle cx="6" cy="18" r="1.5" />
                  </svg>
                  <h4>Long-arc <em>continuity</em></h4>
                  <p>Subject choices at IGCSE that don&apos;t close doors at A-Level. Career conversations at Year 12. Transitions handled without losing momentum. The same team, year on year.</p>
                  <div className="ic-tag">/&#47; Multi-year</div>
                </div>
                <div className="intangible-card">
                  <div className="ic-num">/ 09</div>
                  <svg className="ic-icon" viewBox="0 0 30 30" fill="none" stroke="currentColor" strokeWidth="1.6">
                    <path d="M5 13 H25 M5 13 L8 8 H22 L25 13 M7 13 V22 H23 V13" />
                    <circle cx="11" cy="17" r="1.2" />
                    <circle cx="19" cy="17" r="1.2" />
                  </svg>
                  <h4>A <em>place</em> to bring concerns</h4>
                  <p>Worried about rising fees, a tough term, something you&apos;re not sure how to handle? Your EC listens — academic or otherwise. That&apos;s part of the deal.</p>
                  <div className="ic-tag">/&#47; Anytime</div>
                </div>
              </div>
            </div>
            <div className="value-close">
              <div className="close-text"> Add the tangible savings to the intangible support, and the <em>real value</em> of EDU Concierge is several multiples of what you pay for it. Try it for a month. </div>
              <a href="#contact" className="close-cta">Try for Free</a>
            </div>
          </div>
        </section>
        <section className="pricing reveal" id="pricing">
          <div className="container">
            <div className="pricing-header">
              <div>
                <div className="section-label">
                  <span className="br">[</span>
                  <span className="num">10</span>
                  <span className="br">]</span>
                  <span className="bar" />
                  <span>Plans</span>
                </div>
                <h2 className="heading-xl">One pricing for everyone.<br />No hidden <em>extras</em>.</h2>
              </div>
              <p className="desc">A transparent, economical model built on simplicity, efficiency, and uncompromising quality. Same pricing across all regions. Local language support included. All-in pricing — what you see is what you pay.</p>
            </div>
            <div className="curriculum-band">
              <span className="label">/ Curriculums covered</span>
              <div className="systems">
                <span className="sys-pill">British · IGCSE / A-Level</span>
                <span className="sys-pill">Cambridge · Edexcel · Oxford AQA</span>
                <span className="sys-pill">CBSE / ICSE</span>
                <span className="sys-pill">American · AP</span>
                <span className="sys-pill">IB Diploma</span>
                <span className="sys-pill">+ more on request</span>
              </div>
              <a href="#systems" className="more-link">See full list <svg viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5">
  <path d="M3 11 L11 3 M5 3 L11 3 L11 9" />
</svg> </a>
            </div>
            <div className="pricing-grid">
              <div className="plan">
                <div className="plan-name">Basic</div>
                <div className="plan-price"><span className="currency">AED</span>30<span className="period">/mo</span></div>
                <div className="plan-scope">/&#47; per month, <strong>per student</strong></div>
                <div className="plan-tagline">Foundation support, plus the platform.</div>
                <ul className="plan-features">
                  <li className="plan-feat">
                    <span><span className="feat-strong">1.5 hours/week</span> foundation support</span>
                  </li>
                  <li className="plan-feat">Live support included</li>
                  <li className="plan-feat">Mobile app included</li>
                  <li className="plan-feat">All core subjects (excluding Quran Clinic)</li>
                  <li className="plan-feat">Exam Help &amp; Revision Support <span className="feat-muted">(Limited)</span></li>
                </ul>
                <a href="#contact" className="plan-cta">Start Basic</a>
              </div>
              <div className="plan plan-featured">
                <div className="plan-tag">Most popular</div>
                <div className="plan-name">Plus</div>
                <div className="plan-price"><span className="currency">AED</span>200<span className="period">/mo</span></div>
                <div className="plan-scope">/&#47; per month, <strong>per student</strong></div>
                <div className="plan-tagline">Dedicated manager, live specialists, full programme.</div>
                <ul className="plan-features">
                  <li className="plan-feat">
                    <span><span className="feat-strong">3 hours/week + 1hr 1:1</span> foundation support</span>
                  </li>
                  <li className="plan-feat">
                    <span className="feat-strong">Dedicated Education Manager</span>
                  </li>
                  <li className="plan-feat">Live learning specialists, as needed</li>
                  <li className="plan-feat">All core subjects (incl. Quran Clinic)</li>
                  <li className="plan-feat">Assessments &amp; exam preparation</li>
                  <li className="plan-feat"><span className="feat-strong">Exam Help &amp; Revision Support</span> <span className="feat-tag-strong">Unlimited</span></li>
                  <li className="plan-feat">Mobile app + parent progress reporting</li>
                </ul>
                <a href="#contact" className="plan-cta">Start Plus</a>
              </div>
              <div className="plan">
                <div className="plan-name">Family</div>
                <div className="plan-price"><span className="currency">AED</span>375<span className="period">/mo</span></div>
                <div className="plan-scope">/&#47; per month, <strong>for 3 siblings</strong></div>
                <div className="plan-tagline">Everything in Plus — for up to three students.</div>
                <ul className="plan-features">
                  <li className="plan-feat">
                    <span className="feat-strong">All features of Plus</span>
                  </li>
                  <li className="plan-feat">Covers up to <span className="feat-strong">3 students</span></li>
                  <li className="plan-feat">Dedicated Education Manager per family</li>
                  <li className="plan-feat">Coordinated cross-child planning</li>
                  <li className="plan-feat"><span className="feat-strong">Exam Help &amp; Revision Support</span> <span className="feat-tag-strong">Unlimited</span></li>
                  <li className="plan-feat">Single billing, single point of contact</li>
                </ul>
                <a href="#contact" className="plan-cta">Start Family</a>
              </div>
            </div>
            <div className="pricing-note">/&#47; One pricing model for all regions · Local language support · No hidden costs</div>
            <div className="foundation-explainer">
              <div className="side-tag">
                <span className="tag-num">/ Included with every plan</span>
                <span className="tag-name">Foundational <em>Support</em></span>
              </div>
              <div className="body">
                <p><strong>Foundational Support</strong> is direct, scheduled access to <strong>subject-expert teachers</strong> who run live class sessions to refresh, reinforce, and stretch students across the core curriculum.</p>
                <p>It&apos;s the layer that quietly <em>replaces the need for extra tuitions</em> — same teaching quality, same individual attention, all inside the same plan you&apos;re already paying for.</p>
                <span className="replace-line">
                  <span className="strike">Extra tuition centres</span>
                  <span className="arrow">→</span>
                  <span className="gain">Foundational Support, included</span>
                </span>
              </div>
              <div className="visual">
                <svg viewBox="0 0 140 140" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <radialGradient id="fsGlow" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor="#F5D88A" stopOpacity="0.6" />
                      <stop offset="100%" stopColor="#F5D88A" stopOpacity="0" />
                    </radialGradient>
                  </defs>
                  <circle cx="70" cy="70" r="60" fill="url(#fsGlow)" />
                  <circle cx="70" cy="70" r="52" fill="none" stroke="rgba(26,22,18,0.15)" strokeWidth="1" strokeDasharray="3 4" />
                  <circle cx="70" cy="70" r="34" fill="none" stroke="rgba(26,22,18,0.20)" strokeWidth="1" />
                  <g fontFamily="Archivo" fontSize="11" fontWeight="700" fill="#1A1612" textAnchor="middle">
                    <text x="70" y="20">MATHS</text>
                    <text x="120" y="74">SCI</text>
                    <text x="70" y="128">ENG</text>
                    <text x="20" y="74">LANG</text>
                  </g>
                  <circle cx="70" cy="70" r="14" fill="#1A1612" />
                  <circle cx="70" cy="70" r="5" fill="#C77B4F">
                    <animate attributeName="opacity" values="1;0.3;1" dur="2s" repeatCount="indefinite" />
                  </circle>
                  <text x="70" y="92" fontFamily="JetBrains Mono" fontSize="7" fontWeight="500" fill="#1A1612" textAnchor="middle" letterSpacing="0.1em">LIVE</text>
                </svg>
              </div>
            </div>
          </div>
        </section>
        <section className="specialities reveal" id="systems">
          <div className="container">
            <div className="section-label">
              <span className="br">[</span>
              <span className="num">11</span>
              <span className="br">]</span>
              <span className="bar" />
              <span>Education Systems</span>
            </div>
            <h2 className="heading-xl">We specialise in leading<br />global <em>education systems</em>.</h2>
            <div className="spec-grid">
              <div className="spec">
                <div className="spec-name">Edexcel</div>
                <div className="spec-tag">UK · Pearson</div>
              </div>
              <div className="spec">
                <div className="spec-name">Cambridge</div>
                <div className="spec-tag">CIE · IGCSE / A-Level</div>
              </div>
              <div className="spec">
                <div className="spec-name">Oxford AQA</div>
                <div className="spec-tag">Intl. examinations</div>
              </div>
              <div className="spec">
                <div className="spec-name">CBSE / ICSE</div>
                <div className="spec-tag">India boards</div>
              </div>
              <div className="spec">
                <div className="spec-name">American · AP</div>
                <div className="spec-tag">College Board</div>
              </div>
            </div>
          </div>
        </section>
        <section id="a-global-team-of-educators" className="team reveal">
          <div className="container">
            <div className="team-grid">
              <div className="team-text">
                <div className="section-label">
                  <span className="br">[</span>
                  <span className="num">12</span>
                  <span className="br">]</span>
                  <span className="bar" />
                  <span>The Team</span>
                </div>
                <h2 className="heading-xl">A global team of <em>educators</em>.</h2>
                <p>Our Education Managers and learning specialists span continents and curriculums. They are not freelancers. They are full-time members of our team, many of whom have been with us for years and share a long-term commitment to our students&apos; success.</p>
                <div className="team-stat">
                  <div className="v">
                    <em>300+</em>
                  </div>
                  <div className="l">Years of combined educational experience across our team</div>
                </div>
              </div>
              <div className="team-grid-vis">
                <span className="team-dot" />
                <span className="team-dot" />
                <span className="team-dot" />
                <span className="team-dot" />
                <span className="team-dot" />
                <span className="team-dot" />
                <span className="team-dot" />
                <span className="team-dot" />
                <span className="team-dot" />
                <span className="team-dot" />
                <span className="team-dot" />
                <span className="team-dot" />
                <span className="team-dot" />
                <span className="team-dot" />
                <span className="team-dot" />
                <span className="team-dot" />
                <span className="team-dot" />
                <span className="team-dot" />
                <span className="team-dot" />
                <span className="team-dot" />
                <span className="team-dot" />
                <span className="team-dot" />
                <span className="team-dot" />
                <span className="team-dot" />
                <span className="team-dot" />
                <span className="team-dot" />
                <span className="team-dot" />
                <span className="team-dot" />
                <span className="team-dot" />
                <span className="team-dot" />
              </div>
            </div>
          </div>
        </section>
        <section className="faq reveal" id="faq">
          <div className="container">
            <div className="section-label">
              <span className="br">[</span>
              <span className="num">13</span>
              <span className="br">]</span>
              <span className="bar" />
              <span>Common Questions</span>
            </div>
            <h2 className="heading-xl">What families <em>ask</em>.</h2>
            <div className="faq-list">
              <div className="faq-item">
                <div className="faq-q">
                  <span className="qmark">?</span>
                  <span>How is the programme delivered?</span>
                </div>
                <div className="faq-a">EDU Concierge is delivered fully online. Live lessons, your Education Manager, the mobile app, parent progress reporting — all of it accessible from wherever you and your child are.</div>
              </div>
              <div className="faq-item">
                <div className="faq-q">
                  <span className="qmark">?</span>
                  <span>What countries and curriculums do you support?</span>
                </div>
                <div className="faq-a">EDU Concierge is available to <em>any student, anywhere in the world, on any curriculum</em>. Because the programme runs fully online, location isn&apos;t a constraint. We work across British (IGCSE / A-Level), Cambridge, Edexcel, Oxford AQA, CBSE, ICSE, American, AP, IB, and more. If your child is on a curriculum you don&apos;t see listed, ask us — we almost certainly cover it or can pair the right teacher.</div>
              </div>
              <div className="faq-item">
                <div className="faq-q">
                  <span className="qmark">?</span>
                  <span>Why are your prices so affordable?</span>
                </div>
                <div className="faq-a">We believe quality education should be within everyone&apos;s reach. By keeping operations efficient, we pass the savings directly to our members — not to middlemen, not to advertising, not to anyone else.</div>
              </div>
              <div className="faq-item">
                <div className="faq-q">
                  <span className="qmark">?</span>
                  <span>Is Foundation Support just extra tuition?</span>
                </div>
                <div className="faq-a">No. Our teachers do not provide extra tuition in the traditional sense. The purpose of Foundation Support is to keep students <em>steady at curriculum level throughout the term</em> — so the burden doesn&apos;t pile up near exams. Each teacher is paired to a student using their learning profile, given the right tools, and chosen for experience that goes beyond delivering subject knowledge — they&apos;re there to understand a child&apos;s learning challenges and keep them genuinely interested. That&apos;s a different proposition from a typical tuition session, which has its own value and which we respect.</div>
              </div>
              <div className="faq-item">
                <div className="faq-q">
                  <span className="qmark">?</span>
                  <span>Do you have an app?</span>
                </div>
                <div className="faq-a">Yes. The mobile app is included with every plan. Parents see progress in one place; students access lessons, materials, and their Education Manager. Both iOS and Android.</div>
              </div>
              <div className="faq-item">
                <div className="faq-q">
                  <span className="qmark">?</span>
                  <span>Are your teachers freelancers?</span>
                </div>
                <div className="faq-a">No. All our teachers and Education Managers are full-time members of our team. Many have been with us for years and share a long-term commitment to our students&apos; success — not a gig-by-gig relationship.</div>
              </div>
            </div>
            <div className="faq-foot">
              <div><strong>More questions?</strong> We&apos;re happy to answer them directly.</div>
              <a href="mailto:concierge@chrysalis.education" className="plan-cta" style={{ fontSize: "10.5px", padding: "11px 22px" }}>concierge@chrysalis.education →</a>
            </div>
          </div>
        </section>
        <section className="cta" id="contact">
          <div className="container">
            <div className="cta-grid">
              <div>
                <div className="section-label">
                  <span className="br">[</span>
                  <span className="num">14</span>
                  <span className="br">]</span>
                  <span className="bar" />
                  <span>Get In Touch</span>
                </div>
                <h2 className="heading-xl">Education delivered.<br />Start <em>this term</em>.</h2>
              </div>
              <div className="cta-side">
                <p>Sign up takes minutes. Your Education Manager will reach out within 48 hours to schedule your welcome call. No long contracts — pick a plan that fits and start when you&apos;re ready.</p>
                <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
                  <a className="pill-light" href="#pricing">View plans</a>
                  <a className="pill-ghost" href="mailto:concierge@chrysalis.education">concierge@chrysalis.education</a>
                </div>
              </div>
            </div>
            <div className="footer">
              <div className="footer-brand">
                <div className="nav-logo">
                  <span className="br">(</span>
                  <span>EDU_CONCIERGE</span>
                  <span className="br">)</span>
                </div>
                <p>An online education concierge service. A dedicated Education Manager, live lessons when needed, transparent pricing — all built around your child. Education delivered.</p>
                <div className="powerby">A <strong>PowerCourses</strong> innovation · powercourses.org/edc</div>
              </div>
              <div className="footer-col">
                <h4>The Programme</h4>
                <ul>
                  <li>
                    <a href="#problem">The Problem</a>
                  </li>
                  <li>
                    <a href="#manager">Education Manager</a>
                  </li>
                  <li>
                    <a href="#ec-team">The EC Team</a>
                  </li>
                  <li>
                    <a href="#how">How It Works</a>
                  </li>
                  <li>
                    <a href="#technology">Technology</a>
                  </li>
                  <li>
                    <a href="#trust">Trust &amp; Engagement</a>
                  </li>
                  <li>
                    <a href="#value">The Value</a>
                  </li>
                  <li>
                    <a href="#pricing">Plans &amp; Pricing</a>
                  </li>
                </ul>
              </div>
              <div className="footer-col">
                <h4>Chrysalis</h4>
                <ul>
                  <li>
                    <Link href="/">Home</Link>
                  </li>
                  <li>
                    <Link href="/school">Online School</Link>
                  </li>
                  <li>
                    <Link href="/about">About</Link>
                  </li>
                  <li>
                    <Link href="/contact">Contact</Link>
                  </li>
                </ul>
              </div>
              <div className="footer-col">
                <h4>More</h4>
                <ul>
                  <li>
                    <a href="#">Terms &amp; conditions</a>
                  </li>
                  <li>
                    <a href="#">Privacy</a>
                  </li>
                  <li>
                    <a href="mailto:concierge@chrysalis.education">Contact us</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="footer-bottom">
              <div>© 2026 PowerCourses · EDU Concierge</div>
              <div>Education Delivered · Online · Worldwide</div>
            </div>
          </div>
        </section>
        <button className="scroll-top" aria-label="Back to top" type="button">
          <span className="st-label">Back to top</span>
          <svg viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.8">
            <path d="M9 14 V4 M4 8 L9 3 L14 8" />
          </svg>
        </button>
        <PageScripts scripts={scripts} />
        <SiteFooter variant="spread" />
      </div>
    </>
  );
}

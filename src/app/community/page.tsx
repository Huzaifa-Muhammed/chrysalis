/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import Link from "next/link";
import { PageScripts } from "@/components/page-scripts";
import { SiteFooter } from "@/components/site-footer";
import scripts from "./scripts";
import "./community.css";

export const metadata: Metadata = {
  title: "Community",
  description:
    "Events, news and community updates from Chrysalis Education.",
};

export default function CommunityPage() {
  return (
    <>
      <div className="pg-community">
        <header className="topbar">
          <Link href="/school" className="brand">
            <span className="brand-mark">
              <img src="/img/chrysalis-logo.png" alt="Chrysalis" />
            </span>
            <span className="brand-text">
              <span>Chrysalis</span>
              <span className="b2">School · Community</span>
            </span>
          </Link>
          <div className="top-filters" role="tablist">
            <button className="top-filter active" data-filter="all">all <span className="count">19</span></button>
            <button className="top-filter" data-filter="parents">parents <span className="count">07</span></button>
            <button className="top-filter" data-filter="students">students <span className="count">06</span></button>
            <button className="top-filter" data-filter="events">events <span className="count">04</span></button>
            <button className="top-filter" data-filter="topics">topics <span className="count">02</span></button>
          </div>
          <div className="top-actions">
            <button className="top-search" aria-label="Search community">
              <svg viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5" width="12" height="12">
                <circle cx="6" cy="6" r="4" />
                <path d="M9 9 L12 12" />
              </svg>
              <span>Search</span>
            </button>
            <button className="menu-btn" id="menuBtn" aria-label="Open menu">
              <span className="ham">
                <span />
                <span />
                <span />
              </span>
            </button>
          </div>
        </header>
        <section className="page-header">
          <h1 className="page-title">join the <em>community</em>.</h1>
          <span className="page-sub">19 active groups · <strong>1,240 members</strong></span>
        </section>
        <div className="scroll-hint">
          <span>← scroll to explore →</span>
          <div className="arrows">
            <button className="scroll-arrow" id="scrollPrev" aria-label="Previous">
              <svg viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.6">
                <path d="M8 2 L4 6 L8 10" />
              </svg>
            </button>
            <button className="scroll-arrow" id="scrollNext" aria-label="Next">
              <svg viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.6">
                <path d="M4 2 L8 6 L4 10" />
              </svg>
            </button>
          </div>
        </div>
        <div className="group-track" id="groupTrack">
          <div className="group-row">
            <a href="#group-y9p" className="group-card gc-paper gc-featured" data-cat="parents">
              <div className="group-content">
                <h3 className="group-name">Year 9<br />Parents <em>Circle</em></h3>
                <span className="group-tag">/&#47; Parents</span>
              </div>
              <div className="group-visual">
                <svg viewBox="0 0 320 360" xmlns="http://www.w3.org/2000/svg">
                  <g>
                    <circle cx="80" cy="120" r="36" fill="#C77B4F" />
                    <circle cx="160" cy="80" r="44" fill="#7A9472" />
                    <circle cx="240" cy="130" r="32" fill="#4A2C4B" />
                    <circle cx="100" cy="220" r="40" fill="#D4B968" />
                    <circle cx="200" cy="240" r="36" fill="#B86F7A" />
                    <circle cx="160" cy="170" r="28" fill="#1A1612" />
                  </g>
                  <g stroke="#1A1612" strokeWidth="1" opacity="0.18">
                    <line x1="80" y1="120" x2="160" y2="80" />
                    <line x1="160" y1="80" x2="240" y2="130" />
                    <line x1="80" y1="120" x2="100" y2="220" />
                    <line x1="100" y1="220" x2="200" y2="240" />
                    <line x1="200" y1="240" x2="240" y2="130" />
                    <line x1="160" y1="170" x2="160" y2="80" />
                    <line x1="160" y1="170" x2="100" y2="220" />
                  </g>
                </svg>
              </div>
              <div className="group-meta live">
                <span className="meta-dot" />
                <span>Active · 86 members</span>
              </div>
            </a>
            <a href="#group-fe" className="group-card gc-leaf" data-cat="students">
              <div className="group-content">
                <h3 className="group-name">Future<br />Engineers</h3>
                <span className="group-tag">/&#47; Students · Club</span>
              </div>
              <div className="group-visual">
                <svg viewBox="0 0 280 280" xmlns="http://www.w3.org/2000/svg">
                  <g transform="translate(140 140)">
                    <circle r="60" fill="none" stroke="#D4B968" strokeWidth="2" />
                    <g stroke="#D4B968" strokeWidth="2" fill="none">
                      <line x1="0" y1="-78" x2="0" y2="-62" />
                      <line x1="0" y1="78" x2="0" y2="62" />
                      <line x1="-78" y1="0" x2="-62" y2="0" />
                      <line x1="78" y1="0" x2="62" y2="0" />
                      <line x1="-55" y1="-55" x2="-44" y2="-44" />
                      <line x1="55" y1="-55" x2="44" y2="-44" />
                      <line x1="-55" y1="55" x2="-44" y2="44" />
                      <line x1="55" y1="55" x2="44" y2="44" />
                    </g>
                    <circle r="20" fill="#D4B968" />
                    <circle cx="-90" cy="40" r="32" fill="none" stroke="#F4EEDF" strokeWidth="1.5" opacity="0.5" />
                    <circle cx="90" cy="-50" r="24" fill="none" stroke="#F4EEDF" strokeWidth="1.5" opacity="0.5" />
                  </g>
                </svg>
              </div>
              <div className="group-meta">
                <span className="meta-dot" />
                <span>54 members</span>
              </div>
            </a>
            <a href="#group-fll" className="group-card gc-terra" data-cat="topics">
              <div className="group-content">
                <h3 className="group-name">Family<br /><em>Learning</em> Lab</h3>
                <span className="group-tag">/&#47; Topic · Open</span>
              </div>
              <div className="group-visual">
                <svg viewBox="0 0 280 280" xmlns="http://www.w3.org/2000/svg">
                  <g transform="translate(140 140)">
                    <path d="M-90 0 L0 -16 L0 60 Q-50 50 -90 56 Z" fill="#F4EEDF" />
                    <path d="M90 0 L0 -16 L0 60 Q50 50 90 56 Z" fill="#F4EEDF" />
                    <line x1="0" y1="-16" x2="0" y2="60" stroke="#1A1612" strokeWidth="1.5" />
                    <g stroke="#1A1612" strokeWidth="1" opacity="0.4">
                      <line x1="-72" y1="6" x2="-12" y2="-2" />
                      <line x1="-72" y1="14" x2="-12" y2="6" />
                      <line x1="-72" y1="22" x2="-12" y2="14" />
                      <line x1="-72" y1="30" x2="-20" y2="22" />
                      <line x1="12" y1="-2" x2="72" y2="6" />
                      <line x1="12" y1="6" x2="72" y2="14" />
                      <line x1="12" y1="14" x2="72" y2="22" />
                      <line x1="12" y1="22" x2="60" y2="30" />
                    </g>
                    <g transform="translate(0 -70)">
                      <circle r="14" fill="#D4B968" />
                      <line x1="0" y1="14" x2="0" y2="22" stroke="#1A1612" strokeWidth="1.5" />
                      <rect x="-8" y="22" width="16" height="6" fill="#1A1612" />
                      <line x1="-22" y1="-14" x2="-30" y2="-22" stroke="#F4EEDF" strokeWidth="1.5" />
                      <line x1="22" y1="-14" x2="30" y2="-22" stroke="#F4EEDF" strokeWidth="1.5" />
                      <line x1="0" y1="-22" x2="0" y2="-32" stroke="#F4EEDF" strokeWidth="1.5" />
                    </g>
                  </g>
                </svg>
              </div>
              <div className="group-meta">
                <span className="meta-dot" />
                <span>312 members</span>
              </div>
            </a>
            <a href="#group-ww" className="group-card gc-rose" data-cat="events">
              <div className="group-content">
                <h3 className="group-name">Wellbeing<br />Wednesdays</h3>
                <span className="group-tag">/&#47; Event · Weekly</span>
              </div>
              <div className="group-visual">
                <svg viewBox="0 0 280 280" xmlns="http://www.w3.org/2000/svg">
                  <g transform="translate(140 140)">
                    <rect x="-60" y="-60" width="120" height="120" rx="12" fill="#F4EEDF" />
                    <rect x="-60" y="-60" width="120" height="30" rx="12" fill="#1A1612" />
                    <rect x="-60" y="-40" width="120" height="10" fill="#1A1612" />
                    <text x="0" y="22" fontFamily="Archivo" fontSize="44" fontWeight="700" fill="#1A1612" textAnchor="middle">12</text>
                    <g transform="translate(38 -36)">
                      <path d="M0 0 Q12 -8 18 0 Q12 12 0 0 Z" fill="#7A9472" />
                    </g>
                  </g>
                </svg>
              </div>
              <div className="group-meta live">
                <span className="meta-dot" />
                <span>Live · Wed 4pm</span>
              </div>
            </a>
            <a href="#group-y11" className="group-card gc-butter" data-cat="parents">
              <div className="group-content">
                <h3 className="group-name">Year 11<br />GCSE Prep</h3>
                <span className="group-tag">/&#47; Parents · Year Group</span>
              </div>
              <div className="group-visual">
                <svg viewBox="0 0 280 280" xmlns="http://www.w3.org/2000/svg">
                  <g transform="translate(140 140) rotate(-6)">
                    <rect x="-70" y="-90" width="140" height="180" rx="8" fill="#FAF7F1" stroke="#1A1612" strokeWidth="1.5" />
                    <line x1="-50" y1="-60" x2="40" y2="-60" stroke="#1A1612" strokeWidth="1.5" opacity="0.3" />
                    <line x1="-50" y1="-44" x2="50" y2="-44" stroke="#1A1612" strokeWidth="1.5" opacity="0.3" />
                    <line x1="-50" y1="-28" x2="30" y2="-28" stroke="#1A1612" strokeWidth="1.5" opacity="0.3" />
                    <line x1="-50" y1="-12" x2="50" y2="-12" stroke="#1A1612" strokeWidth="1.5" opacity="0.3" />
                    <line x1="-50" y1="4" x2="20" y2="4" stroke="#1A1612" strokeWidth="1.5" opacity="0.3" />
                    <line x1="-50" y1="20" x2="50" y2="20" stroke="#1A1612" strokeWidth="1.5" opacity="0.3" />
                    <line x1="-50" y1="36" x2="40" y2="36" stroke="#1A1612" strokeWidth="1.5" opacity="0.3" />
                    <line x1="-50" y1="52" x2="30" y2="52" stroke="#1A1612" strokeWidth="1.5" opacity="0.3" />
                    <g transform="translate(50 70)">
                      <circle r="14" fill="#C77B4F" />
                      <text y="4" fontFamily="Archivo" fontSize="14" fontWeight="700" fill="#FAF7F1" textAnchor="middle">A*</text>
                    </g>
                  </g>
                </svg>
              </div>
              <div className="group-meta">
                <span className="meta-dot" />
                <span>72 members</span>
              </div>
            </a>
            <a href="#group-ds" className="group-card gc-teal" data-cat="students">
              <div className="group-content">
                <h3 className="group-name">Debate<br />Society</h3>
                <span className="group-tag">/&#47; Students · Club</span>
              </div>
              <div className="group-visual">
                <svg viewBox="0 0 280 280" xmlns="http://www.w3.org/2000/svg">
                  <g transform="translate(140 140)">
                    <path d="M-78 -50 Q-78 -76 -52 -76 L-2 -76 Q24 -76 24 -50 L24 -10 Q24 16 -2 16 L-30 16 L-46 32 L-46 16 Q-78 16 -78 -10 Z" fill="#F4EEDF" stroke="#1A1612" strokeWidth="2" />
                    <path d="M-2 -10 Q-2 -36 24 -36 L74 -36 Q100 -36 100 -10 L100 30 Q100 56 74 56 L46 56 L62 72 L62 56 Q26 56 26 30 Z" fill="#D4B968" stroke="#1A1612" strokeWidth="2" />
                    <line x1="-58" y1="-50" x2="0" y2="-50" stroke="#1A1612" strokeWidth="1.5" opacity="0.4" />
                    <line x1="-58" y1="-34" x2="-10" y2="-34" stroke="#1A1612" strokeWidth="1.5" opacity="0.4" />
                    <line x1="6" y1="-10" x2="86" y2="-10" stroke="#1A1612" strokeWidth="1.5" opacity="0.4" />
                    <line x1="6" y1="6" x2="76" y2="6" stroke="#1A1612" strokeWidth="1.5" opacity="0.4" />
                  </g>
                </svg>
              </div>
              <div className="group-meta">
                <span className="meta-dot" />
                <span>28 members</span>
              </div>
            </a>
            <a href="#group-poh" className="group-card gc-ink" data-cat="events">
              <div className="group-content">
                <h3 className="group-name">Principal&apos;s<br />Open <em>Hour</em></h3>
                <span className="group-tag">/&#47; Event · Monthly</span>
              </div>
              <div className="group-visual">
                <svg viewBox="0 0 280 280" xmlns="http://www.w3.org/2000/svg">
                  <g transform="translate(140 140)">
                    <circle r="80" fill="none" stroke="#D4B968" strokeWidth="2" />
                    <circle r="4" fill="#D4B968" />
                    <line x1="0" y1="0" x2="0" y2="-50" stroke="#D4B968" strokeWidth="3" strokeLinecap="round" />
                    <line x1="0" y1="0" x2="36" y2="6" stroke="#D4B968" strokeWidth="3" strokeLinecap="round" />
                    <line x1="0" y1="-72" x2="0" y2="-66" stroke="#F4EEDF" strokeWidth="2" opacity="0.6" />
                    <line x1="72" y1="0" x2="66" y2="0" stroke="#F4EEDF" strokeWidth="2" opacity="0.6" />
                    <line x1="0" y1="72" x2="0" y2="66" stroke="#F4EEDF" strokeWidth="2" opacity="0.6" />
                    <line x1="-72" y1="0" x2="-66" y2="0" stroke="#F4EEDF" strokeWidth="2" opacity="0.6" />
                  </g>
                </svg>
              </div>
              <div className="group-meta live">
                <span className="meta-dot" />
                <span>Next: Tue 6pm</span>
              </div>
            </a>
            <a href="#group-mp" className="group-card gc-rose" data-cat="students">
              <div className="group-content">
                <h3 className="group-name">Music &amp;<br />Performance</h3>
                <span className="group-tag">/&#47; Students · Club</span>
              </div>
              <div className="group-visual">
                <svg viewBox="0 0 280 280" xmlns="http://www.w3.org/2000/svg">
                  <g transform="translate(140 140)">
                    <ellipse cx="-30" cy="40" rx="20" ry="14" fill="#F4EEDF" transform="rotate(-15 -30 40)" />
                    <line x1="-12" y1="35" x2="-12" y2="-50" stroke="#F4EEDF" strokeWidth="3" />
                    <ellipse cx="40" cy="20" rx="20" ry="14" fill="#F4EEDF" transform="rotate(-15 40 20)" />
                    <line x1="58" y1="14" x2="58" y2="-70" stroke="#F4EEDF" strokeWidth="3" />
                    <path d="M-12 -50 Q24 -54 58 -70 L58 -50 Q24 -34 -12 -30 Z" fill="#F4EEDF" />
                  </g>
                </svg>
              </div>
              <div className="group-meta">
                <span className="meta-dot" />
                <span>41 members</span>
              </div>
            </a>
            <a href="#group-alumni" className="group-card gc-paper" data-cat="topics">
              <div className="group-content">
                <h3 className="group-name">Alumni<br />Network</h3>
                <span className="group-tag">/&#47; Coming Sept 2027</span>
              </div>
              <div className="group-visual">
                <svg viewBox="0 0 280 280" xmlns="http://www.w3.org/2000/svg">
                  <g transform="translate(140 140)">
                    <polygon points="-70,0 0,-30 70,0 0,30" fill="#1A1612" />
                    <rect x="-26" y="0" width="52" height="22" fill="#1A1612" />
                    <line x1="70" y1="0" x2="86" y2="20" stroke="#C77B4F" strokeWidth="2.5" />
                    <circle cx="86" cy="22" r="6" fill="#C77B4F" />
                    <text y="76" fontFamily="Archivo" fontSize="12" fontWeight="500" fill="#8B8276" textAnchor="middle" letterSpacing="2">FORWARD-LOOKING</text>
                  </g>
                </svg>
              </div>
              <div className="group-meta">
                <span className="meta-dot" />
                <span>Opens 2027</span>
              </div>
            </a>
            <a href="#new-group" className="group-card gc-create">
              <div className="plus">
                <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <line x1="10" y1="3" x2="10" y2="17" />
                  <line x1="3" y1="10" x2="17" y2="10" />
                </svg>
              </div>
              <div className="group-content">
                <h3 className="group-name">Start a <em>group</em></h3>
                <span className="group-tag" style={{ opacity: "0.85" }}>/&#47; Got an idea?</span>
              </div>
            </a>
          </div>
        </div>
        <section className="ribbon">
          <div className="ribbon-inner">
            <span className="ribbon-eyebrow">/ This week&apos;s discussion</span>
            <p className="ribbon-text">In the <em>Family Learning Lab</em>: <strong>&quot;How do we talk to teenagers about failure?&quot;</strong> — 47 replies and counting.</p>
            <a href="#group-fll" className="ribbon-cta">Join the thread</a>
          </div>
        </section>
        <div className="menu-backdrop" id="menuBackdrop" aria-hidden="true" />
        <div className="menu-overlay" id="menuOverlay">
          <div className="menu-overlay-inner">
            <div className="menu-eyebrow">/&#47; Community</div>
            <nav className="menu-links">
              <Link href="/school">← Back to School</Link>
              <a href="#all">
                <em>All groups</em>
              </a>
              <a href="#new-group">Start a group</a>
              <a href="#guidelines">Community Guidelines</a>
              <Link href="/library">Knowledge Library</Link>
            </nav>
            <div className="menu-foot">
              <Link href="/">Chrysalis hub</Link>
              <Link href="/concierge">EDU Concierge</Link>
              <Link href="/dexter">Dexter</Link>
              <a className="menu-foot-email" href="mailto:hello@chrysalis.education">hello@chrysalis.education</a>
            </div>
          </div>
        </div>
        <PageScripts scripts={scripts} />
        <SiteFooter variant="spread" />
      </div>
    </>
  );
}

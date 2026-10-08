import type { Metadata } from "next";
import Link from "next/link";
import { LegacyBehaviors } from "@/components/legacy-behaviors";
import { SchoolChrome } from "@/components/school-chrome";
import { SiteFooter } from "@/components/site-footer";
import "./why.css";

export const metadata: Metadata = {
  title: "Why Chrysalis",
  description:
    "Why Chrysalis Education exists — our approach to innovation, life at Chrysalis, EDU Concierge and the promise we make to families.",
};

export default function WhyPage() {
  return (
    <>
      <div className="pg-why">
        <div className="page-wrap">
          <SchoolChrome active="why" />
          <nav className="onpage" id="onPage" aria-label="On this page">
            <div className="onpage-in">
              <span className="onpage-label">On this page</span>
              <div className="onpage-links">
                <a href="#innovation">Innovation</a>
                <a href="#life">Life at Chrysalis</a>
                <a href="#concierge">Education Concierge</a>
                <a href="#promise">Our Promise</a>
              </div>
            </div>
          </nav>
          <section className="page-hero plum">
            <div className="page-hero-inner">
              <div>
                <div className="eyebrow-mono">Why Chrysalis School</div>
                <h1>Designed <em>for</em> online learning — not adapted to it.</h1>
              </div>
              <p className="hero-lead">When schools were pushed online during COVID, they dragged the classroom onto a video call and called it innovation. It wasn&apos;t. We built the online experience first — and built the school around it.</p>
            </div>
          </section>
          <section className="section paper reveal" id="innovation">
            <div className="section-inner">
              <div className="section-eyebrow"><span className="num">01</span> Innovation</div>
              <h2>Six choices most schools <em>don&apos;t</em> make.</h2>
              <p style={{ maxWidth: "720px", marginBottom: "56px" }}>&quot;Innovation&quot; gets used to mean too many things. For us it isn&apos;t gadgets. It&apos;s a set of design choices we made early, on purpose, and that other schools rarely make because they cost money in the short term.</p>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "28px" }}>
                <div className="card">
                  <h3>Online-first, not online-also</h3>
                  <p style={{ margin: "0" }}>Every lesson, every assessment, every parent meeting is designed for the medium. No PowerPoints awkwardly retrofitted from a physical classroom.</p>
                </div>
                <div className="card">
                  <h3>Class sizes capped at 15</h3>
                  <p style={{ margin: "0" }}>Most online schools allow 30+ in a &quot;live class&quot; and call it the same as in-person teaching. It isn&apos;t. We cap at 15 so teachers can actually see, hear, and respond to every student.</p>
                </div>
                <div className="card">
                  <h3>Live teaching, never recording-only</h3>
                  <p style={{ margin: "0" }}>100% of timetabled lessons are taught live. Recordings are for revision and absence — never the default mode.</p>
                </div>
                <div className="card">
                  <h3>Per-student pace where it matters</h3>
                  <p style={{ margin: "0" }}>Stretch students who race ahead. Slow down where a concept needs more time. The technology lets us do this without holding up a class.</p>
                </div>
                <div className="card">
                  <h3>Built-in pastoral cadence</h3>
                  <p style={{ margin: "0" }}>Wellbeing check-ins are scheduled, not optional. Online schools that skip this get the obvious problems.</p>
                </div>
                <div className="card">
                  <h3>Fees you can audit</h3>
                  <p style={{ margin: "0" }}>Every pound we charge can be traced to something that helps your child learn. Ask us. We will show you.</p>
                </div>
              </div>
            </div>
          </section>
          <section className="section reveal" id="life">
            <div className="section-inner">
              <div className="section-eyebrow"><span className="num">02</span> Life at Chrysalis</div>
              <h2>What your child&apos;s <em>day</em> actually looks like.</h2>
              <p style={{ maxWidth: "720px", marginBottom: "48px" }}>There&apos;s a part of the case for online schooling that the brochures rarely make: the <strong>time you get back</strong>. Once you stop spending the morning getting a child to a building — and the afternoon getting them home from it — the day looks fundamentally different. Cleaner. Calmer. With room for things that actually matter.</p>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px", marginBottom: "64px" }}>
                <div className="card" style={{ background: "var(--paper-2)", padding: "32px" }}>
                  <div className="eyebrow-mono" style={{ color: "var(--muted)", marginBottom: "14px" }}>/&#47; A typical school day</div>
                  <h3 style={{ fontSize: "19px", marginBottom: "18px" }}>Traditional school</h3>
                  <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "10px", fontSize: "14px" }}>
                    <li style={{ display: "grid", gridTemplateColumns: "56px 1fr", gap: "12px", padding: "6px 0", borderBottom: "1px solid var(--hairline-soft)" }}>
                      <span style={{ fontFamily: "var(--mono)", fontSize: "11px", color: "var(--accent)", fontWeight: "600" }}>06:30</span>
                      <span style={{ color: "var(--ink-soft)" }}>Wake, uniform, breakfast in a hurry</span>
                    </li>
                    <li style={{ display: "grid", gridTemplateColumns: "56px 1fr", gap: "12px", padding: "6px 0", borderBottom: "1px solid var(--hairline-soft)" }}>
                      <span style={{ fontFamily: "var(--mono)", fontSize: "11px", color: "var(--accent)", fontWeight: "600" }}>07:15</span>
                      <span style={{ color: "var(--ink-soft)" }}>Commute begins</span>
                    </li>
                    <li style={{ display: "grid", gridTemplateColumns: "56px 1fr", gap: "12px", padding: "6px 0", borderBottom: "1px solid var(--hairline-soft)" }}>
                      <span style={{ fontFamily: "var(--mono)", fontSize: "11px", color: "var(--accent)", fontWeight: "600" }}>08:00</span>
                      <span style={{ color: "var(--ink-soft)" }}>Arrive, registration, settle</span>
                    </li>
                    <li style={{ display: "grid", gridTemplateColumns: "56px 1fr", gap: "12px", padding: "6px 0", borderBottom: "1px solid var(--hairline-soft)" }}>
                      <span style={{ fontFamily: "var(--mono)", fontSize: "11px", color: "var(--accent)", fontWeight: "600" }}>08:30</span>
                      <span style={{ color: "var(--ink-soft)" }}>Lessons (with transitions, queues, assemblies)</span>
                    </li>
                    <li style={{ display: "grid", gridTemplateColumns: "56px 1fr", gap: "12px", padding: "6px 0", borderBottom: "1px solid var(--hairline-soft)" }}>
                      <span style={{ fontFamily: "var(--mono)", fontSize: "11px", color: "var(--accent)", fontWeight: "600" }}>15:00</span>
                      <span style={{ color: "var(--ink-soft)" }}>School ends</span>
                    </li>
                    <li style={{ display: "grid", gridTemplateColumns: "56px 1fr", gap: "12px", padding: "6px 0", borderBottom: "1px solid var(--hairline-soft)" }}>
                      <span style={{ fontFamily: "var(--mono)", fontSize: "11px", color: "var(--accent)", fontWeight: "600" }}>15:30</span>
                      <span style={{ color: "var(--ink-soft)" }}>Commute home</span>
                    </li>
                    <li style={{ display: "grid", gridTemplateColumns: "56px 1fr", gap: "12px", padding: "6px 0", borderBottom: "1px solid var(--hairline-soft)" }}>
                      <span style={{ fontFamily: "var(--mono)", fontSize: "11px", color: "var(--accent)", fontWeight: "600" }}>16:30</span>
                      <span style={{ color: "var(--ink-soft)" }}>Tired. Snack. Maybe an activity if energy allows</span>
                    </li>
                    <li style={{ display: "grid", gridTemplateColumns: "56px 1fr", gap: "12px", padding: "6px 0", borderBottom: "1px solid var(--hairline-soft)" }}>
                      <span style={{ fontFamily: "var(--mono)", fontSize: "11px", color: "var(--accent)", fontWeight: "600" }}>18:00</span>
                      <span style={{ color: "var(--ink-soft)" }}>Homework starts</span>
                    </li>
                    <li style={{ display: "grid", gridTemplateColumns: "56px 1fr", gap: "12px", padding: "6px 0", borderBottom: "1px solid var(--hairline-soft)" }}>
                      <span style={{ fontFamily: "var(--mono)", fontSize: "11px", color: "var(--accent)", fontWeight: "600" }}>20:30</span>
                      <span style={{ color: "var(--ink-soft)" }}>Dinner, bed prep</span>
                    </li>
                  </ul>
                  <p style={{ margin: "18px 0 0", fontSize: "13px", color: "var(--muted)", fontStyle: "italic" }}>Roughly 2 hours/day lost to commute and transition friction.</p>
                </div>
                <div className="card plum" style={{ padding: "32px" }}>
                  <div className="eyebrow-mono" style={{ color: "var(--butter)", marginBottom: "14px" }}>/&#47; At Chrysalis</div>
                  <h3 style={{ fontSize: "19px", marginBottom: "18px", color: "var(--paper)" }}>Chrysalis School</h3>
                  <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "10px", fontSize: "14px" }}>
                    <li style={{ display: "grid", gridTemplateColumns: "56px 1fr", gap: "12px", padding: "6px 0", borderBottom: "1px solid rgba(255,255,255,0.10)" }}>
                      <span style={{ fontFamily: "var(--mono)", fontSize: "11px", color: "var(--butter)", fontWeight: "600" }}>07:30</span>
                      <span style={{ color: "rgba(255,255,255,0.82)" }}>Wake. No uniform. Real breakfast.</span>
                    </li>
                    <li style={{ display: "grid", gridTemplateColumns: "56px 1fr", gap: "12px", padding: "6px 0", borderBottom: "1px solid rgba(255,255,255,0.10)" }}>
                      <span style={{ fontFamily: "var(--mono)", fontSize: "11px", color: "var(--butter)", fontWeight: "600" }}>08:00</span>
                      <span style={{ color: "rgba(255,255,255,0.82)" }}>Reading, exercise, or personal project</span>
                    </li>
                    <li style={{ display: "grid", gridTemplateColumns: "56px 1fr", gap: "12px", padding: "6px 0", borderBottom: "1px solid rgba(255,255,255,0.10)" }}>
                      <span style={{ fontFamily: "var(--mono)", fontSize: "11px", color: "var(--butter)", fontWeight: "600" }}>09:00</span>
                      <span style={{ color: "rgba(255,255,255,0.82)" }}>First live class</span>
                    </li>
                    <li style={{ display: "grid", gridTemplateColumns: "56px 1fr", gap: "12px", padding: "6px 0", borderBottom: "1px solid rgba(255,255,255,0.10)" }}>
                      <span style={{ fontFamily: "var(--mono)", fontSize: "11px", color: "var(--butter)", fontWeight: "600" }}>12:30</span>
                      <span style={{ color: "rgba(255,255,255,0.82)" }}>Lunch and break</span>
                    </li>
                    <li style={{ display: "grid", gridTemplateColumns: "56px 1fr", gap: "12px", padding: "6px 0", borderBottom: "1px solid rgba(255,255,255,0.10)" }}>
                      <span style={{ fontFamily: "var(--mono)", fontSize: "11px", color: "var(--butter)", fontWeight: "600" }}>13:30</span>
                      <span style={{ color: "rgba(255,255,255,0.82)" }}>Afternoon live classes</span>
                    </li>
                    <li style={{ display: "grid", gridTemplateColumns: "56px 1fr", gap: "12px", padding: "6px 0", borderBottom: "1px solid rgba(255,255,255,0.10)" }}>
                      <span style={{ fontFamily: "var(--mono)", fontSize: "11px", color: "var(--butter)", fontWeight: "600" }}>15:30</span>
                      <span style={{ color: "rgba(255,255,255,0.82)" }}>School done. Real free afternoon.</span>
                    </li>
                    <li style={{ display: "grid", gridTemplateColumns: "56px 1fr", gap: "12px", padding: "6px 0", borderBottom: "1px solid rgba(255,255,255,0.10)" }}>
                      <span style={{ fontFamily: "var(--mono)", fontSize: "11px", color: "var(--butter)", fontWeight: "600" }}>15:30+</span>
                      <span style={{ color: "rgba(255,255,255,0.82)" }}>Sport, music, art — done properly</span>
                    </li>
                    <li style={{ display: "grid", gridTemplateColumns: "56px 1fr", gap: "12px", padding: "6px 0", borderBottom: "1px solid rgba(255,255,255,0.10)" }}>
                      <span style={{ fontFamily: "var(--mono)", fontSize: "11px", color: "var(--butter)", fontWeight: "600" }}>18:00</span>
                      <span style={{ color: "rgba(255,255,255,0.82)" }}>Family dinner</span>
                    </li>
                    <li style={{ display: "grid", gridTemplateColumns: "56px 1fr", gap: "12px", padding: "6px 0", borderBottom: "1px solid rgba(255,255,255,0.10)" }}>
                      <span style={{ fontFamily: "var(--mono)", fontSize: "11px", color: "var(--butter)", fontWeight: "600" }}>19:00</span>
                      <span style={{ color: "rgba(255,255,255,0.82)" }}>Homework / reading / chosen pursuit</span>
                    </li>
                  </ul>
                  <p style={{ margin: "18px 0 0", fontSize: "13px", color: "rgba(255,255,255,0.65)", fontStyle: "italic" }}>Roughly 2 hours/day given back — every day.</p>
                </div>
              </div>
              <div style={{ marginBottom: "64px" }}>
                <div className="eyebrow-mono" style={{ marginBottom: "16px" }}>/&#47; Same teaching. Less surrounding overhead.</div>
                <h3>The instruction hours are <em>identical</em>. What changes is everything around them.</h3>
                <p style={{ maxWidth: "720px", marginBottom: "28px" }}>Each bar below shows a typical school week — 25 hours of live instruction either way. The difference is the time spent <em>around</em> the teaching: getting to it, transitioning between it, waiting in lines for it.</p>
                <div style={{ background: "var(--paper)", borderRadius: "16px", padding: "28px", border: "1px solid var(--hairline-soft)", overflowX: "auto" }}>
                  <svg viewBox="0 0 920 360" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "auto", minWidth: "720px", display: "block" }} role="img" aria-labelledby="hoursTitle hoursDesc">
                    <title id="hoursTitle">A typical school week: traditional vs Chrysalis</title>
                    <desc id="hoursDesc">Stacked horizontal bars showing 25 hours of instruction in both schools, with traditional school adding 6 hours of commute, 2.5 hours of transitions, and 1.5 hours of pre-school prep — total 35 hours of committed weekly time versus 25 hours at Chrysalis.</desc>
                    <g fontFamily="ui-monospace, JetBrains Mono, monospace" fontSize="11" fill="#8B8276" textAnchor="middle">
                      <text x="160" y="320">0h</text>
                      <text x="280" y="320">10h</text>
                      <text x="400" y="320">20h</text>
                      <text x="520" y="320">30h</text>
                      <text x="640" y="320">40h</text>
                      <text x="760" y="320">50h</text>
                      <text x="880" y="320">60h</text>
                    </g>
                    <g stroke="#DDD4BD" strokeWidth="1" strokeDasharray="2 4">
                      <line x1="160" y1="60" x2="160" y2="295" />
                      <line x1="280" y1="60" x2="280" y2="295" />
                      <line x1="400" y1="60" x2="400" y2="295" />
                      <line x1="520" y1="60" x2="520" y2="295" />
                      <line x1="640" y1="60" x2="640" y2="295" />
                      <line x1="760" y1="60" x2="760" y2="295" />
                      <line x1="880" y1="60" x2="880" y2="295" />
                    </g>
                    <g>
                      <text x="20" y="105" fontFamily="Archivo, system-ui, sans-serif" fontSize="14" fontWeight="600" fill="#1A1612">Traditional</text>
                      <text x="20" y="123" fontFamily="Archivo, system-ui, sans-serif" fontSize="14" fontWeight="600" fill="#1A1612">school</text>
                      <text x="20" y="142" fontFamily="ui-monospace, JetBrains Mono, monospace" fontSize="10" fill="#8B8276">35h committed</text>
                      <rect x="160" y="80" width="300" height="64" fill="#4A2C4B" rx="2" />
                      <text x="310" y="118" fontFamily="Archivo, system-ui, sans-serif" fontSize="13" fontWeight="600" fill="#FAF7F1" textAnchor="middle">Live instruction · 25h</text>
                      <rect x="460" y="80" width="72" height="64" fill="#C77B4F" rx="2" />
                      <text x="496" y="118" fontFamily="Archivo, system-ui, sans-serif" fontSize="11" fontWeight="600" fill="#FAF7F1" textAnchor="middle">Commute</text>
                      <rect x="532" y="80" width="30" height="64" fill="#D4B968" rx="2" />
                      <rect x="562" y="80" width="18" height="64" fill="#8B8276" rx="2" />
                      <line x1="460" y1="148" x2="460" y2="170" stroke="#8B8276" strokeWidth="1" />
                      <line x1="580" y1="148" x2="580" y2="170" stroke="#8B8276" strokeWidth="1" />
                      <line x1="460" y1="170" x2="580" y2="170" stroke="#8B8276" strokeWidth="1" />
                      <text x="520" y="186" fontFamily="ui-monospace, JetBrains Mono, monospace" fontSize="10" fill="#8B8276" textAnchor="middle">10h surrounding overhead</text>
                    </g>
                    <g>
                      <text x="20" y="225" fontFamily="Archivo, system-ui, sans-serif" fontSize="14" fontWeight="600" fill="#1A1612">Chrysalis</text>
                      <text x="20" y="243" fontFamily="Archivo, system-ui, sans-serif" fontSize="14" fontWeight="600" fill="#1A1612">School</text>
                      <text x="20" y="262" fontFamily="ui-monospace, JetBrains Mono, monospace" fontSize="10" fill="#4F6E55">25h committed</text>
                      <rect x="160" y="200" width="300" height="64" fill="#4A2C4B" rx="2" />
                      <text x="310" y="238" fontFamily="Archivo, system-ui, sans-serif" fontSize="13" fontWeight="600" fill="#FAF7F1" textAnchor="middle">Live instruction · 25h</text>
                      <rect x="460" y="200" width="120" height="64" fill="#7A9472" fillOpacity="0.18" stroke="#7A9472" strokeWidth="1" strokeDasharray="4 3" rx="2" />
                      <text x="520" y="232" fontFamily="Archivo, system-ui, sans-serif" fontSize="11" fontWeight="600" fill="#4F6E55" textAnchor="middle">10h returned to</text>
                      <text x="520" y="248" fontFamily="Archivo, system-ui, sans-serif" fontSize="11" fontWeight="600" fill="#4F6E55" textAnchor="middle">your child</text>
                    </g>
                    <g transform="translate(160 340)" fontFamily="Archivo, system-ui, sans-serif" fontSize="11" fill="#3A332C">
                      <rect x="0" y="-9" width="11" height="11" fill="#4A2C4B" rx="2" />
                      <text x="18" y="0">Instruction</text>
                      <rect x="100" y="-9" width="11" height="11" fill="#C77B4F" rx="2" />
                      <text x="118" y="0">Commute</text>
                      <rect x="195" y="-9" width="11" height="11" fill="#D4B968" rx="2" />
                      <text x="213" y="0">Transitions</text>
                      <rect x="290" y="-9" width="11" height="11" fill="#8B8276" rx="2" />
                      <text x="308" y="0">Pre-school prep</text>
                      <rect x="410" y="-9" width="11" height="11" fill="#7A9472" fillOpacity="0.18" stroke="#7A9472" strokeWidth="1" strokeDasharray="3 2" rx="2" />
                      <text x="428" y="0">Time recovered</text>
                    </g>
                  </svg>
                  <p style={{ margin: "16px 0 0", fontSize: "12.5px", color: "var(--muted)", fontStyle: "italic" }}>A representative week. Real numbers vary by city, commute distance, and school timetable.</p>
                </div>
              </div>
              <div style={{ padding: "36px 40px", background: "var(--paper)", borderRadius: "18px", border: "1px solid var(--hairline-soft)", marginBottom: "64px" }}>
                <h3>Do the <em>arithmetic</em>.</h3>
                <p style={{ maxWidth: "720px" }}>Two hours a day, five days a week, 38 weeks a year. That is <strong>380 hours</strong> — about <strong>16 full days</strong> — handed back to your child every academic year. Multiplied across seven years of secondary school, that&apos;s nearly <strong>four months</strong> of waking life recovered.</p>
                <p style={{ margin: "0", maxWidth: "720px" }}>What that becomes — sport, music, deep reading, family meals, sleep, a serious pursuit — is up to your child. The point is they get to choose, not be left tired at the end of someone else&apos;s logistical timetable.</p>
              </div>
              <div style={{ marginBottom: "64px" }}>
                <div className="eyebrow-mono" style={{ marginBottom: "16px" }}>/&#47; What the research actually says</div>
                <h3>The case for <em>less</em>, not more.</h3>
                <p style={{ maxWidth: "720px", marginBottom: "32px" }}>A growing body of research from paediatric, public-health, and education bodies points to the same conclusion: <strong>over-scheduled, under-rested adolescents are paying a real cost</strong>. None of this is controversial in the literature.</p>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>
                  <div className="card" style={{ padding: "26px", background: "var(--paper)", position: "relative" }}>
                    <div style={{ fontFamily: "var(--serif)", fontStyle: "italic", color: "var(--accent)", fontSize: "34px", lineHeight: "0.6", marginBottom: "4px" }}>&quot;</div>
                    <h3 style={{ fontSize: "17px", lineHeight: "1.25", marginBottom: "10px" }}>Sleep deprivation in adolescents</h3>
                    <p style={{ margin: "0 0 14px", fontSize: "14px", lineHeight: "1.6" }}>The AAP recommends 8–10 hours of sleep per night for teenagers — and reports that the majority of US high-schoolers get fewer than 7. Chronic shortfall is linked to depression, attention difficulties, and worse academic performance. An earlier school start is one of the largest single drivers.</p>
                    <div style={{ paddingTop: "12px", borderTop: "1px solid var(--hairline-soft)", fontFamily: "var(--mono)", fontSize: "10.5px", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--muted)" }}>— American Academy of Pediatrics</div>
                  </div>
                  <div className="card" style={{ padding: "26px", background: "var(--paper)", position: "relative" }}>
                    <div style={{ fontFamily: "var(--serif)", fontStyle: "italic", color: "var(--accent)", fontSize: "34px", lineHeight: "0.6", marginBottom: "4px" }}>&quot;</div>
                    <h3 style={{ fontSize: "17px", lineHeight: "1.25", marginBottom: "10px" }}>Burnout, formally recognised</h3>
                    <p style={{ margin: "0 0 14px", fontSize: "14px", lineHeight: "1.6" }}>The WHO classified burnout as an occupational phenomenon in ICD-11 (2019). Subsequent research has shown adolescent academic burnout follows the same diagnostic pattern: exhaustion, cynicism toward school, and reduced sense of accomplishment.</p>
                    <div style={{ paddingTop: "12px", borderTop: "1px solid var(--hairline-soft)", fontFamily: "var(--mono)", fontSize: "10.5px", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--muted)" }}>— World Health Organization</div>
                  </div>
                  <div className="card" style={{ padding: "26px", background: "var(--paper)", position: "relative" }}>
                    <div style={{ fontFamily: "var(--serif)", fontStyle: "italic", color: "var(--accent)", fontSize: "34px", lineHeight: "0.6", marginBottom: "4px" }}>&quot;</div>
                    <h3 style={{ fontSize: "17px", lineHeight: "1.25", marginBottom: "10px" }}>The cost of lost free time</h3>
                    <p style={{ margin: "0 0 14px", fontSize: "14px", lineHeight: "1.6" }}>Decades of research by developmental psychologist Peter Gray and others link the steady loss of unstructured play and self-directed time over the past 50 years to measurable increases in adolescent anxiety and depression — independent of academic load.</p>
                    <div style={{ paddingTop: "12px", borderTop: "1px solid var(--hairline-soft)", fontFamily: "var(--mono)", fontSize: "10.5px", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--muted)" }}>— Peter Gray · Boston College</div>
                  </div>
                  <div className="card" style={{ padding: "26px", background: "var(--paper)", position: "relative" }}>
                    <div style={{ fontFamily: "var(--serif)", fontStyle: "italic", color: "var(--accent)", fontSize: "34px", lineHeight: "0.6", marginBottom: "4px" }}>&quot;</div>
                    <h3 style={{ fontSize: "17px", lineHeight: "1.25", marginBottom: "10px" }}>The over-scheduled child</h3>
                    <p style={{ margin: "0 0 14px", fontSize: "14px", lineHeight: "1.6" }}>Levine&apos;s widely-cited work argues that affluent children with packed extracurricular and academic schedules show higher rates of anxiety, depression, and substance use than children with less structured time. The protective factor is not less education — it is more space.</p>
                    <div style={{ paddingTop: "12px", borderTop: "1px solid var(--hairline-soft)", fontFamily: "var(--mono)", fontSize: "10.5px", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--muted)" }}>— Madeline Levine · clinical psychologist</div>
                  </div>
                </div>
                <p style={{ margin: "28px 0 0", fontSize: "12.5px", color: "var(--muted)", fontStyle: "italic", maxWidth: "720px" }}>Summaries above are drawn from the cited organisations&apos; published guidance and widely-circulated research. For citation-ready quotations, see the originals — links available on request.</p>
              </div>
              <h3 style={{ marginBottom: "24px" }}>What students <em>actually</em> do with the time.</h3>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "20px", marginBottom: "64px" }}>
                <div className="card" style={{ padding: "24px" }}>
                  <div style={{ fontSize: "26px", marginBottom: "10px" }}>🏃</div>
                  <h3 style={{ fontSize: "17px", marginBottom: "8px" }}>Proper sport</h3>
                  <p style={{ margin: "0", fontSize: "14px" }}>Real training sessions — not the 35-minute PE slot. Many of our students join local academies in football, swimming, tennis, martial arts.</p>
                </div>
                <div className="card" style={{ padding: "24px" }}>
                  <div style={{ fontSize: "26px", marginBottom: "10px" }}>🎵</div>
                  <h3 style={{ fontSize: "17px", marginBottom: "8px" }}>Music & creative</h3>
                  <p style={{ margin: "0", fontSize: "14px" }}>Instrument practice, formal lessons, art studios, theatre. Things that need consistent time, not snatched evenings.</p>
                </div>
                <div className="card" style={{ padding: "24px" }}>
                  <div style={{ fontSize: "26px", marginBottom: "10px" }}>📚</div>
                  <h3 style={{ fontSize: "17px", marginBottom: "8px" }}>Deep reading</h3>
                  <p style={{ margin: "0", fontSize: "14px" }}>Books outside the curriculum. The kind of reading that turns into the love of a subject and, eventually, a career.</p>
                </div>
                <div className="card" style={{ padding: "24px" }}>
                  <div style={{ fontSize: "26px", marginBottom: "10px" }}>🌍</div>
                  <h3 style={{ fontSize: "17px", marginBottom: "8px" }}>Travel & culture</h3>
                  <p style={{ margin: "0", fontSize: "14px" }}>Some of our families travel for parts of the year. School comes with you — you don&apos;t pay for a building you&apos;re not using.</p>
                </div>
                <div className="card" style={{ padding: "24px" }}>
                  <div style={{ fontSize: "26px", marginBottom: "10px" }}>👨‍👩‍👧</div>
                  <h3 style={{ fontSize: "17px", marginBottom: "8px" }}>Family time</h3>
                  <p style={{ margin: "0", fontSize: "14px" }}>Meals together. Conversations. The most under-rated educational input we know of.</p>
                </div>
                <div className="card" style={{ padding: "24px" }}>
                  <div style={{ fontSize: "26px", marginBottom: "10px" }}>😴</div>
                  <h3 style={{ fontSize: "17px", marginBottom: "8px" }}>Sleep</h3>
                  <p style={{ margin: "0", fontSize: "14px" }}>Teenagers need 8–10 hours and almost never get it. A 7.30am wake-up instead of 6.30am changes everything.</p>
                </div>
              </div>
              <div style={{ paddingTop: "48px", borderTop: "1px solid var(--hairline)" }}>
                <div className="eyebrow-mono" style={{ marginBottom: "18px" }}>/&#47; Our partner ecosystem</div>
                <h3>We don&apos;t pretend to <em>do everything</em>.</h3>
                <p style={{ maxWidth: "720px" }}>A traditional school spends a third of its fees pretending to be world-class at sport, music, art, theatre, debate, and everything else. We don&apos;t. We focus on teaching the academic curriculum brilliantly — and we partner with <strong>specialists who are actually excellent</strong> at the rest.</p>
                <p style={{ maxWidth: "720px" }}>It&apos;s a better deal for everyone. Your child gets coached by people who really do it for a living. You pay less in total than you would for a school doing a half-decent job at all of it. And our partner roster keeps growing.</p>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1.2fr", gap: "32px", marginTop: "36px", padding: "32px", background: "var(--paper-2)", borderRadius: "18px", border: "1px solid var(--hairline)" }}>
                  <div>
                    <div className="eyebrow-mono" style={{ color: "var(--accent)", marginBottom: "12px" }}>/&#47; Featured partner</div>
                    <h3 style={{ fontSize: "32px", lineHeight: "1.05", marginBottom: "14px", fontFamily: "var(--display)", letterSpacing: "-0.025em" }}>YNO <span className="serif-em" style={{ fontFamily: "var(--serif)", fontStyle: "italic", fontWeight: "400", color: "var(--accent)" }}>Dubai</span>.</h3>
                    <div className="pill" style={{ background: "var(--ink)", color: "var(--paper)", borderColor: "var(--ink)", marginBottom: "4px" }}>Sports &amp; rewards platform</div>
                  </div>
                  <div>
                    <p style={{ marginBottom: "14px" }}>Dubai-based sports platform building serious infrastructure around youth sport — coaching, competitions, summer camps, and a rewards ecosystem that recognises the work young athletes put in.</p>
                    <p style={{ marginBottom: "18px" }}>For Chrysalis students in the GCC, YNO is a door into proper sport: cricket and football training, jiu-jitsu academies, summer programmes, and live events. The kind of sustained, well-coached activity that schools claim to offer and usually don&apos;t.</p>
                    <p style={{ margin: "0", fontFamily: "var(--mono)", fontSize: "12px", letterSpacing: "0.06em", color: "var(--muted)", textTransform: "uppercase" }}>More partners announced through 2026 →</p>
                  </div>
                </div>
                <p style={{ marginTop: "32px", fontSize: "14px", color: "var(--muted)", maxWidth: "720px" }}>If you run an academy, studio, or programme for school-age children in the GCC, UK, or globally online — and you&apos;d like to discuss a partnership — write to <a href="mailto:partnerships@chrysalis.education" style={{ color: "var(--ink)", borderBottom: "1px solid var(--hairline)" }}>partnerships@chrysalis.education</a>.</p>
              </div>
            </div>
          </section>
          <section className="section reveal" id="concierge">
            <div className="section-inner two-col">
              <div>
                <div className="section-eyebrow"><span className="num">03</span> Education Concierge</div>
                <h2>And if you&apos;re <em>not</em> ready to switch schools yet —</h2>
              </div>
              <div>
                <p>Most parents who find us are still in a school they&apos;re not sure about. That&apos;s why we built <strong>EDU Concierge</strong>: a monthly programme that gives your family a dedicated Education Manager, foundation tutoring, exam help, and a clear plan — whatever school your child currently attends.</p>
                <p>Think of it as Chrysalis-quality support layered on top of any school. For some families it&apos;s the bridge to enrolling here later. For others it&apos;s the answer in itself.</p>
                <p style={{ marginTop: "28px" }}>
                  <Link href="/concierge" className="btn-primary">Explore EDU Concierge</Link>
                </p>
              </div>
            </div>
          </section>
          <section className="section paper reveal" id="promise">
            <div className="section-inner-narrow">
              <div className="section-eyebrow"><span className="num">04</span> Our Promise</div>
              <h2>What we will <em>do</em>, and what we won&apos;t.</h2>
              <div style={{ marginTop: "40px" }}>
                <h3 style={{ color: "var(--leaf-deep)", marginBottom: "14px" }}>We <em>will</em>:</h3>
                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "10px", marginBottom: "40px" }}>
                  <li style={{ display: "flex", gap: "12px", fontSize: "16px", lineHeight: "1.6", color: "var(--ink-soft)" }}><span style={{ color: "var(--leaf-deep)", fontWeight: "700" }}>✓</span>Teach every lesson live, with a qualified specialist teacher.</li>
                  <li style={{ display: "flex", gap: "12px", fontSize: "16px", lineHeight: "1.6", color: "var(--ink-soft)" }}><span style={{ color: "var(--leaf-deep)", fontWeight: "700" }}>✓</span>Keep class sizes at or below 15.</li>
                  <li style={{ display: "flex", gap: "12px", fontSize: "16px", lineHeight: "1.6", color: "var(--ink-soft)" }}><span style={{ color: "var(--leaf-deep)", fontWeight: "700" }}>✓</span>Give every family a named relationship manager who knows your child.</li>
                  <li style={{ display: "flex", gap: "12px", fontSize: "16px", lineHeight: "1.6", color: "var(--ink-soft)" }}><span style={{ color: "var(--leaf-deep)", fontWeight: "700" }}>✓</span>Tell you what is going wrong, not only what is going right.</li>
                  <li style={{ display: "flex", gap: "12px", fontSize: "16px", lineHeight: "1.6", color: "var(--ink-soft)" }}><span style={{ color: "var(--leaf-deep)", fontWeight: "700" }}>✓</span>Hold ourselves to the same academic standards as the best in-person schools — and prove it by results.</li>
                  <li style={{ display: "flex", gap: "12px", fontSize: "16px", lineHeight: "1.6", color: "var(--ink-soft)" }}><span style={{ color: "var(--leaf-deep)", fontWeight: "700" }}>✓</span>Be transparent about fees and what they pay for.</li>
                </ul>
                <h3 style={{ color: "var(--accent)", marginBottom: "14px" }}>We <em>won&apos;t</em>:</h3>
                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "10px" }}>
                  <li style={{ display: "flex", gap: "12px", fontSize: "16px", lineHeight: "1.6", color: "var(--ink-soft)" }}><span style={{ color: "var(--accent)", fontWeight: "700" }}>✗</span>Sell you a building you&apos;re paying for and your child barely uses.</li>
                  <li style={{ display: "flex", gap: "12px", fontSize: "16px", lineHeight: "1.6", color: "var(--ink-soft)" }}><span style={{ color: "var(--accent)", fontWeight: "700" }}>✗</span>Run &quot;live classes&quot; with 40 students where teachers can&apos;t see faces.</li>
                  <li style={{ display: "flex", gap: "12px", fontSize: "16px", lineHeight: "1.6", color: "var(--ink-soft)" }}><span style={{ color: "var(--accent)", fontWeight: "700" }}>✗</span>Hide problems until report-card season.</li>
                  <li style={{ display: "flex", gap: "12px", fontSize: "16px", lineHeight: "1.6", color: "var(--ink-soft)" }}><span style={{ color: "var(--accent)", fontWeight: "700" }}>✗</span>Pretend our model fits every child — it doesn&apos;t, and we will tell you if it doesn&apos;t fit yours.</li>
                  <li style={{ display: "flex", gap: "12px", fontSize: "16px", lineHeight: "1.6", color: "var(--ink-soft)" }}><span style={{ color: "var(--accent)", fontWeight: "700" }}>✗</span>Lock you in with cancellation fees designed to trap you.</li>
                </ul>
              </div>
              <div style={{ marginTop: "56px", padding: "32px", background: "var(--paper-2)", borderLeft: "3px solid var(--accent)", borderRadius: "0 16px 16px 0" }}>
                <p style={{ fontFamily: "var(--display)", fontWeight: "500", fontSize: "19px", lineHeight: "1.4", color: "var(--ink)", margin: "0" }}>If we ever fail one of these promises, we&apos;d rather you tell us than not.<br /><span className="serif-em" style={{ fontFamily: "var(--serif)", fontStyle: "italic", color: "var(--accent)" }}>Email the Principal directly:</span> <a href="mailto:principal@chrysalis.education" style={{ color: "var(--ink)", borderBottom: "1px solid var(--ink)" }}>principal@chrysalis.education</a></p>
              </div>
            </div>
          </section>
        </div>
        <LegacyBehaviors onPage />
      </div>

      <SiteFooter />
    </>
  );
}

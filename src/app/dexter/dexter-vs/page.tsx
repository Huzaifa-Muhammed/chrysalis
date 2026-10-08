import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageScripts } from "@/components/page-scripts";
import { SiteFooter } from "@/components/site-footer";
import scripts from "./scripts";
import "./dexter-vs.css";

export const metadata: Metadata = {
  title: "10 reasons you can't avoid Dexter",
  description:
    "The ten reasons every GCC school should look at Dexter before signing another LMS contract. Cost comparison, teacher induction, security, content, integrations.",
};

export default function DexterVsPage() {
  return (
    <>
      <div className="pg-dexter-vs">
        <nav className="topnav" id="topnav">
          <Link href="/dexter" className="back-link"><span className="arr">←</span> Back to Dexter</Link>
          <Link href="/" className="back-link" style={{ marginLeft: "18px", opacity: ".7" }}>↗ Chrysalis Education</Link>
          <Link href="/dexter" className="brand">
            <Image className="brandmark" src="/img/dexter/dexter-mark.png" width={300} height={309} alt="" />
            <span className="wm">DE<span className="x">X</span>TER</span>
          </Link>
          <div className="topnav-right">
            <a href="mailto:hello@chrysalis.education?subject=Dexter%20demo%20request" className="trial">Book a demo</a>
          </div>
        </nav>
        <header className="hero">
          <div className="hero-eyebrow">For Principals, IT Heads, and Bursars</div>
          <h1 className="hero-h1"> <span className="big">10</span> reasons your school<br />can&apos;t avoid Dexter. </h1>
          <p className="hero-sub"> A working argument for why every GCC school should look at Dexter before signing another five-year LMS contract. Cost numbers, induction realities, security details, integration claims — all on the table. </p>
          <div className="hero-stats">
            <div className="hero-stat">
              <div className="v">Free</div>
              <div className="l">tutors &amp; charities</div>
            </div>
            <div className="hero-stat">
              <div className="v"><span className="pre">From</span>$250</div>
              <div className="l">for institutions</div>
            </div>
            <div className="hero-stat">
              <div className="v">14 days</div>
              <div className="l">to go live</div>
            </div>
            <div className="hero-stat">
              <div className="v">5 years</div>
              <div className="l">in production</div>
            </div>
          </div>
        </header>
        <section className="reasons">
          <article className="reason">
            <div className="reason-num"> <span className="small">Reason</span>01 </div>
            <div className="reason-body">
              <h2>The cost comparison <em>is not close.</em></h2>
              <p className="lede">A 500-student school running Canvas or Blackboard will pay between $25,000 and $70,000 a year in licence fees alone — before training, integration, and IT overhead. Dexter for the same school size is $6,000 flat, including live support and free teacher AI-certification.</p>
              <div className="cost-table">
                <div className="cost-row head">
                  <div className="cost-cell">For a 500-student school</div>
                  <div className="cost-cell">Annual licence</div>
                  <div className="cost-cell">Setup &amp; training</div>
                  <div className="cost-cell">Year-1 total</div>
                </div>
                <div className="cost-row body">
                  <div className="cost-cell label">Canvas (Instructure)</div>
                  <div className="cost-cell num">$25k — $40k</div>
                  <div className="cost-cell num">$8k — $15k</div>
                  <div className="cost-cell num">~$45k</div>
                </div>
                <div className="cost-row body">
                  <div className="cost-cell label">Blackboard Learn</div>
                  <div className="cost-cell num">$35k — $70k</div>
                  <div className="cost-cell num">$10k — $20k</div>
                  <div className="cost-cell num">~$70k</div>
                </div>
                <div className="cost-row body">
                  <div className="cost-cell label">Moodle (self-hosted)</div>
                  <div className="cost-cell num">Free</div>
                  <div className="cost-cell num">$15k — $30k IT</div>
                  <div className="cost-cell num">~$25k + IT staff</div>
                </div>
                <div className="cost-row body feat">
                  <div className="cost-cell label">Dexter — School tier</div>
                  <div className="cost-cell num">$6,000</div>
                  <div className="cost-cell num">Included</div>
                  <div className="cost-cell num">$6,000</div>
                </div>
              </div>
              <p className="body" style={{ marginTop: "24px" }}>Dexter is roughly one-seventh the cost of Canvas and one-eleventh the cost of Blackboard — and that&apos;s before counting the cost of teacher training, which most platforms charge $200–$500 per teacher for. Dexter includes AI-certification for every teacher on your account at no extra charge. The &quot;free&quot; Moodle option doesn&apos;t stay free either — you pay in IT salaries and consultancy fees instead. The savings show up in your budget every single year, not just at signing.</p>
              <p className="body" style={{ marginTop: "14px", fontStyle: "italic", color: "var(--ink-3)" }}>For registered charities, not-for-profits, and small institutions that genuinely can&apos;t afford a subscription — Dexter is free. Just talk to us.</p>
            </div>
          </article>
          <article className="reason">
            <div className="reason-num"> <span className="small">Reason</span>02 </div>
            <div className="reason-body">
              <h2>Teachers are using it <em>by Friday afternoon.</em></h2>
              <p className="lede">Two training sessions for teachers, one for admins, and a phased rollout starting with a single year group. That&apos;s the entire induction process — measured in days, not months.</p>
              <p className="body">Most LMS rollouts fail not because the software is bad but because teachers refuse to use it. Dexter is built by working teachers who know exactly which buttons they don&apos;t want to click. Lesson planning, attendance, assignment marking — the daily workflows are designed to take less time than what your teachers do today, not more. Adoption isn&apos;t a fight; it&apos;s a relief.</p>
              <div className="callout">
                <div className="callout-ic">i</div>
                <div className="callout-body"> <strong>What induction actually looks like</strong> Day 1 — admins set up the school. Day 2 — teachers see their classes already loaded. Days 3–7 — phased rollout with one year group. Day 14 — whole school live. </div>
              </div>
            </div>
          </article>
          <article className="reason">
            <div className="reason-num"> <span className="small">Reason</span>03 </div>
            <div className="reason-body">
              <h2>It adapts to <em>who&apos;s using it</em> — and how old they are.</h2>
              <p className="lede">A Year 3 student doesn&apos;t see what a Year 12 student sees. A tutor with ten learners doesn&apos;t see what a Head of School with two thousand sees. Dexter&apos;s interface, language, and density adapt to the user&apos;s role and to the age range it&apos;s serving.</p>
              <p className="body">Most platforms have a single interface, regardless of whether the user is seven or seventeen, an individual tutor or a multi-campus director. That&apos;s why teachers complain about software being &quot;designed for adults&quot; and why younger students get overwhelmed. Dexter ships with age-aware surfaces — calmer and simpler for primary, denser and more analytical for secondary — and role-aware navigation so a parent, a teacher, a student, and an admin each see only what&apos;s relevant to them.</p>
            </div>
          </article>
          <article className="reason">
            <div className="reason-num"> <span className="small">Reason</span>04 </div>
            <div className="reason-body">
              <h2>The content library <em>comes with it.</em></h2>
              <p className="lede">Interactive lesson templates, adaptive practice sets, auto-generated revision packs, video lessons with embedded questions, past papers, marking rubrics — all included in every Dexter plan. Not an add-on. Not a separate purchase. Not a per-subject licence.</p>
              <p className="body">Buying an LMS and then having to buy content for it is the dirty secret of the category — most schools end up paying for content libraries from a third vendor (Twinkl, Kognity, IXL) on top of their LMS bill. Dexter ships the content with the platform, and the library grows every term, drawn from real classroom use at Chrysalis School.</p>
            </div>
          </article>
          <article className="reason">
            <div className="reason-num"> <span className="small">Reason</span>05 </div>
            <div className="reason-body">
              <h2>Security and compliance, <em>built in.</em></h2>
              <p className="lede">SOC 2-aligned controls. Role-based access. SSO from any major identity provider. UAE PDPL and Saudi PDPL compliance baked in by default. Data hosted in UAE and Saudi data centres — not bouncing through Frankfurt or Virginia.</p>
              <p className="body">For schools, security isn&apos;t a feature you bolt on; it&apos;s the prerequisite for being trusted with anyone&apos;s children. We treat it that way. Every Dexter deployment includes audit logs, encrypted-at-rest data, daily backups, and a documented incident response process. Enterprise customers can opt for private cloud or on-premise deployment if regulatory frameworks demand it.</p>
              <div className="callout">
                <div className="callout-ic">✓</div>
                <div className="callout-body"> <strong>Where your data lives</strong> UAE residency (default) or Saudi residency (on request). Multi-region replication. Encrypted in transit (TLS 1.3) and at rest (AES-256). Customer-controlled retention &amp; deletion. </div>
              </div>
            </div>
          </article>
          <article className="reason">
            <div className="reason-num"> <span className="small">Reason</span>06 </div>
            <div className="reason-body">
              <h2>It&apos;s our <em>own product</em> — not someone else&apos;s that we resell.</h2>
              <p className="lede">Dexter wasn&apos;t built to be sold. It was built because Chrysalis School needed it, and nothing on the market was good enough. Years of planning, countless engineering hours, and hundreds of iterations later, it became the platform that runs our classrooms every school day.</p>
              <p className="body">We maintain it. We upgrade it. We use it. That feedback loop is the reason Dexter feels different from products built by software companies looking for a market — no theoretical features, no &quot;wouldn&apos;t it be cool if&quot; wishlist from people who haven&apos;t taught in fifteen years. Every screen has been reviewed by a teacher who&apos;ll use it on Monday morning. Every flow has been tested by an actual student.</p>
              <p className="body">We&apos;re sharing Dexter with the educational world because the more institutions that get this right, the better the outcomes for students everywhere. It&apos;s our second product, run with the same care as our first.</p>
            </div>
          </article>
          <article className="reason">
            <div className="reason-num"> <span className="small">Reason</span>07 </div>
            <div className="reason-body">
              <h2>No servers. No IT team. <em>No capital expenditure.</em></h2>
              <p className="lede">Dexter is fully managed in the cloud. There is nothing to install, nothing to host, nothing to maintain. Pay your monthly subscription and your school is live. The line in your budget that used to read &quot;education platform&quot; is now an operating expense, not a capital one.</p>
              <p className="body">For boards and CFOs, this changes the conversation entirely. Approving an annual subscription is a different decision from approving a multi-year capital investment in software and infrastructure. Dexter makes the platform an OpEx line — and that single fact has unblocked more procurement processes than any feature we&apos;ve ever shipped.</p>
            </div>
          </article>
          <article className="reason">
            <div className="reason-num"> <span className="small">Reason</span>08 </div>
            <div className="reason-body">
              <h2>GCC-native <em>by default</em>, not by translation.</h2>
              <p className="lede">English and Arabic interface with full right-to-left support throughout every screen. Prayer-time aware scheduling. One-click report generation in KHDA, ADEK, Saudi MoE, and Qatar MOEHE formats. Hosted in regional data centres. Built by people who teach in the GCC.</p>
              <p className="body">American and European LMS platforms treat Arabic and regional compliance as optional add-ons — features they got around to building once revenue justified it. Dexter was designed for the GCC from day one because the school that built it is in the GCC. The difference shows up the first time a parent receives a report in Arabic that actually reads like Arabic.</p>
            </div>
          </article>
          <article className="reason">
            <div className="reason-num"> <span className="small">Reason</span>09 </div>
            <div className="reason-body">
              <h2>From signed contract to <em>live in two weeks.</em></h2>
              <p className="lede">Most LMS implementations take three to six months. Dexter goes live in 14 days. Our team handles the data migration, connects your existing systems, trains your staff, and runs a phased rollout — typically one year group first, then the whole school by day 14.</p>
              <p className="body">If we miss that timeline, the first month is on us. That&apos;s not a marketing promise — it&apos;s a contract clause we include in every agreement. Speed-to-value matters because every month of delay is a month your students don&apos;t have the platform.</p>
            </div>
          </article>
          <article className="reason">
            <div className="reason-num"> <span className="small">Reason</span>10 </div>
            <div className="reason-body">
              <h2>Open APIs — <em>integrates with what you already run.</em></h2>
              <p className="lede">Dexter is not an SIS replacement. Your rostering system, fee module, and admissions platform stay in place. Dexter handles the teaching and learning layer, and connects to the rest through bi-directional APIs.</p>
              <p className="body">We integrate with PowerSchool, Engage, iSAMS, Open Apply, and most major school platforms. Rostering syncs in automatically. Grades sync back out. Parent contact details flow through. No double data entry, no spreadsheet exports at the end of term, no &quot;we&apos;ll integrate next year&quot; promises. It&apos;s how every school we onboard runs from day one.</p>
            </div>
          </article>
        </section>
        <section className="final">
          <h2 className="final-h">The next step <em>is a 30-minute demo.</em></h2>
          <p className="final-p">We&apos;ll show both portals live, answer your questions, and put a pilot proposal together — no slides, no salespeople, no pressure.</p>
          <div className="final-actions">
            <a href="mailto:hello@chrysalis.education?subject=Dexter%20demo%20request" className="btn-primary">Book a demo →</a>
            <Link href="/dexter/a-day-with-dexter" className="btn-ghost">A day with Dexter →</Link>
            <Link href="/dexter/behind-dexter" className="btn-ghost">Who is behind Dexter →</Link>
          </div>
        </section>
        <div className="dm" id="demoModal" hidden role="dialog" aria-modal="true" aria-labelledby="dmTitle">
          <div className="dm-scrim" id="dmScrim" />
          <div className="dm-panel" role="document">
            <button type="button" className="dm-x" id="dmClose" aria-label="Close">&times;</button>
            <div className="dm-kick">Book a demo</div>
            <h2 id="dmTitle">See Dexter on your own timetable</h2>
            <p className="dm-sub">A 30-minute walkthrough of the platform our own school teaches on. No slides, no obligation.</p>
            <form className="dm-form" id="demoForm">
              <div className="dm-row">
                <label>Your name<input type="text" name="name" required autoComplete="name" /></label>
                <label>Role<input type="text" name="role" placeholder="e.g. Head of Digital" required /></label>
              </div>
              <div className="dm-row">
                <label>Work email<input type="email" name="email" required autoComplete="email" /></label>
                <label>Contact number<input type="tel" name="phone" inputMode="tel" autoComplete="tel" /></label>
              </div>
              <div className="dm-row">
                <label>Institution<input type="text" name="org" required /></label>
                <label>City &amp; country<input type="text" name="city" placeholder="e.g. Dubai, UAE" required /></label>
              </div>
              <div className="dm-row">
                <label>Type <select name="type" required>
  <option value="">Select&hellip;</option>
  <option>School</option>
  <option>Tuition centre</option>
  <option>University</option>
  <option>Individual tutor</option>
  <option>Ministry / group</option>
</select> </label>
                <label>Approx. students <select name="size" required>
  <option value="">Select&hellip;</option>
  <option>Under 100</option>
  <option>100&ndash;1,000</option>
  <option>1,000&ndash;2,000</option>
  <option>Over 2,000</option>
</select> </label>
              </div>
              <label className="dm-full">What would you like to see? <span className="opt">optional</span> <textarea name="notes" rows={3} /> </label>
              <button className="dm-send" type="submit">Request a demo</button>
              <p className="dm-note">Opens your email app with the details ready to send</p>
            </form>
            <div className="dm-done" id="dmDone" hidden>
              <span className="dm-tick">&#10003;</span>
              <h3>Request sent.</h3>
              <p>One of our team will contact you within two working days to arrange a time that suits your timetable.</p>
              <button type="button" className="dm-send" id="dmDoneClose">Close</button>
            </div>
          </div>
        </div>
        <PageScripts scripts={scripts} />
        <SiteFooter />
      </div>
    </>
  );
}

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageScripts } from "@/components/page-scripts";
import { SiteFooter } from "@/components/site-footer";
import scripts from "./scripts";
import "./behind-dexter.css";

export const metadata: Metadata = {
  title: "Behind Dexter",
  description:
    "Dexter wasn't built by software people who happen to sell to schools. It was built by technologists, education specialists, learning psychologists, working teachers, and the students themselves. Here's how each shaped the product.",
};

export default function BehindDexterPage() {
  return (
    <>
      <div className="pg-behind-dexter">
        <nav className="topnav" id="topnav">
          <Link href="/dexter" className="back-link">← Back to Dexter</Link>
          <Link href="/" className="back-link" style={{ marginLeft: "18px", opacity: ".7" }}>↗ Chrysalis Education</Link>
          <Link href="/dexter" className="brand">
            <Image className="brandmark" src="/img/dexter/dexter-mark.png" width={300} height={309} alt="" />
            <span className="wm">DE<span className="x">X</span>TER</span>
          </Link>
          <a href="mailto:hello@chrysalis.education?subject=Dexter%20demo%20request" className="trial">Book a demo</a>
        </nav>
        <header className="hero">
          <div className="hero-eyebrow">Behind Dexter</div>
          <h1 className="hero-h1"> Built by people from <em>five different worlds.</em> </h1>
          <p className="hero-sub"> Dexter wasn&apos;t built by a software company. It was built by five kinds of people working on the same problem — each shaping the product in a way you can feel every time you use it. </p>
        </header>
        <nav className="onpage" id="onPage" aria-label="On this page">
          <div className="onpage-in">
            <span className="onpage-label">On this page</span>
            <div className="onpage-links">
              <a href="#technologists-who-treat-lear">The team</a>
              <a href="#five-disciplines-one-product">The feedback loop</a>
              <a href="#want-to-see-what-that-team-b">Book a demo</a>
            </div>
          </div>
        </nav>
        <section id="technologists-who-treat-lear" className="disciplines">
          <article className="discipline">
            <div className="dscp-marker">
              <div className="dscp-num">01</div>
              <div className="dscp-tag">— Technologists</div>
            </div>
            <div className="dscp-body">
              <h2><span className="stakeholder">Technologists</span> who treat learning software <em>as serious software.</em></h2>
              <p>Our engineers come from fintech, cloud, and mobile — places where systems have to work. The same care goes into Dexter. Decisions get made the way they do at a real software company, not the way they do at an ed-tech startup.</p>
              <p>You don&apos;t notice this work directly. You notice when live classes start in two seconds. When the app keeps working on a slow connection. When grades sync to your other systems without anyone touching it.</p>
            </div>
            <aside className="dscp-aside">
              <div className="dscp-aside-head">— what they care about</div>
              <h3>Reliability. Performance. Security.</h3>
              <p>The quiet engineering work that makes a product feel calm to use.</p>
              <div className="you-see-this"> <strong>You see this when</strong> Things just work — even when you&apos;re not paying attention. </div>
            </aside>
          </article>
          <article className="discipline">
            <div className="dscp-marker">
              <div className="dscp-num">02</div>
              <div className="dscp-tag">— Education Specialists</div>
            </div>
            <div className="dscp-body">
              <h2><span className="stakeholder">Educators</span> who&apos;ve stood in front of a class — <em>and remember what it was like.</em></h2>
              <p>Curriculum leads. Former heads of department. People who can look at a draft feature and say &quot;this won&apos;t work on a wet Thursday afternoon&quot; — and be right.</p>
              <p>They&apos;re the reason lessons map to real schemes of work. Why the gradebook handles weighted assessments the way exam boards expect. Why reports come pre-formatted for KHDA, ADEK, and MoE rather than as generic exports. None of that is on a product survey. You only know to build it if you&apos;ve lived inside the work.</p>
            </div>
            <aside className="dscp-aside">
              <div className="dscp-aside-head">— what they care about</div>
              <h3>Pedagogy. Curriculum fit. Compliance.</h3>
              <p>The teaching-side details ed-tech vendors usually miss.</p>
              <div className="you-see-this"> <strong>You see this when</strong> Reports look right to a head of year, first time. </div>
            </aside>
          </article>
          <article className="discipline">
            <div className="dscp-marker">
              <div className="dscp-num">03</div>
              <div className="dscp-tag">— Learning Psychologists</div>
            </div>
            <div className="dscp-body">
              <h2><span className="stakeholder">Psychologists</span> — the discipline most ed-tech <em>quietly skips.</em></h2>
              <p>Acquiring information isn&apos;t learning. The difference is what learning psychology studies — how attention works, what makes feedback land, when to push and when to ease off, why some interfaces motivate and others exhaust.</p>
              <p>Dexter&apos;s product choices are shaped by people who read the research. Why the dashboard is calm rather than gamified. Why adaptive practice works the way it does. Why the interface gets simpler for younger learners and denser for older ones. These come from the science, not from copying competitors.</p>
            </div>
            <aside className="dscp-aside">
              <div className="dscp-aside-head">— what they care about</div>
              <h3>Motivation. Cognitive load. Retention.</h3>
              <p>The human science behind why some software helps people learn and most doesn&apos;t.</p>
              <div className="you-see-this"> <strong>You see this when</strong> Learners don&apos;t avoid the app. Feedback lands at the right moment. </div>
            </aside>
          </article>
          <article className="discipline">
            <div className="dscp-marker">
              <div className="dscp-num">04</div>
              <div className="dscp-tag">— Teachers &amp; Staff</div>
            </div>
            <div className="dscp-body">
              <h2><span className="stakeholder">Teachers</span> — the most demanding stakeholder <em>has been in the room the whole time.</em></h2>
              <p>Working teachers, heads of department, pastoral leads, and admin staff use Dexter every day at Chrysalis. When something is wrong, they don&apos;t open a support ticket — they walk down a corridor and tell us.</p>
              <p>That&apos;s why Dexter doesn&apos;t feel like generic ed-tech. Every workflow has been pressure-tested by an actual term — parents&apos; evenings, exam weeks, a teacher calling in sick on Monday. The product meets those moments because it has lived through them.</p>
            </div>
            <aside className="dscp-aside">
              <div className="dscp-aside-head">— what they care about</div>
              <h3>Real-world fit.</h3>
              <p>The product that survives a normal Tuesday.</p>
              <div className="you-see-this"> <strong>You see this when</strong> Your edge cases are already handled. </div>
            </aside>
          </article>
          <article className="discipline">
            <div className="dscp-marker">
              <div className="dscp-num">05</div>
              <div className="dscp-tag">— Students</div>
            </div>
            <div className="dscp-body">
              <h2><span className="stakeholder">Students</span> — the audience most software <em>pretends to design for.</em></h2>
              <p>Students are the hardest group to design for. They don&apos;t write feedback forms. They just stop opening the app.</p>
              <p>Real students use Dexter every day, and they tell us when something is wrong. Sometimes by saying so. Sometimes by quietly working around it. Sometimes by telling their parents, who then tell us. Every student-facing screen — the portal, the mobile app, the in-class quiz — is the way it is because of what real students did and didn&apos;t do with earlier versions.</p>
            </div>
            <aside className="dscp-aside">
              <div className="dscp-aside-head">— what they care about</div>
              <h3>Whether they want to open it tomorrow.</h3>
              <p>The only adoption metric that ultimately matters.</p>
              <div className="you-see-this"> <strong>You see this when</strong> Students log in without being told to. </div>
            </aside>
          </article>
        </section>
        <section id="five-disciplines-one-product" className="loop">
          <div className="loop-inner">
            <div className="loop-eyebrow">— the feedback loop</div>
            <h2 className="loop-h"> Five disciplines. One product. <em>Arguing every week.</em> </h2>
            <div className="loop-body">
              <p>Lots of companies have engineers. Some have education specialists. A few have learning psychologists. Almost none have working teachers and real students sitting next to product development as the most demanding customers in the room.</p>
              <p>That setup means a feature ships only when the people using it had nothing else to fall back on — and kept using it anyway. The longer this runs, the harder it is to copy.</p>
            </div>
          </div>
        </section>
        <section id="want-to-see-what-that-team-b" className="final">
          <h2 className="final-h">Want to see what <em>that team built?</em></h2>
          <p className="final-p">Book a 30-minute walkthrough. We&apos;ll show both portals live, on the platform our own school runs on every day.</p>
          <div className="final-actions">
            <a href="mailto:hello@chrysalis.education?subject=Dexter%20demo%20request" className="btn-primary">Book a demo →</a>
            <Link href="/dexter/dexter-vs" className="btn-ghost">See the 10 reasons →</Link>
            <Link href="/dexter/a-day-with-dexter" className="btn-ghost">A day with Dexter →</Link>
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

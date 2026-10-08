import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageScripts } from "@/components/page-scripts";
import { SiteFooter } from "@/components/site-footer";
import scripts from "./scripts";
import "./a-day-with-dexter.css";

export const metadata: Metadata = {
  title: "A day with vs. without Dexter",
  description:
    "One teacher. One school day. Two realities. See exactly where Dexter saves a teacher hours every day — and where it doesn't.",
};

export default function ADayWithDexterPage() {
  return (
    <>
      <div className="pg-a-day-with-dexter">
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
          <div className="hero-eyebrow">A day in the life</div>
          <h1 className="hero-h1"> One teacher. One school day.<br /> <em>Two realities.</em> </h1>
          <p className="hero-sub"> Meet Sarah. She teaches Year 9 Mathematics at a 600-student private school in Dubai. Tuesday morning, 32 students, an algebra unit beginning. Below — her day, twice. Once without Dexter, once with. </p>
          <div className="protag">
            <div className="protag-avatar">SR</div>
            <div className="protag-body">
              <strong>Sarah Reyes</strong>
              <span>Head of Maths · 5 classes · 142 students</span>
            </div>
          </div>
        </header>
        <section className="timeline-wrap">
          <div className="timeline-headers">
            <div className="col-head without"> <span className="col-head-tag">Scenario A</span> Without Dexter </div>
            <div className="col-head with"> <span className="col-head-tag">Scenario B</span> With Dexter </div>
          </div>
          <div className="beat">
            <div className="beat-time">
              <div className="beat-time-label">Monday</div>
              <div className="beat-time-val">9:30 PM</div>
              <div className="beat-time-sub">The night before</div>
            </div>
            <div className="beat-card without">
              <div className="beat-card-headline">Sarah is at her kitchen table preparing tomorrow&apos;s lesson.</div>
              <div className="beat-card-body">She opens Word to write a worksheet, switches to PowerPoint to update last term&apos;s slides, hunts for a video on YouTube, copies a problem set from her textbook PDF. She emails the worksheet to her Year 9 WhatsApp group at 10:40 PM. Two parents reply asking what file format it&apos;s in.</div>
              <div className="beat-card-foot">
                <span>5 apps · 1 textbook · 1 group chat</span>
                <span className="beat-card-time-cost">1h 45m</span>
              </div>
            </div>
            <div className="beat-card with">
              <div className="beat-card-headline">Sarah picks tomorrow&apos;s lesson from her Dexter scheme of work — it&apos;s already loaded.</div>
              <div className="beat-card-body">The next lesson in the algebra unit is pre-built: opening explainer video, a worked example, an interactive practice set, and a quiz. Sarah adjusts two problems to match her class&apos;s level and adds a personal note. She publishes to her class with one click. Students see it the moment they open the app.</div>
              <div className="beat-card-foot">
                <span>One platform · auto-published to 32 students</span>
                <span className="beat-card-time-cost">12 minutes</span>
              </div>
            </div>
          </div>
          <div className="beat">
            <div className="beat-time">
              <div className="beat-time-label">Tuesday</div>
              <div className="beat-time-val">8:15 AM</div>
              <div className="beat-time-sub">Before first bell</div>
            </div>
            <div className="beat-card without">
              <div className="beat-card-headline">Attendance register on paper, then transcribed into the school portal at break.</div>
              <div className="beat-card-body">Sarah ticks names off a printed register. Two students arrive late and need to be edited in. She&apos;ll transfer this to the school&apos;s attendance system between lessons — if she remembers. Last week she had to retro-fill three days at the end of term.</div>
              <div className="beat-card-foot">
                <span>Paper register · manual entry later</span>
                <span className="beat-card-time-cost">15m + 10m later</span>
              </div>
            </div>
            <div className="beat-card with">
              <div className="beat-card-headline">Attendance auto-captures when students join the room — Dexter syncs to her SIS.</div>
              <div className="beat-card-body">Students tap to confirm presence on the Dexter mobile app, or Sarah marks them in three taps. Late arrivals show automatically. The school&apos;s SIS receives the attendance data without Sarah ever opening it. Pastoral team gets a flag if a student has been absent twice this week.</div>
              <div className="beat-card-foot">
                <span>Auto-captured · synced to SIS</span>
                <span className="beat-card-time-cost">2 minutes</span>
              </div>
            </div>
          </div>
          <div className="beat">
            <div className="beat-time">
              <div className="beat-time-label">Tuesday</div>
              <div className="beat-time-val">9:00 AM</div>
              <div className="beat-time-sub">The lesson</div>
            </div>
            <div className="beat-card without">
              <div className="beat-card-headline">She&apos;s projecting from her laptop. Three students don&apos;t have the worksheet open.</div>
              <div className="beat-card-body">&quot;Miss, what file did you send?&quot; The WhatsApp message is buried. Sarah re-shares it via email. The lesson starts five minutes late. She has no idea who&apos;s following along until she calls on someone and gets a blank look. The quiet students stay quiet.</div>
              <div className="beat-card-foot">
                <span>Late start · no visibility into engagement</span>
                <span className="beat-card-time-cost">5m lost · 0 signal</span>
              </div>
            </div>
            <div className="beat-card with">
              <div className="beat-card-headline">Every student has the lesson open. Dexter shows Sarah who&apos;s actually following.</div>
              <div className="beat-card-body">The interactive practice set tracks who&apos;s answering, who&apos;s stuck, and who&apos;s flying through. Three students get questions wrong on the same concept — Sarah sees this live and pauses to re-explain. Two students who&apos;ve finished early get auto-promoted to the stretch problems. The quiet ones can&apos;t hide.</div>
              <div className="beat-card-foot">
                <span>Live engagement signal · adaptive content</span>
                <span className="beat-card-time-cost">Real-time visibility</span>
              </div>
            </div>
          </div>
          <div className="beat">
            <div className="beat-time">
              <div className="beat-time-label">Tuesday</div>
              <div className="beat-time-val">11:00 AM</div>
              <div className="beat-time-sub">Between lessons</div>
            </div>
            <div className="beat-card without">
              <div className="beat-card-headline">Three parent emails, one WhatsApp from a parent, and an admin asking for a behaviour note.</div>
              <div className="beat-card-body">Sarah opens Outlook, replies to a parent about a missed homework. She opens WhatsApp, replies to another parent. She opens a Google Doc to log a behaviour incident, then forwards it to the head of pastoral. Between two cups of coffee, she switches between four windows and forgets to log one of the emails into the school&apos;s CRM.</div>
              <div className="beat-card-foot">
                <span>4 channels · context lost between them</span>
                <span className="beat-card-time-cost">25 minutes</span>
              </div>
            </div>
            <div className="beat-card with">
              <div className="beat-card-headline">All parent messages and pastoral notes flow through one Dexter inbox.</div>
              <div className="beat-card-body">Parents message Sarah through the Dexter parent portal — moderated, logged, parent-visible. Sarah replies once, in one place, and the conversation is automatically attached to the student&apos;s record. The behaviour note she logs is automatically routed to pastoral, with the relevant lesson context attached. No forwarding, no copy-paste.</div>
              <div className="beat-card-foot">
                <span>One inbox · auto-routed · auto-logged</span>
                <span className="beat-card-time-cost">8 minutes</span>
              </div>
            </div>
          </div>
          <div className="beat">
            <div className="beat-time">
              <div className="beat-time-label">Tuesday</div>
              <div className="beat-time-val">4:30 PM</div>
              <div className="beat-time-sub">After the bell</div>
            </div>
            <div className="beat-card without">
              <div className="beat-card-headline">A stack of worksheets to mark. She&apos;ll do them tonight after dinner.</div>
              <div className="beat-card-body">32 worksheets, hand-marked, each with a written comment. She manually transfers grades to her Excel gradebook, then again to the school&apos;s reporting system. Two grades get transcribed wrong — she&apos;ll find out at parents&apos; evening. Bedtime: 11:45 PM.</div>
              <div className="beat-card-foot">
                <span>Paper · Excel · school system (3× entry)</span>
                <span className="beat-card-time-cost">2h 30m at home</span>
              </div>
            </div>
            <div className="beat-card with">
              <div className="beat-card-headline">The quiz auto-marked itself. Sarah reviews flagged answers and adds feedback to three students.</div>
              <div className="beat-card-body">Multiple-choice and short-answer questions are auto-graded. Three students gave answers Dexter wasn&apos;t sure about — Sarah reviews these, marks them, and writes personalised feedback. Grades flow automatically to the gradebook, the parent portal, and the school&apos;s reporting system. Bedtime: 9:30 PM.</div>
              <div className="beat-card-foot">
                <span>Auto-marked · one source of truth</span>
                <span className="beat-card-time-cost">22 minutes</span>
              </div>
            </div>
          </div>
          <div className="beat">
            <div className="beat-time">
              <div className="beat-time-label">Friday</div>
              <div className="beat-time-val">3:00 PM</div>
              <div className="beat-time-sub">End-of-week reports</div>
            </div>
            <div className="beat-card without">
              <div className="beat-card-headline">Sarah needs to flag at-risk students to the Head of Year. She has no real data.</div>
              <div className="beat-card-body">She scans her Excel gradebook, tries to remember who&apos;s been quiet in class, who handed work in late, who scored badly on the quiz. She names three students based on gut feel. The Head of Year asks for evidence. Sarah spends an hour pulling screenshots together. The list is incomplete.</div>
              <div className="beat-card-foot">
                <span>Gut feel · incomplete data</span>
                <span className="beat-card-time-cost">1 hour to compile</span>
              </div>
            </div>
            <div className="beat-card with">
              <div className="beat-card-headline">Dexter has already flagged six students. Sarah reviews and confirms.</div>
              <div className="beat-card-body">The Dexter analytics dashboard shows Sarah which students are declining in grade, which have missed three or more assignments, and which engagement has dropped. Six students are flagged automatically — two she&apos;d have missed on gut feel. Full evidence trail attached. She forwards to pastoral with one click.</div>
              <div className="beat-card-foot">
                <span>Data-driven · automatic · evidence-based</span>
                <span className="beat-card-time-cost">5 minutes</span>
              </div>
            </div>
          </div>
        </section>
        <section className="totals">
          <div className="totals-inner">
            <div className="totals-eyebrow">By Friday afternoon</div>
            <h2 className="totals-h"> Sarah gets back nearly <em>a full working day</em> every week —<br /> and her students learn more, not less. </h2>
            <div className="totals-grid">
              <div className="totals-stat">
                <div className="totals-stat-v">6.5 <span className="small">hrs</span></div>
                <div className="totals-stat-l">saved per teacher, per week — at the conservative read. Goes higher in marking-heavy weeks.</div>
              </div>
              <div className="totals-stat">
                <div className="totals-stat-v">0 <span className="small">apps</span></div>
                <div className="totals-stat-l">opened in addition to Dexter. No more switching between Word, Outlook, WhatsApp, Excel.</div>
              </div>
              <div className="totals-stat">
                <div className="totals-stat-v">+38<span className="small">%</span></div>
                <div className="totals-stat-l">improvement in early at-risk detection at Chrysalis School since switching to Dexter.</div>
              </div>
            </div>
          </div>
        </section>
        <section className="honest">
          <div className="honest-inner">
            <div>
              <div className="honest-eyebrow">A note on honesty</div>
              <h3 className="honest-h">What Dexter doesn&apos;t do.</h3>
            </div>
            <div className="honest-body">
              <p>The story above is the difference Dexter makes in a teacher&apos;s day. It&apos;s not a magic spell. The lessons still need to be planned with intent. The feedback still needs to be thoughtful. The relationships with students still need to be built one conversation at a time.</p>
              <p>What Dexter removes is the <em>friction</em> — the administrative overhead, the app-switching, the duplicate data entry, the buried WhatsApp messages — so the human work of teaching gets the time and attention it deserves. The teacher is still the teacher. We just gave her better tools.</p>
            </div>
          </div>
        </section>
        <section className="final">
          <h2 className="final-h">See it for yourself <em>in 30 minutes.</em></h2>
          <p className="final-p">We&apos;ll walk you through Sarah&apos;s actual day on Dexter — live, on the real platform. No slides, no salespeople, no pressure.</p>
          <div className="final-actions">
            <a href="mailto:hello@chrysalis.education?subject=Dexter%20demo%20request" className="btn-primary">Book a demo →</a>
            <Link href="/dexter/dexter-vs" className="btn-ghost">See the 10 reasons →</Link>
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

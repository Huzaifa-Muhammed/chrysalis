import type { Metadata } from "next";
import { LegacyBehaviors } from "@/components/legacy-behaviors";
import { SchoolChrome } from "@/components/school-chrome";
import { SiteFooter } from "@/components/site-footer";
import "./support.css";

export const metadata: Metadata = {
  title: "Support Center",
  description:
    "Help centre and frequently asked questions for Chrysalis Education families.",
};

export default function SupportPage() {
  return (
    <>
      <div className="pg-support">
        <div className="page-wrap">
          <SchoolChrome active="support" />
          <section className="page-hero">
            <div className="page-hero-inner">
              <div>
                <div className="eyebrow-mono">Support Center</div>
                <h1>Help when you <em>need</em> it.</h1>
              </div>
              <p className="hero-lead">Quick answers, a real human at the other end of chat, and a thorough FAQ. Enrolled families have a dedicated Education Manager too — but this page is here for anyone with a question.</p>
            </div>
          </section>
          <section className="section paper reveal" id="chat">
            <div className="section-inner two-col">
              <div>
                <div className="section-eyebrow"><span className="num">01</span> Chat</div>
                <h2>Talk to <em>someone</em>.</h2>
                <p>Chat is open <strong>Sunday to Thursday, 8am–8pm GST</strong> (UAE time). A real member of our admissions team answers — not a bot. If we&apos;re offline, leave a message and we&apos;ll reply within 24 hours.</p>
                <p style={{ marginTop: "16px" }}>For enrolled families: your Education Manager is your fastest route. Use the Parent Portal message thread, not chat.</p>
              </div>
              <div className="card" style={{ background: "var(--paper)", padding: "36px" }}>
                <div className="eyebrow-mono" style={{ marginBottom: "18px" }}>/&#47; Reach us</div>
                <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
                  <a href="mailto:hello@chrysalis.education" style={{ display: "flex", alignItems: "center", gap: "16px", padding: "16px", background: "var(--paper-2)", borderRadius: "12px", transition: "transform .25s" }}>
                    <span style={{ width: "36px", height: "36px", background: "var(--accent)", color: "var(--paper)", borderRadius: "50%", display: "inline-flex", alignItems: "center", justifyContent: "center", fontWeight: "700" }}>✉</span>
                    <div>
                      <div style={{ fontWeight: "600", color: "var(--ink)", fontSize: "14.5px" }}>Email</div>
                      <div style={{ fontFamily: "var(--mono)", fontSize: "12px", color: "var(--ink-soft)" }}>hello@chrysalis.education</div>
                    </div>
                  </a>
                  <a href="#" style={{ display: "flex", alignItems: "center", gap: "16px", padding: "16px", background: "var(--paper-2)", borderRadius: "12px" }}>
                    <span style={{ width: "36px", height: "36px", background: "var(--leaf-deep)", color: "var(--paper)", borderRadius: "50%", display: "inline-flex", alignItems: "center", justifyContent: "center", fontWeight: "700" }}>💬</span>
                    <div>
                      <div style={{ fontWeight: "600", color: "var(--ink)", fontSize: "14.5px" }}>WhatsApp</div>
                      <div style={{ fontFamily: "var(--mono)", fontSize: "12px", color: "var(--ink-soft)" }}>Number live August 2026</div>
                    </div>
                  </a>
                  <a href="#" style={{ display: "flex", alignItems: "center", gap: "16px", padding: "16px", background: "var(--paper-2)", borderRadius: "12px" }}>
                    <span style={{ width: "36px", height: "36px", background: "var(--butter)", color: "var(--ink)", borderRadius: "50%", display: "inline-flex", alignItems: "center", justifyContent: "center", fontWeight: "700" }}>📞</span>
                    <div>
                      <div style={{ fontWeight: "600", color: "var(--ink)", fontSize: "14.5px" }}>Call</div>
                      <div style={{ fontFamily: "var(--mono)", fontSize: "12px", color: "var(--ink-soft)" }}>Number live August 2026</div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </section>
          <section className="section reveal" id="faqs">
            <div className="section-inner-narrow">
              <div className="section-eyebrow"><span className="num">02</span> FAQs</div>
              <h2>Questions we get <em>most</em>.</h2>
              <p>Grouped by topic. Click to expand. Don&apos;t see your question? Email us — we add new ones here every week.</p>
              <div style={{ marginTop: "40px" }}>
                <details style={{ borderBottom: "1px solid var(--hairline-soft)", padding: "18px 0" }}>
                  <summary style={{ display: "flex", justifyContent: "space-between", alignItems: "center", cursor: "pointer", listStyle: "none", fontFamily: "var(--display)", fontWeight: "500", fontSize: "16px", color: "var(--ink)", paddingRight: "24px" }}> Is this a real school? <span style={{ fontFamily: "var(--mono)", fontSize: "18px", color: "var(--accent)", transition: "transform .25s" }}>+</span> </summary>
                  <p style={{ margin: "14px 0 0", fontSize: "15px", lineHeight: "1.65", color: "var(--ink-soft)" }}>Yes. Chrysalis School is a registered educational institution running the Pearson Edexcel International GCSE and IAL frameworks. Students sit externally-examined qualifications recognised by universities worldwide. The only thing &quot;non-traditional&quot; about us is the absence of a physical building.</p>
                </details>
                <details style={{ borderBottom: "1px solid var(--hairline-soft)", padding: "18px 0" }}>
                  <summary style={{ display: "flex", justifyContent: "space-between", alignItems: "center", cursor: "pointer", listStyle: "none", fontFamily: "var(--display)", fontWeight: "500", fontSize: "16px", color: "var(--ink)", paddingRight: "24px" }}> Will my child get into university? <span style={{ fontFamily: "var(--mono)", fontSize: "18px", color: "var(--accent)", transition: "transform .25s" }}>+</span> </summary>
                  <p style={{ margin: "14px 0 0", fontSize: "15px", lineHeight: "1.65", color: "var(--ink-soft)" }}>Yes — through the same routes any IGCSE/IAL student takes. Our Sixth Form includes structured university guidance from Y12 term one. Recognised across the UK, GCC, Singapore, Australia, much of Europe, and US universities through standardised conversion.</p>
                </details>
                <details style={{ borderBottom: "1px solid var(--hairline-soft)", padding: "18px 0" }}>
                  <summary style={{ display: "flex", justifyContent: "space-between", alignItems: "center", cursor: "pointer", listStyle: "none", fontFamily: "var(--display)", fontWeight: "500", fontSize: "16px", color: "var(--ink)", paddingRight: "24px" }}> What time zone do classes run in? <span style={{ fontFamily: "var(--mono)", fontSize: "18px", color: "var(--accent)", transition: "transform .25s" }}>+</span> </summary>
                  <p style={{ margin: "14px 0 0", fontSize: "15px", lineHeight: "1.65", color: "var(--ink-soft)" }}>Lessons are timetabled for GMT+0 to GMT+4 as the primary window (most of our students sit in the Gulf and the UK). Other time zones are accommodated case-by-case — some lessons attended live, others via lesson recording with a structured catch-up.</p>
                </details>
                <details style={{ borderBottom: "1px solid var(--hairline-soft)", padding: "18px 0" }}>
                  <summary style={{ display: "flex", justifyContent: "space-between", alignItems: "center", cursor: "pointer", listStyle: "none", fontFamily: "var(--display)", fontWeight: "500", fontSize: "16px", color: "var(--ink)", paddingRight: "24px" }}> What devices do we need? <span style={{ fontFamily: "var(--mono)", fontSize: "18px", color: "var(--accent)", transition: "transform .25s" }}>+</span> </summary>
                  <p style={{ margin: "14px 0 0", fontSize: "15px", lineHeight: "1.65", color: "var(--ink-soft)" }}>A laptop or desktop computer with a webcam and a stable internet connection (minimum 15 Mbps download recommended). No specialist hardware required. We provide all software access.</p>
                </details>
                <details style={{ borderBottom: "1px solid var(--hairline-soft)", padding: "18px 0" }}>
                  <summary style={{ display: "flex", justifyContent: "space-between", alignItems: "center", cursor: "pointer", listStyle: "none", fontFamily: "var(--display)", fontWeight: "500", fontSize: "16px", color: "var(--ink)", paddingRight: "24px" }}> How do exams work for international students? <span style={{ fontFamily: "var(--mono)", fontSize: "18px", color: "var(--accent)", transition: "transform .25s" }}>+</span> </summary>
                  <p style={{ margin: "14px 0 0", fontSize: "15px", lineHeight: "1.65", color: "var(--ink-soft)" }}>Edexcel exams can be sat at approved exam centres worldwide — typically British Council offices or partner schools. We help every family find a centre near them and handle the registration on your behalf.</p>
                </details>
                <details style={{ borderBottom: "1px solid var(--hairline-soft)", padding: "18px 0" }}>
                  <summary style={{ display: "flex", justifyContent: "space-between", alignItems: "center", cursor: "pointer", listStyle: "none", fontFamily: "var(--display)", fontWeight: "500", fontSize: "16px", color: "var(--ink)", paddingRight: "24px" }}> Will my child have friends? <span style={{ fontFamily: "var(--mono)", fontSize: "18px", color: "var(--accent)", transition: "transform .25s" }}>+</span> </summary>
                  <p style={{ margin: "14px 0 0", fontSize: "15px", lineHeight: "1.65", color: "var(--ink-soft)" }}>Yes. Class sizes of 15 build close groups. The Community platform runs year-group circles, clubs, and live events. Many of our students travel to in-person meetups — including our annual summer week and termly regional gatherings.</p>
                </details>
                <details style={{ borderBottom: "1px solid var(--hairline-soft)", padding: "18px 0" }}>
                  <summary style={{ display: "flex", justifyContent: "space-between", alignItems: "center", cursor: "pointer", listStyle: "none", fontFamily: "var(--display)", fontWeight: "500", fontSize: "16px", color: "var(--ink)", paddingRight: "24px" }}> Can my child play sport / do music? <span style={{ fontFamily: "var(--mono)", fontSize: "18px", color: "var(--accent)", transition: "transform .25s" }}>+</span> </summary>
                  <p style={{ margin: "14px 0 0", fontSize: "15px", lineHeight: "1.65", color: "var(--ink-soft)" }}>Not through the school itself — we don&apos;t pretend to. We partner with local sports academies and music schools in major hubs and help families find equivalents nearby. The fee saving versus traditional school more than covers private coaching.</p>
                </details>
                <details style={{ borderBottom: "1px solid var(--hairline-soft)", padding: "18px 0" }}>
                  <summary style={{ display: "flex", justifyContent: "space-between", alignItems: "center", cursor: "pointer", listStyle: "none", fontFamily: "var(--display)", fontWeight: "500", fontSize: "16px", color: "var(--ink)", paddingRight: "24px" }}> What about special educational needs? <span style={{ fontFamily: "var(--mono)", fontSize: "18px", color: "var(--accent)", transition: "transform .25s" }}>+</span> </summary>
                  <p style={{ margin: "14px 0 0", fontSize: "15px", lineHeight: "1.65", color: "var(--ink-soft)" }}>We can support a range of SEN with adaptations — additional 1:1 time, modified assessment formats, dedicated learning specialist hours. We are honest if we can&apos;t fully meet a particular need; we will tell you at the Discovery Call stage.</p>
                </details>
                <details style={{ borderBottom: "1px solid var(--hairline-soft)", padding: "18px 0" }}>
                  <summary style={{ display: "flex", justifyContent: "space-between", alignItems: "center", cursor: "pointer", listStyle: "none", fontFamily: "var(--display)", fontWeight: "500", fontSize: "16px", color: "var(--ink)", paddingRight: "24px" }}> How is wellbeing handled? <span style={{ fontFamily: "var(--mono)", fontSize: "18px", color: "var(--accent)", transition: "transform .25s" }}>+</span> </summary>
                  <p style={{ margin: "14px 0 0", fontSize: "15px", lineHeight: "1.65", color: "var(--ink-soft)" }}>Pastoral check-ins are timetabled, not optional. Every family has a named Education Manager who knows their child. Mental-health support is integrated, not bolted on — and we have specialist hours for students who need more.</p>
                </details>
                <details style={{ borderBottom: "1px solid var(--hairline-soft)", padding: "18px 0" }}>
                  <summary style={{ display: "flex", justifyContent: "space-between", alignItems: "center", cursor: "pointer", listStyle: "none", fontFamily: "var(--display)", fontWeight: "500", fontSize: "16px", color: "var(--ink)", paddingRight: "24px" }}> What happens if it doesn&apos;t work out? <span style={{ fontFamily: "var(--mono)", fontSize: "18px", color: "var(--accent)", transition: "transform .25s" }}>+</span> </summary>
                  <p style={{ margin: "14px 0 0", fontSize: "15px", lineHeight: "1.65", color: "var(--ink-soft)" }}>You can withdraw at the end of any term with one term&apos;s notice. No &quot;we keep your fee&quot; clauses. We will also tell you, frankly, if we think Chrysalis isn&apos;t the right fit — sometimes we suggest going back to in-person, sometimes we suggest waiting a year.</p>
                </details>
              </div>
              <details style={{ position: "relative" }}>
                <summary style={{ display: "none" }} />
              </details>
              <p style={{ marginTop: "40px", fontSize: "14px", color: "var(--ink-soft)" }}>Still have a question? Email <a href="mailto:hello@chrysalis.education" style={{ color: "var(--ink)", borderBottom: "1px solid var(--hairline)" }}>hello@chrysalis.education</a>. We will reply within 24 hours and add the answer to this page if it&apos;s useful for others.</p>
            </div>
          </section>
        </div>
        <LegacyBehaviors />
        <SiteFooter variant="spread" />
      </div>
    </>
  );
}

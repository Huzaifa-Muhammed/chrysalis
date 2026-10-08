import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { EdgeRail } from "@/components/edge-rail";
import { OnPageNav } from "@/components/on-page-nav";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import "./spark-foundation.css";

const onPage = [
  { href: "#from-what-is-ai-to-a-working", label: "The programme" },
  { href: "#outcomes-not-just-a-certific", label: "What students leave with" },
  { href: "#start-with-a-free-class", label: "Free class" },
];

export const metadata: Metadata = {
  title: "Spark Foundation",
  description:
    "A six-week live online AI course for ages 8-18. Students go from the basics to a deployed, working AI product, finishing at a Project Showcase. Starts January 2027.",
};

export default function SparkFoundationPage() {
  return (
    <>
      <div className="pg-spark-foundation">
        <EdgeRail />
        <SiteHeader />
      </div>
      <OnPageNav items={onPage} />

      <div className="pg-spark-foundation">
        <section className="pagetop shell split">
          <div className="ptcopy">
            <div className="eyebrow">AI Foundation &middot; Ages 8&ndash;18</div>
            <h1>Build a real, working AI product in <em>six weeks</em>.</h1>
            <p className="lede">Fully online and live, designed by experts and taught by AI professionals from around the world. No experience needed &mdash; students finish with something real people can use.</p>
            <div className="acts">
              <a className="btn btn-solid" href="mailto:hello@chrysalis.education?subject=AI%20Foundation%20%E2%80%94%20free%20class">
                <span>Start with a free class</span>
                <span className="arrow">&rarr;</span>
              </a>
              <Link className="btn btn-ghost" href="/spark-ai-program">All Spark courses</Link>
            </div>
          </div>
          <div className="ptmedia">
            <Image src="/img/student-hero.jpg" width={730} height={850} alt="A student working on a laptop" />
          </div>
        </section>
        <section className="band shell">
          <div className="facts">
            <div>
              <span className="fk">Starts</span>
              <b>January 2027</b>
            </div>
            <div>
              <span className="fk">Length</span>
              <b>6 weeks, live online</b>
            </div>
            <div>
              <span className="fk">Ages</span>
              <b>8&ndash;18, in three tracks</b>
            </div>
            <div>
              <span className="fk">Ends with</span>
              <b>A Project Showcase</b>
            </div>
          </div>
        </section>
        <section id="from-what-is-ai-to-a-working" className="band shell">
          <div className="sechead">
            <span className="secnum">01 &mdash; The programme</span>
          </div>
          <h2 className="sech">From &ldquo;what is AI?&rdquo; to a working product.</h2>
          <p className="secsub">Three phases over six weeks. Students go from the basics to shipping something real &mdash; in both code and no-code &mdash; finishing at a Project Showcase where the best working solution wins USD 1,000.</p>
          <div className="beliefs">
            <div className="belief">
              <span className="n">/ Phase 01</span>
              <h3>Understanding &amp; using AI</h3>
              <p>What AI is and isn&apos;t, what each kind of model does, and where it fails. Plain language, no jargon maze.</p>
            </div>
            <div className="belief">
              <span className="n">/ Phase 02</span>
              <h3>Building with AI</h3>
              <p>Frontier tools at their level &mdash; AI agents and retrieval &mdash; in code and no-code. Most programmes pick one; we do both.</p>
            </div>
            <div className="belief">
              <span className="n">/ Phase 03</span>
              <h3>Idea to working product</h3>
              <p>Students take an idea to a deployed product with a real URL, then present it at the Showcase.</p>
            </div>
          </div>
        </section>
        <section id="outcomes-not-just-a-certific" className="band shell">
          <div className="sechead">
            <span className="secnum">02 &mdash; What students leave with</span>
          </div>
          <h2 className="sech">Outcomes, not just a certificate.</h2>
          <div className="grid3">
            <div className="gcell">
              <h3>A product they built</h3>
              <p>Real, deployed and working &mdash; not a slide deck or a quiz score.</p>
            </div>
            <div className="gcell">
              <h3>A verifiable record</h3>
              <p>A demo, a written reflection and a digital certificate &mdash; something a university can actually check.</p>
            </div>
            <div className="gcell">
              <h3>Responsible AI, graded</h3>
              <p>Safety, bias and honest use are assessed as part of the work, not a footnote at the end.</p>
            </div>
          </div>
        </section>
        <section id="start-with-a-free-class" className="band shell">
          <div className="closing">
            <div>
              <h2>Start with a free class.</h2>
              <p>Sit in on a real session before committing to anything. If it isn&apos;t right for your child, you&apos;ll know within the hour.</p>
            </div>
            <a className="btn btn-solid" href="mailto:hello@chrysalis.education?subject=AI%20Foundation%20%E2%80%94%20free%20class">
              <span>Book a free class</span>
              <span className="arrow">&rarr;</span>
            </a>
          </div>
        </section>
        <SiteFooter />
      </div>
    </>
  );
}

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { EdgeRail } from "@/components/edge-rail";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import "./spark-ai-program.css";

export const metadata: Metadata = {
  title: "Spark AI Program",
  description:
    "Live online AI courses from Chrysalis Education. AI Foundation and Advanced for ages 8-18, and Medical AI Innovation for doctors. Start with a free class.",
};

export default function SparkAiProgramPage() {
  return (
    <>
      <div className="pg-spark-ai-program">
        <EdgeRail />
        <SiteHeader />
      </div>

      <div className="pg-spark-ai-program">
        <section className="pagetop shell split">
          <div className="ptcopy">
            <div className="eyebrow">Spark &middot; Why we do this</div>
            <h1>All it takes is a Spark to turn curiosity into <em>capability</em>.</h1>
          </div>
          <div className="ptcopy">
            <p className="lede">As we grow, curiosity often gets replaced by routine, creativity by conformity, and interests are put aside because there simply isn&apos;t enough time to explore them.</p>
            <p className="lede">Spark is about bringing that curiosity back. We create short, live learning experiences designed around skills that matter &mdash; from creativity and technology to communication, entrepreneurship, AI and other emerging areas. Each program is focused, practical and designed to help learners discover something new, build a skill and, perhaps, discover something about themselves along the way.</p>
          </div>
        </section>
        <section className="shell tilewrap">
          <div className="tiles">
            <a className="tile t1" href="#courses">
              <span className="tarrow">&#8599;</span>
              <Image src="/img/student-hero.jpg" alt="" width={730} height={850} />
              <span className="tbig">AI</span>
              <span className="tsub">4 courses &middot; ages 8&ndash;18 and medical doctors</span>
            </a>
            <div className="tile t2 soon">
              <span className="tpill">In development</span>
              <span className="tbig">Design</span>
              <span className="tsub">Visual thinking, digital illustration and design tools</span>
              <a className="tnote" href="mailto:hello@chrysalis.education?subject=Spark%20Design%20%E2%80%94%20register%20interest">Register interest &rarr;</a>
            </div>
            <div className="tile t3 soon">
              <span className="tpill">In development</span>
              <span className="tbig">Music</span>
              <span className="tsub">Production, performance and music technology</span>
              <a className="tnote" href="mailto:hello@chrysalis.education?subject=Spark%20Music%20%E2%80%94%20register%20interest">Register interest &rarr;</a>
            </div>
          </div>
        </section>
        <section className="band shell" id="courses">
          <div className="chead">
            <div>
              <h2 className="sech">AI courses</h2>
              <p className="secsub">Two journeys inside the AI category &mdash; for young builders aged 8&ndash;18, and for medical doctors &mdash; each with a Foundation and an Advanced course.</p>
            </div>
            <span className="cfilter">4 courses &middot; all live online</span>
          </div>
          <div className="ccards">
            <Link className="ccard" href="/spark-foundation">
              <div className="cim" style={{ "--tint": "#F4B740" } as import("react").CSSProperties}>
                <span className="cinit">AI</span>
              </div>
              <div className="cbody">
                <div className="ctop">
                  <span className="ctag">Ages 8&ndash;18</span>
                  <span className="cprice">Starts Jan 2027</span>
                </div>
                <h3>AI Foundation &mdash; build a real, working AI product</h3>
                <div className="cmeta"><span className="d1" />6 weeks<span className="d2" />Live online</div>
                <div className="cfoot">
                  <span className="cnote">Free intro class first</span>
                  <span className="cgo">&rarr;</span>
                </div>
              </div>
            </Link>
            <Link className="ccard" href="/spark-advanced">
              <div className="cim" style={{ "--tint": "#2F7D57" } as import("react").CSSProperties}>
                <span className="cinit">AI+</span>
              </div>
              <div className="cbody">
                <div className="ctop">
                  <span className="ctag">Next level</span>
                  <span className="cprice">Starts Jan 2027</span>
                </div>
                <h3>AI Advanced &mdash; from builder to serious engineer</h3>
                <div className="cmeta"><span className="d1" />Next level<span className="d2" />Live online</div>
                <div className="cfoot">
                  <span className="cnote">Mentored by an AI CTO</span>
                  <span className="cgo">&rarr;</span>
                </div>
              </div>
            </Link>
            <Link className="ccard" href="/spark-medical-foundation">
              <div className="cim" style={{ "--tint": "#C9557B" } as import("react").CSSProperties}>
                <span className="cinit">MD</span>
              </div>
              <div className="cbody">
                <div className="ctop">
                  <span className="ctag">For doctors</span>
                  <span className="cprice">Starts Jan 2027</span>
                </div>
                <h3>Medical AI Innovation &mdash; Foundation</h3>
                <div className="cmeta"><span className="d1" />Intensive<span className="d2" />Live online</div>
                <div className="cfoot">
                  <span className="cnote">Understand, use and build safely</span>
                  <span className="cgo">&rarr;</span>
                </div>
              </div>
            </Link>
            <Link className="ccard" href="/spark-medical-advanced">
              <div className="cim" style={{ "--tint": "#3E5FA8" } as import("react").CSSProperties}>
                <span className="cinit">MD+</span>
              </div>
              <div className="cbody">
                <div className="ctop">
                  <span className="ctag">For doctors</span>
                  <span className="cprice">Starts Jan 2027</span>
                </div>
                <h3>Medical AI Innovation &mdash; Advanced</h3>
                <div className="cmeta"><span className="d1" />Advanced<span className="d2" />Live online</div>
                <div className="cfoot">
                  <span className="cnote">Build and pitch a clinical innovation</span>
                  <span className="cgo">&rarr;</span>
                </div>
              </div>
            </Link>
          </div>
        </section>
        <section className="band shell">
          <div className="closing">
            <div>
              <h2>Spark Pass &mdash; coming soon.</h2>
              <p>Unlimited courses, competitions and webinars on one annual pass. Register your interest and we will tell you the moment it opens.</p>
            </div>
            <a className="btn btn-solid" href="mailto:hello@chrysalis.education?subject=Spark%20Pass%20%E2%80%94%20register%20interest">
              <span>Register interest</span>
              <span className="arrow">&rarr;</span>
            </a>
          </div>
        </section>
        <SiteFooter />
      </div>
    </>
  );
}

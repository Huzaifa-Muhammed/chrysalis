import type { Metadata } from "next";
import Image from "next/image";
import { EdgeRail } from "@/components/edge-rail";
import { OnPageNav } from "@/components/on-page-nav";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import "./about.css";

const onPage = [
  { href: "#the-name", label: "The name" },
  { href: "#every-student-deserves-the-r", label: "About us" },
  { href: "#education-stopped-being-a-co", label: "Why we started" },
  { href: "#three-things-we-do-different", label: "Affordability" },
  { href: "#two-products-one-test", label: "Our products" },
];

export const metadata: Metadata = {
  title: "About",
  description:
    "Excellent education at a price families can sustain. Why Chrysalis exists, how we keep education affordable, and what that looks like across EDU Concierge and Dexter.",
};

export default function AboutPage() {
  return (
    <>
      <div className="pg-about">
        <EdgeRail />
        <SiteHeader />
      </div>
      <OnPageNav items={onPage} />

      <div className="pg-about">
        <section className="pagetop shell split">
          <div className="ptcopy">
            <div className="eyebrow">About Chrysalis Education</div>
            <h1>Excellent education and complete support, designed to be <em>sustainable</em> for families.</h1>
            <p className="lede">That sentence is the whole reason Chrysalis exists. Everything we build is measured against it.</p>
          </div>
          <div className="ptmedia">
            <Image src="/img/about-hero.jpg" width={1500} height={714} alt="A parent and child at home together at a laptop" />
          </div>
        </section>
        <section id="the-name" className="band shell">
          <div className="sechead">
            <span className="secnum">01 &mdash; The name</span>
          </div>
          <h2 className="sech">What Chrysalis Education means.</h2>
          <div className="prose">
            <div>
              <p>A chrysalis is the stage of transformation where a caterpillar develops into a butterfly &mdash; a period of growth, discovery and change before its potential becomes visible.</p>
              <p>For education, it represents our belief that <strong>every learner is in the process of becoming</strong>. Our role is not to define what a child can be, but to create the environment, guidance and opportunities that help them discover and develop their potential.</p>
              <p>Chrysalis is about transformation &mdash; from curiosity to confidence, from learning to capability, and from potential to possibility.</p>
            </div>
            <div className="aside">
              <div className="k">/&#47; In three words</div>
              <p>Curiosity to confidence. Learning to capability. Potential to possibility.</p>
            </div>
          </div>
        </section>
        <section id="every-student-deserves-the-r" className="band shell">
          <div className="sechead">
            <span className="secnum">02 &mdash; About us</span>
          </div>
          <h2 className="sech">Every student deserves the right support to learn, grow and reach their potential.</h2>
          <div className="prose">
            <div>
              <p>Our approach is built on putting students and families first, investing in people and technology, pursuing excellence in everything we do, and thinking beyond the next exam or school year.</p>
              <p>We bring together experienced education professionals, dedicated team members and our own technology to provide personalised, continuous support throughout a child&apos;s educational journey.</p>
              <p>Our goal is simple: to become the trusted education partner families can rely on &mdash; helping every student make meaningful progress, while ensuring that no important part of their educational journey falls through the cracks.</p>
            </div>
            <div className="aside">
              <div className="k">/&#47; What guides us</div>
              <p>Students and families first. Investment in people and technology. Excellence in everything. Thinking beyond the next exam or school year.</p>
            </div>
          </div>
        </section>
        <section id="education-stopped-being-a-co" className="band shell">
          <div className="sechead">
            <span className="secnum">03 &mdash; Why we started</span>
          </div>
          <h2 className="sech">Education stopped being a cost and became a liability.</h2>
          <div className="prose">
            <div>
              <p>Fees compound year after year, with no clear justification and no way to compare. Add tuition, assessments, exam prep and enrichment on top, and a family can spend upwards of <strong>AED 1.5 million</strong> educating one child from primary through university.</p>
              <p>What used to be a straight cost of living has become, for many, a financed liability &mdash; and the trend is climbing. Meanwhile the support that actually helps a child — a person who knows them, a plan built around them, someone following up — has stayed a privilege of families who can afford it privately.</p>
              <p>We didn&apos;t think either of those had to be true.</p>
            </div>
            <div className="aside">
              <div className="k">/&#47; The number</div>
              <p><strong>~AED 1.5M+</strong> is the indicative lifetime education spend for one child, with university. Compiled from public schooling-fee surveys across the GCC, 2024&ndash;2025.</p>
            </div>
          </div>
        </section>
        <section id="three-things-we-do-different" className="band shell">
          <div className="sechead">
            <span className="secnum">04 &mdash; How we keep it affordable</span>
          </div>
          <h2 className="sech">Three things we do differently.</h2>
          <div className="grid3">
            <div className="gcell">
              <h3>We strip out what doesn&apos;t help children learn</h3>
              <p>No campuses to maintain, no overheads that never reach a classroom. What we save goes into teaching, not buildings &mdash; and into the price.</p>
            </div>
            <div className="gcell">
              <h3>We give the essentials away</h3>
              <p>A free tier on Education Concierge. A free Dexter licence for individual tutors, charities and small schools. If you can&apos;t pay yet, you can still start.</p>
            </div>
            <div className="gcell">
              <h3>One price, published, everywhere</h3>
              <p>The same price in every region, stated on the page. No tiered feature-gating, no hidden extras, no quote-on-request for a family.</p>
            </div>
          </div>
          <p className="secsub">Quality is only great when it meets affordability. It&apos;s the one thing we never take our eye off.</p>
        </section>
        <section id="two-products-one-test" className="band shell">
          <div className="sechead">
            <span className="secnum">05 &mdash; What that looks like</span>
          </div>
          <h2 className="sech">Two products, one test.</h2>
          <div className="beliefs">
            <div className="belief">
              <span className="n">/ 01</span>
              <h3>EDU Concierge</h3>
              <p>A dedicated Education Manager, live teaching and assessments from <strong>AED 49 a month</strong> &mdash; roughly a tenth of buying the same support privately. Free tier available.</p>
            </div>
            <div className="belief">
              <span className="n">/ 02</span>
              <h3>Dexter</h3>
              <p>The teaching platform schools licence to replace a stack of consumer apps. <strong>Free forever</strong> for individual tutors, charities and small schools.</p>
            </div>
          </div>
        </section>
        <section id="company" className="band shell">
          <div className="sechead">
            <span className="secnum">06 &mdash; Company</span>
          </div>
          <h2 className="sech">Who we are, formally.</h2>
          <div className="corp">
            <div>
              <span className="ck">Registered</span>
              <p>Chrysalis Education is a company registered in the United Kingdom.</p>
            </div>
            <div>
              <span className="ck">Ownership</span>
              <p>Owned by PowerCourses LLC, United States.</p>
            </div>
            <div>
              <span className="ck">Operations</span>
              <p>Operates internationally through regional partnerships.</p>
            </div>
          </div>
        </section>
        <SiteFooter />
      </div>
    </>
  );
}

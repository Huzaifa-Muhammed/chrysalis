import type { Metadata } from "next";
import Image from "next/image";
import { EdgeRail } from "@/components/edge-rail";
import { OnPageNav } from "@/components/on-page-nav";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import "./careers.css";

const onPage = [
  { href: "#what-it-s-like-to-work-here", label: "Why work here" },
  { href: "#roles", label: "Open roles" },
  { href: "#three-conversations-then-we-", label: "How we hire" },
  { href: "#tell-us-what-you-d-build", label: "Get in touch" },
];

export const metadata: Metadata = {
  title: "Careers",
  description:
    "We're hiring remote Teachers and AI Developers to power EDU Concierge and the Spark AI Program. Fully remote, transparent pay bands, respectful hiring.",
};

export default function CareersPage() {
  return (
    <>
      <div className="pg-careers">
        <EdgeRail />
        <SiteHeader />
      </div>
      <OnPageNav items={onPage} />

      <div className="pg-careers">
        <section className="pagetop shell split">
          <div className="ptcopy">
            <div className="eyebrow">Careers at Chrysalis Education</div>
            <h1>Build the future of <em>learning</em>.</h1>
            <p className="lede">We&apos;re hiring remote Teachers and AI Developers to power EDU Concierge and the Spark AI Program. Work from anywhere — as long as your time zone fits the families and team you support.</p>
            <div className="acts">
              <a className="btn btn-solid" href="#roles">
                <span>See open roles</span>
                <span className="arrow">&rarr;</span>
              </a>
              <a className="btn btn-ghost" href="mailto:careers@chrysalis.education">Email us your CV</a>
            </div>
          </div>
          <div className="ptmedia">
            <Image src="/img/careers-team.jpg" width={1300} height={670} alt="Four Chrysalis Education team members" />
          </div>
        </section>
        <section id="what-it-s-like-to-work-here" className="band shell">
          <div className="sechead">
            <span className="secnum">01 — Why work here</span>
          </div>
          <h2 className="sech">What it&apos;s like to work here.</h2>
          <div className="grid3">
            <div className="gcell">
              <h3>Fully remote</h3>
              <p>Work from wherever you are. Our team spans the UK, UAE, Singapore, India and beyond — as long as your time zone works for the people you support.</p>
            </div>
            <div className="gcell">
              <h3>Real impact, small team</h3>
              <p>Your work reaches families and students directly. No bureaucracy, no busywork — the things you build and teach actually ship and matter.</p>
            </div>
            <div className="gcell">
              <h3>Built for the medium</h3>
              <p>Whether you teach or build, you design for online from scratch — with technology and a platform that actually work.</p>
            </div>
            <div className="gcell">
              <h3>Flexible, predictable hours</h3>
              <p>Full-time or part-time. We publish expectations up front and respect your time outside them.</p>
            </div>
            <div className="gcell">
              <h3>Paid what you&apos;re worth</h3>
              <p>We pay teachers and developers fairly, with transparent pay bands published alongside each role.</p>
            </div>
            <div className="gcell">
              <h3>Learn at the frontier</h3>
              <p>We work with the latest in education and AI. You&apos;ll grow fast, alongside people who care about doing it the right way.</p>
            </div>
          </div>
        </section>
        <section className="band shell" id="roles">
          <div className="sechead">
            <span className="secnum">02 — Open roles</span>
          </div>
          <h2 className="sech">Currently hiring.</h2>
          <p className="secsub">Two roles are open right now — both fully remote. We update this list as positions fill.</p>
          <div className="roles">
            <div className="role">
              <div>
                <h3>Online Teacher</h3>
                <p>Teach live online classes in your specialist subject across major curricula — for EDU Concierge families and Spark AI Program sessions.</p>
                <div className="meta">Remote · Full-time / part-time</div>
              </div>
              <a className="btn btn-solid" href="mailto:careers@chrysalis.education?subject=Application%20-%20Online%20Teacher">
                <span>Apply</span>
                <span className="arrow">&rarr;</span>
              </a>
            </div>
            <div className="role">
              <div>
                <h3>AI Developer</h3>
                <p>Build and ship the tools behind the Spark AI Program and our platform — LLM apps, agents, and learning products that students actually use.</p>
                <div className="meta">Remote · Full-time</div>
              </div>
              <a className="btn btn-solid" href="mailto:careers@chrysalis.education?subject=Application%20-%20AI%20Developer">
                <span>Apply</span>
                <span className="arrow">&rarr;</span>
              </a>
            </div>
          </div>
          <div className="opencall">
            <h3>Don&apos;t see your role?</h3>
            <p>We&apos;re always glad to hear from great teachers and builders. Email your CV and a short note to <a href="mailto:careers@chrysalis.education">careers@chrysalis.education</a>.</p>
          </div>
        </section>
        <section id="three-conversations-then-we-" className="band shell">
          <div className="sechead">
            <span className="secnum">03 — How we hire</span>
          </div>
          <h2 className="sech">Three conversations. Then we decide together.</h2>
          <div className="beliefs">
            <div className="belief">
              <span className="n">/ 01</span>
              <h3>First conversation</h3>
              <p>A 30-minute call with someone on our senior team. Mutual fit — we tell you about Chrysalis; you tell us about your work.</p>
            </div>
            <div className="belief">
              <span className="n">/ 02</span>
              <h3>A role-relevant task</h3>
              <p>A short sample class if you&apos;re a teacher, or a small build or code review if you&apos;re a developer — kept reasonable, and paid where it&apos;s substantial.</p>
            </div>
            <div className="belief">
              <span className="n">/ 03</span>
              <h3>Senior team interview</h3>
              <p>Two members of the founding team, an hour. We talk about what would happen in your first term.</p>
            </div>
          </div>
          <p className="secsub">All written feedback is shared with you — including the reasons if we decide not to proceed. We try to make this the most respectful interview process you&apos;ve been through, regardless of outcome.</p>
        </section>
        <section id="tell-us-what-you-d-build" className="band shell">
          <div className="closing">
            <div>
              <h2>Tell us what you&apos;d build.</h2>
              <p>Two roles open now, both fully remote. If neither fits, send us a note anyway — we keep good people in mind.</p>
            </div>
            <a className="btn btn-solid" href="mailto:careers@chrysalis.education">
              <span>Get in touch</span>
              <span className="arrow">&rarr;</span>
            </a>
          </div>
        </section>
        <SiteFooter />
      </div>
    </>
  );
}

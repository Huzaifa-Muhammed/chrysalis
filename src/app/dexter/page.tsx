import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { DexterAudienceTabs } from "@/components/dexter-audience-tabs";
import { EdgeRail } from "@/components/edge-rail";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { readMore, surfaces, valueColumns, whyPoints } from "@/content/dexter";

export const metadata: Metadata = {
  title: "Dexter — the system designed for 21st century learning",
  description:
    "One coherent system for lessons, content, assessment and engagement, built for how this generation actually learns.",
};

function SectionHead({ num }: { num: string }) {
  return (
    <div className="flex flex-wrap items-baseline gap-5">
      <span className="font-mono text-xs tracking-[2px] text-accent uppercase">{num}</span>
    </div>
  );
}

export default function DexterPage() {
  return (
    <>
      <EdgeRail prospectusHref="mailto:hello@chrysalis.education?subject=Dexter%20prospectus" />
      <SiteHeader brand="dexter" />

      <section className="shell flex flex-col items-center pt-14 pb-[76px] text-center">
        <Link href="/dexter" className="mb-5 inline-flex items-center gap-[11px]">
          <Image src="/img/dexter-mark.png" alt="" width={300} height={309} className="h-auto w-[34px]" />
          <span className="font-display text-[22px] font-bold tracking-[.22em] text-ink">DEXTER</span>
        </Link>
        <div className="mb-5 text-[13px] leading-none font-semibold tracking-[2px] text-accent uppercase">
          A total learning system
        </div>
        <h1 className="max-w-[20ch] font-display text-[clamp(38px,5vw,66px)] leading-[1.04] font-medium tracking-[-.025em] text-balance">
          The system designed for{" "}
          <em className="font-serif font-normal tracking-normal text-accent italic">
            21st century
          </em>{" "}
          learning
        </h1>
        <p className="mx-auto mt-6 max-w-[74ch] text-base leading-[1.75] text-ink-soft">
          Dexter is the teaching and learning layer your school is missing — one coherent system for
          lessons, content, assessment and engagement, built for how this generation actually
          learns.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a
            href="mailto:hello@chrysalis.education?subject=Dexter%20demo"
            className="inline-flex items-center gap-2.5 rounded-full bg-accent px-[26px] py-3.5 font-display text-[13px] font-semibold text-white transition-colors hover:bg-accent-deep"
          >
            <span>Book a demo</span>
            <span>→</span>
          </a>
          <a
            href="#who"
            className="inline-flex items-center rounded-full border border-line px-6 py-[13px] font-display text-[13px] font-semibold transition-colors hover:border-ink"
          >
            See pricing
          </a>
        </div>
      </section>

      <section id="why" className="shell border-t border-line py-[76px] max-[680px]:py-14">
        <SectionHead num="01 — Why Dexter exists" />
        <h2 className="mt-3 max-w-[22ch] font-display text-[clamp(26px,3.1vw,40px)] leading-[1.14] font-semibold tracking-[-.02em] text-balance">
          Learning has changed.
        </h2>

        <figure className="relative mt-9 mb-0">
          <Image
            src="/img/dexter-learner.jpg"
            alt="A student working on a laptop surrounded by notes and devices"
            width={1300}
            height={812}
            className="h-auto max-h-[420px] w-full rounded-[14px] object-cover"
          />
          <figcaption className="mt-3 font-mono text-[11.5px] tracking-[.4px] text-muted-2">
            Five or six apps in one study session, none of which speak to each other.
          </figcaption>
        </figure>

        <div className="mt-[46px] grid grid-cols-3 gap-11 max-[1000px]:grid-cols-1 max-[1000px]:gap-[30px]">
          {whyPoints.map((point) => (
            <div key={point.lead}>
              <p className="font-display text-[19px] leading-[1.32] font-bold tracking-[-.01em] text-pretty text-ink">
                {point.lead}
              </p>
              <p className="mt-3.5 text-[15px] leading-[1.7] text-ink-soft">{point.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="who" className="shell border-t border-line py-[76px] max-[680px]:py-14">
        <SectionHead num="02 — Who Dexter is for" />
        <h2 className="mt-3 max-w-[22ch] font-display text-[clamp(26px,3.1vw,40px)] leading-[1.14] font-semibold tracking-[-.02em] text-balance">
          See how you can innovate with Dexter.
        </h2>
        <DexterAudienceTabs />
      </section>

      <section id="pricing" className="shell border-t border-line py-[76px] max-[680px]:py-14">
        <SectionHead num="03 — What every plan includes" />
        <h2 className="mt-3 max-w-[22ch] font-display text-[clamp(26px,3.1vw,40px)] leading-[1.14] font-semibold tracking-[-.02em] text-balance">
          Every plan ships with the full stack.
        </h2>
        <p className="mt-5 max-w-[66ch] text-[15.5px] leading-[1.85] text-muted">
          <strong className="font-semibold text-ink">Nothing is held back behind a tier.</strong>{" "}
          Tier differences are about scale — students, support level, white-label, integrations —
          not features. Prices sit with each audience above; every plan, free or paid, ships with
          all three surfaces below.
        </p>

        <div className="mt-10 grid grid-cols-3 gap-3.5 max-[1000px]:grid-cols-1">
          {surfaces.map((surface) => (
            <div
              key={surface.title}
              className="rounded-[14px] border border-line bg-white px-[26px] py-7"
            >
              <div className="font-mono text-[11px] tracking-[1.6px] text-muted-2 uppercase">
                {surface.k}
              </div>
              <h3 className="mt-2.5 font-display text-[17px] font-semibold">{surface.title}</h3>
              <p className="mt-2 text-[13px] leading-[1.7] text-muted">{surface.blurb}</p>
              <ul className="mt-4 flex list-none flex-col gap-[9px] p-0">
                {surface.items.map((item) => (
                  <li
                    key={item}
                    className="grid grid-cols-[15px_1fr] gap-[9px] text-[13px] leading-[1.55] text-ink-soft"
                  >
                    <i className="font-bold text-accent not-italic">•</i>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="mt-5 max-w-[66ch] text-[15.5px] leading-[1.85] text-muted">
          <strong className="font-semibold text-ink">Included in every paid plan.</strong> A live
          support desk with a real team answering teacher and student questions in real time — not a
          chatbot, not a ticket queue. And free teacher AI-certification for every teacher on your
          account.{" "}
          <strong className="font-semibold text-ink">
            Charities and small schools use Dexter free.
          </strong>
        </p>
      </section>

      <section id="value" className="shell border-t border-line py-[76px] max-[680px]:py-14">
        <SectionHead num="04 — What Dexter does" />
        <h2 className="mt-3 max-w-[30ch] font-display text-[clamp(26px,3.1vw,40px)] leading-[1.14] font-semibold tracking-[-.02em] text-balance">
          A teacher&rsquo;s day should feel like flying a modern aircraft.
        </h2>
        <p className="mt-5 max-w-[86ch] text-[15.5px] leading-[1.85] text-muted">
          A pilot manages dozens of variables at once, but the cockpit is calm. Every instrument is
          where it should be, critical signals surface automatically, and routine work is handled by
          the systems — so the pilot makes the decisions only a human can make. Teachers deserve the
          same. Here is what that means in practice.
        </p>

        <div className="mt-11 grid grid-cols-3 gap-10 max-[1000px]:grid-cols-1 max-[1000px]:gap-[30px]">
          {valueColumns.map((column) => (
            <div key={column.title}>
              <h3 className="border-b-2 border-accent pb-3.5 font-display text-[17px] font-semibold tracking-[-.01em]">
                {column.title}
              </h3>
              <ul className="mt-5 flex list-none flex-col gap-[15px] p-0">
                {column.items.map((item) => (
                  <li
                    key={item}
                    className="grid grid-cols-[20px_1fr] gap-[11px] text-sm leading-[1.7] text-ink-soft"
                  >
                    <span className="text-sm leading-[1.5] font-bold text-accent">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="mt-5 max-w-[66ch] text-[15.5px] leading-[1.85] text-muted">
          These aren&rsquo;t dashboards we can show fairly on a webpage — they&rsquo;re working
          features in the platform our own school teaches on.{" "}
          <a
            href="mailto:hello@chrysalis.education?subject=Dexter%20demo"
            className="font-semibold text-accent"
          >
            Book a demo to see it →
          </a>
        </p>
      </section>

      <section id="more" className="shell border-t border-line py-[76px] max-[680px]:py-14">
        <SectionHead num="Read next" />
        <h2 className="mt-3 max-w-[22ch] font-display text-[clamp(26px,3.1vw,40px)] leading-[1.14] font-semibold tracking-[-.02em]">
          Read more.
        </h2>

        <div className="mt-11 grid grid-cols-3 gap-[26px] max-[1000px]:grid-cols-1 max-[1000px]:gap-[30px]">
          {readMore.map((item) => (
            <Link key={item.href} href={item.href} className="group flex flex-col gap-4">
              <div className="aspect-video overflow-hidden rounded-xl bg-panel">
                <Image
                  src={item.image}
                  alt={item.alt}
                  width={1100}
                  height={619}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </div>
              <h3 className="font-display text-[19px] leading-[1.32] font-bold tracking-[-.01em] text-ink transition-colors group-hover:text-accent-deep">
                {item.title}
              </h3>
              <span className="mt-auto self-start rounded-md bg-panel px-[13px] py-[7px] text-[12.5px] text-ink-soft">
                {item.tag}
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="shell border-t border-line py-[76px] max-[680px]:py-14">
        <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-[34px] rounded-2xl bg-ink px-[46px] py-[52px] text-white max-[1000px]:grid-cols-1 max-[680px]:px-6 max-[680px]:py-9">
          <div>
            <h2 className="max-w-[20ch] font-display text-[clamp(24px,2.8vw,34px)] leading-[1.16] font-semibold">
              See it running, not described.
            </h2>
            <p className="mt-3 max-w-[52ch] text-[15px] leading-[1.75] text-white/[.72]">
              The signal layer doesn&rsquo;t show fairly on a webpage. Book a demo and we&rsquo;ll
              walk through the platform our own school teaches on. Now licensing across the GCC
              region.
            </p>
          </div>
          <a
            href="mailto:hello@chrysalis.education?subject=Dexter%20demo"
            className="inline-flex items-center gap-2.5 rounded-full bg-white px-[26px] py-3.5 font-display text-[13px] font-semibold whitespace-nowrap text-ink transition-colors hover:bg-accent hover:text-white max-[680px]:w-full max-[680px]:justify-center"
          >
            <span>Book a demo</span>
            <span>→</span>
          </a>
        </div>
      </section>

      <SiteFooter />
    </>
  );
}

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { EdgeRail } from "@/components/edge-rail";
import { SiteHeader } from "@/components/site-header";
import { BenefitsPanel } from "@/components/nova/benefits-panel";
import { CardRail } from "@/components/nova/card-rail";
import { CompareCost } from "@/components/nova/compare-cost";
import { CostPanel } from "@/components/nova/cost-panel";
import { ExperienceMenu } from "@/components/nova/experience-menu";
import { FaqChat } from "@/components/nova/faq-chat";
import { GetStartedFab } from "@/components/nova/get-started-fab";
import { JoinModal } from "@/components/nova/join-modal";
import { NovaOnPageNav } from "@/components/nova/nova-on-page-nav";
import { PlanTable } from "@/components/nova/plan-table";
import {
  conciergeOnPage,
  drivers,
  howWeWork,
  novaFooterColumns,
  steps,
  testimonials,
} from "@/content/concierge";
import { legalNav } from "@/content/nav";

export const metadata: Metadata = {
  title: "EDU Concierge — everything your child needs in one place",
  description:
    "A dedicated Education Manager, live lessons when needed, transparent pricing — all built around your child.",
};

const languages = [
  { label: "English" },
  { label: "Français" },
  { label: "العربية", lang: "ar", dir: "rtl" as const },
  { label: "اردو", lang: "ur", dir: "rtl" as const },
];

const cadence = [
  ["Monthly", "written summary"],
  ["Termly", "review call"],
  ["Anytime", "message your manager"],
  ["As needed", "we flag concerns"],
];

const socials = [
  { href: "#", label: "Instagram", glyph: "◎" },
  { href: "#", label: "LinkedIn", glyph: "in" },
  { href: "#", label: "WhatsApp", glyph: "✆" },
];

const stepTone = {
  us: "bg-coral-lt text-coral-dk",
  you: "bg-nova-panel text-nova-ink-2",
  tier: "bg-nova-ink text-white",
};

export default function ConciergePage() {
  return (
    <div className="bg-nova-page px-[clamp(14px,6.5vw,94px)] pt-[clamp(14px,6.5vw,94px)] pb-[clamp(30px,6vw,80px)] font-nova-body text-nova-ink">
      <div className="mx-auto max-w-[var(--nova-max)] overflow-hidden rounded-[28px] bg-nova-shell">
        <SiteHeader brand="nova" />
        <NovaOnPageNav items={conciergeOnPage} />

        {/* ── Hero ─────────────────────────────────────────────── */}
        <div className="grid grid-cols-[minmax(0,241fr)_minmax(0,581fr)_minmax(0,268fr)] items-start gap-[26px] px-[var(--nova-gut)] pt-[46px] pb-[76px] max-[1100px]:grid-cols-1 max-[1100px]:gap-10">
          <div className="flex flex-col items-start pt-1">
            <Image
              src="/img/ec-mark.png"
              alt=""
              width={300}
              height={303}
              priority
              className="mb-[26px] h-auto w-[78px]"
            />
            <h1 className="mb-5 max-w-[9ch] font-nova-display text-[clamp(28px,2.7vw,38px)] leading-[1.06] font-normal tracking-[-.01em] uppercase">
              Education Concierge
            </h1>
            <p className="mb-[18px] max-w-[24ch] text-base leading-[1.5] text-nova-ink-2">
              Everything your child needs in one place
            </p>
            <ul className="m-0 mb-10 flex list-none flex-wrap gap-[22px] p-0">
              {["Education", "Wellness"].map((tick) => (
                <li
                  key={tick}
                  className="flex items-center gap-[9px] font-nova-display text-[15px] font-medium"
                >
                  <span className="flex h-[22px] w-[22px] items-center justify-center rounded-full bg-coral text-[11px] leading-none font-bold text-white">
                    ✓
                  </span>
                  {tick}
                </li>
              ))}
            </ul>
            <ExperienceMenu />
          </div>

          <div className="relative h-[441px] max-[1100px]:h-[340px]">
            <div className="absolute inset-0 overflow-hidden rounded-[24px] rounded-tl-none bg-nova-panel">
              <Image
                src="/img/hero-family.jpg"
                alt="A mother checking her children's progress on her phone at the kitchen table while they play behind her"
                fill
                priority
                sizes="(max-width: 1100px) 100vw, 581px"
                className="object-cover object-[58%_36%]"
              />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[2] h-40 bg-[linear-gradient(180deg,rgba(24,18,12,0)_0%,rgba(24,18,12,.20)_42%,rgba(24,18,12,.62)_100%)]" />
              {/* The staircase notch cut out of the top-left corner */}
              <div className="absolute -top-0.5 -left-0.5 z-[3] h-[calc(31.7%+2px)] w-[calc(22%+2px)] rounded-br-[24px] bg-nova-shell" />
              <div className="absolute -top-0.5 left-[22%] z-[3] h-[calc(17.5%+2px)] w-[15%] rounded-br-[24px] bg-nova-shell" />
            </div>

            <GlassPill className="top-[44%] -left-4" icon="✓" line1="Maths — on track" line2="Term 2 checkpoint" />
            <GlassPill className="top-[62%] -right-3.5" icon="◆" line1="Progress report" line2="March · sent to parents" />

            <div className="absolute inset-x-6 bottom-5 z-[5] flex items-center gap-[13px]">
              <span className="flex" aria-hidden="true">
                {["avatar-mother", "avatar-boy", "avatar-girl"].map((avatar, index) => (
                  <Image
                    key={avatar}
                    src={`/img/${avatar}.png`}
                    alt=""
                    width={160}
                    height={160}
                    className={`h-[34px] w-[34px] rounded-full border-2 border-white/90 object-cover ${index > 0 ? "-ml-[11px]" : ""}`}
                  />
                ))}
              </span>
              <span className="font-nova-display text-[12.5px] leading-[1.35] font-medium text-white [text-shadow:0_1px_6px_rgba(0,0,0,.35)]">
                More than 1,000 families use EDU Concierge
              </span>
            </div>
          </div>

          <div className="flex flex-col gap-5">
            <div className="relative flex aspect-[730/850] items-center justify-center overflow-hidden rounded-[24px] bg-nova-panel">
              <Image
                src="/img/student-hero.jpg"
                alt="A secondary-school student smiling at his desk"
                fill
                sizes="268px"
                className="object-contain"
              />
              <div className="absolute top-4 right-4 z-[4] flex items-center gap-2.5 rounded-full border border-white/60 bg-white/[.66] py-[7px] pr-[15px] pl-[7px] shadow-[0_8px_26px_rgba(0,0,0,.10)] backdrop-blur-[14px]">
                <span className="flex h-[26px] w-[26px] flex-none items-center justify-center rounded-full bg-white text-xs text-coral">
                  ✻
                </span>
                <span className="font-nova-display text-[12.5px] leading-[1.25] font-medium">
                  One plan, everything in
                </span>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="flex h-16 w-16 flex-none items-center justify-center rounded-full bg-coral text-[22px] text-white">
                ↗
              </span>
              <div>
                <h3 className="mb-[5px] font-nova-display text-base font-medium">
                  Instant progress alerts
                </h3>
                <p className="text-[12.5px] leading-[1.65] text-nova-muted">
                  If a pattern shifts — grades, mood, attendance — we tell you before you&rsquo;d
                  have noticed.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ── Language band — full-bleed dark strip ─────────────── */}
        <section className="bg-nova-ink px-[var(--nova-gut)] py-[34px] text-white">
          <div className="mx-auto grid max-w-[var(--nova-max)] grid-cols-[minmax(0,1fr)_auto] items-center gap-[34px] max-[860px]:grid-cols-1 max-[860px]:gap-5">
            <div>
              <h2 className="font-nova-display text-2xl leading-[1.06] font-normal tracking-[-.01em] text-white uppercase max-[860px]:text-xl">
                Say hello to us — in your language.
              </h2>
              <p className="mt-[9px] max-w-[56ch] text-sm leading-[1.7] text-white/75">
                Our team speaks English, French, Arabic and Urdu, so you can talk about your child
                in the language you think in.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-5">
              <div className="flex flex-wrap gap-2">
                {languages.map((language) => (
                  <span
                    key={language.label}
                    lang={language.lang}
                    dir={language.dir}
                    className="rounded-full border border-white/30 px-[15px] py-2 text-[13.5px] whitespace-nowrap text-white"
                  >
                    {language.label}
                  </span>
                ))}
              </div>
              <Link
                href="/contact"
                className="group inline-flex items-center gap-3 rounded-full border border-white bg-white py-[7px] pr-6 pl-[7px] font-nova-display text-sm font-medium text-nova-ink transition-colors hover:border-coral hover:bg-coral hover:text-white"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-coral text-[15px] text-white group-hover:bg-white/25">
                  ↗
                </span>
                <span>Say hello</span>
              </Link>
            </div>
          </div>
        </section>

        {/* ── What is EC ───────────────────────────────────────── */}
        <section id="included" className="px-[var(--nova-gut)] py-14">
          <div className="grid grid-cols-[minmax(0,.78fr)_minmax(0,1.22fr)] items-stretch gap-[22px] max-[1000px]:grid-cols-1">
            <div className="rounded-[24px] bg-white p-9 max-[680px]:p-6">
              <div className="flex items-start justify-between gap-[18px]">
                <h2 className="font-nova-display text-[clamp(24px,2.5vw,34px)] leading-[1.06] font-normal tracking-[-.01em] uppercase">
                  What is <span className="text-coral">Education Concierge</span>
                </h2>
                <span className="flex-none text-xl">↗</span>
              </div>
              <p className="mt-4 max-w-[34ch] text-[15.5px] leading-[1.55] text-nova-ink">
                Think of it as a relationship manager for your child&rsquo;s education.
              </p>
              <div className="relative mt-[22px] h-[190px] overflow-hidden rounded-[18px] bg-nova-panel">
                <Image
                  src="/img/what-is-ec.jpg"
                  alt="An Education Manager at her desk in a Chrysalis Education office"
                  fill
                  sizes="(max-width: 1000px) 100vw, 34vw"
                  className="object-cover object-[50%_34%]"
                />
              </div>
              <p className="mt-[22px] text-[13.5px] leading-[1.75] text-nova-muted">
                Education Concierge is a new way to support your child&rsquo;s education. For the
                first time, we bring together a dedicated Education Manager, a team of educational
                experts and the essential services your child needs — all under one programme.
              </p>
            </div>
            <BenefitsPanel />
          </div>
        </section>

        {/* ── The problem ──────────────────────────────────────── */}
        <section id="problem" className="bg-nova-band px-[var(--nova-gut)] py-[76px]">
          <span className="inline-flex items-center gap-[7px] self-start rounded-full bg-coral px-4 py-2 font-nova-display text-xs font-medium tracking-[1.4px] text-white uppercase">
            The problem
          </span>
          <div className="mt-[38px] grid grid-cols-4 gap-4 max-[1000px]:grid-cols-2 max-[680px]:grid-cols-1">
            {drivers.map((driver) => (
              <div key={driver.n} className="border-t-2 border-nova-line pt-3.5">
                <div className="font-nova-display text-[11px] tracking-[1.6px] text-nova-muted-2">
                  {driver.n}
                </div>
                <h3 className="mt-1.5 mb-[5px] font-nova-display text-[14.5px] font-medium tracking-[-.01em]">
                  {driver.title}
                </h3>
                <p className="text-xs leading-[1.6] text-nova-muted">{driver.body}</p>
              </div>
            ))}
          </div>
          <CostPanel />
        </section>

        {/* ── How we work ──────────────────────────────────────── */}
        <section id="trust" className="bg-nova-band px-[var(--nova-gut)] py-[76px]">
          <CardRail title="How we work" lede="The people around your child, and the rules they work to.">
            {howWeWork.map((card) => (
              <div
                key={card.title}
                className="flex w-[286px] flex-none snap-start flex-col rounded-[24px] bg-white px-[26px] py-7 transition-shadow hover:shadow-[0_10px_28px_rgba(0,0,0,.06)] max-[680px]:w-[84vw]"
              >
                <span className="font-nova-display text-[10.5px] tracking-[1.8px] text-coral uppercase">
                  {card.k}
                </span>
                <h3 className="mt-2.5 font-nova-display text-[17px] leading-[1.3] font-medium tracking-[-.01em]">
                  {card.title}
                </h3>
                <p className="mt-2.5 text-[13.5px] leading-[1.72] text-nova-muted">{card.body}</p>
              </div>
            ))}
          </CardRail>

          <div className="mt-[22px] flex flex-wrap gap-2 border-t border-nova-line pt-[18px]">
            {cadence.map(([when, what]) => (
              <span
                key={when}
                className="rounded-full bg-nova-band px-3.5 py-2 text-[12.5px] text-nova-muted"
              >
                <b className="font-nova-display text-[10.5px] font-semibold tracking-[1.4px] text-nova-ink uppercase">
                  {when}
                </b>{" "}
                {what}
              </span>
            ))}
          </div>
        </section>

        {/* ── Testimonials ─────────────────────────────────────── */}
        <section id="voices" className="bg-nova-band px-[var(--nova-gut)] py-[76px]">
          <CardRail
            title="What families say"
            lede="Real words from parents and students in the programme."
            footer={<GetStartedPill />}
          >
            {testimonials.map((item) => (
              <figure
                key={item.name}
                className="m-0 flex w-[300px] flex-none snap-start flex-col rounded-[24px] bg-white px-7 pt-[30px] pb-[26px] max-[680px]:w-[84vw]"
              >
                <span className="font-nova-display text-[40px] leading-[.7] text-coral">“</span>
                <blockquote className="m-0 mt-3.5 flex-1 text-[14.5px] leading-[1.75] text-nova-ink-2">
                  {item.quote}
                </blockquote>
                <figcaption className="mt-4 flex items-center gap-3 border-t border-nova-line pt-4">
                  <span className="flex h-[38px] w-[38px] flex-none items-center justify-center rounded-full bg-nova-band font-nova-display text-[13px] font-semibold">
                    {item.initials}
                  </span>
                  <span className="font-nova-display text-sm leading-[1.3] font-semibold">
                    {item.name}
                    {item.place ? (
                      <small className="mt-0.5 block font-nova-body text-[11.5px] font-normal text-nova-muted">
                        {item.place}
                      </small>
                    ) : null}
                  </span>
                </figcaption>
              </figure>
            ))}
          </CardRail>

          <p className="mt-6 text-[13px] leading-[1.8] text-nova-muted">
            Happy to hear it from them directly? We can invite you to one of our family meets.{" "}
            <a
              href="mailto:concierge@chrysalis.education?subject=Join%20a%20family%20meet"
              className="font-semibold text-coral"
            >
              Ask us about the next one →
            </a>
          </p>
        </section>

        {/* ── Plans ────────────────────────────────────────────── */}
        <section id="plans" className="px-[var(--nova-gut)] py-[76px]">
          <div className="mb-8 flex flex-col items-center gap-5 text-center">
            <h2 className="max-w-[22ch] font-nova-display text-[clamp(24px,2.5vw,34px)] leading-[1.06] font-normal tracking-[-.01em] uppercase">
              Find the right plan for you
            </h2>
            <CompareCost />
            <p className="inline-flex items-center gap-2 text-[12.5px] text-nova-muted">
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-coral text-[10px] text-white">
                ✓
              </span>
              Start with confidence — you can cancel within 14 days for a full refund.
            </p>
          </div>

          <PlanTable />

          <p className="mt-[22px] max-w-[78ch] text-[13.5px] leading-[1.8] text-nova-muted">
            On foundation hours alone, Base costs a fraction of buying the same teaching privately —
            six hours a month runs AED 480–900 at AED 80–150 an hour, and about AED 900 at the AED
            150 mid-market rate. Use the comparison above to check your own numbers. Curriculums
            covered: British (IGCSE / A-Level), Cambridge, Edexcel,
            Oxford AQA, CBSE, ICSE, American, AP, IB Diploma, and more on request.
          </p>

          <Link
            href="/concierge-detail"
            className="mt-4 inline-block text-[13.5px] font-medium text-coral underline underline-offset-4"
          >
            See full plan details →
          </Link>
        </section>

        {/* ── Getting started ──────────────────────────────────── */}
        <section id="how" className="bg-nova-band px-[var(--nova-gut)] py-[76px]">
          <CardRail
            title="Getting started"
            lede="Six steps, and we do most of them. From signing up to your first learning track, the work is on our side."
            footer={<GetStartedPill />}
          >
            {steps.map((step) => (
              <div
                key={step.n}
                className="flex w-[258px] flex-none snap-start flex-col rounded-[24px] bg-white px-6 pt-[26px] pb-[22px] transition-shadow hover:shadow-[0_10px_28px_rgba(0,0,0,.06)] max-[680px]:w-[84vw]"
              >
                <span className="flex h-[38px] w-[38px] items-center justify-center rounded-full bg-coral font-nova-display text-[15px] font-semibold text-white">
                  {step.n}
                </span>
                <h3 className="mt-3.5 font-nova-display text-[17px] font-medium tracking-[-.01em]">
                  {step.title}
                </h3>
                <p className="mt-2.5 flex-1 text-[13px] leading-[1.7] text-nova-muted">
                  {step.body}
                </p>
                <span
                  className={`mt-5 self-start rounded-full px-3 py-1.5 font-nova-display text-[10.5px] tracking-[1.4px] uppercase ${stepTone[step.tone]}`}
                >
                  {step.who}
                </span>
              </div>
            ))}
          </CardRail>
        </section>

        {/* ── FAQ ──────────────────────────────────────────────── */}
        <section id="faq" className="overflow-hidden bg-[#D9B293] px-[var(--nova-gut)] py-14">
          <div className="grid grid-cols-[minmax(0,1fr)_minmax(0,.72fr)] items-stretch gap-11 max-[900px]:grid-cols-1 max-[900px]:gap-7">
            <div className="flex flex-col items-center">
              <h2 className="text-center font-nova-display text-[clamp(24px,2.5vw,34px)] leading-[1.06] font-normal tracking-[-.01em] uppercase">
                What families ask
              </h2>
              <FaqChat />
            </div>
            {/* The photo bleeds off the right edge of the shell, as in the design. */}
            <div className="relative -my-14 -mr-[var(--nova-gut)] overflow-hidden max-[900px]:m-0 max-[900px]:aspect-[16/11]">
              <Image
                src="/img/family.jpg"
                alt="A family of four smiling together"
                fill
                sizes="(max-width: 900px) 100vw, 40vw"
                className="object-cover object-[50%_30%]"
              />
            </div>
          </div>
        </section>

        <NovaFooter />
      </div>

      <EdgeRail prospectusHref="mailto:concierge@chrysalis.education?subject=Prospectus%20request" />
      <GetStartedFab />
      <JoinModal />
    </div>
  );
}

/** The Get Started pill that closes each card rail. */
function GetStartedPill() {
  return (
    <a
      href="#get-started"
      data-join="Not sure yet"
      className="inline-flex items-center gap-2.5 rounded-full bg-white py-2.5 pr-5 pl-2.5 font-nova-display text-[13px] font-semibold transition-colors hover:bg-coral hover:text-white"
    >
      <span className="flex h-7 w-7 items-center justify-center rounded-full bg-coral text-[13px] text-white">
        ↗
      </span>
      <span>Get Started</span>
    </a>
  );
}

function GlassPill({
  className,
  icon,
  line1,
  line2,
}: {
  className: string;
  icon: string;
  line1: string;
  line2: string;
}) {
  return (
    <div
      className={`absolute z-[4] flex items-center gap-2.5 rounded-full border border-white/60 bg-white/[.66] py-2 pr-[17px] pl-2 shadow-[0_8px_26px_rgba(0,0,0,.10)] backdrop-blur-[14px] ${className}`}
    >
      <span className="flex h-[26px] w-[26px] flex-none items-center justify-center rounded-full bg-white text-xs text-coral">
        {icon}
      </span>
      <span>
        <span className="block font-nova-display text-[12.5px] leading-[1.25] font-medium">
          {line1}
        </span>
        <span className="block text-[10.5px] leading-[1.3] text-nova-muted">{line2}</span>
      </span>
    </div>
  );
}

/** Nova carries its own footer — same information, the coral system's type. */
function NovaFooter() {
  return (
    <footer className="border-t border-nova-line px-[var(--nova-gut)] pt-[52px] pb-9">
      <div className="grid grid-cols-[minmax(0,1.5fr)_repeat(3,minmax(0,auto))] items-start gap-10 max-[1000px]:grid-cols-2 max-[680px]:grid-cols-1 max-[680px]:gap-8">
        <div className="flex max-w-[340px] flex-col">
          <Link href="/">
            <Image
              src="/img/chrysalis-logo.png"
              alt="Chrysalis Education"
              width={720}
              height={360}
              className="h-8 w-auto max-w-[180px] object-contain object-left"
            />
          </Link>
          <p className="mt-3.5 max-w-[32ch] text-[12.5px] leading-[1.7] text-nova-muted">
            An online education concierge service. A dedicated Education Manager, live lessons when
            needed, transparent pricing — all built around your child.
          </p>
          <div className="mt-[18px] flex gap-[9px]">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="flex h-8 w-8 items-center justify-center rounded-full border border-nova-line text-xs transition-colors hover:border-nova-ink hover:text-coral"
              >
                {social.glyph}
              </a>
            ))}
          </div>
        </div>

        {novaFooterColumns.map((column) => (
          <div key={column.heading}>
            <h4 className="mb-3 font-nova-display text-[12.5px] font-semibold">{column.heading}</h4>
            <div className="flex flex-col gap-[9px]">
              {column.links.map((link) => (
                <Link
                  key={`${link.href}-${link.label}`}
                  href={link.href}
                  className="text-[12.5px] text-nova-muted transition-colors hover:text-coral"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-[38px] flex flex-wrap items-center justify-between gap-3.5 border-t border-nova-line pt-5 text-[12.5px] text-nova-muted-2">
        <div>EDU Concierge is a Chrysalis Education product. © 2026.</div>
        <nav aria-label="Legal" className="flex flex-wrap gap-5">
          {legalNav.slice(0, 2).map((link) => (
            <Link key={link.href} href={link.href} className="transition-colors hover:text-coral">
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}

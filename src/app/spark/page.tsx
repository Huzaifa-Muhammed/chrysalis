import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { EdgeRail } from "@/components/edge-rail";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "Spark — turning curiosity into capability",
  description:
    "Short, live learning experiences built around the skills that matter — creativity, technology, communication, entrepreneurship and AI.",
};

/** Courses start January 2027 and prices are deliberately not shown on the hub. */
const courses = [
  {
    href: "/spark/ai-foundation",
    tint: "#F4B740",
    initials: "AI",
    tag: "Ages 8–18",
    price: "Starts Jan 2027",
    title: "AI Foundation — build a real, working AI product",
    meta: ["6 weeks", "Live online"],
    note: "Free intro class first",
  },
  {
    href: "/spark/ai-advanced",
    tint: "#2F7D57",
    initials: "AI+",
    tag: "Next level",
    price: "Starts Jan 2027",
    title: "AI Advanced — from builder to serious engineer",
    meta: ["Next level", "Live online"],
    note: "Mentored by an AI CTO",
  },
  {
    href: "/spark/medical-foundation",
    tint: "#C9557B",
    initials: "MD",
    tag: "For doctors",
    price: "Starts Jan 2027",
    title: "Medical AI Innovation — Foundation",
    meta: ["Intensive", "Live online"],
    note: "Understand, use and build safely",
  },
  {
    href: "/spark/medical-advanced",
    tint: "#3E5FA8",
    initials: "MD+",
    tag: "For doctors",
    price: "Starts Jan 2027",
    title: "Medical AI Innovation — Advanced",
    meta: ["Advanced", "Live online"],
    note: "Build and pitch a clinical innovation",
  },
];

const upcoming = [
  {
    bg: "#FD995D",
    title: "Design",
    sub: "Visual thinking, digital illustration and design tools",
    mailto:
      "mailto:hello@chrysalis.education?subject=Spark%20Design%20%E2%80%94%20register%20interest",
  },
  {
    bg: "#BBD4ED",
    title: "Music",
    sub: "Production, performance and music technology",
    mailto:
      "mailto:hello@chrysalis.education?subject=Spark%20Music%20%E2%80%94%20register%20interest",
  },
];

export default function SparkPage() {
  return (
    <>
      <EdgeRail />
      <SiteHeader />

      <section className="wrap grid grid-cols-[minmax(0,1.04fr)_minmax(0,1fr)] items-start gap-14 pt-[34px] pb-16 max-[1000px]:grid-cols-1 max-[1000px]:gap-6">
        <div>
          <div className="mb-[22px] text-[13px] leading-none font-semibold tracking-[2px] text-muted-3 uppercase">
            Spark · Why we do this
          </div>
          <h1 className="max-w-[16ch] font-display text-[clamp(30px,3.4vw,44px)] leading-[1.06] font-medium tracking-[-.025em] text-balance">
            All it takes is a Spark to turn curiosity into{" "}
            <em className="font-serif font-normal tracking-normal italic">capability</em>.
          </h1>
        </div>
        <div>
          <p className="mb-[18px] max-w-[58ch] text-base leading-[1.75] text-ink-soft">
            As we grow, curiosity often gets replaced by routine, creativity by conformity, and
            interests are put aside because there simply isn&rsquo;t enough time to explore them.
          </p>
          <p className="max-w-[58ch] text-base leading-[1.75] text-ink-soft">
            Spark is about bringing that curiosity back. We create short, live learning experiences
            designed around skills that matter — from creativity and technology to communication,
            entrepreneurship, AI and other emerging areas. Each program is focused, practical and
            designed to help learners discover something new, build a skill and, perhaps, discover
            something about themselves along the way.
          </p>
        </div>
      </section>

      <section className="wrap pt-1">
        <div className="grid grid-cols-3 gap-[18px] max-[1000px]:grid-cols-1 max-[1000px]:gap-3.5">
          <a
            href="#courses"
            className="relative flex min-h-[250px] flex-col rounded-[18px] bg-[#C3F499] p-[22px] pr-[50%] transition-[transform,box-shadow] duration-200 hover:-translate-y-[3px] hover:shadow-[0_18px_42px_rgba(30,20,50,.14)] max-[1000px]:min-h-[210px]"
          >
            <span className="relative z-[2] flex h-[34px] w-[34px] items-center justify-center rounded-full bg-white/90 text-[15px] text-ink">
              ↗
            </span>
            <Image
              src="/img/student-hero.jpg"
              alt=""
              width={730}
              height={850}
              className="absolute top-5 right-[18px] aspect-[4/3] w-[46%] rounded-xl object-cover shadow-[0_8px_22px_rgba(0,0,0,.14)]"
            />
            <span className="relative z-[2] mt-auto font-display text-[46px] leading-none font-semibold tracking-[-.02em] text-[#1D3B22]">
              AI
            </span>
            <span className="relative z-[2] mt-2 mb-3.5 max-w-[30ch] text-[12.5px] leading-[1.6] text-ink/70">
              4 courses · ages 8–18 and medical doctors
            </span>
          </a>

          {upcoming.map((tile) => (
            <div
              key={tile.title}
              className="relative flex min-h-[250px] flex-col rounded-[18px] p-[22px] max-[1000px]:min-h-[210px]"
              style={{ background: tile.bg }}
            >
              <span className="relative z-[2] self-start rounded-full bg-white/[.92] px-[13px] py-1.5 font-mono text-[10px] tracking-[1.4px] text-ink uppercase">
                In development
              </span>
              <span className="relative z-[2] mt-3.5 font-display text-[40px] leading-none font-semibold tracking-[-.02em] text-ink">
                {tile.title}
              </span>
              <span className="relative z-[2] mt-2 mb-3.5 max-w-[30ch] text-[12.5px] leading-[1.6] text-ink/70">
                {tile.sub}
              </span>
              <a
                href={tile.mailto}
                className="relative z-[2] mt-auto self-start border-b-[1.5px] border-ink/35 pb-0.5 font-display text-[13px] font-semibold text-ink transition-colors hover:border-ink"
              >
                Register interest →
              </a>
            </div>
          ))}
        </div>
      </section>

      <section id="courses" className="wrap mt-[76px] border-t border-line py-[76px] max-[680px]:py-14">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <h2 className="max-w-[22ch] font-display text-[clamp(26px,3.1vw,40px)] leading-[1.14] font-semibold tracking-[-.02em] text-balance">
              AI courses
            </h2>
            <p className="mt-[18px] max-w-[64ch] text-[15px] leading-[1.8] text-muted">
              Two journeys inside the AI category — for young builders aged 8–18, and for medical
              doctors — each with a Foundation and an Advanced course.
            </p>
          </div>
          <span className="rounded-full border border-line bg-white px-4 py-[9px] font-mono text-[11px] tracking-[1.6px] text-muted-2 uppercase">
            4 courses · all live online
          </span>
        </div>

        <div className="mt-9 grid grid-cols-3 gap-6 max-[1000px]:grid-cols-2 max-[680px]:grid-cols-1">
          {courses.map((course) => (
            <Link
              key={course.href}
              href={course.href}
              className="group flex flex-col overflow-hidden rounded-2xl border border-line bg-white transition-[transform,box-shadow,border-color] duration-200 hover:-translate-y-[3px] hover:border-transparent hover:shadow-[0_16px_38px_rgba(30,20,50,.10)]"
            >
              <div
                className="flex aspect-video items-center justify-center"
                style={{ background: course.tint }}
              >
                <span className="font-display text-[34px] font-bold tracking-[.06em] text-white">
                  {course.initials}
                </span>
              </div>
              <div className="flex flex-1 flex-col px-5 pt-[18px] pb-5">
                <div className="flex items-center justify-between gap-3">
                  <span className="rounded-full bg-[#FBEFE8] px-[11px] py-[5px] font-mono text-[10px] tracking-[1.4px] text-terracotta uppercase">
                    {course.tag}
                  </span>
                  <span className="font-mono text-[10.5px] font-medium tracking-[1.3px] whitespace-nowrap text-plum uppercase">
                    {course.price}
                  </span>
                </div>
                <h3 className="mt-[13px] font-display text-[16.5px] leading-[1.34] font-semibold tracking-[-.01em] text-ink">
                  {course.title}
                </h3>
                <div className="mt-3 flex items-center gap-2 text-[12.5px] text-muted">
                  <span className="h-[7px] w-[7px] flex-none rounded-full bg-terracotta" />
                  {course.meta[0]}
                  <span className="ml-2 h-[7px] w-[7px] flex-none rounded-full bg-amber" />
                  {course.meta[1]}
                </div>
                <div className="mt-auto flex items-center justify-between gap-3 border-t border-line pt-4">
                  <span className="text-xs text-muted-2">{course.note}</span>
                  <span className="flex h-8 w-8 flex-none items-center justify-center rounded-full bg-plum text-sm text-white transition-[transform,background] duration-200 group-hover:translate-x-[3px] group-hover:bg-terracotta">
                    →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="wrap border-t border-line py-[76px] max-[680px]:py-14">
        <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-9 rounded-2xl bg-plum px-12 py-14 text-white max-[1000px]:grid-cols-1 max-[1000px]:gap-[22px] max-[680px]:px-[26px] max-[680px]:py-[38px]">
          <div>
            <h2 className="max-w-[20ch] font-display text-[clamp(24px,2.8vw,34px)] leading-[1.16] font-semibold tracking-[-.02em]">
              Spark Pass — coming soon.
            </h2>
            <p className="mt-3.5 max-w-[52ch] text-[15px] leading-[1.75] text-white/[.78]">
              Unlimited courses, competitions and webinars on one annual pass. Register your
              interest and we will tell you the moment it opens.
            </p>
          </div>
          <a
            href="mailto:hello@chrysalis.education?subject=Spark%20Pass%20%E2%80%94%20register%20interest"
            className="inline-flex items-center gap-3.5 rounded-[2px] bg-white px-[30px] py-4 font-display text-[15px] font-semibold whitespace-nowrap text-plum transition-colors hover:bg-amber hover:text-ink max-[680px]:w-full max-[680px]:justify-center"
          >
            <span>Register interest</span>
            <span className="text-[17px]">→</span>
          </a>
        </div>
      </section>

      <SiteFooter />
    </>
  );
}

import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";
import { EdgeRail } from "@/components/edge-rail";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "Contact us",
  description:
    "Tell us where your child is now and where you're trying to get to. We'll be honest about whether we can help.",
};

const languages = [
  { label: "English" },
  { label: "Français" },
  { label: "العربية", lang: "ar", dir: "rtl" as const },
  { label: "اردو", lang: "ur", dir: "rtl" as const },
];

const contacts = [
  { term: "General", email: "hello@chrysalis.education", href: "mailto:hello@chrysalis.education" },
  {
    term: "EDU Concierge",
    email: "concierge@chrysalis.education",
    href: "mailto:concierge@chrysalis.education",
  },
  {
    term: "Schools & Dexter",
    email: "hello@chrysalis.education",
    href: "mailto:hello@chrysalis.education?subject=Dexter%20enquiry",
  },
  {
    term: "Careers",
    email: "careers@chrysalis.education",
    href: "mailto:careers@chrysalis.education",
  },
];

export default function ContactPage() {
  return (
    <>
      <EdgeRail />
      <SiteHeader />

      <section className="bg-plum pt-16 pb-[150px] text-center text-white max-[680px]:pt-12 max-[680px]:pb-[130px]">
        <div className="shell">
          <div className="mb-[18px] text-[13px] leading-none font-semibold tracking-[2px] text-amber uppercase">
            Chrysalis Education
          </div>
          <h1 className="font-display text-[clamp(42px,6vw,76px)] leading-[1.02] font-semibold tracking-[-.03em]">
            Contact us
          </h1>
          <p className="mx-auto mt-[22px] max-w-[56ch] text-base leading-[1.7] text-white/[.78]">
            Tell us where your child is now and where you&rsquo;re trying to get to. We&rsquo;ll be
            honest about whether we can help.
          </p>
        </div>
      </section>

      <section className="shell">
        <div className="mt-[-110px] mb-[84px] grid grid-cols-[minmax(0,.85fr)_minmax(0,1fr)] items-start gap-14 rounded-[18px] bg-white px-12 py-[52px] shadow-[0_24px_60px_rgba(30,20,50,.16)] max-[1000px]:mt-[-90px] max-[1000px]:grid-cols-1 max-[1000px]:gap-10 max-[1000px]:px-7 max-[1000px]:py-[38px] max-[680px]:mb-14 max-[680px]:px-5 max-[680px]:py-[30px]">
          <div>
            <h2 className="font-display text-xl font-semibold tracking-[-.01em]">Talk to us now</h2>
            <div className="mt-[18px] flex flex-col gap-3">
              {/* WhatsApp number is a placeholder in the source build. */}
              <a
                href="https://wa.me/9710000000000?text=Hi%20Chrysalis%2C%20I%27d%20like%20to%20ask%20about%20"
                className="flex w-full cursor-pointer items-center gap-3.5 rounded-xl border border-line bg-white px-[18px] py-[15px] text-left transition-[border-color,background,transform] duration-200 hover:-translate-y-px hover:border-plum hover:bg-cream"
              >
                <span className="flex h-[38px] w-[38px] flex-none items-center justify-center rounded-full bg-[#25D366] text-base text-white">
                  ☎
                </span>
                <span>
                  <b className="block font-display text-[15px] font-semibold text-ink">WhatsApp</b>
                  <small className="mt-0.5 block text-[12.5px] text-muted">
                    Fastest reply during working hours
                  </small>
                </span>
              </a>
              <a
                href="/contact#chat"
                className="flex w-full cursor-pointer items-center gap-3.5 rounded-xl border border-line bg-white px-[18px] py-[15px] text-left transition-[border-color,background,transform] duration-200 hover:-translate-y-px hover:border-plum hover:bg-cream"
              >
                <span className="flex h-[38px] w-[38px] flex-none items-center justify-center rounded-full bg-plum text-base text-white">
                  💬
                </span>
                <span>
                  <b className="block font-display text-[15px] font-semibold text-ink">Live chat</b>
                  <small className="mt-0.5 block text-[12.5px] text-muted">
                    Chat with the team in your browser
                  </small>
                </span>
              </a>
            </div>

            <h2 className="mt-9 font-display text-xl font-semibold tracking-[-.01em]">
              Say hello in your language
            </h2>
            <p className="mt-3.5 text-sm leading-[1.8] text-muted">
              Our team speaks English, French, Arabic and Urdu — tell us which you prefer and we
              will match you.
            </p>
            <div className="mt-3.5 flex flex-wrap gap-2">
              {languages.map((language) => (
                <span
                  key={language.label}
                  lang={language.lang}
                  dir={language.dir}
                  className="rounded-full border border-line bg-white px-[15px] py-2 text-[13.5px] whitespace-nowrap text-ink"
                >
                  {language.label}
                </span>
              ))}
            </div>

            <h2 className="mt-9 font-display text-xl font-semibold tracking-[-.01em]">
              Contact information
            </h2>
            <dl className="mt-4 grid grid-cols-[auto_1fr] items-baseline gap-x-5 gap-y-2.5 max-[680px]:grid-cols-1 max-[680px]:gap-0">
              {contacts.map((contact) => (
                <div key={contact.term} className="contents max-[680px]:block max-[680px]:mb-2.5">
                  <dt className="font-mono text-[10.5px] tracking-[1.6px] text-muted-3 uppercase">
                    {contact.term}
                  </dt>
                  <dd className="m-0 text-sm">
                    <a href={contact.href} className="font-semibold text-plum hover:underline">
                      {contact.email}
                    </a>
                  </dd>
                </div>
              ))}
            </dl>

            <h2 className="mt-9 font-display text-xl font-semibold tracking-[-.01em]">
              Where we are
            </h2>
            <p className="mt-3.5 text-sm leading-[1.8] text-muted">
              Fully online, worldwide — with a team across the GCC and beyond.
              <br />
              We reply to enquiries within two working days. Members hear from their Education
              Manager sooner.
            </p>
          </div>

          <div>
            <h2 className="mb-6 text-center font-display text-2xl font-semibold tracking-[-.02em]">
              Ask us anything
            </h2>
            <ContactForm />
          </div>
        </div>
      </section>

      <SiteFooter />
    </>
  );
}

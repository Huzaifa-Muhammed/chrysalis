import Image from "next/image";
import Link from "next/link";
import { EdgeRail } from "@/components/edge-rail";
import { OnPageNav } from "@/components/on-page-nav";
import { ProductCards } from "@/components/product-cards";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

const onPage = [
  { href: "#a-trusted-partner-for-families", label: "Who we are" },
  { href: "#our-products-and-services", label: "Products" },
  { href: "#we-are-here-for-you", label: "Contact" },
];

export default function HomePage() {
  return (
    <div className="bg-white">
      <EdgeRail />
      <SiteHeader />
      <OnPageNav items={onPage} />

      <section className="wrap pt-[26px] pb-[92px] max-[680px]:pb-14">
        <div className="relative isolate flex min-h-[clamp(460px,46vw,600px)] items-start overflow-hidden rounded-[16px] bg-[#2A2D33] max-[1000px]:items-end max-[680px]:min-h-[520px] max-[680px]:rounded-[14px]">
          <Image
            src="/img/family-hero.jpg"
            alt="A family together at home"
            width={1200}
            height={820}
            priority
            className="absolute inset-0 -z-20 h-full w-full object-cover object-[center_30%] max-[680px]:object-[50%_20%]"
          />
          <span
            aria-hidden
            className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_52%_62%_at_0%_0%,rgba(20,20,26,.72)_0%,rgba(20,20,26,.42)_55%,rgba(20,20,26,0)_100%)] max-[1000px]:bg-[linear-gradient(0deg,rgba(20,20,26,.78)_0%,rgba(20,20,26,.35)_40%,rgba(20,20,26,0)_62%)]"
          />
          <div className="relative w-[min(420px,36%)] pt-[52px] pl-[56px] max-[1000px]:w-auto max-[1000px]:px-9 max-[1000px]:pt-0 max-[1000px]:pb-10 max-[680px]:px-[22px] max-[680px]:pb-7">
            <h1 className="font-display text-[clamp(36px,4.2vw,60px)] leading-[1.04] font-semibold tracking-[-.03em] text-balance text-white [text-shadow:0_2px_24px_rgba(0,0,0,.18)]">
              Education <br className="max-[1000px]:hidden" />
              built around <br className="max-[1000px]:hidden" />
              <em className="font-serif font-normal tracking-normal italic">you</em>.
            </h1>
          </div>
        </div>
      </section>

      <section id="a-trusted-partner-for-families" className="wrap pt-2 pb-[84px]">
        <div className="grid grid-cols-[minmax(0,.82fr)_minmax(0,1fr)] items-start gap-[60px] max-[1000px]:grid-cols-1 max-[1000px]:gap-6">
          <h2 className="max-w-[14ch] font-display text-[clamp(26px,3.1vw,38px)] leading-[1.2] font-normal tracking-[-.02em] text-ink-soft">
            A trusted partner for families
          </h2>
          <div>
            <p className="mb-[18px] max-w-[62ch] text-[15px] leading-[1.85] text-muted">
              Education today is expensive, fragmented and difficult to navigate. Families are
              expected to hold it all together themselves — the school, tutors, assessments, exam
              preparation and everything in between — while managing work, family life and a job
              market that keeps changing.
            </p>
            <p className="mb-[18px] max-w-[62ch] text-[15px] leading-[1.85] text-muted">
              We bring it all together under one roof: the experts, the resources and the
              technology, working from the same picture and around the needs of each student.
            </p>
            <p className="max-w-[62ch] text-[15px] leading-[1.85] text-muted">
              <strong className="font-semibold text-ink">
                Our membership is priced so that getting the right support for your child does not
                become another financial burden.
              </strong>
            </p>
            <Link
              href="/about"
              className="group mt-1.5 flex max-w-[62ch] items-baseline gap-3.5 border-t border-line pt-4 pb-1 text-ink max-[680px]:grid max-[680px]:grid-cols-[1fr_auto] max-[680px]:items-end max-[680px]:gap-x-3"
            >
              <span className="flex-none font-mono text-[11px] tracking-[2px] text-plum uppercase max-[680px]:col-span-full">
                About us
              </span>
              <span className="font-serif text-[19px] leading-[1.3] italic underline decoration-transparent underline-offset-4 transition-colors group-hover:decoration-current max-[680px]:text-lg">
                Why Chrysalis exists, and how we keep it affordable
              </span>
              <span aria-hidden className="text-base text-plum transition-transform duration-[250ms] group-hover:translate-x-[5px]">
                →
              </span>
            </Link>
          </div>
        </div>
      </section>

      <section id="our-products-and-services" className="bg-[#F5F1EE] pt-14 pb-[62px] max-[680px]:py-11">
        <div className="wrap">
          <h2 className="mb-1.5 font-display text-[clamp(25px,3vw,36px)] leading-[1.2] font-normal tracking-[-.02em] text-ink-soft">
            Our products and services
          </h2>
          <ProductCards />
        </div>
      </section>

      <section id="we-are-here-for-you" className="bg-[#F1EFEC] pt-[52px] pb-[58px] text-center max-[680px]:py-11">
        <div className="wrap">
          <h2 className="font-display text-[clamp(23px,2.7vw,32px)] font-normal tracking-[-.02em] text-ink-soft">
            We are here for you
          </h2>
          <p className="mt-3 text-[14.5px] text-muted">
            Talk to us about your child, or start free on any of our products today.
          </p>
          <div className="mt-[26px] flex flex-wrap justify-center gap-3.5">
            <Link
              href="/contact"
              className="inline-flex items-center gap-[9px] rounded-full bg-plum px-[26px] py-[13px] text-sm font-semibold text-white transition-colors hover:bg-plum-dark max-[680px]:w-full max-[680px]:justify-center"
            >
              Contact us <span>›</span>
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}

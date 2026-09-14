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

      <section className="wrap relative pt-[26px] pb-[92px] max-[680px]:pb-14">
        <div className="relative grid min-h-[392px] grid-cols-2 items-center gap-10 max-[1000px]:min-h-0 max-[1000px]:grid-cols-1 max-[1000px]:gap-7">
          {/* Offset paper plates behind the headline — decorative only */}
          <span className="absolute top-1.5 -left-[26px] z-0 h-[84px] w-[452px] border border-[#EFEDE8] bg-white max-[1000px]:hidden" />
          <span className="absolute top-[100px] -left-[26px] z-0 h-[132px] w-[452px] border border-[#EFEDE8] bg-white max-[1000px]:hidden" />
          <span className="absolute top-[214px] left-[318px] z-0 h-[70px] w-[112px] border border-[#EFEDE8] bg-white max-[1000px]:hidden" />

          <div className="relative z-[2]">
            <h1 className="font-display text-[clamp(36px,4.5vw,58px)] leading-[1.06] font-semibold tracking-[-.03em] text-balance">
              Education built around{" "}
              <em className="font-serif font-normal tracking-normal italic">you</em>.
            </h1>
          </div>

          <div className="relative z-[1] overflow-hidden rounded-[14px]">
            <Image
              src="/img/family-hero.jpg"
              alt="A family together at home"
              width={1200}
              height={820}
              priority
              className="h-auto w-full rounded-[14px]"
            />
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

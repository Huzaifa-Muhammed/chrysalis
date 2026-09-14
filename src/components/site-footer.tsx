import Image from "next/image";
import Link from "next/link";
import { footerColumns, legalNav } from "@/content/nav";
import { SocialLinks } from "./social-links";

export function SiteFooter() {
  return (
    <footer className="relative z-10 border-t border-line bg-white">
      <div className="mx-auto grid max-w-[var(--shell)] grid-cols-[minmax(0,1.3fr)_repeat(3,minmax(0,auto))] items-start gap-14 px-[var(--gutter)] pt-16 pb-[34px] max-[720px]:grid-cols-1 max-[720px]:gap-8 max-[720px]:pt-12">
        <div className="flex max-w-[340px] flex-col gap-5">
          <Link href="/">
            <Image
              src="/img/chrysalis-logo.png"
              alt="Chrysalis Education"
              width={720}
              height={360}
              className="h-[46px] w-auto max-w-[240px] object-contain object-left"
            />
          </Link>
          <p className="text-[13.5px] leading-[1.75] text-pretty text-muted">
            Everything a learner needs in one place — tuition, assessments, exam prep and
            planning, with wellbeing valued as much as grades.
          </p>
          <SocialLinks />
        </div>

        {footerColumns.map((column) => (
          <div key={column.heading} className="flex flex-col gap-3.5">
            <h3 className="font-display text-[13px] font-bold tracking-[.2px] text-ink">
              {column.heading}
            </h3>
            <div className="flex flex-col gap-[11px]">
              {column.links.map((link) => (
                <Link
                  key={`${link.href}-${link.label}`}
                  href={link.href}
                  className="text-[13.5px] text-muted transition-colors hover:text-ink"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mx-auto max-w-[var(--shell)] px-[var(--gutter)] pb-[34px]">
        <div className="flex flex-wrap items-center justify-between gap-[18px] border-t border-line-2 pt-6 text-[12.5px] text-muted-2 max-[720px]:flex-col max-[720px]:items-start max-[720px]:gap-3.5">
          <div>© 2026 Chrysalis Education. All rights reserved.</div>
          <nav aria-label="Legal" className="flex flex-wrap gap-[26px]">
            {legalNav.map((link) => (
              <Link key={link.href} href={link.href} className="transition-colors hover:text-ink">
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}

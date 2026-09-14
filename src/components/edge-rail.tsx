import Link from "next/link";

/** The fixed vertical rail pinned to the left edge. Hidden below 680px. */
export function EdgeRail({
  prospectusHref = "mailto:hello@chrysalis.education?subject=Prospectus%20request",
  prospectusLabel = "Prospectus",
}: {
  prospectusHref?: string;
  prospectusLabel?: string;
}) {
  return (
    <div className="fixed top-[46%] left-0 z-30 flex flex-col max-[680px]:hidden">
      <Link
        href="/contact"
        className="bg-brand-red px-[9px] py-[26px] text-[11px] font-medium tracking-[3px] text-white uppercase transition-colors [writing-mode:vertical-rl] [transform:rotate(180deg)] hover:bg-[#c93c34]"
      >
        Speak to us
      </Link>
      <a
        href={prospectusHref}
        className="bg-[#ececea] px-[9px] py-[22px] text-[11px] tracking-[3px] text-[#6d6d77] uppercase transition-colors [writing-mode:vertical-rl] [transform:rotate(180deg)] hover:bg-[#e0e0dd] hover:text-ink"
      >
        {prospectusLabel}
      </a>
    </div>
  );
}

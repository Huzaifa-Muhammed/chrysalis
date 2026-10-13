import Link from "next/link";
import { EdgeRail } from "@/components/edge-rail";
import { LegalToc } from "@/components/legal-toc";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import "@/app/about/about.css";
import "@/app/privacy/legal.css";

export type LegalDoc = {
  h1: string;
  lede: string;
  updated: string;
  toc: { id: string; label: string }[];
  body: string;
};

/** Shared shell for the privacy and terms pages. `body` is trusted markup ported from the design. */
export function LegalPage({ doc, also }: { doc: LegalDoc; also: { href: string; label: string } }) {
  return (
    <div className="pg-about">
      <EdgeRail showProspectus={false} />
      <SiteHeader />
      <section className="legal-top shell">
        <div className="eyebrow">Legal</div>
        <h1 dangerouslySetInnerHTML={{ __html: doc.h1 }} />
        <p className="lede">{doc.lede}</p>
        <div className="legal-meta">
          <span>{doc.updated}</span>
          <span>
            Also see: <Link href={also.href}>{also.label}</Link>
          </span>
        </div>
      </section>
      <div className="legal shell">
        <LegalToc items={doc.toc} />
        <article className="lbody" dangerouslySetInnerHTML={{ __html: doc.body }} />
      </div>
      <SiteFooter />
    </div>
  );
}

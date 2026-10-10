import { LegacyBehaviors } from "@/components/legacy-behaviors";
import { SchoolChrome } from "@/components/school-chrome";
import { SiteFooter } from "@/components/site-footer";
import "@/app/support/support.css";

/** Shared shell for the legal pages. Body copy is a placeholder until the real text is supplied. */
export function LegalPage({
  eyebrow,
  title,
  sections,
}: {
  eyebrow: string;
  title: string;
  sections: string[];
}) {
  return (
    <>
      <div className="pg-support">
        <div className="page-wrap">
          <SchoolChrome active="support" />
          <section className="page-hero">
            <div className="page-hero-inner">
              <div>
                <div className="eyebrow-mono">{eyebrow}</div>
                <h1>{title}</h1>
              </div>
              <p className="hero-lead">
                Placeholder page. The final text will be published here before launch.
              </p>
            </div>
          </section>
          {sections.map((heading, i) => (
            <section key={heading} className="section paper reveal">
              <div className="section-inner">
                <div className="section-eyebrow">
                  <span className="num">{String(i + 1).padStart(2, "0")}</span> {heading}
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. This section is a
                  placeholder and does not yet describe our actual practices.
                </p>
              </div>
            </section>
          ))}
        </div>
        <LegacyBehaviors />
        <SiteFooter variant="spread" />
      </div>
    </>
  );
}

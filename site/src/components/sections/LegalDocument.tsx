import type { LegalSection } from "@/content/pages/legal";
import { Section } from "@/components/ui/Section";

interface LegalDocumentProps {
  title: string;
  updated: string;
  intro: string;
  sections: LegalSection[];
}

export function LegalDocument({ title, updated, intro, sections }: LegalDocumentProps) {
  return (
    <Section labelledBy="legal-heading" tone="surface">
      <article className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-wider text-ink-muted">Last updated {updated}</p>
        <h1 id="legal-heading" className="mt-3 font-heading text-4xl font-bold tracking-tight text-ink">
          {title}
        </h1>
        <p className="mt-5 text-lg leading-relaxed text-ink-muted">{intro}</p>
        {sections.map((s) => (
          <section key={s.heading} className="mt-10" aria-labelledby={`legal-${s.heading.replace(/\s+/g, "-").toLowerCase()}`}>
            <h2 id={`legal-${s.heading.replace(/\s+/g, "-").toLowerCase()}`} className="font-heading text-2xl font-bold text-ink">
              {s.heading}
            </h2>
            {s.paragraphs.map((p) => (
              <p key={p.slice(0, 30)} className="mt-3 leading-relaxed text-ink-muted">
                {p}
              </p>
            ))}
          </section>
        ))}
      </article>
    </Section>
  );
}

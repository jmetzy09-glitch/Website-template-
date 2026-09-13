import type { CallToAction } from "@/content/site.config";
import { Section, SectionHeading } from "@/components/ui/Section";
import { ButtonLink } from "@/components/ui/Button";
import { CheckIcon } from "@/components/ui/Icons";

interface ValueChecklistProps {
  eyebrow?: string;
  heading: string;
  intro?: string;
  items: string[];
  cta?: CallToAction;
  tone?: "paper" | "surface" | "sand";
}

export function ValueChecklist({ eyebrow, heading, intro, items, cta, tone = "paper" }: ValueChecklistProps) {
  return (
    <Section labelledBy="value-heading" tone={tone} containerClassName="grid gap-10 lg:grid-cols-12">
      <div className="lg:col-span-5">
        <SectionHeading id="value-heading" eyebrow={eyebrow} heading={heading} intro={intro} />
        {cta ? (
          <div className="mt-8">
            <ButtonLink href={cta.href} variant="primary">
              {cta.label}
            </ButtonLink>
          </div>
        ) : null}
      </div>
      <ul className="grid gap-x-8 gap-y-4 sm:grid-cols-2 lg:col-span-7 lg:self-center">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-3 border-t border-line pt-4 text-lg text-ink">
            <CheckIcon className="mt-1 shrink-0 text-accent" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </Section>
  );
}

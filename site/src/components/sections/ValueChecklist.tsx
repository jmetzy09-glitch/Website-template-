import { Section, SectionHeading } from "@/components/ui/Section";
import { CheckIcon } from "@/components/ui/Icons";

interface ValueChecklistProps {
  eyebrow?: string;
  heading: string;
  intro?: string;
  items: string[];
}

export function ValueChecklist({ eyebrow, heading, intro, items }: ValueChecklistProps) {
  return (
    <Section labelledBy="value-heading" tone="paper" containerClassName="grid gap-10 lg:grid-cols-12">
      <SectionHeading
        id="value-heading"
        eyebrow={eyebrow}
        heading={heading}
        intro={intro}
        className="lg:col-span-5"
      />
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

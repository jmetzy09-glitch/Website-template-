import type { FaqItem } from "@/content/faq";
import { Section, SectionHeading } from "@/components/ui/Section";
import { PlusIcon } from "@/components/ui/Icons";

interface FaqListProps {
  eyebrow?: string;
  heading: string;
  intro?: string;
  items: FaqItem[];
}

export function FaqList({ eyebrow, heading, intro, items }: FaqListProps) {
  return (
    <Section labelledBy="faq-heading" tone="paper" containerClassName="grid gap-10 lg:grid-cols-12">
      <SectionHeading id="faq-heading" eyebrow={eyebrow} heading={heading} intro={intro} className="lg:col-span-4" />
      <div className="divide-y divide-line border-y border-line lg:col-span-8">
        {items.map((item) => (
          <details key={item.question} className="group py-2">
            <summary className="flex min-h-11 cursor-pointer items-center justify-between gap-4 py-3 text-left font-heading text-lg font-semibold text-ink">
              {item.question}
              <PlusIcon className="shrink-0 text-accent transition-transform group-open:rotate-45" />
            </summary>
            <p className="max-w-prose pb-4 leading-relaxed text-ink-muted">{item.answer}</p>
          </details>
        ))}
      </div>
    </Section>
  );
}

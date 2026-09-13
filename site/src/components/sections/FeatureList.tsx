import { Section, SectionHeading } from "@/components/ui/Section";

interface Feature {
  title: string;
  description: string;
}

interface FeatureListProps {
  eyebrow?: string;
  heading: string;
  subheading?: string;
  items: Feature[];
}

export function FeatureList({ eyebrow, heading, subheading, items }: FeatureListProps) {
  return (
    <Section labelledBy="features-heading" tone="paper">
      <SectionHeading id="features-heading" eyebrow={eyebrow} heading={heading} intro={subheading} />
      <dl className="mt-12 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <div key={item.title} className="border-t border-ink pt-4">
            <dt className="font-heading text-lg font-bold text-ink">{item.title}</dt>
            <dd className="mt-2 leading-relaxed text-ink-muted">{item.description}</dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}

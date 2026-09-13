import { Section, SectionHeading } from "@/components/ui/Section";
import { cn } from "@/lib/cn";

interface Feature {
  title: string;
  description: string;
}

interface FeatureListProps {
  eyebrow?: string;
  heading: string;
  subheading?: string;
  items: Feature[];
  tone?: "paper" | "ink";
}

export function FeatureList({ eyebrow, heading, subheading, items, tone = "paper" }: FeatureListProps) {
  const dark = tone === "ink";
  return (
    <Section labelledBy="features-heading" tone={tone} className={dark ? "bg-dots-dark text-white" : undefined}>
      <SectionHeading id="features-heading" eyebrow={eyebrow} heading={heading} intro={subheading} inverted={dark} />
      <dl className="mt-12 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <div key={item.title} className={cn("border-t pt-5", dark ? "border-white/15" : "border-line")}>
            <dt className={cn("flex items-center gap-3 font-heading text-lg font-bold", dark ? "text-white" : "text-ink")}>
              <span aria-hidden="true" className={cn("h-2.5 w-2.5 rounded-sm", dark ? "bg-accent-soft" : "bg-accent")} />
              {item.title}
            </dt>
            <dd className={cn("mt-2 leading-relaxed", dark ? "text-white/75" : "text-ink-muted")}>{item.description}</dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}

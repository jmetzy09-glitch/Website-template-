import { Section, SectionHeading } from "@/components/ui/Section";

interface Step {
  title: string;
  description: string;
}

interface StepsListProps {
  eyebrow?: string;
  heading: string;
  intro?: string;
  steps: Step[];
}

export function StepsList({ eyebrow, heading, intro, steps }: StepsListProps) {
  return (
    <Section labelledBy="steps-heading" tone="paper">
      <SectionHeading id="steps-heading" eyebrow={eyebrow} heading={heading} intro={intro} />
      <ol className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
        {steps.map((step, i) => (
          <li key={step.title} className="border-t-2 border-accent pt-4">
            <p className="font-heading text-sm font-semibold text-accent" aria-hidden="true">
              Step {i + 1}
            </p>
            <h3 className="mt-2 font-heading text-lg font-bold text-ink">
              <span className="sr-only">Step {i + 1}: </span>
              {step.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-ink-muted">{step.description}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}

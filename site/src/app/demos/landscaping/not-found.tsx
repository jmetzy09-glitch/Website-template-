import { BASE } from "@/content/demos/landscaping/site.config";
import { Section } from "@/components/ui/Section";
import { ButtonLink } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <Section labelledBy="nf-heading" tone="surface">
      <p className="text-sm font-semibold uppercase tracking-wider text-accent">404</p>
      <h1 id="nf-heading" className="mt-3 font-heading text-4xl font-bold tracking-tight text-ink">
        That page doesn&apos;t exist.
      </h1>
      <div className="mt-8">
        <ButtonLink href={BASE} variant="primary">
          Back to the homepage
        </ButtonLink>
      </div>
    </Section>
  );
}

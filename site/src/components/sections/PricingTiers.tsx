import type { PricingTier } from "@/content/pricing";
import type { CallToAction } from "@/content/site.config";
import { Section, SectionHeading } from "@/components/ui/Section";
import { ButtonLink } from "@/components/ui/Button";
import { CheckIcon } from "@/components/ui/Icons";
import { cn } from "@/lib/cn";

interface PricingTiersProps {
  eyebrow?: string;
  heading: string;
  intro?: string;
  tiers: PricingTier[];
  cta: CallToAction;
  footnote?: string;
  headingLevel?: "h1" | "h2";
  /** Line under each price, e.g. "One-time project price" or "Per month". */
  priceNote?: string;
}

export function PricingTiers({ eyebrow, heading, intro, tiers, cta, footnote, headingLevel, priceNote = "One-time project price" }: PricingTiersProps) {
  return (
    <Section labelledBy="pricing-heading" tone="surface">
      <SectionHeading id="pricing-heading" eyebrow={eyebrow} heading={heading} intro={intro} as={headingLevel} />
      <ul className="mt-12 grid gap-6 lg:grid-cols-3">
        {tiers.map((tier) => (
          <li
            key={tier.slug}
            className={cn(
              "flex flex-col rounded-md border bg-surface p-7 sm:p-8",
              tier.recommended ? "border-accent ring-1 ring-accent" : "border-line",
            )}
          >
            <div className="flex items-start justify-between gap-4">
              <h3 className="font-heading text-xl font-bold text-ink">{tier.name}</h3>
              {tier.recommended ? (
                <span className="rounded-sm bg-accent-soft px-2 py-1 text-xs font-semibold uppercase tracking-wider text-accent-strong">
                  Most popular
                </span>
              ) : null}
            </div>
            <p className="mt-4 font-heading text-4xl font-bold tracking-tight text-ink">{tier.price}</p>
            <p className="mt-1 text-sm text-ink-muted">{priceNote}</p>
            <p className="mt-4 leading-relaxed text-ink-muted">{tier.summary}</p>
            <ul className="mt-6 flex-1 space-y-3 border-t border-line pt-6">
              {tier.features.map((f) => (
                <li key={f} className="flex items-start gap-3 text-sm text-ink">
                  <CheckIcon width={18} height={18} className="mt-0.5 shrink-0 text-accent" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
            <ButtonLink
              href={cta.href}
              variant={tier.recommended ? "primary" : "secondary"}
              className="mt-8 w-full"
            >
              {cta.label}
            </ButtonLink>
          </li>
        ))}
      </ul>
      {footnote ? <p className="mt-6 text-sm text-ink-muted">{footnote}</p> : null}
    </Section>
  );
}

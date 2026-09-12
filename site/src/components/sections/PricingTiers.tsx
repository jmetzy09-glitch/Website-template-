import Link from "next/link";
import type { PricingTier } from "@/content/pricing";
import type { CallToAction } from "@/content/site.config";

interface PricingTiersProps {
  heading: string;
  intro?: string;
  tiers: PricingTier[];
  cta: CallToAction;
}

export function PricingTiers({ heading, intro, tiers, cta }: PricingTiersProps) {
  return (
    <section aria-labelledby="pricing-heading">
      <h2 id="pricing-heading">{heading}</h2>
      {intro ? <p>{intro}</p> : null}
      <ul>
        {tiers.map((tier) => (
          <li key={tier.slug} aria-label={tier.recommended ? `${tier.name} (recommended)` : tier.name}>
            <h3>{tier.name}</h3>
            {tier.recommended ? <p>Most popular</p> : null}
            <p>{tier.price}</p>
            <p>{tier.summary}</p>
            <ul>
              {tier.features.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
            <Link href={cta.href}>{cta.label}</Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

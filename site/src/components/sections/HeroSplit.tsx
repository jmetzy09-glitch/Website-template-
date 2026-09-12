import Link from "next/link";
import type { CallToAction } from "@/content/site.config";

interface HeroSplitProps {
  headline: string;
  subheadline: string;
  primaryCTA: CallToAction;
  secondaryCTA: CallToAction;
}

export function HeroSplit({ headline, subheadline, primaryCTA, secondaryCTA }: HeroSplitProps) {
  return (
    <section aria-labelledby="hero-heading">
      <h1 id="hero-heading">{headline}</h1>
      <p>{subheadline}</p>
      <div>
        <Link href={primaryCTA.href}>{primaryCTA.label}</Link>
        <Link href={secondaryCTA.href}>{secondaryCTA.label}</Link>
      </div>
    </section>
  );
}

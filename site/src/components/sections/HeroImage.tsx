import Image from "next/image";
import type { CallToAction } from "@/content/site.config";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { CheckIcon, PhoneIcon } from "@/components/ui/Icons";

interface HeroImageProps {
  eyebrow?: string;
  headline: string;
  subheadline: string;
  image: { src: string; alt: string };
  primaryCTA: CallToAction;
  secondaryCTA?: CallToAction;
  phone: string;
  phoneHref: string;
  /** Short trust points shown under the buttons. */
  badges?: string[];
}

/**
 * Full-bleed photographic hero with a dark scrim for legibility.
 * Text stays left-aligned and the CTA is above the fold on a phone.
 */
export function HeroImage({
  eyebrow,
  headline,
  subheadline,
  image,
  primaryCTA,
  secondaryCTA,
  phone,
  phoneHref,
  badges,
}: HeroImageProps) {
  return (
    <section aria-labelledby="hero-heading" className="relative isolate overflow-hidden bg-ink text-white">
      <Image
        src={image.src}
        alt={image.alt}
        fill
        priority
        sizes="100vw"
        className="-z-20 object-cover object-center"
      />
      <div className="absolute inset-0 -z-10 bg-ink/70" aria-hidden="true" />
      <Container className="py-20 sm:py-28 lg:py-36">
        <div className="max-w-3xl">
          {eyebrow ? (
            <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-accent-soft">{eyebrow}</p>
          ) : null}
          <h1
            id="hero-heading"
            className="font-heading text-5xl font-bold leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl"
          >
            {headline}
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/85 sm:text-xl">{subheadline}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href={primaryCTA.href} variant="primary" size="lg">
              {primaryCTA.label}
            </ButtonLink>
            <ButtonLink href={phoneHref} variant="inverted" size="lg">
              <PhoneIcon width={18} height={18} />
              {phone}
            </ButtonLink>
            {secondaryCTA ? (
              <ButtonLink href={secondaryCTA.href} variant="ghost" size="lg" className="text-white hover:text-white">
                {secondaryCTA.label}
              </ButtonLink>
            ) : null}
          </div>
          {badges && badges.length > 0 ? (
            <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-2 text-sm font-medium text-white/90">
              {badges.map((b) => (
                <li key={b} className="flex items-center gap-2">
                  <CheckIcon width={16} height={16} className="text-accent-soft" />
                  {b}
                </li>
              ))}
            </ul>
          ) : null}
        </div>
      </Container>
    </section>
  );
}

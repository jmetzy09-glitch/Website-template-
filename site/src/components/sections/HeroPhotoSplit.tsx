import Image from "next/image";
import type { CallToAction } from "@/content/site.config";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { CheckIcon, PhoneIcon } from "@/components/ui/Icons";

interface HeroCard {
  heading: string;
  items: string[];
}

interface HeroPhotoSplitProps {
  eyebrow?: string;
  headline: string;
  subheadline: string;
  image: { src: string; alt: string };
  primaryCTA: CallToAction;
  phone: string;
  phoneHref: string;
  badges?: string[];
  /** Small card overlapping the photo, e.g. what a free consultation includes. */
  card?: HeroCard;
}

/**
 * Light hero: copy on the left, a large rounded photo on the right with an
 * overlapping card. Warmer and calmer than the full-bleed HeroImage.
 */
export function HeroPhotoSplit({ eyebrow, headline, subheadline, image, primaryCTA, phone, phoneHref, badges, card }: HeroPhotoSplitProps) {
  return (
    <section aria-labelledby="hero-heading" className="overflow-hidden border-b border-line bg-paper">
      <Container className="grid items-center gap-12 py-16 sm:py-20 lg:grid-cols-12 lg:gap-12 lg:py-24">
        <div className="lg:col-span-6">
          {eyebrow ? (
            <p className="mb-4 flex items-center gap-2.5 text-sm font-semibold uppercase tracking-wider text-accent">
              <span aria-hidden="true" className="h-0.5 w-5 rounded-full bg-accent" />
              {eyebrow}
            </p>
          ) : null}
          <h1 id="hero-heading" className="font-heading text-4xl font-bold leading-[1.05] tracking-tight text-ink sm:text-5xl lg:text-6xl">
            {headline}
          </h1>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-ink-muted sm:text-xl">{subheadline}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href={primaryCTA.href} variant="primary" size="lg">
              {primaryCTA.label}
            </ButtonLink>
            <ButtonLink href={phoneHref} variant="secondary" size="lg">
              <PhoneIcon width={18} height={18} />
              {phone}
            </ButtonLink>
          </div>
          {badges && badges.length > 0 ? (
            <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm font-medium text-ink-muted">
              {badges.map((b) => (
                <li key={b} className="flex items-center gap-2">
                  <CheckIcon width={16} height={16} className="text-accent" />
                  {b}
                </li>
              ))}
            </ul>
          ) : null}
        </div>

        <div className="relative lg:col-span-6">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl sm:aspect-[5/4]">
            <Image src={image.src} alt={image.alt} fill priority sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
          </div>
          {card ? (
            <div className="relative -mt-10 ml-4 mr-4 rounded-xl border border-line bg-surface p-5 shadow-[0_20px_40px_-20px_rgba(0,0,0,0.3)] sm:absolute sm:-bottom-6 sm:left-6 sm:mx-0 sm:mt-0 sm:max-w-xs">
              <p className="font-heading text-base font-bold text-ink">{card.heading}</p>
              <ul className="mt-3 space-y-2 text-sm text-ink">
                {card.items.map((i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckIcon width={16} height={16} className="mt-0.5 shrink-0 text-accent" />
                    {i}
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
        </div>
      </Container>
    </section>
  );
}

import type { CallToAction } from "@/content/site.config";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { BrowserFrame, PhoneFrame } from "@/components/ui/BrowserFrame";
import { ArrowRightIcon, CheckIcon } from "@/components/ui/Icons";

interface Mockup {
  desktop: { src: string; alt: string; width: number; height: number };
  phone: { src: string; alt: string; width: number; height: number };
  url?: string;
  /** Where clicking the mockup goes. */
  href?: string;
  caption?: string;
}

interface HeroShowcaseProps {
  eyebrow?: string;
  headline: string;
  subheadline: string;
  primaryCTA: CallToAction;
  secondaryCTA: CallToAction;
  proofPoints?: string[];
  mockup: Mockup;
}

/**
 * Hero where the product is the picture: a desktop browser mockup with a
 * phone overlapping it. Subtle rise-in on load, no other motion.
 */
export function HeroShowcase({ eyebrow, headline, subheadline, primaryCTA, secondaryCTA, proofPoints, mockup }: HeroShowcaseProps) {
  const visual = (
    <div className="relative">
      <BrowserFrame
        src={mockup.desktop.src}
        alt={mockup.desktop.alt}
        width={mockup.desktop.width}
        height={mockup.desktop.height}
        url={mockup.url}
        priority
        sizes="(min-width: 1024px) 50vw, 100vw"
      />
      <PhoneFrame
        src={mockup.phone.src}
        alt={mockup.phone.alt}
        width={mockup.phone.width}
        height={mockup.phone.height}
        priority
        sizes="(min-width: 1024px) 14vw, 28vw"
        className="absolute -bottom-6 right-3 w-[27%] min-w-[104px] sm:right-6"
      />
    </div>
  );

  return (
    <section aria-labelledby="hero-heading" className="overflow-hidden border-b border-line bg-surface">
      <Container className="grid items-center gap-14 py-16 sm:py-20 lg:grid-cols-12 lg:gap-10 lg:py-24">
        <div className="rise lg:col-span-6">
          {eyebrow ? <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-accent">{eyebrow}</p> : null}
          <h1
            id="hero-heading"
            className="font-heading text-4xl font-bold leading-[1.02] tracking-tight text-ink sm:text-5xl lg:text-[3.6rem]"
          >
            {headline}
          </h1>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-ink-muted sm:text-xl">{subheadline}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <ButtonLink href={primaryCTA.href} variant="primary" size="lg">
              {primaryCTA.label}
            </ButtonLink>
            <ButtonLink href={secondaryCTA.href} variant="ghost" size="lg">
              {secondaryCTA.label}
              <ArrowRightIcon width={18} height={18} />
            </ButtonLink>
          </div>
          {proofPoints && proofPoints.length > 0 ? (
            <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm font-medium text-ink-muted">
              {proofPoints.map((p) => (
                <li key={p} className="flex items-center gap-2">
                  <CheckIcon width={16} height={16} className="text-accent" />
                  {p}
                </li>
              ))}
            </ul>
          ) : null}
        </div>

        <div className="rise rise-delay pb-8 lg:col-span-6">
          {mockup.href ? (
            <a href={mockup.href} className="block transition-transform duration-300 hover:-translate-y-1" aria-label={mockup.caption ?? mockup.desktop.alt}>
              {visual}
            </a>
          ) : (
            visual
          )}
          {mockup.caption ? <p className="mt-10 text-center text-sm text-ink-muted lg:text-left">{mockup.caption}</p> : null}
        </div>
      </Container>
    </section>
  );
}

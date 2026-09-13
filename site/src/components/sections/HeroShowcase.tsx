import type { CallToAction } from "@/content/site.config";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { BrowserFrame, PhoneScroller } from "@/components/ui/BrowserFrame";
import { CircuitDecor } from "@/components/ui/CircuitDecor";
import { ArrowRightIcon, CheckIcon } from "@/components/ui/Icons";
import { cn } from "@/lib/cn";

interface Mockup {
  desktop: { src: string; alt: string; width: number; height: number };
  /** Tall full-page phone screenshot; it scrolls inside the bezel. */
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
  tone?: "surface" | "ink";
}

/**
 * Hero where the product is the picture: a desktop browser mockup with a
 * scrolling phone overlapping it. On the ink tone, faint circuit traces and a
 * dot grid echo the logo. Subtle rise-in on load, no other motion.
 */
export function HeroShowcase({
  eyebrow,
  headline,
  subheadline,
  primaryCTA,
  secondaryCTA,
  proofPoints,
  mockup,
  tone = "surface",
}: HeroShowcaseProps) {
  const dark = tone === "ink";

  const visual = (
    <div className={cn("relative rounded-xl p-3 sm:p-5", dark ? "bg-white/5 ring-1 ring-white/10" : "bg-sand")}>
      <BrowserFrame
        src={mockup.desktop.src}
        alt={mockup.desktop.alt}
        width={mockup.desktop.width}
        height={mockup.desktop.height}
        url={mockup.url}
        priority
        dark={dark}
        sizes="(min-width: 1024px) 50vw, 100vw"
      />
      <div className="absolute -bottom-8 right-1 w-[27%] min-w-[104px] sm:right-3">
        <PhoneScroller
          src={mockup.phone.src}
          alt={mockup.phone.alt}
          width={mockup.phone.width}
          height={mockup.phone.height}
          priority
          sizes="(min-width: 1024px) 14vw, 28vw"
        />
      </div>
    </div>
  );

  return (
    <section
      aria-labelledby="hero-heading"
      className={cn("relative isolate overflow-hidden border-b", dark ? "border-white/10 bg-ink text-white" : "border-line bg-surface text-ink")}
    >
      <div aria-hidden="true" className={cn("fade-bottom absolute inset-0 -z-10 opacity-70", dark ? "bg-dots-dark" : "bg-dots")} />
      {dark ? <CircuitDecor className="-right-6 top-4 -z-10 h-[460px] w-[700px] text-accent-soft/25" /> : null}

      <Container className="grid items-center gap-14 py-16 sm:py-20 lg:grid-cols-12 lg:gap-10 lg:py-24">
        <div className="rise lg:col-span-6">
          {eyebrow ? (
            <p className={cn("mb-4 flex items-center gap-2.5 text-sm font-semibold uppercase tracking-wider", dark ? "text-accent-soft" : "text-accent")}>
              <span aria-hidden="true" className={cn("h-0.5 w-5 rounded-full", dark ? "bg-accent-soft" : "bg-accent")} />
              {eyebrow}
            </p>
          ) : null}
          <h1
            id="hero-heading"
            className={cn("font-heading text-4xl font-bold leading-[1.02] tracking-tight sm:text-5xl lg:text-[3.6rem]", dark ? "text-white" : "text-ink")}
          >
            {headline}
          </h1>
          <p className={cn("mt-6 max-w-lg text-lg leading-relaxed sm:text-xl", dark ? "text-white/80" : "text-ink-muted")}>{subheadline}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <ButtonLink href={primaryCTA.href} variant="primary" size="lg">
              {primaryCTA.label}
            </ButtonLink>
            <ButtonLink href={secondaryCTA.href} variant="ghost" size="lg" className={dark ? "text-white hover:text-white" : undefined}>
              {secondaryCTA.label}
              <ArrowRightIcon width={18} height={18} />
            </ButtonLink>
          </div>
          {proofPoints && proofPoints.length > 0 ? (
            <ul className={cn("mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm font-medium", dark ? "text-white/80" : "text-ink-muted")}>
              {proofPoints.map((p) => (
                <li key={p} className="flex items-center gap-2">
                  <CheckIcon width={16} height={16} className={dark ? "text-accent-soft" : "text-accent"} />
                  {p}
                </li>
              ))}
            </ul>
          ) : null}
        </div>

        <div className="rise rise-delay pb-6 lg:col-span-6">
          {mockup.href ? (
            <a
              href={mockup.href}
              className="block transition-transform duration-300 hover:-translate-y-1"
              aria-label={mockup.caption ?? mockup.desktop.alt}
            >
              {visual}
            </a>
          ) : (
            visual
          )}
          {mockup.caption ? (
            <p className={cn("mt-10 text-center text-sm lg:text-left", dark ? "text-white/60" : "text-ink-muted")}>{mockup.caption}</p>
          ) : null}
        </div>
      </Container>
    </section>
  );
}

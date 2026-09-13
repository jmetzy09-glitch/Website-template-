import type { CallToAction } from "@/content/site.config";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { CheckIcon } from "@/components/ui/Icons";

interface HeroPanel {
  heading: string;
  items: string[];
  note?: string;
}

interface HeroSplitProps {
  eyebrow?: string;
  headline: string;
  subheadline: string;
  primaryCTA: CallToAction;
  secondaryCTA: CallToAction;
  phone: string;
  phoneHref: string;
  panel?: HeroPanel;
}

export function HeroSplit({
  eyebrow,
  headline,
  subheadline,
  primaryCTA,
  secondaryCTA,
  phone,
  phoneHref,
  panel,
}: HeroSplitProps) {
  return (
    <section aria-labelledby="hero-heading" className="border-b border-line bg-surface">
      <Container className="grid gap-12 py-16 sm:py-20 lg:grid-cols-12 lg:items-center lg:py-28">
        <div className="lg:col-span-7">
          {eyebrow ? (
            <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-accent">{eyebrow}</p>
          ) : null}
          <h1
            id="hero-heading"
            className="font-heading text-4xl font-bold leading-[1.05] tracking-tight text-ink sm:text-5xl lg:text-6xl"
          >
            {headline}
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-muted sm:text-xl">{subheadline}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href={primaryCTA.href} variant="primary" size="lg">
              {primaryCTA.label}
            </ButtonLink>
            <ButtonLink href={secondaryCTA.href} variant="secondary" size="lg">
              {secondaryCTA.label}
            </ButtonLink>
          </div>
          <p className="mt-6 text-sm text-ink-muted">
            Prefer to talk?{" "}
            <a href={phoneHref} className="font-semibold text-ink underline-offset-4 hover:underline">
              Call {phone}
            </a>
          </p>
        </div>

        {panel ? (
          <aside className="lg:col-span-5 lg:col-start-8" aria-label={panel.heading}>
            <div className="border-l-4 border-accent bg-paper p-6 sm:p-8">
              <p className="font-heading text-lg font-bold text-ink">{panel.heading}</p>
              <ul className="mt-4 space-y-3">
                {panel.items.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-ink">
                    <CheckIcon className="mt-0.5 shrink-0 text-accent" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              {panel.note ? <p className="mt-5 text-sm text-ink-muted">{panel.note}</p> : null}
            </div>
          </aside>
        ) : null}
      </Container>
    </section>
  );
}

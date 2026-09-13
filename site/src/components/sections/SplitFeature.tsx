import Image from "next/image";
import type { CallToAction } from "@/content/site.config";
import { Section, SectionHeading } from "@/components/ui/Section";
import { ButtonLink } from "@/components/ui/Button";
import { CheckIcon } from "@/components/ui/Icons";
import { cn } from "@/lib/cn";

interface SplitFeatureProps {
  id: string;
  eyebrow?: string;
  heading: string;
  body: string | string[];
  bullets?: string[];
  image: { src: string; alt: string };
  cta?: CallToAction;
  /** Put the image on the right instead of the left. */
  reverse?: boolean;
  tone?: "paper" | "surface";
  headingLevel?: "h1" | "h2";
}

/** Photo on one side, copy on the other. Reusable for any feature, service or story block. */
export function SplitFeature({
  id,
  eyebrow,
  heading,
  body,
  bullets,
  image,
  cta,
  reverse = false,
  tone = "paper",
  headingLevel,
}: SplitFeatureProps) {
  const paragraphs = Array.isArray(body) ? body : [body];
  return (
    <Section
      labelledBy={`${id}-heading`}
      tone={tone}
      className="scroll-mt-20"
      containerClassName="grid items-center gap-10 lg:grid-cols-12 lg:gap-16"
    >
      <div id={id} className="sr-only" aria-hidden="true" />
      <div className={cn("relative aspect-[4/3] overflow-hidden rounded-md lg:col-span-6", reverse && "lg:order-2")}>
        <Image src={image.src} alt={image.alt} fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
      </div>
      <div className={cn("lg:col-span-6", reverse && "lg:order-1")}>
        <SectionHeading id={`${id}-heading`} eyebrow={eyebrow} heading={heading} as={headingLevel} />
        <div className="mt-5 space-y-4 text-lg leading-relaxed text-ink-muted">
          {paragraphs.map((p) => (
            <p key={p.slice(0, 40)}>{p}</p>
          ))}
        </div>
        {bullets && bullets.length > 0 ? (
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {bullets.map((b) => (
              <li key={b} className="flex items-start gap-3 text-ink">
                <CheckIcon className="mt-0.5 shrink-0 text-accent" />
                <span>{b}</span>
              </li>
            ))}
          </ul>
        ) : null}
        {cta ? (
          <div className="mt-8">
            <ButtonLink href={cta.href} variant="primary">
              {cta.label}
            </ButtonLink>
          </div>
        ) : null}
      </div>
    </Section>
  );
}

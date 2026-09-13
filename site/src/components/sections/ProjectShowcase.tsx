import Link from "next/link";
import type { Project } from "@/content/projects";
import { Section, SectionHeading } from "@/components/ui/Section";
import { BrowserFrame } from "@/components/ui/BrowserFrame";
import { ArrowRightIcon } from "@/components/ui/Icons";
import { cn } from "@/lib/cn";

interface ProjectShowcaseProps {
  eyebrow?: string;
  heading: string;
  intro?: string;
  /** Projects with an image and href are shown large, alternating sides. */
  projects: Project[];
  ctaLabel: string;
  /** Label for the projects without a demo yet. Omit to hide them. */
  inProgressLabel?: string;
  tone?: "paper" | "surface";
  headingLevel?: "h1" | "h2";
}

/** Large, alternating project rows. The work is the design element. */
export function ProjectShowcase({ eyebrow, heading, intro, projects, ctaLabel, inProgressLabel, tone = "surface", headingLevel }: ProjectShowcaseProps) {
  const featured = projects.filter((p) => p.image && p.href);
  const pending = projects.filter((p) => !(p.image && p.href));

  return (
    <Section labelledBy="showcase-heading" tone={tone}>
      <SectionHeading id="showcase-heading" eyebrow={eyebrow} heading={heading} intro={intro} as={headingLevel} />

      <ul className="mt-12 space-y-16 lg:space-y-24">
        {featured.map((p, i) => (
          <li key={p.slug} className="grid items-center gap-8 lg:grid-cols-12 lg:gap-12">
            <div className={cn("lg:col-span-7", i % 2 === 1 && "lg:order-2")}>
              <Link href={p.href!} className="group block transition-transform duration-300 hover:-translate-y-1" aria-label={`${p.title}: ${ctaLabel}`}>
                <BrowserFrame src={p.image!} alt={p.imageAlt ?? ""} width={1600} height={1000} url={p.href} sizes="(min-width: 1024px) 58vw, 100vw" />
              </Link>
            </div>
            <div className={cn("lg:col-span-5", i % 2 === 1 && "lg:order-1")}>
              <p className="text-sm font-semibold uppercase tracking-wider text-accent">{p.category}</p>
              <h3 className="mt-2 font-heading text-2xl font-bold tracking-tight text-ink sm:text-3xl">{p.title}</h3>
              <p className="mt-4 leading-relaxed text-ink-muted">{p.summary}</p>
              {p.tags && p.tags.length > 0 ? (
                <ul className="mt-5 flex flex-wrap gap-x-4 gap-y-1 text-sm font-medium text-ink-muted">
                  {p.tags.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
              ) : null}
              <Link href={p.href!} className="mt-6 inline-flex items-center gap-2 font-semibold text-accent underline-offset-4 hover:underline">
                {ctaLabel}
                <ArrowRightIcon width={18} height={18} />
              </Link>
            </div>
          </li>
        ))}
      </ul>

      {inProgressLabel && pending.length > 0 ? (
        <p className="mt-14 border-t border-line pt-6 text-sm text-ink-muted">
          <span className="font-semibold text-ink">{inProgressLabel}</span> {pending.map((p) => p.title).join(", ")}.
        </p>
      ) : null}
    </Section>
  );
}

import Link from "next/link";
import Image from "next/image";
import type { Project } from "@/content/projects";
import { Section, SectionHeading } from "@/components/ui/Section";
import { ArrowRightIcon } from "@/components/ui/Icons";

interface ProjectsGridProps {
  eyebrow?: string;
  heading: string;
  intro?: string;
  ctaLabel: string;
  projects: Project[];
}

export function ProjectsGrid({ eyebrow, heading, intro, ctaLabel, projects }: ProjectsGridProps) {
  return (
    <Section labelledBy="projects-heading" tone="surface">
      <SectionHeading id="projects-heading" eyebrow={eyebrow} heading={heading} intro={intro} />
      <ul className="mt-12 grid gap-8 sm:grid-cols-2">
        {projects.map((project) => {
          const body = (
            <>
              <div className="relative aspect-[16/10] overflow-hidden rounded-md bg-accent-soft">
                {project.image ? (
                  <Image
                    src={project.image}
                    alt={project.imageAlt ?? ""}
                    fill
                    sizes="(min-width: 640px) 50vw, 100vw"
                    className="object-cover"
                  />
                ) : (
                  <div className="flex h-full items-end p-5">
                    <span className="font-heading text-2xl font-bold text-accent-strong">{project.title}</span>
                  </div>
                )}
              </div>
              <p className="mt-4 text-sm font-semibold uppercase tracking-wider text-ink-muted">{project.category}</p>
              <h3 className="mt-1 font-heading text-xl font-bold text-ink group-hover:text-accent">
                {project.title}
              </h3>
              <p className="mt-2 leading-relaxed text-ink-muted">{project.summary}</p>
              {project.href ? (
                <span className="mt-3 inline-flex items-center gap-2 font-semibold text-accent">
                  {ctaLabel}
                  <ArrowRightIcon width={18} height={18} />
                </span>
              ) : (
                <span className="mt-3 inline-block text-sm font-medium text-ink-muted">Demo coming soon</span>
              )}
            </>
          );
          return (
            <li key={project.slug}>
              {project.href ? (
                <Link href={project.href} className="group block">
                  {body}
                </Link>
              ) : (
                <div>{body}</div>
              )}
            </li>
          );
        })}
      </ul>
    </Section>
  );
}

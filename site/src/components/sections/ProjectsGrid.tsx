import Link from "next/link";
import Image from "next/image";
import type { Project } from "@/content/projects";

interface ProjectsGridProps {
  heading: string;
  intro?: string;
  ctaLabel: string;
  projects: Project[];
}

export function ProjectsGrid({ heading, intro, ctaLabel, projects }: ProjectsGridProps) {
  return (
    <section aria-labelledby="projects-heading">
      <h2 id="projects-heading">{heading}</h2>
      {intro ? <p>{intro}</p> : null}
      <ul>
        {projects.map((project) => (
          <li key={project.slug}>
            {project.image ? (
              <Image
                src={project.image}
                alt={project.imageAlt ?? ""}
                width={800}
                height={500}
                sizes="(min-width: 768px) 50vw, 100vw"
              />
            ) : null}
            <p>{project.category}</p>
            <h3>{project.title}</h3>
            <p>{project.summary}</p>
            {project.href ? <Link href={project.href}>{ctaLabel}</Link> : null}
          </li>
        ))}
      </ul>
    </section>
  );
}

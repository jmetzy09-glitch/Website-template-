import Image from "next/image";
import type { CallToAction } from "@/content/site.config";
import { Section, SectionHeading } from "@/components/ui/Section";
import { ButtonLink } from "@/components/ui/Button";
import { cn } from "@/lib/cn";

interface ServiceAreasProps {
  eyebrow?: string;
  heading: string;
  intro?: string;
  areas: string[];
  image?: { src: string; alt: string };
  cta?: CallToAction;
}

/** Towns served, listed plainly for people and for local search. */
export function ServiceAreas({ eyebrow, heading, intro, areas, image, cta }: ServiceAreasProps) {
  return (
    <Section labelledBy="areas-heading" tone="surface" containerClassName="grid items-center gap-10 lg:grid-cols-12">
      <div className={cn(image ? "lg:col-span-6" : "lg:col-span-8")}>
        <SectionHeading id="areas-heading" eyebrow={eyebrow} heading={heading} intro={intro} />
        <ul className="mt-8 flex flex-wrap gap-2">
          {areas.map((a) => (
            <li key={a} className="rounded-sm border border-line bg-paper px-3 py-1.5 text-sm font-medium text-ink">
              {a}
            </li>
          ))}
        </ul>
        {cta ? (
          <div className="mt-8">
            <ButtonLink href={cta.href} variant="secondary">
              {cta.label}
            </ButtonLink>
          </div>
        ) : null}
      </div>
      {image ? (
        <div className="relative aspect-[4/3] overflow-hidden rounded-md lg:col-span-6">
          <Image src={image.src} alt={image.alt} fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
        </div>
      ) : null}
    </Section>
  );
}

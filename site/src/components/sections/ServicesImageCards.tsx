import Image from "next/image";
import Link from "next/link";
import { Section, SectionHeading } from "@/components/ui/Section";
import { ArrowRightIcon } from "@/components/ui/Icons";

export interface ImageService {
  slug: string;
  name: string;
  summary: string;
  image: { src: string; alt: string };
}

interface ServicesImageCardsProps {
  eyebrow?: string;
  heading: string;
  intro?: string;
  services: ImageService[];
  /** Link target prefix, e.g. "/demos/roofing/services#". */
  hrefPrefix: string;
  tone?: "paper" | "surface";
}

/** Photo-led service cards. Right for trades where the work is visual. */
export function ServicesImageCards({ eyebrow, heading, intro, services, hrefPrefix, tone = "paper" }: ServicesImageCardsProps) {
  return (
    <Section labelledBy="services-heading" tone={tone}>
      <SectionHeading id="services-heading" eyebrow={eyebrow} heading={heading} intro={intro} />
      <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s) => (
          <li key={s.slug}>
            <Link href={`${hrefPrefix}${s.slug}`} className="group block h-full overflow-hidden rounded-md border border-line bg-surface">
              <div className="relative aspect-[3/2] overflow-hidden">
                <Image
                  src={s.image.src}
                  alt={s.image.alt}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                />
              </div>
              <div className="p-5">
                <h3 className="font-heading text-xl font-bold text-ink group-hover:text-accent">{s.name}</h3>
                <p className="mt-2 text-ink-muted">{s.summary}</p>
                <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-accent">
                  Learn more
                  <ArrowRightIcon width={16} height={16} />
                </span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </Section>
  );
}

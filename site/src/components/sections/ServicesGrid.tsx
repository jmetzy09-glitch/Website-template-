import Link from "next/link";
import type { Service } from "@/content/services";
import { Section, SectionHeading } from "@/components/ui/Section";
import { ArrowRightIcon } from "@/components/ui/Icons";

interface ServicesGridProps {
  eyebrow?: string;
  heading: string;
  intro?: string;
  services: Service[];
  allServicesHref?: string;
  headingLevel?: "h1" | "h2";
}

/**
 * Editorial list layout: heading column on the left, divided list of services
 * on the right. Deliberately not a card grid.
 */
export function ServicesGrid({ eyebrow, heading, intro, services, allServicesHref = "/services", headingLevel }: ServicesGridProps) {
  return (
    <Section labelledBy="services-heading" tone="surface" containerClassName="grid gap-10 lg:grid-cols-12">
      <div className="lg:col-span-4">
        <SectionHeading id="services-heading" eyebrow={eyebrow} heading={heading} intro={intro} as={headingLevel} />
        <Link
          href={allServicesHref}
          className="mt-6 inline-flex items-center gap-2 font-semibold text-accent underline-offset-4 hover:underline"
        >
          All services
          <ArrowRightIcon width={18} height={18} />
        </Link>
      </div>

      <ol className="divide-y divide-line border-y border-line lg:col-span-8">
        {services.map((service, i) => (
          <li key={service.slug} className="grid gap-2 py-6 sm:grid-cols-[3rem_1fr] sm:gap-6">
            <span className="font-heading text-sm font-semibold text-ink-muted" aria-hidden="true">
              {String(i + 1).padStart(2, "0")}
            </span>
            <div>
              <h3 className="font-heading text-xl font-bold text-ink">
                <Link
                  href={`/services/${service.slug}`}
                  className="underline-offset-4 hover:text-accent hover:underline"
                >
                  {service.name}
                </Link>
              </h3>
              <p className="mt-2 max-w-prose leading-relaxed text-ink-muted">{service.summary}</p>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}

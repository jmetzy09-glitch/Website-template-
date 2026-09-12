import Link from "next/link";
import type { Service } from "@/content/services";

interface ServicesGridProps {
  heading: string;
  intro?: string;
  services: Service[];
}

export function ServicesGrid({ heading, intro, services }: ServicesGridProps) {
  return (
    <section aria-labelledby="services-heading">
      <h2 id="services-heading">{heading}</h2>
      {intro ? <p>{intro}</p> : null}
      <ul>
        {services.map((service) => (
          <li key={service.slug}>
            <h3>
              <Link href={`/services/${service.slug}`}>{service.name}</Link>
            </h3>
            <p>{service.summary}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

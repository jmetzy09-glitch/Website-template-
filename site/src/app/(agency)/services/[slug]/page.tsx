import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { siteConfig, phoneHref } from "@/content/site.config";
import { services, getService } from "@/content/services";
import { Section } from "@/components/ui/Section";
import { ButtonLink } from "@/components/ui/Button";
import { CheckIcon, ArrowRightIcon } from "@/components/ui/Icons";
import { CtaBanner } from "@/components/sections/CtaBanner";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: PageProps<"/services/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return { title: service.name, description: service.summary };
}

export default async function ServiceDetailPage({ params }: PageProps<"/services/[slug]">) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const { business, conversion } = siteConfig;
  const others = services.filter((s) => s.slug !== service.slug);

  return (
    <>
      <Section labelledBy="service-heading" tone="surface" containerClassName="grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <p className="text-sm font-semibold uppercase tracking-wider text-accent">Service</p>
          <h1 id="service-heading" className="mt-3 font-heading text-4xl font-bold leading-tight tracking-tight text-ink sm:text-5xl">
            {service.name}
          </h1>
          <p className="mt-5 text-xl leading-relaxed text-ink-muted">{service.summary}</p>
          <p className="mt-6 max-w-prose text-lg leading-relaxed text-ink">{service.description}</p>
          <div className="mt-8">
            <ButtonLink href={conversion.primaryCTA.href} variant="primary" size="lg">
              {conversion.primaryCTA.label}
            </ButtonLink>
          </div>
        </div>
        <aside className="lg:col-span-5" aria-labelledby="includes-heading">
          <div className="border-l-4 border-accent bg-paper p-6 sm:p-8">
            <h2 id="includes-heading" className="font-heading text-lg font-bold text-ink">
              What&apos;s included
            </h2>
            <ul className="mt-4 space-y-3">
              {service.includes.map((item) => (
                <li key={item} className="flex items-start gap-3 text-ink">
                  <CheckIcon className="mt-0.5 shrink-0 text-accent" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <nav aria-label="Other services" className="mt-8">
            <p className="text-sm font-semibold uppercase tracking-wider text-ink-muted">Other services</p>
            <ul className="mt-3 divide-y divide-line border-y border-line">
              {others.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="flex items-center justify-between gap-4 py-3 text-ink hover:text-accent"
                  >
                    {s.name}
                    <ArrowRightIcon width={16} height={16} />
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </aside>
      </Section>
      <CtaBanner
        heading={`Want to talk about ${service.name.toLowerCase()}?`}
        body="Start with a free website review. We'll tell you whether this is the right next step for your business."
        cta={conversion.primaryCTA}
        phone={business.phone}
        phoneHref={phoneHref}
        tone="ink"
      />
    </>
  );
}

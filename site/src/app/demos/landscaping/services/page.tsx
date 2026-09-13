import type { Metadata } from "next";
import { siteConfig as agencyConfig } from "@/content/site.config";
import { landscapingConfig, landscapingPhoneHref, BASE } from "@/content/demos/landscaping/site.config";
import { landscapingServices } from "@/content/demos/landscaping/content";
import { Section, SectionHeading } from "@/components/ui/Section";
import { SplitFeature } from "@/components/sections/SplitFeature";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { JsonLd } from "@/components/ui/JsonLd";
import { serviceJsonLd, absoluteUrl } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Landscaping Services",
  description: "Landscape design, lawn care, irrigation, xeriscaping, patios and tree care in San Angelo and the Concho Valley.",
};

export default function LandscapingServicesPage() {
  const { business, conversion } = landscapingConfig;
  return (
    <>
      <JsonLd
        data={landscapingServices.map((s) =>
          serviceJsonLd({
            name: s.name,
            description: s.summary,
            url: absoluteUrl(agencyConfig.seo.siteUrl, `${BASE}/services#${s.slug}`),
            businessUrl: absoluteUrl(agencyConfig.seo.siteUrl, BASE),
            businessName: business.name,
            areaServed: business.serviceArea,
          }),
        )}
      />
      <Section labelledBy="services-intro-heading" tone="surface" className="border-b border-line !py-12 sm:!py-16">
        <SectionHeading
          id="services-intro-heading"
          eyebrow="Services"
          heading="Design, install and maintain"
          intro="One crew for the whole yard. Every project starts with a free on-site consultation and a written plan."
          as="h1"
        />
        <ul className="mt-8 flex flex-wrap gap-2">
          {landscapingServices.map((s) => (
            <li key={s.slug}>
              <a href={`#${s.slug}`} className="inline-block rounded-sm border border-line bg-paper px-3 py-1.5 text-sm font-medium text-ink hover:border-accent hover:text-accent">
                {s.name}
              </a>
            </li>
          ))}
        </ul>
      </Section>
      {landscapingServices.map((s, i) => (
        <SplitFeature
          key={s.slug}
          id={s.slug}
          eyebrow={`Service ${String(i + 1).padStart(2, "0")}`}
          heading={s.name}
          body={s.description}
          bullets={s.includes}
          image={s.image}
          cta={{ label: "Get a free consultation", href: `${BASE}/contact` }}
          reverse={i % 2 === 1}
          tone={i % 2 === 0 ? "paper" : "surface"}
        />
      ))}
      <CtaBanner
        heading="Not sure what your yard needs?"
        body="That is what the free consultation is for. We walk it with you and put a plan in writing."
        cta={conversion.primaryCTA}
        phone={business.phone}
        phoneHref={landscapingPhoneHref}
      />
    </>
  );
}

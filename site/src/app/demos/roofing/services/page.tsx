import type { Metadata } from "next";
import { roofingConfig, roofingPhoneHref, BASE } from "@/content/demos/roofing/site.config";
import { roofingServices } from "@/content/demos/roofing/content";
import { Section, SectionHeading } from "@/components/ui/Section";
import { SplitFeature } from "@/components/sections/SplitFeature";
import { CtaBanner } from "@/components/sections/CtaBanner";

export const metadata: Metadata = {
  title: "Roofing Services",
  description:
    "Roof replacement, repair, storm and hail damage, metal roofing, commercial roofing and gutters in San Angelo and the Concho Valley.",
};

export default function RoofingServicesPage() {
  const { business, conversion } = roofingConfig;
  return (
    <>
      <Section labelledBy="services-intro-heading" tone="surface" className="border-b border-line !py-12 sm:!py-16">
        <SectionHeading
          id="services-intro-heading"
          eyebrow="Services"
          heading="Roofing services for homes and businesses"
          intro="One local crew for everything above your ceiling. Every job starts with a free inspection and a written scope."
          as="h1"
        />
        <ul className="mt-8 flex flex-wrap gap-2">
          {roofingServices.map((s) => (
            <li key={s.slug}>
              <a
                href={`#${s.slug}`}
                className="inline-block rounded-sm border border-line bg-paper px-3 py-1.5 text-sm font-medium text-ink hover:border-accent hover:text-accent"
              >
                {s.name}
              </a>
            </li>
          ))}
        </ul>
      </Section>

      {roofingServices.map((s, i) => (
        <SplitFeature
          key={s.slug}
          id={s.slug}
          eyebrow={`Service ${String(i + 1).padStart(2, "0")}`}
          heading={s.name}
          body={s.description}
          bullets={s.includes}
          image={s.image}
          cta={{ label: `Get a free ${s.name.toLowerCase()} estimate`, href: `${BASE}/contact` }}
          reverse={i % 2 === 1}
          tone={i % 2 === 0 ? "paper" : "surface"}
        />
      ))}

      <CtaBanner
        heading="Not sure what your roof needs?"
        body="That is what the free inspection is for. We look, we photograph, we tell you the truth."
        cta={conversion.primaryCTA}
        phone={business.phone}
        phoneHref={roofingPhoneHref}
      />
    </>
  );
}

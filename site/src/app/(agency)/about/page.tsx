import type { Metadata } from "next";
import { siteConfig, phoneHref } from "@/content/site.config";
import { aboutPage } from "@/content/pages/about";
import { Section, SectionHeading } from "@/components/ui/Section";
import { FeatureList } from "@/components/sections/FeatureList";
import { CtaBanner } from "@/components/sections/CtaBanner";

export const metadata: Metadata = {
  title: "About",
  description: "A small San Angelo web studio building websites and lead systems for local service businesses.",
};

export default function AboutPage() {
  const { business, conversion } = siteConfig;
  const a = aboutPage;
  return (
    <>
      <Section labelledBy="about-heading" tone="surface" containerClassName="grid gap-10 lg:grid-cols-12">
        <SectionHeading id="about-heading" eyebrow={a.intro.eyebrow} heading={a.intro.heading} className="lg:col-span-5" as="h1" />
        <div className="space-y-5 text-lg leading-relaxed text-ink-muted lg:col-span-7">
          {a.intro.body.map((p) => (
            <p key={p.slice(0, 30)}>{p}</p>
          ))}
        </div>
      </Section>
      <FeatureList eyebrow={a.values.eyebrow} heading={a.values.heading} items={a.values.items} />
      <CtaBanner
        heading="Let's look at your website together"
        body="Fifteen minutes, a short written summary, and a clear recommendation. No cost."
        cta={conversion.primaryCTA}
        phone={business.phone}
        phoneHref={phoneHref}
        tone="ink"
      />
    </>
  );
}

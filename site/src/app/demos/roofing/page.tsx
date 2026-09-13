import { roofingConfig, roofingPhoneHref, BASE } from "@/content/demos/roofing/site.config";
import { roofingHome, roofingServices, roofingProjects, roofingTestimonials, roofingFaq } from "@/content/demos/roofing/content";
import { HeroImage } from "@/components/sections/HeroImage";
import { TrustBar } from "@/components/sections/TrustBar";
import { ServicesImageCards } from "@/components/sections/ServicesImageCards";
import { SplitFeature } from "@/components/sections/SplitFeature";
import { StepsList } from "@/components/sections/StepsList";
import { ProjectsGrid } from "@/components/sections/ProjectsGrid";
import { ReviewsCards } from "@/components/sections/ReviewsCards";
import { ServiceAreas } from "@/components/sections/ServiceAreas";
import { FaqList } from "@/components/sections/FaqList";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { JsonLd } from "@/components/ui/JsonLd";
import { faqJsonLd } from "@/lib/schema";

export default function RoofingHomePage() {
  const { business, conversion } = roofingConfig;
  const h = roofingHome;

  return (
    <>
      <JsonLd data={faqJsonLd(roofingFaq)} />
      <HeroImage
        eyebrow={h.hero.eyebrow}
        headline={h.hero.headline}
        subheadline={h.hero.subheadline}
        image={h.hero.image}
        primaryCTA={conversion.primaryCTA}
        phone={business.phone}
        phoneHref={roofingPhoneHref}
        badges={h.hero.badges}
      />
      <TrustBar items={h.trust} />
      <ServicesImageCards
        eyebrow={h.services.eyebrow}
        heading={h.services.heading}
        intro={h.services.intro}
        services={roofingServices}
        hrefPrefix={`${BASE}/services#`}
      />
      <SplitFeature
        id="storm-damage"
        eyebrow={h.storm.eyebrow}
        heading={h.storm.heading}
        body={h.storm.body}
        bullets={h.storm.bullets}
        image={h.storm.image}
        cta={conversion.primaryCTA}
        tone="surface"
      />
      <StepsList eyebrow={h.process.eyebrow} heading={h.process.heading} intro={h.process.intro} steps={h.process.steps} />
      <ProjectsGrid
        eyebrow={h.projects.eyebrow}
        heading={h.projects.heading}
        intro={h.projects.intro}
        columns={3}
        projects={roofingProjects.slice(0, 3).map((p) => ({
          slug: p.slug,
          title: p.title,
          category: `${p.location} · ${p.roofType}`,
          summary: p.summary,
          image: p.image.src,
          imageAlt: p.image.alt,
        }))}
      />
      <SplitFeature
        id="insurance"
        eyebrow={h.insurance.eyebrow}
        heading={h.insurance.heading}
        body={h.insurance.body}
        bullets={h.insurance.bullets}
        image={h.insurance.image}
        cta={{ label: "Ask about financing", href: `${BASE}/contact` }}
        reverse
      />
      <ReviewsCards eyebrow={h.reviews.eyebrow} heading={h.reviews.heading} testimonials={roofingTestimonials} />
      <ServiceAreas
        eyebrow={h.areas.eyebrow}
        heading={h.areas.heading}
        intro={h.areas.intro}
        areas={business.serviceArea}
        cta={{ label: "Check if we serve your area", href: `${BASE}/contact` }}
      />
      <FaqList eyebrow={h.faq.eyebrow} heading={h.faq.heading} items={roofingFaq} />
      <CtaBanner
        heading={h.cta.heading}
        body={h.cta.body}
        cta={conversion.primaryCTA}
        phone={business.phone}
        phoneHref={roofingPhoneHref}
      />
    </>
  );
}

import { landscapingConfig, landscapingPhoneHref, BASE } from "@/content/demos/landscaping/site.config";
import {
  landscapingHome,
  landscapingServices,
  landscapingProjects,
  landscapingPlans,
  landscapingTestimonials,
  landscapingFaq,
} from "@/content/demos/landscaping/content";
import { HeroPhotoSplit } from "@/components/sections/HeroPhotoSplit";
import { TrustBar } from "@/components/sections/TrustBar";
import { ServicesImageCards } from "@/components/sections/ServicesImageCards";
import { SplitFeature } from "@/components/sections/SplitFeature";
import { ProjectsGrid } from "@/components/sections/ProjectsGrid";
import { PricingTiers } from "@/components/sections/PricingTiers";
import { StepsList } from "@/components/sections/StepsList";
import { ReviewsCards } from "@/components/sections/ReviewsCards";
import { ServiceAreas } from "@/components/sections/ServiceAreas";
import { FaqList } from "@/components/sections/FaqList";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { JsonLd } from "@/components/ui/JsonLd";
import { faqJsonLd } from "@/lib/schema";

export default function LandscapingHomePage() {
  const { business, conversion } = landscapingConfig;
  const h = landscapingHome;

  return (
    <>
      <JsonLd data={faqJsonLd(landscapingFaq)} />
      <HeroPhotoSplit
        eyebrow={h.hero.eyebrow}
        headline={h.hero.headline}
        subheadline={h.hero.subheadline}
        image={h.hero.image}
        primaryCTA={conversion.primaryCTA}
        phone={business.phone}
        phoneHref={landscapingPhoneHref}
        badges={h.hero.badges}
        card={h.hero.card}
      />
      <TrustBar items={h.trust} />
      <ServicesImageCards
        eyebrow={h.services.eyebrow}
        heading={h.services.heading}
        intro={h.services.intro}
        services={landscapingServices}
        hrefPrefix={`${BASE}/services#`}
        tone="surface"
      />
      <SplitFeature
        id="water-wise"
        eyebrow={h.waterWise.eyebrow}
        heading={h.waterWise.heading}
        body={h.waterWise.body}
        bullets={h.waterWise.bullets}
        image={h.waterWise.image}
        cta={{ label: "Ask about a xeriscape conversion", href: `${BASE}/contact` }}
        reverse
      />
      <ProjectsGrid
        eyebrow={h.projects.eyebrow}
        heading={h.projects.heading}
        intro={h.projects.intro}
        columns={3}
        projects={landscapingProjects.slice(0, 3).map((p) => ({
          slug: p.slug,
          title: p.title,
          category: `${p.location} · ${p.type}`,
          summary: p.summary,
          image: p.image.src,
          imageAlt: p.image.alt,
        }))}
      />
      <div id="plans" className="scroll-mt-20" />
      <PricingTiers
        eyebrow={h.plans.eyebrow}
        heading={h.plans.heading}
        intro={h.plans.intro}
        tiers={landscapingPlans}
        cta={{ label: "Start a plan", href: `${BASE}/contact` }}
        priceNote="Per month, no contract"
        footnote={h.plans.footnote}
      />
      <StepsList eyebrow={h.process.eyebrow} heading={h.process.heading} steps={h.process.steps} />
      <ReviewsCards eyebrow={h.reviews.eyebrow} heading={h.reviews.heading} testimonials={landscapingTestimonials} />
      <ServiceAreas
        eyebrow={h.areas.eyebrow}
        heading={h.areas.heading}
        intro={h.areas.intro}
        areas={business.serviceArea}
        cta={{ label: "Check if we serve your area", href: `${BASE}/contact` }}
      />
      <FaqList eyebrow={h.faq.eyebrow} heading={h.faq.heading} items={landscapingFaq} />
      <CtaBanner heading={h.cta.heading} body={h.cta.body} cta={conversion.primaryCTA} phone={business.phone} phoneHref={landscapingPhoneHref} />
    </>
  );
}

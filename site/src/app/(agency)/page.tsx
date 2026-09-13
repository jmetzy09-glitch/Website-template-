import { siteConfig, phoneHref } from "@/content/site.config";
import { homeSections, type HomeSection } from "@/content/pages/home";
import { services } from "@/content/services";
import { projects } from "@/content/projects";
import { testimonials } from "@/content/testimonials";
import { pricingTiers } from "@/content/pricing";
import { faq } from "@/content/faq";

import { HeroShowcase } from "@/components/sections/HeroShowcase";
import { CredibilityStrip } from "@/components/sections/CredibilityStrip";
import { ValueChecklist } from "@/components/sections/ValueChecklist";
import { ProjectShowcase } from "@/components/sections/ProjectShowcase";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { StepsList } from "@/components/sections/StepsList";
import { FeatureList } from "@/components/sections/FeatureList";
import { ReviewsCards } from "@/components/sections/ReviewsCards";
import { PricingTiers } from "@/components/sections/PricingTiers";
import { FaqList } from "@/components/sections/FaqList";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { JsonLd } from "@/components/ui/JsonLd";
import { faqJsonLd } from "@/lib/schema";

function renderSection(section: HomeSection, index: number) {
  const { conversion, business, features } = siteConfig;
  const key = `${section.type}-${index}`;

  switch (section.type) {
    case "heroShowcase":
      return (
        <HeroShowcase
          key={key}
          eyebrow={section.eyebrow}
          headline={section.headline}
          subheadline={section.subheadline}
          primaryCTA={conversion.primaryCTA}
          secondaryCTA={conversion.secondaryCTA}
          proofPoints={section.proofPoints}
          mockup={section.mockup}
        />
      );
    case "credibility":
      return <CredibilityStrip key={key} statement={section.statement} items={section.items} />;
    case "valueChecklist":
      return (
        <ValueChecklist
          key={key}
          eyebrow={section.eyebrow}
          heading={section.heading}
          intro={section.intro}
          items={section.items}
          cta={section.withCTA ? conversion.primaryCTA : undefined}
          tone={section.tone}
        />
      );
    case "showcase":
      if (!features.gallery) return null;
      return (
        <ProjectShowcase
          key={key}
          eyebrow={section.eyebrow}
          heading={section.heading}
          intro={section.intro}
          projects={projects}
          ctaLabel={section.ctaLabel}
          inProgressLabel={section.inProgressLabel}
        />
      );
    case "services":
      return <ServicesGrid key={key} eyebrow={section.eyebrow} heading={section.heading} intro={section.intro} services={services} />;
    case "steps":
      return <StepsList key={key} eyebrow={section.eyebrow} heading={section.heading} intro={section.intro} steps={section.steps} />;
    case "featureList":
      return (
        <FeatureList key={key} eyebrow={section.eyebrow} heading={section.heading} subheading={section.subheading} items={section.items} />
      );
    case "testimonials":
      if (!features.reviews) return null;
      return <ReviewsCards key={key} eyebrow={section.eyebrow} heading={section.heading} intro={section.intro} testimonials={testimonials} />;
    case "pricing":
      if (!features.pricing) return null;
      return (
        <PricingTiers
          key={key}
          eyebrow={section.eyebrow}
          heading={section.heading}
          intro={section.intro}
          footnote={section.footnote}
          tiers={pricingTiers}
          cta={conversion.primaryCTA}
        />
      );
    case "faq":
      return <FaqList key={key} eyebrow={section.eyebrow} heading={section.heading} intro={section.intro} items={faq} />;
    case "cta":
      return (
        <CtaBanner
          key={key}
          heading={section.heading}
          body={section.body}
          cta={conversion.primaryCTA}
          phone={business.phone}
          phoneHref={phoneHref}
          tone="ink"
        />
      );
  }
}

export default function HomePage() {
  const hasFaq = homeSections.some((s) => s.type === "faq");
  return (
    <>
      {hasFaq ? <JsonLd data={faqJsonLd(faq)} /> : null}
      {homeSections.map(renderSection)}
    </>
  );
}

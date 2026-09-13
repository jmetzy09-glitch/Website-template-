import { siteConfig, phoneHref } from "@/content/site.config";
import { homeSections, type HomeSection } from "@/content/pages/home";
import { services } from "@/content/services";
import { projects } from "@/content/projects";
import { testimonials } from "@/content/testimonials";
import { pricingTiers } from "@/content/pricing";
import { faq } from "@/content/faq";

import { HeroSplit } from "@/components/sections/HeroSplit";
import { ValueChecklist } from "@/components/sections/ValueChecklist";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { StepsList } from "@/components/sections/StepsList";
import { ProjectsGrid } from "@/components/sections/ProjectsGrid";
import { FeatureList } from "@/components/sections/FeatureList";
import { ReviewsCards } from "@/components/sections/ReviewsCards";
import { PricingTiers } from "@/components/sections/PricingTiers";
import { FaqList } from "@/components/sections/FaqList";
import { CtaBanner } from "@/components/sections/CtaBanner";

function renderSection(section: HomeSection, index: number) {
  const { conversion, business, features } = siteConfig;
  const key = `${section.type}-${index}`;

  switch (section.type) {
    case "hero":
      return (
        <HeroSplit
          key={key}
          eyebrow={section.eyebrow}
          headline={section.headline}
          subheadline={section.subheadline}
          primaryCTA={conversion.primaryCTA}
          secondaryCTA={conversion.secondaryCTA}
          phone={business.phone}
          phoneHref={phoneHref}
          panel={section.panel}
        />
      );
    case "valueChecklist":
      return (
        <ValueChecklist
          key={key}
          eyebrow={section.eyebrow}
          heading={section.heading}
          intro={section.intro}
          items={section.items}
        />
      );
    case "services":
      return (
        <ServicesGrid
          key={key}
          eyebrow={section.eyebrow}
          heading={section.heading}
          intro={section.intro}
          services={services}
        />
      );
    case "steps":
      return (
        <StepsList
          key={key}
          eyebrow={section.eyebrow}
          heading={section.heading}
          intro={section.intro}
          steps={section.steps}
        />
      );
    case "projects":
      if (!features.gallery) return null;
      return (
        <ProjectsGrid
          key={key}
          eyebrow={section.eyebrow}
          heading={section.heading}
          intro={section.intro}
          ctaLabel={section.ctaLabel}
          projects={projects}
        />
      );
    case "featureList":
      return (
        <FeatureList
          key={key}
          eyebrow={section.eyebrow}
          heading={section.heading}
          subheading={section.subheading}
          items={section.items}
        />
      );
    case "testimonials":
      if (!features.reviews) return null;
      return (
        <ReviewsCards
          key={key}
          eyebrow={section.eyebrow}
          heading={section.heading}
          intro={section.intro}
          testimonials={testimonials}
        />
      );
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
      return (
        <FaqList
          key={key}
          eyebrow={section.eyebrow}
          heading={section.heading}
          intro={section.intro}
          items={faq}
        />
      );
    case "cta":
      return (
        <CtaBanner
          key={key}
          heading={section.heading}
          body={section.body}
          cta={conversion.primaryCTA}
          phone={business.phone}
          phoneHref={phoneHref}
        />
      );
  }
}

export default function HomePage() {
  return <>{homeSections.map(renderSection)}</>;
}

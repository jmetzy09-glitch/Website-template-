import type { Metadata } from "next";
import { landscapingConfig, landscapingPhoneHref } from "@/content/demos/landscaping/site.config";
import { landscapingAbout, landscapingTestimonials } from "@/content/demos/landscaping/content";
import { SplitFeature } from "@/components/sections/SplitFeature";
import { FeatureList } from "@/components/sections/FeatureList";
import { ReviewsCards } from "@/components/sections/ReviewsCards";
import { CtaBanner } from "@/components/sections/CtaBanner";

export const metadata: Metadata = {
  title: "About Us",
  description: "A San Angelo landscaping crew since 2014. Licensed irrigation, plants chosen for West Texas, and the same faces every visit.",
};

export default function LandscapingAboutPage() {
  const { business, conversion } = landscapingConfig;
  const a = landscapingAbout;
  return (
    <>
      <SplitFeature
        id="about"
        eyebrow={a.intro.eyebrow}
        heading={a.intro.heading}
        body={a.intro.body}
        bullets={a.intro.bullets}
        image={a.intro.image}
        tone="surface"
        reverse
        headingLevel="h1"
      />
      <FeatureList eyebrow={a.values.eyebrow} heading={a.values.heading} items={a.values.items} />
      <ReviewsCards eyebrow="Reviews" heading="What neighbors say" testimonials={landscapingTestimonials} />
      <CtaBanner
        heading="Let's walk your yard"
        body="Free consultation, honest advice, and a written plan. No pressure."
        cta={conversion.primaryCTA}
        phone={business.phone}
        phoneHref={landscapingPhoneHref}
      />
    </>
  );
}

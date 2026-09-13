import type { Metadata } from "next";
import { roofingConfig, roofingPhoneHref } from "@/content/demos/roofing/site.config";
import { roofingAbout, roofingTestimonials } from "@/content/demos/roofing/content";
import { SplitFeature } from "@/components/sections/SplitFeature";
import { FeatureList } from "@/components/sections/FeatureList";
import { ReviewsCards } from "@/components/sections/ReviewsCards";
import { CtaBanner } from "@/components/sections/CtaBanner";

export const metadata: Metadata = {
  title: "About Us",
  description: "A family-owned San Angelo roofing crew since 2009. Licensed, insured, and still here when the warranty matters.",
};

export default function RoofingAboutPage() {
  const { business, conversion } = roofingConfig;
  const a = roofingAbout;
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
      />
      <FeatureList eyebrow={a.values.eyebrow} heading={a.values.heading} items={a.values.items} />
      <ReviewsCards eyebrow="Reviews" heading="What your neighbors say" testimonials={roofingTestimonials} />
      <CtaBanner
        heading="Let's take a look at your roof"
        body="Free inspection, photos, and a straight answer. No pressure, no obligation."
        cta={conversion.primaryCTA}
        phone={business.phone}
        phoneHref={roofingPhoneHref}
      />
    </>
  );
}

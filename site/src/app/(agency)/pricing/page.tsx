import type { Metadata } from "next";
import { siteConfig, phoneHref } from "@/content/site.config";
import { pricingTiers } from "@/content/pricing";
import { faq } from "@/content/faq";
import { PricingTiers } from "@/components/sections/PricingTiers";
import { FaqList } from "@/components/sections/FaqList";
import { CtaBanner } from "@/components/sections/CtaBanner";

export const metadata: Metadata = {
  title: "Pricing",
  description: "Clear one-time website prices for local businesses, starting at $1,995. Optional monthly plans after launch.",
};

export default function PricingPage() {
  const { business, conversion } = siteConfig;
  return (
    <>
      <PricingTiers
        eyebrow="Pricing"
        heading="Clear one-time prices. No surprises."
        intro="Every package includes design, build, launch and a walkthrough. You own the site. Optional monthly plans for hosting, Google Business Profile and reporting are available after launch."
        tiers={pricingTiers}
        cta={conversion.primaryCTA}
        footnote="Prices are starting points. Larger sites and custom integrations are quoted after the free review. Half is due at the start, half at launch."
        headingLevel="h1"
      />
      <FaqList eyebrow="FAQ" heading="Questions about pricing" items={faq} />
      <CtaBanner
        heading="Not sure which package fits?"
        body="The free website review ends with a recommendation. Most businesses know within 15 minutes."
        cta={conversion.primaryCTA}
        phone={business.phone}
        phoneHref={phoneHref}
        tone="ink"
      />
    </>
  );
}

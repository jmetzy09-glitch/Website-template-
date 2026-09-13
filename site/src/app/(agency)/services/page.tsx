import type { Metadata } from "next";
import { siteConfig, phoneHref } from "@/content/site.config";
import { services } from "@/content/services";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { CtaBanner } from "@/components/sections/CtaBanner";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Websites, local SEO, Google Business Profile, lead capture, review automation, business automation and hosting for local service businesses.",
};

export default function ServicesPage() {
  const { business, conversion } = siteConfig;
  return (
    <>
      <ServicesGrid
        eyebrow="Services"
        heading="Everything between a Google search and a booked job"
        intro="Start with the website. Add the pieces that turn visitors into customers when you are ready."
        services={services}
        headingLevel="h1"
      />
      <CtaBanner
        heading="Not sure where to start?"
        body="The free website review tells you exactly which of these would make a difference for your business."
        cta={conversion.primaryCTA}
        phone={business.phone}
        phoneHref={phoneHref}
      />
    </>
  );
}

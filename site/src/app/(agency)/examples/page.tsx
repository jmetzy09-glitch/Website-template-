import type { Metadata } from "next";
import { siteConfig, phoneHref } from "@/content/site.config";
import { projects } from "@/content/projects";
import { ProjectShowcase } from "@/components/sections/ProjectShowcase";
import { CtaBanner } from "@/components/sections/CtaBanner";

export const metadata: Metadata = {
  title: "Examples",
  description: "Demo websites for roofing, HVAC, plumbing and landscaping companies, built the way we build every client site.",
};

export default function ExamplesPage() {
  const { business, conversion } = siteConfig;
  return (
    <>
      <ProjectShowcase
        eyebrow="Our work"
        heading="Demo websites for local service businesses"
        intro="Each demo is a complete site for a fictional company: home, services, projects, about and a working estimate form. They show exactly how your site would work."
        projects={projects}
        ctaLabel="View live demo"
        inProgressLabel="In progress:"
        tone="paper"
        headingLevel="h1"
      />
      <CtaBanner
        heading="Want to see your business built this way?"
        body="Ask for a free website review and we'll show you a homepage concept for your company."
        cta={conversion.primaryCTA}
        phone={business.phone}
        phoneHref={phoneHref}
        tone="ink"
      />
    </>
  );
}

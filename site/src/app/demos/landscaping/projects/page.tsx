import type { Metadata } from "next";
import { landscapingConfig, landscapingPhoneHref } from "@/content/demos/landscaping/site.config";
import { landscapingProjects } from "@/content/demos/landscaping/content";
import { ProjectsGrid } from "@/components/sections/ProjectsGrid";
import { CtaBanner } from "@/components/sections/CtaBanner";

export const metadata: Metadata = {
  title: "Recent Projects",
  description: "Landscape redesigns, sod and irrigation, xeriscape conversions, patios and tree care around San Angelo.",
};

export default function LandscapingProjectsPage() {
  const { business, conversion } = landscapingConfig;
  return (
    <>
      <ProjectsGrid
        eyebrow="Recent work"
        heading="Yards around the Concho Valley"
        intro="From full front-yard redesigns to weekly care on two acres."
        columns={3}
        tone="paper"
        projects={landscapingProjects.map((p) => ({
          slug: p.slug,
          title: p.title,
          category: `${p.location} · ${p.type}`,
          summary: p.summary,
          image: p.image.src,
          imageAlt: p.image.alt,
        }))}
        headingLevel="h1"
      />
      <CtaBanner
        heading="Want your yard on this page?"
        body="Start with a free consultation. We'll walk the property and send a written plan."
        cta={conversion.primaryCTA}
        phone={business.phone}
        phoneHref={landscapingPhoneHref}
      />
    </>
  );
}

import type { Metadata } from "next";
import { roofingConfig, roofingPhoneHref } from "@/content/demos/roofing/site.config";
import { roofingProjects } from "@/content/demos/roofing/content";
import { ProjectsGrid } from "@/components/sections/ProjectsGrid";
import { CtaBanner } from "@/components/sections/CtaBanner";

export const metadata: Metadata = {
  title: "Recent Projects",
  description: "Roof replacements, metal roofs, storm repairs and commercial work across San Angelo and the Concho Valley.",
};

export default function RoofingProjectsPage() {
  const { business, conversion } = roofingConfig;
  return (
    <>
      <ProjectsGrid
        eyebrow="Recent work"
        heading="Roofs we've put on around the Concho Valley"
        intro="A few recent jobs, from single-day shingle replacements to standing seam metal and commercial restoration."
        columns={3}
        tone="paper"
        projects={roofingProjects.map((p) => ({
          slug: p.slug,
          title: p.title,
          category: `${p.location} · ${p.roofType}`,
          summary: p.summary,
          image: p.image.src,
          imageAlt: p.image.alt,
        }))}
        headingLevel="h1"
      />
      <CtaBanner
        heading="Want your roof on this page?"
        body="Start with a free inspection. We'll tell you what it needs and what it will cost, in writing."
        cta={conversion.primaryCTA}
        phone={business.phone}
        phoneHref={roofingPhoneHref}
      />
    </>
  );
}

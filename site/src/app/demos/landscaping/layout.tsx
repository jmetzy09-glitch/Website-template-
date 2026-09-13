import type { Metadata } from "next";
import { Fraunces } from "next/font/google";
import "@/app/globals.css";
import { siteConfig as agencyConfig } from "@/content/site.config";
import { landscapingConfig, landscapingPhoneHref, BASE } from "@/content/demos/landscaping/site.config";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { StickyCallBar } from "@/components/layout/StickyCallBar";
import { DemoBanner } from "@/components/layout/DemoBanner";
import { JsonLd } from "@/components/ui/JsonLd";
import { localBusinessJsonLd, absoluteUrl } from "@/lib/schema";
import { cn } from "@/lib/cn";

/** Root layout for the landscaping demo: own theme, font and chrome. */

const fraunces = Fraunces({ subsets: ["latin"], weight: ["600", "700"], variable: "--font-fraunces", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(agencyConfig.seo.siteUrl),
  title: {
    default: `${landscapingConfig.seo.defaultTitle} | ${landscapingConfig.business.name}`,
    template: `%s | ${landscapingConfig.business.name}`,
  },
  description: landscapingConfig.seo.defaultDescription,
  alternates: { canonical: "./" },
  openGraph: {
    type: "website",
    siteName: landscapingConfig.business.name,
    title: `${landscapingConfig.seo.defaultTitle} | ${landscapingConfig.business.name}`,
    description: landscapingConfig.seo.defaultDescription,
    locale: "en_US",
    images: [{ url: "/images/demos/landscaping/lawn-wide.jpg", width: 2000, height: 1333, alt: "Manicured lawn" }],
  },
  twitter: { card: "summary_large_image" },
  robots: { index: false, follow: false },
};

export default function LandscapingLayout({ children }: { children: React.ReactNode }) {
  const { business, nav, conversion } = landscapingConfig;
  return (
    <html lang="en" className={cn(fraunces.variable, "theme-landscaping")}>
      <body className="min-h-dvh flex flex-col pb-[4.5rem] md:pb-0">
        <JsonLd
          data={localBusinessJsonLd(landscapingConfig, {
            url: absoluteUrl(agencyConfig.seo.siteUrl, BASE),
            image: absoluteUrl(agencyConfig.seo.siteUrl, "/images/demos/landscaping/lawn-wide.jpg"),
            description: landscapingConfig.seo.defaultDescription,
          })}
        />
        <DemoBanner demoBusinessName={business.name} agencyName={agencyConfig.business.name} agencyHref="/" />
        <Header
          businessName={business.name}
          phone={business.phone}
          phoneHref={landscapingPhoneHref}
          nav={nav}
          primaryCTA={conversion.primaryCTA}
          homeHref={BASE}
        />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer
          businessName={business.name}
          tagline={business.tagline}
          phone={business.phone}
          phoneHref={landscapingPhoneHref}
          email={business.email}
          city={business.address.city}
          state={business.address.state}
          hours={business.hours}
          serviceArea={business.serviceArea}
          nav={nav}
          note="Demonstration website for a fictional company. Photography courtesy of Unsplash photographers."
        />
        <StickyCallBar phoneHref={landscapingPhoneHref} primaryCTA={conversion.primaryCTA} />
      </body>
    </html>
  );
}

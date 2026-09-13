import type { Metadata } from "next";
import { Barlow_Condensed } from "next/font/google";
import "@/app/globals.css";
import { siteConfig as agencyConfig } from "@/content/site.config";
import { roofingConfig, roofingPhoneHref, BASE } from "@/content/demos/roofing/site.config";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { StickyCallBar } from "@/components/layout/StickyCallBar";
import { DemoBanner } from "@/components/layout/DemoBanner";
import { cn } from "@/lib/cn";

/**
 * Root layout for the roofing demo. A separate root layout (not nested under
 * the agency layout) so the demo has its own chrome, theme and fonts.
 */

const barlow = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-barlow",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(agencyConfig.seo.siteUrl),
  title: {
    default: `${roofingConfig.seo.defaultTitle} | ${roofingConfig.business.name}`,
    template: `%s | ${roofingConfig.business.name}`,
  },
  description: roofingConfig.seo.defaultDescription,
  // Demo pages should never compete with real sites in search.
  robots: { index: false, follow: false },
};

export default function RoofingLayout({ children }: { children: React.ReactNode }) {
  const { business, nav, conversion } = roofingConfig;
  return (
    <html lang="en" className={cn(barlow.variable, "theme-roofing")}>
      <body className="min-h-dvh flex flex-col pb-[4.5rem] md:pb-0">
        <DemoBanner demoBusinessName={business.name} agencyName={agencyConfig.business.name} agencyHref="/" />
        <Header
          businessName={business.name}
          phone={business.phone}
          phoneHref={roofingPhoneHref}
          nav={nav}
          primaryCTA={conversion.primaryCTA}
          homeHref={BASE}
          tone="dark"
        />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer
          businessName={business.name}
          tagline={business.tagline}
          phone={business.phone}
          phoneHref={roofingPhoneHref}
          email={business.email}
          city={business.address.city}
          state={business.address.state}
          hours={business.hours}
          serviceArea={business.serviceArea}
          nav={nav}
          note="Demonstration website for a fictional company. Photography courtesy of Unsplash photographers."
        />
        <StickyCallBar phoneHref={roofingPhoneHref} primaryCTA={conversion.primaryCTA} />
      </body>
    </html>
  );
}

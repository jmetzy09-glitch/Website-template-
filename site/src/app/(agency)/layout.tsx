import type { Metadata } from "next";
import { Manrope, Orbitron } from "next/font/google";
import "@/app/globals.css";
import { siteConfig, phoneHref } from "@/content/site.config";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { StickyCallBar } from "@/components/layout/StickyCallBar";
import { Logo } from "@/components/ui/Logo";
import { cn } from "@/lib/cn";

/** Headings use Manrope; the wordmark uses Orbitron. Body text stays on the system stack. */
const manrope = Manrope({ subsets: ["latin"], weight: ["600", "700", "800"], variable: "--font-manrope", display: "swap" });
const orbitron = Orbitron({ subsets: ["latin"], weight: ["600", "800"], variable: "--font-orbitron", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.seo.siteUrl),
  title: {
    default: siteConfig.seo.defaultTitle,
    template: `%s | ${siteConfig.business.name}`,
  },
  description: siteConfig.seo.defaultDescription,
  openGraph: {
    type: "website",
    siteName: siteConfig.business.name,
    title: siteConfig.seo.defaultTitle,
    description: siteConfig.seo.defaultDescription,
    locale: "en_US",
    images: [{ url: "/images/examples/roofing-demo.jpg", width: 1600, height: 1000, alt: "Example website built by Concho Web Co." }],
  },
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const { business, nav, conversion, features } = siteConfig;
  return (
    <html lang="en" className={cn(manrope.variable, orbitron.variable)}>
      <body className={cn("min-h-dvh flex flex-col", features.stickyCallBar && "pb-[4.5rem] md:pb-0")}>
        <Header
          businessName={business.name}
          phone={business.phone}
          phoneHref={phoneHref}
          nav={nav}
          primaryCTA={conversion.primaryCTA}
          brand={<Logo size={38} />}
        />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer
          businessName={business.name}
          tagline={business.tagline}
          phone={business.phone}
          phoneHref={phoneHref}
          email={business.email}
          city={business.address.city}
          state={business.address.state}
          hours={business.hours}
          serviceArea={business.serviceArea}
          nav={nav}
          brand={<Logo size={44} inverted tagline="Websites · SEO · Leads · Real Results" />}
          legalLinks={[
            { label: "Privacy", href: "/privacy" },
            { label: "Terms", href: "/terms" },
          ]}
        />
        {features.stickyCallBar ? <StickyCallBar phoneHref={phoneHref} primaryCTA={conversion.primaryCTA} /> : null}
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Archivo } from "next/font/google";
import "@/app/globals.css";
import { siteConfig, phoneHref } from "@/content/site.config";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { StickyCallBar } from "@/components/layout/StickyCallBar";
import { cn } from "@/lib/cn";

/** Heading font only. Body text uses the system stack (see globals.css). */
const archivo = Archivo({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-archivo",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.seo.siteUrl),
  title: {
    default: siteConfig.seo.defaultTitle,
    template: `%s | ${siteConfig.business.name}`,
  },
  description: siteConfig.seo.defaultDescription,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const { business, nav, conversion, features } = siteConfig;
  return (
    <html lang="en" className={archivo.variable}>
      <body className={cn("min-h-dvh flex flex-col", features.stickyCallBar && "pb-[4.5rem] md:pb-0")}>
        <Header
          businessName={business.name}
          phone={business.phone}
          phoneHref={phoneHref}
          nav={nav}
          primaryCTA={conversion.primaryCTA}
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

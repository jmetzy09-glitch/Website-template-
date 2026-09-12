import type { Metadata } from "next";
import "./globals.css";
import { siteConfig, phoneHref } from "@/content/site.config";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { StickyCallBar } from "@/components/layout/StickyCallBar";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.seo.siteUrl),
  title: {
    default: siteConfig.seo.defaultTitle,
    template: `%s | ${siteConfig.business.name}`,
  },
  description: siteConfig.seo.defaultDescription,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  const { business, nav, conversion, features } = siteConfig;
  return (
    <html lang="en">
      <body>
        <Header
          businessName={business.name}
          phone={business.phone}
          phoneHref={phoneHref}
          nav={nav}
          primaryCTA={conversion.primaryCTA}
        />
        <main id="main">{children}</main>
        <Footer
          businessName={business.name}
          phone={business.phone}
          phoneHref={phoneHref}
          email={business.email}
          city={business.address.city}
          state={business.address.state}
          hours={business.hours}
          nav={nav}
        />
        {features.stickyCallBar ? (
          <StickyCallBar phoneHref={phoneHref} primaryCTA={conversion.primaryCTA} />
        ) : null}
      </body>
    </html>
  );
}

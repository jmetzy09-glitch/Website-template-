import type { SiteConfig } from "@/content/site.config";

/**
 * JSON-LD builders. Every value comes from site config or content files, so
 * schema stays in sync with what the page shows. Rendered with <JsonLd />.
 */

type JsonLdObject = Record<string, unknown>;

/** Schema.org type per business type. */
const businessSchemaType: Record<SiteConfig["businessType"], string> = {
  agency: "ProfessionalService",
  contractor: "GeneralContractor",
  roofing: "RoofingContractor",
  hvac: "HVACBusiness",
  plumbing: "Plumber",
  landscaping: "LandscapingBusiness",
};

interface LocalBusinessOptions {
  /** Absolute site URL for this business, e.g. https://example.com or https://example.com/demos/roofing */
  url: string;
  /** Absolute logo or image URL. */
  image?: string;
  /** Short description for the business. */
  description?: string;
}

export function localBusinessJsonLd(config: SiteConfig, opts: LocalBusinessOptions): JsonLdObject {
  const { business } = config;
  const out: JsonLdObject = {
    "@context": "https://schema.org",
    "@type": businessSchemaType[config.businessType],
    "@id": `${opts.url.replace(/\/$/, "")}/#business`,
    name: business.name,
    url: opts.url,
    telephone: business.phone,
    email: business.email,
    description: opts.description ?? business.tagline,
    address: {
      "@type": "PostalAddress",
      ...(business.address.street ? { streetAddress: business.address.street } : {}),
      addressLocality: business.address.city,
      addressRegion: business.address.state,
      ...(business.address.zip ? { postalCode: business.address.zip } : {}),
      addressCountry: "US",
    },
    areaServed: business.serviceArea.map((name) => ({ "@type": "City", name })),
  };
  if (opts.image) out.image = opts.image;
  if (business.yearFounded) out.foundingDate = String(business.yearFounded);
  return out;
}

interface ServiceOptions {
  name: string;
  description: string;
  /** Absolute URL of the service page. */
  url: string;
  /** Absolute URL of the business (@id target). */
  businessUrl: string;
  businessName: string;
  areaServed: string[];
}

export function serviceJsonLd(opts: ServiceOptions): JsonLdObject {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: opts.name,
    description: opts.description,
    url: opts.url,
    provider: { "@id": `${opts.businessUrl.replace(/\/$/, "")}/#business`, "@type": "LocalBusiness", name: opts.businessName },
    areaServed: opts.areaServed.map((name) => ({ "@type": "City", name })),
  };
}

export function faqJsonLd(items: { question: string; answer: string }[]): JsonLdObject {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((i) => ({
      "@type": "Question",
      name: i.question,
      acceptedAnswer: { "@type": "Answer", text: i.answer },
    })),
  };
}

export function absoluteUrl(base: string, path = ""): string {
  return `${base.replace(/\/$/, "")}${path}`;
}

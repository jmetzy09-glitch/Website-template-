import type { Metadata } from "next";
import { siteConfig, phoneHref } from "@/content/site.config";
import { Section } from "@/components/ui/Section";
import { ButtonLink } from "@/components/ui/Button";
import { PhoneIcon } from "@/components/ui/Icons";

export const metadata: Metadata = {
  title: "Request Received",
  robots: { index: false, follow: false },
};

export default function ThankYouPage() {
  const { business } = siteConfig;
  return (
    <Section labelledBy="thanks-heading" tone="surface">
      <div className="max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-wider text-accent">Request received</p>
        <h1 id="thanks-heading" className="mt-3 font-heading text-4xl font-bold leading-tight tracking-tight text-ink sm:text-5xl">
          Thanks. We&apos;ll be in touch within two business days.
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-ink-muted">
          In the meantime, take a look at the demo sites to see how we build. If you&apos;d rather talk now, call us.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <ButtonLink href={phoneHref} variant="primary" size="lg">
            <PhoneIcon width={18} height={18} />
            Call {business.phone}
          </ButtonLink>
          <ButtonLink href="/examples" variant="secondary" size="lg">
            See the demo sites
          </ButtonLink>
        </div>
      </div>
    </Section>
  );
}

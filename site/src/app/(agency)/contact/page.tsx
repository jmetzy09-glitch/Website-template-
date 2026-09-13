import type { Metadata } from "next";
import { siteConfig, phoneHref } from "@/content/site.config";
import { services } from "@/content/services";
import { Section } from "@/components/ui/Section";
import { LeadForm } from "@/components/forms/LeadForm";
import { PhoneIcon } from "@/components/ui/Icons";

export const metadata: Metadata = {
  title: "Free Website Review",
  description: "Request a free 15-minute website review. We'll send a short written summary of what would bring you more calls.",
};

export default function ContactPage() {
  const { business } = siteConfig;
  const options = [
    { value: "Free website review", label: "Free website review" },
    ...services.map((s) => ({ value: s.name, label: s.name })),
    { value: "Something else", label: "Something else" },
  ];

  return (
    <Section labelledBy="contact-heading" tone="surface" containerClassName="grid gap-12 lg:grid-cols-12 lg:gap-16">
      <div className="lg:col-span-5">
        <p className="text-sm font-semibold uppercase tracking-wider text-accent">Free website review</p>
        <h1 id="contact-heading" className="mt-3 font-heading text-4xl font-bold leading-tight tracking-tight text-ink sm:text-5xl">
          Let&apos;s look at what your website could be doing for you
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-ink-muted">
          Tell us about your business and where your current site lives, if you have one. We&apos;ll review it and send a
          short written summary within two business days.
        </p>

        <div className="mt-8 border-l-4 border-accent bg-paper p-6">
          <p className="text-sm font-semibold uppercase tracking-wider text-ink-muted">Prefer to talk?</p>
          <a href={phoneHref} className="mt-1 inline-flex items-center gap-2 font-heading text-3xl font-bold text-ink hover:text-accent">
            <PhoneIcon width={24} height={24} className="text-accent" />
            {business.phone}
          </a>
          <p className="mt-3 text-sm text-ink-muted">{business.hours}</p>
          <p className="mt-1 text-sm text-ink-muted">
            {business.address.city}, {business.address.state}
          </p>
        </div>

        <dl className="mt-8 space-y-4">
          <div className="border-t border-line pt-4">
            <dt className="font-heading text-lg font-bold text-ink">1. We look at your site</dt>
            <dd className="mt-1 text-ink-muted">On a phone and on a desktop, the way your customers do.</dd>
          </div>
          <div className="border-t border-line pt-4">
            <dt className="font-heading text-lg font-bold text-ink">2. You get a written summary</dt>
            <dd className="mt-1 text-ink-muted">What is costing you calls and what we would change, in plain language.</dd>
          </div>
          <div className="border-t border-line pt-4">
            <dt className="font-heading text-lg font-bold text-ink">3. You decide</dt>
            <dd className="mt-1 text-ink-muted">Keep the summary either way. No pressure.</dd>
          </div>
        </dl>
      </div>

      <div className="rounded-md border border-line bg-paper p-6 sm:p-8 lg:col-span-7">
        <h2 className="font-heading text-2xl font-bold text-ink">Request your free review</h2>
        <p className="mt-1 mb-6 text-sm text-ink-muted">Takes about a minute. We never share your information.</p>
        <LeadForm
          siteKey="agency"
          services={options}
          submitLabel="Request Free Review"
          successHref="/thank-you"
          messagePlaceholder="Your business name, your current website address if you have one, and what you'd like more of: calls, estimates, bookings..."
          reassurance="Or call us directly. We answer the phone."
        />
      </div>
    </Section>
  );
}

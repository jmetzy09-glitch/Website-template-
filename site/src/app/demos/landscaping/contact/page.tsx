import type { Metadata } from "next";
import { landscapingConfig, landscapingPhoneHref, BASE } from "@/content/demos/landscaping/site.config";
import { landscapingServices } from "@/content/demos/landscaping/content";
import { Section } from "@/components/ui/Section";
import { LeadForm } from "@/components/forms/LeadForm";
import { PhoneIcon } from "@/components/ui/Icons";

export const metadata: Metadata = {
  title: "Free Yard Consultation",
  description: "Request a free landscaping consultation in San Angelo and the Concho Valley. We call back within one business day.",
};

export default function LandscapingContactPage() {
  const { business } = landscapingConfig;
  const options = [
    ...landscapingServices.map((s) => ({ value: s.name, label: s.name })),
    { value: "Lawn care plan", label: "Lawn care plan" },
    { value: "Not sure / something else", label: "Not sure / something else" },
  ];

  return (
    <Section labelledBy="contact-heading" tone="surface" containerClassName="grid gap-12 lg:grid-cols-12 lg:gap-16">
      <div className="lg:col-span-5">
        <p className="text-sm font-semibold uppercase tracking-wider text-accent">Free consultation</p>
        <h1 id="contact-heading" className="mt-3 font-heading text-4xl font-bold leading-tight tracking-tight text-ink sm:text-5xl">
          Let&apos;s walk your yard
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-ink-muted">
          Tell us a little about the property and what you have in mind. We&apos;ll call within one business day to set up a
          visit.
        </p>

        <div className="mt-8 border-l-4 border-accent bg-paper p-6">
          <p className="text-sm font-semibold uppercase tracking-wider text-ink-muted">Call or text</p>
          <a href={landscapingPhoneHref} className="mt-1 inline-flex items-center gap-2 font-heading text-3xl font-bold text-ink hover:text-accent">
            <PhoneIcon width={24} height={24} className="text-accent" />
            {business.phone}
          </a>
          <p className="mt-3 text-sm text-ink-muted">{business.hours}</p>
          <p className="mt-1 text-sm text-ink-muted">
            {business.address.city}, {business.address.state}. Serving the Concho Valley.
          </p>
        </div>

        <dl className="mt-8 space-y-4">
          <div className="border-t border-line pt-4">
            <dt className="font-heading text-lg font-bold text-ink">1. We call you back</dt>
            <dd className="mt-1 text-ink-muted">Within one business day, to find a time to visit.</dd>
          </div>
          <div className="border-t border-line pt-4">
            <dt className="font-heading text-lg font-bold text-ink">2. We walk the yard with you</dt>
            <dd className="mt-1 text-ink-muted">Sun, soil, water and what you want from the space. About 30 minutes.</dd>
          </div>
          <div className="border-t border-line pt-4">
            <dt className="font-heading text-lg font-bold text-ink">3. You get a written plan</dt>
            <dd className="mt-1 text-ink-muted">Design notes, plant list and firm pricing. No obligation.</dd>
          </div>
        </dl>
      </div>

      <div className="rounded-md border border-line bg-paper p-6 sm:p-8 lg:col-span-7">
        <h2 className="font-heading text-2xl font-bold text-ink">Request your consultation</h2>
        <p className="mt-1 mb-6 text-sm text-ink-muted">Takes about a minute. We never share your information.</p>
        <LeadForm
          siteKey="demo-landscaping"
          services={options}
          submitLabel="Request Free Consultation"
          successHref={`${BASE}/thank-you`}
          showAddress
          messagePlaceholder="Front yard redesign, sprinkler repair, weekly mowing, patio idea..."
          reassurance="Or call us directly. We answer the phone."
        />
      </div>
    </Section>
  );
}

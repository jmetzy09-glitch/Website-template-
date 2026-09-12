import Link from "next/link";
import type { CallToAction } from "@/content/site.config";

interface CtaBannerProps {
  heading: string;
  body: string;
  cta: CallToAction;
  phone: string;
  phoneHref: string;
}

export function CtaBanner({ heading, body, cta, phone, phoneHref }: CtaBannerProps) {
  return (
    <section aria-labelledby="cta-heading">
      <h2 id="cta-heading">{heading}</h2>
      <p>{body}</p>
      <Link href={cta.href}>{cta.label}</Link>
      <p>
        Or call <a href={phoneHref}>{phone}</a>
      </p>
    </section>
  );
}

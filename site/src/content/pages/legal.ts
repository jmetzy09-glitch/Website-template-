/**
 * Privacy and terms. Plain-language starting points.
 * TODO(owner): have these reviewed before taking on paying clients.
 */

export interface LegalSection {
  heading: string;
  paragraphs: string[];
}

export const privacyPage: { title: string; updated: string; intro: string; sections: LegalSection[] } = {
  title: "Privacy Policy",
  updated: "September 2026",
  intro: "This page explains what information this website collects and how it is used. The short version: we collect what you send us through the contact form, plus basic anonymous analytics, and we do not sell any of it.",
  sections: [
    {
      heading: "Information you give us",
      paragraphs: [
        "When you submit the contact or review request form we receive the details you enter: your name, phone number, email address if you provide one, the service you are interested in, and any message. We use this only to respond to your request.",
      ],
    },
    {
      heading: "Information collected automatically",
      paragraphs: [
        "We may use privacy-respecting analytics to understand how the site is used, such as which pages are visited and roughly where visitors come from. This data is aggregated and does not identify you personally.",
        "The site does not use advertising trackers.",
      ],
    },
    {
      heading: "How we store and share it",
      paragraphs: [
        "Form submissions are delivered to our email through a transactional email provider and kept as long as needed to handle your request. We do not sell or rent your information to anyone.",
      ],
    },
    {
      heading: "Your choices",
      paragraphs: [
        "You can ask us to delete any information you have sent us at any time by emailing the address in the footer.",
      ],
    },
  ],
};

export const termsPage: { title: string; updated: string; intro: string; sections: LegalSection[] } = {
  title: "Terms of Service",
  updated: "September 2026",
  intro: "These terms cover use of this website. Project work is governed by a separate written agreement for each client.",
  sections: [
    {
      heading: "Use of this site",
      paragraphs: [
        "The content on this site is provided for general information about our services. You may not copy, scrape or republish it without permission.",
      ],
    },
    {
      heading: "Demo websites",
      paragraphs: [
        "Demo sites linked from this website depict fictional companies created to show our work. Any resemblance to real businesses is coincidental. Contact forms on demo sites are for demonstration only.",
      ],
    },
    {
      heading: "No guarantees",
      paragraphs: [
        "We work hard to help our clients get more calls and leads, but search rankings and business results depend on many factors outside our control. Nothing on this site is a guarantee of a specific outcome.",
      ],
    },
    {
      heading: "Contact",
      paragraphs: ["Questions about these terms can be sent to the email address in the footer."],
    },
  ],
};

import type { Metadata } from "next";
import { privacyPage } from "@/content/pages/legal";
import { LegalDocument } from "@/components/sections/LegalDocument";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "What information this website collects and how it is used.",
};

export default function PrivacyPage() {
  return <LegalDocument {...privacyPage} />;
}

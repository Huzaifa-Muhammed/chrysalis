import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";
import { privacyDoc } from "@/content/legal/privacy";

export const metadata: Metadata = {
  title: privacyDoc.title,
  description: privacyDoc.description,
};

export default function Page() {
  return <LegalPage doc={privacyDoc} also={{ href: "/terms", label: "Terms of service" }} />;
}

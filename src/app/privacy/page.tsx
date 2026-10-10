import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for Chrysalis Education (placeholder).",
};

export default function Page() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Privacy Policy"
      sections={["Information we collect", "How we use it", "Sharing and storage", "Children's data", "Your rights", "Contact"]}
    />
  );
}

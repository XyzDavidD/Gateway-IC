import type { Metadata } from "next";

import { AboutSection } from "@/components/about-section";
import { ContactSection } from "@/components/contact-section";
import { FooterSection } from "@/components/footer-section";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://gatewayic.com";

export const metadata: Metadata = {
  title: "About Gateway International Consultancy FZ-LLC",
  description:
    "Learn about Gateway International Consultancy FZ-LLC, an aviation advisory firm supporting engineering, training, and compliance initiatives across the Middle East and international markets.",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  const aboutPageSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "About Gateway International Consultancy FZ-LLC",
    url: `${siteUrl}/about`,
    description:
      "Company background and mission of Gateway International Consultancy FZ-LLC.",
    isPartOf: {
      "@type": "WebSite",
      name: "Gateway International Consultancy",
      url: siteUrl,
    },
  };

  return (
    <main className="min-h-screen bg-[var(--aviation-surface)]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutPageSchema) }}
      />
      <AboutSection />
      <ContactSection />
      <FooterSection />
    </main>
  );
}

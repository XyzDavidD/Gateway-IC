import type { Metadata } from "next";

import { ContactSection } from "@/components/contact-section";
import { FooterSection } from "@/components/footer-section";
import { ServicesSection } from "@/components/services-section";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://gatewayic.com";

export const metadata: Metadata = {
  title: "Services | Gateway International Consultancy FZ-LLC",
  description:
    "Explore aviation services from Gateway International Consultancy FZ-LLC, including engineering advisory, training solutions, regulatory compliance support, and market-entry strategy.",
  alternates: {
    canonical: "/services",
  },
};

export default function ServicesPage() {
  const servicesPageSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Aviation Consultancy Services",
    provider: {
      "@type": "Organization",
      name: "Gateway International Consultancy FZ-LLC",
      url: siteUrl,
    },
    areaServed: ["Middle East", "Europe", "International"],
    url: `${siteUrl}/services`,
  };

  return (
    <main className="min-h-screen bg-[var(--aviation-surface)]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesPageSchema) }}
      />
      <ServicesSection />
      <ContactSection />
      <FooterSection />
    </main>
  );
}

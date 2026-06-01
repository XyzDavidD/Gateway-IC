import type { Metadata } from "next";

import { AboutSection } from "@/components/about-section";
import { ContactSection } from "@/components/contact-section";
import { FooterSection } from "@/components/footer-section";
import { HeroSection } from "@/components/hero-section";
import { IndustriesSection } from "@/components/industries-section";
import { ServicesSection } from "@/components/services-section";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://gatewayic.com";

export const metadata: Metadata = {
  title: "Gateway International Consultancy FZ-LLC | Aviation Engineering, Training & Strategic Advisory",
  description:
    "Gateway International Consultancy FZ-LLC supports aviation organisations through engineering advisory, technical training, regulatory compliance, and strategic market partnerships across the Middle East and international markets.",
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Gateway International Consultancy",
    legalName: "Gateway International Consultancy FZ-LLC",
    url: siteUrl,
    logo: `${siteUrl}/logo-dark.png`,
    email: "hello@gatewayic.com",
    description:
      "Gateway International Consultancy connects global aviation expertise with opportunities in the Middle East through engineering advisory, training solutions, regulatory support, and strategic partnerships.",
  };

  const professionalServiceSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Gateway International Consultancy",
    url: siteUrl,
    image: `${siteUrl}/homepage1.jpg`,
    email: "hello@gatewayic.com",
    areaServed: ["Middle East", "Europe", "International"],
    serviceType: [
      "Aviation Engineering Advisory",
      "Training Solutions",
      "Regulatory & Compliance Support",
      "Business Development & Market Entry",
      "Innovation & Strategic Projects",
    ],
    description:
      "Aviation consultancy focused on engineering advisory, training, compliance, and market expansion.",
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Gateway International Consultancy",
    url: siteUrl,
    inLanguage: "en",
  };

  const webpageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Gateway International Consultancy",
    url: siteUrl,
    description:
      "Aviation engineering advisory, training solutions, regulatory support, and strategic partnerships.",
    isPartOf: {
      "@type": "WebSite",
      name: "Gateway International Consultancy",
      url: siteUrl,
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: siteUrl,
      },
    ],
  };

  return (
    <main className="min-h-screen bg-[var(--aviation-surface)]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalServiceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webpageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <IndustriesSection />
      <ContactSection />
      <FooterSection />
    </main>
  );
}

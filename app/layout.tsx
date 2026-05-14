import type { Metadata } from "next";
import { Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.gatewayic.com";
const siteName = "Gateway International Consultancy";
const siteDescription =
  "Gateway International Consultancy connects global aviation expertise with opportunities across the Middle East through engineering advisory, training solutions, regulatory support, and strategic partnerships.";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  fallback: ["Arial", "sans-serif"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  applicationName: siteName,
  title: {
    default: `${siteName} | Aviation Engineering, Training & Advisory`,
    template: `%s | ${siteName}`,
  },
  description: siteDescription,
  keywords: [
    "Gateway International Consultancy",
    "aviation consultancy",
    "aviation engineering advisory",
    "training solutions aviation",
    "regulatory compliance aviation",
    "airworthiness support",
    "MRO advisory",
    "aviation business development",
    "Middle East aviation",
    "aviation strategic partnerships",
  ],
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [{ url: "/favicon.png", type: "image/png" }],
    shortcut: [{ url: "/favicon.png", type: "image/png" }],
    apple: [{ url: "/favicon.png", type: "image/png" }],
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName,
    title: `${siteName} | Connecting Global Aviation Expertise`,
    description: siteDescription,
    images: [
      {
        url: "/homepage1.jpg",
        width: 1827,
        height: 1028,
        alt: "Gateway International Consultancy aviation services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteName} | Connecting Global Aviation Expertise`,
    description: siteDescription,
    images: ["/homepage1.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-video-preview": -1,
      "max-snippet": -1,
    },
  },
  category: "Aviation Consultancy",
  creator: siteName,
  publisher: siteName,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}

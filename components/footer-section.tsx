import Image from "next/image";
import { Globe, Mail } from "lucide-react";

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={className}
      fill="currentColor"
    >
      <path d="M5.35 7.18A2.18 2.18 0 1 0 5.35 2.82a2.18 2.18 0 0 0 0 4.36ZM3.48 21.18h3.74V9.16H3.48v12.02ZM9.55 9.16h3.58v1.64h.05c.5-.94 1.72-1.94 3.54-1.94 3.79 0 4.49 2.49 4.49 5.73v6.59h-3.73v-5.84c0-1.39-.03-3.18-1.94-3.18-1.94 0-2.24 1.52-2.24 3.08v5.94H9.55V9.16Z" />
    </svg>
  );
}

const footerLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
  { label: "Email", href: "mailto:hello@gatewayic.com" },
];

const socialLinks = [
  { label: "Website", href: "https://gatewayic.com", icon: Globe },
  { label: "Gateway International Consultancy on LinkedIn", href: "https://www.linkedin.com/company/gatewayic/", icon: LinkedInIcon },
  { label: "Email", href: "mailto:hello@gatewayic.com", icon: Mail },
];

export function FooterSection() {
  return (
    <footer className="bg-[var(--aviation-surface)] px-1 pb-3 sm:px-1.5 sm:pb-4 lg:px-2 lg:pb-5">
      <div className="mx-auto w-full max-w-[1880px] rounded-[1.9rem] border border-[#D4DEEA] bg-white px-5 py-5 shadow-[0_8px_24px_rgba(0,26,61,0.07)] sm:px-7 sm:py-6 lg:px-8 lg:py-7">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-xl">
            <div className="relative h-16 w-48 sm:h-[4.5rem] sm:w-56">
              <Image src="/logo-dark.png" alt="Gateway IC logo" fill className="object-contain object-left" sizes="224px" />
            </div>
          </div>

          <nav className="flex flex-wrap items-center gap-x-5 gap-y-2.5 sm:gap-x-7 lg:self-end lg:pb-1">
            {footerLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-[0.95rem] font-medium text-[#4A5E7B] transition-colors duration-300 hover:text-[#001A3D]"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-6 h-px w-full bg-[#D9E2EF]" />

        <div className="mt-5 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[0.9rem] text-[#687C98]">© 2026 Gateway International Consultancy. All rights reserved.</p>

          <div className="flex items-center gap-3">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                rel="noopener noreferrer"
                target={social.href.startsWith("http") ? "_blank" : undefined}
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[#D2DDEA] text-[#4F6583] transition-colors duration-300 hover:border-[#B4C6DD] hover:bg-[#F4F8FF] hover:text-[#001A3D]"
              >
                <social.icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

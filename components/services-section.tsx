"use client";

import Image from "next/image";
import type { LucideIcon } from "lucide-react";
import { BriefcaseBusiness, GraduationCap, Rocket, ShieldCheck, Wrench } from "lucide-react";
import { motion } from "framer-motion";

type Service = {
  title: string;
  summary: string;
  points: string[];
  icon: LucideIcon;
};

const services: Service[] = [
  {
    title: "Aviation Engineering Advisory",
    summary:
      "Technical support for engineering operations, maintenance optimisation, operational improvement, and specialised technical projects.",
    points: [
      "Maintenance process optimisation",
      "Engineering operational support",
      "Technical project management",
      "Fleet transition support",
      "Operational efficiency improvement",
      "Technical troubleshooting support",
    ],
    icon: Wrench,
  },
  {
    title: "Training Solutions",
    summary:
      "Development of training organisations, instructor sourcing, course development, training outsourcing, and digital learning implementation.",
    points: [
      "Training organisation setup",
      "Course development",
      "Instructor sourcing",
      "Training outsourcing solutions",
      "Digital learning implementation",
      "Examination systems support",
    ],
    icon: GraduationCap,
  },
  {
    title: "Regulatory & Compliance Support",
    summary:
      "Support for regulatory approvals, compliance frameworks, authority coordination, and operational readiness.",
    points: [
      "Regulatory approvals support",
      "Authority coordination",
      "Compliance framework development",
      "Audit readiness",
      "Operational compliance improvement",
    ],
    icon: ShieldCheck,
  },
  {
    title: "Business Development & Market Entry",
    summary:
      "Helping aviation organisations expand into the Middle East through partnerships, representation, and regional market access.",
    points: [
      "Middle East market entry support",
      "Strategic partnerships",
      "Business representation",
      "Regional network development",
      "Commercial introductions",
    ],
    icon: BriefcaseBusiness,
  },
  {
    title: "Innovation & Strategic Projects",
    summary:
      "Supporting aviation startups, new technologies, and organisations seeking technical partnerships and regional growth opportunities.",
    points: [
      "Technology validation support",
      "Strategic advisory for aviation startups",
      "OEM introductions",
      "Partnership development",
      "Growth project support",
    ],
    icon: Rocket,
  },
];

const primaryServices = services.slice(0, 2);
const compactServices = services.slice(2);

export function ServicesSection() {
  return (
    <section
      id="services"
      className="scroll-mt-28 bg-[var(--aviation-surface)] px-1 pb-10 pt-2 sm:px-1.5 sm:pb-12 sm:pt-4 lg:px-2 lg:pb-14 lg:pt-6"
    >
      <div className="mx-auto w-full max-w-[1880px] px-4 sm:px-6 lg:px-9">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="mb-8 text-center"
        >
          <p className="text-[0.78rem] font-semibold tracking-[0.16em] text-[#5C6F88] uppercase">Services Page</p>
          <h2 className="mt-3 font-heading text-[2rem] font-semibold tracking-[-0.02em] text-[#0B2245] sm:text-[2.4rem]">
            Our Core Services
          </h2>
          <p className="mx-auto mt-3 max-w-3xl text-[0.98rem] leading-relaxed text-[#39506C] sm:text-[1.04rem]">
            Structured support across engineering, training, compliance, market development, and strategic innovation.
          </p>
        </motion.div>

        <div className="grid gap-5 lg:grid-cols-3">
          {primaryServices.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.article
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.55, ease: "easeOut", delay: index * 0.05 }}
                className={`rounded-[1.35rem] border border-[#D8E2EE] bg-white p-5 shadow-[0_7px_18px_rgba(0,26,61,0.045)] ${
                  index === 0 ? "lg:order-1" : "lg:order-3"
                }`}
              >
                <div className="mb-3 flex items-center gap-2.5">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[#D5E0ED] bg-white text-[#1A447A]">
                    <Icon className="h-4.5 w-4.5" />
                  </span>
                  <h3 className="font-heading text-[1.08rem] font-semibold tracking-[-0.01em] text-[#0E274B] sm:text-[1.2rem]">
                    {service.title}
                  </h3>
                </div>

                <p className="text-[0.9rem] leading-relaxed text-[#3D5472]">{service.summary}</p>

                <ul className="mt-3 space-y-2">
                  {service.points.map((point) => (
                    <li key={point} className="flex items-start gap-2 text-[0.86rem] text-[#274060]">
                      <span className="mt-[0.38rem] h-1.5 w-1.5 shrink-0 rounded-full bg-[#214A82]" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </motion.article>
            );
          })}

          <motion.article
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, ease: "easeOut", delay: 0.05 }}
            className="relative min-h-[320px] overflow-hidden rounded-[1.5rem] border border-[#D6E1EE] shadow-[0_8px_22px_rgba(0,26,61,0.05)] lg:order-2"
          >
            <Image
              src="/aviation.jpg"
              alt="Aviation services visual"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 34vw"
            />
          </motion.article>
        </div>

        <div className="mt-5 grid gap-5 lg:grid-cols-3">
          {compactServices.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.article
                key={service.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.05 }}
                className="rounded-[1.35rem] border border-[#D8E2EE] bg-white p-5 shadow-[0_7px_18px_rgba(0,26,61,0.045)]"
              >
                <div className="mb-3 flex items-center gap-2.5">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[#D5E0ED] bg-white text-[#1A447A]">
                    <Icon className="h-4.5 w-4.5" />
                  </span>
                  <h3 className="font-heading text-[1.08rem] font-semibold tracking-[-0.01em] text-[#0E274B] sm:text-[1.2rem]">
                    {service.title}
                  </h3>
                </div>

                <p className="text-[0.9rem] leading-relaxed text-[#3D5472]">{service.summary}</p>

                <ul className="mt-3 space-y-2">
                  {service.points.map((point) => (
                    <li key={point} className="flex items-start gap-2 text-[0.86rem] text-[#274060]">
                      <span className="mt-[0.38rem] h-1.5 w-1.5 shrink-0 rounded-full bg-[#214A82]" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

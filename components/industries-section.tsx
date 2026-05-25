"use client";

import Image from "next/image";
import { Plane, Wrench } from "lucide-react";
import { motion } from "framer-motion";
import {
  BadgeCheck,
  BriefcaseBusiness,
  Factory,
  GraduationCap,
  Rocket,
  TrendingUp,
} from "lucide-react";

const industries = [
  { label: "Airlines", icon: Plane },
  { label: "MRO Organisations", icon: Wrench },
  { label: "Training Organisations", icon: GraduationCap },
  { label: "Aircraft Operators", icon: BadgeCheck },
  { label: "OEMs", icon: Factory },
  { label: "Aviation Startups", icon: Rocket },
  { label: "Investors entering aviation markets", icon: TrendingUp },
  { label: "Government and private aviation organisations", icon: BriefcaseBusiness },
];

const regions = [
  { label: "United Arab Emirates", image: "/unitedarabemirates.jpg" },
  { label: "Middle East", image: "/middleeast.jpeg" },
  { label: "Europe", image: "/europe.jpg" },
  { label: "International Markets", image: "/international.jpg" },
];

export function IndustriesSection() {
  return (
    <section
      id="industries"
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
          <p className="text-[0.78rem] font-semibold tracking-[0.16em] text-[#5C6F88] uppercase">
            Industries & Regions
          </p>
          <h2 className="mt-3 font-heading text-[2rem] font-semibold tracking-[-0.02em] text-[#0B2245] sm:text-[2.4rem]">
            Industries We Support
          </h2>
          <p className="mx-auto mt-3 max-w-3xl text-[0.98rem] leading-relaxed text-[#39506C] sm:text-[1.04rem]">
            Practical aviation expertise delivered across operational, technical, and strategic growth priorities.
          </p>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="flex flex-col rounded-[1.5rem] border border-[#D8E2EE] bg-white p-5 shadow-[0_8px_22px_rgba(0,26,61,0.05)] sm:p-6"
          >
            <div className="mb-4">
              <h3 className="font-heading text-[1.22rem] font-semibold tracking-[-0.01em] text-[#0E274B] sm:text-[1.35rem]">
                Industries We Support
              </h3>
            </div>

            <div className="flex flex-1 items-center">
              <div className="grid w-full gap-2.5 sm:grid-cols-2 sm:auto-rows-[5rem]">
                {industries.map(({ label, icon: IndustryIcon }) => (
                  <div
                    key={label}
                    className="group flex h-full items-center gap-2.5 rounded-xl border border-[#E1E8F2] bg-[#FAFCFF] px-3 py-2.5 text-[0.94rem] text-[#223A59] transition-colors duration-300 hover:bg-[#F4F8FE] sm:text-[0.98rem]"
                  >
                    <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#D7E2EF] bg-white text-[#214A82]">
                      <IndustryIcon className="h-4.5 w-4.5" />
                    </span>
                    <span className="leading-snug font-medium">{label}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.article>

          <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, ease: "easeOut", delay: 0.05 }}
            className="rounded-[1.5rem] border border-[#D8E2EE] bg-white p-5 shadow-[0_8px_22px_rgba(0,26,61,0.05)] sm:p-6"
          >
            <div className="mb-4">
              <h3 className="font-heading text-[1.22rem] font-semibold tracking-[-0.01em] text-[#0E274B] sm:text-[1.35rem]">
                Regions We Serve
              </h3>
            </div>

            <div className="grid gap-3 auto-rows-[5rem]">
              {regions.map(({ label, image }) => (
                <div
                  key={label}
                  className="group flex h-full items-center justify-between gap-3 rounded-xl border border-[#E1E8F2] bg-[#FAFCFF] px-3.5 py-3 text-[#18355C] transition-colors duration-300 hover:bg-[#F4F8FE]"
                >
                  <span className="text-[0.94rem] font-medium sm:text-[0.98rem]">{label}</span>
                  <span className="relative inline-flex w-[86px] shrink-0 overflow-hidden rounded-[0.55rem] border border-[#D7E2EF] bg-white shadow-[0_2px_8px_rgba(0,26,61,0.08)] sm:w-[98px]">
                    <span className="block aspect-video w-full" />
                    <Image
                      src={image}
                      alt={label}
                      fill
                      quality={95}
                      className="object-cover"
                      sizes="(min-width: 640px) 98px, 86px"
                    />
                  </span>
                </div>
              ))}
            </div>
          </motion.article>
        </div>
      </div>
    </section>
  );
}

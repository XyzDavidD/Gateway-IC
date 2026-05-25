"use client";

import { motion } from "framer-motion";
import { Globe, Link2, Mail, Send } from "lucide-react";

import { Button } from "@/components/ui/button";

export function ContactSection() {
  return (
    <section
      id="contact"
      className="scroll-mt-28 bg-[var(--aviation-surface)] px-1 pb-10 pt-4 sm:px-1.5 sm:pb-12 sm:pt-6 lg:px-2 lg:pb-14 lg:pt-8"
    >
      <div className="mx-auto w-full max-w-[1880px] px-4 sm:px-6 lg:px-9">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.28 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex items-center"
          >
            <div className="mx-auto flex w-full max-w-[560px] flex-col justify-center">
              <h2 className="font-heading text-[1.95rem] font-semibold tracking-[-0.02em] text-[#0B2245] sm:text-[2.25rem]">
                Let&apos;s Connect
              </h2>

              <div className="mt-6 space-y-4">
                <a
                  href="mailto:hello@gatewayic.com"
                  className="flex items-center gap-3 px-1 py-2 text-[#1F3655] transition-colors duration-300 hover:text-[#001A3D]"
                >
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#21456E] shadow-[0_4px_12px_rgba(0,26,61,0.08)]">
                    <Mail className="h-4 w-4" />
                  </span>
                  <div>
                    <p className="text-[0.75rem] font-semibold tracking-[0.12em] text-[#5A6F8A] uppercase">Email</p>
                    <p className="text-[0.98rem] font-medium">hello@gatewayic.com</p>
                  </div>
                </a>

                <div className="flex items-center gap-3 px-1 py-2 text-[#1F3655]">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#21456E] shadow-[0_4px_12px_rgba(0,26,61,0.08)]">
                    <Globe className="h-4 w-4" />
                  </span>
                  <div>
                    <p className="text-[0.75rem] font-semibold tracking-[0.12em] text-[#5A6F8A] uppercase">Website</p>
                    <p className="text-[0.98rem] font-medium">Gateway International Consultancy FZ-LLC</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 px-1 py-2 text-[#1F3655]">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#21456E] shadow-[0_4px_12px_rgba(0,26,61,0.08)]">
                    <Link2 className="h-4 w-4" />
                  </span>
                  <div>
                    <p className="text-[0.75rem] font-semibold tracking-[0.12em] text-[#5A6F8A] uppercase">LinkedIn</p>
                    <p className="text-[0.98rem] font-medium">(add once ready)</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.article>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.28 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.06 }}
            className="rounded-[1.7rem] border border-[#D5DFEC] bg-white p-5 shadow-[0_12px_28px_rgba(0,26,61,0.07)] sm:p-7"
            action="mailto:hello@gatewayic.com"
            method="post"
            encType="text/plain"
          >
            <div className="flex h-full flex-col">
              <div className="mb-6 flex items-center justify-between">
                <p className="text-[0.78rem] font-semibold tracking-[0.16em] text-[#5C6F88] uppercase">Send A Message</p>
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#EEF4FC] text-[#24466E]">
                  <Mail className="h-4 w-4" />
                </span>
              </div>

              <h3 className="font-heading text-[1.85rem] font-semibold tracking-[-0.015em] text-[#0B2245] sm:text-[2.15rem]">
                Start Your Project Discussion
              </h3>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <label className="grid gap-2">
                  <span className="text-[0.86rem] font-medium text-[#3C5270]">Full Name</span>
                  <input
                    type="text"
                    placeholder="Your full name"
                    className="h-11 rounded-xl border border-[#CFDAE8] bg-[#FAFCFF] px-3.5 text-[0.95rem] text-[#122A4D] outline-none transition-colors placeholder:text-[#8CA0B9] focus:border-[#8BA3BF]"
                  />
                </label>

                <label className="grid gap-2">
                  <span className="text-[0.86rem] font-medium text-[#3C5270]">Email Address</span>
                  <input
                    type="email"
                    placeholder="name@company.com"
                    className="h-11 rounded-xl border border-[#CFDAE8] bg-[#FAFCFF] px-3.5 text-[0.95rem] text-[#122A4D] outline-none transition-colors placeholder:text-[#8CA0B9] focus:border-[#8BA3BF]"
                  />
                </label>

                <label className="grid gap-2 sm:col-span-2">
                  <span className="text-[0.86rem] font-medium text-[#3C5270]">Organisation</span>
                  <input
                    type="text"
                    placeholder="Organisation name"
                    className="h-11 rounded-xl border border-[#CFDAE8] bg-[#FAFCFF] px-3.5 text-[0.95rem] text-[#122A4D] outline-none transition-colors placeholder:text-[#8CA0B9] focus:border-[#8BA3BF]"
                  />
                </label>

                <label className="grid gap-2 sm:col-span-2">
                  <span className="text-[0.86rem] font-medium text-[#3C5270]">How Can We Help?</span>
                  <textarea
                    placeholder="Tell us briefly about your project, needs, or timeline..."
                    rows={5}
                    className="rounded-xl border border-[#CFDAE8] bg-[#FAFCFF] px-3.5 py-3 text-[0.95rem] text-[#122A4D] outline-none transition-colors placeholder:text-[#8CA0B9] focus:border-[#8BA3BF]"
                  />
                </label>
              </div>

              <div className="mt-6 flex flex-col gap-3 border-t border-[#DCE5F1] pt-5 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-3 text-[#5A6E88]">
                  <div className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#EEF4FC]">
                    <Mail className="h-4 w-4" />
                  </div>
                  <div className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#EEF4FC]">
                    <Globe className="h-4 w-4" />
                  </div>
                </div>

                <Button
                  type="submit"
                  className="h-11 cursor-pointer rounded-full bg-[#001A3D] px-7 text-[0.95rem] font-medium text-white transition-colors duration-300 hover:bg-[#032550]"
                >
                  <Send className="mr-2 h-4 w-4" />
                  Send Request
                </Button>
              </div>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

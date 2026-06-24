"use client";

import { motion } from "framer-motion";
import {
  Anchor,
  Activity,
  Smile,
  ShieldCheck,
  AlignCenter,
  Baby,
  Sparkles,
  Stethoscope,
  Droplet,
  PenLine,
  Layers,
  MonitorSmartphone,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";
import { SERVICES } from "@/lib/data";

const ICONS: Record<string, LucideIcon> = {
  Anchor,
  Activity,
  Smile,
  ShieldCheck,
  AlignCenter,
  Baby,
  Sparkles,
  Stethoscope,
  Droplet,
  PenLine,
  Layers,
  MonitorSmartphone,
};

export default function Services() {
  return (
    <section id="services" className="py-16 lg:py-24 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 lg:px-8">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-wide text-[#0B5ED7]">
            Treatments
          </span>
          <h2 className="font-[family-name:var(--font-heading)] text-3xl lg:text-4xl font-semibold mt-3 text-[#1F2937]">
            Dental Services We Offer
          </h2>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-slate-200 rounded-lg overflow-hidden border border-slate-200">
          {SERVICES.map((service, i) => {
            const Icon = ICONS[service.icon];
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: (i % 6) * 0.05 }}
                className="bg-white p-6 hover:bg-slate-50 transition-colors flex flex-col"
              >
                <Icon size={22} className="text-[#0B5ED7]" strokeWidth={1.75} />
                <h3 className="font-semibold text-base text-[#1F2937] mt-4">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed flex-1">
                  {service.description}
                </p>
                <a
                  href="#contact"
                  className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-[#0B5ED7] hover:gap-2.5 transition-all"
                >
                  Learn more <ArrowRight size={14} />
                </a>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

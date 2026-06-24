"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Activity,
  Anchor,
  Sparkles,
  AlignCenter,
  Smile,
  Baby,
  Zap,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";
import { SERVICES } from "@/lib/data";

const ICONS: Record<string, LucideIcon> = {
  Activity,
  Anchor,
  Sparkles,
  AlignCenter,
  Smile,
  Baby,
  Zap,
  ShieldCheck,
};

export default function Services() {
  return (
    <section id="services" className="section-padding bg-gradient-to-b from-white to-sky-50/50">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-sm font-bold uppercase tracking-wider text-[#14B8A6]">
            Our Services
          </span>
          <h2 className="text-3xl lg:text-4xl font-extrabold mt-2 text-[#1E293B]">
            Comprehensive Dental Care
          </h2>
          <p className="mt-4 text-slate-600">
            From routine checkups to advanced procedures, we offer complete
            dental solutions tailored to your needs.
          </p>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service, i) => {
            const Icon = ICONS[service.icon];
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (i % 4) * 0.1 }}
                className="group bg-white rounded-2xl p-6 shadow-md hover:shadow-2xl border border-slate-100 hover:-translate-y-2 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#0EA5E9] to-[#14B8A6] flex items-center justify-center text-white mb-5 group-hover:scale-110 transition-transform">
                  <Icon size={26} />
                </div>
                <h3 className="font-bold text-lg text-[#1E293B]">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm text-slate-600">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-14 grid sm:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative rounded-2xl overflow-hidden h-64 group"
          >
            <Image
              src="/images/patient-treatment.png"
              alt="Patient treatment at Anand Dental Hub"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-5">
              <p className="text-white font-semibold">Comfortable, Patient-Focused Treatment</p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative rounded-2xl overflow-hidden h-64 group"
          >
            <Image
              src="/images/hero-action.png"
              alt="Advanced dental procedures at Anand Dental Hub"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-5">
              <p className="text-white font-semibold">Modern Equipment & Techniques</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

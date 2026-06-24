"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { ABOUT_POINTS, CLINIC } from "@/lib/data";

export default function About() {
  return (
    <section id="about" className="py-16 lg:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 lg:px-8 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative order-2 lg:order-1"
        >
          <div className="rounded-xl overflow-hidden shadow-[0_8px_30px_-10px_rgba(15,23,42,0.2)]">
            <Image
              src="/images/clinic.png"
              alt="Inside Shawitry Dental Care & Implant Centre"
              width={620}
              height={520}
              className="w-full h-[360px] lg:h-[420px] object-cover"
            />
          </div>
          <div className="absolute -top-4 -left-4 bg-[#0B5ED7] text-white rounded-lg px-5 py-3 shadow-md">
            <p className="text-2xl font-bold leading-none">{new Date().getFullYear() - CLINIC.established}+</p>
            <p className="text-xs mt-1">Years in Giridih</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="order-1 lg:order-2"
        >
          <span className="text-xs font-semibold uppercase tracking-wide text-[#0B5ED7]">
            About The Clinic
          </span>
          <h2 className="font-[family-name:var(--font-heading)] text-3xl lg:text-4xl font-semibold mt-3 text-[#1F2937]">
            Why Families Trust Shawitry Dental Care
          </h2>
          <p className="mt-5 text-slate-600 leading-relaxed">
            Shawitry Dental Care & Implant Centre has been treating patients
            in Buxidih since {CLINIC.established}. Our focus is long-term
            dental health and patient comfort — not just a one-time fix. We
            take the time to explain what's actually needed before
            recommending any treatment.
          </p>

          <ul className="mt-7 space-y-3.5">
            {ABOUT_POINTS.map((point) => (
              <li key={point} className="flex items-start gap-3 text-sm sm:text-base text-[#1F2937]">
                <span className="mt-0.5 w-5 h-5 rounded-full bg-[#14B8A6]/10 flex items-center justify-center shrink-0">
                  <Check size={13} className="text-[#14B8A6]" strokeWidth={3} />
                </span>
                {point}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}

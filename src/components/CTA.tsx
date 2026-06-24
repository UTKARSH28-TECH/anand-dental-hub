"use client";

import { motion } from "framer-motion";
import { CalendarCheck, PhoneCall } from "lucide-react";
import { CLINIC } from "@/lib/data";

export default function CTA() {
  return (
    <section className="py-16 bg-[#0B5ED7]">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl mx-auto px-4 text-center"
      >
        <h2 className="font-[family-name:var(--font-heading)] text-2xl sm:text-3xl font-semibold text-white">
          Have a dental concern you've been putting off?
        </h2>
        <p className="mt-3 text-blue-100">
          Come in for a consultation — we'll explain what's needed and what isn't.
        </p>
        <div className="mt-7 flex flex-wrap justify-center gap-3">
          <a
            href="#contact"
            className="flex items-center gap-2 font-semibold text-[#0B5ED7] bg-white px-6 py-3 rounded-md hover:bg-blue-50 transition-colors"
          >
            <CalendarCheck size={18} /> Book Appointment
          </a>
          <a
            href={CLINIC.phoneHref}
            className="flex items-center gap-2 font-semibold text-white border border-white/60 px-6 py-3 rounded-md hover:bg-white/10 transition-colors"
          >
            <PhoneCall size={18} /> {CLINIC.phone}
          </a>
        </div>
      </motion.div>
    </section>
  );
}

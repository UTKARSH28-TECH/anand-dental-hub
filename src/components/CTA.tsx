"use client";

import { motion } from "framer-motion";
import { CalendarCheck, PhoneCall } from "lucide-react";
import { CLINIC } from "@/lib/data";

export default function CTA() {
  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-r from-[#0EA5E9] via-[#0284C7] to-[#14B8A6]">
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_20%_20%,white,transparent_40%)]" />
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto px-4 text-center relative z-10"
      >
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
          Ready For A Healthier Smile?
        </h2>
        <p className="mt-4 text-sky-50 text-lg">
          Book your consultation today with our experienced dental specialists.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a
            href="#contact"
            className="flex items-center gap-2 font-semibold text-[#0284C7] bg-white px-7 py-3.5 rounded-full shadow-xl hover:scale-105 transition-transform"
          >
            <CalendarCheck size={18} /> Book Appointment
          </a>
          <a
            href={CLINIC.phoneHref}
            className="flex items-center gap-2 font-semibold text-white border-2 border-white/70 px-7 py-3.5 rounded-full hover:bg-white/10 transition-colors"
          >
            <PhoneCall size={18} /> Call {CLINIC.phone}
          </a>
        </div>
      </motion.div>
    </section>
  );
}

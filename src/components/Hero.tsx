"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Star, PhoneCall, CalendarCheck } from "lucide-react";
import { CLINIC } from "@/lib/data";

const stats = [
  { value: "534+", label: "Happy Patients" },
  { value: "4.9★", label: "Google Rating" },
  { value: "10+", label: "Years Experience" },
  { value: "100%", label: "Patient Satisfaction" },
];

const floatingCards = [
  { label: "Root Canal", delay: 0 },
  { label: "Dental Implants", delay: 0.15 },
  { label: "Braces & Aligners", delay: 0.3 },
  { label: "Teeth Whitening", delay: 0.45 },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden pt-32 pb-20 lg:pt-40 lg:pb-28 bg-gradient-to-br from-sky-50 via-white to-teal-50"
    >
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#0EA5E9]/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#14B8A6]/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 lg:px-8 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="inline-flex items-center gap-2 bg-white shadow-md px-4 py-2 rounded-full text-sm font-semibold text-[#0284C7] mb-6">
            <Star size={16} className="fill-amber-400 text-amber-400" />
            {CLINIC.rating} Rated | {CLINIC.reviews}+ Happy Patients
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-[#1E293B]">
            Best Dental Clinic in{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0EA5E9] to-[#14B8A6]">
              Giridih
            </span>
          </h1>

          <p className="mt-6 text-lg text-slate-600 max-w-xl">
            Advanced dental care, painless treatments and beautiful smile
            transformations by experienced M.D.S. specialists.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="flex items-center gap-2 text-white font-semibold bg-gradient-to-r from-[#0EA5E9] to-[#0284C7] px-7 py-3.5 rounded-full shadow-xl shadow-sky-200 hover:scale-105 transition-transform"
            >
              <CalendarCheck size={18} /> Book Appointment
            </a>
            <a
              href={CLINIC.phoneHref}
              className="flex items-center gap-2 font-semibold text-[#0284C7] bg-white border border-[#0EA5E9]/30 px-7 py-3.5 rounded-full shadow-md hover:bg-sky-50 transition-colors"
            >
              <PhoneCall size={18} /> Call Now
            </a>
          </div>

          <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-6">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
              >
                <p className="text-2xl lg:text-3xl font-extrabold text-[#0EA5E9]">
                  {s.value}
                </p>
                <p className="text-xs sm:text-sm text-slate-500 font-medium">
                  {s.label}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative"
        >
          <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white">
            <Image
              src="/images/hero-action.png"
              alt="Dental clinic in action at Anand Dental Hub"
              width={700}
              height={800}
              priority
              className="w-full h-[420px] sm:h-[480px] lg:h-[560px] object-cover"
            />
          </div>

          {floatingCards.map((card, i) => (
            <motion.div
              key={card.label}
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 + card.delay }}
              className={`animate-float absolute bg-white shadow-xl rounded-2xl px-4 py-3 text-sm font-semibold flex items-center gap-2 text-[#1E293B] ${
                i === 0
                  ? "top-6 -left-4 sm:-left-8"
                  : i === 1
                  ? "top-1/3 -right-4 sm:-right-8"
                  : i === 2
                  ? "bottom-24 -left-4 sm:-left-10"
                  : "bottom-6 -right-2 sm:-right-6"
              }`}
              style={{ animationDelay: `${card.delay}s` }}
            >
              <span className="w-2 h-2 rounded-full bg-[#14B8A6]" />
              {card.label}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { PhoneCall, CalendarCheck } from "lucide-react";
import { CLINIC } from "@/lib/data";

const floatingCards = ["Dental Implants", "Root Canal", "Smile Design", "Kids Dentistry"];

export default function Hero() {
  return (
    <section id="home" className="relative pt-24 pb-16 lg:pt-32 lg:pb-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 lg:px-8 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-flex items-center gap-2 border border-slate-200 px-3.5 py-1.5 rounded-full text-xs font-semibold text-[#0B5ED7] tracking-wide uppercase">
            Trusted Since {CLINIC.established}
          </span>

          <h1 className="font-[family-name:var(--font-heading)] mt-5 text-4xl sm:text-5xl leading-[1.1] font-semibold text-[#1F2937]">
            Complete Dental Care For The Entire Family
          </h1>

          <p className="mt-5 text-base sm:text-lg text-slate-600 max-w-lg leading-relaxed">
            Modern dentistry, advanced implant solutions, and patient-focused
            care in the heart of Giridih.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#contact"
              className="flex items-center gap-2 text-white font-semibold bg-[#0B5ED7] px-6 py-3 rounded-md hover:bg-[#0A52BD] transition-colors"
            >
              <CalendarCheck size={18} /> Book Appointment
            </a>
            <a
              href={CLINIC.phoneHref}
              className="flex items-center gap-2 font-semibold text-[#1F2937] border border-slate-300 px-6 py-3 rounded-md hover:border-[#0B5ED7] hover:text-[#0B5ED7] transition-colors"
            >
              <PhoneCall size={18} /> Call Now
            </a>
          </div>

          <p className="mt-8 text-sm text-slate-500 border-l-2 border-slate-200 pl-4">
            Chourasiya Market, Main Road, Near H.E. School, Buxidih, Giridih
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="relative"
        >
          <div className="relative rounded-xl overflow-hidden shadow-[0_8px_30px_-10px_rgba(15,23,42,0.25)]">
            <Image
              src="/images/hero-clinic.png"
              alt="Shawitry Dental Care & Implant Centre, Giridih"
              width={680}
              height={760}
              priority
              className="w-full h-[380px] sm:h-[440px] lg:h-[500px] object-cover"
            />
          </div>

          <div className="absolute -bottom-5 left-4 right-4 sm:left-6 sm:right-auto bg-white rounded-lg shadow-md border border-slate-100 px-4 py-3 flex flex-wrap gap-x-5 gap-y-1.5">
            {floatingCards.map((label) => (
              <span
                key={label}
                className="flex items-center gap-1.5 text-xs sm:text-sm font-medium text-[#1F2937]"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#14B8A6]" />
                {label}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

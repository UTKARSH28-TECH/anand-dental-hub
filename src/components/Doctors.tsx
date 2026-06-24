"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { DOCTOR } from "@/lib/data";

export default function Doctors() {
  return (
    <section id="doctor" className="py-16 lg:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 lg:px-8">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-wide text-[#0B5ED7]">
            Your Dentist
          </span>
          <h2 className="font-[family-name:var(--font-heading)] text-3xl lg:text-4xl font-semibold mt-3 text-[#1F2937]">
            Meet Dr. Mohit Kumar
          </h2>
        </div>

        <div className="mt-10 grid lg:grid-cols-[340px_1fr] gap-10 items-start">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-xl overflow-hidden shadow-[0_8px_30px_-10px_rgba(15,23,42,0.2)]"
          >
            <Image
              src={DOCTOR.image}
              alt={DOCTOR.name}
              width={500}
              height={600}
              className="w-full h-[380px] lg:h-[440px] object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-xl font-semibold text-[#1F2937]">{DOCTOR.name}</h3>
            <p className="text-sm font-medium text-[#0B5ED7] mt-1">{DOCTOR.designation}</p>

            <p className="mt-5 text-slate-600 leading-relaxed">{DOCTOR.bio}</p>

            <blockquote className="mt-6 border-l-2 border-[#14B8A6] pl-4 text-sm text-slate-600 italic">
              {DOCTOR.quote}
            </blockquote>

            <p className="mt-7 text-xs font-semibold uppercase tracking-wide text-slate-500">
              Areas of Focus
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {DOCTOR.specializations.map((spec) => (
                <span
                  key={spec}
                  className="text-sm text-[#1F2937] bg-slate-100 px-3 py-1.5 rounded-md"
                >
                  {spec}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

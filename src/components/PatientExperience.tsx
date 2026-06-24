"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { PATIENT_GROUPS } from "@/lib/data";

export default function PatientExperience() {
  return (
    <section id="patients" className="py-16 lg:py-24 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 lg:px-8 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-xs font-semibold uppercase tracking-wide text-[#0B5ED7]">
            Patient Experience
          </span>
          <h2 className="font-[family-name:var(--font-heading)] text-3xl lg:text-4xl font-semibold mt-3 text-[#1F2937]">
            Comfortable Care For Every Age Group
          </h2>
          <p className="mt-5 text-slate-600 leading-relaxed">
            We believe every patient deserves clear guidance and quality
            treatment, whether it's a child's first dental visit or a senior
            citizen's denture fitting.
          </p>

          <div className="mt-8 grid sm:grid-cols-3 gap-4">
            {PATIENT_GROUPS.map((group) => (
              <div key={group.title} className="bg-white rounded-lg border border-slate-200 p-5">
                <p className="font-semibold text-[#1F2937]">{group.title}</p>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                  {group.description}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="rounded-xl overflow-hidden shadow-[0_8px_30px_-10px_rgba(15,23,42,0.2)]"
        >
          <Image
            src="/images/happy-patient.png"
            alt="Happy patient at Shawitry Dental Care"
            width={600}
            height={520}
            className="w-full h-[360px] lg:h-[420px] object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}

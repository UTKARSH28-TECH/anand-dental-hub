"use client";

import { motion } from "framer-motion";
import { TESTIMONIALS } from "@/lib/data";

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-16 lg:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 lg:px-8">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-wide text-[#0B5ED7]">
            Patient Feedback
          </span>
          <h2 className="font-[family-name:var(--font-heading)] text-3xl lg:text-4xl font-semibold mt-3 text-[#1F2937]">
            What Patients Say
          </h2>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 gap-5">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="border border-slate-200 rounded-lg p-6"
            >
              <p className="text-[#1F2937] leading-relaxed">"{t.text}"</p>
              <p className="mt-4 text-sm font-medium text-slate-500">{t.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

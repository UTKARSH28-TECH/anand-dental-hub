"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { TESTIMONIALS, CLINIC } from "@/lib/data";

export default function Testimonials() {
  return (
    <section id="testimonials" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-sm font-bold uppercase tracking-wider text-[#14B8A6]">
            Testimonials
          </span>
          <h2 className="text-3xl lg:text-4xl font-extrabold mt-2 text-[#1E293B]">
            What Our Patients Say
          </h2>
          <div className="mt-5 inline-flex items-center gap-2 bg-amber-50 px-5 py-2.5 rounded-full">
            <Star size={20} className="fill-amber-400 text-amber-400" />
            <span className="font-bold text-[#1E293B]">{CLINIC.rating} Rating</span>
            <span className="text-slate-500 text-sm">
              · {CLINIC.reviews} Reviews
            </span>
          </div>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="bg-gradient-to-b from-sky-50/70 to-white rounded-2xl p-7 shadow-md border border-slate-100 hover:shadow-xl transition-shadow"
            >
              <Quote className="text-[#0EA5E9]/30" size={36} />
              <div className="flex gap-1 mt-3">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} size={16} className="fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="mt-4 text-slate-700 italic">&ldquo;{t.text}&rdquo;</p>
              <p className="mt-5 font-bold text-[#1E293B]">{t.name}</p>
              <p className="text-xs text-slate-500">Verified Patient</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

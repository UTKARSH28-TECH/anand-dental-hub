"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { FEATURES } from "@/lib/data";

export default function About() {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <div className="rounded-[2rem] overflow-hidden shadow-2xl">
            <Image
              src="/images/clinic.png"
              alt="Anand Dental Hub Clinic"
              width={650}
              height={650}
              className="w-full h-[420px] lg:h-[500px] object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-[#0EA5E9] to-[#14B8A6] text-white rounded-2xl px-6 py-4 shadow-xl hidden sm:block">
            <p className="text-2xl font-extrabold">10+</p>
            <p className="text-xs font-medium">Years of Excellence</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="text-sm font-bold uppercase tracking-wider text-[#14B8A6]">
            About Us
          </span>
          <h2 className="text-3xl lg:text-4xl font-extrabold mt-2 text-[#1E293B]">
            Why Choose Anand Dental Hub?
          </h2>
          <p className="mt-5 text-slate-600 text-lg">
            At Anand Dental Hub, we combine advanced technology, expert
            dental care and a patient-first approach to deliver exceptional
            oral healthcare.
          </p>

          <div className="mt-8 grid sm:grid-cols-2 gap-4">
            {FEATURES.map((feature, i) => (
              <motion.div
                key={feature}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="flex items-start gap-3 bg-sky-50/60 rounded-xl p-3"
              >
                <CheckCircle2 size={20} className="text-[#0EA5E9] mt-0.5 shrink-0" />
                <span className="text-sm font-medium text-[#1E293B]">
                  {feature}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

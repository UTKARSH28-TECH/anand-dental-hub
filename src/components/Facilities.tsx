"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FACILITIES } from "@/lib/data";

export default function Facilities() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 lg:px-8 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-xs font-semibold uppercase tracking-wide text-[#0B5ED7]">
            Our Facility
          </span>
          <h2 className="font-[family-name:var(--font-heading)] text-3xl lg:text-4xl font-semibold mt-3 text-[#1F2937]">
            Inside The Clinic
          </h2>

          <div className="mt-8 divide-y divide-slate-200 border-t border-slate-200">
            {FACILITIES.map((facility) => (
              <div key={facility.title} className="py-4">
                <p className="font-semibold text-[#1F2937]">{facility.title}</p>
                <p className="mt-1 text-sm text-slate-600">{facility.description}</p>
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
            src="/images/clinic.png"
            alt="Shawitry Dental Care clinic facility"
            width={620}
            height={560}
            className="w-full h-[380px] lg:h-[460px] object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}

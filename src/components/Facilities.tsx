"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { FACILITIES } from "@/lib/data";

export default function Facilities() {
  return (
    <section className="section-padding bg-gradient-to-b from-sky-50/50 to-white">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="text-sm font-bold uppercase tracking-wider text-[#14B8A6]">
            Our Facilities
          </span>
          <h2 className="text-3xl lg:text-4xl font-extrabold mt-2 text-[#1E293B]">
            World-Class Infrastructure
          </h2>
          <p className="mt-4 text-slate-600 text-lg">
            Our clinic is equipped with the latest dental technology to
            ensure precise diagnosis, comfortable treatment, and faster
            recovery.
          </p>

          <div className="mt-8 grid sm:grid-cols-2 gap-4">
            {FACILITIES.map((facility, i) => (
              <motion.div
                key={facility}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="flex items-center gap-3 bg-white rounded-xl p-4 shadow-sm border border-slate-100"
              >
                <CheckCircle2 size={20} className="text-[#14B8A6] shrink-0" />
                <span className="text-sm font-semibold text-[#1E293B]">
                  {facility}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="rounded-[2rem] overflow-hidden shadow-2xl"
        >
          <Image
            src="/images/clinic.png"
            alt="Anand Dental Hub Facilities"
            width={650}
            height={600}
            className="w-full h-[420px] lg:h-[480px] object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}

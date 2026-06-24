"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { GraduationCap, BadgeCheck } from "lucide-react";
import { DOCTORS } from "@/lib/data";
import { FacebookIcon, InstagramIcon, LinkedinIcon } from "@/components/SocialIcons";

export default function Doctors() {
  return (
    <section id="doctors" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-sm font-bold uppercase tracking-wider text-[#14B8A6]">
            Our Team
          </span>
          <h2 className="text-3xl lg:text-4xl font-extrabold mt-2 text-[#1E293B]">
            Meet Our Specialists
          </h2>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {DOCTORS.map((doc, i) => (
            <motion.div
              key={doc.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="group bg-gradient-to-b from-sky-50 to-white rounded-3xl p-7 shadow-lg border border-slate-100 hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative w-full h-72 rounded-2xl overflow-hidden mb-6 shadow-md">
                <Image
                  src={doc.image}
                  alt={doc.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 right-3 bg-white/95 rounded-full px-3 py-1.5 flex items-center gap-1.5 shadow-md text-xs font-bold text-[#0284C7]">
                  <GraduationCap size={14} /> {doc.qualification}
                </div>
              </div>

              <h3 className="text-xl font-bold text-[#1E293B]">{doc.name}</h3>
              <p className="text-sm font-semibold text-[#0EA5E9] mt-1">
                {doc.designation}
              </p>
              <p className="mt-3 text-sm text-slate-600">{doc.description}</p>

              <div className="mt-5 flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 bg-[#14B8A6]/10 text-[#14B8A6] text-xs font-bold px-3 py-1.5 rounded-full">
                  <BadgeCheck size={14} /> {doc.experience}
                </span>
                <div className="flex items-center gap-2 text-slate-400">
                  <FacebookIcon size={18} className="hover:text-[#0EA5E9] cursor-pointer transition-colors" />
                  <InstagramIcon size={18} className="hover:text-[#0EA5E9] cursor-pointer transition-colors" />
                  <LinkedinIcon size={18} className="hover:text-[#0EA5E9] cursor-pointer transition-colors" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

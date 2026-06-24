"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { GALLERY_IMAGES } from "@/lib/data";

export default function Gallery() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section id="gallery" className="section-padding bg-gradient-to-b from-white to-sky-50/50">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-sm font-bold uppercase tracking-wider text-[#14B8A6]">
            Gallery
          </span>
          <h2 className="text-3xl lg:text-4xl font-extrabold mt-2 text-[#1E293B]">
            A Glimpse Inside Our Clinic
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 gap-4 auto-rows-[180px] sm:auto-rows-[220px]">
          {GALLERY_IMAGES.map((src, i) => (
            <motion.button
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: (i % 6) * 0.08 }}
              onClick={() => setActive(i)}
              className={`relative rounded-2xl overflow-hidden group cursor-pointer ${
                i === 0 ? "col-span-2 row-span-2 sm:col-span-1 sm:row-span-2" : ""
              } ${i === 4 ? "sm:row-span-2" : ""}`}
            >
              <Image
                src={src}
                alt={`Anand Dental Hub gallery image ${i + 1}`}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                <span className="opacity-0 group-hover:opacity-100 text-white font-semibold text-sm transition-opacity">
                  View
                </span>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/85 z-[100] flex items-center justify-center p-4"
            onClick={() => setActive(null)}
          >
            <button
              className="absolute top-6 right-6 text-white"
              onClick={() => setActive(null)}
              aria-label="Close"
            >
              <X size={32} />
            </button>
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative w-full max-w-3xl h-[60vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={GALLERY_IMAGES[active]}
                alt="Gallery preview"
                fill
                className="object-contain"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

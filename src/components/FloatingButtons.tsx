"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, ArrowUp } from "lucide-react";
import { CLINIC } from "@/lib/data";

export default function FloatingButtons() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 400);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col gap-3 items-end">
      <AnimatePresence>
        {showTop && (
          <motion.button
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Back to top"
            className="w-11 h-11 rounded-full bg-[#1F2937] text-white flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
          >
            <ArrowUp size={20} />
          </motion.button>
        )}
      </AnimatePresence>

      <a
        href={CLINIC.phoneHref}
        aria-label="Call Now"
        className="w-[52px] h-[52px] rounded-full bg-[#0B5ED7] text-white flex items-center justify-center shadow-xl hover:scale-110 transition-transform"
      >
        <Phone size={22} />
      </a>

      <a
        href="https://wa.me/919036340518"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
        className="w-[52px] h-[52px] rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-xl hover:scale-110 transition-transform animate-float-slow"
      >
        <svg viewBox="0 0 24 24" width="26" height="26" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.149-.149.345-.347.516-.52.173-.174.23-.298.345-.497.115-.198.057-.347-.04-.495C9.945 8.39 9.6 7.456 9.5 7.275c-.099-.198-.297-.198-.495-.198-.198 0-.479.05-.726.198-.247.149-.94.792-.94 1.93 0 1.139.836 2.401 1.157 3.026.322.624 2.184 3.474 5.27 4.722 2.997 1.213 2.997.823 3.535.773.538-.05 1.758-.717 2.005-1.413.247-.694.247-1.29.173-1.413-.075-.124-.272-.198-.57-.347zM12.054 22.5c-1.876 0-3.715-.504-5.339-1.461L3 22.5l1.557-3.604A10.418 10.418 0 011.5 12.054C1.5 6.21 6.21 1.5 12.054 1.5c2.83 0 5.49 1.103 7.493 3.106A10.534 10.534 0 0122.5 12.054c0 5.844-4.71 10.446-10.446 10.446z" />
        </svg>
      </a>
    </div>
  );
}

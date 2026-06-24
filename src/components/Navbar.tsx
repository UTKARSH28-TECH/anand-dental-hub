"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, CalendarCheck } from "lucide-react";
import { NAV_LINKS, CLINIC } from "@/lib/data";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/90 backdrop-blur-md shadow-md py-2" : "bg-white/60 backdrop-blur-sm py-4"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 lg:px-8 flex items-center justify-between">
        <Link href="#home" className="flex items-center gap-2 shrink-0">
          <span className="text-2xl">🦷</span>
          <span className="font-bold text-lg sm:text-xl text-[#1E293B]">
            Anand <span className="text-[#0EA5E9]">Dental Hub</span>
          </span>
        </Link>

        <ul className="hidden lg:flex items-center gap-7 text-sm font-medium text-[#1E293B]">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="hover:text-[#0EA5E9] transition-colors relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#0EA5E9] group-hover:w-full transition-all duration-300" />
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden lg:flex items-center gap-3">
          <a
            href={CLINIC.phoneHref}
            className="flex items-center gap-2 text-sm font-semibold text-[#0284C7] border border-[#0EA5E9]/30 px-4 py-2 rounded-full hover:bg-[#0EA5E9]/10 transition-colors"
          >
            <Phone size={16} /> Call Now
          </a>
          <a
            href="#contact"
            className="flex items-center gap-2 text-sm font-semibold text-white bg-gradient-to-r from-[#0EA5E9] to-[#0284C7] px-5 py-2.5 rounded-full shadow-lg shadow-sky-200 hover:shadow-sky-300 hover:scale-105 transition-all"
          >
            <CalendarCheck size={16} /> Book Appointment
          </a>
        </div>

        <button
          className="lg:hidden text-[#1E293B]"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden overflow-hidden bg-white border-t border-slate-100 mt-2"
          >
            <ul className="flex flex-col gap-1 px-6 py-4">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block py-2.5 text-[#1E293B] font-medium hover:text-[#0EA5E9]"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <div className="flex flex-col gap-3 mt-3">
                <a
                  href={CLINIC.phoneHref}
                  className="flex items-center justify-center gap-2 text-sm font-semibold text-[#0284C7] border border-[#0EA5E9]/30 px-4 py-2.5 rounded-full"
                >
                  <Phone size={16} /> Call Now
                </a>
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-center gap-2 text-sm font-semibold text-white bg-gradient-to-r from-[#0EA5E9] to-[#0284C7] px-5 py-2.5 rounded-full"
                >
                  <CalendarCheck size={16} /> Book Appointment
                </a>
              </div>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

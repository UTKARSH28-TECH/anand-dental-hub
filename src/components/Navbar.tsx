"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import { NAV_LINKS, CLINIC } from "@/lib/data";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 bg-white ${
        scrolled ? "shadow-[0_1px_0_0_rgba(0,0,0,0.08)]" : "border-b border-slate-100"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-4 lg:px-8 h-16 lg:h-[72px] flex items-center justify-between">
        <Link href="#home" className="flex items-center gap-2.5 shrink-0">
          <span className="font-[family-name:var(--font-heading)] text-lg sm:text-xl font-semibold text-[#1F2937] tracking-tight">
            Shawitry <span className="text-[#0B5ED7]">Dental Care</span>
          </span>
        </Link>

        <ul className="hidden lg:flex items-center gap-8 text-sm font-medium text-[#1F2937]/80">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="hover:text-[#0B5ED7] transition-colors">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden lg:flex items-center gap-3">
          <a
            href={CLINIC.phoneHref}
            className="flex items-center gap-2 text-sm font-medium text-[#0B5ED7]"
          >
            <Phone size={15} /> {CLINIC.phone}
          </a>
          <a
            href="#contact"
            className="text-sm font-semibold text-white bg-[#0B5ED7] px-5 py-2.5 rounded-md hover:bg-[#0A52BD] transition-colors"
          >
            Book Appointment
          </a>
        </div>

        <button
          className="lg:hidden text-[#1F2937]"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden overflow-hidden bg-white border-t border-slate-100"
          >
            <ul className="flex flex-col gap-1 px-6 py-4">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block py-2.5 text-[#1F2937] font-medium hover:text-[#0B5ED7]"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <div className="flex flex-col gap-3 mt-3">
                <a
                  href={CLINIC.phoneHref}
                  className="flex items-center justify-center gap-2 text-sm font-medium text-[#0B5ED7] border border-slate-200 px-4 py-2.5 rounded-md"
                >
                  <Phone size={16} /> {CLINIC.phone}
                </a>
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-center gap-2 text-sm font-semibold text-white bg-[#0B5ED7] px-5 py-2.5 rounded-md"
                >
                  Book Appointment
                </a>
              </div>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

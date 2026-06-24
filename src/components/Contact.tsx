"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { CLINIC } from "@/lib/data";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="contact" className="py-16 lg:py-24 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 lg:px-8">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-wide text-[#0B5ED7]">
            Visit Us
          </span>
          <h2 className="font-[family-name:var(--font-heading)] text-3xl lg:text-4xl font-semibold mt-3 text-[#1F2937]">
            Get In Touch
          </h2>
        </div>

        <div className="mt-10 grid lg:grid-cols-2 gap-10">
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <div className="flex items-start gap-3.5 bg-white p-4 rounded-lg border border-slate-200">
              <MapPin className="text-[#0B5ED7] shrink-0 mt-0.5" size={20} />
              <div>
                <p className="font-semibold text-[#1F2937] text-sm">Address</p>
                <p className="text-sm text-slate-600 mt-1">
                  {CLINIC.address.line1}, {CLINIC.address.line2},{" "}
                  {CLINIC.address.city}
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3.5 bg-white p-4 rounded-lg border border-slate-200">
              <Phone className="text-[#0B5ED7] shrink-0 mt-0.5" size={20} />
              <div>
                <p className="font-semibold text-[#1F2937] text-sm">Phone</p>
                <a href={CLINIC.phoneHref} className="text-sm text-slate-600 mt-1 hover:text-[#0B5ED7]">
                  {CLINIC.phone}
                </a>
              </div>
            </div>
            <div className="flex items-start gap-3.5 bg-white p-4 rounded-lg border border-slate-200">
              <Mail className="text-[#0B5ED7] shrink-0 mt-0.5" size={20} />
              <div>
                <p className="font-semibold text-[#1F2937] text-sm">Email</p>
                <a href={`mailto:${CLINIC.email}`} className="text-sm text-slate-600 mt-1 hover:text-[#0B5ED7]">
                  {CLINIC.email}
                </a>
              </div>
            </div>
            <div className="flex items-start gap-3.5 bg-white p-4 rounded-lg border border-slate-200">
              <Clock className="text-[#0B5ED7] shrink-0 mt-0.5" size={20} />
              <div>
                <p className="font-semibold text-[#1F2937] text-sm">Timings</p>
                <p className="text-sm text-slate-600 mt-1">{CLINIC.hoursWeekday}</p>
                <p className="text-sm text-slate-600">{CLINIC.hoursSunday}</p>
              </div>
            </div>

            <div className="rounded-lg overflow-hidden h-56 border border-slate-200">
              <iframe
                title="Shawitry Dental Care & Implant Centre Location"
                className="w-full h-full"
                loading="lazy"
                src="https://www.google.com/maps?q=Buxidih,Giridih,Jharkhand,815301&output=embed"
              />
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            onSubmit={handleSubmit}
            className="bg-white p-6 lg:p-7 rounded-lg border border-slate-200 space-y-4 h-fit"
          >
            <div>
              <label className="text-sm font-medium text-[#1F2937]">Name</label>
              <input
                required
                type="text"
                placeholder="Your full name"
                className="mt-1.5 w-full rounded-md border border-slate-300 px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#0B5ED7]/40 focus:border-[#0B5ED7]"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-[#1F2937]">Phone</label>
              <input
                required
                type="tel"
                placeholder="Your phone number"
                className="mt-1.5 w-full rounded-md border border-slate-300 px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#0B5ED7]/40 focus:border-[#0B5ED7]"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-[#1F2937]">Email</label>
              <input
                type="email"
                placeholder="Your email address"
                className="mt-1.5 w-full rounded-md border border-slate-300 px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#0B5ED7]/40 focus:border-[#0B5ED7]"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-[#1F2937]">Message</label>
              <textarea
                rows={4}
                placeholder="Tell us about your dental concern"
                className="mt-1.5 w-full rounded-md border border-slate-300 px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#0B5ED7]/40 focus:border-[#0B5ED7]"
              />
            </div>
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 text-white font-semibold bg-[#0B5ED7] py-3 rounded-md hover:bg-[#0A52BD] transition-colors"
            >
              <Send size={16} /> Submit
            </button>
            {submitted && (
              <p className="text-sm text-center font-medium text-[#14B8A6]">
                Thank you — we will get back to you shortly.
              </p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}

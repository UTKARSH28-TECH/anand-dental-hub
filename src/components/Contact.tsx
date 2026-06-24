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
    <section id="contact" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-sm font-bold uppercase tracking-wider text-[#14B8A6]">
            Contact Us
          </span>
          <h2 className="text-3xl lg:text-4xl font-extrabold mt-2 text-[#1E293B]">
            Get In Touch
          </h2>
        </div>

        <div className="mt-14 grid lg:grid-cols-2 gap-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-5"
          >
            <div className="flex items-start gap-4 bg-sky-50/60 p-5 rounded-2xl">
              <MapPin className="text-[#0EA5E9] shrink-0" size={24} />
              <div>
                <p className="font-bold text-[#1E293B]">Address</p>
                <p className="text-sm text-slate-600 mt-1">
                  {CLINIC.address.line1}, {CLINIC.address.line2},{" "}
                  {CLINIC.address.city}
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 bg-sky-50/60 p-5 rounded-2xl">
              <Phone className="text-[#0EA5E9] shrink-0" size={24} />
              <div>
                <p className="font-bold text-[#1E293B]">Phone</p>
                <a href={CLINIC.phoneHref} className="text-sm text-slate-600 mt-1 hover:text-[#0EA5E9]">
                  {CLINIC.phone}
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4 bg-sky-50/60 p-5 rounded-2xl">
              <Mail className="text-[#0EA5E9] shrink-0" size={24} />
              <div>
                <p className="font-bold text-[#1E293B]">Email</p>
                <a href={`mailto:${CLINIC.email}`} className="text-sm text-slate-600 mt-1 hover:text-[#0EA5E9]">
                  {CLINIC.email}
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4 bg-sky-50/60 p-5 rounded-2xl">
              <Clock className="text-[#0EA5E9] shrink-0" size={24} />
              <div>
                <p className="font-bold text-[#1E293B]">Opening Hours</p>
                <p className="text-sm text-slate-600 mt-1">{CLINIC.hours}</p>
                <p className="text-xs font-semibold text-[#14B8A6] mt-1">
                  Emergency Consultation Available
                </p>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden h-56 border border-slate-100">
              <iframe
                title="Anand Dental Hub Location Map"
                className="w-full h-full"
                loading="lazy"
                src="https://www.google.com/maps?q=Giridih,Jharkhand,815301&output=embed"
              />
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            onSubmit={handleSubmit}
            className="bg-gradient-to-b from-sky-50/70 to-white p-7 rounded-3xl shadow-lg border border-slate-100 space-y-4"
          >
            <div>
              <label className="text-sm font-semibold text-[#1E293B]">Name</label>
              <input
                required
                type="text"
                placeholder="Your full name"
                className="mt-1.5 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#0EA5E9]"
              />
            </div>
            <div>
              <label className="text-sm font-semibold text-[#1E293B]">Phone</label>
              <input
                required
                type="tel"
                placeholder="Your phone number"
                className="mt-1.5 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#0EA5E9]"
              />
            </div>
            <div>
              <label className="text-sm font-semibold text-[#1E293B]">Email</label>
              <input
                type="email"
                placeholder="Your email address"
                className="mt-1.5 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#0EA5E9]"
              />
            </div>
            <div>
              <label className="text-sm font-semibold text-[#1E293B]">Message</label>
              <textarea
                rows={4}
                placeholder="Tell us about your dental concern"
                className="mt-1.5 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#0EA5E9]"
              />
            </div>
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 text-white font-semibold bg-gradient-to-r from-[#0EA5E9] to-[#0284C7] py-3.5 rounded-xl shadow-lg hover:scale-[1.02] transition-transform"
            >
              <Send size={18} /> Submit
            </button>
            {submitted && (
              <p className="text-sm text-center font-medium text-[#14B8A6]">
                Thank you! We will contact you shortly.
              </p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}

import { MapPin, Phone, Mail } from "lucide-react";
import { CLINIC, NAV_LINKS, SERVICES } from "@/lib/data";
import { FacebookIcon, InstagramIcon } from "@/components/SocialIcons";

export default function Footer() {
  return (
    <footer className="bg-[#1F2937] text-slate-300">
      <div className="max-w-6xl mx-auto px-4 lg:px-8 py-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <span className="font-[family-name:var(--font-heading)] font-semibold text-lg text-white">
            Shawitry Dental Care
          </span>
          <p className="mt-3 text-sm text-slate-400">{CLINIC.tagline}</p>
          <p className="mt-1 text-xs text-slate-500">Established {CLINIC.established}</p>
          <div className="flex gap-3 mt-5">
            <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#0B5ED7] transition-colors">
              <FacebookIcon size={14} />
            </a>
            <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#0B5ED7] transition-colors">
              <InstagramIcon size={14} />
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-semibold text-white mb-4 text-sm">Quick Links</h4>
          <ul className="space-y-2.5 text-sm">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="hover:text-[#0B5ED7] transition-colors">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-white mb-4 text-sm">Services</h4>
          <ul className="space-y-2.5 text-sm">
            {SERVICES.slice(0, 6).map((s) => (
              <li key={s.title}>{s.title}</li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-white mb-4 text-sm">Contact Info</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2">
              <MapPin size={15} className="mt-0.5 shrink-0 text-[#0B5ED7]" />
              <span>
                {CLINIC.address.line1}, {CLINIC.address.line2}, {CLINIC.address.city}
              </span>
            </li>
            <li className="flex items-center gap-2">
              <Phone size={15} className="text-[#0B5ED7]" /> {CLINIC.phone}
            </li>
            <li className="flex items-center gap-2">
              <Mail size={15} className="text-[#0B5ED7]" /> {CLINIC.email}
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 py-5 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} Shawitry Dental Care & Implant Centre. All Rights Reserved.
      </div>
    </footer>
  );
}

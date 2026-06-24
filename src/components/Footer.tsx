import { MapPin, Phone, Mail } from "lucide-react";
import { CLINIC, NAV_LINKS, SERVICES } from "@/lib/data";
import { FacebookIcon, InstagramIcon } from "@/components/SocialIcons";

export default function Footer() {
  return (
    <footer className="bg-[#0F172A] text-slate-300">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-2xl">🦷</span>
            <span className="font-bold text-lg text-white">Anand Dental Hub</span>
          </div>
          <p className="mt-4 text-sm text-slate-400">{CLINIC.tagline}</p>
          <div className="flex gap-3 mt-5">
            <a href="#" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#0EA5E9] transition-colors">
              <FacebookIcon size={16} />
            </a>
            <a href="#" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#0EA5E9] transition-colors">
              <InstagramIcon size={16} />
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-bold text-white mb-4">Quick Links</h4>
          <ul className="space-y-2.5 text-sm">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="hover:text-[#0EA5E9] transition-colors">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-white mb-4">Services</h4>
          <ul className="space-y-2.5 text-sm">
            {SERVICES.slice(0, 6).map((s) => (
              <li key={s.title}>{s.title}</li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-white mb-4">Contact Info</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2">
              <MapPin size={16} className="mt-0.5 shrink-0 text-[#0EA5E9]" />
              <span>
                {CLINIC.address.line1}, {CLINIC.address.city}
              </span>
            </li>
            <li className="flex items-center gap-2">
              <Phone size={16} className="text-[#0EA5E9]" /> {CLINIC.phone}
            </li>
            <li className="flex items-center gap-2">
              <Mail size={16} className="text-[#0EA5E9]" /> {CLINIC.email}
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 py-5 text-center text-sm text-slate-400">
        © 2025 Anand Dental Hub. All Rights Reserved.
      </div>
    </footer>
  );
}

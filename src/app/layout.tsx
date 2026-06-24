import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Anand Dental Hub | Best Dentist in Giridih",
  description:
    "Anand Dental Hub is a leading M.D.S. dental clinic in Giridih offering root canal treatment, braces, aligners, implants, cosmetic dentistry, pediatric dentistry and complete oral healthcare.",
  keywords: [
    "Dentist in Giridih",
    "Best Dental Clinic in Giridih",
    "Root Canal Treatment Giridih",
    "Dental Implant Giridih",
    "Braces Treatment Giridih",
    "Orthodontist Giridih",
    "Teeth Whitening Giridih",
  ],
  openGraph: {
    title: "Anand Dental Hub | Best Dentist in Giridih",
    description:
      "Advanced dental care, painless treatments and beautiful smile transformations by experienced M.D.S. specialists in Giridih, Jharkhand.",
    type: "website",
    locale: "en_IN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-white text-[#1E293B]">
        {children}
      </body>
    </html>
  );
}

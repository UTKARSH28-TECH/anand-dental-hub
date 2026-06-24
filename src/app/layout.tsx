import type { Metadata } from "next";
import { Source_Sans_3, Lora } from "next/font/google";
import "./globals.css";

const sourceSans = Source_Sans_3({
  variable: "--font-source-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Shawitry Dental Care & Implant Centre | Giridih",
  description:
    "Shawitry Dental Care & Implant Centre in Buxidih, Giridih — dental implants, root canal treatment, smile designing, crowns & bridges and family dental care since 2014.",
  keywords: [
    "Dentist in Giridih",
    "Dental Implant Giridih",
    "Root Canal Treatment Giridih",
    "Dental Clinic Buxidih Giridih",
    "Smile Designing Giridih",
    "Dr Mohit Kumar Dentist",
  ],
  openGraph: {
    title: "Shawitry Dental Care & Implant Centre | Giridih",
    description:
      "Advanced dentistry, trusted care and confident smiles — serving families in Giridih since 2014.",
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
    <html
      lang="en"
      className={`${sourceSans.variable} ${lora.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-[#1F2937]">
        {children}
      </body>
    </html>
  );
}

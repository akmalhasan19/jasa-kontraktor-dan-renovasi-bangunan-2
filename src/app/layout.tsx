import type { Metadata } from "next";
import { Manrope, Playfair_Display } from "next/font/google";
import "./globals.css";

import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { WhatsAppFloatingButton } from "@/components/shared/WhatsAppFloatingButton";
import { BRAND_NAME, COMPANY_INFO, SITE_URL } from "@/lib/constants";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${BRAND_NAME}`,
    template: `Kontraktor & Renovasi | %s`,
  },
  description: `Jasa kontraktor dan renovasi bangunan skala menengah untuk area ${COMPANY_INFO.serviceAreas.join(", ")}. Konsultasi gratis dan RAB transparan.`,
  openGraph: {
    title: BRAND_NAME,
    description: "Renovasi dan pembangunan skala menengah dengan proses kerja rapi, transparan, dan tepat waktu.",
    url: SITE_URL,
    siteName: BRAND_NAME,
    locale: "id_ID",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id" className={`${manrope.variable} ${playfair.variable}`}>
      <head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" />
      </head>
      <body className="bg-canvas text-slate-800 font-body antialiased selection:bg-gold selection:text-white min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
        <WhatsAppFloatingButton />
      </body>
    </html>
  );
}


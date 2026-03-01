export const BRAND_NAME = "ArsitekPro Konstruksi";
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://arsitekpro-konstruksi.co.id";

export const COMPANY_INFO = {
  whatsappNumber: "62812xxxxxxx",
  whatsappDisplay: "+62 812-xxxx-xxxx",
  phoneDisplay: "(021) 555-0188",
  email: "halo@arsitekpro-konstruksi.co.id",
  serviceAreas: ["Jakarta", "Depok", "Tangerang", "Bekasi"],
  operationHours: "Senin-Sabtu, 08.00-17.00",
  address: "Jl. Pembangunan Raya No. 18, Jakarta Selatan",
} as const;

export const CTA_TEXT = "Konsultasi Gratis";

export const NAV_LINKS = [
  { href: "/", label: "Beranda" },
  { href: "/layanan", label: "Layanan" },
  { href: "/portofolio", label: "Portofolio" },
  { href: "/harga", label: "Harga" },
  { href: "/tentang", label: "Tentang" },
  { href: "/faq", label: "FAQ" },
  { href: "/kontak", label: "Kontak" },
];


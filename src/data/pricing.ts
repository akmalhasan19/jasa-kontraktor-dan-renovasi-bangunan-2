export type PricingPlan = {
  name: string;
  priceRange: string;
  description: string;
  features: string[];
};

export const pricingPlans: PricingPlan[] = [
  {
    name: "Renovasi Ringan",
    priceRange: "Mulai 2,5 - 4,0 jt / m2",
    description: "Cocok untuk perbaikan area tertentu tanpa perubahan struktur mayor.",
    features: [
      "Pekerjaan finishing dan utilitas ringan",
      "Durasi relatif singkat",
      "Kontrol biaya lebih ketat",
    ],
  },
  {
    name: "Renovasi Sedang",
    priceRange: "Mulai 4,0 - 6,5 jt / m2",
    description:
      "Untuk perubahan layout terbatas dan peningkatan fungsi ruang hunian/komersial.",
    features: [
      "Penyesuaian partisi dan ruang",
      "Upgrade material bertahap",
      "Koordinasi kerja multi-tim",
    ],
  },
  {
    name: "Renovasi Total",
    priceRange: "Mulai 6,5 - 9,5 jt / m2",
    description: "Untuk pembaruan menyeluruh termasuk struktur tertentu dan desain baru.",
    features: [
      "Rekonfigurasi ruang menyeluruh",
      "Material kelas menengah-premium",
      "Dokumentasi progres lengkap",
    ],
  },
];


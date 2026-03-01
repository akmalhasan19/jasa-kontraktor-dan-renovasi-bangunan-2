import type { Project } from "@/types/project";

export const projectCategories = ["all", "renovasi", "bangun-baru", "interior"] as const;

export const projects: Project[] = [
  {
    slug: "renovasi-rumah-cilandak-modern",
    title: "Renovasi Rumah Cilandak Modern",
    category: "renovasi",
    tags: ["Rumah Tinggal", "Modern", "Dua Lantai"],
    location: "Cilandak, Jakarta Selatan",
    duration: "14 minggu",
    costRange: "Rp780 jt - Rp920 jt",
    summary:
      "Peremajaan total area lantai 1 dan fasad agar rumah lama tampil lebih modern dengan sirkulasi udara lebih baik.",
    scope: ["Fasad", "Ruang Tamu", "Dapur", "MEP upgrade"],
    challenge: "Struktur eksisting tidak seragam dan harus tetap aman selama penghuni masih tinggal.",
    solution:
      "Pekerjaan dibagi per zona, penguatan titik kritis dilakukan lebih dulu, dilanjutkan finishing bertahap.",
    images: ["/images/placeholder-1.svg", "/images/placeholder-2.svg", "/images/placeholder-3.svg"],
  },
  {
    slug: "bangun-baru-rumah-depok-minimalis",
    title: "Bangun Baru Rumah Depok Minimalis",
    category: "bangun-baru",
    tags: ["Bangun Baru", "Minimalis", "Hunian Keluarga"],
    location: "Cinere, Depok",
    duration: "20 minggu",
    costRange: "Rp1,25 M - Rp1,45 M",
    summary:
      "Pembangunan rumah 2 lantai dari lahan kosong dengan fokus pencahayaan alami dan efisiensi ruang.",
    scope: ["Struktur", "Arsitektur", "Plumbing", "Elektrikal"],
    challenge: "Akses material ke lokasi sempit dan jadwal kerja lingkungan terbatas.",
    solution:
      "Penjadwalan pengiriman material pagi hari dan prefabrikasi beberapa komponen di luar lokasi.",
    images: ["/images/placeholder-4.svg", "/images/placeholder-5.svg", "/images/placeholder-6.svg"],
  },
  {
    slug: "interior-ruko-bsd-kuliner",
    title: "Interior Ruko BSD Kuliner",
    category: "interior",
    tags: ["Ruko", "Interior", "F&B"],
    location: "BSD, Tangerang",
    duration: "8 minggu",
    costRange: "Rp310 jt - Rp390 jt",
    summary:
      "Fit-out interior ruko untuk bisnis kuliner dengan layout dapur produksi dan area customer.",
    scope: ["Layout Interior", "Kitchen Set", "Pencahayaan", "Signage"],
    challenge: "Waktu setup singkat sebelum grand opening.",
    solution:
      "Pekerjaan paralel sipil ringan dan furniture custom serta kontrol harian milestone.",
    images: ["/images/placeholder-7.svg", "/images/placeholder-8.svg"],
  },
  {
    slug: "renovasi-kamar-mandi-bekasi",
    title: "Renovasi Kamar Mandi Bekasi",
    category: "renovasi",
    tags: ["Kamar Mandi", "Plumbing", "Waterproofing"],
    location: "Harapan Indah, Bekasi",
    duration: "4 minggu",
    costRange: "Rp85 jt - Rp120 jt",
    summary:
      "Upgrade total dua kamar mandi utama dengan sistem plumbing baru dan finishing antislip.",
    scope: ["Pembongkaran", "Waterproofing", "Sanitair", "Finishing"],
    challenge: "Kebocoran lama menimbulkan kerusakan pada plafon lantai bawah.",
    solution:
      "Penerapan waterproofing berlapis dan uji rendam sebelum pemasangan finishing.",
    images: ["/images/placeholder-9.svg", "/images/placeholder-10.svg"],
  },
  {
    slug: "bangun-ruko-2-lantai-ciputat",
    title: "Bangun Ruko 2 Lantai Ciputat",
    category: "bangun-baru",
    tags: ["Ruko", "Komersial", "Dua Lantai"],
    location: "Ciputat, Tangerang Selatan",
    duration: "22 minggu",
    costRange: "Rp1,4 M - Rp1,7 M",
    summary:
      "Pembangunan ruko 2 lantai dengan area display di bawah dan ruang kantor di lantai atas.",
    scope: ["Struktur Beton", "Fasad", "Tangga", "MEP"],
    challenge: "Lahan berbatasan langsung dengan bangunan aktif.",
    solution:
      "Pemasangan proteksi perimeter dan metode kerja bertahap untuk meminimalkan gangguan.",
    images: ["/images/placeholder-11.svg", "/images/placeholder-12.svg"],
  },
  {
    slug: "interior-kantor-kemang",
    title: "Interior Kantor Kemang",
    category: "interior",
    tags: ["Kantor", "Open Space", "Meeting Room"],
    location: "Kemang, Jakarta Selatan",
    duration: "10 minggu",
    costRange: "Rp420 jt - Rp530 jt",
    summary:
      "Renovasi interior kantor dengan konsep collaborative workspace dan area meeting modular.",
    scope: ["Partisi", "Plafon", "Flooring", "Furniture built-in"],
    challenge: "Proyek berjalan saat tim operasional masih masuk kantor.",
    solution:
      "Penjadwalan kerja malam untuk area utama dan relokasi desk secara bertahap.",
    images: ["/images/placeholder-2.svg", "/images/placeholder-5.svg", "/images/placeholder-9.svg"],
  },
  {
    slug: "renovasi-dapur-cinere",
    title: "Renovasi Dapur Cinere",
    category: "renovasi",
    tags: ["Dapur", "Kitchen Set", "Ventilasi"],
    location: "Cinere, Depok",
    duration: "5 minggu",
    costRange: "Rp140 jt - Rp185 jt",
    summary:
      "Peremajaan dapur dan area servis dengan layout baru yang memudahkan aktivitas harian keluarga.",
    scope: ["Kitchen Set", "Lantai", "Dinding", "Ventilasi"],
    challenge: "Area dapur lama minim pencahayaan alami.",
    solution:
      "Pembukaan bukaan baru dan penataan lampu task-lighting di area kerja utama.",
    images: ["/images/placeholder-3.svg", "/images/placeholder-6.svg"],
  },
  {
    slug: "bangun-rumah-hook-bintaro",
    title: "Bangun Rumah Hook Bintaro",
    category: "bangun-baru",
    tags: ["Rumah Hook", "Modern Tropis", "3 Kamar"],
    location: "Bintaro, Tangerang Selatan",
    duration: "24 minggu",
    costRange: "Rp1,65 M - Rp1,95 M",
    summary:
      "Rumah baru di lahan hook dengan fasad modern tropis dan zoning ruang keluarga yang luas.",
    scope: ["Pondasi", "Struktur", "Atap", "Finishing"],
    challenge: "Paparan matahari tinggi di sisi barat bangunan.",
    solution:
      "Pemakaian secondary skin dan pemilihan material facade dengan performa termal lebih baik.",
    images: ["/images/placeholder-1.svg", "/images/placeholder-8.svg"],
  },
  {
    slug: "interior-apartemen-kuningan",
    title: "Interior Apartemen Kuningan",
    category: "interior",
    tags: ["Apartemen", "Compact Living", "Custom Furniture"],
    location: "Kuningan, Jakarta Selatan",
    duration: "6 minggu",
    costRange: "Rp190 jt - Rp240 jt",
    summary:
      "Penataan unit apartemen agar lebih fungsional dengan storage tersembunyi dan furniture custom.",
    scope: ["Built-in Storage", "Lighting", "Finishing Dinding"],
    challenge: "Ruang terbatas dengan kebutuhan penyimpanan tinggi.",
    solution:
      "Desain furniture multifungsi dan optimasi area vertikal untuk storage.",
    images: ["/images/placeholder-10.svg", "/images/placeholder-12.svg"],
  },
  {
    slug: "renovasi-fasad-ruko-margonda",
    title: "Renovasi Fasad Ruko Margonda",
    category: "renovasi",
    tags: ["Fasad", "Ruko", "Branding"],
    location: "Margonda, Depok",
    duration: "3 minggu",
    costRange: "Rp95 jt - Rp130 jt",
    summary:
      "Perbaikan fasad dan signage ruko untuk meningkatkan visibilitas brand di koridor komersial.",
    scope: ["Fasad", "Cat Eksterior", "Signage", "Kanopi"],
    challenge: "Akses area depan sempit dan lalu lintas padat.",
    solution:
      "Pekerjaan utama dilakukan malam hari dan sistem material pre-cut untuk percepatan.",
    images: ["/images/placeholder-4.svg", "/images/placeholder-7.svg"],
  },
  {
    slug: "bangun-gudang-mini-bekasi",
    title: "Bangun Gudang Mini Bekasi",
    category: "bangun-baru",
    tags: ["Gudang", "Logistik", "Struktur Baja"],
    location: "Jatiasih, Bekasi",
    duration: "16 minggu",
    costRange: "Rp980 jt - Rp1,2 M",
    summary:
      "Pembangunan gudang mini untuk operasional UMKM dengan area loading yang efisien.",
    scope: ["Struktur Baja", "Lantai Industri", "Pintu Rolling", "Drainase"],
    challenge: "Kebutuhan loading area tetap aman saat hujan.",
    solution:
      "Desain elevasi lantai dan drainase perimeter untuk mengurangi risiko genangan.",
    images: ["/images/placeholder-11.svg", "/images/placeholder-3.svg"],
  },
  {
    slug: "interior-showroom-tangerang",
    title: "Interior Showroom Tangerang",
    category: "interior",
    tags: ["Showroom", "Display", "Lighting"],
    location: "Karawaci, Tangerang",
    duration: "9 minggu",
    costRange: "Rp360 jt - Rp450 jt",
    summary:
      "Fit-out showroom produk dengan alur display yang jelas dan pencahayaan berfokus pada produk.",
    scope: ["Display Area", "Lighting", "Kasir", "Storage Back Office"],
    challenge: "Perlu area display fleksibel untuk rotasi produk tiap bulan.",
    solution:
      "Menggunakan modul display knock-down dengan titik listrik yang bisa dipindah.",
    images: ["/images/placeholder-6.svg", "/images/placeholder-8.svg"],
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}


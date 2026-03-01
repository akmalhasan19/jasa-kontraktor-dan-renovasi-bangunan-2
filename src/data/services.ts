export type ServiceItem = {
  id: string;
  title: string;
  category: string;
  description: string;
  benefits: string[];
};

export const services: ServiceItem[] = [
  {
    id: "renovasi-rumah",
    title: "Renovasi Rumah",
    category: "Renovasi",
    description:
      "Peremajaan rumah tinggal dari pembongkaran parsial hingga finishing dengan jadwal yang jelas.",
    benefits: [
      "Konsultasi kebutuhan ruang",
      "RAB transparan per tahapan",
      "Pengawasan lapangan terjadwal",
    ],
  },
  {
    id: "bangun-baru",
    title: "Bangun Baru",
    category: "Konstruksi",
    description:
      "Pembangunan rumah/ruko skala menengah dari nol dengan kontrol mutu material dan progres.",
    benefits: [
      "Perencanaan teknis awal",
      "Timeline pengerjaan realistis",
      "Laporan progres mingguan",
    ],
  },
  {
    id: "interior",
    title: "Interior",
    category: "Interior",
    description:
      "Penataan interior fungsional untuk hunian dan ruang usaha agar lebih nyaman serta produktif.",
    benefits: [
      "Desain sesuai aktivitas pengguna",
      "Optimasi layout ruang",
      "Pilihan material sesuai budget",
    ],
  },
  {
    id: "eksterior",
    title: "Eksterior",
    category: "Eksterior",
    description:
      "Pekerjaan fasad, kanopi, pagar, dan area luar bangunan agar estetis sekaligus tahan cuaca.",
    benefits: [
      "Konsep tampak depan modern",
      "Material tahan cuaca",
      "Detail eksekusi rapi",
    ],
  },
  {
    id: "kantor-ruko",
    title: "Kantor / Ruko",
    category: "Komersial",
    description:
      "Renovasi dan fit-out ruang komersial agar mendukung operasional bisnis dengan minim downtime.",
    benefits: [
      "Skema kerja bertahap",
      "Koordinasi MEP terintegrasi",
      "Finishing siap pakai",
    ],
  },
  {
    id: "maintenance",
    title: "Maintenance",
    category: "Perawatan",
    description:
      "Perawatan berkala dan perbaikan minor untuk menjaga performa bangunan tetap optimal.",
    benefits: [
      "Checklist inspeksi rutin",
      "Response perbaikan cepat",
      "Rekomendasi pencegahan kerusakan",
    ],
  },
];


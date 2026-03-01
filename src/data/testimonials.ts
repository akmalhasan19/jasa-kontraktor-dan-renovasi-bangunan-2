export type Testimonial = {
  name: string;
  role: string;
  location: string;
  quote: string;
};

export const testimonials: Testimonial[] = [
  {
    name: "Rina W.",
    role: "Pemilik Rumah",
    location: "Depok",
    quote:
      "Tim ArsitekPro rapi dan komunikatif. RAB jelas dari awal, jadi kami lebih tenang selama renovasi.",
  },
  {
    name: "Budi Santoso",
    role: "Pemilik Ruko",
    location: "Tangerang",
    quote:
      "Pengerjaan fasad dan interior ruko sesuai target buka usaha. Progress mingguan sangat membantu.",
  },
  {
    name: "Nadia K.",
    role: "Pemilik Hunian",
    location: "Bekasi",
    quote:
      "Suka dengan hasil akhirnya, terutama area dapur dan ruang keluarga. Tim responsif saat revisi kecil.",
  },
  {
    name: "Dimas P.",
    role: "Pengelola Kantor",
    location: "Jakarta Selatan",
    quote:
      "Renovasi kantor berjalan bertahap tanpa ganggu operasional. Hasilnya lebih efisien dan profesional.",
  },
];


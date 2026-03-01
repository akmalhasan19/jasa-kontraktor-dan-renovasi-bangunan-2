import type { Metadata } from "next";

import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Kebijakan Privasi",
  description: "Informasi singkat tentang pengelolaan data pengguna di website ini.",
};

export default function PrivacyPolicyPage() {
  return (
    <section className="py-12 sm:py-16">
      <Container>
        <SectionHeading title="Kebijakan Privasi" subtitle="Versi sederhana untuk MVP website." />

        <div className="prose max-w-none text-sm text-slate-700">
          <p>
            Kami mengumpulkan data yang Anda kirimkan melalui formulir (nama, nomor WhatsApp, lokasi, dan kebutuhan proyek) hanya untuk keperluan konsultasi serta penawaran layanan.
          </p>
          <p>
            Data tidak diperjualbelikan dan hanya digunakan oleh tim internal untuk menindaklanjuti permintaan Anda.
          </p>
          <p>
            Pada tahap MVP ini, data disimpan sementara untuk keperluan pengujian alur. Pembaruan kebijakan akan dilakukan saat sistem penyimpanan permanen diterapkan.
          </p>
        </div>
      </Container>
    </section>
  );
}


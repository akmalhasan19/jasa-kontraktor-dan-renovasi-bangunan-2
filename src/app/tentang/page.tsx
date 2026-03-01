import type { Metadata } from "next";

import { Container } from "@/components/layout/Container";
import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { BRAND_NAME, COMPANY_INFO } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Tentang",
  description: "Profil ArsitekPro Konstruksi, nilai kerja, legalitas, dan area layanan.",
};

export default function TentangPage() {
  return (
    <section className="py-12 sm:py-16">
      <Container>
        <SectionHeading
          title={`Tentang ${BRAND_NAME}`}
          subtitle="Kami berfokus pada renovasi dan pembangunan skala menengah dengan pendekatan kerja terstruktur."
        />

        <div className="grid gap-4 lg:grid-cols-3">
          <Card className="lg:col-span-2">
            <h2 className="text-lg font-semibold text-slate-900">Profil Singkat</h2>
            <p className="mt-3 text-sm text-slate-700">
              {BRAND_NAME} membantu pemilik properti mewujudkan proyek konstruksi dengan manajemen lapangan, transparansi biaya, dan komunikasi progres yang jelas.
            </p>
            <h3 className="mt-4 text-base font-semibold text-slate-900">Nilai Utama</h3>
            <ul className="mt-2 space-y-1 text-sm text-slate-700">
              <li>• Transparansi RAB dan spesifikasi kerja</li>
              <li>• Kedisiplinan mutu dan waktu</li>
              <li>• Kolaborasi aktif dengan pemilik proyek</li>
            </ul>
            <h3 className="mt-4 text-base font-semibold text-slate-900">Metode Kerja</h3>
            <p className="mt-2 text-sm text-slate-700">
              Survey awal, penyusunan rencana kerja, eksekusi bertahap berbasis milestone, dan evaluasi akhir sebelum serah terima.
            </p>
          </Card>

          <Card>
            <h2 className="text-lg font-semibold text-slate-900">Legalitas (Placeholder)</h2>
            <ul className="mt-3 space-y-1 text-sm text-slate-700">
              <li>• NIB: 1234567890</li>
              <li>• NPWP: 01.234.567.8-999.000</li>
              <li>• Sertifikat Badan Usaha: Dalam Proses Pembaruan</li>
            </ul>
            <h3 className="mt-4 text-base font-semibold text-slate-900">Area Layanan</h3>
            <p className="mt-2 text-sm text-slate-700">{COMPANY_INFO.serviceAreas.join(", ")}</p>
          </Card>
        </div>
      </Container>
    </section>
  );
}


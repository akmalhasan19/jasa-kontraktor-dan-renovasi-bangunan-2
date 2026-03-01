import { ArrowRight } from "lucide-react";

import { Container } from "@/components/layout/Container";
import { ButtonLink } from "@/components/ui/Button";
import { BRAND_NAME, CTA_TEXT } from "@/lib/constants";
import { buildWhatsAppLink } from "@/lib/whatsapp";

export function HeroSection() {
  const whatsappLink = buildWhatsAppLink("Halo, saya ingin konsultasi gratis untuk proyek renovasi/pembangunan.");

  return (
    <section className="bg-gradient-to-b from-slate-50 to-white py-14 sm:py-20">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-accent-600">Kontraktor Skala Menengah</p>
            <h1 className="mt-3 text-3xl font-extrabold leading-tight text-slate-900 sm:text-5xl">
              Renovasi & Bangun Ruang yang Siap Dipakai, Tepat Waktu, dan Transparan.
            </h1>
            <p className="mt-4 max-w-2xl text-slate-600 sm:text-lg">
              {BRAND_NAME} membantu pemilik rumah, ruko, dan UMKM dengan proses kerja rapi, RAB jelas, serta tim berpengalaman.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href={whatsappLink} target="_blank" rel="noreferrer" size="lg">
                {CTA_TEXT}
              </ButtonLink>
              <ButtonLink href="/kontak" variant="outline" size="lg">
                Minta Estimasi <ArrowRight className="ml-2 h-4 w-4" />
              </ButtonLink>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-bold text-slate-900">Kenapa pilih kami?</h2>
            <ul className="mt-4 space-y-3 text-sm text-slate-600">
              <li>• Survey awal dan konsultasi kebutuhan tanpa biaya untuk area utama.</li>
              <li>• Breakdown RAB per item kerja untuk memudahkan kontrol anggaran.</li>
              <li>• Update progres terjadwal agar keputusan proyek tetap cepat.</li>
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}


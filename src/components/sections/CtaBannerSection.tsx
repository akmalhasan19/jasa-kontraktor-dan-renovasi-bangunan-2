import { Container } from "@/components/layout/Container";
import { ButtonLink } from "@/components/ui/Button";
import { CTA_TEXT } from "@/lib/constants";
import { buildWhatsAppLink } from "@/lib/whatsapp";

export function CtaBannerSection() {
  const waLink = buildWhatsAppLink("Halo, saya ingin konsultasi gratis untuk estimasi proyek.");

  return (
    <section className="py-12 sm:py-16">
      <Container>
        <div className="rounded-2xl bg-slate-900 px-6 py-10 text-white sm:px-10">
          <h2 className="text-2xl font-bold sm:text-3xl">Siap diskusi proyek Anda minggu ini?</h2>
          <p className="mt-3 max-w-2xl text-sm text-slate-300 sm:text-base">
            Kirim kebutuhan awal Anda sekarang. Tim kami akan membantu menyusun estimasi awal dan langkah pengerjaan.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href={waLink} target="_blank" rel="noreferrer" size="lg">
              {CTA_TEXT}
            </ButtonLink>
            <ButtonLink href="/kontak" variant="secondary" size="lg">
              Isi Form Penawaran
            </ButtonLink>
          </div>
        </div>
      </Container>
    </section>
  );
}


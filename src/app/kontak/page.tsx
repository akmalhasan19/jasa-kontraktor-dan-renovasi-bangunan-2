import type { Metadata } from "next";

import { LeadForm } from "@/components/forms/LeadForm";
import { Container } from "@/components/layout/Container";
import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { BRAND_NAME, COMPANY_INFO } from "@/lib/constants";
import { toTitleCase } from "@/lib/format";

type KontakPageProps = {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
};

export const metadata: Metadata = {
  title: "Kontak",
  description: "Hubungi ArsitekPro Konstruksi dan kirim kebutuhan proyek Anda melalui form penawaran.",
};

function extractSingle(value: string | string[] | undefined): string {
  return Array.isArray(value) ? value[0] || "" : value || "";
}

export default async function KontakPage({ searchParams }: KontakPageProps) {
  const params = await searchParams;
  const jenisRaw = extractSingle(params.jenisPekerjaan);
  const initialJenis = jenisRaw ? toTitleCase(jenisRaw.replace(/-/g, " ")) : "";
  const initialLuas = extractSingle(params.luas);
  const initialBudget = extractSingle(params.budgetRange);
  const estimasi = extractSingle(params.estimasi);

  return (
    <section className="py-12 sm:py-16">
      <Container>
        <SectionHeading
          title="Kontak & Form Penawaran"
          subtitle="Isi kebutuhan proyek Anda. Tim kami akan menghubungi untuk konsultasi awal."
        />

        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <Card>
            <h2 className="text-lg font-semibold text-slate-900">Informasi Kontak</h2>
            <ul className="mt-3 space-y-2 text-sm text-slate-700">
              <li>
                <span className="font-medium">Perusahaan:</span> {BRAND_NAME}
              </li>
              <li>
                <span className="font-medium">WhatsApp:</span> {COMPANY_INFO.whatsappDisplay}
              </li>
              <li>
                <span className="font-medium">Telepon:</span> {COMPANY_INFO.phoneDisplay}
              </li>
              <li>
                <span className="font-medium">Jam Operasional:</span> {COMPANY_INFO.operationHours}
              </li>
              <li>
                <span className="font-medium">Area Layanan:</span> {COMPANY_INFO.serviceAreas.join(", ")}
              </li>
            </ul>

            {estimasi ? (
              <div className="mt-4 rounded-md border border-accent-200 bg-accent-50 p-3 text-sm text-accent-700">
                Estimasi dari kalkulator: <span className="font-semibold">{estimasi}</span>
              </div>
            ) : null}
          </Card>

          <Card>
            <LeadForm
              initialValues={{
                jenisPekerjaan: initialJenis,
                luas: initialLuas ? Number(initialLuas) : undefined,
                budgetRange: initialBudget || undefined,
              }}
            />
          </Card>
        </div>
      </Container>
    </section>
  );
}


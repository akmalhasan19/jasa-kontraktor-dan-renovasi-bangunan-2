import { Container } from "@/components/layout/Container";
import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";

const processSteps = [
  {
    title: "Konsultasi & Survey",
    description: "Diskusi kebutuhan, target waktu, serta survey lokasi untuk pemetaan kondisi awal.",
  },
  {
    title: "RAB & Rencana Kerja",
    description: "Penyusunan estimasi biaya, scope detail, dan jadwal pengerjaan yang terukur.",
  },
  {
    title: "Eksekusi Lapangan",
    description: "Pekerjaan dilakukan per milestone dengan quality control pada tiap tahapan penting.",
  },
  {
    title: "Monitoring Progres",
    description: "Update progres berkala agar pemilik proyek tetap terinformasi dan mudah mengambil keputusan.",
  },
  {
    title: "Finishing & Serah Terima",
    description: "Pemeriksaan hasil akhir bersama klien dan tindak lanjut item minor bila diperlukan.",
  },
];

export function WorkProcessSection() {
  return (
    <section className="py-14 sm:py-16">
      <Container>
        <SectionHeading
          title="Proses Kerja"
          subtitle="Alur kerja kami disusun agar proyek berjalan rapi, terukur, dan minim kejutan di tengah jalan."
        />

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
          {processSteps.map((step, index) => (
            <Card key={step.title} className="border-l-4 border-l-accent-500">
              <p className="text-xs font-semibold text-accent-600">Langkah {index + 1}</p>
              <h3 className="mt-2 text-base font-semibold text-slate-900">{step.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{step.description}</p>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}


import { Container } from "@/components/layout/Container";
import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { testimonials } from "@/data/testimonials";

const stats = [
  { label: "Proyek selesai", value: "120+" },
  { label: "Tahun pengalaman tim", value: "9+" },
  { label: "Kota layanan aktif", value: "4" },
];

export function SocialProofSection() {
  return (
    <section className="py-14 sm:py-16">
      <Container>
        <SectionHeading
          title="Dipercaya untuk Proyek Hunian & Komersial"
          subtitle="Kami menjaga kualitas hasil sekaligus pengalaman kerja yang transparan dari awal hingga serah terima."
        />

        <div className="grid gap-4 sm:grid-cols-3">
          {stats.map((stat) => (
            <Card key={stat.label} className="bg-slate-50">
              <p className="text-2xl font-bold text-slate-900">{stat.value}</p>
              <p className="mt-1 text-sm text-slate-600">{stat.label}</p>
            </Card>
          ))}
        </div>

        <div className="mt-8 grid gap-4 lg:grid-cols-2">
          {testimonials.map((item) => (
            <Card key={`${item.name}-${item.location}`}>
              <p className="text-sm text-slate-700">“{item.quote}”</p>
              <p className="mt-3 text-sm font-semibold text-slate-900">{item.name}</p>
              <p className="text-xs text-slate-500">
                {item.role} - {item.location}
              </p>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}


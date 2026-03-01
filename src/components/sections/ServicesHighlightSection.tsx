import { Container } from "@/components/layout/Container";
import { services } from "@/data/services";
import { ButtonLink } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function ServicesHighlightSection() {
  const topServices = services.slice(0, 6);

  return (
    <section className="bg-slate-50 py-14 sm:py-16">
      <Container>
        <SectionHeading
          title="Layanan Utama"
          subtitle="Cakupan layanan kami dirancang untuk kebutuhan renovasi hingga pembangunan skala menengah."
          action={<ButtonLink href="/layanan" variant="outline">Lihat Semua Layanan</ButtonLink>}
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {topServices.map((service) => (
            <Card key={service.id} className="h-full">
              <p className="text-xs font-semibold uppercase tracking-wide text-accent-600">{service.category}</p>
              <h3 className="mt-2 text-lg font-semibold text-slate-900">{service.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{service.description}</p>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}


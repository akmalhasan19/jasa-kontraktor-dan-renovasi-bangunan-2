import type { Metadata } from "next";

import { Container } from "@/components/layout/Container";
import { ButtonLink } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "Layanan",
  description: "Layanan renovasi dan pembangunan skala menengah untuk hunian, ruko, dan kantor.",
};

export default function LayananPage() {
  return (
    <section className="py-12 sm:py-16">
      <Container>
        <SectionHeading
          title="Layanan Kami"
          subtitle="Setiap layanan dirancang untuk kebutuhan berbeda dengan alur kerja yang tetap terkontrol."
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Card key={service.id} className="flex h-full flex-col">
              <p className="text-xs font-semibold uppercase tracking-wide text-accent-600">{service.category}</p>
              <h2 className="mt-2 text-lg font-semibold text-slate-900">{service.title}</h2>
              <p className="mt-2 text-sm text-slate-600">{service.description}</p>
              <ul className="mt-3 space-y-1 text-sm text-slate-700">
                {service.benefits.map((benefit) => (
                  <li key={benefit}>• {benefit}</li>
                ))}
              </ul>
              <div className="mt-auto pt-4">
                <ButtonLink href="/kontak" fullWidth>
                  Minta Penawaran
                </ButtonLink>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}


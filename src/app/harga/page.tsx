import type { Metadata } from "next";

import { EstimateCalculator } from "@/components/forms/EstimateCalculator";
import { Container } from "@/components/layout/Container";
import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { pricingPlans } from "@/data/pricing";

export const metadata: Metadata = {
  title: "Harga",
  description: "Paket estimasi harga renovasi dan pembangunan dengan transparansi perencanaan.",
};

export default function HargaPage() {
  return (
    <section className="py-12 sm:py-16">
      <Container>
        <SectionHeading
          title="Estimasi Harga"
          subtitle="Gunakan paket sebagai referensi awal. Nilai aktual disesuaikan hasil survey dan detail spesifikasi proyek."
        />

        <div className="grid gap-4 md:grid-cols-3">
          {pricingPlans.map((plan) => (
            <Card key={plan.name} className="h-full">
              <h2 className="text-lg font-semibold text-slate-900">{plan.name}</h2>
              <p className="mt-2 text-xl font-bold text-accent-600">{plan.priceRange}</p>
              <p className="mt-2 text-sm text-slate-600">{plan.description}</p>
              <ul className="mt-4 space-y-1 text-sm text-slate-700">
                {plan.features.map((feature) => (
                  <li key={feature}>• {feature}</li>
                ))}
              </ul>
            </Card>
          ))}
        </div>

        <div className="mt-8">
          <EstimateCalculator />
        </div>
      </Container>
    </section>
  );
}


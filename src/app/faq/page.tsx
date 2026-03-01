import type { Metadata } from "next";

import { Container } from "@/components/layout/Container";
import { Accordion } from "@/components/ui/Accordion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { faqItems } from "@/data/faq";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Pertanyaan yang sering diajukan seputar layanan renovasi dan pembangunan.",
};

export default function FaqPage() {
  return (
    <section className="py-12 sm:py-16">
      <Container>
        <SectionHeading
          title="Pertanyaan Umum"
          subtitle="Jawaban cepat untuk hal-hal yang paling sering ditanyakan calon klien."
        />
        <Accordion items={faqItems} />
      </Container>
    </section>
  );
}


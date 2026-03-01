import type { Metadata } from "next";

import { Container } from "@/components/layout/Container";
import { PortfolioFilterGrid } from "@/components/sections/PortfolioFilterGrid";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Portofolio",
  description: "Portofolio proyek renovasi, bangun baru, dan interior skala menengah.",
};

export default function PortofolioPage() {
  return (
    <section className="py-12 sm:py-16">
      <Container>
        <SectionHeading
          title="Portofolio Proyek"
          subtitle="Filter berdasarkan kategori dan cari lokasi proyek untuk melihat referensi yang relevan."
        />
        <PortfolioFilterGrid projects={projects} />
      </Container>
    </section>
  );
}


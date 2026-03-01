import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";

import { Container } from "@/components/layout/Container";
import { ButtonLink } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { getProjectBySlug, projects } from "@/data/projects";
import { buildWhatsAppLink } from "@/lib/whatsapp";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return { title: "Portofolio" };
  }

  return {
    title: project.title,
    description: `${project.summary} Lokasi ${project.location}, durasi ${project.duration}.`,
  };
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const waLink = buildWhatsAppLink(
    `Halo, saya tertarik dengan proyek ${project.title}. Mohon konsultasi untuk proyek serupa.`,
  );

  return (
    <section className="py-12 sm:py-16">
      <Container>
        <p className="text-sm font-semibold uppercase tracking-wide text-accent-600">{project.category}</p>
        <h1 className="mt-2 text-3xl font-bold text-slate-900 sm:text-4xl">{project.title}</h1>
        <p className="mt-3 max-w-3xl text-slate-600">{project.summary}</p>

        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          <Card>
            <p className="text-xs uppercase text-slate-500">Lokasi</p>
            <p className="mt-1 font-semibold text-slate-900">{project.location}</p>
          </Card>
          <Card>
            <p className="text-xs uppercase text-slate-500">Durasi</p>
            <p className="mt-1 font-semibold text-slate-900">{project.duration}</p>
          </Card>
          <Card>
            <p className="text-xs uppercase text-slate-500">Kisaran Biaya</p>
            <p className="mt-1 font-semibold text-slate-900">{project.costRange}</p>
          </Card>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {project.images.map((image, index) => (
            <div key={`${image}-${index}`} className="relative h-56 overflow-hidden rounded-lg border border-slate-200">
              <Image src={image} alt={`${project.title} ${index + 1}`} fill className="object-cover" sizes="(max-width: 1024px) 50vw, 33vw" />
            </div>
          ))}
        </div>

        <div className="mt-8 grid gap-4 lg:grid-cols-3">
          <Card className="lg:col-span-2">
            <h2 className="text-lg font-semibold text-slate-900">Scope Pekerjaan</h2>
            <ul className="mt-3 space-y-1 text-sm text-slate-700">
              {project.scope.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </Card>

          <Card>
            <h2 className="text-lg font-semibold text-slate-900">Tantangan & Solusi</h2>
            <p className="mt-3 text-sm font-medium text-slate-800">Tantangan</p>
            <p className="text-sm text-slate-600">{project.challenge}</p>
            <p className="mt-3 text-sm font-medium text-slate-800">Solusi</p>
            <p className="text-sm text-slate-600">{project.solution}</p>
            <div className="mt-4">
              <ButtonLink href={waLink} target="_blank" rel="noreferrer" fullWidth>
                Konsultasi Proyek Serupa
              </ButtonLink>
            </div>
          </Card>
        </div>
      </Container>
    </section>
  );
}


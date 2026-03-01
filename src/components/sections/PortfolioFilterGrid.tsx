"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";

import { Card } from "@/components/ui/Card";
import { Input } from "@/components/ui/Input";
import { Select } from "@/components/ui/Select";
import { projectCategories } from "@/data/projects";
import type { Project } from "@/types/project";

type PortfolioFilterGridProps = {
  projects: Project[];
};

export function PortfolioFilterGrid({ projects }: PortfolioFilterGridProps) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<(typeof projectCategories)[number]>("all");

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesCategory = category === "all" ? true : project.category === category;
      const search = query.toLowerCase();
      const matchesSearch =
        project.title.toLowerCase().includes(search) || project.location.toLowerCase().includes(search);
      return matchesCategory && matchesSearch;
    });
  }, [category, projects, query]);

  return (
    <div>
      <div className="mb-6 grid gap-3 sm:grid-cols-[1fr_220px]">
        <Input
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Cari judul proyek atau lokasi"
          aria-label="Cari proyek"
        />
        <Select
          value={category}
          onChange={(event) => setCategory(event.target.value as (typeof projectCategories)[number])}
          aria-label="Filter kategori"
        >
          <option value="all">Semua Kategori</option>
          <option value="renovasi">Renovasi</option>
          <option value="bangun-baru">Bangun Baru</option>
          <option value="interior">Interior</option>
        </Select>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filteredProjects.map((project) => (
          <Card key={project.slug} className="overflow-hidden p-0">
            <div className="relative h-44 w-full">
              <Image
                src={project.images[0]}
                alt={project.title}
                fill
                sizes="(max-width: 1024px) 50vw, 33vw"
                className="object-cover"
              />
            </div>
            <div className="p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-accent-600">{project.category}</p>
              <h3 className="mt-2 text-lg font-semibold text-slate-900">{project.title}</h3>
              <p className="mt-1 text-sm text-slate-600">{project.location}</p>
              <p className="mt-2 text-sm text-slate-700">{project.costRange}</p>
              <Link
                href={`/portofolio/${project.slug}`}
                className="mt-3 inline-flex text-sm font-semibold text-accent-600 hover:text-accent-700"
              >
                Lihat Detail
              </Link>
            </div>
          </Card>
        ))}
      </div>

      {filteredProjects.length === 0 ? (
        <p className="mt-6 rounded-md border border-dashed border-slate-300 px-4 py-5 text-sm text-slate-600">
          Tidak ada proyek yang cocok. Coba ubah kata kunci atau kategori.
        </p>
      ) : null}
    </div>
  );
}


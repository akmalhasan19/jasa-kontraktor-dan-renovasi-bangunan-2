export type ProjectCategory = "renovasi" | "bangun-baru" | "interior";

export type Project = {
  slug: string;
  title: string;
  category: ProjectCategory;
  tags: string[];
  location: string;
  duration: string;
  costRange: string;
  summary: string;
  scope: string[];
  challenge: string;
  solution: string;
  images: string[];
};


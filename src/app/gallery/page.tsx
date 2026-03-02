import type { Metadata } from "next";
import { GalleryContent } from "@/components/sections/GalleryContent";

export const metadata: Metadata = {
  title: "The Gallery | ArsitekPro",
  description:
    "A curated anthology of architectural and interior projects — from luxury residences to commercial landmarks. Browse the full portfolio of ArsitekPro.",
};

export default function GalleryPage() {
  return <GalleryContent />;
}

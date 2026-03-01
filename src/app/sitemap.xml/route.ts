import { projects } from "@/data/projects";
import { SITE_URL } from "@/lib/constants";

export async function GET() {
  const staticRoutes = [
    "",
    "/layanan",
    "/portofolio",
    "/harga",
    "/tentang",
    "/faq",
    "/kontak",
    "/kebijakan-privasi",
  ];

  const urls = [
    ...staticRoutes.map((path) => `${SITE_URL}${path}`),
    ...projects.map((project) => `${SITE_URL}/portofolio/${project.slug}`),
  ];

  const now = new Date().toISOString();
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (url) => `<url><loc>${url}</loc><lastmod>${now}</lastmod><changefreq>weekly</changefreq><priority>0.8</priority></url>`,
  )
  .join("\n")}
</urlset>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
    },
  });
}


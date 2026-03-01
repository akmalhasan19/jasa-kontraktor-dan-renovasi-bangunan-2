# ArsitekPro Konstruksi - MVP Website

MVP website marketing + lead capture untuk jasa kontraktor dan renovasi bangunan skala menengah.

## Tech Stack
- Next.js (App Router)
- TypeScript
- Tailwind CSS
- Zod
- Lucide React

## Menjalankan Project
1. Install dependency:
   ```bash
   npm install
   ```
2. Jalankan mode development:
   ```bash
   npm run dev
   ```
3. Build production:
   ```bash
   npm run build
   ```
4. Jalankan production server:
   ```bash
   npm run start
   ```

## Struktur Folder Penting
```text
src/
  app/
    page.tsx
    layanan/page.tsx
    portofolio/page.tsx
    portofolio/[slug]/page.tsx
    harga/page.tsx
    tentang/page.tsx
    faq/page.tsx
    kontak/page.tsx
    kebijakan-privasi/page.tsx
    api/leads/route.ts
    sitemap.xml/route.ts
    robots.txt/route.ts
  components/
  data/
  lib/
  types/
public/images/
```

## Lokasi Ubah Konten
- Layanan: `src/data/services.ts`
- Portofolio: `src/data/projects.ts`
- Testimoni: `src/data/testimonials.ts`
- FAQ: `src/data/faq.ts`
- Paket harga: `src/data/pricing.ts`
- Branding/nomor WA/kota layanan: `src/lib/constants.ts`

## Lead Capture Flow
- Form kontak (`/kontak`) validasi client + server.
- Draft form disimpan ke `localStorage` key `leads_draft`.
- Submit mengirim `POST /api/leads`.
- API menyimpan data sementara di in-memory array (reset saat server restart).

## Supabase Status
Supabase sudah disiapkan pada `src/lib/supabaseClient.ts` dan env vars di `.env.example`, tetapi **belum dipakai** dalam fitur mana pun.

## SEO Dasar
- Metadata root + OpenGraph
- JSON-LD LocalBusiness di homepage
- `sitemap.xml` dinamis dari routes + slug portofolio
- `robots.txt`

## Next Steps (Belum Diimplementasikan)
1. Integrasi Supabase untuk penyimpanan leads permanen.
2. Tambah CMS untuk manajemen konten layanan/portofolio/testimoni.
3. Bangun admin panel sederhana untuk melihat dan memproses leads.
4. Tambah analytics & event tracking (CTA klik, submit rate, conversion).


import { BRAND_NAME, COMPANY_INFO } from "@/lib/constants";
import type { LeadInput } from "@/types/lead";

export function buildWhatsAppLink(message: string): string {
  const cleanNumber = COMPANY_INFO.whatsappNumber.replace(/\D/g, "");
  return `https://wa.me/${cleanNumber}?text=${encodeURIComponent(message)}`;
}

export function buildLeadSummaryMessage(lead: LeadInput): string {
  const lines = [
    `Halo ${BRAND_NAME}, saya ${lead.nama}.`,
    "Saya ingin konsultasi renovasi/pembangunan.",
    `Lokasi proyek: ${lead.lokasi}`,
    `Jenis pekerjaan: ${lead.jenisPekerjaan}`,
    `Nomor WhatsApp: ${lead.whatsapp}`,
  ];

  if (lead.luas) lines.push(`Luas perkiraan: ${lead.luas} m2`);
  if (lead.budgetRange) lines.push(`Budget: ${lead.budgetRange}`);
  if (lead.targetMulai) lines.push(`Target mulai: ${lead.targetMulai}`);
  if (lead.catatan) lines.push(`Catatan: ${lead.catatan}`);

  lines.push("Mohon dibantu estimasi awal. Terima kasih.");
  return lines.join("\n");
}


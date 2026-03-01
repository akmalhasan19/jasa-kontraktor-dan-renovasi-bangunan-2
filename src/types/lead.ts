export type LeadInput = {
  nama: string;
  whatsapp: string;
  lokasi: string;
  jenisPekerjaan: string;
  luas?: number | null;
  budgetRange?: string;
  targetMulai?: string;
  catatan?: string;
};

export type LeadRecord = LeadInput & {
  id: string;
  createdAt: string;
};


import { z } from "zod";

export const leadSchema = z.object({
  nama: z.string().min(2, "Nama minimal 2 karakter."),
  whatsapp: z
    .string()
    .regex(/^(\+62|62|08)\d{8,13}$/, "Format WhatsApp tidak valid."),
  lokasi: z.string().min(2, "Lokasi proyek wajib diisi."),
  jenisPekerjaan: z.string().min(2, "Jenis pekerjaan wajib dipilih."),
  luas: z
    .union([
      z.number().nonnegative(),
      z.literal(null),
      z
        .string()
        .transform((val) => (val === "" ? null : Number(val)))
        .refine((val) => val === null || !Number.isNaN(val), "Luas tidak valid.")
        .transform((val) => (val === null ? null : Number(val))),
    ])
    .optional(),
  budgetRange: z.string().optional(),
  targetMulai: z.string().optional(),
  catatan: z.string().max(1000, "Catatan terlalu panjang.").optional(),
});

export type LeadSchemaType = z.infer<typeof leadSchema>;


import { leadSchema } from "@/lib/lead-schema";
import type { LeadRecord } from "@/types/lead";

const leadsStore: LeadRecord[] = [];

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = leadSchema.safeParse(body);

    if (!parsed.success) {
      return Response.json(
        {
          ok: false,
          error: parsed.error.issues[0]?.message || "Payload tidak valid.",
        },
        { status: 400 },
      );
    }

    const lead: LeadRecord = {
      id: crypto.randomUUID(),
      createdAt: new Date().toISOString(),
      nama: parsed.data.nama,
      whatsapp: parsed.data.whatsapp,
      lokasi: parsed.data.lokasi,
      jenisPekerjaan: parsed.data.jenisPekerjaan,
      luas: parsed.data.luas ?? null,
      budgetRange: parsed.data.budgetRange,
      targetMulai: parsed.data.targetMulai,
      catatan: parsed.data.catatan,
    };

    leadsStore.push(lead);
    console.log("[leads] lead received", {
      id: lead.id,
      nama: lead.nama,
      whatsapp: lead.whatsapp,
      total: leadsStore.length,
    });

    return Response.json({ ok: true, id: lead.id });
  } catch {
    return Response.json({ ok: false, error: "Gagal memproses request." }, { status: 400 });
  }
}


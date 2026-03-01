"use client";

import { type ReactNode, useEffect, useMemo, useState } from "react";

import { Button, ButtonLink } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Select } from "@/components/ui/Select";
import { Textarea } from "@/components/ui/Textarea";
import { Toast } from "@/components/ui/Toast";
import { leadSchema } from "@/lib/lead-schema";
import { buildLeadSummaryMessage, buildWhatsAppLink } from "@/lib/whatsapp";
import type { LeadInput } from "@/types/lead";

type LeadFormProps = {
  initialValues?: Partial<LeadInput>;
};

type FormState = {
  nama: string;
  whatsapp: string;
  lokasi: string;
  jenisPekerjaan: string;
  luas: string;
  budgetRange: string;
  targetMulai: string;
  catatan: string;
};

const DEFAULT_FORM: FormState = {
  nama: "",
  whatsapp: "",
  lokasi: "",
  jenisPekerjaan: "",
  luas: "",
  budgetRange: "",
  targetMulai: "",
  catatan: "",
};

const DRAFT_KEY = "leads_draft";

const pekerjaanOptions = [
  "Renovasi Rumah",
  "Bangun Baru",
  "Interior",
  "Eksterior",
  "Kantor/Ruko",
  "Maintenance",
];

const budgetOptions = [
  "< Rp100 juta",
  "Rp100 - 300 juta",
  "Rp300 - 700 juta",
  "Rp700 juta - Rp1 miliar",
  "> Rp1 miliar",
];

export function LeadForm({ initialValues }: LeadFormProps) {
  const [form, setForm] = useState<FormState>({
    ...DEFAULT_FORM,
    ...initialValues,
    luas: initialValues?.luas ? String(initialValues.luas) : "",
  });
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [submittedLead, setSubmittedLead] = useState<LeadInput | null>(null);

  useEffect(() => {
    const savedDraft = localStorage.getItem(DRAFT_KEY);
    if (!savedDraft) return;

    try {
      const parsed = JSON.parse(savedDraft) as Partial<FormState>;
      setForm((prev) => ({ ...prev, ...parsed }));
    } catch {
      localStorage.removeItem(DRAFT_KEY);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(DRAFT_KEY, JSON.stringify(form));
  }, [form]);

  const whatsappLink = useMemo(() => {
    if (!submittedLead) return null;
    return buildWhatsAppLink(buildLeadSummaryMessage(submittedLead));
  }, [submittedLead]);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitError(null);

    const payload: LeadInput = {
      nama: form.nama.trim(),
      whatsapp: form.whatsapp.trim(),
      lokasi: form.lokasi.trim(),
      jenisPekerjaan: form.jenisPekerjaan.trim(),
      luas: form.luas ? Number(form.luas) : null,
      budgetRange: form.budgetRange || undefined,
      targetMulai: form.targetMulai || undefined,
      catatan: form.catatan.trim() || undefined,
    };

    const validation = leadSchema.safeParse(payload);
    if (!validation.success) {
      const nextErrors: Record<string, string> = {};
      for (const issue of validation.error.issues) {
        const key = issue.path[0];
        if (typeof key === "string" && !nextErrors[key]) {
          nextErrors[key] = issue.message;
        }
      }
      setFieldErrors(nextErrors);
      return;
    }

    setFieldErrors({});
    setSubmitting(true);

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = (await response.json()) as { ok: boolean; error?: string };
      if (!response.ok || !data.ok) {
        throw new Error(data.error || "Terjadi kesalahan saat mengirim data.");
      }

      setSubmittedLead(payload);
      localStorage.setItem(DRAFT_KEY, JSON.stringify(payload));
    } catch (error) {
      setSubmitError(error instanceof Error ? error.message : "Gagal mengirim formulir.");
    } finally {
      setSubmitting(false);
    }
  }

  function setValue<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Nama" required error={fieldErrors.nama}>
          <Input value={form.nama} onChange={(event) => setValue("nama", event.target.value)} name="nama" />
        </Field>

        <Field label="Nomor WhatsApp" required error={fieldErrors.whatsapp}>
          <Input
            value={form.whatsapp}
            onChange={(event) => setValue("whatsapp", event.target.value)}
            placeholder="08xxxxxxxxxx / +628xxxxxxxxxx"
            name="whatsapp"
          />
        </Field>

        <Field label="Lokasi Proyek" required error={fieldErrors.lokasi}>
          <Input
            value={form.lokasi}
            onChange={(event) => setValue("lokasi", event.target.value)}
            placeholder="Kota / Kecamatan"
            name="lokasi"
          />
        </Field>

        <Field label="Jenis Pekerjaan" required error={fieldErrors.jenisPekerjaan}>
          <Select
            value={form.jenisPekerjaan}
            onChange={(event) => setValue("jenisPekerjaan", event.target.value)}
            name="jenisPekerjaan"
          >
            <option value="">Pilih jenis pekerjaan</option>
            {pekerjaanOptions.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </Select>
        </Field>

        <Field label="Luas Perkiraan (m2)">
          <Input
            type="number"
            min={0}
            value={form.luas}
            onChange={(event) => setValue("luas", event.target.value)}
            name="luas"
          />
        </Field>

        <Field label="Budget Range">
          <Select
            value={form.budgetRange}
            onChange={(event) => setValue("budgetRange", event.target.value)}
            name="budgetRange"
          >
            <option value="">Pilih budget</option>
            {budgetOptions.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </Select>
        </Field>

        <Field label="Target Mulai (bulan)">
          <Input
            type="month"
            value={form.targetMulai}
            onChange={(event) => setValue("targetMulai", event.target.value)}
            name="targetMulai"
          />
        </Field>
      </div>

      <Field label="Catatan">
        <Textarea
          rows={4}
          value={form.catatan}
          onChange={(event) => setValue("catatan", event.target.value)}
          name="catatan"
          placeholder="Tuliskan kebutuhan ruang, referensi gaya, atau kendala khusus..."
        />
      </Field>

      <Button type="submit" disabled={submitting} fullWidth>
        {submitting ? "Mengirim..." : "Kirim Permintaan Penawaran"}
      </Button>

      {submitError ? (
        <Toast
          type="error"
          title="Gagal mengirim formulir"
          description={submitError}
        />
      ) : null}

      {submittedLead ? (
        <Toast
          type="success"
          title="Form berhasil dikirim"
          description="Tim kami akan menghubungi Anda segera."
          action={
            whatsappLink ? (
              <ButtonLink href={whatsappLink} target="_blank" rel="noreferrer" size="sm">
                Chat WhatsApp Sekarang
              </ButtonLink>
            ) : null
          }
        />
      ) : null}
    </form>
  );
}

type FieldProps = {
  label: string;
  children: ReactNode;
  required?: boolean;
  error?: string;
};

function Field({ label, children, required, error }: FieldProps) {
  return (
    <label className="block text-sm">
      <span className="mb-1 block font-medium text-slate-700">
        {label}
        {required ? <span className="ml-1 text-rose-600">*</span> : null}
      </span>
      {children}
      {error ? <span className="mt-1 block text-xs text-rose-700">{error}</span> : null}
    </label>
  );
}


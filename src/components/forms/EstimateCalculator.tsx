"use client";

import { useMemo, useState } from "react";

import { ButtonLink } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Input } from "@/components/ui/Input";
import { Select } from "@/components/ui/Select";
import { formatCurrency } from "@/lib/format";

const jobTypeOptions = [
  { value: "renovasi-ringan", label: "Renovasi Ringan" },
  { value: "renovasi-sedang", label: "Renovasi Sedang" },
  { value: "bangun-baru", label: "Bangun Baru" },
  { value: "interior", label: "Interior" },
];

const materialOptions = [
  { value: "ekonomis", label: "Ekonomis" },
  { value: "standar", label: "Standar" },
  { value: "premium", label: "Premium" },
];

function getBasePerM2(jobType: string): number {
  if (jobType === "bangun-baru") return 4500000;
  if (jobType === "renovasi-sedang") return 3800000;
  if (jobType === "interior") return 3200000;
  return 3000000;
}

function getMaterialMultiplier(material: string): number {
  if (material === "premium") return 1.35;
  if (material === "standar") return 1.15;
  return 1;
}

export function EstimateCalculator() {
  const [luas, setLuas] = useState("120");
  const [jobType, setJobType] = useState("renovasi-ringan");
  const [material, setMaterial] = useState("standar");

  const estimate = useMemo(() => {
    const numericLuas = Number(luas);
    if (!Number.isFinite(numericLuas) || numericLuas <= 0) {
      return null;
    }

    const basePerM2 = getBasePerM2(jobType);
    const materialMultiplier = getMaterialMultiplier(material);
    const min = Math.round(numericLuas * basePerM2 * materialMultiplier * 0.9);
    const max = Math.round(numericLuas * basePerM2 * materialMultiplier * 1.2);

    return { min, max, numericLuas };
  }, [jobType, luas, material]);

  const contactHref = estimate
    ? `/kontak?jenisPekerjaan=${encodeURIComponent(jobType)}&luas=${encodeURIComponent(String(estimate.numericLuas))}&budgetRange=${encodeURIComponent(`${formatCurrency(estimate.min)} - ${formatCurrency(estimate.max)}`)}&estimasi=${encodeURIComponent(`${formatCurrency(estimate.min)} - ${formatCurrency(estimate.max)}`)}`
    : "/kontak";

  return (
    <Card className="p-6">
      <h3 className="text-xl font-semibold text-slate-900">Kalkulator Estimasi Ringkas</h3>
      <p className="mt-2 text-sm text-slate-600">
        Estimasi ini bersifat indikatif. Nilai akhir mengikuti hasil survey, gambar kerja, dan spesifikasi material.
      </p>

      <div className="mt-5 grid gap-4 sm:grid-cols-3">
        <label className="block text-sm">
          <span className="mb-1 block font-medium text-slate-700">Luas (m2)</span>
          <Input
            type="number"
            min={1}
            value={luas}
            onChange={(event) => setLuas(event.target.value)}
            placeholder="Masukkan luas"
          />
        </label>

        <label className="block text-sm">
          <span className="mb-1 block font-medium text-slate-700">Tipe Pekerjaan</span>
          <Select value={jobType} onChange={(event) => setJobType(event.target.value)}>
            {jobTypeOptions.map((item) => (
              <option key={item.value} value={item.value}>
                {item.label}
              </option>
            ))}
          </Select>
        </label>

        <label className="block text-sm">
          <span className="mb-1 block font-medium text-slate-700">Kualitas Material</span>
          <Select value={material} onChange={(event) => setMaterial(event.target.value)}>
            {materialOptions.map((item) => (
              <option key={item.value} value={item.value}>
                {item.label}
              </option>
            ))}
          </Select>
        </label>
      </div>

      <div className="mt-6 rounded-lg border border-slate-200 bg-slate-50 p-4">
        {estimate ? (
          <>
            <p className="text-sm text-slate-600">Estimasi kisaran biaya:</p>
            <p className="mt-1 text-xl font-bold text-slate-900">
              {formatCurrency(estimate.min)} - {formatCurrency(estimate.max)}
            </p>
          </>
        ) : (
          <p className="text-sm text-rose-700">Masukkan luas valid untuk menghitung estimasi.</p>
        )}
      </div>

      <div className="mt-5">
        <ButtonLink href={contactHref} fullWidth>
          Kirim Estimasi ke Form Kontak
        </ButtonLink>
      </div>
      <p className="mt-3 text-xs text-slate-500">Disclaimer: Estimasi awal bukan penawaran final dan dapat berubah sesuai kondisi lapangan.</p>
    </Card>
  );
}


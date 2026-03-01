import { Container } from "@/components/layout/Container";
import { Badge } from "@/components/ui/Badge";

export function TrustSection() {
  return (
    <section className="py-6">
      <Container>
        <div className="rounded-xl border border-slate-200 bg-white p-4 sm:p-6">
          <div className="flex flex-wrap gap-2">
            <Badge variant="accent">Garansi 3 bulan</Badge>
            <Badge variant="neutral">RAB Transparan</Badge>
            <Badge variant="success">Survey Gratis*</Badge>
          </div>
          <p className="mt-3 text-xs text-slate-500">*Syarat dan ketentuan berlaku sesuai area layanan dan skala pekerjaan.</p>
        </div>
      </Container>
    </section>
  );
}


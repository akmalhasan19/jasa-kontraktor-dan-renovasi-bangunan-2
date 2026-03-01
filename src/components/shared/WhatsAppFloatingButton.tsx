"use client";

import { MessageCircle } from "lucide-react";

import { buildWhatsAppLink } from "@/lib/whatsapp";

export function WhatsAppFloatingButton() {
  const href = buildWhatsAppLink("Halo, saya ingin konsultasi gratis terkait proyek renovasi.");

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-4 right-4 z-40 inline-flex items-center gap-2 rounded-full bg-emerald-500 px-4 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-emerald-600 md:bottom-6 md:right-6"
      aria-label="Chat WhatsApp"
    >
      <MessageCircle className="h-4 w-4" />
      Chat WhatsApp
    </a>
  );
}


"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";

import { cn } from "@/lib/utils";

type AccordionItem = {
  question: string;
  answer: string;
};

type AccordionProps = {
  items: AccordionItem[];
};

export function Accordion({ items }: AccordionProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <div className="space-y-3">
      {items.map((item, index) => {
        const isOpen = activeIndex === index;

        return (
          <div key={item.question} className="overflow-hidden rounded-lg border border-slate-200 bg-white">
            <button
              className="flex w-full items-center justify-between px-4 py-3 text-left text-sm font-semibold text-slate-900"
              onClick={() => setActiveIndex(isOpen ? null : index)}
              aria-expanded={isOpen}
            >
              <span>{item.question}</span>
              <ChevronDown className={cn("h-4 w-4 transition", isOpen ? "rotate-180" : "")} />
            </button>
            {isOpen ? <p className="border-t border-slate-100 px-4 py-3 text-sm text-slate-600">{item.answer}</p> : null}
          </div>
        );
      })}
    </div>
  );
}


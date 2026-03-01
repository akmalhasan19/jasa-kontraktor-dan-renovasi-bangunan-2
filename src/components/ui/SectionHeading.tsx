import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  action?: ReactNode;
};

export function SectionHeading({
  title,
  subtitle,
  align = "left",
  action,
}: SectionHeadingProps) {
  const isCenter = align === "center";

  return (
    <div
      className={cn("mb-8 flex flex-col gap-4", isCenter ? "items-center text-center" : "items-start")}
    >
      <div>
        <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">{title}</h2>
        {subtitle ? <p className="mt-2 max-w-2xl text-slate-600">{subtitle}</p> : null}
      </div>
      {action}
    </div>
  );
}


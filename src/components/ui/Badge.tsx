import { cva, type VariantProps } from "class-variance-authority";
import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

const badgeVariants = cva("inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold", {
  variants: {
    variant: {
      neutral: "bg-slate-100 text-slate-700",
      accent: "bg-accent-100 text-accent-700",
      success: "bg-emerald-100 text-emerald-700",
    },
  },
  defaultVariants: {
    variant: "neutral",
  },
});

type BadgeProps = {
  children: ReactNode;
  className?: string;
} & VariantProps<typeof badgeVariants>;

export function Badge({ children, className, variant }: BadgeProps) {
  return <span className={cn(badgeVariants({ variant }), className)}>{children}</span>;
}


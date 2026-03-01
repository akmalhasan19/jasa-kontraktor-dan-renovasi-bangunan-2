import { CheckCircle2, AlertTriangle } from "lucide-react";
import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type ToastProps = {
  type: "success" | "error";
  title: string;
  description?: string;
  action?: ReactNode;
};

export function Toast({ type, title, description, action }: ToastProps) {
  return (
    <div
      className={cn(
        "rounded-lg border p-4 text-sm",
        type === "success"
          ? "border-emerald-200 bg-emerald-50 text-emerald-800"
          : "border-rose-200 bg-rose-50 text-rose-800",
      )}
      role="status"
      aria-live="polite"
    >
      <div className="flex items-start gap-3">
        {type === "success" ? (
          <CheckCircle2 className="mt-0.5 h-4 w-4" />
        ) : (
          <AlertTriangle className="mt-0.5 h-4 w-4" />
        )}
        <div className="flex-1">
          <p className="font-semibold">{title}</p>
          {description ? <p className="mt-1">{description}</p> : null}
          {action ? <div className="mt-3">{action}</div> : null}
        </div>
      </div>
    </div>
  );
}


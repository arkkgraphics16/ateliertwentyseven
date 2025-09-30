import * as React from "react";
import { cn } from "@/lib/utils";

export interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: React.ReactNode;
}

export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className, label, ...props }, ref) => (
    <label className={cn("inline-flex items-center gap-2 text-sm text-ink/80", className)}>
      <input
        type="checkbox"
        ref={ref}
        className="h-4 w-4 rounded-md border border-muted/80 text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
        {...props}
      />
      <span>{label}</span>
    </label>
  )
);
Checkbox.displayName = "Checkbox";

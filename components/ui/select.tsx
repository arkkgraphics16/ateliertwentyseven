import * as React from "react";
import { cn } from "@/lib/utils";

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {}

const Select = React.forwardRef<HTMLSelectElement, SelectProps>(({ className, children, ...props }, ref) => (
  <select
    className={cn(
      "w-full appearance-none rounded-2xl border border-muted/70 bg-card px-4 py-3 text-sm text-ink shadow-inner shadow-muted/30 transition focus:border-primary",
      className
    )}
    ref={ref}
    {...props}
  >
    {children}
  </select>
));
Select.displayName = "Select";

export { Select };

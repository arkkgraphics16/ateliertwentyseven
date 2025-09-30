import * as React from "react";
import { cn } from "@/lib/utils";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(({ className, type, ...props }, ref) => {
  return (
    <input
      type={type}
      className={cn(
        "w-full rounded-2xl border border-muted/70 bg-card px-4 py-3 text-sm text-ink shadow-inner shadow-muted/30 transition placeholder:text-ink/40 focus:border-primary",
        className
      )}
      ref={ref}
      {...props}
    />
  );
});
Input.displayName = "Input";

export { Input };

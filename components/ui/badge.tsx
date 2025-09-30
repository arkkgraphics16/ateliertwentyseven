import * as React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {}

export const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(({ className, ...props }, ref) => (
  <span
    ref={ref}
    className={cn(
      "badge-pill bg-card/90",
      className
    )}
    {...props}
  />
));
Badge.displayName = "Badge";

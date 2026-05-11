import * as React from "react";
import { cn } from "@/lib/utils";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  padding?: "none" | "sm" | "md" | "lg";
  radius?: "sm" | "md" | "lg";
  interactive?: boolean;
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, padding = "md", radius = "md", interactive = false, ...props }, ref) => {
    
    const paddings = {
      none: "p-0",
      sm: "p-4",
      md: "p-6 md:p-8",  // 24px-32px
      lg: "p-8 md:p-12",
    };

    const radiuses = {
      sm: "rounded-[var(--radius-sm)]",
      md: "rounded-[var(--radius-md)]",
      lg: "rounded-[var(--radius-lg)]",
    };

    return (
      <div
        ref={ref}
        className={cn(
          "bg-surface text-text-dark border border-border-light shadow-soft overflow-hidden",
          paddings[padding],
          radiuses[radius],
          interactive && "transition-transform hover:-translate-y-1 hover:shadow-lg cursor-pointer",
          className
        )}
        {...props}
      />
    );
  }
);
Card.displayName = "Card";

export { Card };

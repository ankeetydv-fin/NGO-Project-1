import * as React from "react";
import { cn } from "@/lib/utils";

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  spacing?: "none" | "sm" | "md" | "lg";
  background?: "default" | "white" | "primary" | "secondary";
}

const Section = React.forwardRef<HTMLElement, SectionProps>(
  ({ className, spacing = "md", background = "default", ...props }, ref) => {
    
    // 80–120px desktop, 48–72px mobile
    const spacings = {
      none: "py-0",
      sm: "py-8 md:py-12",
      md: "py-12 md:py-20 lg:py-24", // roughly 48-96px
      lg: "py-16 md:py-24 lg:py-32", // roughly 64-128px
    };

    const backgrounds = {
      default: "bg-bg-off-white",
      white: "bg-surface",
      primary: "bg-primary text-surface",
      secondary: "bg-secondary text-surface",
    };

    return (
      <section
        ref={ref}
        className={cn(
          "w-full",
          spacings[spacing],
          backgrounds[background],
          className
        )}
        {...props}
      />
    );
  }
);
Section.displayName = "Section";

export { Section };

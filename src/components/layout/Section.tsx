import * as React from "react";
import { cn } from "@/lib/utils";

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  spacing?: "none" | "sm" | "md" | "lg" | "xl";
  background?: "default" | "white" | "primary" | "secondary" | "off-white-light";
}

const Section = React.forwardRef<HTMLElement, SectionProps>(
  ({ className, spacing = "md", background = "default", ...props }, ref) => {
    
    // Generous editorial spacing to avoid congestion
    const spacings = {
      none: "py-0",
      sm: "py-12 md:py-16",
      md: "py-16 md:py-24 lg:py-32", 
      lg: "py-24 md:py-32 lg:py-40", 
      xl: "py-32 md:py-40 lg:py-48",
    };

    const backgrounds = {
      default: "bg-bg-off-white text-text-dark",
      white: "bg-surface text-text-dark",
      primary: "bg-primary text-surface",
      secondary: "bg-secondary text-text-dark",
      "off-white-light": "bg-off-white-light text-text-dark",
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

import * as React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "accent" | "outline" | "ghost" | "link";
  size?: "sm" | "md" | "lg" | "xl" | "icon";
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", ...props }, ref) => {
    
    // Base styles: accessible, transition, font-medium, rounded corners, focus ring
    const baseStyles = "inline-flex items-center justify-center font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none rounded-md";
    
    // Variant styles mapping
    const variants = {
      primary: "bg-btn-blue text-surface hover:bg-btn-blue/90 shadow-soft",
      secondary: "bg-secondary text-surface hover:bg-secondary/90 shadow-soft",
      accent: "bg-btn-blue text-surface hover:bg-btn-blue/90 shadow-soft",
      outline: "border-2 border-btn-blue text-btn-blue hover:bg-btn-blue/10",
      ghost: "hover:bg-btn-blue/10 text-btn-blue",
      link: "underline-offset-4 hover:underline text-btn-blue p-0 h-auto font-semibold",
    };

    // Size styles mapping
    const sizes = {
      sm: "h-9 px-4 text-sm",
      md: "h-11 px-6 text-base", // 44px
      lg: "h-14 px-8 text-lg",   // 52px
      xl: "h-16 px-10 text-xl",  // 64px
      icon: "h-11 w-11",
    };

    return (
      <button
        ref={ref}
        className={cn(baseStyles, variants[variant], variant !== "link" && sizes[size], className)}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button };

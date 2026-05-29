import * as React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "accent" | "outline" | "ghost" | "link";
  size?: "sm" | "md" | "lg" | "xl" | "icon";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", ...props }, ref) => {
    
    // Base styles: accessible, transition, font-medium, focus ring, sharper corners
    const baseStyles = "inline-flex items-center justify-center font-bold tracking-wider uppercase transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none rounded-sm";
    
    // Variant styles mapping - flat, high contrast
    const variants = {
      primary: "bg-primary text-white hover:bg-primary/90 hover:scale-[1.02]",
      secondary: "bg-secondary text-white hover:bg-secondary/90 hover:scale-[1.02]",
      accent: "bg-accent-orange text-white hover:bg-accent-orange/90 hover:scale-[1.02]",
      outline: "border-2 border-primary text-primary hover:bg-primary hover:text-white",
      ghost: "hover:bg-primary/10 text-primary",
      link: "underline-offset-[6px] hover:underline text-primary p-0 h-auto",
    };

    // Size styles mapping - slightly adjusted for better proportions
    const sizes = {
      sm: "h-10 px-5 text-xs",
      md: "h-12 px-8 text-sm", 
      lg: "h-14 px-10 text-base",   
      xl: "h-16 px-12 text-base",  
      icon: "h-12 w-12",
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

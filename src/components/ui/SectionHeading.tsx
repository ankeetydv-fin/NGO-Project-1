"use client";

import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  label?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  label,
  title,
  description,
  align = "center",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "mb-12 md:mb-16",
        align === "center" && "text-center",
        className
      )}
    >
      {label && (
        <p className="text-secondary font-semibold text-sm uppercase tracking-wider mb-3">
          {label}
        </p>
      )}
      <h2 className="text-h2 text-text-dark mb-4">{title}</h2>
      {description && (
        <p
          className={cn(
            "text-body-large text-text-muted",
            align === "center" && "max-w-2xl mx-auto"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}

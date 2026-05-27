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
        align === "center" && "text-center flex flex-col items-center",
        className
      )}
    >
      {label && (
        <p className={cn(
          "text-secondary/70 font-bold text-xs uppercase tracking-[0.2em] mb-4 flex items-center gap-2",
          align === "center" && "justify-center"
        )}>
          <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
          {label}
          {align === "center" && <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>}
        </p>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold font-heading text-text-dark mb-5 tracking-tight leading-tight">
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "text-lg text-text-muted leading-relaxed",
            align === "center" && "max-w-2xl mx-auto"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}

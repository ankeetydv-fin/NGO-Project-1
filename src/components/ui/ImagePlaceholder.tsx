"use client";

import Image from "next/image";

interface ImagePlaceholderProps {
  src?: string;
  alt: string;
  aspect?: string;
  className?: string;
  size?: "sm" | "md";
}

export function ImagePlaceholder({
  src,
  alt,
  aspect = "4/3",
  className = "",
  size = "md",
}: ImagePlaceholderProps) {
  if (src) {
    return (
      <div
        className={`relative overflow-hidden rounded-[var(--radius-md)] ${className}`}
        style={{ aspectRatio: aspect }}
      >
        <Image src={src} alt={alt} fill className="object-cover" sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw" />
      </div>
    );
  }

  const sizes = {
    sm: { container: "w-12 h-12", icon: "w-6 h-6", gap: "gap-2", text: "text-xs" },
    md: { container: "w-16 h-16", icon: "w-8 h-8", gap: "gap-3", text: "text-sm" },
  };
  const s = sizes[size];

  return (
    <div
      className={`relative rounded-[var(--radius-md)] bg-border-light/40 border-2 border-dashed border-border-light flex flex-col items-center justify-center ${s.gap} ${className}`}
      style={{ aspectRatio: aspect }}
    >
      <div
        className={`${s.container} rounded-full bg-primary/10 flex items-center justify-center`}
      >
        <svg
          className={`${s.icon} text-primary/40`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0022.5 18.75V5.25A2.25 2.25 0 0020.25 3H3.75A2.25 2.25 0 001.5 5.25v13.5A2.25 2.25 0 003.75 21z"
          />
        </svg>
      </div>
      <span className={`${s.text} text-text-muted/60 font-medium`}>{alt}</span>
    </div>
  );
}

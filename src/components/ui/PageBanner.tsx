import { Container } from "@/components/layout/Container";

interface PageBannerProps {
  title: string;
  subtitle?: string;
  breadcrumb?: string;
  tagline?: string;
}

export function PageBanner({ title, subtitle, breadcrumb, tagline }: PageBannerProps) {
  return (
    <section className="relative pt-12 pb-12 md:pt-16 md:pb-16 lg:pt-24 lg:pb-20 bg-neutral-950 border-b border-neutral-900 overflow-hidden">
      {/* Decorative */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-primary/10 blur-3xl translate-x-1/3 -translate-y-1/3" />
        <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-white/5 blur-3xl -translate-x-1/2 translate-y-1/2" />
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
      </div>

      <Container size="lg" className="relative z-10">
        <div className="max-w-4xl space-y-6">
          {breadcrumb && (
            <div className="flex items-center gap-2 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-orange" />
              <span className="text-sm font-bold uppercase tracking-[0.2em] text-primary">
                {breadcrumb}
              </span>
            </div>
          )}
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-heading font-extrabold text-white leading-tight tracking-tight">
            {title}
          </h1>
          {tagline && (
            <p className="text-lg sm:text-xl md:text-2xl text-primary font-bold tracking-wide mt-2">
              {tagline}
            </p>
          )}
          {subtitle && (
            <p className="text-base sm:text-lg md:text-xl text-neutral-300 max-w-2xl leading-relaxed font-light mt-6">
              {subtitle}
            </p>
          )}
        </div>
      </Container>
    </section>
  );
}

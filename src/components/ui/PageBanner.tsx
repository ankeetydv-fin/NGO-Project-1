import { Container } from "@/components/layout/Container";

interface PageBannerProps {
  title: string;
  subtitle?: string;
  breadcrumb?: string;
  tagline?: string;
}

export function PageBanner({ title, subtitle, breadcrumb, tagline }: PageBannerProps) {
  return (
    <section className="relative bg-secondary py-20 md:py-32 overflow-hidden border-t-4 border-primary">
      {/* Decorative */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-primary/5 blur-3xl translate-x-1/3 -translate-y-1/3" />
        <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-surface/5 blur-3xl -translate-x-1/2 translate-y-1/2" />
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
      </div>

      <Container size="lg" className="relative z-10">
        <div className="max-w-4xl text-surface space-y-6">
          {breadcrumb && (
            <p className="text-primary font-bold text-xs uppercase tracking-[0.2em] flex items-center gap-3">
              <span className="w-8 h-[2px] bg-primary"></span>
              {breadcrumb}
            </p>
          )}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold font-heading leading-tight tracking-tight">
            {title}
          </h1>
          {tagline && (
            <p className="text-lg sm:text-xl md:text-2xl text-primary font-bold tracking-wide mt-2">
              {tagline}
            </p>
          )}
          {subtitle && (
            <p className="text-base sm:text-lg md:text-xl text-surface/80 max-w-2xl leading-relaxed font-light mt-6">
              {subtitle}
            </p>
          )}
        </div>
      </Container>
    </section>
  );
}

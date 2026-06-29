import { notFound } from "next/navigation";
import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { DonationWidget } from "@/components/donate";
import { campaigns } from "@/content/campaigns";
import { CheckCircle2, Target, Users, MapPin } from "lucide-react";

export function generateStaticParams() {
  return campaigns.map((c) => ({
    slug: c.slug,
  }));
}

export default async function CampaignPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const campaign = campaigns.find((c) => c.slug === resolvedParams.slug);

  if (!campaign) {
    notFound();
  }

  const progressPercentage = Math.min(100, Math.round((campaign.raisedAmount / campaign.goalAmount) * 100));

  return (
    <>
      {/* ── HERO SECTION ── */}
      <Section spacing="none" className="pt-24 pb-16 md:pt-28 md:pb-20 bg-surface border-b border-border-light/40">
        <Container size="xl">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            {/* Left Content */}
            <div className="lg:col-span-7 flex flex-col pt-4">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-6 w-fit">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                Active Campaign
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-heading text-text-dark leading-[1.1] mb-6">
                {campaign.title}
              </h1>
              
              <p className="text-xl md:text-2xl font-medium text-text-dark/80 leading-relaxed mb-6">
                {campaign.subtitle}
              </p>
              
              <p className="text-lg text-text-muted leading-relaxed mb-8 max-w-2xl">
                {campaign.description}
              </p>
              
              {/* Key Metrics Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 mb-10 pb-10 border-b border-border-light/60">
                <div>
                  <div className="flex items-center gap-2 text-primary mb-2">
                    <Target size={20} />
                    <span className="font-bold text-sm uppercase tracking-wider">Goal</span>
                  </div>
                  <div className="text-2xl font-bold font-heading text-text-dark">
                    ₹{campaign.goalAmount.toLocaleString("en-IN")}
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-2 text-primary mb-2">
                    <Users size={20} />
                    <span className="font-bold text-sm uppercase tracking-wider">Impact</span>
                  </div>
                  <div className="text-xl font-bold font-heading text-text-dark">
                    {campaign.beneficiaries}
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-2 text-primary mb-2">
                    <MapPin size={20} />
                    <span className="font-bold text-sm uppercase tracking-wider">Location</span>
                  </div>
                  <div className="text-xl font-bold font-heading text-text-dark">
                    {campaign.location}
                  </div>
                </div>
              </div>
              
              {/* Quick Stats row from campaign.stats */}
              <div className="flex flex-wrap gap-4">
                {campaign.stats.map((stat, idx) => (
                  <div key={idx} className="bg-white border border-border-light/60 rounded-xl p-4 flex-1 min-w-[140px] shadow-sm">
                    <div className="text-3xl font-extrabold font-heading text-primary mb-1">{stat.value}</div>
                    <div className="text-xs font-bold uppercase tracking-wider text-text-muted">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Right Media / Cover Image */}
            <div className="lg:col-span-5 relative">
              <div className="relative w-full aspect-[4/5] sm:aspect-square lg:aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src={campaign.coverImage}
                  alt={campaign.title}
                  fill
                  priority
                  className="object-cover"
                />
                {/* Progress Overlay */}
                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/90 via-black/60 to-transparent p-6 sm:p-8 pt-20">
                  <div className="flex justify-between items-end mb-3">
                    <div className="text-white">
                      <div className="text-sm font-bold uppercase tracking-wider text-white/80 mb-1">Raised so far</div>
                      <div className="text-3xl font-bold font-heading">₹{campaign.raisedAmount.toLocaleString("en-IN")}</div>
                    </div>
                    <div className="text-primary text-xl font-bold bg-white px-3 py-1 rounded-lg">
                      {progressPercentage}%
                    </div>
                  </div>
                  <div className="w-full bg-white/20 h-2 rounded-full overflow-hidden">
                    <div 
                      className="bg-primary h-full rounded-full transition-all duration-1000" 
                      style={{ width: `${progressPercentage}%` }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* ── STORY & IMPACT + DONATION WIDGET SECTION ── */}
      <Section spacing="lg" className="bg-bg-off-white">
        <Container size="xl">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
            
            {/* Left Column: Deep Narrative */}
            <div className="lg:col-span-7 flex flex-col gap-8">
              <div className="prose prose-lg prose-headings:font-heading prose-headings:font-bold prose-a:text-primary max-w-none text-text-dark/80 text-left">
                <h2 className="text-3xl font-extrabold text-text-dark mb-6">The Crisis on the Ground</h2>
                <p className="leading-relaxed mb-8">{campaign.problem}</p>
                
                <h2 className="text-3xl font-extrabold text-text-dark mb-6">Our Direct Intervention</h2>
                <p className="leading-relaxed mb-8">{campaign.solution}</p>
                
                <div className="bg-primary/5 border-l-4 border-primary p-6 sm:p-8 rounded-r-2xl my-10 text-left">
                  <h3 className="text-xl font-bold text-text-dark mb-4 mt-0">The Tangible Impact</h3>
                  <p className="mb-0 text-text-dark/80 italic">{'\u201C'}{campaign.impact}{'\u201D'}</p>
                </div>
              </div>
              
              {campaign.testimonials && campaign.testimonials.length > 0 && (
                <div className="mt-4 pt-8 border-t border-border-light/60">
                  <h2 className="text-2xl md:text-3xl font-extrabold font-heading text-text-dark mb-8 flex items-center gap-3 text-left">
                    <CheckCircle2 className="text-accent-green shrink-0" size={28} />
                    <span>Voices from the Ground</span>
                  </h2>
                  <div className="grid gap-6">
                    {campaign.testimonials.map((test, idx) => (
                      <div key={idx} className="bg-white border border-border-light rounded-2xl p-6 md:p-8 shadow-sm flex flex-col gap-5 text-left">
                        <blockquote className="text-lg italic text-text-dark/95 leading-relaxed pl-4 border-l-2 border-primary/30 relative m-0">
                          {'\u201C'}{test.quote}{'\u201D'}
                        </blockquote>
                        <div className="flex items-center gap-4 mt-1">
                          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-lg shrink-0">
                            {test.name.charAt(0)}
                          </div>
                          <div className="flex flex-col text-left">
                            <span className="font-bold text-text-dark leading-tight">{test.name}</span>
                            <span className="text-sm text-text-muted mt-0.5">{test.role}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
            
            {/* Right Column: Donation Widget */}
            <div className="lg:col-span-5 relative">
              <div className="sticky top-24">
                <div className="mb-6">
                  <h3 className="text-2xl font-extrabold font-heading text-text-dark">Support This Campaign</h3>
                  <p className="text-text-muted mt-2">Your contribution will directly fund the execution of this mission.</p>
                </div>
                <DonationWidget />
              </div>
            </div>
            
          </div>
        </Container>
      </Section>
    </>
  );
}

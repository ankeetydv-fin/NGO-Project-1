import { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { 
  DonationWidget, 
  TaxBanner, 
  ImpactGrid, 
  BeneficiaryStory, 
  FAQAccordion 
} from "@/components/donate";
import { getHomepage, getFAQItems, type HomepageData, type FAQData } from "@/sanity/lib/queries";
import { donationTiers as staticDonationTiers } from "@/content";

export const metadata: Metadata = {
  title: "Donate Now | Secure Their Future",
  description: "Your donation creates real change. Claim 50% tax exemption under Section 80G instantly.",
};

export default async function DonatePage() {
  const [homepageData, faqItems] = await Promise.all([
    getHomepage(),
    getFAQItems(),
  ]);

  const donationTiers = homepageData?.donationTiers?.length ? homepageData.donationTiers : staticDonationTiers;

  return (
    <>
      <Section spacing="none" className="pt-24 pb-16 bg-surface">
        <Container size="xl">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            
            <div className="flex flex-col h-full pt-4 lg:pt-8">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold font-heading text-text-dark leading-tight mb-6">
                Secure Their Future.<br/>
                <span className="text-primary">Secure Your Tax Benefits.</span>
              </h1>
              <p className="text-xl text-text-muted mb-10 font-medium leading-relaxed max-w-lg">
                Your contribution immediately deploys life-saving resources to the ground. Give today, transform a life tomorrow.
              </p>
              
              <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden mt-auto shadow-md">
                <Image
                  src="/images/placeholder.svg"
                  alt="Hopeful Beneficiary"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/10" />
              </div>
            </div>

            <div className="lg:pl-8">
              <DonationWidget donationTiers={donationTiers} />
            </div>

          </div>
        </Container>
      </Section>

      <TaxBanner />
      <ImpactGrid />
      <BeneficiaryStory />
      <FAQAccordion faqItems={faqItems} />
    </>
  );
}
import React from "react";
import { trustPartners as staticTrustPartners } from "@/content";

interface TrustBarProps {
  trustPartners?: { name: string }[];
}

export function TrustBar({ trustPartners: sanityPartners }: TrustBarProps) {
  const partners = sanityPartners ?? staticTrustPartners;
  const tickerItems = [
    "Operational Transparency & Affiliations: Explore our impact reports and financial disclosures",
    ...partners.map(p => p.name),
    "Verified & Audited Financials",
    "100% Commitment to Grassroots Change"
  ];

  // Duplicate the items to ensure the marquee has enough content to scroll seamlessly
  const duplicatedItems = [...tickerItems, ...tickerItems, ...tickerItems, ...tickerItems];

  return (
    <section className="w-full bg-black text-white py-4 overflow-hidden flex whitespace-nowrap select-none border-b border-black">
      <div className="flex w-max animate-marquee items-center">
        {duplicatedItems.map((item, index) => (
          <React.Fragment key={index}>
            <span className="text-sm md:text-base font-sans font-semibold tracking-wide">{item}</span>
            <span className="text-[#E53935] text-lg mx-6">✹</span>
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}

"use client";

import { useState } from "react";
import { PageBanner } from "@/components/ui/PageBanner";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import {
  Heart,
  CheckCircle,
  ShieldCheck,
  CreditCard,
} from "lucide-react";
import { donationTiers } from "@/content";

const AMOUNTS = donationTiers.map((t) => t.amount);

export default function DonatePage() {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(2500);
  const [customAmount, setCustomAmount] = useState("");

  const activeAmount = customAmount ? parseInt(customAmount) : selectedAmount;

  return (
    <>
      <PageBanner
        title="Donate"
        subtitle="Your generosity creates real, measurable change. Every rupee goes directly to our grassroots programs across India."
        breadcrumb="Make a Difference"
      />

      <Section spacing="lg" background="white">
        <Container size="lg">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Donation Form - Left */}
            <div className="lg:col-span-3 space-y-8">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                <div>
                  <h2 className="text-3xl font-extrabold font-heading mb-2 text-secondary">
                    Choose Your Impact
                  </h2>
                  <p className="text-text-muted">
                    Select an amount or enter your own. Every contribution matters.
                  </p>
                </div>
              </div>

              {/* Amount Grid */}
              <div className="grid grid-cols-3 gap-4">
                {AMOUNTS.map((amount) => (
                  <button
                    key={amount}
                    className={`py-5 px-4 rounded-xl border-2 font-bold font-heading transition-all focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none ${
                      selectedAmount === amount && !customAmount
                        ? "border-primary bg-primary/5 text-primary scale-[1.02] shadow-sm"
                        : "border-border-light/60 bg-neutral-50 text-text-dark hover:border-primary/50"
                    }`}
                    onClick={() => {
                      setSelectedAmount(amount);
                      setCustomAmount("");
                    }}
                  >
                    <div className="text-xl">₹{amount.toLocaleString("en-IN")}</div>
                  </button>
                ))}
              </div>

              {/* Custom Amount */}
              <div>
                <label htmlFor="donate-custom" className="text-sm font-bold uppercase tracking-wider text-text-muted block mb-3">
                  Or enter a custom amount
                </label>
                <div className="relative">
                  <span className="absolute left-5 top-1/2 -translate-y-1/2 text-text-muted text-xl font-bold">₹</span>
                  <input
                    id="donate-custom"
                    type="number"
                    placeholder="Enter amount"
                    value={customAmount}
                    onChange={(e) => {
                      setCustomAmount(e.target.value);
                      setSelectedAmount(null);
                    }}
                    className="w-full pl-12 pr-5 py-4 bg-neutral-50 rounded-xl border border-border-light/60 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 text-xl font-bold transition-all shadow-inner"
                  />
                </div>
              </div>

              {/* Donor Info */}
              <div className="space-y-5 pt-4">
                <h3 className="text-xl font-extrabold font-heading text-secondary">Your Information</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <input type="text" placeholder="Full Name *" required className="w-full px-5 py-4 bg-neutral-50 rounded-xl border border-border-light/60 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all font-medium" />
                  <input type="email" placeholder="Email Address *" required className="w-full px-5 py-4 bg-neutral-50 rounded-xl border border-border-light/60 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all font-medium" />
                  <input type="tel" placeholder="Mobile Number *" required className="w-full px-5 py-4 bg-neutral-50 rounded-xl border border-border-light/60 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all font-medium" />
                  <input type="text" placeholder="PAN Number (for 80G receipt)" className="w-full px-5 py-4 bg-neutral-50 rounded-xl border border-border-light/60 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all font-medium" />
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <input type="text" placeholder="City" className="w-full px-5 py-4 bg-neutral-50 rounded-xl border border-border-light/60 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all font-medium" />
                  <input type="text" placeholder="Pincode" className="w-full px-5 py-4 bg-neutral-50 rounded-xl border border-border-light/60 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all font-medium" />
                </div>
              </div>

              {/* Submit */}
              <Button variant="primary" size="lg" className="w-full gap-2 text-lg rounded-xl shadow-glow py-6 font-bold hover:-translate-y-1 transition-transform">
                <Heart size={22} />
                Donate {activeAmount ? `₹${activeAmount.toLocaleString("en-IN")}` : "Now"}
              </Button>

              <div className="flex items-center justify-center gap-6 text-text-muted text-xs font-semibold uppercase tracking-wider flex-wrap pt-2">
                <span className="flex items-center gap-1.5"><ShieldCheck size={16} className="text-accent-green" /> Secure Payment</span>
                <span className="flex items-center gap-1.5"><CreditCard size={16} /> Razorpay</span>
                <span className="flex items-center gap-1.5"><CheckCircle size={16} className="text-primary" /> 80G Tax Exempt</span>
              </div>
            </div>

            {/* Right Sidebar */}
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-surface border border-border-light/60 rounded-2xl p-8 shadow-soft">
                <h3 className="font-extrabold font-heading text-xl mb-6 flex items-center gap-3 text-secondary">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <Heart size={20} />
                  </div>
                  Your Impact
                </h3>
                <ul className="space-y-5">
                  {donationTiers.map((tier) => (
                    <li key={tier.amount} className="flex items-start gap-4">
                      <span className="font-bold font-heading text-primary shrink-0 w-16 text-lg">
                        ₹{tier.amount.toLocaleString("en-IN")}
                      </span>
                      <span className="text-text-muted text-sm leading-relaxed">{tier.impact}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-surface border border-border-light/60 rounded-2xl p-8 shadow-soft">
                <h3 className="font-extrabold font-heading text-xl mb-6 flex items-center gap-3 text-secondary">
                  <div className="w-10 h-10 rounded-full bg-accent-green/10 flex items-center justify-center text-accent-green">
                    <ShieldCheck size={20} />
                  </div>
                  Our Promise
                </h3>
                <ul className="space-y-4">
                  {[
                    "100% of donations go directly to programs",
                    "80G tax exemption certificate via email",
                    "Transparent spending reports published annually",
                    "Secure, encrypted payment via Razorpay",
                    "FCRA compliant for international donations",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-text-muted text-sm font-medium">
                      <CheckCircle size={18} className="text-accent-green shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}

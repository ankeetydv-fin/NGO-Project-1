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
  const [donationFrequency, setDonationFrequency] = useState<'one-time' | 'monthly'>('one-time');
  const [selectedAmount, setSelectedAmount] = useState<number | null>(2500);
  const [customAmount, setCustomAmount] = useState("");

  const activeAmount = customAmount ? parseInt(customAmount) : selectedAmount;

  return (
    <>
      <PageBanner
        title="Donate"
        subtitle="Your generosity creates real, measurable change. Every rupee goes directly to our programs across India."
        breadcrumb="Make a Difference"
      />

      <Section spacing="lg" background="white">
        <Container size="lg">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Donation Form - Left */}
            <div className="lg:col-span-3 space-y-8">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold font-heading mb-2">
                    Choose Your Impact
                  </h2>
                  <p className="text-text-muted">
                    Select an amount or enter your own. Every contribution matters.
                  </p>
                </div>

                {/* Frequency Toggle */}
                <div className="flex p-1 bg-bg-off-white border border-border-light rounded-[var(--radius-sm)] w-full md:w-auto">
                  {['one-time', 'monthly'].map((freq) => (
                    <button
                      key={freq}
                      onClick={() => setDonationFrequency(freq as 'one-time' | 'monthly')}
                      className={`flex-1 md:w-32 py-2 px-4 rounded-[calc(var(--radius-sm)-4px)] text-sm font-bold capitalize transition-all ${
                        donationFrequency === freq
                          ? "bg-primary text-surface shadow-md"
                          : "text-text-muted hover:text-primary"
                      }`}
                    >
                      {freq}
                    </button>
                  ))}
                </div>
              </div>

              {/* Amount Grid */}
              <div className="grid grid-cols-3 gap-3">
                {AMOUNTS.map((amount) => (
                  <button
                    key={amount}
                    className={`py-4 px-4 rounded-[var(--radius-sm)] border-2 font-bold font-heading transition-all focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none ${
                      selectedAmount === amount && !customAmount
                        ? "border-primary bg-primary/5 text-primary"
                        : "border-border-light text-text-dark hover:border-primary/50"
                    }`}
                    onClick={() => {
                      setSelectedAmount(amount);
                      setCustomAmount("");
                    }}
                  >
                    <div className="text-lg">₹{amount.toLocaleString("en-IN")}</div>
                    {donationFrequency === 'monthly' && (
                      <div className="text-[10px] uppercase tracking-wider font-medium opacity-70">per month</div>
                    )}
                  </button>
                ))}
              </div>

              {/* Custom Amount */}
              <div>
                <label htmlFor="donate-custom" className="text-sm text-text-muted block mb-2">
                  Or enter a custom amount
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted text-lg font-bold">₹</span>
                  <input
                    id="donate-custom"
                    type="number"
                    placeholder="Enter amount"
                    value={customAmount}
                    onChange={(e) => {
                      setCustomAmount(e.target.value);
                      setSelectedAmount(null);
                    }}
                    className="w-full pl-10 pr-4 py-4 rounded-[var(--radius-sm)] border-2 border-border-light focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 text-lg font-medium transition-colors"
                  />
                </div>
              </div>

              {/* Donor Info */}
              <div className="space-y-4">
                <h3 className="text-lg font-bold font-heading">Your Information</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <input type="text" placeholder="Full Name *" required className="w-full px-4 py-3 rounded-[var(--radius-sm)] border border-border-light focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-colors" />
                  <input type="email" placeholder="Email Address *" required className="w-full px-4 py-3 rounded-[var(--radius-sm)] border border-border-light focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-colors" />
                  <input type="tel" placeholder="Mobile Number *" required className="w-full px-4 py-3 rounded-[var(--radius-sm)] border border-border-light focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-colors" />
                  <input type="text" placeholder="PAN Number (for 80G receipt)" className="w-full px-4 py-3 rounded-[var(--radius-sm)] border border-border-light focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-colors" />
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <input type="text" placeholder="City" className="w-full px-4 py-3 rounded-[var(--radius-sm)] border border-border-light focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-colors" />
                  <input type="text" placeholder="Pincode" className="w-full px-4 py-3 rounded-[var(--radius-sm)] border border-border-light focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-colors" />
                </div>
              </div>

              {/* Submit */}
              <Button variant="accent" size="lg" className="w-full gap-2 text-lg">
                <Heart size={22} />
                Donate {activeAmount ? `₹${activeAmount.toLocaleString("en-IN")}` : ""} {donationFrequency === 'monthly' ? "Monthly" : "Now"}
              </Button>

              <div className="flex items-center justify-center gap-6 text-text-muted text-sm flex-wrap">
                <span className="flex items-center gap-1"><ShieldCheck size={16} /> Secure Payment</span>
                <span className="flex items-center gap-1"><CreditCard size={16} /> Razorpay</span>
                <span className="flex items-center gap-1"><CheckCircle size={16} /> 80G Tax Exempt</span>
              </div>
            </div>

            {/* Right Sidebar */}
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-bg-off-white border border-border-light rounded-[var(--radius-md)] p-6 shadow-soft">
                <h3 className="font-bold font-heading text-lg mb-4 flex items-center gap-2">
                  <Heart size={20} className="text-accent-orange" /> Your Impact
                </h3>
                <ul className="space-y-4">
                  {donationTiers.map((tier) => (
                    <li key={tier.amount} className="flex items-start gap-3">
                      <span className="font-bold font-heading text-primary shrink-0 w-16">
                        ₹{tier.amount.toLocaleString("en-IN")}
                      </span>
                      <span className="text-text-muted text-sm">{tier.impact}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-bg-off-white border border-border-light rounded-[var(--radius-md)] p-6 shadow-soft">
                <h3 className="font-bold font-heading text-lg mb-3 flex items-center gap-2">
                  <ShieldCheck size={20} className="text-accent-green" /> Our Promise
                </h3>
                <ul className="space-y-2">
                  {[
                    "100% of donations go to programs",
                    "80G tax exemption certificate via email",
                    "Transparent spending reports published annually",
                    "Secure, encrypted payment via Razorpay",
                    "FCRA compliant for international donations",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-text-muted text-sm">
                      <CheckCircle size={16} className="text-accent-green shrink-0 mt-0.5" />
                      <span>{item}</span>
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

"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";

const AMOUNTS = [1000, 2500, 5000];

export function DonationWidget() {
  const [frequency, setFrequency] = useState<"monthly" | "one-time">("monthly");
  const [selectedAmount, setSelectedAmount] = useState<number | null>(2500);
  const [customAmount, setCustomAmount] = useState("");

  const activeAmount = customAmount ? parseInt(customAmount) : selectedAmount;
  const taxExemptAmount = activeAmount ? Math.floor(activeAmount * 0.5) : 0;

  return (
    <div className="bg-surface border border-border-light rounded-2xl p-6 sm:p-8 shadow-soft sticky top-24">
      {/* Toggle */}
      <div className="flex p-1 bg-bg-off-white rounded-lg mb-8 border border-border-light/60">
        <button
          onClick={() => setFrequency("monthly")}
          className={`flex-1 py-3 text-sm font-bold uppercase tracking-wider rounded-md transition-all ${
            frequency === "monthly"
              ? "bg-primary text-white shadow-sm"
              : "text-text-muted hover:text-text-dark"
          }`}
        >
          Monthly
        </button>
        <button
          onClick={() => setFrequency("one-time")}
          className={`flex-1 py-3 text-sm font-bold uppercase tracking-wider rounded-md transition-all ${
            frequency === "one-time"
              ? "bg-primary text-white shadow-sm"
              : "text-text-muted hover:text-text-dark"
          }`}
        >
          One-Time
        </button>
      </div>

      {/* Amount Grid */}
      <div className="grid grid-cols-3 gap-3 mb-4">
        {AMOUNTS.map((amount) => (
          <button
            key={amount}
            onClick={() => {
              setSelectedAmount(amount);
              setCustomAmount("");
            }}
            className={`py-4 px-2 rounded-xl border-2 font-bold font-heading transition-all ${
              selectedAmount === amount && !customAmount
                ? "border-primary bg-primary/5 text-primary"
                : "border-border-light/60 bg-neutral-50 text-text-dark hover:border-primary/50"
            }`}
          >
            <div className="text-lg">₹{amount.toLocaleString("en-IN")}</div>
          </button>
        ))}
      </div>

      {/* Custom Amount */}
      <div className="mb-6">
        <div className="relative">
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted text-xl font-bold">₹</span>
          <input
            type="number"
            placeholder="Custom Amount"
            value={customAmount}
            onChange={(e) => {
              setCustomAmount(e.target.value);
              setSelectedAmount(null);
            }}
            className="w-full pl-10 pr-4 py-4 bg-neutral-50 rounded-xl border border-border-light/60 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 text-lg font-bold transition-all"
          />
        </div>
      </div>

      {/* Tax Nudge */}
      {activeAmount !== null && activeAmount > 0 && (
        <div className="bg-accent-green/10 border border-accent-green/20 rounded-lg p-3 text-center mb-8">
          <p className="text-sm font-medium text-text-dark">
            Your donation of <span className="font-bold">₹{activeAmount.toLocaleString("en-IN")}</span> qualifies for <span className="font-bold text-accent-green">50% tax exemption</span> under Section 80G.
          </p>
        </div>
      )}

      {/* Input Fields */}
      <div className="space-y-4 mb-8">
        <input type="text" placeholder="Full Name *" required className="w-full px-4 py-3 bg-neutral-50 rounded-lg border border-border-light/60 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 font-medium text-sm" />
        <input type="email" placeholder="Email Address *" required className="w-full px-4 py-3 bg-neutral-50 rounded-lg border border-border-light/60 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 font-medium text-sm" />
        <input type="tel" placeholder="Mobile Number *" required className="w-full px-4 py-3 bg-neutral-50 rounded-lg border border-border-light/60 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 font-medium text-sm" />
        <div>
          <input type="text" placeholder="PAN Number *" required className="w-full px-4 py-3 bg-neutral-50 rounded-lg border border-border-light/60 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 font-medium text-sm uppercase" />
          <p className="text-[10px] text-text-muted mt-1.5 uppercase font-bold tracking-wider">Required for 80G Tax Receipt</p>
        </div>
      </div>

      {/* CTA Button */}
      <Button variant="primary" className="w-full py-6 text-lg font-bold uppercase tracking-widest shadow-glow hover:-translate-y-0.5 transition-all">
        Donate {activeAmount ? `₹${activeAmount.toLocaleString("en-IN")}` : "Now"}
      </Button>
    </div>
  );
}

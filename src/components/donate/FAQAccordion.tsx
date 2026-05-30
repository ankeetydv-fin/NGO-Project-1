"use client";

import { useState } from "react";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "How does the 80G tax exemption work?",
    answer: "Contributions made to our organization are eligible for tax deduction under Section 80G of the Income Tax Act, 1961. You can claim a deduction of 50% of the donated amount when you file your income tax return."
  },
  {
    question: "How and when will I receive my tax receipt?",
    answer: "Your 80G tax receipt is generated automatically and emailed to the email address provided during the donation process immediately after your payment is successfully processed."
  },
  {
    question: "Is my payment secure?",
    answer: "Yes, 100%. We use industry-standard encryption and partner with trusted payment gateways like Razorpay. We do not store your credit card or bank details on our servers."
  },
  {
    question: "Can I donate anonymously and still claim tax benefits?",
    answer: "No. To comply with government regulations and issue a valid 80G tax receipt, we must collect your Full Name, Email, Address, and PAN Card number. Without a PAN, we cannot provide tax exemption."
  }
];

export function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <Section spacing="lg" background="default">
      <Container size="md">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold font-heading text-text-dark mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-text-muted">
            Everything you need to know about your donation and tax benefits.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div 
                key={idx} 
                className={`bg-surface border rounded-xl overflow-hidden transition-all ${
                  isOpen ? "border-primary/30 shadow-sm" : "border-border-light/60"
                }`}
              >
                <button
                  className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none"
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                >
                  <span className="font-bold text-text-dark pr-4">{faq.question}</span>
                  <ChevronDown className={`shrink-0 text-text-muted transition-transform ${isOpen ? "rotate-180 text-primary" : ""}`} size={20} />
                </button>
                
                {isOpen && (
                  <div className="px-6 pb-5 pt-1 text-text-muted text-sm leading-relaxed border-t border-border-light/30">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}

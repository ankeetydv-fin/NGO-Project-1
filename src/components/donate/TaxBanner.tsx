import { ShieldCheck, Receipt, Lock } from "lucide-react";

export function TaxBanner() {
  return (
    <section className="bg-primary text-white py-12 border-y border-primary/90">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <div className="flex flex-col items-center md:items-start gap-3">
            <Lock className="w-8 h-8 text-white/90" />
            <h4 className="font-bold text-lg font-heading">100% Secure Payments</h4>
            <p className="text-white/80 text-sm leading-relaxed">
              All transactions are encrypted and processed securely. We never store your card details.
            </p>
          </div>
          <div className="flex flex-col items-center md:items-start gap-3">
            <ShieldCheck className="w-8 h-8 text-white/90" />
            <h4 className="font-bold text-lg font-heading">Section 80G Registered</h4>
            <p className="text-white/80 text-sm leading-relaxed">
              Officially recognized by the Income Tax Department of India for charitable tax exemptions.
            </p>
          </div>
          <div className="flex flex-col items-center md:items-start gap-3">
            <Receipt className="w-8 h-8 text-white/90" />
            <h4 className="font-bold text-lg font-heading">Instant Tax Receipts</h4>
            <p className="text-white/80 text-sm leading-relaxed">
              Your 80G tax receipt is generated automatically and emailed to you immediately after donation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

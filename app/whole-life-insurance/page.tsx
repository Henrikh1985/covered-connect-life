import { ShieldCheck, DollarSign, CheckCircle, AlertTriangle, Lock } from "lucide-react";
import Link from "next/link";
import PageLayout from "../components/PageLayout";

export const metadata = {
  title: "Whole Life Insurance Guide | Costs, Benefits & How It Works | Covered Connect",
  description:
    "Understand whole life insurance — how it works, what it costs, cash value growth, and who it's best for. Compare whole life vs term and get a free quote.",
  alternates: { canonical: "/whole-life-insurance" },
};

const faqs = [
  {
    q: "How does whole life insurance work?",
    a: "Whole life insurance provides a guaranteed death benefit that never expires, as long as premiums are paid. A portion of each premium goes toward a cash value account that grows at a guaranteed rate. You can borrow against the cash value or surrender the policy for its accumulated value.",
  },
  {
    q: "How much does whole life insurance cost?",
    a: "Whole life premiums are typically 5–15 times higher than term life for the same death benefit. A healthy 35-year-old might pay $250–$400/month for a $500,000 whole life policy, compared to $25–$35/month for a 20-year term policy with the same coverage amount.",
  },
  {
    q: "Is whole life insurance a good investment?",
    a: "Whole life insurance is primarily a protection tool, not an investment vehicle. The cash value grows at a guaranteed but modest rate (typically 1–3%). For most people, buying term life and investing the premium difference yields better long-term returns. However, whole life offers tax advantages and guaranteed growth that some financial plans benefit from.",
  },
  {
    q: "Can I cash out my whole life insurance policy?",
    a: "Yes. You can surrender your policy for its cash value at any time, though early surrender may incur fees and you'll lose the death benefit. You can also take loans against the cash value without surrendering — the loan accrues interest, and unpaid loans reduce the death benefit.",
  },
  {
    q: "Who should buy whole life insurance?",
    a: "Whole life is best suited for people with lifelong dependents (such as a disabled child), estate planning needs, business succession planning, or those who have maxed out other tax-advantaged accounts and want guaranteed, tax-deferred growth. For most families with temporary needs, term life is more cost-effective.",
  },
  {
    q: "What's the difference between whole life and universal life?",
    a: "Both are permanent policies, but whole life has fixed premiums and guaranteed cash value growth, while universal life offers flexible premiums and death benefits with variable returns. Whole life is simpler and more predictable; universal life offers more control but requires active management.",
  },
];

const cashValueExample = [
  { year: "5", paid: "$18,000", cashValue: "$8,500", benefit: "$500,000" },
  { year: "10", paid: "$36,000", cashValue: "$24,000", benefit: "$500,000" },
  { year: "15", paid: "$54,000", cashValue: "$46,000", benefit: "$500,000" },
  { year: "20", paid: "$72,000", cashValue: "$74,000", benefit: "$500,000" },
  { year: "30", paid: "$108,000", cashValue: "$145,000", benefit: "$500,000" },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.a,
    },
  })),
};

export default function WholeLifeInsurancePage() {
  return (
    <PageLayout
      title="Whole Life Insurance"
      subtitle="Permanent coverage that never expires — with a guaranteed death benefit and cash value that grows over time."
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="grid gap-8">

        <div className="rounded-2xl p-8 border border-white/10 bg-white/5">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <ShieldCheck className="h-5 w-5 text-cyan-400" />
            What Is Whole Life Insurance?
          </h2>
          <p className="text-slate-300 leading-7 mb-4">
            <strong className="text-white">Whole life insurance</strong> is a type of permanent life insurance that provides coverage for your entire lifetime, as long as premiums are paid. Unlike{" "}
            <Link href="/term-life-insurance" className="text-cyan-400 hover:text-cyan-300 underline">term life insurance</Link>, which expires after a set period, whole life is designed to last forever.
          </p>
          <p className="text-slate-300 leading-7 mb-4">
            Every whole life policy has two components: a <strong className="text-white">guaranteed death benefit</strong> paid to your beneficiaries when you pass away, and a <strong className="text-white">cash value account</strong> that grows at a guaranteed rate over time. You can borrow against the cash value during your lifetime or surrender the policy for its accumulated value.
          </p>
          <p className="text-slate-300 leading-7">
            Whole life premiums are fixed — they never increase regardless of age or health changes. This predictability is one of its core advantages, though it comes at a significantly higher cost than term life for the same death benefit.
          </p>
        </div>

        <div className="rounded-2xl p-8 border border-white/10 bg-white/5">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <CheckCircle className="h-5 w-5 text-cyan-400" />
            Who Whole Life Insurance Is Best For
          </h2>
          <ul className="space-y-4">
            {[
              ["Estate planning and wealth transfer", "Provides a tax-free death benefit to heirs regardless of when you pass. Commonly used to cover estate taxes or leave a guaranteed inheritance."],
              ["Lifelong dependents", "If you have a child with special needs or a dependent who will never be self-supporting, whole life ensures coverage never expires."],
              ["Business succession planning", "Funds buy-sell agreements, key person coverage, or executive benefits that need to remain in force indefinitely."],
              ["Supplemental tax-advantaged savings", "Cash value grows tax-deferred, and policy loans are tax-free. Useful if you've maxed out 401(k) and IRA contributions."],
              ["People who want guaranteed, predictable coverage", "Fixed premiums, guaranteed death benefit, and guaranteed cash value growth — no market risk or rate changes."],
            ].map(([title, desc]) => (
              <li key={title} className="flex gap-4">
                <span className="mt-1 shrink-0 w-5 h-5 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center text-xs">✓</span>
                <div>
                  <p className="font-semibold text-white">{title}</p>
                  <p className="text-slate-400 text-sm mt-0.5">{desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-2xl p-8 border border-white/10 bg-white/5">
          <h2 className="text-xl font-semibold mb-2 flex items-center gap-2">
            <Lock className="h-5 w-5 text-cyan-400" />
            How Cash Value Works
          </h2>
          <p className="text-slate-400 text-sm mb-6">
            Illustrative example — $500,000 whole life policy, $300/month premium, issued at age 35.
          </p>
          <div className="overflow-x-auto rounded-xl border border-white/10">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-white/10 text-slate-200">
                  <th className="text-left px-5 py-3 font-semibold">Year</th>
                  <th className="text-left px-5 py-3 font-semibold">Total Paid</th>
                  <th className="text-left px-5 py-3 font-semibold">Cash Value</th>
                  <th className="text-left px-5 py-3 font-semibold">Death Benefit</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {cashValueExample.map((row) => (
                  <tr key={row.year} className="hover:bg-white/5 transition-colors">
                    <td className="px-5 py-3 font-medium text-white">{row.year}</td>
                    <td className="px-5 py-3 text-slate-300">{row.paid}</td>
                    <td className="px-5 py-3 text-slate-300">{row.cashValue}</td>
                    <td className="px-5 py-3 text-slate-300">{row.benefit}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mt-3">
            Illustrative example only. Actual values vary by insurer, age at issue, health, and policy terms.
          </p>
        </div>

        <div className="rounded-2xl p-8 border border-white/10 bg-white/5">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <DollarSign className="h-5 w-5 text-cyan-400" />
            Whole Life vs Term Life — Key Differences
          </h2>
          <div className="overflow-x-auto rounded-xl border border-white/10">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-white/10 text-slate-200">
                  <th className="text-left px-5 py-3 font-semibold">Feature</th>
                  <th className="text-left px-5 py-3 font-semibold">Whole Life</th>
                  <th className="text-left px-5 py-3 font-semibold">Term Life</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 text-slate-300">
                <tr><td className="px-5 py-3 font-medium text-white">Duration</td><td className="px-5 py-3">Lifetime</td><td className="px-5 py-3">10, 20, or 30 years</td></tr>
                <tr><td className="px-5 py-3 font-medium text-white">Monthly cost (age 35, $500K)</td><td className="px-5 py-3">$250–$400</td><td className="px-5 py-3">$22–$38</td></tr>
                <tr><td className="px-5 py-3 font-medium text-white">Cash value</td><td className="px-5 py-3">Yes — guaranteed growth</td><td className="px-5 py-3">No</td></tr>
                <tr><td className="px-5 py-3 font-medium text-white">Premiums</td><td className="px-5 py-3">Fixed for life</td><td className="px-5 py-3">Fixed during term</td></tr>
                <tr><td className="px-5 py-3 font-medium text-white">Best for</td><td className="px-5 py-3">Estate planning, lifelong needs</td><td className="px-5 py-3">Income replacement, mortgage</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-slate-400 text-sm mt-4">
            Need a deeper comparison?{" "}
            <Link href="/term-vs-whole-life-insurance" className="text-cyan-400 hover:text-cyan-300 underline">
              Read our full term vs. whole life guide
            </Link>.
          </p>
        </div>

        <div className="rounded-2xl p-8 border border-white/10 bg-white/5">
          <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
            <AlertTriangle className="h-5 w-5 text-amber-400" />
            Common Mistakes When Buying Whole Life
          </h2>
          <ul className="space-y-5">
            {[
              { title: "Buying whole life when term would suffice", body: "If your coverage need is temporary (mortgage, children's college years), term life delivers the same death benefit at a fraction of the cost." },
              { title: "Treating it primarily as an investment", body: "Cash value growth is guaranteed but modest (1–3%). For pure investment returns, a term policy plus index fund investing typically outperforms whole life." },
              { title: "Surrendering too early", body: "Cash value is low in the first 5–10 years due to high initial fees. Surrendering early means losing a significant portion of what you've paid." },
              { title: "Not comparing between insurers", body: "Whole life premiums and dividend rates vary significantly between companies. Always compare at least 3–4 quotes before committing." },
            ].map((item) => (
              <li key={item.title} className="flex gap-4">
                <span className="mt-1 shrink-0 w-5 h-5 rounded-full bg-red-500/20 text-red-400 flex items-center justify-center text-xs font-bold">✕</span>
                <div>
                  <p className="font-semibold text-white">{item.title}</p>
                  <p className="text-slate-400 text-sm mt-0.5">{item.body}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-2xl p-8 border border-white/10 bg-white/5">
          <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
            <CheckCircle className="h-5 w-5 text-cyan-400" />
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {faqs.map((faq) => (
              <div key={faq.q} className="border-b border-white/10 pb-6 last:border-0 last:pb-0">
                <h3 className="font-semibold text-white mb-2">{faq.q}</h3>
                <p className="text-slate-300 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-2xl p-8 border border-cyan-500/20 bg-cyan-500/5 text-center">
          <h2 className="text-xl font-semibold mb-3">Compare Whole Life Insurance Options</h2>
          <p className="text-slate-300 mb-6 max-w-lg mx-auto">
            See how whole life fits your long-term goals. Use our calculator or get a personalized quote. Also see our guide on{" "}
            <Link href="/how-much-life-insurance-do-i-need" className="text-cyan-400 hover:text-cyan-300 underline">
              how much coverage you need
            </Link>.
          </p>
          <Link
            href="/get-a-quote"
            className="inline-block bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-bold px-8 py-3 rounded-full transition-colors"
          >
            Get a Free Quote
          </Link>
        </div>

      </div>
    </PageLayout>
  );
}

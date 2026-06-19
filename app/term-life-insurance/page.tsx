import { ShieldCheck, Clock, DollarSign, CheckCircle, AlertTriangle } from "lucide-react";
import Link from "next/link";
import PageLayout from "../components/PageLayout";

export const metadata = {
  title: "Term Life Insurance Guide | Costs, Coverage & Comparison | Covered Connect",
  description:
    "Learn how term life insurance works, what it costs by age, who it's best for, and how it compares to whole life. Get a free quote and find affordable coverage for your family.",
  alternates: { canonical: "/term-life-insurance" },
};

const faqs = [
  {
    q: "What is term life insurance?",
    a: "Term life insurance provides a death benefit to your beneficiaries if you pass away during a specific period — typically 10, 20, or 30 years. If the term ends and you're still living, the coverage expires with no payout. It's the most straightforward and affordable type of life insurance.",
  },
  {
    q: "How much does term life insurance cost?",
    a: "For a healthy 30-year-old non-smoker, a $500,000 20-year term policy typically costs $20–$35 per month. At age 40, expect $35–$55/month, and at 50, roughly $80–$130/month. Rates depend on age, health, gender, coverage amount, and term length.",
  },
  {
    q: "What happens when my term life insurance expires?",
    a: "When your term ends, coverage stops and no death benefit is paid. Some policies offer a renewal option at a higher rate, and many include a conversion clause that lets you switch to a permanent policy without a new medical exam — often within the first 10–15 years.",
  },
  {
    q: "Is term life insurance better than whole life?",
    a: "For most families, term life offers the most coverage per dollar. It's designed for temporary needs like mortgage protection, income replacement, and child-rearing years. Whole life is better suited for estate planning or lifelong dependents, but costs 5–15 times more for the same death benefit.",
  },
  {
    q: "Can I get term life insurance without a medical exam?",
    a: "Yes. Many insurers offer no-exam term policies with simplified underwriting. Approval is faster — sometimes within days — but premiums tend to be higher and coverage limits lower. If you're in good health, a fully underwritten policy usually gets you a better rate.",
  },
  {
    q: "How much term life insurance do I need?",
    a: "A common starting point is 10–12 times your annual income, plus outstanding debts, mortgage balance, and future expenses like college. Our coverage calculator can help you estimate a more personalized amount based on your specific situation.",
  },
];

const rateTable = [
  { age: "25", male: "$15–$22/mo", female: "$12–$18/mo" },
  { age: "30", male: "$18–$28/mo", female: "$15–$23/mo" },
  { age: "35", male: "$22–$38/mo", female: "$18–$30/mo" },
  { age: "40", male: "$35–$55/mo", female: "$28–$42/mo" },
  { age: "45", male: "$55–$85/mo", female: "$44–$65/mo" },
  { age: "50", male: "$90–$135/mo", female: "$70–$105/mo" },
];

const termLengths = [
  {
    title: "10-Year Term",
    best: "Short-term debts, near-retirement coverage gaps",
    description:
      "The lowest premiums of any term length. Ideal if your kids are nearly grown, your mortgage is almost paid off, or you need coverage to bridge a specific financial gap.",
  },
  {
    title: "20-Year Term",
    best: "Most popular — families with young children or a new mortgage",
    description:
      "Balances affordability with long enough protection to cover your highest-responsibility years. The most commonly purchased term length in the U.S.",
  },
  {
    title: "30-Year Term",
    best: "Young families who want the longest lock-in period",
    description:
      "Locks in today's rate for three decades. Costs more than a 20-year term but protects against rate increases as you age. Best purchased in your 20s or early 30s.",
  },
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

export default function TermLifeInsurancePage() {
  return (
    <PageLayout
      title="Term Life Insurance"
      subtitle="Affordable coverage for a set period of time — the most popular way to protect your family's income, mortgage, and financial future."
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="grid gap-8">

        <div className="rounded-2xl p-8 border border-white/10 bg-white/5">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <ShieldCheck className="h-5 w-5 text-cyan-400" />
            What Is Term Life Insurance?
          </h2>
          <p className="text-slate-300 leading-7 mb-4">
            <strong className="text-white">Term life insurance</strong> provides a death benefit to your beneficiaries if you pass away during a specific coverage period — typically 10, 20, or 30 years. Unlike whole life insurance, it does not build cash value, which is why premiums are significantly lower.
          </p>
          <p className="text-slate-300 leading-7 mb-4">
            Term life is the most purchased type of life insurance in the United States, and for good reason: it delivers the most coverage per dollar. For a healthy 30-year-old, a $500,000 policy can cost less than $25/month — a fraction of what whole life would cost for the same death benefit.
          </p>
          <p className="text-slate-300 leading-7">
            Not sure which type is right for you? See our{" "}
            <Link href="/term-vs-whole-life-insurance" className="text-cyan-400 hover:text-cyan-300 underline">
              term vs. whole life comparison
            </Link>{" "}
            or use our{" "}
            <Link href="/#calculator" className="text-cyan-400 hover:text-cyan-300 underline">
              free coverage calculator
            </Link>{" "}
            to estimate your needs.
          </p>
        </div>

        <div className="rounded-2xl p-8 border border-white/10 bg-white/5">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <CheckCircle className="h-5 w-5 text-cyan-400" />
            Who Term Life Insurance Is Best For
          </h2>
          <ul className="space-y-4">
            {[
              ["Parents with children or dependents", "Covers income replacement during the years your family depends on your earnings most."],
              ["Homeowners with a mortgage", "Ensures your family can keep the home if something happens to you. Match your term length to your mortgage."],
              ["Primary income earners", "Replaces lost income so your spouse or partner can maintain the household's standard of living."],
              ["People on a budget", "Term life offers 5–15x more coverage per dollar than whole life, making it accessible for most families."],
              ["Business owners with debts or partners", "Covers business loans, buy-sell agreements, or key person protection during critical growth years."],
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
            <DollarSign className="h-5 w-5 text-cyan-400" />
            How Much Does Term Life Insurance Cost?
          </h2>
          <p className="text-slate-400 text-sm mb-6">
            Estimated monthly premiums for a healthy non-smoker — $500,000, 20-year term policy.
          </p>
          <div className="overflow-x-auto rounded-xl border border-white/10">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-white/10 text-slate-200">
                  <th className="text-left px-5 py-3 font-semibold">Age</th>
                  <th className="text-left px-5 py-3 font-semibold">Male (est.)</th>
                  <th className="text-left px-5 py-3 font-semibold">Female (est.)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {rateTable.map((row) => (
                  <tr key={row.age} className="hover:bg-white/5 transition-colors">
                    <td className="px-5 py-3 font-medium text-white">{row.age}</td>
                    <td className="px-5 py-3 text-slate-300">{row.male}</td>
                    <td className="px-5 py-3 text-slate-300">{row.female}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mt-3">
            Estimates for illustrative purposes. Actual rates depend on health, insurer, and coverage term. Over 40?{" "}
            <Link href="/life-insurance-for-people-over-40" className="text-cyan-400 hover:text-cyan-300 underline">
              See our over-40 rate guide
            </Link>.
          </p>
        </div>

        <div className="rounded-2xl p-8 border border-white/10 bg-white/5">
          <h2 className="text-xl font-semibold mb-2 flex items-center gap-2">
            <Clock className="h-5 w-5 text-cyan-400" />
            Choosing the Right Term Length
          </h2>
          <p className="text-slate-400 text-sm mb-6">
            The right term depends on how long your financial obligations will last.
          </p>
          <div className="grid gap-4">
            {termLengths.map((opt) => (
              <div key={opt.title} className="rounded-xl border border-white/10 bg-white/5 p-5">
                <h3 className="font-semibold text-white mb-1">{opt.title}</h3>
                <p className="text-xs text-cyan-400 font-medium uppercase tracking-wide mb-2">{opt.best}</p>
                <p className="text-slate-300 text-sm leading-relaxed">{opt.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-2xl p-8 border border-white/10 bg-white/5">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <AlertTriangle className="h-5 w-5 text-amber-400" />
            Term Life vs Whole Life — Key Differences
          </h2>
          <div className="overflow-x-auto rounded-xl border border-white/10">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-white/10 text-slate-200">
                  <th className="text-left px-5 py-3 font-semibold">Feature</th>
                  <th className="text-left px-5 py-3 font-semibold">Term Life</th>
                  <th className="text-left px-5 py-3 font-semibold">Whole Life</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 text-slate-300">
                <tr><td className="px-5 py-3 font-medium text-white">Duration</td><td className="px-5 py-3">10, 20, or 30 years</td><td className="px-5 py-3">Lifetime</td></tr>
                <tr><td className="px-5 py-3 font-medium text-white">Monthly cost</td><td className="px-5 py-3">$20–$60</td><td className="px-5 py-3">$150–$500+</td></tr>
                <tr><td className="px-5 py-3 font-medium text-white">Cash value</td><td className="px-5 py-3">No</td><td className="px-5 py-3">Yes, grows over time</td></tr>
                <tr><td className="px-5 py-3 font-medium text-white">Best for</td><td className="px-5 py-3">Income replacement, mortgage</td><td className="px-5 py-3">Estate planning, legacy</td></tr>
                <tr><td className="px-5 py-3 font-medium text-white">Premiums</td><td className="px-5 py-3">Fixed during term</td><td className="px-5 py-3">Fixed for life</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-slate-400 text-sm mt-4">
            Want a deeper comparison?{" "}
            <Link href="/term-vs-whole-life-insurance" className="text-cyan-400 hover:text-cyan-300 underline">
              Read our full term vs. whole life guide
            </Link>.
          </p>
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
          <h2 className="text-xl font-semibold mb-3">Get a Free Term Life Insurance Quote</h2>
          <p className="text-slate-300 mb-6 max-w-lg mx-auto">
            Use our calculator to estimate your coverage needs and compare term life options for your family and budget.
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

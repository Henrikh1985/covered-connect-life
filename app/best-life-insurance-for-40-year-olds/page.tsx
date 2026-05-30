import { ShieldCheck, DollarSign, Clock, AlertTriangle, CheckCircle } from "lucide-react";
import Link from "next/link";
import PageLayout from "../components/PageLayout";

export const metadata = {
  title: "Best Life Insurance for 40-Year-Olds | Rates & Options | Covered Connect",
  description:
    "Find the best life insurance for 40-year-olds. Compare term vs whole life rates, see what coverage costs at 40, and get a free personalized estimate.",
  alternates: { canonical: "/best-life-insurance-for-40-year-olds" },
};

const faqs = [
  {
    q: "What is the best life insurance for a 40-year-old?",
    a: "For most 40-year-olds, a 20-year term life policy is the best option. It provides strong coverage at a relatively low monthly cost, locking in your rate while your family still has a mortgage and dependents at home. If you want lifetime coverage, whole life is worth comparing — but it costs significantly more.",
  },
  {
    q: "How much does life insurance cost at 40?",
    a: "A healthy 40-year-old non-smoker can typically get a $500,000 20-year term policy for $30–$50 per month. Women generally pay slightly less than men. Smokers and those with certain health conditions will pay more. Rates rise each year you wait.",
  },
  {
    q: "How much life insurance does a 40-year-old need?",
    a: "A common starting point is 10–12 times your annual income, plus any outstanding mortgage balance and future education costs for children. For example, someone earning $80,000/year with a $300,000 mortgage and two kids might target $1–1.2 million in coverage.",
  },
  {
    q: "Is 40 too old to get life insurance?",
    a: "Not at all. Most healthy 40-year-olds qualify for standard or preferred rates. Waiting until your 50s will cost significantly more for the same coverage, so your 40s are actually one of the best times to lock in a policy.",
  },
  {
    q: "Should I get a 20-year or 30-year term at 40?",
    a: "A 20-year term covers you through age 60, which is when most mortgages are paid and children are grown. A 30-year term extends to age 70 and costs more monthly, but may make sense if you have young children or a long mortgage. Compare both options before deciding.",
  },
  {
    q: "Can I get life insurance at 40 without a medical exam?",
    a: "Yes. Many insurers offer no-exam or simplified issue policies for 40-year-olds. These are faster to get approved but usually cost more and offer lower coverage limits than fully underwritten policies. If you are in good health, a traditional policy will likely save you money.",
  },
];

const rateTable = [
  { coverage: "$250,000", term: "20-year", male: "$18–$26/mo", female: "$15–$22/mo" },
  { coverage: "$500,000", term: "20-year", male: "$30–$50/mo", female: "$24–$40/mo" },
  { coverage: "$1,000,000", term: "20-year", male: "$55–$85/mo", female: "$44–$68/mo" },
  { coverage: "$500,000", term: "30-year", male: "$55–$80/mo", female: "$44–$64/mo" },
  { coverage: "$1,000,000", term: "30-year", male: "$105–$155/mo", female: "$82–$122/mo" },
];

const policyOptions = [
  {
    title: "20-Year Term Life",
    best: "Best for most 40-year-olds with a mortgage and dependents",
    description:
      "Locks in today's rates for 20 years — covering your family through your highest-responsibility period. The most affordable way to get significant coverage in your 40s.",
  },
  {
    title: "30-Year Term Life",
    best: "Best if you have young children or a long mortgage",
    description:
      "Provides coverage through age 70. Costs more monthly than a 20-year term but gives you longer peace of mind, especially if you started a family later.",
  },
  {
    title: "Whole Life Insurance",
    best: "Best for estate planning or lifelong coverage needs",
    description:
      "Coverage that never expires, with premiums that never increase. Significantly more expensive than term life but may fit people who want permanent protection or a cash value component.",
  },
  {
    title: "No-Exam / Simplified Issue",
    best: "Best for speed or if you have health concerns",
    description:
      "Get approved in days without a medical exam. Coverage limits are lower and premiums are higher, but it is accessible even if traditional underwriting is a concern.",
  },
];

const mistakes = [
  {
    title: "Waiting until your 50s",
    body: "Every year you delay, premiums rise — often 5–8% per year. A policy you can lock in at 40 for $35/month could cost $70/month at 48 for identical coverage.",
  },
  {
    title: "Buying too little coverage",
    body: "$250,000 sounds like a lot until you factor in a mortgage, 15 years of income replacement, and kids' college costs. Most financial planners suggest 10x your income as a starting point.",
  },
  {
    title: "Assuming health problems disqualify you",
    body: "Conditions like controlled blood pressure, managed diabetes, or mild cholesterol issues are often insurable. Get a quote before assuming you can't qualify.",
  },
  {
    title: "Picking the cheapest policy without reading the terms",
    body: "Some low-cost policies have graded benefits, rate increases after a period, or exclusions. Compare the full terms, not just the monthly premium.",
  },
  {
    title: "Forgetting to update beneficiaries",
    body: "Your policy is only as good as who it pays out to. If it still names an ex-spouse or a deceased parent, update it today.",
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

export default function BestLifeInsurance40() {
  return (
    <PageLayout
      title="Best Life Insurance for 40-Year-Olds"
      subtitle="Your 40s are the best time to lock in coverage. Here is what to look for, what it costs, and how to choose the right policy."
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="grid gap-8">

        <div className="rounded-2xl p-8 border border-white/10 bg-white/5">
          <p className="text-slate-300 leading-7 mb-4">
            Finding the <strong className="text-white">best life insurance for a 40-year-old</strong> comes down to one core question: how long do you need coverage, and how much? For most people at 40, a 20-year term policy at $500,000 or more is the right starting point — strong protection at a cost that still makes sense.
          </p>
          <p className="text-slate-300 leading-7">
            This guide covers real rates, policy options, how much coverage to target, and what most 40-year-olds get wrong. Use the{" "}
            <Link href="/#calculator" className="text-cyan-400 hover:text-cyan-300 underline">
              free coverage calculator
            </Link>{" "}
            to estimate your specific number, or{" "}
            <Link href="/get-a-quote" className="text-cyan-400 hover:text-cyan-300 underline">
              get a personalized quote
            </Link>{" "}
            in minutes.
          </p>
        </div>

        <div className="rounded-2xl p-8 border border-white/10 bg-white/5">
          <h2 className="text-xl font-semibold mb-2 flex items-center gap-2">
            <DollarSign className="h-5 w-5 text-cyan-400" />
            Life Insurance Rates at Age 40
          </h2>
          <p className="text-slate-400 text-sm mb-6">
            Estimated monthly premiums for a healthy non-smoker at age 40.
          </p>
          <div className="overflow-x-auto rounded-xl border border-white/10">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-white/10 text-slate-200">
                  <th className="text-left px-5 py-3 font-semibold">Coverage</th>
                  <th className="text-left px-5 py-3 font-semibold">Term</th>
                  <th className="text-left px-5 py-3 font-semibold">Male (est.)</th>
                  <th className="text-left px-5 py-3 font-semibold">Female (est.)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {rateTable.map((row, i) => (
                  <tr key={i} className="hover:bg-white/5 transition-colors">
                    <td className="px-5 py-3 font-medium text-white">{row.coverage}</td>
                    <td className="px-5 py-3 text-slate-300">{row.term}</td>
                    <td className="px-5 py-3 text-slate-300">{row.male}</td>
                    <td className="px-5 py-3 text-slate-300">{row.female}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mt-3">
            Estimates for illustrative purposes. Actual rates depend on health, insurer, and state. Rates rise roughly 5–8% for each year you wait.
          </p>
        </div>

        <div className="rounded-2xl p-8 border border-white/10 bg-white/5">
          <h2 className="text-xl font-semibold mb-2 flex items-center gap-2">
            <ShieldCheck className="h-5 w-5 text-cyan-400" />
            How Much Life Insurance Do You Need at 40?
          </h2>
          <p className="text-slate-300 leading-7 mb-4">
            A common rule of thumb is <strong className="text-white">10–12 times your annual income</strong>, plus any outstanding debts. But a more precise estimate accounts for:
          </p>
          <ul className="space-y-2 text-slate-300">
            {[
              "Your income multiplied by the years your family would need support",
              "Remaining mortgage balance",
              "Children's education and childcare costs",
              "Other debts — car loans, personal loans, credit cards",
              "Minus savings and any existing coverage",
            ].map((item) => (
              <li key={item} className="flex gap-3">
                <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-cyan-400" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-slate-400 text-sm mt-5">
            Use the{" "}
            <Link href="/#calculator" className="text-cyan-400 hover:text-cyan-300 underline">
              coverage calculator
            </Link>{" "}
            to get a number based on your actual income, debt, and family situation.
          </p>
        </div>

        <div className="rounded-2xl p-8 border border-white/10 bg-white/5">
          <h2 className="text-xl font-semibold mb-2 flex items-center gap-2">
            <Clock className="h-5 w-5 text-cyan-400" />
            Which Policy Type Is Best at 40?
          </h2>
          <p className="text-slate-400 text-sm mb-6">
            The right policy depends on why you need coverage and for how long. See the full{" "}
            <Link href="/term-vs-whole-life-insurance" className="text-cyan-400 hover:text-cyan-300 underline">
              term vs whole life comparison
            </Link>.
          </p>
          <div className="grid gap-4">
            {policyOptions.map((opt) => (
              <div key={opt.title} className="rounded-xl border border-white/10 bg-white/5 p-5">
                <h3 className="font-semibold text-white mb-1">{opt.title}</h3>
                <p className="text-xs text-cyan-400 font-medium uppercase tracking-wide mb-2">{opt.best}</p>
                <p className="text-slate-300 text-sm leading-relaxed">{opt.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-2xl p-8 border border-white/10 bg-white/5">
          <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
            <AlertTriangle className="h-5 w-5 text-amber-400" />
            5 Mistakes 40-Year-Olds Make With Life Insurance
          </h2>
          <ul className="space-y-5">
            {mistakes.map((item) => (
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
          <h2 className="text-xl font-semibold mb-3">Get Your Personalized Estimate</h2>
          <p className="text-slate-300 mb-6 max-w-lg mx-auto">
            See what coverage costs for your age, health, and family situation. Takes under a minute. Also see{" "}
            <Link href="/life-insurance-for-people-over-40" className="text-cyan-400 hover:text-cyan-300 underline">
              life insurance options for people over 40
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

import { ShieldCheck, Clock, DollarSign, AlertTriangle, CheckCircle } from "lucide-react";
import Link from "next/link";
import PageLayout from "../components/PageLayout";

export const metadata = {
  title: "Life Insurance for People Over 40 | Rates, Options & Tips | Covered Connect",
  description:
    "Looking for life insurance after 40? Compare term and whole life options, understand how age affects your rates, and find the right coverage for your stage of life.",
  alternates: {
    canonical: "/life-insurance-for-people-over-40",
  },
};

const faqs = [
  {
    q: "Is it too late to get life insurance at 40, 50, or 55?",
    a: "Not at all. Most insurers offer term and permanent policies up to age 70 or beyond. The key is acting sooner rather than later — each year you wait, premiums rise and health conditions become more relevant.",
  },
  {
    q: "What is the best type of life insurance for someone over 40?",
    a: "Term life is usually the most affordable if you have specific coverage needs like protecting a mortgage or replacing income. Whole or universal life makes sense if you want lifelong coverage and a cash value component.",
  },
  {
    q: "How much does life insurance cost after 40?",
    a: "A healthy 40-year-old can get a $500,000 20-year term policy for roughly $30–$50/month. At 50, expect $80–$150/month for similar coverage. Rates vary based on health, gender, and insurer.",
  },
  {
    q: "Do I need a medical exam to get life insurance over 40?",
    a: "Not always. Many insurers offer no-exam policies with simplified underwriting. However, fully underwritten policies typically offer lower rates if you're in good health.",
  },
  {
    q: "Can I get life insurance if I have a pre-existing condition?",
    a: "Yes. Conditions like controlled hypertension or type 2 diabetes are often insurable — you may pay a higher premium, but coverage is available. Some insurers specialize in higher-risk applicants.",
  },
];

const rateTable = [
  { age: "40", male: "$35–$50/mo", female: "$28–$42/mo" },
  { age: "45", male: "$55–$80/mo", female: "$44–$65/mo" },
  { age: "50", male: "$90–$130/mo", female: "$70–$105/mo" },
  { age: "55", male: "$150–$210/mo", female: "$115–$165/mo" },
  { age: "60", male: "$260–$370/mo", female: "$190–$270/mo" },
];

const policyOptions = [
  {
    title: "20-Year Term",
    best: "Best for ages 40–45 with dependents or a mortgage",
    description:
      "Locks in today's rates for 20 years. The most affordable way to get large coverage amounts during your highest-responsibility years.",
  },
  {
    title: "10-Year Term",
    best: "Best for ages 50–60 with a specific short-term need",
    description:
      "Lower premiums, shorter commitment. Useful if your kids are nearly grown or your mortgage is almost paid off.",
  },
  {
    title: "Whole Life",
    best: "Best for estate planning or lifelong coverage needs",
    description:
      "Premiums never increase, coverage never expires, and cash value grows tax-deferred. More expensive than term but designed to last your entire life.",
  },
  {
    title: "No-Exam / Simplified Issue",
    best: "Best for those with health concerns or who want speed",
    description:
      "Skip the medical exam and get approved in days. Coverage limits are lower and premiums are higher, but it's accessible even if traditional policies are harder to qualify for.",
  },
];

const mistakes = [
  {
    title: 'Waiting for a "better time"',
    body: "There is no better time. Every year you delay, you pay more and risk a health event that limits your options.",
  },
  {
    title: "Underestimating how much coverage you need",
    body: "A $250,000 policy sounds like a lot until you factor in 15 years of income replacement, a mortgage balance, and college costs.",
  },
  {
    title: "Assuming you can't qualify due to health issues",
    body: "Many common conditions — managed diabetes, controlled blood pressure — are insurable. Get a quote before assuming the worst.",
  },
  {
    title: "Choosing the cheapest policy without reading the terms",
    body: "Some low-cost policies have exclusions, rate increases after a period, or graded benefits. Read carefully.",
  },
  {
    title: "Not updating beneficiaries",
    body: "A policy is only as good as its beneficiary designation. If it still lists an ex-spouse or deceased parent, fix it today.",
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

export default function LifeInsuranceOver40() {
  return (
    <PageLayout
      title="Life Insurance for People Over 40"
      subtitle="Your 40s and 50s are when life insurance matters most — and when most people finally get serious about it."
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="grid gap-8">

        {/* Intro */}
        <div className="rounded-2xl p-8 border border-white/10 bg-white/5">
          <p className="text-slate-300 leading-7 mb-4">
            Finding the right <strong className="text-white">life insurance for people over 40</strong> doesn&apos;t have to be complicated. Whether you&apos;re 42 with a young family or 55 planning for retirement, this guide covers your real options — rates, policy types, and what to watch out for.
          </p>
          <p className="text-slate-300 leading-7">
            Not sure how much coverage you need? Start with our{" "}
            <Link href="/#calculator" className="text-cyan-400 hover:text-cyan-300 underline">
              free coverage calculator
            </Link>{" "}
            or{" "}
            <Link href="/get-a-quote" className="text-cyan-400 hover:text-cyan-300 underline">
              get a personalized quote
            </Link>{" "}
            in minutes.
          </p>
        </div>

        {/* Why 40s matter */}
        <div className="rounded-2xl p-8 border border-white/10 bg-white/5">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <ShieldCheck className="h-5 w-5 text-cyan-400" />
            Why Your 40s Are a Critical Window
          </h2>
          <p className="text-slate-300 leading-7 mb-4">
            By the time most people hit 40, the stakes are real: a mortgage, children still in school, a spouse who depends on your income, or aging parents who might need support. Life insurance isn&apos;t abstract anymore — it&apos;s the financial floor that keeps everything else standing if something happens to you.
          </p>
          <p className="text-slate-300 leading-7">
            The difficult reality: premiums rise meaningfully with each passing year. A policy you could lock in at 40 for $35/month may cost $70/month at 48 and $130/month at 55 — for the exact same coverage. Time genuinely matters here.
          </p>
        </div>

        {/* Rate table */}
        <div className="rounded-2xl p-8 border border-white/10 bg-white/5">
          <h2 className="text-xl font-semibold mb-2 flex items-center gap-2">
            <DollarSign className="h-5 w-5 text-cyan-400" />
            How Age Affects Your Rates
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
            Estimates for illustrative purposes. Actual rates depend on health, insurer, and coverage term. See{" "}
            <a
              href="https://www.naic.org/consumer_home.htm"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-400 hover:text-cyan-300 underline"
            >
              NAIC
            </a>{" "}
            for official insurer data.
          </p>
        </div>

        {/* Policy options */}
        <div className="rounded-2xl p-8 border border-white/10 bg-white/5">
          <h2 className="text-xl font-semibold mb-2 flex items-center gap-2">
            <Clock className="h-5 w-5 text-cyan-400" />
            Which Policy Type Makes Sense After 40?
          </h2>
          <p className="text-slate-400 text-sm mb-6">
            There&apos;s no single right answer — it depends on why you need coverage and for how long. Learn more about{" "}
            <Link href="/term-vs-whole-life-insurance" className="text-cyan-400 hover:text-cyan-300 underline">
              term vs. whole life insurance
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

        {/* Common mistakes */}
        <div className="rounded-2xl p-8 border border-white/10 bg-white/5">
          <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
            <AlertTriangle className="h-5 w-5 text-amber-400" />
            Common Mistakes People Over 40 Make
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

        {/* FAQ */}
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

        {/* CTA */}
        <div className="rounded-2xl p-8 border border-cyan-500/20 bg-cyan-500/5 text-center">
          <h2 className="text-xl font-semibold mb-3">Ready to Find the Right Coverage?</h2>
          <p className="text-slate-300 mb-6 max-w-lg mx-auto">
            Use our quote tool to compare rates and find coverage that fits your life and budget. Also see our guide on{" "}
            <Link href="/how-much-life-insurance-do-i-need" className="text-cyan-400 hover:text-cyan-300 underline">
              how much life insurance you need
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

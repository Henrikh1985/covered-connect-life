import { ShieldCheck, DollarSign, CheckCircle, AlertTriangle, MapPin } from "lucide-react";
import Link from "next/link";
import PageLayout from "../components/PageLayout";

export const metadata = {
  title: "Life Insurance in California | Rates, Options & State Guide | Covered Connect",
  description:
    "Find life insurance options for California residents. Compare term and whole life rates, understand state regulations, and get a free quote tailored to California's cost of living.",
  alternates: { canonical: "/life-insurance-california" },
};

const faqs = [
  {
    q: "How much does life insurance cost in California?",
    a: "California life insurance rates are generally in line with national averages because premiums are based on individual health and age, not state of residence. A healthy 35-year-old Californian can expect to pay $22–$38/month for a $500,000 20-year term policy. However, California's high cost of living means you may need a larger coverage amount than someone in a lower-cost state.",
  },
  {
    q: "Does California regulate life insurance?",
    a: "Yes. The California Department of Insurance (CDI) regulates all life insurance sold in the state, requires insurers to be licensed, reviews policy forms, and handles consumer complaints. California also has a free-look period that gives you 30 days to cancel a new policy for a full refund — longer than the 10-day minimum in most states.",
  },
  {
    q: "Do I need more life insurance because I live in California?",
    a: "Often, yes. California's higher housing costs, property taxes, and general cost of living mean your family would need more money to maintain their standard of living without your income. Factor in your mortgage or rent, not just national average guidelines, when calculating coverage.",
  },
  {
    q: "Is life insurance taxed in California?",
    a: "Life insurance death benefits are generally not subject to federal or California state income tax. Cash value growth in permanent policies is tax-deferred. However, if the policy is part of a large estate, federal estate taxes may apply (California has no state estate tax).",
  },
  {
    q: "Can I get life insurance in California without a medical exam?",
    a: "Yes. Many insurers offer no-exam term and whole life policies to California residents. These policies are faster to obtain but typically have higher premiums and lower coverage limits than fully underwritten policies.",
  },
  {
    q: "What's the best life insurance company in California?",
    a: "There's no single best insurer — the right choice depends on your age, health, coverage needs, and budget. Major carriers like State Farm, Northwestern Mutual, New York Life, and Prudential all operate in California. We recommend comparing at least 3–4 quotes before deciding.",
  },
];

const caRateTable = [
  { age: "25", term20: "$15–$25/mo", wholeLife: "$120–$200/mo" },
  { age: "30", term20: "$18–$30/mo", wholeLife: "$150–$250/mo" },
  { age: "35", term20: "$22–$38/mo", wholeLife: "$200–$350/mo" },
  { age: "40", term20: "$35–$55/mo", wholeLife: "$280–$450/mo" },
  { age: "45", term20: "$55–$85/mo", wholeLife: "$380–$600/mo" },
  { age: "50", term20: "$90–$135/mo", wholeLife: "$500–$800/mo" },
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

export default function CaliforniaLifeInsurancePage() {
  return (
    <PageLayout
      title="Life Insurance in California"
      subtitle="Coverage guidance for California residents — from rates and regulations to choosing the right policy for the state's higher cost of living."
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="grid gap-8">

        <div className="rounded-2xl p-8 border border-white/10 bg-white/5">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <MapPin className="h-5 w-5 text-cyan-400" />
            Life Insurance for California Residents
          </h2>
          <p className="text-slate-300 leading-7 mb-4">
            California is the most populous state in the U.S. and has one of the highest costs of living — which directly affects how much life insurance coverage your family needs. A mortgage in Los Angeles, San Francisco, or San Diego can easily exceed $3,000–$5,000/month, meaning standard national coverage guidelines may leave your family underinsured.
          </p>
          <p className="text-slate-300 leading-7 mb-4">
            The good news: California residents have access to every major life insurance carrier and policy type. The state&apos;s insurance market is highly competitive, and the{" "}
            <a href="https://www.insurance.ca.gov" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300 underline">
              California Department of Insurance (CDI)
            </a>{" "}
            provides strong consumer protections, including a 30-day free-look period on new policies.
          </p>
          <p className="text-slate-300 leading-7">
            Whether you need{" "}
            <Link href="/term-life-insurance" className="text-cyan-400 hover:text-cyan-300 underline">term life</Link>,{" "}
            <Link href="/whole-life-insurance" className="text-cyan-400 hover:text-cyan-300 underline">whole life</Link>, or a no-exam policy, this guide covers what California-specific factors to consider.
          </p>
        </div>

        <div className="rounded-2xl p-8 border border-white/10 bg-white/5">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <ShieldCheck className="h-5 w-5 text-cyan-400" />
            Why California Residents May Need More Coverage
          </h2>
          <ul className="space-y-4">
            {[
              ["Higher housing costs", "Median home prices in California are 2–3x the national average. Your coverage should account for your actual mortgage or rent, not a national benchmark."],
              ["Higher cost of living", "Groceries, childcare, transportation, and healthcare all cost more in California. Your family's replacement income needs reflect these real costs."],
              ["Property taxes and HOA fees", "Even if your mortgage is paid off, ongoing property costs in California remain significant. Consider these in your coverage calculation."],
              ["Childcare and education expenses", "California childcare costs average $15,000–$25,000 per year per child. If both parents work, coverage should account for replacing the ability to afford childcare."],
              ["State-specific estate considerations", "California is a community property state, which affects how assets are distributed. While California has no state estate tax, federal estate taxes may apply to larger estates."],
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
          <p className="text-slate-400 text-sm mt-6">
            Use our{" "}
            <Link href="/#calculator" className="text-cyan-400 hover:text-cyan-300 underline">
              coverage calculator
            </Link>{" "}
            to estimate how much coverage you need based on your specific California expenses.
          </p>
        </div>

        <div className="rounded-2xl p-8 border border-white/10 bg-white/5">
          <h2 className="text-xl font-semibold mb-2 flex items-center gap-2">
            <DollarSign className="h-5 w-5 text-cyan-400" />
            California Life Insurance Rates by Age
          </h2>
          <p className="text-slate-400 text-sm mb-6">
            Estimated monthly premiums for a healthy non-smoker — $500,000 coverage.
          </p>
          <div className="overflow-x-auto rounded-xl border border-white/10">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-white/10 text-slate-200">
                  <th className="text-left px-5 py-3 font-semibold">Age</th>
                  <th className="text-left px-5 py-3 font-semibold">20-Year Term</th>
                  <th className="text-left px-5 py-3 font-semibold">Whole Life</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {caRateTable.map((row) => (
                  <tr key={row.age} className="hover:bg-white/5 transition-colors">
                    <td className="px-5 py-3 font-medium text-white">{row.age}</td>
                    <td className="px-5 py-3 text-slate-300">{row.term20}</td>
                    <td className="px-5 py-3 text-slate-300">{row.wholeLife}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mt-3">
            Rates are illustrative estimates. Actual premiums depend on health, gender, insurer, and specific policy terms. Over 40?{" "}
            <Link href="/life-insurance-for-people-over-40" className="text-cyan-400 hover:text-cyan-300 underline">
              See our over-40 rate guide
            </Link>.
          </p>
        </div>

        <div className="rounded-2xl p-8 border border-white/10 bg-white/5">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <AlertTriangle className="h-5 w-5 text-amber-400" />
            California-Specific Consumer Protections
          </h2>
          <div className="grid gap-4">
            {[
              { title: "30-Day Free-Look Period", desc: "California gives you 30 days to cancel a new life insurance policy for a full premium refund — longer than the 10-day minimum in most states." },
              { title: "CDI Complaint Resolution", desc: "The California Department of Insurance investigates consumer complaints and can take action against insurers. You can file complaints online at insurance.ca.gov." },
              { title: "Licensed Agent Requirement", desc: "All agents selling life insurance in California must be licensed by the CDI. You can verify any agent's license status on the CDI website." },
              { title: "Rate Filing and Review", desc: "Insurers must file policy forms and rates with the CDI. While life insurance rates aren't individually approved like auto insurance, the CDI reviews for compliance and fairness." },
            ].map((item) => (
              <div key={item.title} className="rounded-xl border border-white/10 bg-white/5 p-5">
                <h3 className="font-semibold text-white mb-1">{item.title}</h3>
                <p className="text-slate-300 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
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
          <h2 className="text-xl font-semibold mb-3">Get a Life Insurance Quote in California</h2>
          <p className="text-slate-300 mb-6 max-w-lg mx-auto">
            Compare term and whole life options tailored to California&apos;s cost of living. Use our calculator or{" "}
            <Link href="/how-much-life-insurance-do-i-need" className="text-cyan-400 hover:text-cyan-300 underline">
              learn how much coverage you need
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

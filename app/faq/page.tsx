import Link from "next/link";
import PageLayout from "../components/PageLayout";

export const metadata = {
  title: "Life Insurance FAQ | Common Questions Answered | Covered Connect",
  description:
    "Get answers to common life insurance questions about policy types, coverage amounts, term vs whole life, costs by age, and how to choose the right plan for your family.",
  alternates: { canonical: "/faq" },
};

const faqItems = [
  {
    q: "What type of life insurance should I choose?",
    a: "It depends on your goals. Term life is often used for affordable temporary protection — covering a mortgage, income replacement, or children's years at home. Whole life is designed for permanent coverage with a cash value component, and is commonly used for estate planning or lifelong dependents. Most families start with term life because it provides the most coverage per dollar.",
  },
  {
    q: "How much life insurance do I need?",
    a: "A common starting point is 10–12 times your annual income, but the real answer depends on your debts, mortgage balance, number of dependents, childcare costs, and how many years your family would need financial support. Our coverage calculator can help you estimate a personalized amount based on your specific situation.",
  },
  {
    q: "Is term life insurance cheaper than whole life?",
    a: "Yes, significantly. Term life typically costs 5–15 times less than whole life for the same death benefit. A healthy 35-year-old might pay $25–$35/month for a $500,000 20-year term policy, compared to $250–$400/month for a whole life policy with the same coverage amount.",
  },
  {
    q: "Can I get life insurance without a medical exam?",
    a: "Yes. Many insurers offer no-exam policies with simplified underwriting. Approval is faster — sometimes within days — but premiums tend to be higher and coverage limits lower. If you're in good health, a fully underwritten policy usually gets you a better rate.",
  },
  {
    q: "What happens when my term life insurance expires?",
    a: "Your coverage ends and no death benefit is paid. Some policies allow you to renew at a higher rate, and many include a conversion clause that lets you switch to a permanent policy without a new medical exam. It's worth checking conversion options before you buy.",
  },
  {
    q: "How does age affect life insurance rates?",
    a: "Age is one of the biggest factors in life insurance pricing. Premiums increase roughly 8–10% per year of age. A policy that costs $25/month at age 30 might cost $45/month at 40 and $100/month at 50 for the same coverage. Locking in a rate earlier saves significantly over the life of the policy.",
  },
  {
    q: "What is cash value in a whole life policy?",
    a: "Cash value is a savings component built into whole life insurance. A portion of each premium goes into a tax-deferred account that grows at a guaranteed rate. You can borrow against it during your lifetime or surrender the policy for its accumulated value. Cash value growth is slow in the first 5–10 years.",
  },
  {
    q: "Do I need life insurance if I'm single with no dependents?",
    a: "Maybe. If someone cosigned your debts (student loans, car loan) or would be responsible for your funeral costs, a small term policy can protect them. If you plan to start a family in the future, buying now locks in a lower rate while you're younger and healthier.",
  },
  {
    q: "Can I have more than one life insurance policy?",
    a: "Yes. Many people layer policies — for example, a 30-year term for long-term obligations and a 10-year term for a specific debt. Insurers will look at your total coverage amount relative to your income and financial need, but there's no legal limit on the number of policies you can own.",
  },
  {
    q: "Is life insurance taxable?",
    a: "In most cases, no. Life insurance death benefits are generally received income-tax-free by your beneficiaries. Cash value growth in permanent policies is tax-deferred. However, if the policy is part of a large estate, federal estate taxes may apply. There's no state estate tax in most states, including California.",
  },
  {
    q: "How long does it take to get approved for life insurance?",
    a: "No-exam policies can be approved in as little as a few days. Traditional policies that require a medical exam typically take 3–6 weeks from application to approval. The exam itself is usually done at your home or office by a visiting nurse and takes about 30 minutes.",
  },
  {
    q: "Can California residents apply through Covered Connect?",
    a: "Yes. Covered Connect is designed to help visitors across the United States, including California residents, compare options and request guidance based on their needs. See our California-specific guide for more information.",
  },
];

export default function FAQPage() {
  return (
    <PageLayout
      title="Life Insurance FAQ"
      subtitle="Answers to the most common questions people ask before comparing life insurance options."
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqItems.map((item) => ({
              "@type": "Question",
              name: item.q,
              acceptedAnswer: {
                "@type": "Answer",
                text: item.a,
              },
            })),
          }),
        }}
      />
      <div className="grid gap-6">
        {faqItems.map((item) => (
          <details
            key={item.q}
            className="rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
          >
            <summary className="cursor-pointer text-xl font-semibold text-white">
              {item.q}
            </summary>
            <p className="mt-4 leading-7 text-slate-200">{item.a}</p>
          </details>
        ))}

        <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
          <h2 className="mb-4 text-2xl font-semibold text-white">
            Learn More
          </h2>
          <ul className="space-y-3 text-slate-200">
            <li>
              <Link href="/term-life-insurance" className="text-cyan-300 hover:text-cyan-200">
                Term Life Insurance Guide →
              </Link>
            </li>
            <li>
              <Link href="/whole-life-insurance" className="text-cyan-300 hover:text-cyan-200">
                Whole Life Insurance Guide →
              </Link>
            </li>
            <li>
              <Link href="/term-vs-whole-life-insurance" className="text-cyan-300 hover:text-cyan-200">
                Term vs Whole Life Comparison →
              </Link>
            </li>
            <li>
              <Link href="/how-much-life-insurance-do-i-need" className="text-cyan-300 hover:text-cyan-200">
                How Much Life Insurance Do I Need? →
              </Link>
            </li>
            <li>
              <Link href="/life-insurance-california" className="text-cyan-300 hover:text-cyan-200">
                Life Insurance in California →
              </Link>
            </li>
          </ul>
        </div>

        <div className="rounded-[2rem] border border-cyan-400/20 bg-gradient-to-br from-cyan-400/10 to-emerald-400/10 p-8 text-center backdrop-blur-xl">
          <h2 className="mb-3 text-3xl font-semibold text-white">
            Still Have Questions?
          </h2>
          <p className="text-slate-200">
            Compare life insurance options and get help choosing the right direction.
          </p>

          <Link
            href="/get-a-quote"
            className="mt-6 inline-block rounded-2xl bg-white px-6 py-3 font-semibold text-slate-950 hover:bg-slate-100"
          >
            Get a Quote
          </Link>
        </div>
      </div>
    </PageLayout>
  );
}

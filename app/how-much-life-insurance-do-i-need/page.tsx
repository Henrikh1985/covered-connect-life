import Link from "next/link";
import PageLayout from "../components/PageLayout";
import {
  Calculator,
  ListChecks,
  ClipboardList,
  Lightbulb,
  BarChart3,
  BookOpen,
} from "lucide-react";

export const metadata = {
  title: "How Much Life Insurance Do I Need? | Coverage Calculator | Covered Connect",
  description:
    "Calculate how much life insurance coverage you need based on income, debt, dependents, and future expenses. Use our simple formula and free calculator.",
  alternates: { canonical: "/how-much-life-insurance-do-i-need" },
};

export default function HowMuchLifeInsurancePage() {
  return (
    <PageLayout
      title="How Much Life Insurance Do I Need?"
      subtitle="A simple guide to estimating life insurance coverage based on income, debt, family needs, and long-term responsibilities."
    >
      <div className="grid gap-8">
        <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
          <h2 className="mb-4 flex items-center gap-3 text-2xl font-semibold text-white">
            <Calculator className="h-6 w-6 text-cyan-400" />
            A Simple Way to Estimate Coverage
          </h2>
          <p className="leading-8 text-slate-200">
            The right amount of life insurance depends on what your family would
            need if your income was no longer there. A common starting point is
            to consider income replacement, debts, mortgage obligations, children,
            education costs, and final expenses.
          </p>
        </div>

        <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
          <h2 className="mb-4 flex items-center gap-3 text-2xl font-semibold text-white">
            <ListChecks className="h-6 w-6 text-emerald-400" />
            What to Include in Your Estimate
          </h2>

          <ul className="space-y-3 text-slate-200">
            <li>Annual income your family depends on</li>
            <li>Mortgage, rent, loans, and other debts</li>
            <li>Children&apos;s future education costs</li>
            <li>Daily living expenses</li>
            <li>Final expenses and emergency cushion</li>
          </ul>
        </div>

        <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
          <h2 className="mb-4 flex items-center gap-3 text-2xl font-semibold text-white">
            <ClipboardList className="h-6 w-6 text-sky-400" />
            How to Calculate Life Insurance Coverage
          </h2>

          <p className="leading-8 text-slate-200">
            To calculate how much life insurance you need, start by multiplying your
            annual income by the number of years your family would need support.
            Then add debts such as your mortgage, personal loans, and other obligations.
            Finally, include future costs like education, childcare, and long-term living expenses.
          </p>

          <p className="mt-4 leading-8 text-slate-200">
            This approach gives you a realistic starting point. From there, you can adjust
            based on savings, investments, and existing coverage.
          </p>
        </div>

        <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
          <h2 className="mb-4 flex items-center gap-3 text-2xl font-semibold text-white">
            <Lightbulb className="h-6 w-6 text-amber-400" />
            Common Rule of Thumb
          </h2>

          <p className="leading-8 text-slate-200">
            Many people start by looking at 10 to 15 times annual income, then
            adjust based on debt, children, savings, and long-term goals. This is
            not a final quote, but it gives you a useful starting point.
          </p>
        </div>

        <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
          <h2 className="mb-4 flex items-center gap-3 text-2xl font-semibold text-white">
            <BarChart3 className="h-6 w-6 text-teal-400" />
            Life Insurance Coverage Examples
          </h2>

          <ul className="space-y-3 text-slate-200">
            <li>$100,000–$300,000 → basic coverage / final expenses</li>
            <li>$300,000–$700,000 → moderate income replacement</li>
            <li>$700,000–$1,500,000 → families with children and mortgage</li>
            <li>$1M+ → long-term income protection and advanced planning</li>
          </ul>
        </div>

        <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
          <h2 className="mb-4 flex items-center gap-3 text-2xl font-semibold text-white">
            <BookOpen className="h-6 w-6 text-indigo-400" />
            Related Guides
          </h2>

          <div className="grid gap-4 sm:grid-cols-2">
            <Link href="/term-vs-whole-life-insurance" className="rounded-2xl border border-white/10 bg-white/5 p-5 text-cyan-300 hover:bg-white/10">
              Term vs Whole Life Insurance →
            </Link>

            <Link href="/#calculator" className="rounded-2xl border border-white/10 bg-white/5 p-5 text-cyan-300 hover:bg-white/10">
              Use the Life Insurance Calculator →
            </Link>

            <Link href="/faq" className="rounded-2xl border border-white/10 bg-white/5 p-5 text-cyan-300 hover:bg-white/10">
              Life Insurance FAQ →
            </Link>
          </div>
        </div>

        <div className="rounded-[2rem] border border-cyan-400/20 bg-gradient-to-br from-cyan-400/10 to-emerald-400/10 p-8 text-center backdrop-blur-xl">
          <h2 className="mb-3 flex items-center justify-center gap-3 text-3xl font-semibold text-white">
            <Calculator className="h-7 w-7 text-cyan-400" />
            Estimate Your Coverage
          </h2>

          <p className="text-slate-200">
            Use the calculator to get a starting estimate and compare coverage options.
          </p>

          <Link
            href="/#calculator"
            className="mt-6 inline-block rounded-2xl bg-white px-6 py-3 font-semibold text-slate-950 hover:bg-slate-100"
          >
            Start Calculator
          </Link>
        </div>
      </div>
    </PageLayout>
  );
}

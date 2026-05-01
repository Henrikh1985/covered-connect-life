"use client";

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

export default function HowMuchLifeInsurancePage() {
  const host = typeof window !== "undefined" ? window.location.hostname : "";
  const isExpertsDomain = host.includes("lifeinsuranceexperts.org");

  const textPrimary = isExpertsDomain ? "text-slate-900" : "text-white";
  const textSecondary = isExpertsDomain ? "text-slate-600" : "text-slate-200";
  const cardStyle = isExpertsDomain
    ? "bg-white border border-slate-200 shadow-lg shadow-slate-200"
    : "border border-white/10 bg-white/5 backdrop-blur-xl";

  const linkCardStyle = isExpertsDomain
    ? "rounded-2xl border border-slate-200 bg-slate-50 p-5 text-sky-700 hover:bg-slate-100"
    : "rounded-2xl border border-white/10 bg-white/5 p-5 text-cyan-300 hover:bg-white/10";

  return (
    <PageLayout
      title="How Much Life Insurance Do I Need?"
      subtitle="A simple guide to estimating life insurance coverage based on income, debt, family needs, and long-term responsibilities."
    >
      <div className="grid gap-8">
        <div className={`rounded-[2rem] p-8 ${cardStyle}`}>
          <h2 className={`mb-4 flex items-center gap-3 text-2xl font-semibold ${textPrimary}`}>
            <Calculator className="h-6 w-6 text-cyan-400" />
            A Simple Way to Estimate Coverage
          </h2>
          <p className={`leading-8 ${textSecondary}`}>
            The right amount of life insurance depends on what your family would
            need if your income was no longer there. A common starting point is
            to consider income replacement, debts, mortgage obligations, children,
            education costs, and final expenses.
          </p>
        </div>

        <div className={`rounded-[2rem] p-8 ${cardStyle}`}>
          <h2 className={`mb-4 flex items-center gap-3 text-2xl font-semibold ${textPrimary}`}>
            <ListChecks className="h-6 w-6 text-emerald-400" />
            What to Include in Your Estimate
          </h2>

          <ul className={`space-y-3 ${textSecondary}`}>
            <li>Annual income your family depends on</li>
            <li>Mortgage, rent, loans, and other debts</li>
            <li>Children’s future education costs</li>
            <li>Daily living expenses</li>
            <li>Final expenses and emergency cushion</li>
          </ul>
        </div>

        <div className={`rounded-[2rem] p-8 ${cardStyle}`}>
          <h2 className={`mb-4 flex items-center gap-3 text-2xl font-semibold ${textPrimary}`}>
            <ClipboardList className="h-6 w-6 text-sky-400" />
            How to Calculate Life Insurance Coverage
          </h2>

          <p className={`leading-8 ${textSecondary}`}>
            To calculate how much life insurance you need, start by multiplying your
            annual income by the number of years your family would need support.
            Then add debts such as your mortgage, personal loans, and other obligations.
            Finally, include future costs like education, childcare, and long-term living expenses.
          </p>

          <p className={`mt-4 leading-8 ${textSecondary}`}>
            This approach gives you a realistic starting point. From there, you can adjust
            based on savings, investments, and existing coverage.
          </p>
        </div>

        <div className={`rounded-[2rem] p-8 ${cardStyle}`}>
          <h2 className={`mb-4 flex items-center gap-3 text-2xl font-semibold ${textPrimary}`}>
            <Lightbulb className="h-6 w-6 text-amber-400" />
            Common Rule of Thumb
          </h2>

          <p className={`leading-8 ${textSecondary}`}>
            Many people start by looking at 10 to 15 times annual income, then
            adjust based on debt, children, savings, and long-term goals. This is
            not a final quote, but it gives you a useful starting point.
          </p>
        </div>

        <div className={`rounded-[2rem] p-8 ${cardStyle}`}>
          <h2 className={`mb-4 flex items-center gap-3 text-2xl font-semibold ${textPrimary}`}>
            <BarChart3 className="h-6 w-6 text-teal-400" />
            Life Insurance Coverage Examples
          </h2>

          <ul className={`space-y-3 ${textSecondary}`}>
            <li>$100,000–$300,000 → basic coverage / final expenses</li>
            <li>$300,000–$700,000 → moderate income replacement</li>
            <li>$700,000–$1,500,000 → families with children and mortgage</li>
            <li>$1M+ → long-term income protection and advanced planning</li>
          </ul>
        </div>

        <div className={`rounded-[2rem] p-8 ${cardStyle}`}>
          <h2 className={`mb-4 flex items-center gap-3 text-2xl font-semibold ${textPrimary}`}>
            <BookOpen className="h-6 w-6 text-indigo-400" />
            Related Guides
          </h2>

          <div className="grid gap-4 sm:grid-cols-2">
            <Link href="/term-vs-whole-life-insurance" className={linkCardStyle}>
              Term vs Whole Life Insurance →
            </Link>

            <Link href="/life-insurance-calculator" className={linkCardStyle}>
              Use the Life Insurance Calculator →
            </Link>

            <Link href="/faq" className={linkCardStyle}>
              Life Insurance FAQ →
            </Link>
          </div>
        </div>

        <div className="rounded-[2rem] border border-cyan-400/20 bg-gradient-to-br from-cyan-400/10 to-emerald-400/10 p-8 text-center backdrop-blur-xl">
          <h2 className={`mb-3 flex items-center justify-center gap-3 text-3xl font-semibold ${textPrimary}`}>
            <Calculator className="h-7 w-7 text-cyan-400" />
            Estimate Your Coverage
          </h2>

          <p className={textSecondary}>
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
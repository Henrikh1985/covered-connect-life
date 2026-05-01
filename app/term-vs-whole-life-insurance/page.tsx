"use client";

import Link from "next/link";
import PageLayout from "../components/PageLayout";
import {
  Scale,
  Clock,
  ShieldCheck,
  Wallet,
  CheckCircle2,
  BookOpen,
  Calculator,
} from "lucide-react";

export default function TermVsWholeLifePage() {
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
      title="Term vs Whole Life Insurance"
      subtitle="Understand the key differences between term life and whole life insurance so you can choose the coverage that fits your goals."
    >
      <div className="grid gap-8">
        <div className={`rounded-[2rem] p-8 ${cardStyle}`}>
          <h2 className={`mb-4 flex items-center gap-3 text-2xl font-semibold ${textPrimary}`}>
            <Scale className="h-6 w-6 text-cyan-400" />
            Term Life vs Whole Life: The Simple Difference
          </h2>

          <p className={`leading-8 ${textSecondary}`}>
            Term life insurance provides coverage for a specific period of time,
            such as 10, 20, or 30 years. Whole life insurance is designed to provide
            permanent lifetime coverage as long as required premiums are paid.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className={`rounded-[2rem] p-8 ${cardStyle}`}>
            <h2 className={`mb-4 flex items-center gap-3 text-2xl font-semibold ${textPrimary}`}>
              <Clock className="h-6 w-6 text-emerald-400" />
              Term Life Insurance
            </h2>

            <p className={`leading-8 ${textSecondary}`}>
              Term life is often chosen by families who want strong coverage at a
              lower starting cost. It is commonly used for mortgage protection,
              income replacement, and raising children.
            </p>

            <ul className={`mt-5 space-y-3 ${textSecondary}`}>
              <li className="flex gap-3">
                <CheckCircle2 className="mt-1 h-5 w-5 text-emerald-400" />
                Usually lower starting cost
              </li>
              <li className="flex gap-3">
                <CheckCircle2 className="mt-1 h-5 w-5 text-emerald-400" />
                Coverage lasts for a set number of years
              </li>
              <li className="flex gap-3">
                <CheckCircle2 className="mt-1 h-5 w-5 text-emerald-400" />
                Often good for families and homeowners
              </li>
            </ul>
          </div>

          <div className={`rounded-[2rem] p-8 ${cardStyle}`}>
            <h2 className={`mb-4 flex items-center gap-3 text-2xl font-semibold ${textPrimary}`}>
              <ShieldCheck className="h-6 w-6 text-sky-400" />
              Whole Life Insurance
            </h2>

            <p className={`leading-8 ${textSecondary}`}>
              Whole life is designed for long-term permanent protection. It usually
              costs more than term life but may fit people who want lifetime coverage
              or more advanced planning.
            </p>

            <ul className={`mt-5 space-y-3 ${textSecondary}`}>
              <li className="flex gap-3">
                <CheckCircle2 className="mt-1 h-5 w-5 text-sky-400" />
                Designed for lifetime coverage
              </li>
              <li className="flex gap-3">
                <CheckCircle2 className="mt-1 h-5 w-5 text-sky-400" />
                Usually higher monthly premium
              </li>
              <li className="flex gap-3">
                <CheckCircle2 className="mt-1 h-5 w-5 text-sky-400" />
                May support long-term planning goals
              </li>
            </ul>
          </div>
        </div>

        <div className={`rounded-[2rem] p-8 ${cardStyle}`}>
          <h2 className={`mb-4 flex items-center gap-3 text-2xl font-semibold ${textPrimary}`}>
            <Wallet className="h-6 w-6 text-amber-400" />
            Which One Is Cheaper?
          </h2>

          <p className={`leading-8 ${textSecondary}`}>
            Term life insurance is usually cheaper at the beginning because it
            covers a temporary period. Whole life insurance usually costs more
            because it is designed to last for life.
          </p>

          <p className={`mt-4 leading-8 ${textSecondary}`}>
            If your main goal is affordable protection for your family during your
            working years, term life may be a better starting point. If your goal is
            permanent lifetime coverage, whole life may be worth exploring.
          </p>
        </div>

        <div className={`rounded-[2rem] p-8 ${cardStyle}`}>
          <h2 className={`mb-4 flex items-center gap-3 text-2xl font-semibold ${textPrimary}`}>
            <BookOpen className="h-6 w-6 text-indigo-400" />
            Quick Comparison
          </h2>

          <div className="grid gap-4 md:grid-cols-2">
            <div className={linkCardStyle}>
              <strong>Choose term life if:</strong>
              <p className="mt-2">
                You want affordable coverage for income replacement, mortgage
                protection, or family needs.
              </p>
            </div>

            <div className={linkCardStyle}>
              <strong>Consider whole life if:</strong>
              <p className="mt-2">
                You want lifetime coverage and are comfortable with a higher monthly
                cost.
              </p>
            </div>
          </div>
        </div>

        <div className={`rounded-[2rem] p-8 ${cardStyle}`}>
          <h2 className={`mb-4 flex items-center gap-3 text-2xl font-semibold ${textPrimary}`}>
            <Calculator className="h-6 w-6 text-cyan-400" />
            Related Guides
          </h2>

          <div className="grid gap-4 sm:grid-cols-2">
            <Link href="/how-much-life-insurance-do-i-need" className={linkCardStyle}>
              How Much Life Insurance Do I Need? →
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
          <h2 className={`mb-3 text-3xl font-semibold ${textPrimary}`}>
            Compare Your Coverage Options
          </h2>

          <p className={textSecondary}>
            Use the calculator to estimate coverage and compare what may fit your needs.
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
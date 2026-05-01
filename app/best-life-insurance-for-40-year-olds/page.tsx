import { ShieldCheck } from "lucide-react";
import PageLayout from "../components/PageLayout";

export const metadata = {
  title: "Best Life Insurance for 40-Year-Olds | Covered Connect",
  description:
    "Find the best life insurance options for 40-year-olds. Compare term vs whole life, costs, and how much coverage you need.",
};

export default function BestLifeInsurance40() {
  return (
    <PageLayout
      title="Best Life Insurance for 40-Year-Olds"
      subtitle="Smart coverage decisions in your 40s can protect your family and build long-term security."
    >
      <div className="grid gap-8">

        <div className="rounded-2xl p-8 border border-white/10 bg-white/5">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <ShieldCheck className="h-5 w-5 text-cyan-400" />
            Why Life Insurance Matters at 40
          </h2>
          <p className="text-slate-300 leading-7">
            At 40, life insurance becomes more important than ever. You likely have
            family responsibilities, mortgage payments, and long-term financial goals.
            A proper policy ensures your family is protected if something happens to you.
          </p>
        </div>

        <div className="rounded-2xl p-8 border border-white/10 bg-white/5">
          <h2 className="text-xl font-semibold mb-4">
            Term vs Whole Life at Age 40
          </h2>
          <p className="text-slate-300 leading-7">
            <strong>Term life insurance</strong> is usually the best option for most
            40-year-olds because it provides high coverage at a lower cost.
            <br /><br />
            <strong>Whole life insurance</strong> offers lifetime coverage and builds
            cash value, but it is significantly more expensive.
          </p>
        </div>

        <div className="rounded-2xl p-8 border border-white/10 bg-white/5">
          <h2 className="text-xl font-semibold mb-4">
            How Much Coverage Do You Need?
          </h2>
          <p className="text-slate-300 leading-7">
            A common rule is 10–15x your annual income. But you should also consider:
          </p>
          <ul className="list-disc ml-6 mt-4 text-slate-300">
            <li>Mortgage balance</li>
            <li>Kids’ education</li>
            <li>Debt</li>
            <li>Future income replacement</li>
          </ul>
        </div>

        <div className="rounded-2xl p-8 border border-white/10 bg-white/5 text-center">
          <h2 className="text-xl font-semibold mb-4">
            Get Your Personalized Estimate
          </h2>
          <p className="text-slate-300 mb-6">
            Find out exactly how much coverage you need in minutes.
          </p>
          <a
            href="/get-a-quote"
            className="inline-block px-6 py-3 rounded-xl bg-cyan-500 text-black font-semibold hover:bg-cyan-400"
          >
            Get My Quote
          </a>
        </div>

      </div>
    </PageLayout>
  );
}
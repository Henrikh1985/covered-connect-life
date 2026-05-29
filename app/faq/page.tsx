import Link from "next/link";
import PageLayout from "../components/PageLayout";

export const metadata = {
  title: "Life Insurance FAQ | Common Questions Answered | Covered Connect",
  description:
    "Get answers to common life insurance questions about policy types, coverage amounts, term vs whole life, and how to choose the right plan for your family.",
  alternates: { canonical: "/faq" },
};

export default function FAQPage() {
  return (
    <PageLayout
      title="Life Insurance FAQ"
      subtitle="Common questions people ask before comparing life insurance options."
    >
      <div className="grid gap-6">
        {[
          {
            q: "What type of life insurance should I choose?",
            a: "It depends on your goals. Term life is often used for affordable temporary protection, while whole life is designed for permanent coverage.",
          },
          {
            q: "How much life insurance do I need?",
            a: "A common starting point is income replacement, debts, mortgage, children’s needs, and future expenses.",
          },
          {
            q: "Is term life insurance cheaper than whole life?",
            a: "Usually, yes. Term life often has lower starting costs because it covers a set period of time.",
          },
          {
            q: "Can I get life insurance without a medical exam?",
            a: "Some policies may offer no-exam options, depending on age, health, coverage amount, and carrier rules.",
          },
          {
            q: "Can California residents apply through Covered Connect?",
            a: "Covered Connect is designed to help visitors compare options and request guidance based on their needs.",
          },
        ].map((item) => (
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
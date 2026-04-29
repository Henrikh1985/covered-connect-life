"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  HeartHandshake,
  ArrowRight,
  CheckCircle2,
  BookOpen,
  BadgeDollarSign,
  Baby,
  Home,
  Briefcase,
  ChevronRight,
  Menu,
  X,
  Star,
  Sparkles,
  BarChart3,
  Clock3,
  Lock,
} from "lucide-react";

const navLinks = [
  "Calculator",
  "Why Life Insurance",
  "Policy Types",
  "Learning Center",
  "FAQ",
] as const;

const articleCards = [
  {
    id: "mistakes",
    category: "Buying Guide",
    title: "7 Things Not to Do When Getting Life Insurance",
    excerpt:
      "Avoid common mistakes that can make coverage weaker, more expensive, or badly matched to your goals.",
  },
  {
    id: "term-vs-whole",
    category: "Compare Policies",
    title: "Term vs. Whole Life Insurance",
    excerpt:
      "A clean comparison of the two most talked-about options and who they usually fit best.",
  },
  {
    id: "how-much",
    category: "Coverage Planning",
    title: "How Much Life Insurance Do You Need?",
    excerpt:
      "A practical framework based on income replacement, debts, children, and long-term obligations.",
  },
  {
    id: "no-exam",
    category: "Fast Approval",
    title: "No-Exam Life Insurance",
    excerpt:
      "Understand the convenience, tradeoffs, and when speed may or may not be worth it.",
  },
  {
    id: "parents",
    category: "Family Protection",
    title: "Best Life Insurance Approaches for Parents",
    excerpt:
      "Coverage strategies built around children, mortgages, and household stability.",
  },
  {
    id: "business-owners",
    category: "Advanced Planning",
    title: "Life Insurance for Business Owners",
    excerpt:
      "Key person protection, debt obligations, and family continuity planning.",
  },
] as const;

const articleContent = {
  mistakes: {
    title: "7 Things Not to Do When Getting Life Insurance",
    intro:
      "Most mistakes happen because life insurance feels technical, urgent, and emotionally loaded. The goal is to make the decision clearer and calmer.",
    points: [
      [
        "Don’t buy based on price alone",
        "The cheapest premium is not always the right fit. Cost matters, but so do term length, flexibility, and features.",
      ],
      [
        "Don’t underestimate how long support is needed",
        "People often think only about today’s bills and forget education, inflation, and recovery time for the family.",
      ],
      [
        "Don’t wait too long",
        "Age and health changes can move rates quickly. Earlier usually gives you better options.",
      ],
      [
        "Don’t choose a random coverage amount",
        "Start with income replacement, debts, mortgage, children’s needs, and final expenses.",
      ],
    ],
  },
  "term-vs-whole": {
    title: "Term vs. Whole Life Insurance",
    intro:
      "A trustworthy site should explain tradeoffs, not push one product blindly. That builds trust and improves lead quality.",
    points: [
      [
        "Term life",
        "Usually simpler and lower-cost for a set number of years such as 10, 20, or 30.",
      ],
      [
        "Whole life",
        "Built for lifetime coverage and a more permanent structure, usually with higher cost.",
      ],
      [
        "Who often leans term",
        "Young families, mortgage protection, and people wanting high coverage for lower monthly cost.",
      ],
      [
        "Who may explore permanent options",
        "People with estate planning goals, lifelong dependents, or more advanced long-range planning.",
      ],
    ],
  },
  "how-much": {
    title: "How Much Life Insurance Do You Need?",
    intro:
      "Coverage should feel purposeful, not random. This framework keeps the conversation grounded in real family impact.",
    points: [
      [
        "Start with income replacement",
        "Estimate how many years your household would need support if your income stopped tomorrow.",
      ],
      [
        "Add debts",
        "Mortgage, personal loans, and other major liabilities matter.",
      ],
      [
        "Add future responsibilities",
        "Children’s education, childcare, and long-term support for dependents should be counted.",
      ],
      [
        "Subtract what already exists",
        "Savings, investments, and employer benefits can lower the coverage target.",
      ],
    ],
  },
  "no-exam": {
    title: "No-Exam Life Insurance",
    intro:
      "Fast is attractive, but fast is not always best. This helps visitors understand convenience versus long-term value.",
    points: [
      [
        "Best for speed-focused buyers",
        "No-exam options can appeal to people who want a faster application experience.",
      ],
      [
        "Possible tradeoff",
        "Convenience can sometimes come with different pricing or coverage considerations.",
      ],
      [
        "Good use case",
        "Someone who values simplicity and wants coverage started soon may find this path attractive.",
      ],
      [
        "When to compare carefully",
        "If you are healthy and open to full underwriting, a broader comparison may reveal stronger value.",
      ],
    ],
  },
  parents: {
    title: "Best Life Insurance Approaches for Parents",
    intro:
      "Parents buy life insurance for one core reason: keeping life stable for the people who depend on them.",
    points: [
      [
        "Protect income",
        "Coverage often replaces earning power during the dependent years of children.",
      ],
      [
        "Protect routine",
        "Childcare, transportation, school, and home stability all matter after a loss.",
      ],
      [
        "Think beyond bills",
        "Families often underestimate the cost of preserving normal life and structure.",
      ],
      [
        "Review after milestones",
        "A new child, home purchase, or income increase should trigger a coverage review.",
      ],
    ],
  },
  "business-owners": {
    title: "Life Insurance for Business Owners",
    intro:
      "Business owners often need life insurance for both family protection and business continuity.",
    points: [
      [
        "Family protection",
        "Personal coverage still protects household income and stability.",
      ],
      [
        "Debt and obligations",
        "Business debt and guarantees can raise the real coverage need.",
      ],
      [
        "Key person planning",
        "Some businesses use insurance to reduce disruption if a vital person is lost.",
      ],
      [
        "Ownership transitions",
        "In some structures, life insurance can support buy-sell planning and continuity.",
      ],
    ],
  },
} as const;

type ArticleKey = keyof typeof articleContent;

function estimateMonthlyPremium({
  age,
  coverage,
  term,
  smoker,
}: {
  age: number;
  coverage: number;
  term: number;
  smoker: boolean;
}) {
  const ageFactor = 0.85 + (age - 25) * 0.04;
  const coverageFactor = coverage / 100000;
  const termFactor = term === 10 ? 0.8 : term === 20 ? 1 : 1.35;
  const smokerFactor = smoker ? 1.9 : 1;

  return Math.max(
    12,
    Math.round(ageFactor * coverageFactor * 3.4 * termFactor * smokerFactor)
  );
}

function coverageSuggestion({
  income,
  debt,
  kids,
  years,
}: {
  income: number;
  debt: number;
  kids: number;
  years: number;
}) {
  const base = income * years + debt + kids * 75000;
  return Math.max(100000, Math.round(base / 50000) * 50000);
}

function Pill({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={`inline-flex items-center rounded-full border border-white/10 bg-white/10 px-3 py-1 text-sm text-slate-200 ${className}`}
    >
      {children}
    </span>
  );
}

function Card({
  children,
  className = "",
  id,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <div
      id={id}
      className={`rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur-xl ${className}`}
    >
      {children}
    </div>
  );
}

export default function App() {
  const host =
    typeof window !== "undefined" ? window.location.hostname : "";

  const isExpertsDomain = host.includes("lifeinsuranceexperts.org");

  const brandName = isExpertsDomain
    ? "Life Insurance Experts"
    : "Covered Connect Life";

  const brandTagline = isExpertsDomain
    ? "Expert life insurance guidance, simplified"
    : "Smart life insurance, connected to you";

  const heroHeadline = isExpertsDomain
    ? "Life Insurance Experts Who Help You Choose With Confidence"
    : "Covered Connect Life Insurance Guidance";

  const [mobileOpen, setMobileOpen] = useState(false);
  const [selectedArticle, setSelectedArticle] =
    useState<ArticleKey>("mistakes");
  const [submitted, setSubmitted] = useState(false);

  const [calc, setCalc] = useState({
    age: 35,
    income: 90000,
    debt: 250000,
    kids: 2,
    years: 10,
    term: 20,
    smoker: false,
    fullName: "",
    phone: "",
    email: "",
    zip: "",
  });

  const suggestedCoverage = useMemo(() => coverageSuggestion(calc), [calc]);

  const monthlyEstimate = useMemo(
    () =>
      estimateMonthlyPremium({
        age: calc.age,
        coverage: suggestedCoverage,
        term: calc.term,
        smoker: calc.smoker,
      }),
    [calc.age, calc.term, calc.smoker, suggestedCoverage]
  );

  const confidenceScore = useMemo(() => {
    let score = 68;
    if (calc.age < 40) score += 8;
    if (!calc.smoker) score += 10;
    if (calc.term === 20) score += 4;
    return Math.min(score, 94);
  }, [calc.age, calc.smoker, calc.term]);

  const article = articleContent[selectedArticle];

  async function handleLeadSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
  
    if (!calc.fullName || !calc.phone || !calc.email) {
      alert("Please fill in your name, phone, and email.");
      return;
    }
  
    const response = await fetch("https://formspree.io/f/xgorjnlb", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        name: calc.fullName,
        phone: calc.phone,
        email: calc.email,
        zip: calc.zip,
        age: calc.age,
        income: calc.income,
        debt: calc.debt,
        kids: calc.kids,
        years: calc.years,
        term: calc.term,
        smoker: calc.smoker ? "Yes" : "No",
        suggestedCoverage,
        monthlyEstimate,
      }),
    });
  
    if (response.ok) {
      setSubmitted(true);
    } else {
      alert("Something went wrong. Please try again.");
  }

  }

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-cyan-400/20 blur-3xl" />
        <div className="absolute top-[30rem] -left-24 h-80 w-80 rounded-full bg-fuchsia-500/10 blur-3xl" />
        <div className="absolute top-[10rem] right-0 h-80 w-80 rounded-full bg-emerald-400/10 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_35%)]" />
      </div>

      <header className="sticky top-0 z-40 border-b border-white/10 bg-slate-950/75 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400 to-emerald-400 text-slate-950 shadow-lg shadow-cyan-500/20">
              <ShieldCheck className="h-6 w-6" />
            </div>
            <div>
              <div className="text-lg font-semibold tracking-tight">
                Covered Connect Life
              </div>
              <div className="text-xs text-slate-400">
                Smart life insurance, connected to you
              </div>
            </div>
          </div>

          <nav className="hidden items-center gap-7 md:flex">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase().replace(/\s+/g, "-")}`}
                className="text-sm text-slate-300 transition hover:text-white"
              >
                {link}
              </a>
            ))}
          </nav>

          <div className="hidden md:block">
            <button className="rounded-2xl bg-white px-4 py-2 text-slate-950 hover:bg-slate-100">
              Get My Estimate
            </button>
          </div>

          <button
            className="md:hidden"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {mobileOpen && (
          <div className="border-t border-white/10 px-6 py-4 md:hidden">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase().replace(/\s+/g, "-")}`}
                  className="text-sm text-slate-300"
                  onClick={() => setMobileOpen(false)}
                >
                  {link}
                </a>
              ))}
              <button className="rounded-2xl bg-white px-4 py-2 text-slate-950 hover:bg-slate-100">
                Get My Estimate
              </button>
            </div>
          </div>
        )}
      </header>

      <main className="relative z-10">
        <section className="mx-auto grid max-w-7xl items-center gap-10 px-6 pb-16 pt-12 lg:grid-cols-[1.15fr_0.85fr] lg:pt-20">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Pill className="mb-5 border-cyan-400/30 bg-cyan-400/10 text-cyan-200">
                <Sparkles className="mr-2 h-4 w-4" />
                Beautifully designed. Built to convert with trust.
              </Pill>

              <h1 className="max-w-4xl text-5xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl">
                {heroHeadline}
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
                A modern life insurance website concept with an elegant quote
                calculator, strong educational content, and a brand presence
                designed to make visitors feel protected, informed, and ready to
                act.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#calculator"
                  className="rounded-2xl bg-white px-6 py-3 text-slate-950 hover:bg-slate-100"
                >
                  <span className="inline-flex items-center">
                    Start Quote Calculator <ArrowRight className="ml-2 h-4 w-4" />
                  </span>
                </a>

                <a
                  href="#learning-center"
                  className="rounded-2xl border border-white/15 bg-white/5 px-6 py-3 text-white hover:bg-white/10"
                >
                  Explore Learning Center
                </a>
              </div>

              <div className="mt-10 grid max-w-3xl grid-cols-1 gap-4 sm:grid-cols-3">
                {[
                  ["Fast estimate", "See a smart monthly range in under a minute."],
                  ["Education-first", "Rich guides that build trust before the quote."],
                  ["Premium design", "A polished visual identity that feels high-value."],
                ].map(([title, desc]) => (
                  <Card key={title} className="shadow-2xl shadow-black/20">
                    <div className="p-5">
                      <div className="mb-2 flex items-center gap-2 text-white">
                        <CheckCircle2 className="h-4 w-4 text-emerald-300" />
                        <span className="font-medium">{title}</span>
                      </div>
                      <p className="text-sm leading-6 text-slate-300">{desc}</p>
                    </div>
                  </Card>
                ))}
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <Card id="calculator" className="shadow-2xl shadow-cyan-950/30">
              <div className="p-6 pb-2">
                <div className="mb-3 flex items-center justify-between">
                  <Pill className="bg-emerald-400/15 text-emerald-200">
                    Quote Calculator
                  </Pill>
                  <div className="flex items-center gap-2 text-sm text-slate-300">
                    <Lock className="h-4 w-4" /> Private & friction-light
                  </div>
                </div>

                <h2 className="text-2xl text-white">Estimate your coverage</h2>
                <p className="text-slate-300">
                  A polished first-pass estimate that makes the visitor feel guided,
                  not pressured.
                </p>
              </div>

              <div className="p-6 pt-4">
                <form onSubmit={handleLeadSubmit} className="space-y-6">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div className="space-y-2">
                      <label htmlFor="age" className="text-white">
                        Age
                      </label>
                      <input
                        id="age"
                        type="number"
                        value={calc.age}
                        onChange={(e) =>
                          setCalc({ ...calc, age: Number(e.target.value || 0) })
                        }
                        className="w-full rounded-2xl border border-white/10 bg-slate-900/60 p-3 text-white"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="income" className="text-white">
                        Annual income
                      </label>
                      <input
                        id="income"
                        type="number"
                        value={calc.income}
                        onChange={(e) =>
                          setCalc({ ...calc, income: Number(e.target.value || 0) })
                        }
                        className="w-full rounded-2xl border border-white/10 bg-slate-900/60 p-3 text-white"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="debt" className="text-white">
                        Debt / mortgage
                      </label>
                      <input
                        id="debt"
                        type="number"
                        value={calc.debt}
                        onChange={(e) =>
                          setCalc({ ...calc, debt: Number(e.target.value || 0) })
                        }
                        className="w-full rounded-2xl border border-white/10 bg-slate-900/60 p-3 text-white"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="kids" className="text-white">
                        Children / dependents
                      </label>
                      <input
                        id="kids"
                        type="number"
                        value={calc.kids}
                        onChange={(e) =>
                          setCalc({ ...calc, kids: Number(e.target.value || 0) })
                        }
                        className="w-full rounded-2xl border border-white/10 bg-slate-900/60 p-3 text-white"
                      />
                    </div>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <div className="space-y-2">
                      <label htmlFor="fullName" className="text-white">
                        Full name
                      </label>
                      <input
                        id="fullName"
                        value={calc.fullName}
                        onChange={(e) =>
                          setCalc({ ...calc, fullName: e.target.value })
                        }
                        className="w-full rounded-2xl border border-white/10 bg-slate-900/60 p-3 text-white"
                        placeholder="John Smith"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-white">
                        Phone
                      </label>
                      <input
                        id="phone"
                        value={calc.phone}
                        onChange={(e) =>
                          setCalc({ ...calc, phone: e.target.value })
                        }
                        className="w-full rounded-2xl border border-white/10 bg-slate-900/60 p-3 text-white"
                        placeholder="(555) 555-5555"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="email" className="text-white">
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        value={calc.email}
                        onChange={(e) =>
                          setCalc({ ...calc, email: e.target.value })
                        }
                        className="w-full rounded-2xl border border-white/10 bg-slate-900/60 p-3 text-white"
                        placeholder="you@example.com"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="zip" className="text-white">
                        ZIP code
                      </label>
                      <input
                        id="zip"
                        value={calc.zip}
                        onChange={(e) =>
                          setCalc({ ...calc, zip: e.target.value })
                        }
                        className="w-full rounded-2xl border border-white/10 bg-slate-900/60 p-3 text-white"
                        placeholder="90210"
                      />
                    </div>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <div className="space-y-2">
                      <label htmlFor="years" className="text-white">
                        Years of income replacement
                      </label>
                      <input
                        id="years"
                        type="number"
                        min={5}
                        max={20}
                        value={calc.years}
                        onChange={(e) =>
                          setCalc({ ...calc, years: Number(e.target.value || 0) })
                        }
                        className="w-full rounded-2xl border border-white/10 bg-slate-900/60 p-3 text-white"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="term" className="text-white">
                        Term
                      </label>
                      <select
                        id="term"
                        value={calc.term}
                        onChange={(e) =>
                          setCalc({ ...calc, term: Number(e.target.value) })
                        }
                        className="w-full rounded-2xl border border-white/10 bg-slate-900/60 p-3 text-white"
                      >
                        <option value={10}>10-year term</option>
                        <option value={20}>20-year term</option>
                        <option value={30}>30-year term</option>
                      </select>
                    </div>
                  </div>

                  <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-slate-900/50 p-4">
                    <div>
                      <div className="text-sm text-slate-300">Smoking status</div>
                      <div className="text-base text-white">
                        {calc.smoker ? "Smoker" : "Non-smoker"}
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={() => setCalc({ ...calc, smoker: !calc.smoker })}
                      className="rounded-2xl border border-white/15 bg-transparent px-4 py-2 text-white hover:bg-white/10"
                    >
                      Switch
                    </button>
                  </div>

                  <div className="rounded-[1.75rem] border border-cyan-400/20 bg-gradient-to-br from-cyan-400/10 to-emerald-400/10 p-5">
                    <div className="grid gap-5 sm:grid-cols-2">
                      <div>
                        <div className="text-sm text-slate-300">
                          Suggested coverage
                        </div>
                        <div className="mt-2 text-3xl font-semibold text-white">
                          ${suggestedCoverage.toLocaleString()}
                        </div>
                        <div className="mt-2 text-sm leading-6 text-slate-300">
                          Based on income replacement, debt, and dependent support.
                        </div>
                      </div>

                      <div>
                        <div className="text-sm text-slate-300">
                          Estimated monthly range
                        </div>
                        <div className="mt-2 text-3xl font-semibold text-white">
                          ${monthlyEstimate}/mo
                        </div>
                        <div className="mt-2 text-sm leading-6 text-slate-300">
                          A clean estimate intended to encourage the next step, not
                          overwhelm the visitor.
                        </div>
                      </div>
                    </div>

                    <div className="mt-5">
                      <div className="mb-2 flex items-center justify-between text-sm text-slate-300">
                        <span>Fit confidence</span>
                        <span>{confidenceScore}%</span>
                      </div>
                      <div className="h-2 w-full rounded bg-white/10">
                        <div
                          className="h-2 rounded bg-emerald-400"
                          style={{ width: `${confidenceScore}%` }}
                        />
                      </div>
                    </div>

                    <div className="mt-5 flex flex-wrap gap-3">
                      <button
                        type="submit"
                        className="rounded-2xl bg-white px-4 py-2 text-slate-950 hover:bg-slate-100"
                      >
                        Get My Personalized Quote
                      </button>

                      <button
                        type="button"
                        className="rounded-2xl border border-white/20 bg-transparent px-4 py-2 text-white hover:bg-white/10"
                      >
                        Talk to an advisor
                      </button>
                    </div>

                    {submitted && (
                      <div className="mt-4 rounded-2xl border border-emerald-400/20 bg-emerald-400/10 p-4 text-sm text-emerald-200">
                        Thanks — your estimate request was captured. Next step:
                        connect this form to email, Google Sheets, or a CRM.
                      </div>
                    )}
                  </div>
                </form>
              </div>
            </Card>
          </motion.div>
        </section>

        <section id="why-life-insurance" className="mx-auto max-w-7xl px-6 py-10">
          <div className="mb-8 max-w-2xl">
            <Pill className="mb-4">Why it resonates</Pill>
            <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Built to create reassurance, seriousness, and desire.
            </h2>
            <p className="mt-4 leading-7 text-slate-300">
              This concept does not look like a cheap quote page. It feels like a
              high-trust financial brand. The design language is cinematic, clean,
              and intentional so visitors associate the company with safety,
              intelligence, and modernity.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {[
              {
                icon: HeartHandshake,
                title: "Protect people you love",
                text: "Position the policy as emotional stability, not just a product.",
              },
              {
                icon: BadgeDollarSign,
                title: "Preserve financial order",
                text: "Show how coverage helps keep debts, lifestyle, and plans intact.",
              },
              {
                icon: Baby,
                title: "Support children and dependents",
                text: "Make the impact concrete by addressing family continuity.",
              },
              {
                icon: Home,
                title: "Keep the home secure",
                text: "Tie coverage to the most powerful household symbol: the home.",
              },
            ].map((item) => (
              <Card key={item.title}>
                <div className="p-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10">
                    <item.icon className="h-6 w-6 text-cyan-200" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    {item.text}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </section>

        <section id="policy-types" className="mx-auto max-w-7xl px-6 py-14">
          <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <Pill className="mb-4">Policy education</Pill>
              <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                Make policy types understandable and visually elegant.
              </h2>
            </div>
            <p className="max-w-xl leading-7 text-slate-300">
              People trust websites that simplify complexity without making them
              feel talked down to. This section should look editorial, premium, and
              structured.
            </p>
          </div>

          <div className="grid gap-5 lg:grid-cols-3">
            {[
              {
                title: "Term Life",
                badge: "Popular",
                text: "Often the clearest fit for income replacement, debt protection, and family stability during key working years.",
                bullets: [
                  "Lower entry cost",
                  "Set coverage period",
                  "Often easy to understand",
                ],
              },
              {
                title: "Whole Life",
                badge: "Permanent",
                text: "Designed for lifetime coverage with a more permanent structure and higher cost.",
                bullets: [
                  "Lifetime orientation",
                  "Structured permanence",
                  "May fit advanced planning",
                ],
              },
              {
                title: "Universal Life",
                badge: "Flexible",
                text: "Built for people looking for a more adjustable structure, depending on goals and policy design.",
                bullets: [
                  "Flexible structure",
                  "Long-term orientation",
                  "Requires careful review",
                ],
              },
            ].map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
              >
                <Card className="h-full">
                  <div className="p-6">
                    <div className="mb-4 flex items-center justify-between">
                      <Pill className="bg-cyan-400/15 text-cyan-200">
                        {item.badge}
                      </Pill>
                      <BarChart3 className="h-5 w-5 text-slate-400" />
                    </div>
                    <h3 className="text-xl text-white">{item.title}</h3>
                    <p className="mt-2 text-slate-300">{item.text}</p>

                    <div className="mt-4 space-y-3">
                      {item.bullets.map((bullet) => (
                        <div
                          key={bullet}
                          className="flex items-start gap-3 text-sm text-slate-200"
                        >
                          <CheckCircle2 className="mt-0.5 h-4 w-4 text-emerald-300" />
                          <span>{bullet}</span>
                        </div>
                      ))}
                    </div>

                    <button className="mt-6 inline-flex items-center rounded-2xl px-0 text-cyan-200 hover:text-cyan-100">
                      Compare this policy <ChevronRight className="ml-1 h-4 w-4" />
                    </button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        <section id="learning-center" className="mx-auto max-w-7xl px-6 py-14">
          <div className="mb-8 max-w-3xl">
            <Pill className="mb-4">Learning Center</Pill>
            <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Educational content that builds authority and search visibility.
            </h2>
            <p className="mt-4 leading-7 text-slate-300">
              This is where the brand starts behaving like a serious publisher.
              The visual quality should remain luxurious, while the writing stays
              practical, calm, and grounded.
            </p>
          </div>

          <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
            <Card>
              <div className="p-6">
                <h3 className="flex items-center gap-2 text-xl text-white">
                  <BookOpen className="h-5 w-5 text-cyan-200" />
                  Featured guides
                </h3>
                <p className="mt-2 text-slate-300">
                  A library of articles designed for SEO, trust, and conversion
                  support.
                </p>

                <div className="mt-4 space-y-3">
                  {articleCards.map((post) => (
                    <button
                      key={post.id}
                      onClick={() => setSelectedArticle(post.id)}
                      className={`w-full rounded-2xl border p-4 text-left transition ${
                        selectedArticle === post.id
                          ? "border-cyan-400/30 bg-cyan-400/10"
                          : "border-white/10 bg-slate-900/40 hover:bg-white/5"
                      }`}
                    >
                      <div className="mb-2 flex items-center justify-between gap-3">
                        <Pill>{post.category}</Pill>
                        <ArrowRight className="h-4 w-4 text-slate-400" />
                      </div>
                      <h3 className="text-base font-semibold text-white">
                        {post.title}
                      </h3>
                      <p className="mt-2 text-sm leading-6 text-slate-300">
                        {post.excerpt}
                      </p>
                    </button>
                  ))}
                </div>
              </div>
            </Card>

            <Card className="bg-gradient-to-br from-white/8 to-white/5">
              <div className="space-y-5 p-6">
                <div>
                  <h3 className="text-2xl text-white">{article.title}</h3>
                  <p className="mt-2 text-slate-300">{article.intro}</p>
                </div>

                {article.points.map(([heading, body]) => (
                  <div
                    key={heading}
                    className="rounded-2xl border border-white/10 bg-slate-900/40 p-4"
                  >
                    <h4 className="font-semibold text-white">{heading}</h4>
                    <p className="mt-2 text-sm leading-7 text-slate-300">{body}</p>
                  </div>
                ))}

                <div className="flex flex-wrap gap-3 pt-2">
                  <button className="rounded-2xl bg-white px-4 py-2 text-slate-950 hover:bg-slate-100">
                    Turn this into a landing page
                  </button>
                  <button className="rounded-2xl border border-white/15 bg-transparent px-4 py-2 text-white hover:bg-white/10">
                    Open article layout
                  </button>
                </div>
              </div>
            </Card>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-14">
          <div className="grid gap-5 lg:grid-cols-3">
            {[
              {
                icon: Clock3,
                title: "Fast-path journey",
                text: "A buyer should feel they can learn, estimate, and move forward without getting lost.",
              },
              {
                icon: Star,
                title: "Premium perception",
                text: "The site should feel like a serious brand, not a disposable lead form with insurance language on top.",
              },
              {
                icon: Briefcase,
                title: "Lead quality uplift",
                text: "Clear education and beautiful UX can improve trust and increase the quality of inquiries generated.",
              },
            ].map((item) => (
              <Card key={item.title}>
                <div className="p-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10">
                    <item.icon className="h-6 w-6 text-cyan-200" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-slate-300">
                    {item.text}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </section>

        <section id="faq" className="mx-auto max-w-5xl px-6 py-14">
          <div className="mb-8 text-center">
            <Pill className="mb-4">FAQ</Pill>
            <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Questions people ask before they trust a quote.
            </h2>
          </div>

          <Card>
            <div className="space-y-4 p-6 sm:p-8">
              {[
                [
                  "How accurate is the calculator?",
                  "It is designed as a first-pass estimate that helps visitors understand direction, not as a final underwriting commitment.",
                ],
                [
                  "Can I compare policy types here?",
                  "Yes. The site is built to educate first, compare clearly, and then guide the visitor toward the most relevant next step.",
                ],
                [
                  "Will the site feel trustworthy enough for high-intent users?",
                  "That is the core design goal. The visual identity, spacing, language, and editorial approach all work together to create trust.",
                ],
                [
                  "Can this become a multi-page website?",
                  "Yes. This concept is already structured for a homepage, calculator flow, article hub, policy comparison pages, and quote-intent landing pages.",
                ],
              ].map(([q, a]) => (
                <details
                  key={q}
                  className="rounded-2xl border border-white/10 bg-slate-900/40 p-4"
                >
                  <summary className="cursor-pointer list-none text-left text-white">
                    {q}
                  </summary>
                  <p className="mt-3 text-slate-300">{a}</p>
                </details>
              ))}
            </div>
          </Card>
        </section>

        <section className="mx-auto max-w-7xl px-6 pb-20 pt-8">
          <Card className="overflow-hidden bg-gradient-to-r from-cyan-400/15 via-white/5 to-emerald-400/15">
            <div className="grid items-center gap-8 p-8 sm:p-10 lg:grid-cols-[1fr_auto] lg:p-12">
              <div>
                <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                  Ready to turn this into your real brand site?
                </h2>
                <p className="mt-4 max-w-2xl leading-7 text-slate-200">
                  This concept is ready to evolve into a full production website
                  with custom branding, quote flow, educational article templates,
                  lead capture, and SEO-ready page architecture.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <button className="rounded-2xl bg-white px-6 py-3 text-slate-950 hover:bg-slate-100">
                  Build full site structure
                </button>
                <button className="rounded-2xl border border-white/20 bg-transparent px-6 py-3 text-white hover:bg-white/10">
                  Customize branding
                </button>
              </div>
            </div>
          </Card>
        </section>
      </main>
    </div>
  );
}
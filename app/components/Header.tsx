"use client";

import Link from "next/link";
import { useState } from "react";
import { ShieldCheck, Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Get a Quote", href: "/get-a-quote" },
  { label: "Calculator", href: "/#calculator" },
  { label: "Why Life Insurance", href: "/#why-life-insurance" },
  { label: "Policy Types", href: "/#policy-types" },
  { label: "Life Insurance Over 40", href: "/life-insurance-for-people-over-40" },
  { label: "Learning Center", href: "/learning-center" },
  { label: "FAQ", href: "/faq" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const host = typeof window !== "undefined" ? window.location.hostname : "";
  const isExperts = host.includes("lifeinsuranceexperts.org");

  return (
    <header
      className={`sticky top-0 z-50 border-b ${
        isExperts
          ? "border-slate-200 bg-white/85 backdrop-blur"
          : "border-white/10 bg-slate-950/80 backdrop-blur-xl"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6">
        <Link href="/" className="flex items-center gap-3">
          <div
            className={`flex h-11 w-11 items-center justify-center rounded-2xl shadow-lg ${
              isExperts
                ? "bg-gradient-to-br from-sky-400 to-teal-400 text-white shadow-sky-200"
                : "bg-gradient-to-br from-cyan-400 to-emerald-400 text-slate-950 shadow-cyan-500/20"
            }`}
          >
            <ShieldCheck className="h-6 w-6" />
          </div>

          <div>
            <div
              className={`text-base font-semibold tracking-tight sm:text-lg ${
                isExperts ? "text-slate-900" : "text-white"
              }`}
            >
              {isExperts ? "Life Insurance Experts" : "Covered Connect Life"}
            </div>

            <div
              className={`text-xs ${
                isExperts ? "text-slate-500" : "text-slate-400"
              }`}
            >
              {isExperts
                ? "Clear guidance. Smarter coverage decisions."
                : "Smart life insurance, connected to you"}
            </div>
          </div>
        </Link>

        <nav className="hidden items-center gap-5 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm whitespace-nowrap transition ${
                isExperts
                  ? "text-slate-600 hover:text-slate-950"
                  : "text-slate-300 hover:text-white"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/#calculator"
          className={`hidden rounded-xl px-3 py-1.5 text-sm font-medium ml-6 md:block ${
            isExperts
              ? "bg-slate-900 text-white hover:bg-slate-800"
              : "bg-white text-slate-950 hover:bg-slate-100"
          }`}
        >
          Get My Estimate
        </Link>

        <button
          className="md:hidden"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? (
            <X className={`h-7 w-7 ${isExperts ? "text-slate-900" : "text-white"}`} />
          ) : (
            <Menu className={`h-7 w-7 ${isExperts ? "text-slate-900" : "text-white"}`} />
          )}
        </button>
      </div>

      {mobileOpen && (
        <div
          className={`border-t px-6 py-5 md:hidden ${
            isExperts
              ? "border-slate-200 bg-white"
              : "border-white/10 bg-slate-950/95"
          }`}
        >
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-base ${
                  isExperts ? "text-slate-700" : "text-slate-200"
                }`}
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}

            <Link
              href="/#calculator"
              onClick={() => setMobileOpen(false)}
              className={`mt-2 rounded-2xl px-4 py-3 text-center font-semibold ${
                isExperts
                  ? "bg-slate-900 text-white"
                  : "bg-white text-slate-950"
              }`}
            >
              Get My Estimate
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
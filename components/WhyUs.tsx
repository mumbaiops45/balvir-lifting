"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const reasons = [
  {
    num: "01",
    title: "One Trusted Source for Many Brands",
    short: "Comprehensive Product Portfolio",
    desc: "BALVIR LIFTING is among the leading suppliers of electrical, electronics, mechanical, and hardware components applicable across a wide range of vertical transportation systems. Eliminate dealing with multiple vendor loops by routing your dynamic components requirements through a single streamlined procurement cycle.",
    metric: "Multi-Brand",
    metricSub: "Electrical · Electronics · Mechanical",
    tag: "Quality",
  },
  {
    num: "02",
    title: "Global and Indian Manufacturer Partnerships",
    short: "Sourced from Industry Leaders",
    desc: "We have built long-standing relationships with tier-one manufacturing organizations globally and domestically—including specialized brands like CEDES, MEMCO, Fermator, Wittur, KISWIRE, Toshiba, and Hitachi. This direct network gives our clients competitive priority access to premium components and upcoming technological revisions.",
    metric: "Global Network",
    metricSub: "Trusted OEM Alliances",
    tag: "Engineering",
  },
  {
    num: "03",
    title: "Genuine, Standards-Compliant Products",
    short: "Uncompromised Quality Controls",
    desc: "Every component delivered under our system undergoes structural validation to ensure absolute field safety, high operational longevity, and seamless integration with existing setups. We adhere strictly to industrial elevator and escalator codes, building durable client equity by focusing on reliability over margin.",
    metric: "Since 2014",
    metricSub: "Built on Core Reliability",
    tag: "Reliability",
  },
  {
    num: "04",
    title: "Stock and Support Across Mumbai and Key Metros",
    short: "Localized Hubs & Logistics Support",
    desc: "With a major operational warehouse node in Mumbai supported by strategic stock units in key commercial metros across India, we minimize fulfillment lead times. Our distributed logistics infrastructure ensures that urgent maintenance demands, project expansions, and custom components reach your site without friction.",
    metric: "Pan India+",
    metricSub: "Anchored in Mumbai Hubs",
    tag: "Service",
  },
  {
    num: "05",
    title: "Competitive Pricing with Timely Delivery",
    short: "Value-Driven Sourcing Solutions",
    desc: "Operating within high-velocity real estate and engineering infrastructure sectors, our optimized operational cost matrix maps high-grade market technology directly to your budgets. We maintain clear execution timelines, guaranteeing that competitive price metrics do not impact your baseline installation schedule.",
    metric: "Best Value",
    metricSub: "Optimized Costs & Dispatch",
    tag: "Value",
  },
];

const tagColors: Record<string, string> = {
  Quality:       "bg-blue-50 text-blue-600 border-blue-200",
  Engineering:   "bg-purple-50 text-purple-600 border-purple-200",
  Reliability:   "bg-amber-50 text-amber-600 border-amber-200",
  Service:       "bg-green-50 text-green-600 border-green-200",
  Value:         "bg-pink-50 text-pink-600 border-pink-200",
};

export default function WhyUs() {
  const sectionRef  = useRef<HTMLElement>(null);
  const headRef     = useRef<HTMLDivElement>(null);
  const listRef     = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState<number>(0);

  /* ── Row height animation ─────────────────── */
  const bodyRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    reasons.forEach((_, i) => {
      const el = bodyRefs.current[i];
      if (!el) return;
      if (i === active) {
        gsap.to(el, { height: "auto", opacity: 1, duration: 0.45, ease: "power3.out" });
      } else {
        gsap.to(el, { height: 0, opacity: 0, duration: 0.3, ease: "power2.in" });
      }
    });
  }, [active]);

  /* ── Scroll reveals ───────────────────────── */
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(headRef.current,
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.9, ease: "power3.out",
          scrollTrigger: { trigger: headRef.current, start: "top 85%" } }
      );
      gsap.fromTo(listRef.current?.children ?? [],
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, stagger: 0.08, ease: "power3.out",
          scrollTrigger: { trigger: listRef.current, start: "top 80%" } }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="bg-white relative overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px bg-gray-100" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* ── Top: heading ──────────────────────────── */}
        <div ref={headRef} className="grid lg:grid-cols-2 gap-12 items-end pt-24 pb-14 border-b border-gray-100">
          <div>
            <p className="text-[var(--primary)] text-[11px] font-bold uppercase tracking-[0.3em] mb-4">
              Why Balvir Lifting
            </p>
            <h2 className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-[1.02] tracking-tight">
              Trusted to<br />
              <span className="bg-gradient-to-r from-[var(--primary-light)] to-[var(--primary)] bg-clip-text text-transparent">Deliver.</span>
            </h2>
          </div>
          <div className="flex flex-col gap-4">
            <p className="text-gray-500 text-base leading-relaxed">
              We do not just supply products, we earn trust with every order. Dependable multi-brand sourcing, strong manufacturer partnerships, and quality you can rely on, all at prices that make sense for your project.
            </p>
          </div>
        </div>

        {/* ── Accordion list ────────────────────────── */}
        <div ref={listRef} className="divide-y divide-gray-100 pb-24">
          {reasons.map((r, i) => {
            const isOpen = active === i;
            return (
              <div key={r.num}
                className={`group transition-colors duration-300 ${isOpen ? "bg-white" : "hover:bg-gray-50/60"}`}
              >
                {/* ── Row header ── */}
                <div
                  className="grid grid-cols-[1fr_auto_44px] md:grid-cols-[80px_1fr_auto_44px] lg:grid-cols-[100px_1fr_240px_44px] items-center gap-4 py-6 lg:py-7 cursor-pointer"
                  onClick={() => setActive(isOpen ? -1 : i)}
                >

                  {/* Number */}
                  <div className={`hidden md:block text-4xl lg:text-5xl font-extrabold leading-none transition-colors duration-300 ${
                    isOpen ? "text-[var(--primary)]" : "text-gray-100 group-hover:text-gray-200"
                  }`}>
                    {r.num}
                  </div>

                  {/* Title + short */}
                  <div>
                    <div className="flex items-center gap-3 mb-1">
                      <h3 className={`text-xl lg:text-2xl font-extrabold tracking-tight transition-colors duration-300 ${
                        isOpen ? "text-[var(--primary)]" : "text-gray-900 group-hover:text-gray-700"
                      }`}>
                        {r.title}
                      </h3>
                      <span className={`hidden sm:inline-flex text-[10px] font-bold uppercase tracking-widest border px-2.5 py-1 ${tagColors[r.tag]}`}>
                        {r.tag}
                      </span>
                    </div>
                    <p className={`text-sm transition-colors duration-300 ${
                      isOpen ? "text-[var(--primary-light)]" : "text-gray-400"
                    }`}>
                      {r.short}
                    </p>
                  </div>

                  {/* Metric */}
                  <div className="hidden lg:block text-right">
                    <div className={`text-2xl font-extrabold transition-colors duration-300 ${
                      isOpen ? "text-[var(--primary)]" : "text-gray-300 group-hover:text-gray-400"
                    }`}>
                      {r.metric}
                    </div>
                    <div className="text-gray-400 text-[11px] mt-0.5 tracking-wide">{r.metricSub}</div>
                  </div>

                  {/* Toggle icon */}
                  <div className={`w-9 h-9 border flex items-center justify-center transition-all duration-300 shrink-0 ml-auto ${
                    isOpen
                      ? "border-[var(--primary)] bg-[var(--primary)] text-white rotate-45"
                      : "border-gray-200 text-gray-400 group-hover:border-gray-400"
                  }`}>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                  </div>
                </div>

                {/* ── Expandable body ── */}
                <div
                  ref={el => { bodyRefs.current[i] = el; }}
                  style={{ height: i === 0 ? "auto" : 0, overflow: "hidden", opacity: i === 0 ? 1 : 0 }}
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="grid lg:grid-cols-[100px_1fr_220px_44px] gap-4 pb-8">
                    {/* Primary Left Connecting Line */}
                    <div className="hidden lg:flex justify-center">
                      <div className="w-px bg-[var(--primary-light)]/30 mt-1" />
                    </div>

                    {/* Description */}
                    <div className="lg:pr-12">
                      <p className="text-gray-500 text-sm leading-relaxed mb-5">{r.desc}</p>
                      <div className="flex items-center gap-3">
                        <div className="h-px flex-1 bg-gray-100" />
                        <span className="text-[10px] text-gray-300 uppercase tracking-widest">Balvir Lifting Standard</span>
                      </div>
                    </div>

                    {/* Mobile metric (shown in body on mobile) */}
                    <div className="lg:hidden border border-[var(--primary-light)]/10 bg-[var(--primary-light)]/5 p-4 self-start">
                      <div className="text-2xl font-extrabold text-[var(--primary)]">{r.metric}</div>
                      <div className="text-[11px] text-gray-400 mt-0.5">{r.metricSub}</div>
                    </div>

                    {/* Desktop: stat card in expanded state */}
                    <div className="hidden lg:block" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
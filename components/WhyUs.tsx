"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const reasons = [
{
  num: "01",
  title: "Multi Brand Product Portfolio",
  short: "One trusted source for many brands.",
  desc: "BALVIR LIFTING is among the leading suppliers of multi brand electrical, electronics, mechanical and hardware products, applicable across a wide range of industries and applications. A single, dependable source for elevators and escalators accessories, wire ropes, LED lighting, cables and automation.",
  metric: "Multi Brand",
  metricSub: "Electrical · Electronics · Mechanical",
  tag: "Quality",
},
{
  num: "02",
  title: "Global Brand Partnerships",
  short: "Sourced from leaders across the world.",
  desc: "We have developed many long lasting relationships with top manufacturing and supplier companies in India and other parts of the world, including CEDES, MEMCO, Fermator, Wittur, KISWIRE, Toshiba and Hitachi, letting us respond to the exact demands of customers seeking the best quality and latest technology.",
  metric: "Global",
  metricSub: "Trusted Manufacturer Network",
  tag: "Engineering",
},
{
  num: "03",
  title: "Earn Trust With Business",
  short: "A simple principle we live by.",
  desc: "We have accumulated strong and healthy market trust by following one simple principle, 'Earn Trust with Business'. We are committed to providing our customers a professional experience in a demanding market, with nation building and customer satisfaction as our ultimate goal.",
  metric: "Since 2014",
  metricSub: "Built on Trust",
  tag: "Reliability",
},
{
  num: "04",
  title: "Pan India Supply & Support",
  short: "Stock and support, nationwide.",
  desc: "With channel partners holding a wide range of stock across New Delhi, Kolkata, Mumbai and Chennai, we serve elevator and escalator manufacturers, OEMs, users, consultants, contractors and EPCs on a pan India basis with competitive pricing and timely delivery.",
  metric: "Pan India",
  metricSub: "Stocked Across Key Metros",
  tag: "Service",
},
{
  num: "05",
  title: "Reliable & Affordable",
  short: "Best quality, latest tech, fair price.",
  desc: "In a very competitive industry, we source products that are reliable and affordable. Our focus is on delivering the best quality with the latest technology at prices that make sense, committed to providing products of best quality at best prices to the buyer.",
  metric: "Best Value",
  metricSub: "Quality at Fair Prices",
  tag: "Value",
},
];

const tagColors: Record<string, string> = {
  Quality:       "bg-blue-50 text-blue-600 border-blue-200",
  Engineering:   "bg-purple-50 text-purple-600 border-purple-200",
  Reliability:   "bg-amber-50 text-amber-600 border-amber-200",
  Service:       "bg-green-50 text-green-600 border-green-200",
  Value:         "bg-pink-50 text-pink-600 border-pink-200",
  Sustainability:"bg-teal-50 text-teal-600 border-teal-200",
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
            <p className="text-blue-600 text-[11px] font-bold uppercase tracking-[0.3em] mb-4">
              Why Balvir Lifting
            </p>
            <h2 className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-[1.02] tracking-tight">
              Trusted to<br />
              <span className="text-blue-gradient">Deliver.</span>
            </h2>
          </div>
          <div className="flex flex-col gap-4">
            <p className="text-gray-400 text-base leading-relaxed">
              {/* We don't just supply products — we earn trust through every transaction. Reliable
              multi-brand sourcing, strong global partnerships, and quality you can count on, at
              prices that make sense for your project. */}
            We do not just supply products, we earn trust through every transaction. Reliable multi brand sourcing, strong global partnerships, and quality you can count on, at prices that make sense for your project.
            </p>
            <div className="flex flex-wrap gap-3">
              {["Since 2014", "Multi Brand Supplier", "Pan India Network", "Greener & Safer"].map(s => (
                <span key={s}
                  className="text-xs font-semibold text-gray-500 border border-gray-200 px-4 py-2 bg-gray-50">
                  {s}
                </span>
              ))}
            </div>
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
                  className="grid grid-cols-[1fr_auto_44px] md:grid-cols-[80px_1fr_auto_44px] lg:grid-cols-[100px_1fr_220px_44px] items-center gap-4 py-6 lg:py-7 cursor-pointer"
                  onClick={() => setActive(isOpen ? -1 : i)}
                >

                  {/* Number */}
                  <div className={`hidden md:block text-4xl lg:text-5xl font-extrabold leading-none transition-colors duration-300 ${
                    isOpen ? "text-blue-600" : "text-gray-100 group-hover:text-gray-200"
                  }`}>
                    {r.num}
                  </div>

                  {/* Title + short */}
                  <div>
                    <div className={`flex items-center gap-3 mb-1`}>
                      <h3 className={`text-xl lg:text-2xl font-extrabold tracking-tight transition-colors duration-300 ${
                        isOpen ? "text-blue-600" : "text-gray-900 group-hover:text-gray-700"
                      }`}>
                        {r.title}
                      </h3>
                      <span className={`hidden sm:inline-flex text-[10px] font-bold uppercase tracking-widest border px-2.5 py-1 ${tagColors[r.tag]}`}>
                        {r.tag}
                      </span>
                    </div>
                    <p className={`text-sm transition-colors duration-300 ${
                      isOpen ? "text-blue-400" : "text-gray-400"
                    }`}>
                      {r.short}
                    </p>
                  </div>

                  {/* Metric */}
                  <div className="hidden lg:block text-right">
                    <div className={`text-2xl font-extrabold transition-colors duration-300 ${
                      isOpen ? "text-blue-600" : "text-gray-300 group-hover:text-gray-400"
                    }`}>
                      {r.metric}
                    </div>
                    <div className="text-gray-400 text-[11px] mt-0.5 tracking-wide">{r.metricSub}</div>
                  </div>

                  {/* Toggle icon */}
                  <div className={`w-9 h-9 border flex items-center justify-center transition-all duration-300 shrink-0 ml-auto ${
                    isOpen
                      ? "border-blue-600 bg-blue-600 text-white rotate-45"
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
                    {/* Red left bar */}
                    <div className="hidden lg:flex justify-center">
                      <div className="w-px bg-blue-200 mt-1" />
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
                    <div className="lg:hidden border border-blue-100 bg-blue-50 p-4 self-start">
                      <div className="text-2xl font-extrabold text-blue-600">{r.metric}</div>
                      <div className="text-[11px] text-gray-400 mt-0.5">{r.metricSub}</div>
                    </div>

                    {/* Desktop: stat card in expanded state */}
                    <div className="hidden lg:block">
                      <div className="border border-blue-100 bg-blue-50/50 p-5 h-full flex flex-col justify-center">
                        <div className="text-3xl font-extrabold text-blue-600 mb-1">{r.metric}</div>
                        <div className="text-xs text-gray-400 tracking-wide leading-tight">{r.metricSub}</div>
                        <div className="h-px bg-blue-200 mt-4" />
                      </div>
                    </div>
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
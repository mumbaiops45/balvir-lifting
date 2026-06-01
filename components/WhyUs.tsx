"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const reasons = [
  {
    num:         "01",
    title:       "Safety Beyond Compliance",
    short:       "Triple-redundant systems. Zero shortcuts.",
    desc:        "Every unit we build exceeds IS:14665 and EN 81 international standards. Triple-redundant braking, ARD auto-rescue, load-sensing, and overload protection are included as standard — not optional extras. Our in-house QA team inspects every installation before handover.",
    metric:      "EN 81 + IS:14665",
    metricSub:   "Standards Exceeded",
    tag:         "Quality",
  },
  {
    num:         "02",
    title:       "In-House Manufacturing",
    short:       "CNC precision. Zero outsourcing.",
    desc:        "We design, machine, and assemble in our own 40,000 sq. ft. facility. CNC-machined components, powder-coated cabin interiors, and proprietary VVVF controllers — every part engineered and owned by us, giving you full traceability and warranty coverage.",
    metric:      "Zero",
    metricSub:   "Outsourced Components",
    tag:         "Engineering",
  },
  {
    num:         "03",
    title:       "On-Time Delivery — Guaranteed",
    short:       "We commit. We deliver. Every time.",
    desc:        "Our digital project management system tracks every milestone in real-time. We publish delivery windows at contract signing and maintain a 98% on-time handover rate. If we miss a deadline, we absorb the liquidated damages — no arguments.",
    metric:      "98%",
    metricSub:   "On-Time Handover Rate",
    tag:         "Reliability",
  },
  {
    num:         "04",
    title:       "24 / 7 Breakdown Support",
    short:       "2-hour response. Pan-India network.",
    desc:        "Our 200+ engineers are stationed across 8 major cities. AMC clients get a guaranteed 2-hour on-site response — night, weekend, or public holiday. We track every call, every resolution. Silence is not an option when your lift is down.",
    metric:      "< 2 Hours",
    metricSub:   "Guaranteed Response Time",
    tag:         "Service",
  },
  {
    num:         "05",
    title:       "Fully Bespoke Cabin Design",
    short:       "Your vision. Our craftsmanship.",
    desc:        "Every lift we build is uniquely yours. From teak wood panels and marble flooring to brushed stainless steel and smart glass — our in-house designers and craftsmen create cabins that complement your building's identity and elevate the user experience.",
    metric:      "100%",
    metricSub:   "Customisable Interiors",
    tag:         "Design",
  },
  {
    num:         "06",
    title:       "30% Energy Savings — Proven",
    short:       "Regenerative drives that pay for themselves.",
    desc:        "Our VVVF drives and regenerative braking technology recover kinetic energy during descent and return it to the building grid. Third-party audits confirm an average 28–33% reduction in lift energy consumption — measurable savings that compound across the building's operational life.",
    metric:      "30%",
    metricSub:   "Avg. Energy Reduction",
    tag:         "Sustainability",
  },
];

const tagColors: Record<string, string> = {
  Quality:       "bg-blue-50 text-blue-600 border-blue-200",
  Engineering:   "bg-purple-50 text-purple-600 border-purple-200",
  Reliability:   "bg-amber-50 text-amber-600 border-amber-200",
  Service:       "bg-green-50 text-green-600 border-green-200",
  Design:        "bg-pink-50 text-pink-600 border-pink-200",
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
    <section ref={sectionRef} className="bg-white relative overflow-hidden font-jakarta">
      <div className="absolute top-0 inset-x-0 h-px bg-gray-100" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* ── Top: heading ──────────────────────────── */}
        <div ref={headRef} className="grid lg:grid-cols-2 gap-12 items-end pt-24 pb-14 border-b border-gray-100">
          <div>
            <p className="text-red-600 text-[11px] font-bold uppercase tracking-[0.3em] mb-4">
              Why Balvir Lifting
            </p>
            <h2 className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-[1.02] tracking-tight">
              Engineered to<br />
              <span className="text-red-gradient">Outperform.</span>
            </h2>
          </div>
          <div className="flex flex-col gap-4">
            <p className="text-gray-400 text-base leading-relaxed">
              Our competitors install lifts. We build lifetime partnerships — with engineering
              that lasts, service that responds, and quality you can see and feel every single day.
            </p>
            <div className="flex flex-wrap gap-3">
              {["3,000+ Installs", "25 Yrs Experience", "200+ Engineers", "8 Cities"].map(s => (
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
                className={`group cursor-pointer transition-colors duration-300 ${isOpen ? "bg-white" : "hover:bg-gray-50/60"}`}
                onClick={() => setActive(isOpen ? -1 : i)}
              >
                {/* ── Row header ── */}
                <div className="grid grid-cols-[80px_1fr_auto_44px] lg:grid-cols-[100px_1fr_220px_44px] items-center gap-4 py-6 lg:py-7">

                  {/* Number */}
                  <div className={`text-4xl lg:text-5xl font-extrabold leading-none transition-colors duration-300 ${
                    isOpen ? "text-red-600" : "text-gray-100 group-hover:text-gray-200"
                  }`}>
                    {r.num}
                  </div>

                  {/* Title + short */}
                  <div>
                    <div className={`flex items-center gap-3 mb-1`}>
                      <h3 className={`text-xl lg:text-2xl font-extrabold tracking-tight transition-colors duration-300 ${
                        isOpen ? "text-red-600" : "text-gray-900 group-hover:text-gray-700"
                      }`}>
                        {r.title}
                      </h3>
                      <span className={`hidden sm:inline-flex text-[10px] font-bold uppercase tracking-widest border px-2.5 py-1 ${tagColors[r.tag]}`}>
                        {r.tag}
                      </span>
                    </div>
                    <p className={`text-sm transition-colors duration-300 ${
                      isOpen ? "text-red-400" : "text-gray-400"
                    }`}>
                      {r.short}
                    </p>
                  </div>

                  {/* Metric */}
                  <div className="hidden lg:block text-right">
                    <div className={`text-2xl font-extrabold transition-colors duration-300 ${
                      isOpen ? "text-red-600" : "text-gray-300 group-hover:text-gray-400"
                    }`}>
                      {r.metric}
                    </div>
                    <div className="text-gray-400 text-[11px] mt-0.5 tracking-wide">{r.metricSub}</div>
                  </div>

                  {/* Toggle icon */}
                  <div className={`w-9 h-9 border flex items-center justify-center transition-all duration-300 shrink-0 ml-auto ${
                    isOpen
                      ? "border-red-600 bg-red-600 text-white rotate-45"
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
                >
                  <div className="grid lg:grid-cols-[100px_1fr_220px_44px] gap-4 pb-8">
                    {/* Red left bar */}
                    <div className="hidden lg:flex justify-center">
                      <div className="w-px bg-red-200 mt-1" />
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
                    <div className="lg:hidden border border-red-100 bg-red-50 p-4 self-start">
                      <div className="text-2xl font-extrabold text-red-600">{r.metric}</div>
                      <div className="text-[11px] text-gray-400 mt-0.5">{r.metricSub}</div>
                    </div>

                    {/* Desktop: stat card in expanded state */}
                    <div className="hidden lg:block">
                      <div className="border border-red-100 bg-red-50/50 p-5 h-full flex flex-col justify-center">
                        <div className="text-3xl font-extrabold text-red-600 mb-1">{r.metric}</div>
                        <div className="text-xs text-gray-400 tracking-wide leading-tight">{r.metricSub}</div>
                        <div className="h-px bg-red-200 mt-4" />
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

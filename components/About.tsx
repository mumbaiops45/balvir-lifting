"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const milestones = [
  { year: "1998", event: "Founded in New Delhi with a team of 4 engineers." },
  { year: "2005", event: "Expanded to 8 states. 500+ lifts commissioned." },
  { year: "2012", event: "ISO 9001 certification. In-house manufacturing launched." },
  { year: "2020", event: "National footprint. 2,500+ installations across India." },
  { year: "Today", event: "3,000+ lifts running. 200+ staff. 24/7 service network." },
];

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const leftRef    = useRef<HTMLDivElement>(null);
  const rightRef   = useRef<HTMLDivElement>(null);
  const lineRef    = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(leftRef.current,
        { x: -50, opacity: 0 },
        { x: 0, opacity: 1, duration: 1, ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 75%" } }
      );
      gsap.fromTo(rightRef.current,
        { x: 50, opacity: 0 },
        { x: 0, opacity: 1, duration: 1, ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 75%" } }
      );
      gsap.fromTo(lineRef.current,
        { scaleY: 0, transformOrigin: "top center" },
        { scaleY: 1, duration: 1.4, ease: "power3.out",
          scrollTrigger: { trigger: rightRef.current, start: "top 78%" } }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="section-pad bg-white relative overflow-hidden font-jakarta">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-red-600/20 to-transparent" />
      <div className="absolute bottom-0 inset-x-0 h-px bg-gray-100" />

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">

        {/* ── Left ─────────────────────────────────── */}
        <div ref={leftRef}>
          <p className="text-red-600 text-xs font-bold uppercase tracking-[0.25em] mb-4">Who We Are</p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight tracking-tight mb-6">
            India&apos;s Most Trusted<br />
            <span className="text-red-gradient">Lifting Partner</span>
          </h2>
          <div className="red-line w-24 mb-7" />

          <p className="text-gray-500 leading-relaxed mb-5">
            Balvir Lifting is a nationally recognised elevator engineering firm with over 25 years of
            experience. We design, manufacture, install, and maintain every type of vertical
            transportation system — from compact home lifts to heavy-duty industrial freight platforms.
          </p>
          <p className="text-gray-500 leading-relaxed mb-10">
            Our in-house manufacturing facility produces cabin interiors, drive systems, and control
            panels to exacting tolerances — ensuring every unit lasts decades, not years.
          </p>

          {/* Cert badges */}
          <div className="flex flex-wrap gap-3">
            {["ISO 9001:2015", "EN 81 Certified", "BIS Approved", "IS:14665"].map(c => (
              <span key={c}
                className="text-xs font-semibold text-red-600 border border-red-200 bg-red-50 px-4 py-2 tracking-wider">
                {c}
              </span>
            ))}
          </div>
        </div>

        {/* ── Right: Timeline ───────────────────────── */}
        <div ref={rightRef} className="relative pl-8">
          <div ref={lineRef}
            className="absolute left-0 top-2 bottom-2 w-px bg-gradient-to-b from-red-600 via-red-400/50 to-transparent" />

          <div className="flex flex-col gap-10">
            {milestones.map(m => (
              <div key={m.year} className="relative flex gap-5">
                <div className="absolute -left-[37px] top-1 w-3 h-3 rounded-full bg-red-600 shadow-[0_0_10px_rgba(200,16,32,0.5)] shrink-0" />
                <div>
                  <div className="text-red-600 font-extrabold text-sm tracking-widest mb-1">{m.year}</div>
                  <p className="text-gray-500 text-sm leading-relaxed">{m.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

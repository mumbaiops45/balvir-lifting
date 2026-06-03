"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const kiswireStats = [
  { value: "1945", label: "Established" },
  { value: "5,500", label: "Employees Worldwide" },
  { value: "USD 2.2B", label: "Annual Sales" },
  { value: "1.2M MT", label: "Annual Production" },
  { value: "80+",     label: "Countries Exported" },
  { value: "40",      label: "Global Locations" },
];

const craneOEMs = [
  "Kone Cranes (Finland)",
  "N.O.V. (USA)",
  "Doosan Cranes (Korea)",
  "ZPMC (China)",
  "NOELL Cranes (China)",
  "Kobelco Cranes (Japan)",
  "Tadano Cranes (Japan)",
  "XCMG (China)",
  "MacGregor (Norway)",
  "AP Cranes (India)",
  "URB Engineering (India)",
  "Electromech Material Handling (India)",
  "Sanghvi Movers Ltd (India)",
  "Reliance Industries Ltd (India)",
];

const standards = ["API", "DNV", "ABS", "BV", "LRS"];

export default function WireRopesSection() {
  const sectionRef  = useRef<HTMLElement>(null);
  const headRef     = useRef<HTMLDivElement>(null);
  const statsRef    = useRef<HTMLDivElement>(null);
  const parallaxRef = useRef<HTMLDivElement>(null);
  const rightRef    = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(parallaxRef.current, {
        yPercent: -15,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      });
      gsap.fromTo(headRef.current,
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.9, ease: "power3.out",
          scrollTrigger: { trigger: headRef.current, start: "top 85%" } }
      );
      gsap.fromTo(statsRef.current?.children ?? [],
        { y: 30, opacity: 0, scale: 0.95 },
        { y: 0, opacity: 1, scale: 1, duration: 0.5, stagger: 0.08, ease: "power3.out",
          clearProps: "transform,opacity",
          scrollTrigger: { trigger: statsRef.current, start: "top 80%" } }
      );
      gsap.fromTo(rightRef.current,
        { x: 50, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.9, ease: "power3.out",
          clearProps: "transform,opacity",
          scrollTrigger: { trigger: rightRef.current, start: "top 80%" } }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="section-pad bg-gray-50 relative overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px bg-gray-200" />
      <div className="absolute bottom-0 inset-x-0 h-px bg-gray-200" />
      <div className="absolute inset-0 grid-tex-light opacity-50 pointer-events-none" />

      {/* Decorative glow */}
      <div
        ref={parallaxRef}
        className="absolute -right-20 top-0 bottom-0 w-[30vw] bg-gradient-to-b from-blue-50/70 to-transparent pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative">

        {/* Header */}
        <div ref={headRef} className="mb-14">
          <p className="text-blue-600 text-[11px] font-bold uppercase tracking-[0.3em] mb-4">
            Wire Ropes — Shipping / Offshore / Construction
          </p>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight tracking-tight">
              KISWIRE Partnership —<br />
              <span className="text-blue-gradient">World&apos;s Largest Producer</span>
            </h2>
            <p className="text-gray-500 text-sm max-w-sm leading-relaxed">
              We are proud distributors of KISWIRE (South Korea) — the world&apos;s largest high
              carbon steel wire producer — for cranes, ports, oil &amp; gas, elevators,
              infrastructure and mining applications.
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">

          {/* Left — stats + standards */}
          <div>
            {/* KISWIRE Stats */}
            <div ref={statsRef} className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-10">
              {kiswireStats.map((s, i) => (
                <div key={i}
                  className="group border border-gray-200 bg-white p-5 hover:border-blue-300 hover:shadow-[0_6px_24px_rgba(26,79,196,0.08)] transition-all duration-300 relative overflow-hidden">
                  <div className="absolute left-0 right-0 top-0 h-0.5 bg-gradient-to-r from-blue-600 to-blue-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                  <div className="text-2xl font-extrabold text-blue-600 mb-1">{s.value}</div>
                  <div className="text-gray-500 text-[11px] tracking-wide">{s.label}</div>
                </div>
              ))}
            </div>

            {/* Quality Standards */}
            <div className="border border-gray-200 bg-white p-6 mb-6">
              <p className="text-gray-400 text-[10px] font-bold uppercase tracking-widest mb-4">
                Quality Standards &amp; Certifications
              </p>
              <div className="flex flex-wrap gap-2 mb-5">
                {standards.map(s => (
                  <span key={s}
                    className="text-xs text-gray-500 border border-gray-200 px-4 py-2 hover:border-blue-300 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200 cursor-default font-medium">
                    {s}
                  </span>
                ))}
              </div>
              <p className="text-gray-400 text-xs leading-relaxed">
                Products meet and often surpass the standards and quality laid down by internationally
                reputed organisations including API, DNV, ABS, BV and LRS.
              </p>
            </div>

            {/* Manufacturing locations */}
            <div className="flex items-start gap-4 border-l-2 border-blue-600 pl-5">
              <div>
                <p className="text-gray-800 text-sm font-semibold mb-1">Manufacturing Facilities</p>
                <p className="text-gray-500 text-xs leading-relaxed">
                  Spread throughout{" "}
                  <span className="text-gray-700 font-medium">
                    Europe, Japan, Asia and North America
                  </span>{" "}
                  in 40 locations — Malaysia, Indonesia, Vietnam, Singapore, Korea, Japan, USA,
                  Netherlands, Luxembourg, Germany, Hungary, China, Hong Kong, Thailand.
                </p>
              </div>
            </div>
          </div>

          {/* Right — OEM list */}
          <div ref={rightRef}>
            <div className="border border-gray-200 bg-gradient-to-b from-[var(--blue)] to-blue-500 p-7">
              <p className="text-gray-400 text-[10px] font-bold uppercase tracking-widest mb-6">
                KISWIRE — OEM Wire Rope Supplier To
              </p>
              <div className="grid gap-0">
                {craneOEMs.map((oem, i) => (
                  <div key={i}
                    className="flex items-center gap-3 py-2.5  group/item">
                    <div className="w-1.5 h-1.5 rounded-full bg-white  shrink-0" />
                    <span className="text-white/80 text-sm group-hover/item:text-white transition-colors">
                      {oem}
                    </span>
                  </div>
                ))}
                <p className="justify-self-end text-gray-300 text-xs mt-4 italic">
                  And many other reputed customers world-wide.
                </p>
              </div>
            </div>

            {/* Performance callout */}
            <div className="mt-5 bg-blue-600 p-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-white/5 -translate-y-1/2 translate-x-1/2 pointer-events-none" />
              <p className="text-blue-100 text-[10px] font-bold uppercase tracking-widest mb-2">
                Balvir Lifting — KISWIRE Partner
              </p>
              <p className="text-white font-bold text-lg mb-2">Unmatched Performance</p>
              <p className="text-white/75 text-sm leading-relaxed">
                Our customers are experiencing unmatched performance of KISWIRE Steel Wire Ropes
                resulting in overall increase in Operational Efficiency and Plant output. Stocked
                across New Delhi, Kolkata, Mumbai and Chennai for Pan India delivery.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

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
  { value: "80+", label: "Countries Exported" },
  { value: "40", label: "Global Locations" },
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

const standards = ["API (American Petroleum Institute)", "DNV", "ABS", "BV", "LRS"];

export default function WireRopesSection() {
  const sectionRef   = useRef<HTMLElement>(null);
  const headRef      = useRef<HTMLDivElement>(null);
  const statsRef     = useRef<HTMLDivElement>(null);
  const parallaxRef  = useRef<HTMLDivElement>(null);
  const rightRef     = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Parallax decorative element
      gsap.to(parallaxRef.current, {
        yPercent: -20,
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
          scrollTrigger: { trigger: rightRef.current, start: "top 80%" } }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="section-pad bg-gray-950 relative overflow-hidden">
      {/* Parallax glow */}
      <div
        ref={parallaxRef}
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[50rem] h-64 rounded-full bg-blue-600/10 blur-3xl pointer-events-none"
      />
      <div className="absolute inset-0 grid-tex-dark opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative">
        <div ref={headRef} className="mb-14">
          <p className="text-blue-400 text-[11px] font-bold uppercase tracking-[0.3em] mb-4">
            Wire Ropes for Shipping / Off-Shore / Construction
          </p>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight tracking-tight">
              KISWIRE Partnership —<br />
              <span className="text-blue-gradient">World&apos;s Largest Producer</span>
            </h2>
            <p className="text-white/40 text-sm max-w-sm leading-relaxed">
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
                <div key={i} className="border border-white/8 bg-white/3 p-5 hover:border-blue-600/40 transition-colors duration-300">
                  <div className="text-2xl font-extrabold text-white mb-1">{s.value}</div>
                  <div className="text-white/35 text-[11px] tracking-wide">{s.label}</div>
                </div>
              ))}
            </div>

            {/* Quality Standards */}
            <div className="border border-white/8 bg-white/3 p-6">
              <p className="text-white/40 text-[10px] font-bold uppercase tracking-widest mb-4">
                Quality Standards & Certifications
              </p>
              <div className="flex flex-wrap gap-2">
                {standards.map(s => (
                  <span key={s} className="text-xs text-white/60 border border-white/10 px-4 py-2 hover:border-blue-600/50 hover:text-white/90 transition-all cursor-default">
                    {s}
                  </span>
                ))}
              </div>
              <p className="text-white/30 text-xs mt-5 leading-relaxed">
                Products meet and often surpass the standards and quality laid down by internationally
                reputed organisations including API, DNV, ABS, BV and LRS.
              </p>
            </div>

            {/* Manufacturing locations note */}
            <div className="mt-6 flex items-start gap-4 border-l-2 border-blue-600 pl-5">
              <div>
                <p className="text-white/60 text-sm font-semibold mb-1">Manufacturing Facilities</p>
                <p className="text-white/35 text-xs leading-relaxed">
                  Spread throughout <span className="text-white/60 font-medium">Europe, Japan, Asia and North America</span> in
                  40 locations — Malaysia, Indonesia, Vietnam, Singapore, Korea, Japan, USA, Netherlands,
                  Luxembourg, Germany, Hungary, China, Hong Kong, Thailand.
                </p>
              </div>
            </div>
          </div>

          {/* Right — OEM list */}
          <div ref={rightRef}>
            <div className="border border-white/8 bg-white/3 p-7">
              <p className="text-white/40 text-[10px] font-bold uppercase tracking-widest mb-6">
                KISWIRE — OEM Wire Rope Supplier To
              </p>
              <div className="grid gap-2">
                {craneOEMs.map((oem, i) => (
                  <div key={i} className="flex items-center gap-3 py-2.5 border-b border-white/5 last:border-0">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                    <span className="text-white/55 text-sm hover:text-white/80 transition-colors">{oem}</span>
                  </div>
                ))}
                <p className="text-white/25 text-xs mt-3 italic">
                  And many other reputed customers world-wide.
                </p>
              </div>
            </div>

            <div className="mt-6 bg-blue-600 p-6">
              <p className="text-white font-bold text-lg mb-2">Unmatched Performance</p>
              <p className="text-white/80 text-sm leading-relaxed">
                Our customers are experiencing unmatched performance of Kiswire Steel Wire Ropes
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

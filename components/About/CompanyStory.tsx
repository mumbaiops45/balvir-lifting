"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const milestones = [
  {
    year: "2014",
    label: "The Beginning",
    desc: "Balvir Lifting (formerly Balvir Global Products) was established and registered in Kharghar, Navi Mumbai.",
  },
  {
    year: "Our Principle",
    label: "Earn Trust with Business",
    desc: "Built on a simple idea with an active focus on delivering greener, safer products for our fast-evolving industries and their end users.",
  },
  {
    year: "Growth",
    label: "Global Manufacturer Networks",
    desc: "Developed deep, long-lasting relationships with market-leading manufacturers and suppliers across India and overseas.",
  },
  {
    year: "Today",
    label: "Multi-Brand Leader",
    desc: "A trusted multi-brand partner supplying components for elevators, wire ropes, industrial lighting, cables, and automation across diverse fields.",
  },
];

export default function CompanyStory() {
  const sectionRef = useRef<HTMLElement>(null);
  const leftRef    = useRef<HTMLDivElement>(null);
  const rightRef   = useRef<HTMLDivElement>(null);
  const lineRef    = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(leftRef.current,
        { x: -50, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.9, ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 80%" } }
      );
      gsap.fromTo(rightRef.current,
        { x: 50, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.9, ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 80%" } }
      );
      gsap.fromTo(lineRef.current,
        { scaleY: 0 },
        { scaleY: 1, duration: 1.2, ease: "power3.out", transformOrigin: "top center",
          scrollTrigger: { trigger: rightRef.current, start: "top 75%" } }
      );
      gsap.fromTo(rightRef.current?.querySelectorAll(".milestone-item") ?? [],
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, stagger: 0.15, ease: "power3.out",
          scrollTrigger: { trigger: rightRef.current, start: "top 75%" } }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 md:py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          {/* Left — copy */}
          <div ref={leftRef}>
            <p className="text-[var(--primary)] text-[11px] font-bold uppercase tracking-[0.3em] mb-5">
              Our Journey
            </p>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight tracking-tight mb-7">
              A Company Built on<br />
              <span className="bg-gradient-to-r from-[var(--primary)] to-[var(--primary-light)] bg-clip-text text-transparent">Trust &amp; Quality</span>
            </h2>
            <div className="h-0.5 w-20 mb-8 bg-[var(--primary)]" />
            <p className="text-gray-500 text-base leading-relaxed mb-5">
              <strong className="text-gray-800">BALVIR LIFTING</strong> (formerly Balvir Global Products) was 
              established and registered in 2014, with its principal office operational out of Kharghar, Navi Mumbai.
            </p>
            <p className="text-gray-500 text-sm leading-relaxed mb-5">
              From day one, our corporate philosophy has centered heavily on providing <strong className="text-gray-700">GREENER &amp; SAFER</strong> solutions 
              to the industries we serve. This long-standing focus guides how we scale reliable technology throughout Indian industrial landscapes.
            </p>
            <p className="text-gray-500 text-sm leading-relaxed mb-10">
              By fostering valuable strategic alliances with leading manufacturing and supplier enterprises domestically and globally, we keep our supply ecosystem dynamic, highly stable, and commercialized at exact target-market parameters.
            </p>

            {/* Core principle card */}
            <div className="border-l-4 border-[var(--primary)] bg-[var(--primary-light)]/[0.06] px-7 py-6 rounded-r-sm">
              <p className="text-[var(--primary)] text-[10px] font-bold uppercase tracking-widest mb-2">Our Principle</p>
              <p className="text-gray-900 font-extrabold text-2xl leading-snug">
                &ldquo;Earn Trust<br />with Business&rdquo;
              </p>
            </div>
          </div>

          {/* Right — timeline */}
          <div ref={rightRef} className="relative">
            {/* Vertical line matching style tokens */}
            <div
              ref={lineRef}
              className="absolute left-[15px] top-3 bottom-3 w-px bg-gradient-to-b from-[var(--primary)] via-[var(--primary-light)]/50 to-transparent"
            />

            <div className="space-y-10 pl-10">
              {milestones.map((m, i) => (
                <div key={i} className="milestone-item relative">
                  {/* Timeline Node */}
                  <div className="absolute -left-[calc(2.5rem-4px)] top-1.5 w-3 h-3 rounded-full bg-[var(--primary)] shadow-[0_0_10px_rgba(var(--primary-rgb),0.3)]" />

                  <p className="text-[var(--primary)] text-[11px] font-bold uppercase tracking-[0.25em] mb-1">{m.year}</p>
                  <h3 className="text-gray-900 font-bold text-base mb-2">{m.label}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{m.desc}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
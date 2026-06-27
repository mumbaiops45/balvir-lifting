"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const milestones = [
  {
    year: "2014",
    event:
      "Balvir Lifting, formerly Balvir Global Products, was established and operates from Kharghar, Navi Mumbai."
  },
  {
    year: "Principle",
    event:
      "We have built strong, lasting trust in the market by following one simple principle: Earn Trust with Business."
  },
  {
    year: "Products",
    event:
      "We supply a wide range of multi-brand electrical, electronics, mechanical and hardware products, sourced from leading manufacturers in India and around the world."
  },
  {
    year: "Goal",
    event:
      "Our goal is straightforward: greener, safer products delivered at the right quality and the right price, every single time."
  }
];

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(leftRef.current,
        { x: -50, opacity: 0 },
        {
          x: 0, opacity: 1, duration: 1, ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 75%" }
        }
      );
      gsap.fromTo(rightRef.current,
        { x: 50, opacity: 0 },
        {
          x: 0, opacity: 1, duration: 1, ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 75%" }
        }
      );
      gsap.fromTo(lineRef.current,
        { scaleY: 0, transformOrigin: "top center" },
        {
          scaleY: 1, duration: 1.4, ease: "power3.out",
          scrollTrigger: { trigger: rightRef.current, start: "top 78%" }
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-20 bg-white relative overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[var(--primary)]/20 to-transparent" />
      <div className="absolute bottom-0 inset-x-0 h-px bg-gray-100" />

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">

        {/* ── Left ─────────────────────────────────── */}
        <div ref={leftRef}>
          <p className="text-[var(--primary)] text-xs font-bold uppercase tracking-[0.25em] mb-4">
            Company Profile
          </p>

          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight tracking-tight mb-6">
            A Leading Multi-Brand
            <br />
            <span className="bg-gradient-to-r from-[var(--primary-light)] to-[var(--primary)] bg-clip-text text-transparent">
              Industrial Products Supplier
            </span>
          </h2>

          <div className="h-1 w-24 bg-[var(--primary)] mb-7" />

          <p className="text-gray-500 leading-relaxed mb-5">
            Balvir Lifting, formerly Balvir Global Products, was established in 2014 and operates from Kharghar, Navi Mumbai. We have built strong, lasting trust in the market by following one simple principle: Earn Trust with Business.
          </p>

          <p className="text-gray-500 leading-relaxed mb-10">
            We supply a wide range of multi-brand electrical, electronics, mechanical and hardware products, sourced from leading manufacturers in India and around the world. Our goal is straightforward: greener, safer products delivered at the right quality and the right price, every single time.
          </p>

          <div className="flex flex-wrap gap-3">
            {[
              "Established 2014",
              "Formerly Balvir Global Products",
              "Multi-Brand Products",
              "Pan-India Supply"
            ].map((c) => (
              <span
                key={c}
                className="text-xs font-semibold text-[var(--primary)] border border-[var(--primary-light)]/20 bg-[var(--primary-light)]/5 px-4 py-2 tracking-wider rounded-sm"
              >
                {c}
              </span>
            ))}
          </div>
        </div>

        {/* ── Right: Timeline ───────────────────────── */}
        <div ref={rightRef} className="relative pl-8">
          <div 
            ref={lineRef}
            className="absolute left-0 top-2 bottom-2 w-px bg-gradient-to-b from-[var(--primary)] via-[var(--primary-light)]/50 to-transparent" 
          />

          <div className="flex flex-col gap-10">
            {milestones.map(m => (
              <div key={m.year} className="relative flex gap-5">
                <div className="absolute -left-[37px] top-1 w-3 h-3 rounded-full bg-[var(--primary)] shadow-[0_0_10px_rgba(177,49,36,0.5)] shrink-0" />
                <div>
                  <div className="text-[var(--primary)] font-extrabold text-sm tracking-widest mb-1">{m.year}</div>
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
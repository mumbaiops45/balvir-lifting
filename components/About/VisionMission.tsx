"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const cards = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>
    ),
    label: "Our Vision",
    title: "Preferred Partner in India",
    body: "To be recognised as the most preferred trading company for multi-brand electrical, electronics, mechanical and automation products in India.",
    accent: "bg-[var(--primary-light)]/[0.06] text-[var(--primary)] border-[var(--primary-light)]/20",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M3 21l18-18M3 21h7v-7M14 10V3h7" />
      </svg>
    ),
    label: "Our Goal",
    title: "Satisfaction & Progress",
    body: "Customer satisfaction and nation building. We are committed to giving every customer a professional, dependable experience in a demanding market, and to supplying the best quality at the best price.",
    accent: "bg-[var(--primary-light)]/[0.06] text-[var(--primary)] border-[var(--primary-light)]/20",
  },
];

export default function VisionMission() {
  const sectionRef = useRef<HTMLElement>(null);
  const headRef    = useRef<HTMLDivElement>(null);
  const cardsRef   = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(headRef.current,
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.9, ease: "power3.out",
          scrollTrigger: { trigger: headRef.current, start: "top 85%" } }
      );
      gsap.fromTo(cardsRef.current?.children ?? [],
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7, stagger: 0.15, ease: "power3.out",
          clearProps: "transform,opacity",
          scrollTrigger: { trigger: cardsRef.current, start: "top 80%" } }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 md:py-28 bg-gray-50 relative overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px bg-gray-200" />
      <div className="absolute bottom-0 inset-x-0 h-px bg-gray-200" />

      {/* Dynamic ambient background glow using the theme properties */}
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[40rem] h-48 rounded-full bg-[var(--primary-light)]/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div ref={headRef} className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-[var(--primary)] text-[11px] font-bold uppercase tracking-[0.3em] mb-5">
            What We Stand For
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight tracking-tight">
            Vision, Goals &amp;<br />
            <span className="bg-gradient-to-r from-[var(--primary)] to-[var(--primary-light)] bg-clip-text text-transparent">Core Purpose</span>
          </h2>
        </div>

        <div ref={cardsRef} className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {cards.map((c, i) => (
            <div
              key={i}
              className="group bg-white border border-gray-100 shadow-sm hover:shadow-[0_14px_44px_rgba(var(--primary-rgb),0.08)] hover:border-[var(--primary-light)]/30 p-8 transition-all duration-300 relative overflow-hidden rounded-sm"
            >
              {/* Dynamic top accent line using theme parameters */}
              <div className="absolute left-0 right-0 top-0 h-0.5 bg-gradient-to-r from-[var(--primary)] to-[var(--primary-light)] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

              <div className={`inline-flex items-center justify-center w-14 h-14 border ${c.accent} mb-6 rounded-xs`}>
                {c.icon}
              </div>

              <p className="text-[11px] font-bold uppercase tracking-widest text-gray-400 mb-2">{c.label}</p>
              <h3 className="text-gray-900 font-extrabold text-xl mb-4 group-hover:text-[var(--primary)] transition-colors duration-300 leading-snug">
                {c.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">{c.body}</p>
            </div>
          ))}
        </div>

        {/* Trust block banner configuration */}
        <div className="mt-16 max-w-5xl mx-auto border border-gray-200 bg-white p-7 flex flex-col md:flex-row md:items-center justify-between gap-6 rounded-sm">
          <div>
            <p className="text-gray-900 font-bold text-lg mb-1">We are committed to giving every customer a professional, dependable experience.</p>
            <p className="text-gray-500 text-sm">Supplying high-quality components at prices that make strategic commercial sense across India.</p>
          </div>
          <div className="flex flex-wrap gap-3 shrink-0">
            {["Since 2014", "Multi-Brand", "Pan India", "Greener & Safer"].map(t => (
              <span key={t} className="text-xs font-semibold text-gray-600 border border-gray-200 px-4 py-2 bg-gray-50 rounded-xs hover:border-[var(--primary-light)]/30 transition-colors cursor-default">
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    quote: "KISWIRE wire ropes sourced through Balvir Lifting have delivered unmatched performance on our crane fleet. Operational efficiency has improved significantly since switching to their supply.",
    name: "Rajiv Mehta", role: "Purchase Manager, AP Cranes India", init: "R",
  },
  {
    quote: "We specify CEDES light curtains and Fermator auto doors on every project. Balvir's pricing is competitive and their delivery across India has never let us down.",
    name: "Anita Sharma", role: "Consultant, Elevator Systems Advisory", init: "A",
  },
  {
    quote: "Their flat travelling cables and ARD units from Balvir are now our standard specification. Reliable stock availability in Mumbai and prompt response to bulk orders.",
    name: "Suresh Patel", role: "Procurement Head, Otis Elevator OEM Partner", init: "S",
  },
  {
    quote: "Balvir's multi brand portfolio is exactly what we need for EPC projects. One supplier for door sensors, cables, LED lighting and wire ropes, saving us significant sourcing effort.",
    name: "Karan Singhania",
    role: "Project Director, Infrastructure EPC Firm",
    init: "K",
  },
];

export default function Testimonials() {
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
        { y: 0, opacity: 1, duration: 0.7, stagger: 0.13, ease: "power3.out",
          clearProps: "transform,opacity",
          scrollTrigger: { trigger: cardsRef.current, start: "top 80%" } }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="section-pad bg-white relative overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px bg-gray-100" />

      <div className="max-w-7xl mx-auto px-6">
        <div ref={headRef} className="text-center mb-16">
          <p className="text-[var(--primary)] text-xs font-bold uppercase tracking-[0.25em] mb-4">Client Stories</p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight tracking-tight">
            What Our Clients <span className="bg-gradient-to-r from-[var(--primary-light)] to-[var(--primary)] bg-clip-text text-transparent">Say</span>
          </h2>
        </div>

        <div ref={cardsRef} className="grid md:grid-cols-2 gap-6">
          {testimonials.map(t => (
            <div key={t.name}
              className="group bg-white border border-gray-200 hover:border-[var(--primary-light)]/40 hover:shadow-[0_8px_40px_rgba(var(--primary-rgb,26,79,196),0.06)] p-8 transition-all duration-300 relative shadow-sm"
            >
              {/* Animated top line */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--primary)] to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />

              {/* Quote Graphic */}
              <div className="text-6xl font-serif text-[var(--primary-light)]/10 leading-none select-none mb-4">&ldquo;</div>
              <p className="text-gray-600 text-sm leading-relaxed mb-8 -mt-5">{t.quote}</p>

              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-[var(--primary)]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Identity Footer */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[var(--primary)] flex items-center justify-center text-white font-bold text-sm shrink-0">
                  {t.init}
                </div>
                <div>
                  <div className="text-gray-900 font-semibold text-sm">{t.name}</div>
                  <div className="text-gray-400 text-xs mt-0.5">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
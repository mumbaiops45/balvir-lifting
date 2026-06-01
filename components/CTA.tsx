"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useModal } from "@/context/ModalContext";

gsap.registerPlugin(ScrollTrigger);

export default function CTA() {
  const { toggle } = useModal();
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(contentRef.current,
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 80%" } }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-28 overflow-hidden"
      style={{ background: "linear-gradient(135deg, #880010 0%, #CC1020 45%, #990012 100%)" }}
    >
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.12) 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />
      <div className="absolute top-0 inset-x-0 h-px bg-white/15" />
      <div className="absolute bottom-0 inset-x-0 h-px bg-black/20" />

      <div className="relative max-w-5xl mx-auto px-6 text-center" ref={contentRef}>
        <p className="text-red-100/60 text-xs font-bold uppercase tracking-[0.3em] mb-5">
          Start Your Project Today
        </p>
        <h2 className="text-5xl md:text-6xl font-extrabold text-white leading-tight tracking-tight mb-6">
          Ready to Elevate<br />Your Building?
        </h2>
        <p className="text-white/55 text-lg max-w-xl mx-auto mb-10 leading-relaxed">
          Our engineers will survey your site, design the optimal system, and deliver a no-obligation quote within 48 hours.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <button onClick={toggle}
            className="inline-flex items-center gap-2 bg-white text-red-700 font-bold px-9 py-4 hover:bg-red-50 transition-all duration-300 hover:shadow-[0_8px_40px_rgba(0,0,0,0.3)] hover:-translate-y-0.5 tracking-wide text-sm">
            Get a Free Quote
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
          <a href="tel:+919819002726"
            className="inline-flex items-center gap-2 border-2 border-white/50 text-white font-bold px-9 py-4 hover:border-white hover:bg-white/10 transition-all duration-300 tracking-wide text-sm">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            +91 98190 02726
          </a>
        </div>
      </div>
    </section>
  );
}

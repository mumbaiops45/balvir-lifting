"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export default function ProductInquiryHero() {
  const sectionRef = useRef<HTMLElement>(null);
  const bgRef      = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Parallax background
      gsap.to(bgRef.current, {
        yPercent: 25,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      // Content entrance
      if (contentRef.current) {
        gsap.fromTo(
          contentRef.current.children,
          { y: 60, opacity: 0 },
          { y: 0, opacity: 1, duration: 1, stagger: 0.15, ease: "power3.out", delay: 0.4 }
        );
      }
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[65vh] flex items-end overflow-hidden bg-dark-950"
    >
      {/* Parallax BG */}
      <div
        ref={bgRef}
        className="absolute inset-0 bg-gradient-to-br from-dark-950 via-[#0e0608] to-dark-900"
      />
      
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/Contact/pixels-markus-winkler-1430818-4160128.jpg"
          alt="Product Procurement Assistance"
          fill
          priority
          className="object-cover object-right-top opacity-20"
        />
      </div>

      {/* Glow accents */}
      <div className="absolute bottom-0 right-1/3 w-[32rem] h-[32rem] rounded-full bg-blue-600/12 blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-48 h-48 rounded-full bg-blue-500/8 blur-2xl pointer-events-none" />

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 pb-20 pt-36 w-full">
        <div ref={contentRef} className="max-w-3xl">
          <p className="text-blue-400 text-[11px] font-bold uppercase tracking-[0.35em] mb-5 px-4 py-2 rounded-xl bg-blue-200/20 backdrop-blur-2xl inline-block">
            Product Sourcing
          </p>
          
          <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-[0.95] tracking-tight mb-7">
            Let&apos;s Find the<br />
            <span className="text-blue-gradient">Right Products for You</span>
          </h1>
          
          <p className="text-white/45 text-base md:text-lg leading-relaxed max-w-2xl">
            Have a requirement or a question? Reach out and our Navi Mumbai team will respond quickly to provide customized configurations, pricing, or verification details.
          </p>

          {/* Contact chips */}
          <div className="flex flex-wrap gap-4 mt-9">
            <a
              href="tel:+919819002726"
              className="flex items-center gap-2 border border-white/15 text-white/60 hover:text-white hover:border-white/30 text-sm font-medium px-5 py-2.5 transition-all duration-200"
            >
              <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              +91 98190 02726
            </a>
            <a
              href="mailto:kishore@balvir.in"
              className="flex items-center gap-2 border border-white/15 text-white/60 hover:text-white hover:border-white/30 text-sm font-medium px-5 py-2.5 transition-all duration-200"
            >
              <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              kishore@balvir.in
            </a>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}
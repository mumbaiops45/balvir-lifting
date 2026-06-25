"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export default function ProductsHero() {
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
      className="relative min-h-[75vh] flex items-end overflow-hidden bg-dark-950"
    >
      {/* Parallax BG */}
      <div
        ref={bgRef}
        className="absolute inset-0 bg-gradient-to-br from-[#040914] via-dark-900 to-[#0a0a0a]"
      />
      
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/Product/Product.jpg"
          alt="Balvir Lifting Product Spectrum"
          fill
          priority
          className="object-cover opacity-20"
        />
      </div>

      <div className="absolute inset-0 grid-tex-dark opacity-40 pointer-events-none" />

      {/* Blue glow accents */}
      <div className="absolute top-1/4 right-1/3 w-[36rem] h-[36rem] rounded-full bg-blue-600/12 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-64 h-64 rounded-full bg-blue-500/10 blur-2xl pointer-events-none" />

      {/* Decorative lines */}
      <div className="absolute inset-y-0 left-1/3 w-px bg-white/5 pointer-events-none" />
      <div className="absolute inset-y-0 right-1/3 w-px bg-white/5 pointer-events-none" />

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 pb-20 pt-36 w-full">
        <div ref={contentRef} className="max-w-3xl">
          <p className="text-blue-400 text-[11px] font-bold uppercase tracking-[0.35em] mb-5 px-4 py-2 rounded-xl bg-blue-200/20 backdrop-blur-2xl inline-block">
            Industrial Sourcing Catalog
          </p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-white leading-[0.95] tracking-tight mb-7">
            Our Complete<br />
            <span className="text-blue-gradient">Product Range</span>
          </h1>
          <p className="text-white/60 text-base md:text-lg leading-relaxed max-w-2xl">
            Multi-brand electrical, electronics, mechanical and hardware products for elevators, wire ropes, infrastructure and industrial applications. Browse by category below.
          </p>

          {/* Category badges */}
          <div className="flex flex-wrap gap-3 mt-9">
            {[
              "Elevators",
              "Wire Ropes",
              "Infrastructure",
              "Industrial Applications",
            ].map(b => (
              <span key={b} className="border border-white/10 text-white/50 text-xs font-medium px-4 py-2 bg-white/[0.02] backdrop-blur-sm">
                {b}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}
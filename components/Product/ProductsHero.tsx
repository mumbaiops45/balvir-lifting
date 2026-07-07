"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export default function ProductsHero() {
  const sectionRef = useRef<HTMLElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
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

      if (contentRef.current) {
        gsap.fromTo(
          contentRef.current.children,
          { y: 60, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            stagger: 0.15,
            ease: "power3.out",
            delay: 0.4,
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[75vh] flex items-end overflow-hidden"
    >
      {/* Parallax Background */}
      <div
        ref={bgRef}
        className="absolute inset-0"
        style={{ willChange: "transform" }}
      >
        <Image
          src="/Product/Product.jpg"
          alt="Balvir Lifting Product Spectrum"
          fill
          priority
          className="object-cover"
        />
      </div>

      {/* Overlays — same as Home Hero */}
           {/* Base wash */}
      <div className="absolute inset-0 bg-[var(--primary-light)]/50" />

      {/* Left-to-right readability gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-[var(--primary)] via-[var(--primary-light)]/30 to-transparent" />

      {/* Top + bottom cinematic vignette */}
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--primary-light)]/40 via-transparent to-[var(--primary-light)]/70" />

      {/* Decorative Vertical Lines */}
      <div className="absolute inset-y-0 left-1/3 w-px bg-white/5 pointer-events-none" />
      <div className="absolute inset-y-0 right-1/3 w-px bg-white/5 pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 pb-20 pt-36 w-full">
        <div ref={contentRef} className="max-w-3xl">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-white leading-[0.95] tracking-tight mb-6">
            Our Complete
            <br />
            <span className="text-[var(--primary-light)]">
              Product Range
            </span>
          </h1>

          <div className="w-16 h-[3px] bg-blue-600 mb-7" />

          <p className="text-white/70 text-base md:text-lg leading-relaxed max-w-2xl">
            Multi brand electrical, electronics, mechanical and hardware
            products for elevators, steel wire ropes, infrastructure and
            industrial applications. Browse our complete portfolio of trusted
            brands and genuine components.
          </p>

          {/* Category Cards */}
          <div className="flex flex-wrap gap-4 mt-10">
            {[
              { title: "Elevators", sub: "Accessories & Components" },
              { title: "Wire Ropes", sub: "Industrial Grade" },
              { title: "Infrastructure", sub: "Engineering Solutions" },
              { title: "Industrial", sub: "Mechanical Products" },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white/10 backdrop-blur-md border border-white/10 px-6 py-4 transition-all duration-300 hover:bg-white/15"
              >
                <div className="text-white font-bold text-sm">
                  {item.title}
                </div>
                <div className="text-white/60 text-xs uppercase tracking-wider mt-1">
                  {item.sub}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}
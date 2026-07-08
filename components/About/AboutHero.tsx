"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export default function AboutHero() {
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
      className="relative min-h-[70vh] flex items-end overflow-hidden"
    >
      {/* Parallax Background */}
      <div
        ref={bgRef}
        className="absolute inset-0"
        style={{ willChange: "transform" }}
      >
        <Image
          src="/About/About.jpg"
          alt="Balvir Lifting Facilities"
          fill
          priority
          className="object-cover"
        />
      </div>

      {/* ===== Overlays — primary-light only ===== */}

      {/* Base wash */}
      <div className="absolute inset-0 bg-[var(--primary-light)]/50" />

      {/* Left-to-right readability gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-[var(--primary)] via-[var(--primary-light)]/30 to-transparent" />

      {/* Top + bottom cinematic vignette */}
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--primary-light)]/40 via-transparent to-[var(--primary-light)]/70" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 pb-16 pt-32 w-full">
        <div ref={contentRef} className="max-w-3xl">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-white leading-[0.95] tracking-tight mb-6">
            Built on Trust,
            <br />
            <span className="text-[var(--primary-light)]">Since 2014</span>
          </h1>

          <div className="w-16 h-[3px] bg-white/80 mb-7" />

          <p className="text-white/80 text-base md:text-lg leading-relaxed max-w-xl">
            Founded in Navi Mumbai, Balvir Lifting earns trust with every order
            as a premier multi brand supplier of genuine engineering,
            electrical, electronics and mechanical components across Mumbai,
            Maharashtra and India.
          </p>

          {/* Stat Cards */}
          <div className="grid grid-cols-2 md:flex  gap-4 mt-10">
            {[
              { value: "2014", label: "Established" },
              { value: "Multi Brand", label: "Engineering Portfolio" },
              { value: "Pan India", label: "Reliable Supply" },
              { value: "Trust", label: "Built With Every Order" },
            ].map((item) => (
              <div
                key={item.value}
                className="bg-white/10 backdrop-blur-md border border-white/15 px-6 py-4 transition-all duration-300 hover:bg-white/20 hover:border-white/25"
              >
                <div className="text-xl font-bold text-white">
                  {item.value}
                </div>
                <div className="text-white/70 text-xs uppercase tracking-wider mt-1">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom fade into next section */}
      <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}
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
          {
            y: 60,
            opacity: 0,
          },
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

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50  to-transparent" />

      {/* Blue radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_50%,rgba(15,52,96,0.25),transparent_40%)]" />

      {/* Bottom cinematic overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/70" />

      {/* Angled top left white to black overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.6) 8%, rgba(255,255,255,0.3) 14%, rgba(0,0,0,0.15) 20%, rgba(0,0,0,0.35) 28%, rgba(0,0,0,0.5) 38%, transparent 55%)",
        }}
      />

      {/* Ambient glows */}
      <div className="absolute top-1/3 left-1/4 w-[32rem] h-[32rem] rounded-full bg-blue-600/15 blur-3xl pointer-events-none" />

      <div className="absolute bottom-0 right-1/4 w-72 h-72 rounded-full bg-blue-500/10 blur-3xl pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 pb-16 pt-32 w-full">
        <div ref={contentRef} className="max-w-3xl">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-white leading-[0.95] tracking-tight mb-6">
            Built on Trust,
            <br />
            <span className="text-[var(--primary-light)]">Since 2014</span>
          </h1>

          <div className="w-16 h-[3px] bg-blue-600 mb-7" />

          <p className="text-white/70 text-base md:text-lg leading-relaxed max-w-xl">
            Founded in Navi Mumbai, Balvir Lifting earns trust with every order
            as a premier multi brand supplier of genuine engineering,
            electrical, electronics and mechanical components across Mumbai,
            Maharashtra and India.
          </p>

          {/* Stat Cards */}
          <div className="flex flex-wrap gap-4 mt-10">
            {[
              {
                value: "2014",
                label: "Established",
              },
              {
                value: "Multi Brand",
                label: "Engineering Portfolio",
              },
              {
                value: "Pan India",
                label: "Reliable Supply",
              },
              {
                value: "Trust",
                label: "Built With Every Order",
              },
            ].map((item) => (
              <div
                key={item.value}
                className="bg-white/10 backdrop-blur-md border border-white/10 px-6 py-4 transition-all duration-300 hover:bg-white/15"
              >
                <div className="text-xl font-bold text-white">
                  {item.value}
                </div>
                <div className="text-white/60 text-xs uppercase tracking-wider mt-1">
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
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
      {/* Parallax BG layer */}
      <div
        ref={bgRef}
        className="absolute inset-0 bg-gradient-to-br from-dark-950 via-dark-900 to-[#1a0408]"
      />
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/About/About.jpg"
          alt="About Hero"
          fill
          priority
          className="object-cover opacity-20"
        />
      </div>


      {/* Red glow accents */}
      <div className="absolute top-1/3 left-1/4 w-[32rem] h-[32rem] rounded-full bg-blue-600/15 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 rounded-full bg-blue-500/10 blur-2xl pointer-events-none" />

     
      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 pb-20 pt-36 w-full">
        <div ref={contentRef} className="max-w-3xl">
          <p className="inline-block text-blue-400 text-[11px] font-bold uppercase tracking-[0.35em] mb-5 px-4 py-2 rounded-xl bg-blue-200/20 backdrop-blur-2xl">
            About Balvir Lifting
          </p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-white leading-[0.95] tracking-tight mb-7">
            Earning&nbsp;Trust<br />
            <span className="text-blue-gradient">Through&nbsp;Business</span>
          </h1>
          <p className="text-white/45 text-base md:text-lg leading-relaxed max-w-xl">
            Established 2014 in Navi Mumbai, Balvir Lifting is a leading multi-brand supplier of
            electrical, electronics, mechanical and hardware products for the elevator, escalator
            and industrial sectors across India.
          </p>

          {/* Stat chips */}
          <div className="flex flex-wrap gap-3 mt-9">
            {[
              { v: "2014", l: "Established" },
              { v: "Multi-Brand", l: "Product Portfolio" },
              { v: "Pan India", l: "Distribution" },
              { v: "Greener & Safer", l: "Our Promise" },
            ].map(s => (
              <div key={s.v} className="border border-white/10 px-5 py-2.5 backdrop-blur-sm">
                <div className="text-white font-bold text-sm">{s.v}</div>
                <div className="text-white/35 text-[11px] tracking-wide">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom fade to white */}
      <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}

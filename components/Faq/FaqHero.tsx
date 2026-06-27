"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export default function FAQHero() {
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
      className="relative min-h-[70vh] flex items-end overflow-hidden bg-dark-950"
    >
      {/* Parallax BG layer */}
      <div
        ref={bgRef}
        className="absolute inset-0 bg-gradient-to-br from-dark-950 via-dark-900 to-[#040d1a]"
      />
      
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/Faq/faq.jpg" // Update this asset path as needed
          alt="Balvir Lifting Help and Support Desk"
          fill
          priority
          className="object-cover opacity-15"
        />
      </div>

      {/* Blue glow accents */}
      <div className="absolute top-1/3 left-1/4 w-[32rem] h-[32rem] rounded-full bg-blue-600/15 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 rounded-full bg-blue-500/10 blur-2xl pointer-events-none" />

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 pb-16 pt-32 w-full">
        <div ref={contentRef} className="max-w-4xl">
   
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-white leading-[0.95] tracking-tight mb-6">
            Clear Answers for<br />
            <span className="text-[var(--primary-light)]">Your Procurement</span>
          </h1>

          <p className="text-white/60 text-base md:text-lg leading-relaxed max-w-2xl">
            Have questions about bulk orders, component authenticity, shipping timelines, or custom engineering quotes? Find straightforward answers below to help keep your operations running seamlessly.
          </p>

          {/* Quick Help Pillars */}
          <div className="flex flex-wrap gap-3 mt-8">
            {[
              { v: "Instant Clarity", l: "Ordering, TC & Documentation" },
              { v: "Pan-India Logistics", l: "Timelines & Delivery Terms" },
              { v: "RFQs & Billing", l: "Corporate Payments & Custom Quotes" },
              { v: "Live Support Available", l: "Mon - Sat (9:00 AM - 6:00 PM)" },
            ].map(s => (
              <div key={s.v} className="border border-white/10 px-5 py-2.5 backdrop-blur-sm bg-white/[0.02]">
                <div className="text-white font-bold text-sm">{s.v}</div>
                <div className="text-white/40 text-[11px] tracking-wide mt-0.5">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom fade to white (Matches your layout transition) */}
      <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}
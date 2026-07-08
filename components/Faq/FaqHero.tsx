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
          src="/Faq/faq.jpg"
          alt="Balvir Lifting Help and Support Desk"
          fill
          priority
          className="object-cover"
        />
      </div>

     {/* Base wash */}
<div className="absolute inset-0 bg-[var(--primary-light)]/60" />

{/* Left heavy → Right lighter */}
<div className="absolute inset-0 bg-gradient-to-r from-[var(--primary-light)] via-[var(--primary-light)]/60 to-[var(--primary)]/70" />

{/* Extra left darkness */}
<div className="absolute inset-0 bg-gradient-to-r from-[var(--primary-light] to-black" />

{/* Cinematic vignette */}
<div className="absolute inset-0 bg-gradient-to-t from-black/20  to-black/70" />
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 pb-16 pt-32 w-full">
        <div ref={contentRef} className="max-w-4xl">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-white leading-[0.95] tracking-tight mb-6">
            Clear Answers for
            <br />
            <span className="text-[var(--primary-light)]">
              Your Procurement
            </span>
          </h1>

          <div className="w-16 h-[3px] bg-blue-600 mb-7" />

          <p className="text-white/70 text-base md:text-lg leading-relaxed max-w-2xl mb-10">
            Have questions about bulk orders, product authenticity, shipping
            timelines or custom engineering quotes? Find straightforward
            answers to help you make confident purchasing decisions and keep
            your operations running smoothly.
          </p>

          {/* Help Cards */}
          <div className="grid grid-cols-2 md:flex  gap-4 mt-10">
            {[
              { title: "Instant Clarity", subtitle: "Ordering & Documentation" },
              { title: "Pan India Logistics", subtitle: "Delivery & Shipping" },
              { title: "RFQs & Billing", subtitle: "Corporate Quotes" },
              { title: "Live Support", subtitle: "Mon to Sat, 9 AM to 6 PM" },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white/10 backdrop-blur-md border border-white/10 px-6 py-4 transition-all duration-300 hover:bg-white/15"
              >
                <div className="text-white font-bold text-sm">
                  {item.title}
                </div>
                <div className="text-white/60 text-xs uppercase tracking-wider mt-1">
                  {item.subtitle}
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
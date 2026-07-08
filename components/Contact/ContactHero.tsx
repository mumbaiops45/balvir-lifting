"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export default function ProductInquiryHero() {
  const sectionRef = useRef<HTMLElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Parallax Background
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

      // Content Animation
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
      className="relative min-h-[65vh] flex items-end overflow-hidden"
    >
      {/* Parallax Background */}
      <div
        ref={bgRef}
        className="absolute inset-0"
        style={{ willChange: "transform" }}
      >
        <Image
          src="/Contact/pexels-markus-winkler-1430818-4160128.jpg"
          alt="Product Procurement Assistance"
          fill
          priority
          className="object-cover object-right-top"
        />
      </div>
          {/* Base wash */}
   {/* Base wash */}
<div className="absolute inset-0 bg-[var(--primary-light)]/60" />

{/* Left heavy → Right lighter */}
<div className="absolute inset-0 bg-gradient-to-r from-[var(--primary-light)] via-[var(--primary-light)]/60 to-[var(--primary)]/70" />

{/* Extra left darkness */}
<div className="absolute inset-0 bg-gradient-to-r from-[var(--primary-light] to-black" />

{/* Cinematic vignette */}
<div className="absolute inset-0 bg-gradient-to-t from-black/20  to-black/70" />
      {/* Angled Top Left Overlay */}
    
      {/* Ambient Glows */}
      <div className="absolute bottom-0 right-1/3 w-[32rem] h-[32rem] rounded-full bg-blue-600/15 blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-72 h-72 rounded-full bg-blue-500/10 blur-3xl pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 pb-20 pt-36 w-full">
        <div ref={contentRef} className="max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-[0.95] tracking-tight mb-6">
            Let&apos;s Find the
            <br />
            <span className="text-[var(--primary-light)]">
              Right Products <br /> for You
            </span>
          </h1>

          <div className="w-16 h-[3px] bg-blue-600 mb-7" />

          <p className="text-white/70 text-base md:text-lg leading-relaxed max-w-2xl mb-10">
            Have a requirement or a question? Reach out to our Navi Mumbai team
            for expert assistance, product recommendations, pricing, bulk
            quotations and genuine component verification.
          </p>

          {/* Contact Cards */}
          <div className="grid grid-cols-2 md:flex  gap-4 mt-10">
            <a
              href="tel:+919819002726"
              className="bg-white/10 backdrop-blur-md border border-white/10 px-6 py-4 hover:bg-white/15 transition-all duration-300"
            >
              <div className="text-white font-bold text-sm">
                +91 98190 02726
              </div>
              <div className="text-white/60 text-xs uppercase tracking-wider mt-1">
                Call Our Team
              </div>
            </a>

            <a
              href="mailto:kishore@balvir.in"
              className="bg-white/10 backdrop-blur-md border border-white/10 px-6 py-4 hover:bg-white/15 transition-all duration-300"
            >
              <div className="text-white font-bold text-sm">
                kishore@balvir.in
              </div>
              <div className="text-white/60 text-xs uppercase tracking-wider mt-1">
                Email Us
              </div>
            </a>

            <div className="bg-white/10 backdrop-blur-md border border-white/10 px-6 py-4">
              <div className="text-white font-bold text-sm">
                Quick Response
              </div>
              <div className="text-white/60 text-xs uppercase tracking-wider mt-1">
                Within 24 Hours
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-md border border-white/10 px-6 py-4">
              <div className="text-white font-bold text-sm">
                Bulk Orders
              </div>
              <div className="text-white/60 text-xs uppercase tracking-wider mt-1">
                PAN India Supply
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}
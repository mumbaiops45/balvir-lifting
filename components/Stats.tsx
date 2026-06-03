"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { value: 500, suffix: "+", label: "Product Variants", sub: "Across all categories" },
  { value: 25, suffix: "+", label: "Years Experience", sub: "Since 1998" },
  { value: 200, suffix: "+", label: "Engineers & Technicians", sub: "Pan-India" },
  { value: 98, suffix: "%", label: "Client Retention Rate", sub: "Year on year" },
];

export default function Stats() {
  const sectionRef = useRef<HTMLElement>(null);
  const numRefs = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Container reveal
      gsap.fromTo(sectionRef.current?.querySelectorAll(".stat-item") ?? [],
        { y: 40, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.7, stagger: 0.12, ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 80%" }
        }
      );

      // Number counters
      stats.forEach((s, i) => {
        const el = numRefs.current[i];
        if (!el) return;
        const counter = { val: 0 };
        gsap.to(counter, {
          val: s.value,
          duration: 2.2,
          ease: "power2.out",
          onUpdate: () => { el.textContent = Math.round(counter.val).toLocaleString(); },
          scrollTrigger: { trigger: sectionRef.current, start: "top 80%", once: true },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden py-32"

    >


      <div className="absolute inset-0 w-full h-auto overflow-hidden">
        <Image
          src="/statbg.jpg"
          alt="Balvir Lifting"
          fill
          className="object-cover"
          priority
        />
      </div>
      <div className="absolute inset-0 bg-[var(--blue-bright)] opacity-40" />
      <div className="absolute inset-0 bg-black opacity-40" />

      <div className="relative max-w-7xl mx-auto px-6">
      

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-0 divide-x divide-y divide-white/5">
          {stats.map((s, i) => (
            <div key={s.label} className="stat-item px-10 py-8 text-center">
              <div className="flex items-end justify-center gap-1 mb-2">
                <span
                  ref={el => { numRefs.current[i] = el; }}
                  className="text-5xl md:text-6xl font-extrabold text-white leading-none"
                >
                  0
                </span>
                <span className="text-4xl font-extrabold text-blue-500 leading-none pb-1">{s.suffix}</span>
              </div>
              <div className="text-white font-semibold text-sm mb-1">{s.label}</div>
              <div className="text-white/30 text-xs tracking-wider uppercase">{s.sub}</div>
            </div>
          ))}
        </div>

        <div className="text-center mt-6">
        
          <Link
            href="/products"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold px-7 py-3 rounded-full transition-colors duration-200"
          >
            View All Products
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}

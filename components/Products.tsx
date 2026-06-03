"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const categories = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
        <rect x="3" y="2" width="18" height="20" rx="2"/>
        <path d="M9 12l3-3 3 3"/><path d="M9 16l3 3 3-3"/>
        <line x1="12" y1="9" x2="12" y2="15"/>
      </svg>
    ),
    title: "Elevators & Escalators Accessories",
    count: "7 Products",
    items: [
      "Infra Red Door Sensors",
      "Auto Door & Mechanism",
      "ARD / UPS",
      "VFD Elevator Drives",
      "Flat Travelling Cables",
      "Wireless / Wired CCTV",
      "Voice Announcement System",
    ],
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/>
        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>
      </svg>
    ),
    title: "Steel Wire Ropes",
    count: "3 Categories",
    items: [
     "Elevator Ropes, IS:2365",
      "Offshore & Shipping Ropes",
      "Construction & Cranes",
  "KISWIRE, Usha Martin, Bedmutha",
    ],
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
        <line x1="9" y1="18" x2="15" y2="18"/><line x1="10" y1="22" x2="14" y2="22"/>
        <path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5A4.61 4.61 0 0 1 8.91 14"/>
      </svg>
    ),
    title: "LED Lighting & Elevator AC",
    count: "4 Products",
    items: [
      "Round LED Panels (SMD / COB)",
   "5 W to 7 W Aluminium Housing",
      "Warm White & White Variants",
      "Elevator Air Conditioning",
    ],
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
        <path d="M3 6h18M3 10h18M3 14h18M3 18h18"/>
      </svg>
    ),
    title: "Cables & Wires",
    count: "5 Products",
    items: [
      "Flat Travelling Cables (4–24 Core)",
      "Shielded Multi-Core Cables",
      "CCTV & Multimedia Cables",
      "Industrial Cables & Wires",
    ],
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
        <rect x="2" y="2" width="20" height="20" rx="2"/>
        <circle cx="12" cy="12" r="4"/>
        <path d="M12 8v1M12 15v1M8 12h1M15 12h1"/>
      </svg>
    ),
    title: "Industrial Automation & Analytical",
   count: "Multi Brand",
    items: [
      "Industrial Automation Products",
      "Analytical Instruments",
      "Control & Monitoring Systems",
      "Process Equipment",
    ],
  },
];

const highlights = ["Pan India Delivery", "Multi-Brand Portfolio", "Est. 2014", "Global Sourcing"];

export default function Products() {
  const sectionRef = useRef<HTMLElement>(null);
  const headRef    = useRef<HTMLDivElement>(null);
  const gridRef    = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(headRef.current,
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.9, ease: "power3.out",
          scrollTrigger: { trigger: headRef.current, start: "top 85%" } }
      );
      gsap.fromTo(gridRef.current?.children ?? [],
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: "power3.out",
          stagger: { amount: 0.45 },
          clearProps: "transform,opacity",
          scrollTrigger: { trigger: gridRef.current, start: "top 80%" } }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="products"
      ref={sectionRef}
      className="section-pad relative overflow-hidden bg-white"
    >
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-blue-600/30 to-transparent" />
      <div className="absolute bottom-0 inset-x-0 h-px bg-gray-100" />
      <div className="absolute inset-0 grid-tex-light opacity-50 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative">

        {/* Header */}
        <div ref={headRef} className="mb-14 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <p className="text-blue-600 text-xs font-bold uppercase tracking-[0.25em] mb-4">
              Our Products
            </p>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight tracking-tight">
              Complete Product
              <br />
              <span className="text-blue-gradient">Range Overview</span>
            </h2>
            <div className="blue-line w-24 mt-6" />
          </div>
          <p className="text-gray-500 max-w-sm text-sm leading-relaxed">
            Five core product segments, elevator accessories, steel wire ropes, LED lighting,
cables and industrial automation, from trusted global manufacturers.
          </p>
        </div>

        {/* Category grid: 5 cards + 1 CTA = 3 rows × 2 cols */}
        <div ref={gridRef} className="grid lg:grid-cols-2 gap-4">

          {categories.map((cat, i) => (
            <div
              key={i}
              className="group flex overflow-hidden border border-gray-200 hover:border-blue-300 hover:shadow-[0_8px_32px_rgba(26,79,196,0.10)] transition-all duration-300"
            >
              {/* Left blue icon panel */}
              <div className="w-[72px] shrink-0 bg-blue-600 group-hover:bg-blue-500 transition-colors duration-300 flex flex-col items-center justify-center gap-2.5 px-3 py-5">
                <div className="text-white">{cat.icon}</div>
                <span className="text-[8px] font-bold text-blue-200 uppercase tracking-widest text-center leading-tight">
                  {cat.count}
                </span>
              </div>

              {/* Right content */}
              <div className="flex-1 bg-white p-5 min-w-0">
                <h3 className="text-gray-900 font-bold text-sm mb-3 leading-snug group-hover:text-blue-600 transition-colors duration-300">
                  {cat.title}
                </h3>
                <div className="flex flex-wrap gap-1.5">
                  {cat.items.map((item, j) => (
                    <span
                      key={j}
                      className="text-[11px] text-gray-400 border border-gray-200 px-2.5 py-0.5 group-hover:border-blue-200 group-hover:text-blue-500 transition-all duration-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}

          {/* 6th slot — CTA card */}
          <Link href="/products" className="group flex items-center justify-between border border-blue-200 bg-blue-50 hover:bg-blue-600 hover:border-blue-600 transition-all duration-300 p-6 cursor-pointer">
            <div>
              <p className="text-blue-600 group-hover:text-blue-200 text-[10px] font-bold uppercase tracking-[0.2em] mb-2 transition-colors">
                View Full Catalogue
              </p>
              <p className="text-gray-900 group-hover:text-white font-extrabold text-lg leading-tight transition-colors">
                Explore All Products
              </p>
              <p className="text-gray-500 group-hover:text-blue-200 text-xs mt-1 transition-colors">
                FY 2026 – 27 · Pan India
              </p>
            </div>
            <div className="w-11 h-11 border border-blue-300 group-hover:border-white flex items-center justify-center transition-all duration-300 shrink-0">
              <svg className="w-4 h-4 text-blue-600 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </div>
          </Link>
        </div>

        {/* Bottom strip */}
        <div className="mt-10 pt-8 border-t border-gray-100 flex flex-wrap items-center gap-x-8 gap-y-3">
          {highlights.map((tag) => (
            <div key={tag} className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-blue-600" />
              <span className="text-xs text-gray-500 font-medium">{tag}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

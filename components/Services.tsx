"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    num: "01",
    title: "Elevator & Escalator Accessories",
    desc: "Door sensors, auto doors, ARD/UPS, VFD drives, travelling cables, CCTV and voice announcement systems.",
    tags: ["Door Sensors", "Auto Doors", "ARD/UPS", "VFD Drives", "Travelling Cables", "CCTV & Voice Systems"],
  },
  {
    num: "02",
    title: "Steel Wire Ropes",
    desc: "Elevator, offshore, shipping and construction ropes conforming to IS:2365 and global standards.",
    tags: ["Elevator", "Offshore", "Shipping", "Construction", "IS:2365", "Global Standards"],
  },
  {
    num: "03",
    title: "LED Lighting & Elevator AC",
    desc: "Round LED panels (SMD/COB), aluminium housing, plus programmable elevator air conditioning.",
    tags: ["Round LED Panels", "SMD / COB", "Aluminium Housing", "Elevator AC", "Programmable Systems"],
  },
  {
    num: "04",
    title: "Cables & Wires",
    desc: "Flat travelling cables, shielded multi-core, CCTV and industrial cabling.",
    tags: ["Flat Travelling Cables", "Shielded Multi-Core", "CCTV Cabling", "Industrial Wires"],
  },
  {
    num: "05",
    title: "Industrial Automation & Analytical",
    desc: "Automation products, control and monitoring systems, analytical instruments.",
    tags: ["Automation Products", "Control Systems", "Monitoring Systems", "Analytical Instruments"],
  },
];

export default function Services() {
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
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7, ease: "power3.out",
          stagger: { amount: 0.5 },
          clearProps: "transform,opacity",
          scrollTrigger: { trigger: gridRef.current, start: "top 80%" } }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="services" ref={sectionRef} className="section-pad bg-gray-50 relative overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px bg-gray-200" />
      <div className="absolute bottom-0 inset-x-0 h-px bg-gray-200" />

      <div className="max-w-7xl mx-auto px-6">
        <div
          ref={headRef}
          className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8"
        >
          <div>
            <p className="text-blue-600 text-xs font-bold uppercase tracking-[0.25em] mb-4">
              Our Products
            </p>

            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight tracking-tight">
              Everything Your Elevator
              <br />
              <span className="text-blue-gradient">
                &amp; Industrial Projects Need
              </span>
            </h2>
          </div>

          <p className="text-gray-400 max-w-sm text-sm leading-relaxed">
            Five core segments, sourced from trusted global and Indian brands, supplied under one roof.
          </p>
        </div>

        <div ref={gridRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-200">
          {services.map(s => (
            <div key={s.num}
              className="group bg-white hover:bg-blue-50 p-8 transition-colors duration-300 relative overflow-hidden cursor-pointer">
              
              {/* Hover left border */}
              <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-blue-600 scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-bottom" />

              <div className="text-5xl font-extrabold text-gray-100 group-hover:text-blue-100 transition-colors duration-300 leading-none mb-4 select-none">
                {s.num}
              </div>
              <h3 className="text-gray-900 font-bold text-xl mb-3 group-hover:text-blue-600 transition-colors duration-300">
                {s.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-6">{s.desc}</p>
              <div className="flex flex-wrap gap-2">
                {s.tags.map(t => (
                  <span key={t}
                    className="text-[11px] text-gray-400 border border-gray-200 px-3 py-1 group-hover:border-blue-300 group-hover:text-blue-500 transition-all duration-300">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}

          {/* 6th Grid Item: CTA (Without Number) */}
          <div className="group bg-blue-600 hover:bg-blue-700 p-8 transition-colors duration-300 relative overflow-hidden cursor-pointer flex flex-col justify-end min-h-[250px]">
            <div className="absolute right-0 top-0 p-8 opacity-10 text-white select-none pointer-events-none">
              <svg className="w-32 h-32 transform translate-x-10 -translate-y-10" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
              </svg>
            </div>
            
            <div className="mb-auto pt-4">
              <h3 className="text-white font-bold text-2xl mb-2 tracking-tight">
                View Full Catalogue
              </h3>
              <p className="text-blue-100 text-sm leading-relaxed">
                Explore our comprehensive documentation and full technical specifications.
              </p>
            </div>

            <div className="inline-flex items-center gap-2 text-white font-semibold text-sm group-hover:translate-x-1 transition-transform duration-300 mt-6">
              <span>Browse Now</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
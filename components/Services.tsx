"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    num: "01",
    title: "Elevators & Escalators Accessories",
    desc: "Multi brand elevator and escalator components including infra red door sensors (light curtains), criss cross beams, 3D landing sensors, automatic rescue devices, drives and voice announcement systems.",
    tags: ["CEDES", "MEMCO", "Door Sensors"],
  },
  {
    num: "02",
    title: "Steel Wire Ropes",
    desc: "Steel wire ropes for elevators, off-shore, shipping and construction applications, sourced from the world's leading high carbon steel wire producers and conforming to international standards.",
    tags: ["KISWIRE", "Usha Martin", "Bedmutha"],
  },
  {
    num: "03",
    title: "LED Lighting & Elevator AC",
    desc: "Round LED panels in SMD and COB types with aluminium housing across multiple wattages, plus Korean-make elevator air conditioning — lightweight, zero water discharge, programmable.",
    tags: ["Panel / SMD / COB", "5–7 Watt", "Elevator AC"],
  },
  {
    num: "04",
    title: "Cables & Wires",
    desc: "Flat travelling and shielded cables suitable for any type and speed of elevator, including CCTV and multimedia display systems, alongside a wide range of industrial cables and wires.",
    tags: ["Flat Travelling Cables", "MACROTHERM", "DEEPCAB"],
  },
  {
    num: "05",
    title: "Automation & Analytical Products",
    desc: "Industrial automation and analytical products designed to improve productivity, efficiency and operational reliability across modern industrial and infrastructure environments.",
    tags: ["Automation", "Analytical", "Multi Brand"],
  },
  {
    num: "06",
    title: "Other Accessories & Hardware",
    desc: "Complete range of hardware and electrical accessories — fans, junction boxes, motion sensors, LOP / COP panels, limit switches, floor detection sensors (P&F), DOB / VA cards and emergency communication systems.",
    tags: ["Multi-Brand", "P&F German Make", "13+ Items"],
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
    <section id="services" ref={sectionRef} className="section-pad bg-gray-50 relative overflow-hidden ">
      <div className="absolute top-0 inset-x-0 h-px bg-gray-200" />
      <div className="absolute bottom-0 inset-x-0 h-px bg-gray-200" />

      <div className="max-w-7xl mx-auto px-6">
       <div
  ref={headRef}
  className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8"
>
  <div>
    <p className="text-blue-600 text-xs font-bold uppercase tracking-[0.25em] mb-4">
      What We Offer
    </p>

    <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight tracking-tight">
      Industrial Products
      <br />
      <span className="text-blue-gradient">
        & Business Solutions
      </span>
    </h2>
  </div>

  <p className="text-gray-400 max-w-sm text-sm leading-relaxed">
    Delivering elevators &amp; escalators accessories, steel wire ropes, LED
    lighting, cables and automation products through trusted partnerships with
    leading manufacturers and suppliers.
  </p>
</div>
        <div ref={gridRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-200">
          {services.map(s => (
            <div key={s.num}
              className="group bg-white hover:bg-blue-50 p-8 transition-colors duration-300 relative overflow-hidden cursor-pointer">
              {/* Hover left red border */}
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

              {/* Arrow */}
              <div className="absolute right-6 bottom-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
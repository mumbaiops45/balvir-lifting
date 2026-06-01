"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    num: "01", title: "Passenger Lifts",
    desc: "High-speed, smooth-ride passenger elevators for offices, hotels, hospitals and malls — with destination dispatch and energy-regenerative drives.",
    tags: ["Up to 40 floors", "Up to 2.5 m/s", "Custom cabins"],
  },
  {
    num: "02", title: "Home & Villa Lifts",
    desc: "Compact, whisper-quiet home elevators that blend with any interior. Available in MRL configurations for minimal footprint.",
    tags: ["3–8 stops", "Low pit depth", "Bespoke finish"],
  },
  {
    num: "03", title: "Goods & Freight Lifts",
    desc: "Heavy-duty platform lifts rated from 500 kg to 10,000 kg for warehouses, factories, and multi-storey industrial facilities.",
    tags: ["Up to 10 T", "Auto gates", "VVVF drive"],
  },
  {
    num: "04", title: "Hydraulic Lifts",
    desc: "Oil-hydraulic and eco-hydraulic systems for low-rise and heritage buildings where a conventional machine room is not possible.",
    tags: ["Low rise", "Heritage safe", "Silent operation"],
  },
  {
    num: "05", title: "Escalators & Travelators",
    desc: "Public-grade moving walkways and escalators for transit hubs, airports, and large retail destinations.",
    tags: ["Variable speed", "Remote monitoring", "Anti-skid steps"],
  },
  {
    num: "06", title: "Modernisation & AMC",
    desc: "Full controller, cabin, and drive replacement for aging lifts — plus annual maintenance contracts with 24/7 breakdown response.",
    tags: ["24/7 support", "OEM parts", "10-yr warranty"],
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
          scrollTrigger: { trigger: gridRef.current, start: "top 80%" } }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="services" ref={sectionRef} className="section-pad bg-gray-50 relative overflow-hidden font-jakarta">
      <div className="absolute top-0 inset-x-0 h-px bg-gray-200" />
      <div className="absolute bottom-0 inset-x-0 h-px bg-gray-200" />

      <div className="max-w-7xl mx-auto px-6">
        <div ref={headRef} className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <p className="text-red-600 text-xs font-bold uppercase tracking-[0.25em] mb-4">What We Do</p>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight tracking-tight">
              Complete Lift<br /><span className="text-red-gradient">Solutions</span>
            </h2>
          </div>
          <p className="text-gray-400 max-w-sm text-sm leading-relaxed">
            From concept to commissioning — and every service interval in between. One partner, every vertical transport need.
          </p>
        </div>

        <div ref={gridRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-200">
          {services.map(s => (
            <div key={s.num}
              className="group bg-white hover:bg-red-50 p-8 transition-colors duration-300 relative overflow-hidden cursor-pointer">
              {/* Hover left red border */}
              <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-red-600 scale-y-0 group-hover:scale-y-100 transition-transform duration-400 origin-bottom" />

              <div className="text-5xl font-extrabold text-gray-100 group-hover:text-red-100 transition-colors leading-none mb-4 select-none">
                {s.num}
              </div>
              <h3 className="text-gray-900 font-bold text-xl mb-3 group-hover:text-red-600 transition-colors duration-300">
                {s.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-6">{s.desc}</p>
              <div className="flex flex-wrap gap-2">
                {s.tags.map(t => (
                  <span key={t}
                    className="text-[11px] text-gray-400 border border-gray-200 px-3 py-1 group-hover:border-red-300 group-hover:text-red-500 transition-all">
                    {t}
                  </span>
                ))}
              </div>

              {/* Arrow */}
              <div className="absolute right-6 bottom-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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

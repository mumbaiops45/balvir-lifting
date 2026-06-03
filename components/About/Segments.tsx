"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const segments = [
  {
    num: "01",
    title: "Elevators & Escalators Accessories",
    desc: "Door sensors, light curtains, criss cross beams, 3D landing sensors, auto doors, ARD/UPS, drives, flat travelling cables, CCTV, voice announcement systems and more.",
    icon: "🛗",
  },
  {
    num: "02",
    title: "Wire Ropes",
    desc: "Steel wire ropes applicable for elevators, off-shore, shipping and construction requirements — sourced from KISWIRE (world's largest), Usha Martin, BAHART and BEDMUTHA.",
    icon: "🔗",
  },
  {
    num: "03",
    title: "LED Lightings & Accessories",
    desc: "Round LED panels in SMD and COB type with aluminium housing, available in various wattages and sizes for elevator cabins and industrial applications.",
    icon: "💡",
  },
  {
    num: "04",
    title: "Cables & Wires",
    desc: "Flat travelling cables (4 to 24 core), shielded cables, CCTV and multimedia display system cables for any type and speed of elevator.",
    icon: "🔌",
  },
  {
    num: "05",
    title: "Other Accessories & Hardware",
    desc: "Complete range of hardware and electrical accessories — fans, junction boxes, LOP / COP panels, limit switches, floor detection sensors (P&F German Make), DOB / VA cards and emergency communication systems.",
    icon: "🔧",
  },
];

const verticals = [
  { title: "Elevator & Escalator Manufacturers / OEMs / Users", icon: "🏭" },
  { title: "Consultants & Contractors", icon: "📋" },
  { title: "EPCs / Architectures & Interiors", icon: "🏗️" },
];

export default function Segments() {
  const sectionRef   = useRef<HTMLElement>(null);
  const headRef      = useRef<HTMLDivElement>(null);
  const segGridRef   = useRef<HTMLDivElement>(null);
  const vertRef      = useRef<HTMLDivElement>(null);
  const parallaxRef  = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Parallax panel on the right
      gsap.to(parallaxRef.current, {
        yPercent: -15,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      });

      gsap.fromTo(headRef.current,
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.9, ease: "power3.out",
          scrollTrigger: { trigger: headRef.current, start: "top 85%" } }
      );
      gsap.fromTo(segGridRef.current?.children ?? [],
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: "power3.out",
          clearProps: "transform,opacity",
          scrollTrigger: { trigger: segGridRef.current, start: "top 80%" } }
      );
      gsap.fromTo(vertRef.current?.children ?? [],
        { x: 30, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: "power3.out",
          clearProps: "transform,opacity",
          scrollTrigger: { trigger: vertRef.current, start: "top 80%" } }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="section-pad bg-white relative overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px bg-gray-100" />

      {/* Parallax decorative block */}
      <div
        ref={parallaxRef}
        className="absolute -right-20 top-0 bottom-0 w-[30vw] bg-gradient-to-b from-blue-50/60 to-transparent pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative">
        <div ref={headRef} className="mb-14">
          <p className="text-blue-600 text-[11px] font-bold uppercase tracking-[0.3em] mb-4">
            What We Deal In
          </p>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight tracking-tight">
              Business Segments<br />
              <span className="text-blue-gradient">&amp; Verticals</span>
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
              We serve a broad spectrum of industries with a curated portfolio of products sourced
              from leading global and Indian manufacturers.
            </p>
          </div>
        </div>

        {/* Segments grid */}
        <div ref={segGridRef} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {segments.map(s => (
            <div
              key={s.num}
              className="group border border-gray-100 bg-white hover:border-blue-200 hover:shadow-[0_8px_32px_rgba(26,79,196,0.10)] p-7 transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute left-0 right-0 top-0 h-0.5 bg-gradient-to-r from-blue-600 to-blue-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              <div className="text-3xl mb-4 select-none">{s.icon}</div>
              <div className="text-4xl font-extrabold text-blue-100 group-hover:text-blue-200 transition-colors leading-none mb-3 select-none">{s.num}</div>
              <h3 className="text-gray-900 font-bold text-base mb-3 group-hover:text-blue-600 transition-colors duration-300 leading-snug">{s.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>

        {/* Business verticals */}
        <div className="border-t border-gray-100 pt-12">
          <p className="text-gray-400 text-[11px] font-bold uppercase tracking-[0.3em] mb-7">
            Business Verticals We Serve
          </p>
          <div ref={vertRef} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {verticals.map((v, i) => (
              <div
                key={i}
                className="flex items-start gap-4 p-5 bg-gray-50 hover:bg-blue-50 border border-gray-100 hover:border-blue-200 transition-all duration-300"
              >
                <span className="text-2xl shrink-0 mt-0.5">{v.icon}</span>
                <p className="text-gray-700 font-semibold text-sm leading-snug">{v.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

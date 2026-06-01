"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { pexelsImg } from "@/lib/media";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  { cat: "Commercial",    title: "Skyline Tower, Delhi",        detail: "12 high-speed passenger lifts — 42-floor Grade-A office tower.", tag: "12 Units · 2.5 m/s", imgId: 1115804 },
  { cat: "Residential",   title: "Prestige Palms, Pune",        detail: "Bespoke home elevators across 120 luxury villas.", tag: "120 Units · Luxury", imgId: 442150 },
  { cat: "Hospital",      title: "City Care Hospital, Mumbai",   detail: "Stretcher and visitor lifts for 24/7 healthcare.", tag: "6 Lifts · Medical", imgId: 374907 },
  { cat: "Industrial",    title: "AutoParts Warehouse, Chennai", detail: "3-tonne freight platforms linking 4 warehouse levels.", tag: "4 Freight · 3,000 kg", imgId: 1884283 },
  { cat: "Hospitality",   title: "Grand Hyatt, Goa",            detail: "8 panoramic glass lifts for a 5-star beachfront resort.", tag: "8 Panoramic", imgId: 3926482 },
  { cat: "Modernisation", title: "Heritage Hotel, Jaipur",      detail: "Full drive, cabin and controller replacement for 30-yr-old lifts.", tag: "4 Modernised", imgId: 2724749 },
  { cat: "Commercial",    title: "Nexus Mall, Hyderabad",       detail: "Escalators and travelators for 3-level retail atrium.", tag: "6 Escalators", imgId: 236698 },
  { cat: "Residential",   title: "Godrej Reserve, Bengaluru",   detail: "Smart-destination lifts with app-based calling for gated community.", tag: "18 Units · Smart", imgId: 323780 },
];

const cats = ["All", "Commercial", "Residential", "Hospital", "Industrial", "Hospitality", "Modernisation"];

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null);
  const headRef    = useRef<HTMLDivElement>(null);
  const gridRef    = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? projects : projects.filter(p => p.cat === active);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(headRef.current,
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.9, ease: "power3.out",
          scrollTrigger: { trigger: headRef.current, start: "top 85%" } }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  useEffect(() => {
    if (!gridRef.current) return;
    gsap.fromTo(gridRef.current.children,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.5, stagger: 0.07, ease: "power3.out" }
    );
  }, [active]);

  return (
    <section id="projects" ref={sectionRef} className="section-pad bg-gray-50 relative overflow-hidden font-jakarta">
      <div className="absolute top-0 inset-x-0 h-px bg-gray-200" />
      <div className="absolute bottom-0 inset-x-0 h-px bg-gray-200" />

      <div className="max-w-7xl mx-auto px-6">
        <div ref={headRef} className="mb-12">
          <p className="text-red-600 text-xs font-bold uppercase tracking-[0.25em] mb-4">Our Portfolio</p>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight tracking-tight">
              Landmark <span className="text-red-gradient">Projects</span>
            </h2>
            <p className="text-gray-400 text-sm max-w-xs leading-relaxed">
              Selected installations across India&apos;s fastest-growing cities.
            </p>
          </div>
        </div>

        {/* Filter tabs */}
        <div className="flex flex-wrap gap-2 mb-10">
          {cats.map(c => (
            <button key={c} onClick={() => setActive(c)}
              className={`px-4 py-2 text-xs font-semibold tracking-wider uppercase transition-all duration-300 border ${
                active === c
                  ? "bg-red-600 text-white border-red-600 shadow-[0_4px_20px_rgba(200,16,32,0.3)]"
                  : "bg-white text-gray-500 border-gray-200 hover:border-red-300 hover:text-red-600"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div ref={gridRef} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {filtered.map(p => (
            <div key={p.title}
              className="group bg-white border border-gray-200 hover:border-red-300 hover:shadow-[0_8px_40px_rgba(200,16,32,0.12)] transition-all duration-300 cursor-pointer flex flex-col overflow-hidden shadow-sm">
              {/* Image */}
              <div className="relative h-44 overflow-hidden">
                <Image src={pexelsImg(p.imgId, 600, 350)} alt={p.title}
                  fill sizes="(max-width: 640px) 100vw, 25vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-90"
                  loading="lazy" unoptimized />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <span className="absolute top-3 left-3 text-[9px] font-bold uppercase tracking-[0.2em] text-white bg-red-600 px-2 py-1">
                  {p.cat}
                </span>
              </div>

              <div className="p-5 flex flex-col flex-1">
                <h3 className="text-gray-900 font-bold text-base mb-2 group-hover:text-red-600 transition-colors">
                  {p.title}
                </h3>
                <p className="text-gray-400 text-xs leading-relaxed mb-4 flex-1">{p.detail}</p>
                <div className="text-[10px] text-gray-400 border border-gray-200 group-hover:border-red-300 group-hover:text-red-500 px-3 py-1.5 inline-block transition-all w-fit">
                  {p.tag}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <button className="btn-outline-dark text-sm">
            View All Projects
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}

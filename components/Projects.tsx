"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { pexelsImg } from "@/lib/media";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    cat: "Elevators",
    title: "Elevator & Escalator Accessories",
    detail:
      "Complete range of door sensors, auto doors, CCTV systems, voice announcements, ARD units, elevator drives and travelling cables sourced from global brands.",
    tag: "7+ Product Groups",
    imgId: 1115804,
  },

  {
    cat: "Elevators",
    title: "Infra Red Door Sensors",
    detail:
      "CEDES, MEMCO, SFT, WECO and TVS light curtain systems with full entrance monitoring and plug and play installation.",
    tag: "CEDES • MEMCO",
    imgId: 323780,
  },

  {
    cat: "Elevators",
    title: "Auto Doors & Mechanisms",
    detail:
      "FERMATOR, WITTUR and SHIVAM automatic door systems available in MS and SS configurations for residential and commercial elevators.",
    tag: "FERMATOR • WITTUR",
    imgId: 236698,
  },

  {
    cat: "Wire Ropes",
    title: "Elevator Steel Wire Ropes",
    detail:
      "IS 2365 compliant wire ropes available in 6mm, 8mm, 10mm and 13mm diameters for elevators of all capacities.",
    tag: "KISWIRE • USHA MARTIN",
    imgId: 1884283,
  },

  {
    cat: "Wire Ropes",
    title: "Offshore & Construction Wire Ropes",
    detail:
      "High tensile steel wire ropes for cranes, ports, mining, infrastructure, oil & gas and offshore applications.",
    tag: "API • DNV • ABS",
    imgId: 374907,
  },

  {
    cat: "Lighting",
    title: "LED Lighting Solutions",
    detail:
      "Premium elevator cabin lighting in Panel, COB and SMD configurations with aluminium housing and multiple wattage options.",
    tag: "3W to 7W",
    imgId: 442150,
  },

  {
    cat: "Lighting",
    title: "Elevator Air Conditioning",
    detail:
      "Korean elevator air conditioning systems with programmable temperature control, low vibration and easy installation.",
    tag: "Korean Make",
    imgId: 2724749,
  },

  {
    cat: "Hardware",
    title: "Accessories & Hardware",
    detail:
      "LOP, COP, switches, sensors, guide rails, intercoms, alarms, junction boxes, fans, wires and other elevator components.",
    tag: "13+ Product Lines",
    imgId: 3926482,
  },
];

const cats = [
  "All",
  "Elevators",
  "Wire Ropes",
  "Lighting",
  "Hardware",
];

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
      { y: 0, opacity: 1, duration: 0.5, stagger: 0.07, ease: "power3.out",
        clearProps: "transform,opacity" }
    );
  }, [active]);

  return (
    <section id="projects" ref={sectionRef} className="section-pad bg-gray-50 relative overflow-hidden ">
      <div className="absolute top-0 inset-x-0 h-px bg-gray-200" />
      <div className="absolute bottom-0 inset-x-0 h-px bg-gray-200" />

      <div className="max-w-7xl mx-auto px-6">
        <div ref={headRef} className="mb-12">
         <p className="text-blue-600 text-xs font-bold uppercase tracking-[0.25em] mb-4">
  Product Categories
</p>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight tracking-tight">
              <span className="text-blue-gradient">Our Product Portfolio</span>
            </h2>
            <p className="text-gray-400 text-sm max-w-xs leading-relaxed">
             Multi brand electrical, electronics, mechanical and hardware products for elevators, wire ropes, offshore, infrastructure and industrial applications.
            </p>
          </div>
        </div>

        {/* Filter tabs */}
        <div className="flex flex-wrap gap-2 mb-10">
          {cats.map(c => (
            <button key={c} onClick={() => setActive(c)}
              className={`px-4 py-2 text-xs font-semibold tracking-wider uppercase transition-all duration-300 border ${
                active === c
                  ? "bg-blue-600 text-white border-blue-600 shadow-[0_4px_20px_rgba(26,79,196,0.3)]"
                  : "bg-white text-gray-500 border-gray-200 hover:border-blue-300 hover:text-blue-600"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div ref={gridRef} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {filtered.map(p => (
            <div key={p.title}
              className="group bg-white border border-gray-200 hover:border-blue-300 hover:shadow-[0_8px_40px_rgba(26,79,196,0.12)] transition-all duration-300 cursor-pointer flex flex-col overflow-hidden shadow-sm">
              {/* Image */}
              <div className="relative h-44 overflow-hidden">
                <Image src={pexelsImg(p.imgId, 600, 350)} alt={p.title}
                  fill sizes="(max-width: 640px) 100vw, 25vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-90"
                  loading="lazy" unoptimized />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <span className="absolute top-3 left-3 text-[9px] font-bold uppercase tracking-[0.2em] text-white bg-blue-600 px-2 py-1">
                  {p.cat}
                </span>
              </div>

              <div className="p-5 flex flex-col flex-1">
                <h3 className="text-gray-900 font-bold text-base mb-2 group-hover:text-blue-600 transition-colors">
                  {p.title}
                </h3>
                <p className="text-gray-400 text-xs leading-relaxed mb-4 flex-1">{p.detail}</p>
                <div className="text-[10px] text-gray-400 border border-gray-200 group-hover:border-blue-300 group-hover:text-blue-500 px-3 py-1.5 inline-block transition-all w-fit">
                  {p.tag}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* <div className="mt-10 flex justify-center">
          <button className="btn-outline-dark text-sm">
            Explore Our Range
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div> */}
      </div>
    </section>
  );
}
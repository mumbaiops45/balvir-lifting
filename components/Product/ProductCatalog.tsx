"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const categories = [
  {
    id: "elevator",
    label: "Elevators & Escalators Accessories",
    icon: "🛗",
    products: [
      {
        title: "Infra Red Door Sensors (Light Curtains)",
        brands: ["CEDES (Switzerland)", "MEMCO (UK)", "SFT / WECO / TVS (China)"],
        details: [
          "Multi-brand light curtains for elevator door protection",
          "Criss Cross Beams: 94 to 154 beams, full height 2000 mm",
          "Applicable for Static & Dynamic installations",
          "3D Version Sensor (CEDES IMS 100) for elevator landing area detection",
          "Time-of-Flight technology — prevents closing door triggering its own reopening",
          "Complete entrance-area monitoring in a single, compact device",
        ],
      },
      {
        title: "Auto Door & Mechanism",
        brands: ["FERMATOR", "WITTUR", "SHIVAM"],
        details: [
          "Available in MS / SS (Mild Steel / Stainless Steel)",
          "Small Window and Full Vision options",
          "Suitable for all types of elevator applications",
        ],
      },
      {
        title: "Wireless / Wired CCTV",
        brands: ["Specialised Elevator-Grade"],
        details: [
          "Made specially for elevator application — withstands heavy movements and jerks",
          "Wireless system delivers real-time video with NO interference up to 150 floors (Analog)",
          "Up to 1500 meters for digital IP-based systems",
          "Pre-configured plug and play — no software required",
          "Elevator Flat Travelling Cables for CCTV and multimedia display systems",
        ],
      },
      {
        title: "Voice Announcement System",
        brands: ["Multi Brand"],
        details: [
          "mP3 Music running system",
          "Emergency Messages",
          "Chime and Floor announcement",
        ],
      },
      {
        title: "Automatic Rescue Device (ARD) / UPS",
        brands: ["ULTRONIX", "Excella", "AK Automation", "Godrej"],
        details: [
          "Standalone type or Inverter type",
          "Applicable for any type and any speed of elevator",
          "Ensures safe evacuation during power failure",
        ],
      },
      {
        title: "Elevator Drives",
        brands: ["TOSHIBA", "HITACHI", "Fuji", "Yasakawa"],
        details: [
          "5 HP Onwards",
          "Reliable, efficient and quiet operation",
          "Compatible with any type and speed of elevator",
        ],
      },
      {
        title: "Flat Travelling Cables",
        brands: ["MACROTHERM", "DEEPCAB", "Datwayler / G&G (on order)"],
        details: [
          "04 Core × 0.75 Sqmm",
          "06 Core × 0.75 Sqmm",
          "12 Core × 0.65 Sqmm",
          "24 Core × 0.75 Sqmm (on make-to-order basis)",
          "10 Core × 0.75 Sqmm + 2 Core × 0.5 Sqmm (Shielded, on order)",
          "Suitable for CCTV and multimedia display systems",
        ],
      },
    ],
  },
  {
    id: "wireropes",
    label: "Steel Wire Ropes — Elevator Application",
    icon: "🔗",
    products: [
      {
        title: "Elevator Wire Ropes",
        brands: ["KISSWIRE (Korean)", "Usha Martin", "BAHART Wire Ropes", "BEDMUTHA"],
        details: [
          "Confirming to IS: 2365 CFN (Core Fibre Natural), Tensile 1420/sqmm, Lay RHO",
          "Dia.13mm — 8 × 19S",
          "Dia.10mm — 8 × 19S",
          "Dia.08mm — 8 × 19S",
          "Dia.06mm — 6 × 19S",
          "USHA MARTIN / KISSWIRE on demand, minimum order qty per month contract",
        ],
      },
    ],
  },
  {
    id: "led",
    label: "LED Lighting for Elevators",
    icon: "💡",
    products: [
      {
        title: "LED Lighting & Accessories",
        brands: ["BALVIR", "Other on demand"],
        details: [
          "5 to 7 Watt — 75 mm Cutout, round, White/WW Colour, Panel/SMD/COB type, ALUMINIUM HOUSING",
          "3 to 4 Watt — 75 / 50 mm Cutout, round, White/WW Colour, Panel/SMD/COB type, ALUMINIUM HOUSING",
          "Suitable for elevator cabin and industrial applications",
        ],
      },
      {
        title: "Elevator Air Conditioning System (AC)",
        brands: ["Korean Make"],
        details: [
          "Specially designed for elevator application",
          "Light weight, zero water discharge",
          "Programmable air conditioners",
          "Unique design for low vibration and noise",
          "Easy to install on new and existing elevator using blower pockets",
          "Dimensions: W455mm × D615mm × H435mm",
          "Air Circulation: 400 M3/H or 330 M3/H",
        ],
      },
    ],
  },
  {
    id: "accessories",
    label: "Other Accessories",
    icon: "⚙️",
    products: [
      {
        title: "Hardware & Electrical Accessories",
        brands: ["Multi Brand"],
        details: [
          "Fan — High Quality, Heavy Duty / Blower",
          "Junction Box, Maintenance Box",
          "Motion Sensor",
          "Intercom System / Emergency Alarm System / Guide Rails",
          "Final Limit Switch / Car Gate Switch",
          "LOP / COP (Landing / Car Operating Panels)",
          "Limit Switches / Cargate Switches",
          "Emergency Alarm",
          "Wires",
          "Floor Detection Sensors — Infra Red beams based, C type (P&F German Make)",
          "DOB / VA Cards",
          "Emergency Communication Systems — PUSH button type & Handset Dialer type",
          "Other Mechanical & Hardware Items",
        ],
      },
    ],
  },
];

export default function ProductCatalog() {
  const sectionRef = useRef<HTMLElement>(null);
  const headRef    = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState("elevator");

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

  const current = categories.find(c => c.id === active)!;

  return (
    <section ref={sectionRef} id="catalog" className="section-pad bg-white relative overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-blue-600/30 to-transparent" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-blue-50/60 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div ref={headRef} className="mb-12">
          <p className="text-blue-600 text-[11px] font-bold uppercase tracking-[0.3em] mb-4">
            Product Catalogue
          </p>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight tracking-tight">
              Elevators &amp; Industrial<br />
              <span className="text-blue-gradient">Products We Supply</span>
            </h2>
            <p className="text-gray-400 text-sm max-w-sm leading-relaxed">
              Reliable, affordable, high-quality products sourced from trusted global and Indian manufacturers.
            </p>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Tab nav */}
          <div className="lg:w-72 shrink-0">
            <div className="flex flex-row lg:flex-col gap-2 overflow-x-auto pb-2 lg:pb-0">
              {categories.map(c => (
                <button
                  key={c.id}
                  onClick={() => setActive(c.id)}
                  className={`flex items-center gap-3 px-5 py-4 text-left text-sm font-semibold transition-all duration-200 whitespace-nowrap lg:whitespace-normal border ${
                    active === c.id
                      ? "bg-blue-600 text-white border-blue-600"
                      : "bg-white text-gray-600 border-gray-200 hover:border-blue-300 hover:text-blue-600"
                  }`}
                >
                  <span className="text-lg shrink-0">{c.icon}</span>
                  <span className="leading-snug">{c.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 min-w-0">
            <div className="border border-gray-100 bg-gray-50/50">
              <div className="border-b border-gray-100 px-8 py-5 flex items-center gap-3">
                <span className="text-2xl">{current.icon}</span>
                <h3 className="text-gray-900 font-extrabold text-xl">{current.label}</h3>
              </div>
              <div className="p-8 space-y-8">
                {current.products.map((p, i) => (
                  <div key={i} className="border border-gray-100 bg-white p-6 relative overflow-hidden group hover:border-blue-200 transition-colors duration-300">
                    <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-blue-600 scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-bottom" />

                    <h4 className="text-gray-900 font-bold text-lg mb-3">{p.title}</h4>

                    {/* Brands */}
                    <div className="flex flex-wrap gap-2 mb-5">
                      {p.brands.map(b => (
                        <span key={b} className="text-[11px] font-semibold text-blue-600 bg-blue-50 border border-blue-200 px-3 py-1">
                          {b}
                        </span>
                      ))}
                    </div>

                    {/* Details */}
                    <ul className="space-y-2">
                      {p.details.map((d, j) => (
                        <li key={j} className="flex items-start gap-2.5 text-sm text-gray-500">
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0 mt-1.5" />
                          {d}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

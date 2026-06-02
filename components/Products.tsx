"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const products = [
  {
    num: "01",
    title: "Door Sensors & Light Curtains",
    desc: "Infra red door sensors and criss cross beams (94 to 154 beams, 2000 mm height) for static and dynamic installations.",
    brands: ["CEDES", "MEMCO", "SFT", "WECO", "TVS"],
  },
  {
    num: "02",
    title: "3D Landing Sensors",
    desc: "CEDES IMS 100 time-of-flight sensors for complete, plug and play elevator landing area monitoring.",
    brands: ["CEDES IMS 100"],
  },
  {
    num: "03",
    title: "Auto Doors & Mechanisms",
    desc: "Automatic door operators in MS / SS, available in small window and full vision options.",
    brands: ["Fermator", "Wittur", "Shivam"],
  },
  {
    num: "04",
    title: "Rescue Devices (ARD) / UPS",
    desc: "Automatic rescue devices in standalone and inverter types, suitable for any type and speed of elevator.",
    brands: ["Ultronix", "Excella", "AK Automation", "Godrej"],
  },
  {
    num: "05",
    title: "Elevator Drives",
    desc: "Reliable elevator drives from 5 HP onwards for smooth, efficient and quiet operation.",
    brands: ["Toshiba", "Hitachi", "Fuji", "Yasakawa"],
  },
  {
    num: "06",
    title: "Steel Wire Ropes",
    desc: "For elevators, off-shore, shipping and construction, conforming to IS:2365 with the world's largest producers.",
    brands: ["KISWIRE", "Usha Martin", "Bedmutha", "Bahart"],
  },
  {
    num: "07",
    title: "Flat Travelling Cables",
    desc: "Multi-core and shielded cables for any type and speed of elevator, including CCTV and multimedia display.",
    brands: ["Macrotherm", "Deepcab"],
  },
  {
    num: "08",
    title: "LED Lighting & Elevator AC",
    desc: "Round LED panels in SMD / COB type with aluminium housing, plus zero water discharge elevator air-conditioning.",
    brands: ["Balvir", "Korea Make"],
  },
];

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
    <section
      id="products"
      ref={sectionRef}
      className="section-pad relative overflow-hidden bg-gradient-to-b from-white via-blue-50/30 to-white"
    >
      {/* Decorative hairlines + soft red glow */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-blue-600/30 to-transparent" />
      <div className="absolute bottom-0 inset-x-0 h-px bg-gray-100" />
      <div className="absolute -top-40 -right-32 w-[28rem] h-[28rem] rounded-full bg-blue-100/40 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -left-40 w-[28rem] h-[28rem] rounded-full bg-blue-50/60 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative">

        {/* ── Heading ───────────────────────────────── */}
        <div
          ref={headRef}
          className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8"
        >
          <div>
            <p className="text-blue-600 text-xs font-bold uppercase tracking-[0.25em] mb-4">
              Our Products
            </p>

            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight tracking-tight">
              Multi-Brand Product
              <br />
              <span className="text-blue-gradient">Range We Supply</span>
            </h2>

            <div className="blue-line w-24 mt-6" />
          </div>

          <p className="text-gray-500 max-w-sm text-sm leading-relaxed">
            A curated catalogue of elevator, escalator and industrial products sourced from
            leading manufacturers across India and around the world.
          </p>
        </div>

        {/* ── Product grid ──────────────────────────── */}
        <div
          ref={gridRef}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {products.map(p => (
            <div
              key={p.num}
              className="group bg-white border border-gray-100 shadow-sm hover:border-blue-200 hover:shadow-[0_14px_44px_rgba(26,79,196,0.12)] p-7 transition-all duration-300 relative overflow-hidden"
            >
              {/* Hover top red accent bar */}
              <div className="absolute left-0 right-0 top-0 h-0.5 bg-gradient-to-r from-blue-600 to-blue-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

              <div className="text-5xl font-extrabold text-blue-100 group-hover:text-blue-200 transition-colors duration-300 leading-none mb-4 select-none">
                {p.num}
              </div>

              <h3 className="text-gray-900 font-bold text-lg mb-3 leading-snug group-hover:text-blue-600 transition-colors duration-300">
                {p.title}
              </h3>

              <p className="text-gray-500 text-sm leading-relaxed mb-6">
                {p.desc}
              </p>

              <div className="flex flex-wrap gap-2">
                {p.brands.map(b => (
                  <span
                    key={b}
                    className="text-[11px] text-gray-400 border border-gray-200 px-3 py-1 group-hover:border-blue-300 group-hover:text-blue-500 transition-all duration-300"
                  >
                    {b}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* ── Footer note ───────────────────────────── */}
        <p className="text-gray-500 text-sm leading-relaxed mt-12 max-w-3xl">
          Also available: Wireless / Wired CCTV, Voice Announcement Systems, Intercom &amp;
          Emergency Communication, Limit &amp; Cargate Switches, LOP / COP, Fans &amp; Blowers,
          Guide Rails and other mechanical &amp; hardware items.
        </p>

      </div>
    </section>
  );
}
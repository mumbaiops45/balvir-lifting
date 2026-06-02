"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const milestones = [
  {
    year: "2014",
    event:
      "BALVIR LIFTING (formerly Balvir Global Products) was established and registered, with its office located in Navi Mumbai, Kharghar."
  },
  {
    year: "Principle",
    event:
      "Built on a simple principle we follow, 'Earn Trust with Business', with the aim of providing greener and safer products to industry and users."
  },
  {
    year: "Growth",
    event:
      "Developed many long lasting relationships with top manufacturing and supplier companies across India and other parts of the world."
  },
  {
    year: "Today",
    event:
      "Among the leading suppliers of multi brand electrical, electronics, mechanical and hardware products for diverse industries and applications."
  },
  {
    year: "Vision",
    event:
      "To be referred as the most favourable trading company in multi brand electrical, electronics, mechanical and automation products."
  }
];
export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(leftRef.current,
        { x: -50, opacity: 0 },
        {
          x: 0, opacity: 1, duration: 1, ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 75%" }
        }
      );
      gsap.fromTo(rightRef.current,
        { x: 50, opacity: 0 },
        {
          x: 0, opacity: 1, duration: 1, ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 75%" }
        }
      );
      gsap.fromTo(lineRef.current,
        { scaleY: 0, transformOrigin: "top center" },
        {
          scaleY: 1, duration: 1.4, ease: "power3.out",
          scrollTrigger: { trigger: rightRef.current, start: "top 78%" }
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="section-pad bg-white relative overflow-hidden ">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-blue-600/20 to-transparent" />
      <div className="absolute bottom-0 inset-x-0 h-px bg-gray-100" />

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">

        {/* ── Left ─────────────────────────────────── */}
        <div ref={leftRef}>
          <p className="text-blue-600 text-xs font-bold uppercase tracking-[0.25em] mb-4">
            Company Profile
          </p>

          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight tracking-tight mb-6">
            Leading Supplier Of
            <br />
            <span className="text-blue-gradient">
              Multi-Brand Industrial Products
            </span>
          </h2>

          <div className="blue-line w-24 mb-7" />

          <p className="text-gray-500 leading-relaxed mb-5">
            BALVIR LIFTING (formerly Balvir Global Products) was established and
            registered in 2014, with its office located in Navi Mumbai, Kharghar.
            {/* We have accumulated strong and healthy market trust through a simple
    principle we follow, 'Earn Trust with Business', with the aim of
    providing greener and safer products to the industry and its users. */}
            We have accumulated strong and healthy market trust through a simple principle we follow, Earn Trust with Business, with the aim of providing greener and safer products to the industry and its users.
          </p>

          <p className="text-gray-500 leading-relaxed mb-10">
            {/* Among the leading suppliers of multi brand electrical, electronics,
            mechanical and hardware products, we source items that are reliable
            and affordable, backed by long lasting relationships with top
            manufacturers and suppliers in India and around the world. */}
            Among the leading suppliers of multi brand electrical, electronics, mechanical and hardware products, we source items that are reliable and affordable, backed by long lasting relationships with top manufacturers and suppliers in India and around the world.
             This lets
            us respond to the exact demands of customers seeking the best quality
            and latest technology at affordable prices.
          </p>

          <div className="flex flex-wrap gap-3">
            {[
              "Established 2014",
              "Formerly Balvir Global Products",
              "Multi-Brand Products",
              "Pan India Supply"
            ].map((c) => (
              <span
                key={c}
                className="text-xs font-semibold text-blue-600 border border-blue-200 bg-blue-50 px-4 py-2 tracking-wider"
              >
                {c}
              </span>
            ))}
          </div>
        </div>

        {/* ── Right: Timeline ───────────────────────── */}
        <div ref={rightRef} className="relative pl-8">
          <div ref={lineRef}
            className="absolute left-0 top-2 bottom-2 w-px bg-gradient-to-b from-blue-600 via-blue-400/50 to-transparent" />

          <div className="flex flex-col gap-10">
            {milestones.map(m => (
              <div key={m.year} className="relative flex gap-5">
                <div className="absolute -left-[37px] top-1 w-3 h-3 rounded-full bg-blue-600 shadow-[0_0_10px_rgba(26,79,196,0.5)] shrink-0" />
                <div>
                  <div className="text-blue-600 font-extrabold text-sm tracking-widest mb-1">{m.year}</div>
                  <p className="text-gray-500 text-sm leading-relaxed">{m.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
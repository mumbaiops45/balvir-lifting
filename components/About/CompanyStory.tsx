"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const milestones = [
 {
  year: "2014",
  label: "Founded",
  desc: "Established and registered as Balvir Global Products in Navi Mumbai, Kharghar, with a mission to supply high quality, multi brand industrial products.",
},
{
  year: "Principle",
  label: "Earn Trust with Business",
  desc: "Built a strong and healthy market trust by following a single guiding principle, 'Earn Trust with Business', committed to delivering professional experiences in a demanding market.",
},
{
  year: "Growth",
  label: "Global Partnerships",
  desc: "Developed many long lasting relationships with top manufacturing and supplier companies in India and around the world, including CEDES, MEMCO, Fermator, KISWIRE, Toshiba and Hitachi.",
},
{
  year: "Today",
  label: "Balvir Lifting",
  desc: "Renamed Balvir Lifting, now a leading supplier of multi brand Electrical, Electronics, Mechanical and Hardware products applicable to various industries and applications across India.",
},
{
  year: "Vision",
  label: "Nation Building",
  desc: "Committed to becoming the most favourable trading company in multi brand Electrical, Electronics, Mechanical and Automation products, with customer satisfaction and nation building as our ultimate goal.",
},
];

export default function CompanyStory() {
  const sectionRef = useRef<HTMLElement>(null);
  const leftRef    = useRef<HTMLDivElement>(null);
  const rightRef   = useRef<HTMLDivElement>(null);
  const lineRef    = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(leftRef.current,
        { x: -50, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.9, ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 80%" } }
      );
      gsap.fromTo(rightRef.current,
        { x: 50, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.9, ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 80%" } }
      );
      gsap.fromTo(lineRef.current,
        { scaleY: 0 },
        { scaleY: 1, duration: 1.2, ease: "power3.out", transformOrigin: "top center",
          scrollTrigger: { trigger: rightRef.current, start: "top 75%" } }
      );
      gsap.fromTo(rightRef.current?.querySelectorAll(".milestone-item") ?? [],
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, stagger: 0.15, ease: "power3.out",
          scrollTrigger: { trigger: rightRef.current, start: "top 75%" } }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="section-pad bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          {/* Left — copy */}
          <div ref={leftRef}>
            <p className="text-blue-600 text-[11px] font-bold uppercase tracking-[0.3em] mb-5">
              Our Story
            </p>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight tracking-tight mb-7">
              A Company Built on<br />
              <span className="text-blue-gradient">Trust & Quality</span>
            </h2>
            <div className="blue-line w-20 mb-8" />
            <p className="text-gray-500 text-base leading-relaxed mb-5">
              <strong className="text-gray-800">BALVIR LIFTING</strong> (formerly Balvir Global Products) was
              established and registered in 2014, with its office located in Navi Mumbai, Kharghar.
            </p>
            <p className="text-gray-500 text-sm leading-relaxed mb-5">
              Through business, BALVIR&apos;s aim is to provide <strong className="text-gray-700">GREENER &amp; SAFER</strong> products
              to the industry and its users. We are among the leading suppliers of multi-brand Electrical,
              Electronics, Mechanical &amp; Hardware products, applicable to various industries and applications.
            </p>
            <p className="text-gray-500 text-sm leading-relaxed mb-10">
              In a very competitive industry, we source products that are reliable and affordable. We have
              developed many long-lasting relationships with top manufacturing and supplier companies in India
              and around the world, allowing us to focus our attention on responding to the exact demands of
              customers seeking the best quality with latest technology at affordable prices.
            </p>

            {/* Core principle card */}
            <div className="border-l-4 border-blue-600 bg-blue-50 px-7 py-6">
              <p className="text-blue-600 text-[10px] font-bold uppercase tracking-widest mb-2">Our Principle</p>
              <p className="text-gray-900 font-extrabold text-2xl leading-snug">
                &ldquo;Earn Trust<br />with Business&rdquo;
              </p>
            </div>
          </div>

          {/* Right — timeline */}
          <div ref={rightRef} className="relative">
            {/* Vertical line */}
            <div
              ref={lineRef}
              className="absolute left-[15px] top-3 bottom-3 w-px bg-gradient-to-b from-blue-600 via-blue-300 to-transparent"
            />

            <div className="space-y-10 pl-10">
              {milestones.map((m, i) => (
                <div key={i} className="milestone-item relative">
                  {/* Dot */}
                  <div className="absolute -left-[calc(2.5rem-4px)] top-1 w-3 h-3 rounded-full bg-blue-600 shadow-[0_0_10px_rgba(15,52,96,0.5)]" />

                  <p className="text-blue-600 text-[11px] font-bold uppercase tracking-[0.25em] mb-1">{m.year}</p>
                  <h3 className="text-gray-900 font-bold text-base mb-2">{m.label}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{m.desc}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const contactDetails = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    label: "Admin & Warehouse Address",
    lines: [
      "Shop No.18, Plot No. S, Sector-2",
      "Railway Station Road, Kharghar",
      "Raigad District, Navi Mumbai – 410210",
      "Maharashtra, BHARAT (India)",
    ],
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    label: "Phone",
    lines: ["+91-9819002726 (Kishore Agrawal)", "+91-7021660866"],
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    label: "Email",
    lines: ["kishore@balvir.in"],
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    label: "GST & Bank Details",
    lines: [
      "GSTIN: 27ADHPA7026N1ZF",
      "HDFC Bank Ltd.",
      "A/c No: 50200006443687",
      "IFSC: HDFC0001030",
    ],
  },
];

const cities = ["Navi Mumbai", "New Delhi", "Mumbai", "Kolkata", "Chennai"];

export default function ContactInfo() {
  const sectionRef = useRef<HTMLElement>(null);
  const leftRef    = useRef<HTMLDivElement>(null);
  const rightRef   = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(leftRef.current,
        { x: -50, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.9, ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 80%" } }
      );
      gsap.fromTo(rightRef.current?.children ?? [],
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, stagger: 0.12, ease: "power3.out",
          clearProps: "transform,opacity",
          scrollTrigger: { trigger: rightRef.current, start: "top 80%" } }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="section-pad bg-white relative overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px bg-gray-100" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Left — heading + contact person */}
          <div ref={leftRef}>
            <p className="text-blue-600 text-[11px] font-bold uppercase tracking-[0.3em] mb-5">
              Contact Details
            </p>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight tracking-tight mb-8">
              We&apos;re Here<br />
              <span className="text-blue-gradient">to Help You</span>
            </h2>

            {/* Contact person card */}
            <div className="border border-gray-100 bg-gray-50 p-7 mb-8 relative overflow-hidden group hover:border-blue-200 transition-colors duration-300">
              <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-blue-600 scale-y-0 group-hover:scale-y-100 transition-transform duration-400 origin-bottom" />
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-blue-600 flex items-center justify-center shrink-0">
                  <span className="text-white font-bold text-lg">KA</span>
                </div>
                <div>
                  <p className="text-gray-900 font-bold text-lg">Kishore Agrawal</p>
                  <p className="text-gray-500 text-sm">Head – Sales &amp; Operations</p>
                </div>
              </div>
              <div className="space-y-2">
                <a href="tel:+919819002726" className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors text-sm">
                  <svg className="w-4 h-4 text-blue-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  +91-9819002726
                </a>
                <a href="mailto:kishore@balvir.in" className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors text-sm">
                  <svg className="w-4 h-4 text-blue-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  kishore@balvir.in
                </a>
              </div>
            </div>

            {/* Pan India */}
            <div>
              <p className="text-gray-400 text-xs font-semibold uppercase tracking-widest mb-3">
                Pan-India Distribution
              </p>
              <div className="flex flex-wrap gap-2">
                {cities.map((c, i) => (
                  <span key={c}
                    className={`text-sm px-4 py-2 font-medium ${i === 0 ? "bg-blue-600 text-white" : "border border-gray-200 text-gray-500"}`}>
                    {c}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right — details cards */}
          <div ref={rightRef} className="grid sm:grid-cols-2 gap-4">
            {contactDetails.map((d, i) => (
              <div key={i} className="border border-gray-100 bg-white p-6 hover:border-blue-200 hover:shadow-[0_8px_24px_rgba(26,79,196,0.08)] transition-all duration-300 group relative overflow-hidden">
                <div className="absolute left-0 right-0 top-0 h-0.5 bg-gradient-to-r from-blue-600 to-blue-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-400 origin-left" />
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-9 h-9 border border-gray-100 bg-blue-50 flex items-center justify-center text-blue-600">
                    {d.icon}
                  </div>
                  <p className="text-[11px] font-bold uppercase tracking-widest text-gray-400">{d.label}</p>
                </div>
                <div className="space-y-1">
                  {d.lines.map((line, j) => (
                    <p key={j} className="text-gray-600 text-sm">{line}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

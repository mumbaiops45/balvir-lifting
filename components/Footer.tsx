"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useModal } from "@/context/ModalContext";
import Link from "next/link";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const links = {
  Company: ["About Us", "Our Vision", "Our Goal", "Contact Us"],
  Products: ["Elevators & Escalators", "Steel Wire Ropes", "LED Lighting & Elevator AC", "Cables & Wires", "Other Accessories"],
  Segments: ["Elevator OEMs / Users", "Consultants & Contractors", "EPCs & Interiors"],
};

const cities = ["Navi Mumbai", "New Delhi", "Mumbai", "Kolkata", "Chennai"];

export default function Footer() {
  const { toggle } = useModal();
  const footerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        footerRef.current?.querySelectorAll(".f-reveal") ?? [],
        {
          y: 20,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          stagger: 0.07,
          ease: "power3.out",
          scrollTrigger: {
            trigger: footerRef.current,
            start: "top 88%",
          },
        }
      );

      ScrollTrigger.refresh();
    }, footerRef);

    return () => ctx.revert();
  }, []);

  return (
    <footer ref={footerRef} className="bg-black border-t border-white/5">

      {/* ── Main grid ─────────────────────────── */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-16 pb-10">
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-10 f-reveal">

          {/* Brand — 2 cols */}
          <div className="col-span-2">
            <Link href="/">
              <Image
                src="/logo.PNG"
                alt="Company Logo"
                width={180}
                height={40}
                priority
                className="h-[10vh] object-cover"
              />
            </Link>
            <p className="text-white/40 text-sm leading-relaxed mb-4 max-w-[260px]">
              Trusted supplier of multi-brand electrical, electronics, mechanical, hardware &amp; automation products. Established 2014.
            </p>

            <p className="text-white/35 text-xs leading-relaxed mb-2 max-w-[280px]">
              Shop No. 18, Plot S, Sector-2, Railway Station Road, Kharghar, Raigad, Navi Mumbai – 410210, Maharashtra, India.
            </p>
            <p className="text-white/30 text-[11px] mb-6">GSTIN: 27ADHPA7026N1ZF</p>

            {/* Globe + cities */}
            <div className="flex items-start gap-3 mb-6">
              <div className="w-9 h-9 border border-white/10 flex items-center justify-center text-white/30 shrink-0 mt-0.5">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
                </svg>
              </div>
              <div>
                <div className="text-white/50 text-xs font-semibold mb-2 uppercase tracking-widest">Pan-India Supply</div>
                <div className="flex flex-wrap gap-1.5">
                  {cities.map((c, i) => (
                    <span key={c}
                      className={`text-[11px] px-2 py-0.5 ${i === 0 ? "bg-[var(--primary-light)] text-white font-semibold" : "text-white/35 border border-white/8"}`}>
                      {c}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact */}
            <div className="flex items-center gap-2.5 border border-[var(--primary-light)]/30 bg-[var(--primary-dark)]/20 px-4 py-2.5 w-fit">
              <div className="w-1.5 h-1.5 bg-[var(--primary-light)] rounded-full animate-pulse" />
              <span className="text-[var(--primary-light)] text-xs font-bold uppercase tracking-widest">Sales</span>
              <a href="tel:+919819002726" className="text-white/60 text-xs hover:text-white transition-colors">
                +91 98190 02726
              </a>
            </div>
            <a href="mailto:kishore@balvir.in" className="text-white/45 text-xs hover:text-white transition-colors mt-3 inline-block">
              kishore@balvir.in
            </a>
          </div>

          {/* Nav columns */}
          {Object.entries(links).map(([heading, items]) => (
            <div key={heading} className="f-reveal">
              <h4 className="text-white/50 text-[10px] font-bold uppercase tracking-[0.22em] mb-4">
                {heading}
              </h4>
              <ul className="space-y-2.5">
                {items.map(l => (
                  <li key={l}>
                    <a href="#"
                      className="text-white/45 text-sm hover:text-white transition-colors duration-200">
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

        </div>
      </div>

      {/* ── Bottom bar ──────────────────────────── */}
      <div className="border-t border-white/5 f-reveal">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-5">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">

            {/* Left — copyright */}
            <div className="flex flex-wrap items-center gap-5">
              <span className="text-white/40 text-xs">
                © {new Date().getFullYear()} Balvir Lifting. All Rights Reserved.
              </span>
            </div>

            {/* Right — developer credit */}
            <div className="flex items-center gap-1.5">
              <span className="text-white/40 text-xs">Built by</span>
              <a href="https://www.nakshatranamahacreations.com" target="_blank" rel="noopener noreferrer"
                className="text-white/50 text-xs font-semibold hover:text-[var(--primary-light)] transition-colors">
                Nakshatra Namaha Creations
              </a>
            </div>

          </div>
        </div>
      </div>

      {/* Bottom accent brand line split */}
      <div className="h-px bg-gradient-to-r from-transparent via-[var(--primary-light)]/50 to-transparent" />
    </footer>
  );
}
"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const brandGroups = [
  {
    id: "wireropes",
    label: "Wire Ropes",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
      </svg>
    ),
    brands: ["KISWIRE", "Usha Martin", "Bedmutha", "Bansal"],
  },
  {
    id: "sensors",
    label: "Door Sensors & Light Curtains",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" />
      </svg>
    ),
    brands: ["CEDES", "MEMCO", "SFT", "WECO", "TVS"],
  },
  {
    id: "doors",
    label: "Auto Doors & Mechanisms",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="1" />
        <line x1="12" y1="3" x2="12" y2="21" />
        <path d="M7 12l2 2 2-2" />
        <path d="M15 12l2 2 2-2" />
      </svg>
    ),
    brands: ["FERMATOR", "WITTUR", "SHIVAM"],
  },
  {
    id: "landing",
    label: "Manual Landing Doors",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="18" rx="1" />
        <line x1="12" y1="3" x2="12" y2="21" />
        <circle cx="9" cy="12" r="1" />
        <circle cx="15" cy="12" r="1" />
      </svg>
    ),
    brands: ["Revati"],
  },
  {
    id: "cables",
    label: "Cables & Wires",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 6h18M3 10h18M3 14h18M3 18h18" />
      </svg>
    ),
    brands: ["MACROTHERM", "DEEPCAB"],
  },
  {
    id: "automation",
    label: "Automation & Hardware",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3" />
        <path d="M19.07 4.93a10 10 0 0 1 0 14.14M4.93 4.93a10 10 0 0 0 0 14.14" />
      </svg>
    ),
    brands: ["P&F (Pepperl+Fuchs)"],
  },
  {
    id: "majors",
    label: "Elevator Majors Supported",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="2" width="18" height="20" rx="2" />
        <path d="M9 12l3-3 3 3" />
        <path d="M9 16l3 3 3-3" />
        <line x1="12" y1="9" x2="12" y2="15" />
      </svg>
    ),
    brands: ["Toshiba", "Hitachi", "OEM Partners"],
  },
];

export default function BrandsGrid() {
  const sectionRef = useRef<HTMLElement>(null);
  const headRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const footerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headRef.current,
        { y: 48, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: { trigger: headRef.current, start: "top 88%" },
        }
      );

      gsap.fromTo(
        ".brand-group-card",
        { y: 32, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.07,
          duration: 0.5,
          ease: "power2.out",
          scrollTrigger: { trigger: gridRef.current, start: "top 88%" },
        }
      );

      gsap.fromTo(
        footerRef.current,
        { y: 24, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          ease: "power2.out",
          scrollTrigger: { trigger: footerRef.current, start: "top 92%" },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 md:py-28 bg-white relative overflow-hidden">
      
      {/* Light background structural mesh layout */}
      <div className="absolute inset-0 grid-tex-light opacity-30 pointer-events-none" />

      {/* Primary variant structural glow vectors */}
      <div className="absolute -top-[10%] right-[10%] w-[35rem] h-[35rem] rounded-full bg-[var(--primary-light)]/[0.04] blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-[-5%] w-[25rem] h-[25rem] rounded-full bg-[var(--primary-dark)]/[0.02] blur-3xl pointer-events-none" />

      {/* Top accent visual break divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--primary-light)]/30 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative">

        {/* Header content mapping */}
        <div ref={headRef} className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-gradient-to-r from-[var(--primary)] to-[var(--primary-light)]" />
            <span className="text-[var(--primary)] text-[11px] font-bold uppercase tracking-[0.25em]">
              Brand Partners &amp; Principals
            </span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight tracking-tight margin-0">
              Trusted Brands,<br />
              <span className="bg-gradient-to-r from-[var(--primary)] to-[var(--primary-light)] bg-clip-text text-transparent">
                Global Quality
              </span>
            </h2>

            <p className="text-gray-500 text-sm max-w-md leading-relaxed margin-0">
              Through long-standing relationships with these manufacturers, we deliver
              the latest technology and the best quality to customers across Mumbai,
              Maharashtra and India.
            </p>
          </div>
        </div>

        {/* Brand groups grid configuration block */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {brandGroups.map((group) => (
            <BrandGroupCard key={group.id} group={group} />
          ))}
        </div>

        {/* Footer info tracking line split */}
        <div
          ref={footerRef}
          className="mt-14 flex items-center gap-5"
        >
          <div className="flex-1 h-px bg-gradient-to-r from-[var(--primary-light)]/20 to-transparent" />
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest text-center whitespace-nowrap">
            Serving Mumbai &middot; Maharashtra &middot; Pan India &nbsp;&middot;&nbsp; Since 2014
          </p>
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[var(--primary-light)]/20 to-transparent" />
        </div>

      </div>
    </section>
  );
}

function BrandGroupCard({
  group,
}: {
  group: {
    id: string;
    label: string;
    icon: React.ReactNode;
    brands: string[];
  };
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const accentRef = useRef<HTMLDivElement>(null);

  const handleEnter = () => {
    gsap.to(accentRef.current, { scaleY: 1, duration: 0.28, ease: "power2.out" });
    gsap.to(cardRef.current, {
      borderColor: "var(--primary-light)",
      boxShadow: "0 12px 30px rgba(0,0,0,0.06)",
      duration: 0.22,
    });
  };

  const handleLeave = () => {
    gsap.to(accentRef.current, { scaleY: 0, duration: 0.22, ease: "power2.in" });
    gsap.to(cardRef.current, {
      borderColor: "#e5e7eb", // default border-gray-200
      boxShadow: "0 0px 0px rgba(0,0,0,0)",
      duration: 0.22,
    });
  };

  return (
    <div
      className="brand-group-card relative overflow-hidden border border-gray-200 rounded-sm p-6 bg-white hover:bg-[var(--primary-light)]/[0.06] transition-colors duration-200 cursor-default"
      ref={cardRef}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      {/* Left interactive structural accent bar */}
      <div
        ref={accentRef}
        className="absolute left-0 top-0 bottom-0 w-[3px] bg-gradient-to-b from-[var(--primary)] to-[var(--primary-light)] scale-y-0 origin-bottom rounded-none"
      />

      {/* Category header display */}
      <div className="flex items-center gap-3.5 mb-4">
        <span className="w-8 h-8 rounded-xs flex shrink-0 items-center justify-center bg-[var(--primary-light)]/[0.06] text-[var(--primary)]">
          {group.icon}
        </span>
        <p className="text-xs font-bold text-gray-800 uppercase tracking-wide leading-tight">
          {group.label}
        </p>
      </div>

      {/* Section split rule line layout */}
      <div className="h-px bg-gray-100 mb-5" />

      {/* Highlighted text brands container pills split */}
      <div className="flex flex-wrap gap-2">
        {group.brands.map((brand) => (
          <span
            key={brand}
            className="text-[11px] font-bold text-gray-700 bg-gray-50 border border-gray-100 hover:border-[var(--primary-light)]/30 hover:text-[var(--primary)] px-3 py-1.5 rounded-xs tracking-wide transition-all duration-200"
          >
            {brand}
          </span>
        ))}
      </div>
    </div>
  );
}
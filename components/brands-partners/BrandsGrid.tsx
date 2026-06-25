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
          y: 0, opacity: 1, duration: 0.9, ease: "power3.out",
          scrollTrigger: { trigger: headRef.current, start: "top 88%" },
        }
      );

      gsap.fromTo(
        ".brand-group-card",
        { y: 32, opacity: 0 },
        {
          y: 0, opacity: 1, stagger: 0.07, duration: 0.5, ease: "power2.out",
          scrollTrigger: { trigger: gridRef.current, start: "top 88%" },
        }
      );

      gsap.fromTo(
        footerRef.current,
        { y: 24, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.7, ease: "power2.out",
          scrollTrigger: { trigger: footerRef.current, start: "top 92%" },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      style={{
        position: "relative",
        overflow: "hidden",
        background: "#07192E",
        padding: "100px 0 112px",
        fontFamily: "'DM Sans', 'Helvetica Neue', sans-serif",
      }}
    >
      {/* Subtle background grid */}
      <div
        style={{
          position: "absolute", inset: 0, pointerEvents: "none",
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.022) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.022) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Ambient glow */}
      <div style={{
        position: "absolute", top: "-10%", right: "10%",
        width: 560, height: 560, borderRadius: "50%",
        background: "radial-gradient(circle, rgba(26,79,196,0.09) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />
      <div style={{
        position: "absolute", bottom: "0%", left: "-5%",
        width: 400, height: 400, borderRadius: "50%",
        background: "radial-gradient(circle, rgba(15,52,96,0.2) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      {/* Top rule */}
      <div style={{
        position: "absolute", top: 0, left: 0, right: 0, height: 1,
        background: "linear-gradient(90deg, transparent, rgba(26,79,196,0.45), transparent)",
        pointerEvents: "none",
      }} />

      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 32px", position: "relative" }}>

        {/* Header */}
        <div ref={headRef} style={{ marginBottom: 60 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 18 }}>
            <div style={{ width: 32, height: 1, background: "linear-gradient(90deg, #1A4FC4, #0F3460)" }} />
            <span style={{
              fontSize: 11, fontWeight: 600, letterSpacing: "0.25em",
              textTransform: "uppercase", color: "#93C5FD",
            }}>
              Brand Partners & Principals
            </span>
          </div>

          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "flex-end", gap: 24 }}>
            <h2 style={{
              fontSize: "clamp(32px, 4.5vw, 52px)", fontWeight: 700,
              lineHeight: 1.1, letterSpacing: "-0.02em", margin: 0,
              color: "#f1f5f9",
            }}>
              Trusted Brands,
              <br />
              <span style={{
                background: "linear-gradient(135deg, #1A4FC4 0%, #60A5FA 100%)",
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}>
                Global Quality
              </span>
            </h2>

            <p style={{
              color: "#475569", fontSize: 14, lineHeight: 1.75,
              maxWidth: 380, margin: 0,
            }}>
              Through long-standing relationships with these manufacturers, we deliver
              the latest technology and the best quality to customers across Mumbai,
              Maharashtra and India.
            </p>
          </div>
        </div>

        {/* Brand groups grid */}
        <div
          ref={gridRef}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
            gap: 16,
          }}
        >
          {brandGroups.map((group) => (
            <BrandGroupCard key={group.id} group={group} />
          ))}
        </div>

        {/* Footer supporting line */}
        <div
          ref={footerRef}
          style={{
            marginTop: 56,
            display: "flex",
            alignItems: "center",
            gap: 20,
          }}
        >
          <div style={{
            flex: 1,
            height: 1,
            background: "linear-gradient(90deg, rgba(26,79,196,0.3), transparent)",
          }} />
          <p style={{
            fontSize: 13, color: "#334155", margin: 0,
            letterSpacing: "0.04em", textAlign: "center",
            whiteSpace: "nowrap",
          }}>
            Serving Mumbai · Maharashtra · Pan India &nbsp;·&nbsp; Since 2014
          </p>
          <div style={{
            flex: 1,
            height: 1,
            background: "linear-gradient(90deg, transparent, rgba(26,79,196,0.3))",
          }} />
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
      borderColor: "rgba(26,79,196,0.35)",
      background: "rgba(26,79,196,0.05)",
      duration: 0.22,
    });
  };

  const handleLeave = () => {
    gsap.to(accentRef.current, { scaleY: 0, duration: 0.22, ease: "power2.in" });
    gsap.to(cardRef.current, {
      borderColor: "rgba(255,255,255,0.06)",
      background: "rgba(255,255,255,0.02)",
      duration: 0.22,
    });
  };

  return (
    <div
      className="brand-group-card"
      ref={cardRef}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      style={{
        position: "relative",
        overflow: "hidden",
        border: "1px solid rgba(255,255,255,0.06)",
        borderRadius: 12,
        padding: "22px 22px 20px",
        background: "rgba(255,255,255,0.02)",
        cursor: "default",
        transition: "background 0.22s",
      }}
    >
      {/* Left accent bar */}
      <div
        ref={accentRef}
        style={{
          position: "absolute", left: 0, top: 0, bottom: 0, width: 3,
          background: "linear-gradient(180deg, #1A4FC4, #0F3460)",
          transform: "scaleY(0)", transformOrigin: "bottom",
          borderRadius: "0 0 0 0",
        }}
      />

      {/* Category label row */}
      <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
        <span style={{
          width: 30, height: 30, borderRadius: 7, flexShrink: 0,
          display: "flex", alignItems: "center", justifyContent: "center",
          background: "rgba(26,79,196,0.12)",
          color: "#93C5FD",
        }}>
          {group.icon}
        </span>
        <p style={{
          fontSize: 11, fontWeight: 600, margin: 0,
          color: "#475569", textTransform: "uppercase", letterSpacing: "0.12em",
          lineHeight: 1.3,
        }}>
          {group.label}
        </p>
      </div>

      {/* Divider */}
      <div style={{
        height: 1,
        background: "rgba(255,255,255,0.05)",
        marginBottom: 16,
      }} />

      {/* Brand chips */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
        {group.brands.map((brand) => (
          <span
            key={brand}
            style={{
              fontSize: 12, fontWeight: 600,
              color: "#e2e8f0",
              background: "rgba(15,52,96,0.5)",
              border: "1px solid rgba(26,79,196,0.18)",
              padding: "5px 12px",
              borderRadius: 6,
              letterSpacing: "0.03em",
              lineHeight: 1,
            }}
          >
            {brand}
          </span>
        ))}
      </div>
    </div>
  );
}
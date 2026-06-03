"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const categories = [
  {
    id: "elevator",
    label: "Elevators & Escalators Accessories",
    shortLabel: "Elevator Accessories",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="2" width="18" height="20" rx="2"/>
        <path d="M9 12l3-3 3 3"/><path d="M9 16l3 3 3-3"/>
        <line x1="12" y1="9" x2="12" y2="15"/>
      </svg>
    ),
    count: 7,
    products: [
      {
        title: "Infra Red Door Sensors (Light Curtains)",
        icon: (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="3"/><path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/>
          </svg>
        ),
        brands: ["CEDES — Switzerland", "MEMCO — UK", "SFT / WECO / TVS — China"],
        details: [
          "Multi-brand light curtains for elevator door protection",
          "Criss Cross Beams: 94 to 154 beams, full height 2000 mm",
          "Applicable for Static & Dynamic installations",
          "3D Version Sensor (CEDES IMS 100) for elevator landing area detection",
          "Time-of-Flight technology — prevents closing door triggering its own reopening",
          "Complete entrance-area monitoring in a single, compact device",
          "No need for controller or magnet switch on the door",
          "No troublesome configuration required",
        ],
      },
      {
        title: "Auto Door & Mechanism",
        icon: (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="3" width="18" height="18" rx="1"/><line x1="12" y1="3" x2="12" y2="21"/>
            <path d="M7 12l2 2 2-2"/><path d="M15 12l2 2 2-2"/>
          </svg>
        ),
        brands: ["FERMATOR", "WITTUR", "SHIVAM"],
        details: [
          "Available in MS / SS (Mild Steel / Stainless Steel)",
          "Small Window and Full Vision panel options",
          "Suitable for all types of elevator applications",
          "Robust mechanism for heavy-duty commercial use",
        ],
      },
      {
        title: "Wireless / Wired CCTV for Elevators",
        icon: (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
            <path d="M23 7l-7 5 7 5V7z"/><rect x="1" y="5" width="15" height="14" rx="2"/>
          </svg>
        ),
        brands: ["Specialised Elevator-Grade"],
        details: [
          "Made specially for elevator application — withstands heavy movements and jerks",
          "Wireless: real-time video with NO interference up to 150 floors (Analog systems)",
          "Up to 1500 meters range for digital IP-based systems",
          "Pre-configured plug and play — no software required",
          "Elevator Flat Travelling Cables included for CCTV & multimedia display",
          "Revolutionary product designed for elevator application only",
          "Traditional coax cable installation issues completely eliminated",
        ],
      },
      {
        title: "Voice Announcement System",
        icon: (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/>
            <path d="M19.07 4.93a10 10 0 0 1 0 14.14"/>
          </svg>
        ),
        brands: ["Multi Brand"],
        details: [
          "MP3 music running system for cabin ambience",
          "Emergency Messages broadcasting capability",
          "Chime alerts at every floor",
          "Floor-by-floor announcement system",
        ],
      },
      {
        title: "Automatic Rescue Device (ARD) / UPS",
        icon: (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
            <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
          </svg>
        ),
        brands: ["ULTRONIX", "Excella", "AK Automation", "Godrej"],
        details: [
          "Standalone type or Inverter type",
          "Applicable for any type and any speed of elevator",
          "Ensures safe evacuation during power failure",
          "Automatic operation upon power outage",
          "Wide range of capacity options available",
        ],
      },
      {
        title: "Elevator Drives (Variable Frequency Drives)",
        icon: (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="2" width="20" height="20" rx="2"/><circle cx="12" cy="12" r="4"/>
            <path d="M12 8v1M12 15v1M8 12h1M15 12h1"/>
          </svg>
        ),
        brands: ["TOSHIBA", "HITACHI", "Fuji", "Yasakawa"],
        details: [
          "5 HP Onwards capacity range",
          "Reliable, efficient and quiet operation",
          "Compatible with any type and speed of elevator",
          "Energy-saving intelligent drive control",
        ],
      },
      {
        title: "Flat Travelling Cables",
        icon: (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 6h18M3 10h18M3 14h18M3 18h18"/>
          </svg>
        ),
        brands: ["MACROTHERM", "DEEPCAB", "Datwayler", "G&G (on order)"],
        details: [
          "04 Core × 0.75 Sqmm",
          "06 Core × 0.75 Sqmm",
          "12 Core × 0.65 Sqmm",
          "24 Core × 0.75 Sqmm (on make-to-order basis)",
          "10 Core × 0.75 Sqmm + 2 Core × 0.5 Sqmm (Shielded, on order)",
          "Elevator Flat Travelling Cables for CCTV and multimedia display system",
          "Suitable for any type and speed of elevators",
        ],
      },
    ],
  },
  {
    id: "wireropes",
    label: "Steel Wire Ropes — Elevator Application",
    shortLabel: "Wire Ropes (Elevator)",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/>
        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>
      </svg>
    ),
    count: 1,
    products: [
      {
        title: "Elevator Steel Wire Ropes",
        icon: (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
            <line x1="2" y1="12" x2="22" y2="12"/>
          </svg>
        ),
        brands: ["KISSWIRE — Korean", "Usha Martin", "BAHART Wire Ropes", "BEDMUTHA"],
        details: [
          "Confirming to IS: 2365 CFN (Core Fibre Natural), Tensile 1420/sqmm, Lay RHO",
          "Dia. 13mm — 8 × 19S construction",
          "Dia. 10mm — 8 × 19S construction",
          "Dia. 08mm — 8 × 19S construction",
          "Dia. 06mm — 6 × 19S construction",
          "USHA MARTIN / KISSWIRE available on demand — minimum order qty per month contract",
          "Applicable for elevators of all types and capacities",
        ],
      },
    ],
  },
  {
    id: "offshore",
    label: "Wire Ropes — Shipping / Offshore / Construction",
    shortLabel: "Wire Ropes (Offshore)",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="5" r="3"/><line x1="12" y1="8" x2="12" y2="21"/>
        <path d="M5 21c0-3 3.5-6 7-6s7 3 7 6"/>
      </svg>
    ),
    count: 3,
    products: [
      {
        title: "KISWIRE Steel Wire Ropes (South Korea, Est. 1945)",
        icon: (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/>
            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
          </svg>
        ),
        brands: ["KISWIRE — World's largest high carbon steel wire producer"],
        details: [
          "World's largest producer of Steel Wire Ropes — established 1945",
          "40 manufacturing locations across Europe, Japan, Asia and North America",
          "5,500 employees worldwide | USD 2.2 Billion annual sales",
          "Annual production: 1.2 million MT | Exports to 80+ countries",
          "Applications: Cranes, Ports, Oil & Gas, Elevators, Infrastructure, Mining",
          "Complete solution provider for Cranes, Ports, Oil & Gas, Elevator, Structural, Mining",
          "Specialises in world-leading sophisticated wire and wire rope products",
        ],
      },
      {
        title: "KISWIRE Production Range & Capacity",
        icon: (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/>
          </svg>
        ),
        brands: ["Malaysia", "Indonesia", "Vietnam plants"],
        details: [
          "Wire Rope — 120,000 MT/year",
          "Bead Wire — 350,000 MT/year",
          "Neptune — 40,000 MT/year",
          "Steel Cord, Hose Wire & SSW — 400,000 MT/year",
          "PC Wire & Strand — 120,000 MT/year",
          "Spring Wire — 170,000 MT/year",
          "Total combined capacity: 1,200,000 MT/year",
        ],
      },
      {
        title: "Quality Certifications & OEM Clients",
        icon: (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="8" r="4"/><path d="M9 15l-3 7 6-3 6 3-3-7"/>
          </svg>
        ),
        brands: ["API", "DNV", "ABS", "BV", "LRS"],
        details: [
          "American Petroleum Institute (API) certified",
          "DNV — Det Norske Veritas certified",
          "ABS — American Bureau of Shipping certified",
          "BV — Bureau Veritas certified",
          "LRS — Lloyd's Register of Shipping certified",
          "OEM supplier: KONE (Finland), NOV (USA), Doosan (Korea), ZPMC (China)",
          "OEM supplier: Kobelco, Tadano (Japan), XCMG (China), MacGregor (Norway)",
          "Indian OEM: AP Cranes, URB, Electromech, Sanghvi Movers, Reliance Industries",
        ],
      },
    ],
  },
  {
    id: "led",
    label: "LED Lighting & Elevator Air Conditioning",
    shortLabel: "LED & Lighting",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <line x1="9" y1="18" x2="15" y2="18"/><line x1="10" y1="22" x2="14" y2="22"/>
        <path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5A4.61 4.61 0 0 1 8.91 14"/>
      </svg>
    ),
    count: 2,
    products: [
      {
        title: "LED Lighting for Elevators",
        icon: (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/>
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
            <line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/>
          </svg>
        ),
        brands: ["BALVIR Brand", "Others on demand"],
        details: [
          "5 to 7 Watt — 75 mm Cutout, round, White/WW Colour, Panel/SMD/COB type, ALUMINIUM HOUSING",
          "3 to 4 Watt — 75 / 50 mm Cutout, round, White/WW Colour, Panel/SMD/COB type, ALUMINIUM HOUSING",
          "High-quality aluminium housing for durability",
          "Available in White and Warm White colour options",
          "Panel, SMD and COB type configurations",
          "Suitable for elevator cabin and general industrial applications",
        ],
      },
      {
        title: "Elevator Air Conditioning System (AC)",
        icon: (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2v20M2 12h20"/><path d="M5 5l14 14M19 5L5 19"/>
          </svg>
        ),
        brands: ["Korean Make (Brand from Korea)"],
        details: [
          "Specially designed for elevator application — light weight construction",
          "Zero water discharge, programmable air conditioning",
          "Unique design for low vibration and noise during operation",
          "Easy to install on new and existing elevators using blower pockets",
          "Dimensions: W455mm × D615mm × H435mm",
          "Air Circulation: 400 M3/H or 330 M3/H",
          "No software configuration required",
        ],
      },
    ],
  },
  {
    id: "accessories",
    label: "Other Accessories & Hardware",
    shortLabel: "Other Accessories",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14M4.93 4.93a10 10 0 0 0 0 14.14"/>
        <path d="M14.83 9.17a4 4 0 0 1 0 5.66M9.17 9.17a4 4 0 0 0 0 5.66"/>
      </svg>
    ),
    count: 13,
    products: [
      {
        title: "Hardware & Electrical Accessories",
        icon: (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
            <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
          </svg>
        ),
        brands: ["Multi Brand", "P&F German Make (Floor Sensors)"],
        details: [
          "Fan — High Quality, Heavy Duty / Blower type",
          "Junction Box & Maintenance Box",
          "Motion Sensor",
          "Intercom System / Emergency Alarm System / Guide Rails",
          "Final Limit Switch / Car Gate Switch",
          "LOP / COP (Landing / Car Operating Panels)",
          "Limit Switches / Cargate Switches",
          "Emergency Alarm systems",
          "Wires (all types)",
          "Drives — Fuji / Toshiba / Others",
          "Floor Detection Sensors — Infra Red beams based, C type (P&F German Make)",
          "DOB / VA Cards",
          "Emergency Communication Systems — PUSH button type & Handset Dialer type",
          "Other Mechanical & Hardware Items on requirement",
        ],
      },
    ],
  },
];

export default function ProductCatalog() {
  const sectionRef = useRef<HTMLElement>(null);
  const headRef = useRef<HTMLDivElement>(null);
  const tabsRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState("elevator");
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header reveal
      gsap.fromTo(
        headRef.current,
        { y: 60, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 1, ease: "power3.out",
          scrollTrigger: { trigger: headRef.current, start: "top 85%" },
        }
      );

      // Tabs reveal
      gsap.fromTo(
        tabsRef.current,
        { y: 30, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.8, ease: "power2.out", delay: 0.2,
          scrollTrigger: { trigger: tabsRef.current, start: "top 90%" },
        }
      );

      // Content reveal
      gsap.fromTo(
        contentRef.current,
        { y: 40, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.8, ease: "power2.out", delay: 0.4,
          scrollTrigger: { trigger: contentRef.current, start: "top 90%" },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Parallax on mouse move
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = section.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;

      gsap.to(".parallax-slow", { x: x * 20, y: y * 12, duration: 1.2, ease: "power1.out" });
      gsap.to(".parallax-fast", { x: x * 40, y: y * 24, duration: 0.8, ease: "power1.out" });
      gsap.to(".parallax-med", { x: x * -15, y: y * -10, duration: 1, ease: "power1.out" });
    };

    section.addEventListener("mousemove", handleMouseMove);
    return () => section.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const handleTabChange = useCallback(
    (id: string) => {
      if (animating || id === active) return;
      setAnimating(true);

      gsap.to(contentRef.current, {
        opacity: 0, y: 16, duration: 0.22, ease: "power2.in",
        onComplete: () => {
          setActive(id);
          gsap.fromTo(
            contentRef.current,
            { opacity: 0, y: -16 },
            {
              opacity: 1, y: 0, duration: 0.32, ease: "power3.out",
              onComplete: () => setAnimating(false),
            }
          );
        },
      });
    },
    [active, animating]
  );

  // Stagger cards when active changes
  useEffect(() => {
    gsap.fromTo(
      ".prod-card",
      { y: 24, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.08, duration: 0.45, ease: "power2.out", delay: 0.1 }
    );
  }, [active]);

  const current = categories.find((c) => c.id === active)!;

  return (
    <section
      ref={sectionRef}
      id="catalog"
      style={{
        position: "relative",
        overflow: "hidden",
        background: "#07192E",
        padding: "100px 0 120px",
        fontFamily: "'DM Sans', 'Helvetica Neue', sans-serif",
      }}
    >
      {/* Background grid */}
      <div
        style={{
          position: "absolute", inset: 0, pointerEvents: "none",
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Ambient orbs */}
      <div
        className="parallax-slow"
        style={{
          position: "absolute", top: "10%", left: "-5%",
          width: 500, height: 500, borderRadius: "50%",
          background: "radial-gradient(circle, rgba(26,79,196,0.12) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />
      <div
        className="parallax-fast"
        style={{
          position: "absolute", bottom: "5%", right: "-5%",
          width: 400, height: 400, borderRadius: "50%",
          background: "radial-gradient(circle, rgba(26,79,196,0.1) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />
      <div
        className="parallax-med"
        style={{
          position: "absolute", top: "40%", right: "20%",
          width: 300, height: 300, borderRadius: "50%",
          background: "radial-gradient(circle, rgba(15,52,96,0.25) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      {/* Floating accent lines */}
      <div
        className="parallax-slow"
        style={{
          position: "absolute", top: 0, left: 0, right: 0, height: 1,
          background: "linear-gradient(90deg, transparent, rgba(26,79,196,0.5), transparent)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 32px", position: "relative" }}>

        {/* Header */}
        <div ref={headRef} style={{ marginBottom: 56 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20 }}>
            <div style={{
              width: 32, height: 1,
              background: "linear-gradient(90deg, #1A4FC4, #0F3460)",
            }} />
            <span style={{
              fontSize: 11, fontWeight: 600, letterSpacing: "0.25em",
              textTransform: "uppercase", color: "#93C5FD",
            }}>
              Product Catalogue — FY 2026–27
            </span>
          </div>

          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "flex-end", gap: 24 }}>
            <div>
              <h2 style={{
                fontSize: "clamp(36px, 5vw, 56px)", fontWeight: 700,
                lineHeight: 1.1, letterSpacing: "-0.02em", margin: 0,
                color: "#f1f5f9",
              }}>
                Elevators & Industrial
                <br />
                <span style={{
                  background: "linear-gradient(135deg, #1A4FC4 0%, #0F3460 100%)",
                  WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}>
                  Products We Supply
                </span>
              </h2>
            </div>
            <p style={{
              color: "#64748b", fontSize: 14, lineHeight: 1.7,
              maxWidth: 360, margin: 0,
            }}>
              Reliable, affordable, high-quality products sourced from trusted global
              and Indian manufacturers. Earning trust through business since 2014.
            </p>
          </div>
        </div>

        <div style={{ display: "flex", flexWrap: "wrap", gap: 32 }}>

          {/* Sidebar tabs */}
          <div ref={tabsRef} style={{ width: "100%", maxWidth: 280, flexShrink: 0 }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
              {categories.map((c) => {
                const isActive = active === c.id;
                return (
                  <button
                    key={c.id}
                    onClick={() => handleTabChange(c.id)}
                    style={{
                      display: "flex", alignItems: "center", gap: 12,
                      padding: "14px 18px", textAlign: "left", cursor: "pointer",
                      border: isActive
                        ? "1px solid rgba(26,79,196,0.5)"
                        : "1px solid rgba(255,255,255,0.06)",
                      borderRadius: 10, transition: "all 0.25s",
                      background: isActive
                        ? "rgba(26,79,196,0.1)"
                        : "rgba(255,255,255,0.02)",
                      fontFamily: "inherit",
                    }}
                  >
                    <span style={{
                      width: 38, height: 38, borderRadius: 8, flexShrink: 0,
                      display: "flex", alignItems: "center", justifyContent: "center",
                      background: isActive ? "rgba(26,79,196,0.2)" : "rgba(255,255,255,0.05)",
                      color: isActive ? "#93C5FD" : "#475569",
                      transition: "all 0.25s",
                    }}>
                      {c.icon}
                    </span>
                    <div style={{ minWidth: 0 }}>
                      <p style={{
                        fontSize: 13, fontWeight: 500, margin: 0,
                        color: isActive ? "#e2e8f0" : "#64748b",
                        lineHeight: 1.4, transition: "color 0.25s",
                      }}>
                        {c.shortLabel}
                      </p>
                      <p style={{
                        fontSize: 11, margin: "2px 0 0",
                        color: isActive ? "#1A4FC4" : "#334155",
                        transition: "color 0.25s",
                      }}>
                        {c.count} {c.count === 1 ? "product" : "products"}
                      </p>
                    </div>
                    {isActive && (
                      <div style={{
                        marginLeft: "auto", width: 6, height: 6,
                        borderRadius: "50%", background: "#1A4FC4", flexShrink: 0,
                      }} />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Stats block */}
            <div style={{
              marginTop: 24, padding: 20,
              border: "1px solid rgba(255,255,255,0.06)",
              borderRadius: 12, background: "rgba(255,255,255,0.02)",
            }}>
              <p style={{ fontSize: 11, color: "#475569", marginBottom: 16, letterSpacing: "0.1em", textTransform: "uppercase" }}>
                Why Balvir Lifting
              </p>
              {[
                { val: "2014", label: "Established" },
                { val: "5+", label: "Product segments" },
                { val: "Global", label: "Sourcing network" },
                { val: "Pan India", label: "Service coverage" },
              ].map((s) => (
                <div key={s.val} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "8px 0", borderBottom: "1px solid rgba(255,255,255,0.04)" }}>
                  <span style={{ fontSize: 12, color: "#64748b" }}>{s.label}</span>
                  <span style={{ fontSize: 13, fontWeight: 600, color: "#93C5FD" }}>{s.val}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Content panel */}
          <div ref={contentRef} style={{ flex: 1, minWidth: 0 }}>
            {/* Panel header */}
            <div style={{
              display: "flex", alignItems: "center", gap: 14,
              padding: "20px 28px",
              border: "1px solid rgba(255,255,255,0.06)",
              borderBottom: "1px solid rgba(26,79,196,0.2)",
              borderRadius: "12px 12px 0 0",
              background: "rgba(26,79,196,0.05)",
            }}>
              <span style={{
                width: 44, height: 44, borderRadius: 10,
                display: "flex", alignItems: "center", justifyContent: "center",
                background: "rgba(26,79,196,0.15)", color: "#93C5FD",
              }}>
                {current.icon}
              </span>
              <div>
                <h3 style={{ fontSize: 17, fontWeight: 600, color: "#f1f5f9", margin: 0, lineHeight: 1.3 }}>
                  {current.label}
                </h3>
                <p style={{ fontSize: 12, color: "#475569", margin: "3px 0 0" }}>
                  {current.count} {current.count === 1 ? "product" : "products"} in this category
                </p>
              </div>
              <div style={{
                marginLeft: "auto",
                fontSize: 11, fontWeight: 600, letterSpacing: "0.1em",
                color: "#60A5FA",
                background: "rgba(26,79,196,0.1)",
                border: "1px solid rgba(26,79,196,0.2)",
                padding: "4px 12px", borderRadius: 20,
                textTransform: "uppercase",
              }}>
                FY 2026–27
              </div>
            </div>

            {/* Cards */}
            <div style={{
              padding: "24px",
              border: "1px solid rgba(255,255,255,0.06)",
              borderTop: "none",
              borderRadius: "0 0 12px 12px",
              background: "rgba(255,255,255,0.01)",
              display: "flex", flexDirection: "column", gap: 16,
            }}>
              {current.products.map((p, i) => (
                <ProductCard key={i} product={p} index={i} />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

function ProductCard({
  product,
  index,
}: {
  product: { title: string; icon: React.ReactNode; brands: string[]; details: string[] };
  index: number;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const accentRef = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);

  const handleEnter = () => {
    setHovered(true);
    gsap.to(accentRef.current, { scaleY: 1, duration: 0.3, ease: "power2.out" });
    gsap.to(cardRef.current, { borderColor: "rgba(26,79,196,0.3)", duration: 0.25 });
  };

  const handleLeave = () => {
    setHovered(false);
    gsap.to(accentRef.current, { scaleY: 0, duration: 0.25, ease: "power2.in" });
    gsap.to(cardRef.current, { borderColor: "rgba(255,255,255,0.06)", duration: 0.25 });
  };

  return (
    <div
      className="prod-card"
      ref={cardRef}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      style={{
        position: "relative", overflow: "hidden",
        border: "1px solid rgba(255,255,255,0.06)",
        borderRadius: 10, padding: "22px 24px",

        transition: "background 0.25s",
        cursor: "default",
        background: hovered ? "rgba(26,79,196,0.04)" : "rgba(255,255,255,0.02)",
      }}
    >
      {/* Left accent */}
      <div
        ref={accentRef}
        style={{
          position: "absolute", left: 0, top: 0, bottom: 0, width: 3,
          background: "linear-gradient(180deg, #1A4FC4, #0F3460)",
          transform: "scaleY(0)", transformOrigin: "bottom",
          borderRadius: "0 0 0 0",
        }}
      />

      {/* Card header */}
      <div style={{ display: "flex", alignItems: "flex-start", gap: 14, marginBottom: 16 }}>
        <div style={{
          width: 40, height: 40, borderRadius: 8, flexShrink: 0,
          display: "flex", alignItems: "center", justifyContent: "center",
          background: "rgba(26,79,196,0.1)", color: "#93C5FD",
        }}>
          {product.icon}
        </div>
        <h4 style={{ fontSize: 15, fontWeight: 600, color: "#e2e8f0", margin: 0, lineHeight: 1.4, paddingTop: 2 }}>
          {product.title}
        </h4>
      </div>

      {/* Brands */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 16 }}>
        {product.brands.map((b) => (
          <span
            key={b}
            style={{
              fontSize: 11, fontWeight: 600,
              color: "#60A5FA",
              background: "rgba(26,79,196,0.08)",
              border: "1px solid rgba(26,79,196,0.2)",
              padding: "3px 10px", borderRadius: 20,
              letterSpacing: "0.03em",
            }}
          >
            {b}
          </span>
        ))}
      </div>

      {/* Details */}
      <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 6 }}>
        {product.details.map((d, j) => (
          <li key={j} style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
            <span style={{
              width: 5, height: 5, borderRadius: "50%", flexShrink: 0,
              background: "#1A4FC4", marginTop: 7,
            }} />
            <span style={{ fontSize: 13, color: "#64748b", lineHeight: 1.6 }}>{d}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
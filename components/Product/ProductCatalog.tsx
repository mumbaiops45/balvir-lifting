"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

gsap.registerPlugin(ScrollTrigger);

const categories = [
  {
    id: "elevator",
    label: "Elevator & Escalator Accessories",
    shortLabel: "Elevator Accessories",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="2" width="18" height="20" rx="2" />
        <path d="M9 12l3-3 3 3" /><path d="M9 16l3 3 3-3" />
        <line x1="12" y1="9" x2="12" y2="15" />
      </svg>
    ),
    count: 10,
    products: [
      {
        title: "Infra-Red Door Sensors & Light Curtains",
        icon: (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="3" /><path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" />
          </svg>
        ),
        brands: ["CEDES — Switzerland", "MEMCO — UK", "SFT / WECO / TVS — China"],
        details: [
          "Multi-brand light curtains for elevator door protection",
          "Criss Cross Beams: 94 to 154 beams, full height 2000 mm",
          "Applicable for Static & Dynamic installations",
          "3D Version Sensor (CEDES IMS 100) for elevator landing area detection",
          "Time-of-Flight technology — prevents closing door triggering its own reopening",
          "No need for controller or magnet switch on the door",
        ],
      },
      {
        title: "Auto Doors & Mechanisms",
        icon: (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="3" width="18" height="18" rx="1" /><line x1="12" y1="3" x2="12" y2="21" />
            <path d="M7 12l2 2 2-2" /><path d="M15 12l2 2 2-2" />
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
        title: "Manual Landing Doors",
        icon: (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="3" width="20" height="18" rx="1" /><line x1="12" y1="3" x2="12" y2="21" />
            <circle cx="9" cy="12" r="1" /><circle cx="15" cy="12" r="1" />
          </svg>
        ),
        brands: ["Revati Type"],
        details: [
          "Revati-type manual landing doors for standard elevator shafts",
          "Suitable for residential and light commercial elevators",
          "Durable construction for long service life",
        ],
      },
      {
        title: "Automatic Rescue Device (ARD) / UPS",
        icon: (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
            <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
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
        title: "VFD Elevator Drives",
        icon: (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="2" width="20" height="20" rx="2" /><circle cx="12" cy="12" r="4" />
            <path d="M12 8v1M12 15v1M8 12h1M15 12h1" />
          </svg>
        ),
        brands: ["TOSHIBA", "HITACHI", "Fuji", "Yaskawa"],
        details: [
          "5 HP onwards capacity range",
          "Reliable, efficient and quiet operation",
          "Compatible with any type and speed of elevator",
          "Energy-saving intelligent drive control",
        ],
      },
      {
        title: "Voice Announcement System",
        icon: (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" /><path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
            <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
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
        title: "Wireless & Wired CCTV for Elevators",
        icon: (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
            <path d="M23 7l-7 5 7 5V7z" /><rect x="1" y="5" width="15" height="14" rx="2" />
          </svg>
        ),
        brands: ["Specialised Elevator-Grade"],
        details: [
          "Made specially for elevator application — withstands heavy movements and jerks",
          "Wireless: real-time video with NO interference up to 150 floors",
          "Up to 1500 metres range for digital IP-based systems",
          "Pre-configured plug and play — no software required",
          "Traditional coax cable installation issues completely eliminated",
        ],
      },
      {
        title: "Door Closers, Springs & Magnets",
        icon: (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 8h1a4 4 0 0 1 0 8h-1" /><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />
            <line x1="6" y1="1" x2="6" y2="4" /><line x1="10" y1="1" x2="10" y2="4" /><line x1="14" y1="1" x2="14" y2="4" />
          </svg>
        ),
        brands: ["Multi Brand"],
        details: [
          "Door closers for landing and cabin doors",
          "High-tension door springs for reliable return action",
          "Door magnets for hold-open and safety applications",
          "Compatible with all major door mechanism brands",
        ],
      },
      {
        title: "LOP / COP Panels & Floor Detection",
        icon: (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="3" width="20" height="14" rx="2" /><path d="M8 21h8M12 17v4" />
            <circle cx="9" cy="10" r="1" /><circle cx="12" cy="10" r="1" /><circle cx="15" cy="10" r="1" />
          </svg>
        ),
        brands: ["Multi Brand", "P&F — German Make (Floor Sensors)"],
        details: [
          "Landing Operating Panels (LOP) and Car Operating Panels (COP)",
          "Floor Detection Sensors — Infra-red beam based, C-type (P&F German Make)",
          "DOB / VA Cards for display and control",
          "Compatible with all major elevator controller brands",
        ],
      },
    ],
  },
  {
    id: "wireropes",
    label: "Steel Wire Ropes",
    shortLabel: "Steel Wire Ropes",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
      </svg>
    ),
    count: 4,
    products: [
      {
        title: "Elevator Wire Ropes",
        icon: (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="2" width="18" height="20" rx="2" />
            <path d="M9 12l3-3 3 3" /><path d="M9 16l3 3 3-3" />
          </svg>
        ),
        brands: ["KISWIRE — Korean", "Usha Martin", "Bedmutha", "Bansal"],
        details: [
          "Conforming to IS:2365 — CFN (Core Fibre Natural), Tensile 1420/sqmm, Lay RHO",
          "Dia. 13 mm — 8 × 19S construction",
          "Dia. 10 mm — 8 × 19S construction",
          "Dia. 8 mm — 8 × 19S construction",
          "Dia. 6 mm — 6 × 19S construction",
          "Applicable for elevators of all types and capacities",
        ],
      },
      {
        title: "Offshore & Shipping Ropes",
        icon: (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 17l9-13 9 13H3z" /><line x1="12" y1="4" x2="12" y2="17" />
            <line x1="3" y1="17" x2="21" y2="17" />
          </svg>
        ),
        brands: ["KISWIRE — World's Largest High Carbon Steel Wire Producer"],
        details: [
          "API, DNV, ABS, BV and LRS certified",
          "Applications: Oil & Gas, Ports, Shipping, Offshore platforms",
          "OEM supplier to KONE, NOV, ZPMC, MacGregor and others",
          "Annual production capacity: 1.2 million MT",
          "Exports to 80+ countries worldwide",
        ],
      },
      {
        title: "Construction, Crane & Material-Handling Ropes",
        icon: (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
            <path d="M2 20h20M4 20V10l8-6 8 6v10" /><rect x="9" y="14" width="6" height="6" />
          </svg>
        ),
        brands: ["KISWIRE", "Usha Martin", "Bedmutha", "Bansal"],
        details: [
          "Suitable for tower cranes, EOT cranes and hoists",
          "High-tensile construction for heavy lift applications",
          "Wide range of diameters and constructions available",
          "Applicable for mining, infrastructure and material handling",
          "OEM supply to AP Cranes, Electromech, Sanghvi Movers, Reliance Industries",
        ],
      },
      {
        title: "KISWIRE — Brand Overview",
        icon: (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="8" r="4" /><path d="M9 15l-3 7 6-3 6 3-3-7" />
          </svg>
        ),
        brands: ["South Korea — Est. 1945"],
        details: [
          "World's largest producer of steel wire ropes — established 1945",
          "40 manufacturing locations across Europe, Japan, Asia and North America",
          "5,500 employees worldwide | USD 2.2 Billion annual sales",
          "Certifications: API, DNV, ABS, BV, LRS",
          "Complete solution for Cranes, Ports, Oil & Gas, Elevators, Mining",
        ],
      },
    ],
  },
  {
    id: "led",
    label: "LED Lighting & Elevator Air Conditioning",
    shortLabel: "LED & AC",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <line x1="9" y1="18" x2="15" y2="18" /><line x1="10" y1="22" x2="14" y2="22" />
        <path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5A4.61 4.61 0 0 1 8.91 14" />
      </svg>
    ),
    count: 4,
    products: [
      {
        title: "Round LED Panels — SMD / COB",
        icon: (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="5" /><line x1="12" y1="1" x2="12" y2="3" /><line x1="12" y1="21" x2="12" y2="23" />
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" /><line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
            <line x1="1" y1="12" x2="3" y2="12" /><line x1="21" y1="12" x2="23" y2="12" />
          </svg>
        ),
        brands: ["BALVIR Brand", "Others on demand"],
        details: [
          "75 mm cutout — round and square options",
          "5 W to 7 W — aluminium housing",
          "3 W to 4 W — 75 / 50 mm cutout",
          "Warm White and White colour variants",
          "Panel, SMD and COB type configurations",
          "Suitable for elevator cabin and general industrial applications",
        ],
      },
      {
        title: "Cabin Fans & Blower Fans",
        icon: (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2a10 10 0 1 0 10 10" /><path d="M12 12l8-8" />
            <path d="M12 12c0-4 2-6 4-8" /><path d="M12 12c4 0 6 2 8 4" />
          </svg>
        ),
        brands: ["BALVIR Brand", "Multi Brand"],
        details: [
          "Cabin fans — 300 mm standard size",
          "Blower fans — 330 × 45 mm compact design",
          "Heavy duty, high-quality motor for continuous operation",
          "Low noise, suitable for passenger cabins",
        ],
      },
      {
        title: "Elevator Air Conditioning System",
        icon: (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2v20M2 12h20" /><path d="M5 5l14 14M19 5L5 19" />
          </svg>
        ),
        brands: ["Korean Make"],
        details: [
          "Specially designed for elevator application — lightweight construction",
          "Zero water discharge, programmable air conditioning",
          "Unique design for low vibration and noise during operation",
          "Easy to install on new and existing elevators using blower pockets",
          "Dimensions: W455 mm × D615 mm × H435 mm",
          "Air Circulation: 400 M³/H or 330 M³/H",
          "No software configuration required",
        ],
      },
    ],
  },
  {
    id: "cables",
    label: "Cables & Wires",
    shortLabel: "Cables & Wires",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 6h18M3 10h18M3 14h18M3 18h18" />
      </svg>
    ),
    count: 6,
    products: [
      {
        title: "Flat Travelling Cables",
        icon: (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 6h18M3 10h18M3 14h18M3 18h18" />
          </svg>
        ),
        brands: ["MACROTHERM", "DEEPCAB"],
        details: [
          "04 Core × 0.75 Sqmm",
          "06 Core × 0.75 Sqmm",
          "12 Core × 0.65 Sqmm",
          "24 Core × 0.75 Sqmm (on make-to-order basis)",
          "Suitable for any type and speed of elevators",
        ],
      },
      {
        title: "Wire Bundles & Display Cable Bundles",
        icon: (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="7" width="20" height="14" rx="2" /><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
          </svg>
        ),
        brands: ["MACROTHERM", "DEEPCAB"],
        details: [
          "Pre-bundled wire sets for elevator cabin and shaft wiring",
          "Display cable bundles for multimedia and indicator systems",
          "Elevator flat travelling cables for CCTV and multimedia display",
          "Reduces installation time and wiring errors on site",
        ],
      },
      {
        title: "Shielded Multi-Core Cables",
        icon: (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" />
          </svg>
        ),
        brands: ["MACROTHERM", "DEEPCAB"],
        details: [
          "10 Core × 0.75 Sqmm + 2 Core × 0.5 Sqmm (Shielded, on order)",
          "EMI/RFI shielding for noise-sensitive control applications",
          "Suitable for high-speed elevators and automation systems",
        ],
      },
      {
        title: "CCTV & Multimedia Cables",
        icon: (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
            <path d="M23 7l-7 5 7 5V7z" /><rect x="1" y="5" width="15" height="14" rx="2" />
          </svg>
        ),
        brands: ["MACROTHERM", "DEEPCAB"],
        details: [
          "Flat travelling cables for CCTV integration in elevator shafts",
          "Supports both analog and IP-based camera systems",
          "Withstands continuous flexing and elevator movement",
        ],
      },
      {
        title: "Industrial Cables & Wires",
        icon: (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
            <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z" /><polyline points="13 2 13 9 20 9" />
          </svg>
        ),
        brands: ["Multi Brand"],
        details: [
          "General-purpose industrial wires for control and power applications",
          "All types and gauges available on requirement",
          "Suitable for panels, control cabinets and site wiring",
        ],
      },
    ],
  },
  {
    id: "automation",
    label: "Industrial Automation & Analytical",
    shortLabel: "Industrial Automation",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3" />
        <path d="M19.07 4.93a10 10 0 0 1 0 14.14M4.93 4.93a10 10 0 0 0 0 14.14" />
        <path d="M14.83 9.17a4 4 0 0 1 0 5.66M9.17 9.17a4 4 0 0 0 0 5.66" />
      </svg>
    ),
    count: 4,
    products: [
      {
        title: "Industrial Automation Products",
        icon: (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="2" width="20" height="20" rx="2" /><circle cx="12" cy="12" r="4" />
            <path d="M12 8v1M12 15v1M8 12h1M15 12h1" />
          </svg>
        ),
        brands: ["P&F — German Make", "Multi Brand"],
        details: [
          "Sensors, actuators and control components for industrial use",
          "Floor detection sensors — Infra-red beam based, C-type (P&F German Make)",
          "Proximity sensors, photoelectric sensors and more",
          "Wide range of makes and models available on requirement",
        ],
      },
      {
        title: "Control & Monitoring Systems",
        icon: (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="3" width="20" height="14" rx="2" /><path d="M8 21h8M12 17v4" />
            <line x1="7" y1="9" x2="7" y2="12" /><line x1="12" y1="7" x2="12" y2="12" /><line x1="17" y1="10" x2="17" y2="12" />
          </svg>
        ),
        brands: ["Multi Brand"],
        details: [
          "PLC, HMI and SCADA-compatible control modules",
          "Remote monitoring and data logging systems",
          "Suitable for elevators, manufacturing and process industries",
        ],
      },
      {
        title: "Analytical Instruments",
        icon: (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2V9M9 21H5a2 2 0 0 1-2-2V9m0 0h18" />
          </svg>
        ),
        brands: ["Multi Brand"],
        details: [
          "Process and quality analytical instruments",
          "Flow meters, pressure transmitters and temperature sensors",
          "Suitable for manufacturing, utilities and laboratory use",
        ],
      },
      {
        title: "Process Equipment",
        icon: (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
            <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
          </svg>
        ),
        brands: ["P&F — German Make", "Multi Brand"],
        details: [
          "Process equipment for industrial automation applications",
          "Valves, transmitters and field instruments",
          "Improves productivity, efficiency and system reliability",
          "Available on requirement — multi-brand sourcing capability",
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
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
      </svg>
    ),
    count: 6,
    products: [
      {
        title: "Overload & Door Sensors",
        icon: (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="3" /><path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" />
          </svg>
        ),
        brands: ["Multi Brand"],
        details: [
          "Overload sensors — all types for all elevator capacities",
          "Door sensors — 154-beam light curtain type",
          "Reliable detection to prevent unsafe door closure",
          "Compatible with major elevator controller brands",
        ],
      },
      {
        title: "Limit Switches & Safety Switches",
        icon: (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 20V10M12 20V4M6 20v-6" />
          </svg>
        ),
        brands: ["Multi Brand"],
        details: [
          "Final limit switches for over-travel protection",
          "Safety limit switches for shaft and pit protection",
          "Car gate switches and landing door contacts",
          "Suitable for all elevator types and speeds",
        ],
      },
      {
        title: "Junction & Maintenance Boxes",
        icon: (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="7" width="20" height="14" rx="2" /><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
          </svg>
        ),
        brands: ["Multi Brand"],
        details: [
          "Junction boxes for shaft and pit wiring consolidation",
          "Maintenance boxes for service and inspection use",
          "IP-rated enclosures for wet and dusty environments",
          "Available in various sizes and mounting options",
        ],
      },
      {
        title: "Cable Hangers",
        icon: (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
          </svg>
        ),
        brands: ["Multi Brand"],
        details: [
          "Big and small cable hangers for flat travelling cable support",
          "Prevents cable sag and fatigue in long elevator shafts",
          "Durable steel construction for long service life",
        ],
      },
      {
        title: "Motion Sensors & Intercoms",
        icon: (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.99 12 19.79 19.79 0 0 1 1.88 3.4 2 2 0 0 1 3.86 1.22h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 8.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
          </svg>
        ),
        brands: ["Multi Brand"],
        details: [
          "Cabin motion sensors for energy-saving lighting control",
          "Intercom systems for cabin-to-machine-room communication",
          "Emergency alarm systems — push button and handset dialer type",
          "Emergency communication systems for passenger safety compliance",
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
  const [active, setActive] = useState("elevator");
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headRef.current,
        { y: 60, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 1, ease: "power3.out",
          scrollTrigger: { trigger: headRef.current, start: "top 85%" },
        }
      );
      gsap.fromTo(
        tabsRef.current,
        { y: 30, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.8, ease: "power2.out", delay: 0.2,
          scrollTrigger: { trigger: tabsRef.current, start: "top 90%" },
        }
      );
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
      <div className="parallax-slow" style={{ position: "absolute", top: "10%", left: "-5%", width: 500, height: 500, borderRadius: "50%", background: "radial-gradient(circle, rgba(26,79,196,0.12) 0%, transparent 70%)", pointerEvents: "none" }} />
      <div className="parallax-fast" style={{ position: "absolute", bottom: "5%", right: "-5%", width: 400, height: 400, borderRadius: "50%", background: "radial-gradient(circle, rgba(26,79,196,0.1) 0%, transparent 70%)", pointerEvents: "none" }} />
      <div className="parallax-med" style={{ position: "absolute", top: "40%", right: "20%", width: 300, height: 300, borderRadius: "50%", background: "radial-gradient(circle, rgba(15,52,96,0.25) 0%, transparent 70%)", pointerEvents: "none" }} />
      <div className="parallax-slow" style={{ position: "absolute", top: 0, left: 0, right: 0, height: 1, background: "linear-gradient(90deg, transparent, rgba(26,79,196,0.5), transparent)", pointerEvents: "none" }} />

      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 32px", position: "relative" }}>

        {/* Header */}
        <div ref={headRef} style={{ marginBottom: 56 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20 }}>
            <div style={{ width: 32, height: 1, background: "linear-gradient(90deg, #1A4FC4, #0F3460)" }} />
            <span style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.25em", textTransform: "uppercase", color: "#93C5FD" }}>
              Product Catalogue — FY 2026–27
            </span>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "flex-end", gap: 24 }}>
            <div>
              <h2 style={{ fontSize: "clamp(36px, 5vw, 56px)", fontWeight: 700, lineHeight: 1.1, letterSpacing: "-0.02em", margin: 0, color: "#f1f5f9" }}>
                Elevators & Industrial
                <br />
                <span style={{ background: "linear-gradient(135deg, #1A4FC4 0%, #0F3460 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                  Products We Supply
                </span>
              </h2>
            </div>
            <p style={{ color: "#64748b", fontSize: 14, lineHeight: 1.7, maxWidth: 360, margin: 0 }}>
              Reliable, affordable, high-quality products sourced from trusted global
              and Indian manufacturers. Earning trust through business since 2014.
            </p>
          </div>
        </div>

        <div className="flex flex-col" style={{ gap: 32 }}>

          {/* Tabs */}
          <div ref={tabsRef} style={{ width: "100%" }}>
            <div className="flex flex-col md:flex-row flex-wrap" style={{ gap: 10 }}>
              {categories.map((c) => {
                const isActive = active === c.id;
                return (
                  <>
                    <button
                      key={c.id}
                      onClick={() => handleTabChange(c.id)}
                      className="flex-1"
                      style={{
                        display: "flex", alignItems: "center", gap: 12,
                        padding: "14px 18px", textAlign: "left", cursor: "pointer",
                        border: isActive ? "1px solid rgba(26,79,196,0.5)" : "1px solid rgba(255,255,255,0.06)",
                        borderRadius: 5, transition: "all 0.25s",
                        background: isActive ? "rgba(26,79,196,0.1)" : "rgba(255,255,255,0.02)",
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
                        <p style={{ fontSize: 13, fontWeight: 500, margin: 0, color: isActive ? "#e2e8f0" : "#64748b", lineHeight: 1.4, transition: "color 0.25s" }}>
                          {c.shortLabel}
                        </p>
                        <p style={{ fontSize: 11, margin: "2px 0 0", color: isActive ? "#1A4FC4" : "#334155", transition: "color 0.25s" }}>
                          {c.count} {c.count === 1 ? "product" : "products"}
                        </p>
                      </div>
                      <div className="ml-auto shrink-0 md:hidden">
                        {isActive ? <FiChevronUp size={18} color="#1A4FC4" /> : <FiChevronDown size={18} color="#1A4FC4" />}
                      </div>
                    </button>

                    {/* Mobile accordion content */}
                    {isActive && (
                      <div className="block md:hidden" ref={contentRef} style={{ flex: 1, minWidth: 0 }}>
                        <ContentPanel current={current} />
                        <StatsBlock />
                      </div>
                    )}
                  </>
                );
              })}
            </div>
          </div>

          {/* Desktop content panel */}
          <div className="hidden md:block" ref={contentRef} style={{ flex: 1, minWidth: 0 }}>
            <ContentPanel current={current} />
            <StatsBlock />
          </div>

        </div>
      </div>
    </section>
  );
}

function ContentPanel({ current }: { current: typeof categories[0] }) {
  return (
    <>
      <div style={{
        display: "flex", alignItems: "center", gap: 14,
        padding: "20px 28px",
        border: "1px solid rgba(255,255,255,0.06)",
        borderBottom: "1px solid rgba(26,79,196,0.2)",
        borderRadius: "12px 12px 0 0",
        background: "rgba(26,79,196,0.05)",
      }}>
        <span style={{ width: 44, height: 44, borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center", background: "rgba(26,79,196,0.15)", color: "#93C5FD" }}>
          {current.icon}
        </span>
        <div>
          <h3 style={{ fontSize: 17, fontWeight: 600, color: "#f1f5f9", margin: 0, lineHeight: 1.3 }}>{current.label}</h3>
          <p style={{ fontSize: 12, color: "#475569", margin: "3px 0 0" }}>
            {current.count} {current.count === 1 ? "product" : "products"} in this category
          </p>
        </div>
        <div style={{ marginLeft: "auto", fontSize: 11, fontWeight: 600, letterSpacing: "0.1em", color: "#60A5FA", background: "rgba(26,79,196,0.1)", border: "1px solid rgba(26,79,196,0.2)", padding: "4px 12px", borderRadius: 20, textTransform: "uppercase" }}>
          FY 2026–27
        </div>
      </div>
      <div style={{ padding: "24px", border: "1px solid rgba(255,255,255,0.06)", borderTop: "none", borderRadius: "0 0 12px 12px", background: "rgba(255,255,255,0.01)", display: "flex", flexDirection: "column", gap: 16 }}>
        {current.products.map((p, i) => (
          <ProductCard key={i} product={p} index={i} />
        ))}
      </div>
    </>
  );
}

function StatsBlock() {
  return (
    <div style={{ marginTop: 24, padding: 20, border: "1px solid rgba(255,255,255,0.06)", borderRadius: 12, background: "rgba(255,255,255,0.02)" }}>
      <p style={{ fontSize: 11, color: "#475569", marginBottom: 16, letterSpacing: "0.1em", textTransform: "uppercase" }}>
        Why Balvir Lifting
      </p>
      {[
        { val: "2014", label: "Established" },
        { val: "6+", label: "Product segments" },
        { val: "Global", label: "Sourcing network" },
        { val: "Pan India", label: "Service coverage" },
      ].map((s) => (
        <div key={s.val} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "8px 0", borderBottom: "1px solid rgba(255,255,255,0.04)" }}>
          <span style={{ fontSize: 12, color: "#64748b" }}>{s.label}</span>
          <span style={{ fontSize: 13, fontWeight: 600, color: "#93C5FD" }}>{s.val}</span>
        </div>
      ))}
    </div>
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
      <div ref={accentRef} style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: 3, background: "linear-gradient(180deg, #1A4FC4, #0F3460)", transform: "scaleY(0)", transformOrigin: "bottom" }} />
      <div style={{ display: "flex", alignItems: "flex-start", gap: 14, marginBottom: 16 }}>
        <div style={{ width: 40, height: 40, borderRadius: 8, flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", background: "rgba(26,79,196,0.1)", color: "#93C5FD" }}>
          {product.icon}
        </div>
        <h4 style={{ fontSize: 15, fontWeight: 600, color: "#e2e8f0", margin: 0, lineHeight: 1.4, paddingTop: 2 }}>
          {product.title}
        </h4>
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 16 }}>
        {product.brands.map((b) => (
          <span key={b} style={{ fontSize: 11, fontWeight: 600, color: "#60A5FA", background: "rgba(26,79,196,0.08)", border: "1px solid rgba(26,79,196,0.2)", padding: "3px 10px", borderRadius: 20, letterSpacing: "0.03em" }}>
            {b}
          </span>
        ))}
      </div>
      <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 6 }}>
        {product.details.map((d, j) => (
          <li key={j} style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
            <span style={{ width: 5, height: 5, borderRadius: "50%", flexShrink: 0, background: "#1A4FC4", marginTop: 7 }} />
            <span style={{ fontSize: 13, color: "#64748b", lineHeight: 1.6 }}>{d}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
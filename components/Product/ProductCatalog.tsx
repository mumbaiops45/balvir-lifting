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
    count: 18,
    products: [
      // ── TRAVELLING CABLES ──────────────────────────────────────────────
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

      // ── WIRE BUNDLES ───────────────────────────────────────────────────
      {
        title: "Wire Bundles",
        icon: (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="7" width="20" height="14" rx="2" /><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
          </svg>
        ),
        brands: ["MACROTHERM", "DEEPCAB"],
        details: [
          "Pre-bundled wire sets for elevator cabin and shaft wiring",
          "Reduces installation time and wiring errors on site",
          "Available in standard and custom lengths",
          "Suitable for all major elevator controller brands",
        ],
      },

      // ── DISPLAY CABLE BUNDLES ──────────────────────────────────────────
      {
        title: "Display Cable Bundles",
        icon: (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
            <rect x="1" y="5" width="15" height="14" rx="2" /><path d="M23 7l-7 5 7 5V7z" />
          </svg>
        ),
        brands: ["MACROTHERM", "DEEPCAB"],
        details: [
          "Display cable bundles for multimedia and indicator systems",
          "Elevator flat travelling cables for CCTV and multimedia display",
          "Supports both analog and IP-based display systems",
          "Withstands continuous flexing and elevator movement",
        ],
      },

      // ── WIRE ROPES ─────────────────────────────────────────────────────
      {
        title: "Steel Wire Ropes — Elevator",
        icon: (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
            <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
            <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
          </svg>
        ),
        brands: ["Usha Martin", "Bansal"],
        details: [
          "Conforming to IS:2365 — CFN (Core Fibre Natural), Tensile 1420/sqmm, Lay RHO",
          "Dia. 13 mm — 8 × 19S construction",
          "Dia. 10 mm — 8 × 19S construction",
          "Dia. 8 mm — 8 × 19S construction",
          "Dia. 6 mm — 6 × 19S construction",
          "Applicable for elevators of all types and capacities",
        ],
      },

      // ── LED LIGHTS ─────────────────────────────────────────────────────
      {
        title: "LED Lights — 75 mm Cutout, Round / Square",
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

      // ── CABIN FANS ─────────────────────────────────────────────────────
      {
        title: "Cabin Fans — 300 mm",
        icon: (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2a10 10 0 1 0 10 10" /><path d="M12 12l8-8" />
            <path d="M12 12c0-4 2-6 4-8" /><path d="M12 12c4 0 6 2 8 4" />
          </svg>
        ),
        brands: ["BALVIR Brand", "Multi Brand"],
        details: [
          "Standard 300 mm size cabin fan",
          "Heavy duty, high-quality motor for continuous operation",
          "Low noise — suitable for passenger cabins",
          "Easy direct replacement for all major elevator brands",
        ],
      },

      // ── BLOWER FANS ────────────────────────────────────────────────────
      {
        title: "Blower Fans — 330 × 45 mm",
        icon: (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2a10 10 0 1 0 10 10" /><path d="M12 12l8-8" />
            <path d="M12 12c-4 0-6-2-8-4" /><path d="M12 12c0 4-2 6-4 8" />
          </svg>
        ),
        brands: ["BALVIR Brand", "Multi Brand"],
        details: [
          "Compact 330 × 45 mm blower fan design",
          "High airflow in a slim profile — fits tight cabin false ceilings",
          "Heavy duty motor for continuous operation",
          "Low noise, suitable for passenger cabins",
        ],
      },

      // ── OVERLOAD SENSORS ───────────────────────────────────────────────
      {
        title: "Overload Sensors — All Types",
        icon: (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
            <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
            <line x1="12" y1="9" x2="12" y2="13" /><line x1="12" y1="17" x2="12.01" y2="17" />
          </svg>
        ),
        brands: ["Multi Brand"],
        details: [
          "All types for all elevator capacities",
          "Under-cabin load sensor and rope-based variants available",
          "Prevents elevator operation above rated load",
          "Compatible with major elevator controller brands",
        ],
      },

      // ── DOOR SENSORS / LIGHT CURTAINS ──────────────────────────────────
      {
        title: "Infra-Red Door Sensors — 154 Beams",
        icon: (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="3" /><path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" />
          </svg>
        ),
        brands: ["CEDES — Switzerland", "MEMCO — UK", "SFT / WECO / TVS — China"],
        details: [
          "154-beam light curtain for full elevator door protection",
          "Criss Cross Beams: 94 to 154 beams, full height 2000 mm",
          "Applicable for Static & Dynamic installations",
          "Reliable detection to prevent unsafe door closure",
          "Compatible with major elevator controller brands",
        ],
      },

      // ── FINAL LIMIT SWITCHES ───────────────────────────────────────────
      {
        title: "Final Limit Switches",
        icon: (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 20V10M12 20V4M6 20v-6" />
          </svg>
        ),
        brands: ["Multi Brand"],
        details: [
          "Over-travel protection at top and bottom of shaft",
          "Suitable for all elevator types and speeds",
          "Robust construction for long service life",
          "Direct replacement for all major elevator brands",
        ],
      },

      // ── SAFETY LIMIT SWITCHES ──────────────────────────────────────────
      {
        title: "Safety Limit Switches",
        icon: (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          </svg>
        ),
        brands: ["Multi Brand"],
        details: [
          "Safety limit switches for shaft and pit protection",
          "Car gate switches and landing door contacts",
          "Suitable for all elevator types and speeds",
          "Direct replacement for all major elevator controller brands",
        ],
      },

      // ── MAINTENANCE BOX ────────────────────────────────────────────────
      {
        title: "Maintenance Box",
        icon: (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="7" width="20" height="14" rx="2" /><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
            <line x1="12" y1="12" x2="12" y2="16" /><line x1="10" y1="14" x2="14" y2="14" />
          </svg>
        ),
        brands: ["Multi Brand"],
        details: [
          "Maintenance boxes for service and inspection use",
          "Inspection run up / down controls with enable switch",
          "IP-rated enclosures suitable for shaft environments",
          "Available in various sizes and mounting options",
        ],
      },

      // ── JUNCTION BOX ───────────────────────────────────────────────────
      {
        title: "Junction Box",
        icon: (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="7" width="20" height="14" rx="2" /><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
          </svg>
        ),
        brands: ["Multi Brand"],
        details: [
          "Junction boxes for shaft and pit wiring consolidation",
          "IP-rated enclosures for wet and dusty environments",
          "Available in various sizes and mounting options",
          "Simplifies wiring and reduces installation time",
        ],
      },

      // ── CABLE HANGERS ──────────────────────────────────────────────────
      {
        title: "Cable Hangers — Big / Small",
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
          "Compatible with all standard flat travelling cable widths",
        ],
      },

      // ── DOOR SPRINGS ───────────────────────────────────────────────────
      {
        title: "Door Springs",
        icon: (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
            <path d="M8 12c0-2.21 1.79-4 4-4s4 1.79 4 4-1.79 4-4 4" />
          </svg>
        ),
        brands: ["Multi Brand"],
        details: [
          "High-tension door springs for reliable return action",
          "For landing and cabin doors — all major door types",
          "Consistent spring tension for smooth door operation",
          "Compatible with all major door mechanism brands",
        ],
      },

      // ── MANUAL LANDING DOORS ───────────────────────────────────────────
      {
        title: "Manual Landing Doors — Revati Type",
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
          "Available in standard shaft opening sizes",
        ],
      },

      // ── AUTO DOORS ─────────────────────────────────────────────────────
      {
        title: "Auto Doors — Fermator / Fermator Type",
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
          "Fermator and Fermator-type compatible mechanisms",
          "Suitable for all types of elevator applications",
          "Robust mechanism for heavy-duty commercial use",
        ],
      },

      // ── DOOR CLOSERS ───────────────────────────────────────────────────
      {
        title: "Door Closers",
        icon: (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 8h1a4 4 0 0 1 0 8h-1" /><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />
            <line x1="6" y1="1" x2="6" y2="4" /><line x1="10" y1="1" x2="10" y2="4" /><line x1="14" y1="1" x2="14" y2="4" />
          </svg>
        ),
        brands: ["Multi Brand"],
        details: [
          "Door closers for landing and cabin doors",
          "Ensures positive door closure after each operation",
          "Adjustable closing speed and latching action",
          "Compatible with all major door mechanism brands",
        ],
      },

      // ── MAGNETS ────────────────────────────────────────────────────────
      {
        title: "Door Magnets",
        icon: (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
            <path d="M6 3v7a6 6 0 0 0 6 6 6 6 0 0 0 6-6V3" />
            <line x1="4" y1="3" x2="8" y2="3" /><line x1="16" y1="3" x2="20" y2="3" />
          </svg>
        ),
        brands: ["Multi Brand"],
        details: [
          "Door magnets for hold-open and safety applications",
          "Used for floor selector and levelling systems",
          "Compatible with all major elevator controller brands",
          "Reliable magnetic field strength for accurate floor detection",
        ],
      },
    ],
  },

  // ════════════════════════════════════════════════════════════════════════
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

const SCROLL_PER_PRODUCT = 240; // px of scroll per product on desktop

export default function ProductCatalog() {
  const sectionRef = useRef<HTMLElement>(null);
  const headRef = useRef<HTMLDivElement>(null);
  const tabsRef = useRef<HTMLDivElement>(null);
  const pinRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const detailRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const stRef = useRef<ScrollTrigger | null>(null);
  const jumpToStartRef = useRef(false);

  const [active, setActive] = useState("elevator");
  const [activeProduct, setActiveProduct] = useState(0);
  const [mobileOpen, setMobileOpen] = useState<number | null>(0);

  const current = categories.find((c) => c.id === active)!;

  /* Entrance animations */
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headRef.current,
        { y: 60, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 1, ease: "power3.out", immediateRender: false,
          scrollTrigger: { trigger: headRef.current, start: "top 85%" },
        }
      );
      gsap.fromTo(
        tabsRef.current,
        { y: 30, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.8, ease: "power2.out", delay: 0.15, immediateRender: false,
          scrollTrigger: { trigger: tabsRef.current, start: "top 90%" },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  /* Desktop only: pin + scroll-driven active product */
  useEffect(() => {
    const mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      const len = current.products.length;

      const st = ScrollTrigger.create({
        trigger: pinRef.current,
        start: "top 90px",
        end: () => `+=${len * SCROLL_PER_PRODUCT}`,
        pin: true,
        pinSpacing: true,
        onUpdate: (self) => {
          const idx = Math.min(len - 1, Math.floor(self.progress * len));
          setActiveProduct((prev) => (prev === idx ? prev : idx));
        },
      });
      stRef.current = st;
      ScrollTrigger.refresh();

      if (jumpToStartRef.current) {
        jumpToStartRef.current = false;
        window.scrollTo({ top: st.start + 2 });
      }

      return () => {
        st.kill();
        stRef.current = null;
      };
    });

    return () => mm.revert();
  }, [active, current.products.length]);

  /* Detail panel fade on product change (desktop) */
  useEffect(() => {
    if (!detailRef.current) return;
    gsap.fromTo(
      detailRef.current,
      { opacity: 0, y: 18 },
      { opacity: 1, y: 0, duration: 0.35, ease: "power3.out", immediateRender: false }
    );
  }, [activeProduct, active]);

  /* Keep active item visible inside left list */
  useEffect(() => {
    const el = itemRefs.current[activeProduct];
    const list = listRef.current;
    if (el && list) {
      list.scrollTo({
        top: el.offsetTop - list.clientHeight / 2 + el.clientHeight / 2,
        behavior: "smooth",
      });
    }
  }, [activeProduct]);

  const handleTabChange = useCallback((id: string) => {
    if (id === active) return;
    setActiveProduct(0);
    setMobileOpen(0);
    jumpToStartRef.current = true;
    setActive(id);
  }, [active]);

  /* Desktop: click a product -> scroll window to matching pin position */
  const handleProductClick = useCallback(
    (idx: number) => {
      const st = stRef.current;
      if (st) {
        const len = current.products.length;
        const y = st.start + ((idx + 0.5) / len) * (st.end - st.start);
        window.scrollTo({ top: y, behavior: "smooth" });
      } else {
        setActiveProduct(idx);
      }
    },
    [current.products.length]
  );

  const product = current.products[Math.min(activeProduct, current.products.length - 1)];

  return (
    <section
      ref={sectionRef}
      id="catalog"
      className="relative overflow-hidden pt-[100px] pb-[120px] bg-[color-mix(in_srgb,var(--primary)_3%,#f7f8fa)]"
    >
      {/* Subtle grid */}
      <div className="absolute inset-0 pointer-events-none bg-[length:60px_60px] bg-[image:linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)]" />
      <div className="absolute top-0 left-0 right-0 h-px pointer-events-none bg-[image:linear-gradient(90deg,transparent,color-mix(in_srgb,var(--primary)_40%,transparent),transparent)]" />

      <div className="max-w-[1280px] mx-auto px-5 md:px-8 relative">

        {/* Header */}
        <div ref={headRef} className="mb-12">
          <div className="flex items-center gap-2.5 mb-5">
            <div className="w-8 h-px bg-[image:linear-gradient(90deg,var(--primary),var(--primary-dark))]" />
            <span className="text-[11px] font-semibold tracking-[0.25em] uppercase text-[var(--primary)]">
              Product Catalogue — FY 2026–27
            </span>
          </div>
          <div className="flex flex-wrap justify-between items-end gap-6">
            <h2 className="text-[clamp(34px,5vw,54px)] font-bold leading-[1.1] tracking-[-0.02em] m-0 text-[#16181d]">
              Elevators & Industrial
              <br />
              <span className="bg-[image:linear-gradient(135deg,var(--primary)_0%,var(--primary-dark)_100%)] bg-clip-text text-transparent">
                Products We Supply
              </span>
            </h2>
            <p className="text-[#5c626e] text-sm leading-[1.7] max-w-[360px] m-0">
              Reliable, affordable, high-quality products sourced from trusted global
              and Indian manufacturers. Earning trust through business since 2014.
            </p>
          </div>
        </div>

        {/* ── TOP CATEGORY TABS ── */}
        <div ref={tabsRef} className="flex flex-wrap gap-2.5 mb-8">
          {categories.map((c) => {
            const isActive = active === c.id;
            return (
              <button
                key={c.id}
                onClick={() => handleTabChange(c.id)}
                className={`flex items-center gap-2.5 px-4 py-3 rounded-lg cursor-pointer transition-all duration-[250ms] border ${
                  isActive
                    ? "bg-[var(--primary)] border-[var(--primary)] text-white shadow-[0_8px_24px_-8px_color-mix(in_srgb,var(--primary)_60%,transparent)]"
                    : "bg-white border-black/[0.08] text-[#3d4350] hover:border-[color:color-mix(in_srgb,var(--primary)_35%,transparent)]"
                }`}
              >
                <span className={isActive ? "text-white" : "text-[var(--primary)]"}>{c.icon}</span>
                <span className="text-left">
                  <span className="block text-[13px] font-semibold leading-[1.3]">{c.shortLabel}</span>
                  <span className={`block text-[11px] mt-0.5 ${isActive ? "text-white/70" : "text-[#8a8f9a]"}`}>
                    {c.count} {c.count === 1 ? "product" : "products"}
                  </span>
                </span>
              </button>
            );
          })}
        </div>

        {/* ══════════ DESKTOP: pinned two-column ══════════ */}
        <div ref={pinRef} className="hidden md:block">
          <div className="grid grid-cols-[minmax(280px,360px)_1fr] gap-6 items-stretch h-[600px]">

            {/* LEFT — product tabs */}
            <div
              ref={listRef}
             className="overflow-y-auto rounded-xl border border-black/[0.08] bg-white p-3 flex flex-col gap-2 [scrollbar-width:thin] [scrollbar-color:var(--primary-light)_transparent] [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-[var(--primary-light)] [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb:hover]:bg-[var(--primary)]"
            >
              <p className="text-[11px] font-semibold tracking-[0.15em] uppercase text-[#8a8f9a] px-2 pt-1 pb-2 m-0">
                {current.label}
              </p>
              {current.products.map((p, i) => {
                const isOn = i === activeProduct;
                return (
                  <button
                    key={p.title + i}
                    ref={(el) => { itemRefs.current[i] = el; }}
                    onClick={() => handleProductClick(i)}
                    className={`flex items-center gap-3 px-3.5 py-3 rounded-sm text-left cursor-pointer transition-all duration-[250ms] border ${
                      isOn
                        ? "bg-[var(--primary-light)] border-[var(--primary-light)] text-white shadow-[0_6px_18px_-6px_color-mix(in_srgb,var(--primary)_55%,transparent)]"
                        : "bg-transparent border-transparent text-[#3d4350] hover:bg-[color-mix(in_srgb,var(--primary)_5%,transparent)]"
                    }`}
                  >
                    <span
                      className={`w-9 h-9 rounded-lg shrink-0 flex items-center justify-center transition-colors duration-[250ms] ${
                        isOn ? "bg-white/15 text-white" : "bg-[color-mix(in_srgb,var(--primary)_8%,transparent)] text-[var(--primary)]"
                      }`}
                    >
                      {p.icon}
                    </span>
                    <span className={`text-[13px] font-medium leading-[1.35] ${isOn ? "text-white" : ""}`}>
                      {p.title}
                    </span>
                    <span className={`ml-auto text-[11px] font-semibold shrink-0 ${isOn ? "text-white/60" : "text-[#c0c4cc]"}`}>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* RIGHT — detail panel (white) */}
            <div className="rounded-xl border border-black/[0.08] bg-white shadow-[0_20px_50px_-24px_rgba(0,0,0,0.18)] overflow-hidden flex flex-col">
              <div className="flex items-center gap-3.5 px-8 py-5 border-b border-black/[0.06] bg-[color-mix(in_srgb,var(--primary)_100%,white)]">
                <span className="w-11 h-11 rounded-[10px] flex items-center justify-center bg-[color-mix(in_srgb,var(--primary)_10%,white)] text-[var(--primary)]">
                  {current.icon}
                </span>
                <div>
                  <p className="text-[11px] text-white m-0 tracking-[0.1em] uppercase">{current.shortLabel}</p>
                  <p className="text-[13px] font-medium text-white m-0 mt-0.5">
                    Product {String(activeProduct + 1).padStart(2, "0")} of {String(current.products.length).padStart(2, "0")}
                  </p>
                </div>
                <div className="ml-auto text-[11px] font-semibold tracking-[0.1em] uppercase text-[var(--primary)] bg-[color-mix(in_srgb,var(--primary)_8%,transparent)] border border-[color:color-mix(in_srgb,var(--primary)_20%,transparent)] px-3 py-1 rounded-[20px]">
                  FY 2026–27
                </div>
              </div>

              <div ref={detailRef} className="p-8 flex-1 overflow-y-auto">
                {/* <div className="flex items-start gap-4 mb-5">
                  <div className="w-12 h-12 rounded-xl shrink-0 flex items-center justify-center bg-[image:linear-gradient(135deg,var(--primary),var(--primary-dark))] text-white">
                    {product.icon}
                  </div>
                  <h3 className="text-[24px] font-bold text-[#16181d] m-0 leading-[1.25] tracking-[-0.01em]">
                    {product.title}
                  </h3>
                </div> */}

               
                <ul className="list-none p-0 m-0 flex flex-col gap-3">
                  {product.details.map((d, j) => (
                    <li key={j} className="flex items-start gap-3 px-4 py-3 rounded-lg bg-[#f7f8fa] border border-black/[0.04]">
                      <span className="w-[6px] h-[6px] rounded-full shrink-0 bg-[var(--primary)] mt-[8px]" />
                      <span className="text-[14px] text-[#3d4350] leading-[1.65]">{d}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Progress bar */}
              <div className="h-[3px] bg-black/[0.05]">
                <div
                  className="h-full bg-[image:linear-gradient(90deg,var(--primary),var(--primary-dark))] transition-[width] duration-300"
                  style={{ width: `${((activeProduct + 1) / current.products.length) * 100}%` }}
                />
              </div>
            </div>

          </div>
        </div>

        {/* ══════════ MOBILE: simple accordion, no GSAP pin ══════════ */}
        <div className="md:hidden flex flex-col gap-2.5">
          {current.products.map((p, i) => {
            const isOpen = mobileOpen === i;
            return (
              <div key={p.title + i} className="rounded-xl border border-black/[0.08] bg-white overflow-hidden">
                <button
                  onClick={() => setMobileOpen(isOpen ? null : i)}
                  className={`w-full flex items-center gap-3 px-4 py-3.5 text-left cursor-pointer transition-colors duration-200 ${
                    isOpen ? "bg-[var(--primary-light)] text-white" : "bg-white text-[#3d4350]"
                  }`}
                >
                  <span
                    className={`w-9 h-9 rounded-lg shrink-0 flex items-center justify-center ${
                      isOpen ? "bg-white/15 text-white" : "bg-[color-mix(in_srgb,var(--primary)_8%,transparent)] text-[var(--primary)]"
                    }`}
                  >
                    {p.icon}
                  </span>
                  <span className="text-[13px] font-semibold leading-[1.35]">{p.title}</span>
                  <span className="ml-auto shrink-0">
                    {isOpen ? <FiChevronUp size={18} /> : <FiChevronDown size={18} />}
                  </span>
                </button>

                {isOpen && (
                  <div className="px-4 pt-4 pb-5 border-t border-black/[0.06]">
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {p.brands.map((b) => (
                        <span
                          key={b}
                          className="text-[11px] font-semibold text-[var(--primary)] bg-[color-mix(in_srgb,var(--primary)_7%,transparent)] border border-[color:color-mix(in_srgb,var(--primary)_22%,transparent)] px-2.5 py-[3px] rounded-[20px]"
                        >
                          {b}
                        </span>
                      ))}
                    </div>
                    <ul className="list-none p-0 m-0 flex flex-col gap-2">
                      {p.details.map((d, j) => (
                        <li key={j} className="flex items-start gap-2.5">
                          <span className="w-[5px] h-[5px] rounded-full shrink-0 bg-[var(--primary)] mt-[7px]" />
                          <span className="text-[13px] text-[#3d4350] leading-[1.6]">{d}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
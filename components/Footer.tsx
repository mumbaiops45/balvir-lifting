"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useModal } from "@/context/ModalContext";
import Link from "next/link";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

/* Quick Links — same as Navbar */
const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Our Products", href: "/products" },
  { label: "Brands & Partners", href: "/brands-partners" },
  { label: "Why Choose Us", href: "/why-choose-us" },
  { label: "FAQs", href: "/faqs" },
  { label: "Contact Us", href: "/contact" },
];

/* Products — /products with category anchors */
const productLinks = [
  { label: "Elevators & Escalators", href: "/products#elevator" },
  { label: "Steel Wire Ropes", href: "/products#wireropes" },
  { label: "LED Lighting & Elevator AC", href: "/products#led" },
  { label: "Cables & Wires", href: "/products#cables" },
  { label: "Other Accessories", href: "/products#accessories" },
];

/* Segments — plain text, no links */
const segments = [
  "Elevator OEMs / Users",
  "Consultants & Contractors",
  "EPCs & Interiors",
];

const cities = ["Navi Mumbai", "New Delhi", "Mumbai", "Kolkata", "Chennai"];

export default function Footer() {
  const { toggle } = useModal();
  const footerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const elements = footerRef.current?.querySelectorAll(".f-reveal") ?? [];

      gsap.fromTo(
        elements,
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
            start: "top 95%",
            once: true,
          },
        }
      );

      // Safety fallback: if ScrollTrigger somehow never fires
      // (e.g. layout shift from late-loading logo/fonts pushed
      // the trigger point past where it was calculated), force
      // the footer content to be visible after a short delay.
      const fallback = window.setTimeout(() => {
        gsap.to(elements, { opacity: 1, y: 0, duration: 0.4 });
      }, 1500);

      return () => window.clearTimeout(fallback);
    }, footerRef);

    // Recalculate trigger positions once images/fonts have
    // fully loaded, since late layout shifts can throw off
    // "top 95%" if calculated too early.
    const handleLoad = () => ScrollTrigger.refresh();
    window.addEventListener("load", handleLoad);

    return () => {
      ctx.revert();
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  return (
    <footer ref={footerRef} className="bg-[var(--primary)] border-t border-white/5">

      {/* ── Main grid ─────────────────────────── */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-16 pb-10">
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-10 f-reveal">

          {/* Brand — 2 cols */}
          <div className="col-span-2">
           <Link href="/" className="flex items-center mb-4 bg-white w-fit py-2 px-5">
          <Image
            src="/Balvir-lifting-png (1).png"
            alt="Balvir Lifting Logo"
            width={260}
            height={80}
            priority
            className="h-[12vh] w-auto"
          />
        </Link>

            <p className="text-white/65 text-sm leading-relaxed mb-4 max-w-[260px]">
              Trusted supplier of multi-brand electrical, electronics, mechanical, hardware &amp; automation products. Established 2014.
            </p>

            <p className="text-white/65 text-xs leading-relaxed mb-2 max-w-[280px]">
              Shop No. 18, Plot S, Sector-2, Railway Station Road, Kharghar, Raigad, Navi Mumbai – 410210, Maharashtra, India.
            </p>
            <p className="text-white/65 text-[11px]">GSTIN: 27ADHPA7026N1ZF</p>
          </div>

          {/* Quick Links */}
          <div className="f-reveal">
            <h4 className="text-white/70 text-[10px] font-bold uppercase tracking-[0.22em] mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-white/65 text-sm hover:text-white transition-colors duration-200"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div className="f-reveal">
            <h4 className="text-white/70 text-[10px] font-bold uppercase tracking-[0.22em] mb-4">
              Products
            </h4>
            <ul className="space-y-2.5">
              {productLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-white/65 text-sm hover:text-white transition-colors duration-200"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Segments — plain text, hover white only */}
          <div className="f-reveal">
            <h4 className="text-white/70 text-[10px] font-bold uppercase tracking-[0.22em] mb-4">
              Segments
            </h4>
            <ul className="space-y-2.5">
              {segments.map((s) => (
                <li key={s}>
                  <span className="text-white/65 text-sm hover:text-white transition-colors duration-200 cursor-default">
                    {s}
                  </span>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* ── Pan-India supply + Contact — sits directly under nav columns ── */}
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-10 mt-6 f-reveal">
          <div className="hidden lg:block lg:col-span-2" />

          <div className="col-span-2 lg:col-span-3 flex flex-wrap items-center gap-x-8 gap-y-4">

            {/* Globe + cities */}
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 border border-white/10 flex items-center justify-center text-white/30 shrink-0">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
                </svg>
              </div>
              <div>
                <div className="text-white/65 text-xs font-semibold mb-2 uppercase tracking-widest">Pan-India Supply</div>
                <div className="flex flex-wrap gap-1.5 max-w-[240px]">
                  {cities.map((c, i) => (
                    <span key={c}
                      className={`text-[11px] px-2 py-0.5 ${i === 0 ? "bg-[var(--primary-light)] text-white font-semibold" : "text-white/70 border border-white/8"}`}>
                      {c}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact */}
            <div className="flex flex-col items-start">
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

          </div>
        </div>
      </div>

      {/* ── Bottom bar ──────────────────────────── */}
      <div className="border-t border-white/5 f-reveal">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-5">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">

            {/* Left — copyright */}
            <div className="flex flex-wrap items-center gap-5">
              <span className="text-white/55 text-xs">
                © {new Date().getFullYear()} Balvir Lifting. All Rights Reserved.
              </span>
            </div>

            {/* Right — developer credit */}
            <div className="flex items-center gap-1.5">
              <span className="text-white/55 text-xs">Built by</span>
              <a href="https://www.nakshatranamahacreations.com" target="_blank" rel="noopener noreferrer"
                className="text-white/65 text-xs font-semibold hover:text-[var(--primary-light)] transition-colors">
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
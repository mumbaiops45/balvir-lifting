"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const reasons = [
  {
    number: "01",
    title: "One Source, Many Brands",
    body: "A single dependable supplier for elevator accessories, wire ropes, LED lighting, cables and automation. Fewer vendors, less hassle, and one team that knows your project end to end.",
    span: "feature",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 2v3M12 19v3M4.22 4.22l2.12 2.12M17.66 17.66l2.12 2.12M2 12h3M19 12h3M4.22 19.78l2.12-2.12M17.66 6.34l2.12-2.12" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Strong Global Partnerships",
    body: "Long-standing relationships with CEDES, MEMCO, FERMATOR, WITTUR, KISWIRE, Usha Martin and more — genuine products, latest tech, every time.",
    span: "tall",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        <line x1="2" y1="12" x2="22" y2="12" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Earn Trust With Business",
    body: "Our reputation rests on one principle — a professional experience every time, with customer satisfaction as the only goal.",
    span: "normal",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Mumbai Stock, Pan-India Reach",
    body: "Stock and support in Navi Mumbai, supplying Mumbai, Delhi, Kolkata, Chennai and beyond. Competitive pricing, timely delivery, wherever your site is.",
    span: "normal",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
  {
    number: "05",
    title: "Reliable and Affordable",
    body: "Best quality at fair prices — dependable products, sensible pricing, zero compromise on safety.",
    span: "wide",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="1" x2="12" y2="23" />
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
  },
];

const stats = [
  { val: "2014", label: "Established" },
  { val: "6+", label: "Categories" },
  { val: "15+", label: "Brand partners" },
  { val: "Pan India", label: "Coverage" },
];

export default function WhyChooseUs() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".wcu-head > *",
        { y: 36, opacity: 0 },
        {
          y: 0, opacity: 1, stagger: 0.08, duration: 0.8, ease: "power3.out",
          scrollTrigger: { trigger: ".wcu-head", start: "top 90%" },
        }
      );
      gsap.fromTo(
        ".wcu-card",
        { y: 48, opacity: 0, scale: 0.97 },
        {
          y: 0, opacity: 1, scale: 1, stagger: 0.1, duration: 0.7, ease: "power3.out",
          scrollTrigger: { trigger: ".wcu-bento", start: "top 80%" },
        }
      );
      gsap.fromTo(
        ".wcu-stat",
        { y: 16, opacity: 0 },
        {
          y: 0, opacity: 1, stagger: 0.07, duration: 0.5, ease: "power2.out",
          scrollTrigger: { trigger: ".wcu-stats", start: "top 94%" },
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
        padding: "120px 0 130px",
        fontFamily: "'DM Sans', 'Helvetica Neue', sans-serif",
      }}
    >
      <style>{`
        .wcu-bento {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          grid-auto-rows: minmax(190px, auto);
          gap: 18px;
        }
        .wcu-feature { grid-column: span 2; grid-row: span 1; }
        .wcu-tall    { grid-column: span 1; grid-row: span 2; }
        .wcu-normal  { grid-column: span 1; }
        .wcu-wide    { grid-column: span 2; }
        @media (max-width: 900px) {
          .wcu-bento { grid-template-columns: 1fr 1fr; }
          .wcu-feature, .wcu-wide { grid-column: span 2; }
          .wcu-tall { grid-column: span 1; grid-row: span 1; }
        }
        @media (max-width: 560px) {
          .wcu-bento { grid-template-columns: 1fr; }
          .wcu-feature, .wcu-wide, .wcu-tall, .wcu-normal { grid-column: span 1; grid-row: span 1; }
        }
        .wcu-card { transition: transform 0.4s cubic-bezier(.2,.8,.2,1), border-color 0.3s; }
        .wcu-card:hover { transform: translateY(-4px); }
        .wcu-stats { display: flex; flex-wrap: wrap; gap: 0; }
        .wcu-stat { flex: 1 1 160px; }
      `}</style>

      {/* Background grid */}
      <div style={{
        position: "absolute", inset: 0, pointerEvents: "none",
        backgroundImage:
          "linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)",
        backgroundSize: "64px 64px",
        maskImage: "radial-gradient(ellipse 90% 70% at 50% 0%, #000 40%, transparent 100%)",
        WebkitMaskImage: "radial-gradient(ellipse 90% 70% at 50% 0%, #000 40%, transparent 100%)",
      }} />

      {/* Ambient orbs */}
      <div style={{
        position: "absolute", top: "-8%", right: "8%",
        width: 560, height: 560, borderRadius: "50%",
        background: "radial-gradient(circle, rgba(26,79,196,0.12) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />
      <div style={{
        position: "absolute", bottom: "0%", left: "-4%",
        width: 460, height: 460, borderRadius: "50%",
        background: "radial-gradient(circle, rgba(15,52,96,0.25) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      {/* Top rule */}
      <div style={{
        position: "absolute", top: 0, left: 0, right: 0, height: 1,
        background: "linear-gradient(90deg, transparent, rgba(26,79,196,0.5), transparent)",
        pointerEvents: "none",
      }} />

      <div style={{ maxWidth: 1240, margin: "0 auto", padding: "0 32px", position: "relative" }}>

        {/* Header */}
        <div className="wcu-head" style={{ textAlign: "center", maxWidth: 720, margin: "0 auto 64px" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 10, marginBottom: 22,
            padding: "7px 16px", borderRadius: 100,
            border: "1px solid rgba(26,79,196,0.3)", background: "rgba(26,79,196,0.08)" }}>
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#60A5FA",
              boxShadow: "0 0 10px #60A5FA" }} />
            <span style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.22em",
              textTransform: "uppercase", color: "#93C5FD" }}>
              Why Balvir Lifting
            </span>
          </div>

          <h2 style={{
            fontSize: "clamp(34px, 5vw, 56px)", fontWeight: 700,
            lineHeight: 1.08, letterSpacing: "-0.025em", margin: "0 0 20px",
            color: "#f1f5f9",
          }}>
            Five reasons customers{" "}
            <span style={{
              background: "linear-gradient(135deg, #1A4FC4 0%, #60A5FA 60%, #93C5FD 100%)",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
            }}>
              choose us
            </span>
          </h2>

          <p style={{ color: "#64748b", fontSize: 15, lineHeight: 1.7, margin: 0 }}>
            From a single Navi Mumbai office, we serve elevator contractors, OEMs and
            project teams across India — reliably, since 2014.
          </p>
        </div>

        {/* Bento grid */}
        <div className="wcu-bento">
          {reasons.map((r) => (
            <ReasonCard key={r.number} reason={r} />
          ))}
        </div>

        {/* Stats strip */}
        <div className="wcu-stats" style={{
          marginTop: 22,
          border: "1px solid rgba(255,255,255,0.07)",
          borderRadius: 16, overflow: "hidden",
          background: "rgba(255,255,255,0.015)",
        }}>
          {stats.map((s, i, arr) => (
            <div key={s.val} className="wcu-stat" style={{
              padding: "30px 24px", textAlign: "center",
              borderRight: i < arr.length - 1 ? "1px solid rgba(255,255,255,0.06)" : "none",
            }}>
              <p style={{
                fontSize: "clamp(24px, 3vw, 32px)", fontWeight: 700, margin: "0 0 6px",
                background: "linear-gradient(135deg, #60A5FA, #1A4FC4)",
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
              }}>
                {s.val}
              </p>
              <p style={{ fontSize: 12.5, color: "#475569", margin: 0, letterSpacing: "0.04em" }}>
                {s.label}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

function ReasonCard({
  reason,
}: {
  reason: { number: string; title: string; body: string; span: string; icon: React.ReactNode };
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const isFeature = reason.span === "feature";
  const isTall = reason.span === "tall";

  const handleMove = (e: React.MouseEvent) => {
    const el = cardRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    if (glowRef.current) {
      glowRef.current.style.background = `radial-gradient(420px circle at ${x}px ${y}px, rgba(26,79,196,0.14), transparent 60%)`;
    }
    if (ringRef.current) {
      ringRef.current.style.background = `radial-gradient(280px circle at ${x}px ${y}px, rgba(96,165,250,0.5), transparent 65%)`;
    }
  };

  const handleEnter = () => {
    gsap.to([glowRef.current, ringRef.current], { opacity: 1, duration: 0.3 });
  };
  const handleLeave = () => {
    gsap.to([glowRef.current, ringRef.current], { opacity: 0, duration: 0.35 });
  };

  return (
    <div
      ref={cardRef}
      className={`wcu-card wcu-${reason.span}`}
      onMouseMove={handleMove}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      style={{
        position: "relative",
        borderRadius: 18,
        border: "1px solid rgba(255,255,255,0.07)",
        background: "rgba(255,255,255,0.022)",
        padding: isFeature ? "38px 40px" : "30px 30px",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        justifyContent: isTall ? "space-between" : "flex-start",
        cursor: "default",
      }}
    >
      {/* Animated gradient ring (border-light) */}
      <div ref={ringRef} style={{
        position: "absolute", inset: 0, borderRadius: 18, padding: 1,
        opacity: 0, pointerEvents: "none",
        WebkitMask: "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
        WebkitMaskComposite: "xor", maskComposite: "exclude",
      }} />

      {/* Cursor spotlight glow */}
      <div ref={glowRef} style={{
        position: "absolute", inset: 0, opacity: 0, pointerEvents: "none",
      }} />

      {/* Engraved number */}
      <span style={{
        position: "absolute", right: isFeature ? 28 : 20, top: isFeature ? 18 : 14,
        fontSize: isFeature ? 110 : 76, fontWeight: 800, lineHeight: 1,
        letterSpacing: "-0.05em", userSelect: "none", pointerEvents: "none",
        background: "linear-gradient(180deg, rgba(96,165,250,0.16), rgba(26,79,196,0.02))",
        WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
      }}>
        {reason.number}
      </span>

      {/* Icon */}
      <div style={{
        position: "relative", zIndex: 1,
        width: 50, height: 50, borderRadius: 13, marginBottom: 18,
        display: "flex", alignItems: "center", justifyContent: "center",
        background: "linear-gradient(135deg, rgba(26,79,196,0.2), rgba(15,52,96,0.25))",
        border: "1px solid rgba(26,79,196,0.3)",
        color: "#93C5FD", flexShrink: 0,
      }}>
        {reason.icon}
      </div>

      {/* Text */}
      <div style={{ position: "relative", zIndex: 1 }}>
        <h3 style={{
          fontSize: isFeature ? 22 : 18, fontWeight: 600, color: "#f1f5f9",
          margin: "0 0 10px", lineHeight: 1.28, letterSpacing: "-0.01em",
          maxWidth: isFeature ? 360 : "none",
        }}>
          {reason.title}
        </h3>
        <p style={{
          fontSize: isFeature ? 15 : 13.5, color: "#64748b", margin: 0,
          lineHeight: 1.7, maxWidth: isFeature ? 460 : "none",
        }}>
          {reason.body}
        </p>
      </div>
    </div>
  );
}
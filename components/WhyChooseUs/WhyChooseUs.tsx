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
      className="relative overflow-hidden pt-[120px] pb-[130px] bg-[color-mix(in_srgb,var(--primary-dark)_20%,black)]"
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
      <div className="absolute inset-0 pointer-events-none bg-[length:64px_64px] bg-[image:linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] [mask-image:radial-gradient(ellipse_90%_70%_at_50%_0%,#000_40%,transparent_100%)] [-webkit-mask-image:radial-gradient(ellipse_90%_70%_at_50%_0%,#000_40%,transparent_100%)]" />

      {/* Ambient orbs */}
      <div className="absolute top-[-8%] right-[8%] w-[560px] h-[560px] rounded-full pointer-events-none bg-[image:radial-gradient(circle,color-mix(in_srgb,var(--primary)_12%,transparent)_0%,transparent_70%)]" />
      <div className="absolute bottom-0 left-[-4%] w-[460px] h-[460px] rounded-full pointer-events-none bg-[image:radial-gradient(circle,color-mix(in_srgb,var(--primary-dark)_25%,transparent)_0%,transparent_70%)]" />

      {/* Top rule */}
      <div className="absolute top-0 left-0 right-0 h-px pointer-events-none bg-[image:linear-gradient(90deg,transparent,color-mix(in_srgb,var(--primary)_50%,transparent),transparent)]" />

      <div className="max-w-[1240px] mx-auto px-8 relative">

        {/* Header */}
        <div className="wcu-head text-center max-w-[720px] mx-auto mb-16">
          <div className="inline-flex items-center gap-2.5 mb-[22px] px-4 py-[7px] rounded-full border border-[color:color-mix(in_srgb,var(--primary)_30%,transparent)] bg-[color-mix(in_srgb,var(--primary)_8%,transparent)]">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--primary-light)] shadow-[0_0_10px_var(--primary-light)]" />
            <span className="text-[11px] font-semibold tracking-[0.22em] uppercase text-[var(--primary-light)]">
              Why Balvir Lifting
            </span>
          </div>

          <h2 className="text-[clamp(34px,5vw,56px)] font-bold leading-[1.08] tracking-[-0.025em] m-0 mb-5 text-white">
            Five reasons customers{" "}
            <span className="bg-[image:linear-gradient(135deg,var(--primary)_0%,var(--primary-light)_60%,var(--primary-light)_100%)] bg-clip-text text-transparent">
              choose us
            </span>
          </h2>

          <p className="text-white/50 text-[15px] leading-[1.7] m-0">
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
        <div className="wcu-stats mt-[22px] border border-white/[0.07] rounded-2xl overflow-hidden bg-white/[0.015]">
          {stats.map((s, i, arr) => (
            <div
              key={s.val}
              className={`wcu-stat px-6 py-[30px] text-center ${i < arr.length - 1 ? "border-r border-white/[0.06]" : ""}`}
            >
              <p className="text-[clamp(24px,3vw,32px)] font-bold m-0 mb-1.5 bg-[image:linear-gradient(135deg,var(--primary-light),var(--primary))] bg-clip-text text-transparent">
                {s.val}
              </p>
              <p className="text-[12.5px] text-white/40 m-0 tracking-[0.04em]">
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
      glowRef.current.style.background = `radial-gradient(420px circle at ${x}px ${y}px, color-mix(in srgb, var(--primary) 14%, transparent), transparent 60%)`;
    }
    if (ringRef.current) {
      ringRef.current.style.background = `radial-gradient(280px circle at ${x}px ${y}px, color-mix(in srgb, var(--primary-light) 50%, transparent), transparent 65%)`;
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
      className={`wcu-card wcu-${reason.span} relative rounded-[18px] border border-white/[0.07] bg-white/[0.022] overflow-hidden flex flex-col cursor-default ${isFeature ? "px-10 py-[38px]" : "p-[30px]"} ${isTall ? "justify-between" : "justify-start"}`}
      onMouseMove={handleMove}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      {/* Animated gradient ring (border-light) */}
      <div
        ref={ringRef}
        className="absolute inset-0 rounded-[18px] p-px opacity-0 pointer-events-none [-webkit-mask:linear-gradient(#000_0_0)_content-box,linear-gradient(#000_0_0)] [-webkit-mask-composite:xor] [mask-composite:exclude]"
      />

      {/* Cursor spotlight glow */}
      <div ref={glowRef} className="absolute inset-0 opacity-0 pointer-events-none" />

      {/* Engraved number */}
      <span
        className={`absolute font-extrabold leading-none tracking-[-0.05em] select-none pointer-events-none bg-[image:linear-gradient(180deg,color-mix(in_srgb,var(--primary-light)_16%,transparent),color-mix(in_srgb,var(--primary)_2%,transparent))] bg-clip-text text-transparent ${isFeature ? "right-7 top-[18px] text-[110px]" : "right-5 top-[14px] text-[76px]"}`}
      >
        {reason.number}
      </span>

      {/* Icon */}
      <div className="relative z-[1] w-[50px] h-[50px] rounded-[13px] mb-[18px] flex items-center justify-center shrink-0 bg-[image:linear-gradient(135deg,color-mix(in_srgb,var(--primary)_20%,transparent),color-mix(in_srgb,var(--primary-dark)_25%,transparent))] border border-[color:color-mix(in_srgb,var(--primary)_30%,transparent)] text-[var(--primary-light)]">
        {reason.icon}
      </div>

      {/* Text */}
      <div className="relative z-[1]">
        <h3
          className={`font-semibold text-white m-0 mb-2.5 leading-[1.28] tracking-[-0.01em] ${isFeature ? "text-[22px] max-w-[360px]" : "text-[18px]"}`}
        >
          {reason.title}
        </h3>
        <p
          className={`text-white/50 m-0 leading-[1.7] ${isFeature ? "text-[15px] max-w-[460px]" : "text-[13.5px]"}`}
        >
          {reason.body}
        </p>
      </div>
    </div>
  );
}
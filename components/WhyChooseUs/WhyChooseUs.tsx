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
    tag: "Single-window supply",
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
    tag: "Genuine products",
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
    tag: "Customer first",
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
    tag: "Fast delivery",
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
    tag: "Fair pricing",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="1" x2="12" y2="23" />
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
  },
];

const featureBrands = ["CEDES", "MEMCO", "FERMATOR", "WITTUR", "KISWIRE", "Usha Martin"];

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
          y: 0, opacity: 1, stagger: 0.08, duration: 0.8, ease: "power3.out", immediateRender: false,
          scrollTrigger: { trigger: ".wcu-head", start: "top 90%" },
        }
      );
      gsap.fromTo(
        ".wcu-card",
        { y: 48, opacity: 0, scale: 0.97 },
        {
          y: 0, opacity: 1, scale: 1, stagger: 0.1, duration: 0.7, ease: "power3.out", immediateRender: false,
          scrollTrigger: { trigger: ".wcu-bento", start: "top 80%" },
        }
      );
      gsap.fromTo(
        ".wcu-stat",
        { y: 16, opacity: 0 },
        {
          y: 0, opacity: 1, stagger: 0.07, duration: 0.5, ease: "power2.out", immediateRender: false,
          scrollTrigger: { trigger: ".wcu-stats", start: "top 94%" },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden pt-[120px] pb-[130px] bg-[color-mix(in_srgb,var(--primary)_3%,#f7f8fa)]"
    >
      <style>{`
        .wcu-bento {
          display: grid;
          grid-template-columns: repeat(6, 1fr);
          grid-auto-rows: minmax(210px, auto);
          gap: 18px;
        }
        .wcu-feature { grid-column: span 4; }
        .wcu-tall    { grid-column: span 2; }
        .wcu-normal  { grid-column: span 3; }
        .wcu-wide    { grid-column: span 6; }
        @media (max-width: 900px) {
          .wcu-bento { grid-template-columns: 1fr 1fr; }
          .wcu-feature, .wcu-wide { grid-column: span 2; }
          .wcu-tall, .wcu-normal { grid-column: span 1; }
        }
        @media (max-width: 560px) {
          .wcu-bento { grid-template-columns: 1fr; }
          .wcu-feature, .wcu-wide, .wcu-tall, .wcu-normal { grid-column: span 1; }
        }

        .wcu-card {
          transition: transform 0.45s cubic-bezier(.2,.8,.2,1), box-shadow 0.45s cubic-bezier(.2,.8,.2,1), border-color 0.45s;
        }
        .wcu-card:hover {
          transform: translateY(-5px);
          border-color: color-mix(in srgb, var(--primary) 30%, transparent);
          box-shadow: 0 28px 60px -24px color-mix(in srgb, var(--primary) 25%, transparent);
        }
        .wcu-card:hover .wcu-topline { transform: scaleX(1); }
        .wcu-card:hover .wcu-icon {
          background-image: linear-gradient(135deg, var(--primary), var(--primary-dark));
          color: #fff;
          border-color: transparent;
          box-shadow: 0 10px 28px -10px color-mix(in srgb, var(--primary) 55%, transparent);
          transform: rotate(-4deg) scale(1.05);
        }
        .wcu-card:hover .wcu-shine { transform: translateX(120%) skewX(-18deg); }
        .wcu-topline {
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.5s cubic-bezier(.2,.8,.2,1);
        }
        .wcu-icon {
          transition: background-image 0.35s, color 0.35s, box-shadow 0.35s, border-color 0.35s, transform 0.35s cubic-bezier(.2,.8,.2,1);
        }
        .wcu-shine {
          position: absolute;
          top: 0; bottom: 0;
          width: 55%;
          transform: translateX(-160%) skewX(-18deg);
          background: linear-gradient(90deg, transparent, color-mix(in srgb, var(--primary) 5%, transparent), transparent);
          transition: transform 0.9s cubic-bezier(.2,.8,.2,1);
          pointer-events: none;
        }

        .wcu-stats { display: flex; flex-wrap: wrap; gap: 0; }
        .wcu-stat { flex: 1 1 160px; position: relative; }
        .wcu-stat:hover .wcu-stat-glow { opacity: 1; }
        .wcu-stat:hover .wcu-stat-val { transform: translateY(-2px); }
        .wcu-stat-glow { transition: opacity 0.35s; }
        .wcu-stat-val { transition: transform 0.35s cubic-bezier(.2,.8,.2,1); }
      `}</style>

      {/* Background grid — same as catalog */}
      <div className="absolute inset-0 pointer-events-none bg-[length:60px_60px] bg-[image:linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] [mask-image:radial-gradient(ellipse_90%_70%_at_50%_0%,#000_40%,transparent_100%)] [-webkit-mask-image:radial-gradient(ellipse_90%_70%_at_50%_0%,#000_40%,transparent_100%)]" />

      {/* Soft ambient tints */}
      <div className="absolute top-[-8%] right-[8%] w-[560px] h-[560px] rounded-full pointer-events-none bg-[image:radial-gradient(circle,color-mix(in_srgb,var(--primary)_6%,transparent)_0%,transparent_70%)]" />
      <div className="absolute bottom-0 left-[-4%] w-[460px] h-[460px] rounded-full pointer-events-none bg-[image:radial-gradient(circle,color-mix(in_srgb,var(--primary-light)_7%,transparent)_0%,transparent_70%)]" />

      {/* Top rule — same as catalog */}
      <div className="absolute top-0 left-0 right-0 h-px pointer-events-none bg-[image:linear-gradient(90deg,transparent,color-mix(in_srgb,var(--primary)_40%,transparent),transparent)]" />

      <div className="max-w-[1240px] mx-auto px-8 relative">

        {/* Header — catalog style */}
        <div className="wcu-head text-center max-w-[720px] mx-auto mb-16">
          <div className="inline-flex items-center justify-center gap-2.5 mb-5">
            <div className="w-8 h-px bg-[image:linear-gradient(90deg,var(--primary),var(--primary-dark))]" />
            <span className="text-[11px] font-semibold tracking-[0.25em] uppercase text-[var(--primary)]">
              Why Balvir Lifting
            </span>
            <div className="w-8 h-px bg-[image:linear-gradient(90deg,var(--primary-dark),var(--primary))]" />
          </div>

          <h2 className="text-[clamp(34px,5vw,56px)] font-bold leading-[1.08] tracking-[-0.025em] m-0 mb-5 text-[#16181d]">
            Five reasons customers{" "}
            <span className="bg-[image:linear-gradient(135deg,var(--primary)_0%,var(--primary-dark)_100%)] bg-clip-text text-transparent">
              choose us
            </span>
          </h2>

          <p className="text-[#5c626e] text-[15.5px] leading-[1.7] m-0">
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

        {/* Stats strip — white card like catalog panels */}
        <div className="wcu-stats mt-[22px] border border-black/[0.08] rounded-2xl overflow-hidden bg-white shadow-[0_20px_50px_-24px_rgba(0,0,0,0.12)]">
          {stats.map((s, i, arr) => (
            <div
              key={s.val}
              className={`wcu-stat px-6 py-[32px] text-center ${i < arr.length - 1 ? "md:border-r border-black/[0.06]" : ""}`}
            >
              <div className="wcu-stat-glow absolute inset-0 opacity-0 pointer-events-none bg-[image:radial-gradient(ellipse_at_center,color-mix(in_srgb,var(--primary)_7%,transparent),transparent_70%)]" />
              <p className="wcu-stat-val relative text-[clamp(26px,3vw,34px)] font-bold m-0 mb-1.5 bg-[image:linear-gradient(135deg,var(--primary),var(--primary-dark))] bg-clip-text text-transparent tracking-[-0.02em]">
                {s.val}
              </p>
              <p className="relative text-[13px] text-[#8a8f9a] m-0 tracking-[0.08em] uppercase">
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
  reason: { number: string; title: string; body: string; span: string; tag: string; icon: React.ReactNode };
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const isFeature = reason.span === "feature";
  const isWide = reason.span === "wide";

  const handleMove = (e: React.MouseEvent) => {
    const el = cardRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    if (glowRef.current) {
      glowRef.current.style.background = `radial-gradient(420px circle at ${x}px ${y}px, color-mix(in srgb, var(--primary) 7%, transparent), transparent 60%)`;
    }
  };

  const handleEnter = () => {
    gsap.to(glowRef.current, { opacity: 1, duration: 0.3 });
  };
  const handleLeave = () => {
    gsap.to(glowRef.current, { opacity: 0, duration: 0.35 });
  };

  return (
    <div
      ref={cardRef}
      className={`wcu-card wcu-${reason.span} group relative rounded-[20px] border border-black/[0.08] bg-white overflow-hidden flex flex-col justify-start cursor-default shadow-[0_12px_32px_-20px_rgba(0,0,0,0.15)] ${
        isFeature ? "px-10 py-[38px]" : "p-[30px]"
      } ${isWide ? "md:flex-row md:items-center md:gap-9" : ""}`}
      onMouseMove={handleMove}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      {/* Top accent line — draws on hover */}
      <div className="wcu-topline absolute top-0 left-0 right-0 h-[2px] bg-[image:linear-gradient(90deg,var(--primary),var(--primary-light),transparent)]" />

      {/* Diagonal shine sweep */}
      <div className="wcu-shine" />

      {/* Cursor spotlight glow */}
      <div ref={glowRef} className="absolute inset-0 opacity-0 pointer-events-none" />

      {/* Corner tint behind number */}
      <div className="absolute top-[-40px] right-[-40px] w-[220px] h-[220px] rounded-full pointer-events-none bg-[image:radial-gradient(circle,color-mix(in_srgb,var(--primary)_5%,transparent),transparent_70%)]" />

      {/* Engraved number */}
      <span
        className={`absolute font-extrabold leading-none tracking-[-0.05em] select-none pointer-events-none text-[color:color-mix(in_srgb,var(--primary)_9%,transparent)] transition-colors duration-300 group-hover:text-[color:color-mix(in_srgb,var(--primary)_16%,transparent)] ${
          isFeature ? "right-8 top-[20px] text-[110px]" : "right-5 top-[16px] text-[76px]"
        }`}
      >
        {reason.number}
      </span>

      {/* Icon + tag row */}
      <div className={`relative z-[1] flex items-center gap-3.5 ${isWide ? "mb-[18px] md:mb-0 shrink-0" : "mb-[20px]"}`}>
        <div className="wcu-icon w-[52px] h-[52px] rounded-[14px] flex items-center justify-center shrink-0 bg-[color-mix(in_srgb,var(--primary)_8%,transparent)] border border-[color:color-mix(in_srgb,var(--primary)_20%,transparent)] text-[var(--primary)]">
          {reason.icon}
        </div>
        <span className={`text-[10.5px] font-semibold tracking-[0.14em] uppercase text-[var(--primary)] bg-[color-mix(in_srgb,var(--primary)_7%,transparent)] border border-[color:color-mix(in_srgb,var(--primary)_22%,transparent)] px-2.5 py-1 rounded-full ${isWide ? "md:hidden" : ""}`}>
          {reason.tag}
        </span>
      </div>

      {/* Text */}
      <div className="relative z-[1]">
        <h3
          className={`font-semibold text-[#16181d] m-0 mb-3 leading-[1.3] tracking-[-0.01em] ${
            isFeature ? "text-[24px] max-w-[420px]" : "text-[19px] max-w-[92%]"
          }`}
        >
          {reason.title}
        </h3>
        <p
          className={`text-[#5c626e] m-0 leading-[1.75] ${
            isFeature ? "text-[15.5px] max-w-[520px]" : "text-[14.5px]"
          } ${isWide ? "md:max-w-[640px]" : ""}`}
        >
          {reason.body}
        </p>

        {/* Feature card: brand chips row */}
        {isFeature && (
          <div className="flex flex-wrap gap-2 mt-6">
            {featureBrands.map((b) => (
              <span
                key={b}
                className="text-[10.5px] font-semibold tracking-[0.08em] uppercase text-[#5c626e] bg-[#f7f8fa] border border-black/[0.08] px-3 py-[5px] rounded-full transition-colors duration-300 group-hover:border-[color:color-mix(in_srgb,var(--primary)_30%,transparent)] group-hover:text-[var(--primary)]"
              >
                {b}
              </span>
            ))}
          </div>
        )}

        {isWide && (
          <span className="hidden md:inline-flex mt-4 text-[10.5px] font-semibold tracking-[0.14em] uppercase text-[var(--primary)] bg-[color-mix(in_srgb,var(--primary)_7%,transparent)] border border-[color:color-mix(in_srgb,var(--primary)_22%,transparent)] px-2.5 py-1 rounded-full">
            {reason.tag}
          </span>
        )}
      </div>
    </div>
  );
}
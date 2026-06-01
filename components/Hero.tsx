"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import gsap from "gsap";
import { useModal } from "@/context/ModalContext";

const slides = [
  {
    badge: "India's Premier Lift Specialists · Since 1998",
    line1: "Elevating Spaces,",
    line2: "Engineering Trust.",
    sub: "3,000+ precision elevator installations across India's fastest-growing cities — built to last, backed for life.",
    stat: { val: "3,000+", label: "Lifts Installed" },
    accent: "#CC1020",
  },
  {
    badge: "ISO 9001:2015 · EN 81 Certified",
    line1: "Safety First.",
    line2: "Performance Always.",
    sub: "Every unit exceeds international standards — triple-redundant braking, ARD auto-rescue, and overload protection included.",
    stat: { val: "25+", label: "Years of Excellence" },
    accent: "#CC1020",
  },
  {
    badge: "Pan-India 24 / 7 Service Network",
    line1: "We Never",
    line2: "Stop Running.",
    sub: "200+ engineers across 8 major cities. Guaranteed 2-hour breakdown response for every AMC client — always.",
    stat: { val: "2 hr", label: "Response Guarantee" },
    accent: "#CC1020",
  },
];

export default function Hero() {
  const { toggle } = useModal();
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const gsapAnim = useRef<gsap.core.Tween | null>(null);

  /* ── Slide transition ─────────────────────── */
  const goTo = useCallback((idx: number) => {
    if (animating) return;
    setAnimating(true);
    const el = contentRef.current;
    if (!el) { setAnimating(false); return; }

    gsap.to(el, {
      y: -24, opacity: 0, duration: 0.4, ease: "power2.in",
      onComplete: () => {
        setCurrent(idx);
        gsap.fromTo(el,
          { y: 40, opacity: 0 },
          {
            y: 0, opacity: 1, duration: 0.65, ease: "power3.out",
            onComplete: () => setAnimating(false)
          }
        );
      },
    });
  }, [animating]);

  const next = useCallback(() => {
    goTo((current + 1) % slides.length);
  }, [current, goTo]);

  /* ── Progress bar ─────────────────────────── */
  const resetProgress = useCallback(() => {
    if (gsapAnim.current) gsapAnim.current.kill();
    if (!progressRef.current) return;
    gsap.set(progressRef.current, { scaleX: 0 });
    gsapAnim.current = gsap.to(progressRef.current, {
      scaleX: 1, duration: 5.5, ease: "none",
    });
  }, []);

  /* ── Auto-advance ─────────────────────────── */
  useEffect(() => {
    resetProgress();
    intervalRef.current = setInterval(() => { next(); resetProgress(); }, 5500);
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, [next, resetProgress]);

  /* ── Entry animation ──────────────────────── */
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(contentRef.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.1, ease: "power3.out", delay: 0.7 }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  /* ── Manual nav ───────────────────────────── */
  const manualGo = (i: number) => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    goTo(i);
    resetProgress();
    intervalRef.current = setInterval(() => { next(); resetProgress(); }, 5500);
  };

  const slide = slides[current];

  const scrollTo = (id: string) =>
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="home"
      ref={sectionRef}
      className="hero-bg-anim relative w-full h-screen min-h-[700px] flex flex-col overflow-hidden "
    >
      {/* ── Video background ─────────────────────
          Place your video at:  public/hero-video.mp4
          It will auto-play; if absent the CSS gradient shows.
      ────────────────────────────────────────── */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay muted loop playsInline
        style={{ mixBlendMode: "normal" }}
      >
        {/* Local file — add public/hero-video.mp4 to use it */}
        <source src="/Hero (3).mp4" type="video/mp4" />
        {/* Fallback Pexels attempts (may or may not stream) */}
        <source src="https://videos.pexels.com/video-files/7599305/7599305-sd_960_540_25fps.mp4" type="video/mp4" />
        <source src="https://videos.pexels.com/video-files/3051484/3051484-hd_1920_1080_25fps.mp4" type="video/mp4" />
      </video>

      {/* Main dark overlay */}
      <div className="absolute inset-0 bg-black/35" />

      {/* Left side content readability overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-transparent" />

      {/* Premium red glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_50%,rgba(220,38,38,0.25),transparent_40%)]" />

      {/* Top and bottom vignette */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/70" />
      {/* ── Slide content (pt-24 clears the fixed navbar) ── */}
      <div className="relative z-10 flex-1 flex items-center pt-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 w-full grid lg:grid-cols-5 gap-10 items-center">

          {/* Left text — 3 cols */}
          <div ref={contentRef} className="lg:col-span-3">



            {/* Heading */}
            <h1 className="text-[56px] md:text-7xl xl:text-[82px] font-extrabold text-white leading-[1.03] tracking-[-0.03em] mb-5">
              {slide.line1}
              <br />
              {slide.line2}
            </h1>

            {/* Red rule */}
            <div className="w-16 h-[3px] bg-red-600 mb-7" />

            {/* Subtext */}
            <p className="text-white/55 text-base md:text-lg leading-relaxed max-w-[480px] mb-10">
              {slide.sub}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <button onClick={toggle} className="btn-red group text-sm">
                Get a Free Quote
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
              <button
                onClick={() => scrollTo("#services")}
                className="btn-outline-light text-sm"
              >
                Our Services
              </button>
            </div>
          </div>

          {/* Right stat card — 2 cols */}
          <div className="hidden lg:flex lg:col-span-2 justify-end items-center">
            <div className="w-full max-w-[280px]">
              {/* Main stat */}
              <div className="bg-white/6 backdrop-blur-md border border-white/10 p-8 mb-3">
                <div className="text-[72px] font-extrabold text-white leading-none mb-2 tracking-tight">
                  {slide.stat.val}
                </div>
                <div className="text-white/45 text-xs font-semibold tracking-[0.22em] uppercase">
                  {slide.stat.label}
                </div>
                <div className="h-0.5 bg-red-600 mt-5" />
              </div>

              {/* Mini stat cards */}
              <div className="grid grid-cols-2 gap-3">
                {[
                  { n: "ISO", l: "9001:2015" },
                  { n: "24/7", l: "Support" },
                ].map(s => (
                  <div key={s.n}
                    className="bg-white/6 backdrop-blur-md border border-white/10 p-4 text-center">
                    <div className="text-red-400 font-extrabold text-lg leading-none">{s.n}</div>
                    <div className="text-white/35 text-[10px] tracking-widest uppercase mt-1">{s.l}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Bottom bar: progress + dots + scroll ── */}
      <div className="relative z-10 w-full pb-8">
        {/* Progress bar */}
        <div className="w-full h-px bg-white/8 mb-6">
          <div
            ref={progressRef}
            className="h-full bg-red-600 origin-left"
            style={{ transform: "scaleX(0)" }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between">
          {/* Slide dots */}
          <div className="flex items-center gap-3">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => manualGo(i)}
                className={`transition-all duration-400 rounded-full ${i === current
                    ? "w-8 h-2 bg-red-500"
                    : "w-2 h-2 bg-white/25 hover:bg-white/50"
                  }`}
              />
            ))}
            <span className="text-white/25 text-[11px] ml-2 font-mono">
              {String(current + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
            </span>
          </div>

          {/* Scroll hint */}
          <div className="flex flex-col items-center gap-1.5 text-white/25">
            <div className="w-px h-8 bg-gradient-to-b from-transparent to-white/30" />
            <span className="text-[10px] uppercase tracking-[0.25em]">Scroll</span>
          </div>
        </div>
      </div>
    </section>
  );
}

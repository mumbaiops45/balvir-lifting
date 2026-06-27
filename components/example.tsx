
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useModal } from "@/context/ModalContext";

gsap.registerPlugin(ScrollTrigger);

export default function CTA() {
  const { toggle } = useModal();
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(contentRef.current,
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 80%" } }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-28 overflow-hidden"
      style={{ backgroundColor: "#07192E" }}
    >
      {/* Deep navy → rich red gradient wash */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, #07192E 0%, #1a1a2e 30%, #3a0f0a 65%, #8d241b 100%)",
        }}
      />

      {/* Dot-grid texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.045]"
        style={{
          backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* Red glow bloom bottom-right */}
      <div
        className="absolute -bottom-20 -right-20 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(177,49,36,0.35), transparent 65%)",
          filter: "blur(60px)",
        }}
      />

      {/* Faint top-left cool counter-bloom */}
      <div
        className="absolute -top-10 -left-10 w-72 h-72 rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(26,79,196,0.12), transparent 70%)",
          filter: "blur(50px)",
        }}
      />

      {/* Border caps */}
      <div className="absolute top-0 inset-x-0 h-px bg-white/10" />
      <div className="absolute bottom-0 inset-x-0 h-px bg-white/5" />

      {/* Left accent bar */}
      <div
        className="absolute left-0 top-0 bottom-0 w-1"
        style={{
          background: "linear-gradient(to bottom, transparent, var(--primary), transparent)",
        }}
      />

      <div className="relative max-w-4xl mx-auto px-6 text-center" ref={contentRef}>

        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 mb-6">
          <div className="w-6 h-px" style={{ backgroundColor: "var(--primary)" }} />
          <p
            className="text-[11px] font-bold uppercase tracking-[0.3em]"
            style={{ color: "var(--primary-light)" }}
          >
            Request a Product Quote
          </p>
          <div className="w-6 h-px" style={{ backgroundColor: "var(--primary)" }} />
        </div>

        {/* Heading — white on dark */}
        <h2 className="text-5xl md:text-6xl font-extrabold text-white leading-tight tracking-tight mb-5">
          Need Reliable<br />
          <span
            className="bg-clip-text text-transparent"
            style={{
              backgroundImage:
                "linear-gradient(90deg, #ffffff 0%, #fca5a5 50%, var(--primary-light) 100%)",
            }}
          >
            Industrial Products?
          </span>
        </h2>

        {/* Sub-copy */}
        <p className="text-base max-w-lg mx-auto mb-10 leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>
          Send us your requirements and our sales team will respond with pricing,
          availability and technical details within{" "}
          <span className="text-white font-semibold">24 business hours.</span>
        </p>

        {/* CTA buttons */}
        <div className="flex flex-wrap justify-center gap-4">

          {/* Primary — solid red */}
          <button
            onClick={toggle}
            className="inline-flex items-center gap-2.5 text-white font-bold px-9 py-4 text-sm tracking-wide transition-all duration-300 hover:-translate-y-0.5 group"
            style={{
              backgroundColor: "var(--primary)",
              boxShadow: "0 4px 24px rgba(177,49,36,0.45)",
            }}
            onMouseEnter={e => (e.currentTarget.style.backgroundColor = "var(--primary-light)")}
            onMouseLeave={e => (e.currentTarget.style.backgroundColor = "var(--primary)")}
          >
            Send Product Enquiry
            <svg
              className="w-4 h-4 group-hover:translate-x-0.5 transition-transform"
              fill="none" stroke="currentColor" viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>

          {/* Secondary — glass on dark */}
          <a
            href="tel:+919819002726"
            className="inline-flex items-center gap-2.5 font-bold px-9 py-4 text-sm tracking-wide transition-all duration-300 hover:-translate-y-0.5 group"
            style={{
              color: "rgba(255,255,255,0.85)",
              border: "1px solid rgba(255,255,255,0.15)",
              backgroundColor: "rgba(255,255,255,0.06)",
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.35)";
              (e.currentTarget as HTMLElement).style.backgroundColor = "rgba(255,255,255,0.10)";
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.15)";
              (e.currentTarget as HTMLElement).style.backgroundColor = "rgba(255,255,255,0.06)";
            }}
          >
            <svg
              className="w-4 h-4 opacity-60 group-hover:opacity-100 transition-opacity"
              fill="none" stroke="currentColor" viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            +91 98190 02726
          </a>

        </div>

        {/* Trust footnote */}
        <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-2 mt-10">
          {["ISO 9001:2015 Certified", "Est. 2014 · Navi Mumbai", "Pan-India Delivery"].map((t, i) => (
            <span key={i} className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-widest" style={{ color: "rgba(255,255,255,0.3)" }}>
              {i !== 0 && <span className="w-1 h-1 rounded-full" style={{ backgroundColor: "var(--primary)" }} />}
              {t}
            </span>
          ))}
        </div>

      </div>
    </section>
  );
}

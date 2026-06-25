"use client";

import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const faqs = [
  {
    q: "What products does Balvir Lifting supply?",
    a: "We supply multi-brand elevator and escalator accessories, steel wire ropes, LED lighting, elevator AC, cables and wires, plus industrial automation and hardware products.",
  },
  {
    q: "Which brands do you work with?",
    a: "We source from leading names including KISWIRE, Usha Martin, Bedmutha, CEDES, MEMCO, FERMATOR, WITTUR, SHIVAM, Revati, MACROTHERM, DEEPCAB and P&F German make, among others.",
  },
  {
    q: "Are you based in Mumbai?",
    a: "Yes. Our office and stocking point are in Kharghar, Navi Mumbai, and we supply across Mumbai, Maharashtra and pan-India.",
  },
  {
    q: "Do your wire ropes meet safety standards?",
    a: "Yes. Our elevator wire ropes are IS:2365 compliant and available in 6mm, 8mm, 10mm and 13mm diameters. Offshore and construction ropes conform to international standards.",
  },
  {
    q: "Can you handle bulk and EPC project orders?",
    a: "Absolutely. We regularly supply OEMs, consultants, contractors and EPC firms, with competitive pricing for bulk and project requirements.",
  },
  {
    q: "How quickly do you respond to enquiries?",
    a: "Our sales team responds with pricing, availability and technical details within 24 business hours.",
  },
  {
    q: "Do you only sell genuine, branded products?",
    a: "Yes. We supply genuine products from authorised manufacturers and partners only, with no compromise on quality or safety.",
  },
  {
    q: "Who do you typically supply to?",
    a: "Elevator and escalator manufacturers, OEMs, consultants, contractors, EPCs, interior firms and maintenance providers.",
  },
  {
    q: "Can you help me choose the right product for my application?",
    a: "Yes. Share your requirement and our team will recommend the right brand, size and specification for your project.",
  },
  {
    q: "How do I get a quote?",
    a: "Call us on +91 98190 02726 or fill in the enquiry form, and we will get back to you within a business day.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".faq-head > *",
        { y: 32, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.08,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: { trigger: ".faq-head", start: "top 90%" },
        }
      );
      gsap.fromTo(
        ".faq-item",
        { y: 28, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.07,
          duration: 0.6,
          ease: "power3.out",
          scrollTrigger: { trigger: ".faq-list", start: "top 85%" },
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
        background: "#f8fafc",
        padding: "110px 0 120px",
        fontFamily: "'DM Sans', 'Helvetica Neue', sans-serif",
      }}
    >
      <style>{`
        .faq-answer {
          display: grid;
          grid-template-rows: 0fr;
          transition: grid-template-rows 0.4s cubic-bezier(.4,0,.2,1), opacity 0.3s;
          opacity: 0;
        }
        .faq-answer.open {
          grid-template-rows: 1fr;
          opacity: 1;
        }
        .faq-answer > div { overflow: hidden; }
        .faq-chevron { transition: transform 0.35s ease; }
        .faq-chevron.open { transform: rotate(180deg); }
      `}</style>

      {/* Soft background grid */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          backgroundImage:
            "linear-gradient(rgba(26,79,196,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(26,79,196,0.03) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage:
            "radial-gradient(ellipse 80% 60% at 50% 0%, #000 30%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 60% at 50% 0%, #000 30%, transparent 100%)",
        }}
      />

      {/* Ambient orb */}
      <div
        style={{
          position: "absolute",
          top: "-6%",
          right: "6%",
          width: 480,
          height: 480,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(26,79,196,0.08) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: 860,
          margin: "0 auto",
          padding: "0 32px",
          position: "relative",
        }}
      >
        {/* Header */}
        <div className="faq-head" style={{ textAlign: "center", marginBottom: 56 }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              marginBottom: 20,
              padding: "7px 16px",
              borderRadius: 100,
              border: "1px solid rgba(26,79,196,0.2)",
              background: "rgba(26,79,196,0.06)",
            }}
          >
            <span
              style={{
                width: 6,
                height: 6,
                borderRadius: "50%",
                background: "#1A4FC4",
                boxShadow: "0 0 8px rgba(26,79,196,0.6)",
              }}
            />
            <span
              style={{
                fontSize: 11,
                fontWeight: 600,
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: "#1A4FC4",
              }}
            >
              FAQs
            </span>
          </div>

          <h2
            style={{
              fontSize: "clamp(32px, 4.5vw, 50px)",
              fontWeight: 700,
              lineHeight: 1.1,
              letterSpacing: "-0.025em",
              margin: "0 0 18px",
              color: "#0f172a",
            }}
          >
            Frequently asked{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #1A4FC4 0%, #60A5FA 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              questions
            </span>
          </h2>

          <p
            style={{
              color: "#64748b",
              fontSize: 15,
              lineHeight: 1.7,
              margin: 0,
              maxWidth: 520,
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            Everything you need to know about our products, brands and how we
            work. Can&apos;t find an answer? Reach out to our team.
          </p>
        </div>

        {/* List */}
        <div
          className="faq-list"
          style={{ display: "flex", flexDirection: "column", gap: 12 }}
        >
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div
                key={i}
                className="faq-item"
                style={{
                  borderRadius: 14,
                  border: `1px solid ${
                    isOpen ? "rgba(26,79,196,0.3)" : "rgba(15,23,42,0.08)"
                  }`,
                  background: isOpen ? "rgba(26,79,196,0.035)" : "#fff",
                  boxShadow: isOpen
                    ? "0 12px 30px -16px rgba(26,79,196,0.35)"
                    : "0 1px 2px rgba(15,23,42,0.04)",
                  overflow: "hidden",
                  transition:
                    "border-color 0.3s, background 0.3s, box-shadow 0.3s",
                }}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  style={{
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    gap: 16,
                    padding: "22px 24px",
                    background: "transparent",
                    border: "none",
                    cursor: "pointer",
                    textAlign: "left",
                  }}
                >
                  <span
                    style={{
                      flexShrink: 0,
                      width: 28,
                      height: 28,
                      borderRadius: 8,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: 13,
                      fontWeight: 700,
                      background: isOpen
                        ? "linear-gradient(135deg, #1A4FC4, #0F3460)"
                        : "rgba(26,79,196,0.08)",
                      color: isOpen ? "#fff" : "#1A4FC4",
                      transition: "all 0.3s",
                    }}
                  >
                    Q
                  </span>

                  <span
                    style={{
                      flex: 1,
                      fontSize: 16,
                      fontWeight: 600,
                      color: isOpen ? "#1A4FC4" : "#0f172a",
                      lineHeight: 1.4,
                      transition: "color 0.3s",
                    }}
                  >
                    {f.q}
                  </span>

                  <span
                    style={{
                      flexShrink: 0,
                      width: 30,
                      height: 30,
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      border: `1px solid ${
                        isOpen ? "transparent" : "rgba(26,79,196,0.25)"
                      }`,
                      background: isOpen
                        ? "linear-gradient(135deg, #1A4FC4, #60A5FA)"
                        : "transparent",
                      transition: "all 0.3s",
                    }}
                  >
                    <svg
                      className={`faq-chevron${isOpen ? " open" : ""}`}
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke={isOpen ? "#fff" : "#1A4FC4"}
                      strokeWidth="2.5"
                      strokeLinecap="round"
                    >
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  </span>
                </button>

                {/* Answer (CSS grid expand) */}
                <div className={`faq-answer${isOpen ? " open" : ""}`}>
                  <div>
                    <p
                      style={{
                        fontSize: 14.5,
                        color: "#475569",
                        lineHeight: 1.75,
                        margin: 0,
                        padding: "0 24px 24px 68px",
                      }}
                    >
                      {f.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
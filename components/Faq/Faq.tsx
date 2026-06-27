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
      className="relative overflow-hidden pt-[110px] pb-[120px] bg-slate-50"
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
      <div className="absolute inset-0 pointer-events-none bg-[length:64px_64px] bg-[image:linear-gradient(color-mix(in_srgb,var(--primary)_3%,transparent)_1px,transparent_1px),linear-gradient(90deg,color-mix(in_srgb,var(--primary)_3%,transparent)_1px,transparent_1px)] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_0%,#000_30%,transparent_100%)] [-webkit-mask-image:radial-gradient(ellipse_80%_60%_at_50%_0%,#000_30%,transparent_100%)]" />

      {/* Ambient orb */}
      <div className="absolute top-[-6%] right-[6%] w-[480px] h-[480px] rounded-full pointer-events-none bg-[image:radial-gradient(circle,color-mix(in_srgb,var(--primary)_8%,transparent)_0%,transparent_70%)]" />

      <div className="max-w-[860px] mx-auto px-8 relative">
        {/* Header */}
        <div className="faq-head text-center mb-14">
          <div className="inline-flex items-center gap-2.5 mb-5 px-4 py-[7px] rounded-full border border-[color:color-mix(in_srgb,var(--primary)_20%,transparent)] bg-[color-mix(in_srgb,var(--primary)_6%,transparent)]">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--primary)] shadow-[0_0_8px_color-mix(in_srgb,var(--primary)_60%,transparent)]" />
            <span className="text-[11px] font-semibold tracking-[0.22em] uppercase text-[var(--primary)]">
              FAQs
            </span>
          </div>

          <h2 className="text-[clamp(32px,4.5vw,50px)] font-bold leading-[1.1] tracking-[-0.025em] m-0 mb-[18px] text-gray-900">
            Frequently asked{" "}
            <span className="bg-[image:linear-gradient(135deg,var(--primary)_0%,var(--primary-light)_100%)] bg-clip-text text-transparent">
              questions
            </span>
          </h2>

          <p className="text-gray-500 text-[15px] leading-[1.7] m-0 max-w-[520px] mx-auto">
            Everything you need to know about our products, brands and how we
            work. Can&apos;t find an answer? Reach out to our team.
          </p>
        </div>

        {/* List */}
        <div className="faq-list flex flex-col gap-3">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div
                key={i}
                className={`faq-item rounded-[14px] overflow-hidden border transition-[border-color,background,box-shadow] duration-300 ${
                  isOpen
                    ? "border-[color:color-mix(in_srgb,var(--primary)_30%,transparent)] bg-[color-mix(in_srgb,var(--primary)_3.5%,transparent)] shadow-[0_12px_30px_-16px_color-mix(in_srgb,var(--primary)_35%,transparent)]"
                    : "border-gray-200 bg-white shadow-[0_1px_2px_rgba(15,23,42,0.04)]"
                }`}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center gap-4 px-6 py-[22px] bg-transparent border-none cursor-pointer text-left"
                >
                  <span
                    className={`shrink-0 w-7 h-7 rounded-lg flex items-center justify-center text-[13px] font-bold transition-all duration-300 ${
                      isOpen
                        ? "bg-[image:linear-gradient(135deg,var(--primary),var(--primary-dark))] text-white"
                        : "bg-[color-mix(in_srgb,var(--primary)_8%,transparent)] text-[var(--primary)]"
                    }`}
                  >
                    Q
                  </span>

                  <span
                    className={`flex-1 text-base font-semibold leading-[1.4] transition-colors duration-300 ${
                      isOpen ? "text-[var(--primary)]" : "text-gray-900"
                    }`}
                  >
                    {f.q}
                  </span>

                  <span
                    className={`shrink-0 w-[30px] h-[30px] rounded-full flex items-center justify-center transition-all duration-300 ${
                      isOpen
                        ? "border border-transparent bg-[image:linear-gradient(135deg,var(--primary),var(--primary-light))]"
                        : "border border-[color:color-mix(in_srgb,var(--primary)_25%,transparent)] bg-transparent"
                    }`}
                  >
                    <svg
                      className={`faq-chevron${isOpen ? " open" : ""}`}
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke={isOpen ? "#fff" : "var(--primary)"}
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
                    <p className="text-[14.5px] text-gray-600 leading-[1.75] m-0 pl-[68px] pr-6 pb-6">
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
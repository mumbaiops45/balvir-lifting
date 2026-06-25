
"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { useModal } from "@/context/ModalContext";

export default function Hero() {
  const { toggle } = useModal();

  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        contentRef.current,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1.1,
          ease: "power3.out",
          delay: 0.5,
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const scrollTo = (id: string) =>
    document.querySelector(id)?.scrollIntoView({
      behavior: "smooth",
    });

  return (
    <section
      id="home"
      ref={sectionRef}
      className="hero-bg-anim relative w-full h-screen min-h-[700px] flex flex-col overflow-hidden"
    >
      {/* Video Background */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/Hero (3).mp4" type="video/mp4" />
        <source
          src="https://videos.pexels.com/video-files/7599305/7599305-sd_960_540_25fps.mp4"
          type="video/mp4"
        />
      </video>

      {/* Overlays */}
      <div className="absolute inset-0 bg-black/40" />

      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent" />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_50%,rgba(15,52,96,0.25),transparent_40%)]" />

      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/70" />

      {/* Content */}
      <div className="relative z-10 flex-1 flex items-center pt-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 w-full grid lg:grid-cols-5 gap-12 items-center">

          {/* Left Content */}
          <div
            ref={contentRef}
            className="lg:col-span-3"
          >
            <h1 className="md:text-7xl xl:text-[82px] font-extrabold text-white leading-[1.03] tracking-[-0.03em] mb-5">
              Elevating Spaces.
              <br />
              <span className="text-[var(--blue-bright)]">
                Earning Trust.
              </span>
            </h1>

            <div className="w-16 h-[3px] bg-blue-600 mb-7" />

            <p className="text-white/70 text-base md:text-lg leading-relaxed max-w-[720px] mb-10">
              Mumbai's trusted multi-brand supplier of elevator accessories,
              steel wire ropes, LED lighting, cables and automation products.
              Genuine brands, fair pricing, reliable supply across Maharashtra
              and India.
            </p>

            <div className="flex flex-wrap gap-4">
              <button
                onClick={toggle}
                className="btn-red group text-sm"
              >
                Get a Free Quote

                <svg
                  className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </button>

              <button
                onClick={() => scrollTo("#products")}
                className="btn-outline-light text-sm"
              >
                Explore Products
              </button>
            </div>
          </div>

          {/* Right Trust Cards */}
          <div className="hidden lg:flex lg:col-span-2 justify-end items-center">
            <div className="grid grid-cols-2 gap-4 w-full max-w-md">

              <div className="bg-white/10 backdrop-blur-md border border-white/10 p-6">
                <div className="text-4xl font-extrabold text-white mb-2">
                  2014
                </div>
                <div className="text-white/60 text-sm uppercase tracking-wider">
                  Established
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-md border border-white/10 p-6">
                <div className="text-4xl font-extrabold text-white mb-2">
                  MB
                </div>
                <div className="text-white/60 text-sm uppercase tracking-wider">
                  Multi Brand Portfolio
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-md border border-white/10 p-6">
                <div className="text-4xl font-extrabold text-white mb-2">
                  INDIA
                </div>
                <div className="text-white/60 text-sm uppercase tracking-wider">
                  Pan India Supply
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-md border border-white/10 p-6">
                <div className="text-4xl font-extrabold text-white mb-2">
                  24H
                </div>
                <div className="text-white/60 text-sm uppercase tracking-wider">
                  Quote Response
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}


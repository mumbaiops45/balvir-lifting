"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { galleryImages, pexelsImg } from "@/lib/media";

gsap.registerPlugin(ScrollTrigger);

export default function Gallery() {
  const sectionRef = useRef<HTMLElement>(null);
  const headRef    = useRef<HTMLDivElement>(null);
  const gridRef    = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(headRef.current,
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.9, ease: "power3.out",
          scrollTrigger: { trigger: headRef.current, start: "top 85%" } }
      );
      gsap.fromTo(gridRef.current?.children ?? [],
        { scale: 0.94, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.6, ease: "power3.out",
          stagger: { amount: 0.7 },
          scrollTrigger: { trigger: gridRef.current, start: "top 80%" } }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="gallery" ref={sectionRef} className="section-pad bg-white relative overflow-hidden font-jakarta">
      <div className="absolute top-0 inset-x-0 h-px bg-gray-100" />

      <div className="max-w-7xl mx-auto px-6">
        <div ref={headRef} className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <p className="text-red-600 text-xs font-bold uppercase tracking-[0.25em] mb-4">Photo Gallery</p>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight tracking-tight">
              Precision in Every <span className="text-red-gradient">Frame</span>
            </h2>
          </div>
          <p className="text-gray-400 text-xs max-w-xs leading-relaxed">
            Architecture, interiors and engineering — the world Balvir Lifting operates in.
            <span className="block mt-1 text-gray-300">Photos via Pexels</span>
          </p>
        </div>

        {/* Masonry using CSS columns */}
        <div ref={gridRef} className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
          {galleryImages.map(img => (
            <div key={img.id}
              className="group relative overflow-hidden bg-gray-100 break-inside-avoid border border-gray-200 hover:border-red-300 hover:shadow-[0_8px_40px_rgba(200,16,32,0.12)] transition-all duration-400">
              <div className={`relative w-full ${img.wide ? "h-72" : "h-52"}`}>
                <Image
                  src={pexelsImg(img.id, 800, img.wide ? 580 : 400)}
                  alt={img.title} fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-108"
                  loading="lazy" unoptimized
                />
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-3 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-400">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-red-400 block mb-1">{img.category}</span>
                <h4 className="text-white font-semibold text-sm leading-tight">{img.title}</h4>
              </div>

              {/* Top red border on hover */}
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-red-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-400 origin-left" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

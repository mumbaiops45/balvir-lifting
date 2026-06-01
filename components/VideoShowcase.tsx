"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { showcaseVideos, pexelsVideoSrc, pexelsVideoPoster } from "@/lib/media";

gsap.registerPlugin(ScrollTrigger);

export default function VideoShowcase() {
  const sectionRef = useRef<HTMLElement>(null);
  const headRef    = useRef<HTMLDivElement>(null);
  const gridRef    = useRef<HTMLDivElement>(null);
  const [featured, setFeatured] = useState(showcaseVideos[0]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(headRef.current,
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.9, ease: "power3.out",
          scrollTrigger: { trigger: headRef.current, start: "top 85%" } }
      );
      gsap.fromTo(gridRef.current?.children ?? [],
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, stagger: 0.08, ease: "power3.out",
          scrollTrigger: { trigger: gridRef.current, start: "top 80%" } }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="videos" ref={sectionRef} className="section-pad bg-gray-50 relative overflow-hidden font-jakarta">
      <div className="absolute top-0 inset-x-0 h-px bg-gray-200" />
      <div className="absolute bottom-0 inset-x-0 h-px bg-gray-200" />

      <div className="max-w-7xl mx-auto px-6">
        <div ref={headRef} className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <p className="text-red-600 text-xs font-bold uppercase tracking-[0.25em] mb-4">Video Showcase</p>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight tracking-tight">
              See the World We <span className="text-red-gradient">Build</span>
            </h2>
          </div>
          <p className="text-gray-400 text-xs max-w-xs leading-relaxed">
            From elevator interiors to iconic skylines — the environments our lifts call home.
            <span className="block mt-1 text-gray-300">Videos via Pexels</span>
          </p>
        </div>

        {/* Featured player */}
        <FeaturedPlayer video={featured} />

        {/* Thumbnail grid */}
        <div ref={gridRef} className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mt-4">
          {showcaseVideos.map(v => (
            <button key={v.id} onClick={() => setFeatured(v)}
              className={`group relative overflow-hidden aspect-video bg-gray-200 border transition-all duration-300 ${
                featured.id === v.id
                  ? "border-red-600 shadow-[0_0_20px_rgba(200,16,32,0.25)]"
                  : "border-gray-200 hover:border-red-300"
              }`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={pexelsVideoPoster(v.id)} alt={v.title}
                className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:opacity-90 transition-opacity duration-300"
                loading="lazy"
                onError={e => { (e.target as HTMLImageElement).style.display = "none"; }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

              {/* Play icon */}
              <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
                featured.id === v.id ? "opacity-100" : "opacity-0 group-hover:opacity-100"
              }`}>
                <div className="w-8 h-8 bg-red-600 flex items-center justify-center shadow-lg">
                  <svg className="w-3 h-3 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-2">
                <span className="text-[9px] font-bold uppercase tracking-wider text-red-300 block">{v.category}</span>
                <span className="text-white/70 text-[10px] leading-tight line-clamp-1">{v.title}</span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

function FeaturedPlayer({ video }: { video: (typeof showcaseVideos)[0] }) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();
      videoRef.current.play().catch(() => {});
    }
  }, [video.id]);

  return (
    <div id="featured-player"
      className="relative w-full aspect-video bg-gray-200 overflow-hidden border border-gray-200 shadow-sm mb-4">
      <video ref={videoRef} key={video.id}
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay muted loop playsInline controls
        poster={pexelsVideoPoster(video.id)}
      >
        <source src={pexelsVideoSrc(video.id)} type="video/mp4" />
        <source src={`https://videos.pexels.com/video-files/${video.id}/${video.id}-sd_960_540_30fps.mp4`} type="video/mp4" />
        <source src={`https://videos.pexels.com/video-files/${video.id}/${video.id}-hd_1920_1080_25fps.mp4`} type="video/mp4" />
      </video>

      {/* Info overlays */}
      <div className="absolute top-4 left-4 pointer-events-none">
        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white bg-red-600 px-3 py-1.5">
          {video.category}
        </span>
      </div>
      <div className="absolute bottom-14 left-4 pointer-events-none">
        <h4 className="text-white font-bold text-lg drop-shadow-lg">{video.title}</h4>
        <span className="text-white/50 text-xs">Pexels · Free to use</span>
      </div>
    </div>
  );
}

"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const info = [
  { label: "Phone",      val: "+91 98190 02726",                   sub: "Mon–Sat, 9 AM – 7 PM",
    icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg> },
  { label: "Email",      val: "kishore@balvir.in",                 sub: "Response within 24 hours",
    icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg> },
  { label: "Office", val: "Shop No. 18, Plot S, Sector-2, Kharghar", sub: "Navi Mumbai – 410210, Maharashtra",
    icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg> },
  { label: "Warehouse",  val: "+91 70216 60866",                   sub: "Kharghar, Navi Mumbai",
    icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg> },
];

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const leftRef    = useRef<HTMLDivElement>(null);
  const rightRef   = useRef<HTMLDivElement>(null);
  const [form, setForm] = useState({ name: "", email: "", phone: "", service: "", message: "" });
  const [sent, setSent] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(leftRef.current,
        { x: -50, opacity: 0 },
        { x: 0, opacity: 1, duration: 1, ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 75%" } }
      );
      gsap.fromTo(rightRef.current,
        { x: 50, opacity: 0 },
        { x: 0, opacity: 1, duration: 1, ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 75%" } }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const inputClass = "w-full bg-white border border-gray-200 focus:border-blue-500 text-gray-900 placeholder-gray-300 px-4 py-3 text-sm outline-none transition-colors duration-200 rounded-none shadow-sm";

  return (
    <section id="contact" ref={sectionRef} className="section-pad bg-gray-50 relative overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px bg-gray-200" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-14">
          <p className="text-blue-600 text-xs font-bold uppercase tracking-[0.25em] mb-4">Get In Touch</p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight tracking-tight">
            Let&apos;s Find The Right<br /><span className="text-blue-gradient">Products For You</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Info — 2/5 */}
          <div ref={leftRef} className="lg:col-span-2 flex flex-col gap-8">
            <div className="flex flex-col gap-6">
              {info.map(i => (
                <div key={i.label} className="flex gap-4 items-start">
                  <div className="w-11 h-11 border border-blue-200 bg-blue-50 flex items-center justify-center text-blue-500 shrink-0">
                    {i.icon}
                  </div>
                  <div>
                    <div className="text-gray-400 text-[11px] uppercase tracking-widest mb-0.5">{i.label}</div>
                    <div className="text-gray-900 font-semibold text-sm">{i.val}</div>
                    <div className="text-gray-400 text-xs mt-0.5">{i.sub}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-gray-200 pt-7">
              <div className="text-gray-400 text-[11px] uppercase tracking-widest mb-4">Supply Regions</div>
              <div className="flex flex-wrap gap-2">
                {["Navi Mumbai","Mumbai","New Delhi","Kolkata","Chennai","Pan India"].map(r => (
                  <span key={r} className="text-xs text-gray-500 border border-gray-200 bg-white px-3 py-1.5">{r}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Form — 3/5 */}
          <div ref={rightRef} className="lg:col-span-3">
            <div className="bg-white border border-gray-200 shadow-sm p-8">
              <div className="h-0.5 bg-gradient-to-r from-blue-700 to-blue-400 -mx-8 -mt-8 mb-8" />

              {sent ? (
                <div className="flex flex-col items-center justify-center py-16 gap-4 text-center">
                  <div className="w-16 h-16 border border-blue-200 bg-blue-50 flex items-center justify-center">
                    <svg className="w-7 h-7 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-gray-900 font-bold text-xl">Enquiry Received</h3>
                  <p className="text-gray-400 text-sm max-w-xs">Our team will contact you within one business day.</p>
                  <button onClick={() => setSent(false)} className="text-blue-500 text-xs underline underline-offset-4 mt-2">Send another message</button>
                </div>
              ) : (
                <form onSubmit={e => { e.preventDefault(); setSent(true); }} className="flex flex-col gap-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-gray-400 text-[11px] uppercase tracking-widest block mb-2">Full Name *</label>
                      <input required type="text" value={form.name}
                        onChange={e => setForm({ ...form, name: e.target.value })}
                        placeholder="Your name" className={inputClass} />
                    </div>
                    <div>
                      <label className="text-gray-400 text-[11px] uppercase tracking-widest block mb-2">Email *</label>
                      <input required type="email" value={form.email}
                        onChange={e => setForm({ ...form, email: e.target.value })}
                        placeholder="your@email.com" className={inputClass} />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-gray-400 text-[11px] uppercase tracking-widest block mb-2">Phone</label>
                      <input type="tel" value={form.phone}
                        onChange={e => setForm({ ...form, phone: e.target.value })}
                        placeholder="+91 XXXXX XXXXX" className={inputClass} />
                    </div>
                    <div>
                      <label className="text-gray-400 text-[11px] uppercase tracking-widest block mb-2">Product Category</label>
                      <select value={form.service}
                        onChange={e => setForm({ ...form, service: e.target.value })}
                        className={inputClass + " appearance-none"}>
                        <option value="">Select product</option>
                        <option>Elevators &amp; Escalators Accessories</option>
                        <option>Steel Wire Ropes</option>
                        <option>LED Lighting &amp; Accessories</option>
                        <option>Cables &amp; Wires</option>
                        <option>Door Sensors / Light Curtains</option>
                        <option>Drives / ARD / UPS</option>
                        <option>Industrial Automation</option>
                        <option>Other / General Enquiry</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="text-gray-400 text-[11px] uppercase tracking-widest block mb-2">Requirement Details</label>
                    <textarea rows={4} value={form.message}
                      onChange={e => setForm({ ...form, message: e.target.value })}
                      placeholder="Product, brand, quantity, specifications, delivery location..."
                      className={inputClass + " resize-none"} />
                  </div>
                  <button type="submit" className="btn-red w-full justify-center mt-2 py-4 text-sm tracking-widest">
                    Submit Enquiry
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
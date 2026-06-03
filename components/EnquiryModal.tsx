"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useModal } from "@/context/ModalContext";
import { LogoSVG } from "./LogoImage";

const services = [
  { id: "passenger", label: "Passenger Elevator", icon: "🏢" },
  { id: "home",      label: "Home / Villa Lift",  icon: "🏠" },
  { id: "goods",     label: "Goods & Freight",     icon: "📦" },
  { id: "hydraulic", label: "Hydraulic Lift",      icon: "⚙️" },
  { id: "escalator", label: "Escalator",           icon: "↕️" },
  { id: "modernise", label: "Modernisation",       icon: "🔧" },
];

const STEPS = ["Your Details", "Your Project", "Submit"];

const trust = [
  "ISO 9001:2015 Certified",
  "25+ Years Experience",
  "3,000+ Lifts Installed",
  "24 / 7 Breakdown Support",
  "EN 81 & BIS Approved",
];

export default function EnquiryModal() {
  const { open, toggle } = useModal();
  const overlayRef = useRef<HTMLDivElement>(null);
  const cardRef    = useRef<HTMLDivElement>(null);
  const bodyRef    = useRef<HTMLDivElement>(null);

  const [step, setStep]       = useState(0);
  const [sent, setSent]       = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm]       = useState({
    name: "", phone: "", email: "", company: "",
    service: "", floors: "", city: "", buildingType: "",
    timeline: "", message: "",
  });

  /* ── Open / close animation ───────────────── */
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
      gsap.fromTo(overlayRef.current, { opacity: 0 }, { opacity: 1, duration: 0.25 });
      gsap.fromTo(cardRef.current,
        { scale: 0.93, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.45, ease: "power3.out" }
      );
    } else {
      document.body.style.overflow = "";
      gsap.to(cardRef.current,
        { scale: 0.95, opacity: 0, duration: 0.3, ease: "power2.in",
          onComplete: () => { gsap.set(overlayRef.current, { opacity: 0 }); setStep(0); setSent(false); } }
      );
    }
  }, [open]);

  /* ── Step transition ──────────────────────── */
  const animateStep = (dir: "next" | "prev") => {
    const el = bodyRef.current;
    if (!el) return;
    gsap.fromTo(el,
      { x: dir === "next" ? 30 : -30, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.35, ease: "power3.out" }
    );
  };
  const goNext = () => { setStep(s => s + 1); setTimeout(() => animateStep("next"), 10); };
  const goPrev = () => { setStep(s => s - 1); setTimeout(() => animateStep("prev"), 10); };

  /* ── Escape ───────────────────────────────── */
  useEffect(() => {
    const h = (e: KeyboardEvent) => { if (e.key === "Escape" && open) toggle(); };
    window.addEventListener("keydown", h);
    return () => window.removeEventListener("keydown", h);
  }, [open, toggle]);

  const f = (k: keyof typeof form, v: string) => setForm(p => ({ ...p, [k]: v }));

  const handleSubmit = async () => {
    setLoading(true);
    try {
      const fd = new FormData();
      fd.append("_subject",      `New Enquiry from ${form.name} — Balvir Lifting`);
      fd.append("_captcha",      "false");
      fd.append("_template",     "table");
      fd.append("Name",          form.name);
      fd.append("Phone",         `+91 ${form.phone}`);
      fd.append("Email",         form.email);
      fd.append("Company",       form.company || "—");
      fd.append("Service",       services.find(s => s.id === form.service)?.label ?? "—");
      fd.append("Floors",        form.floors || "—");
      fd.append("City",          form.city);
      fd.append("Building Type", form.buildingType || "—");
      fd.append("Timeline",      form.timeline || "—");
      fd.append("Message",       form.message || "—");

      const res = await fetch("https://formsubmit.co/ajax/kishore@balvir.in", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: fd,
      });
      const data = await res.json();
      if (data.success === "true" || data.success === true) {
        setSent(true);
      }
    } catch {
      // silent — user can retry
    } finally {
      setLoading(false);
    }
  };

  const inp = "w-full bg-gray-50 border border-gray-200 focus:border-blue-500 focus:bg-white text-gray-900 placeholder-gray-300 px-3.5 py-2.5 text-sm outline-none transition-all rounded-lg";
  const lbl = "text-gray-400 text-[10px] font-bold uppercase tracking-widest block mb-1";

  const step0OK = !!(form.name && form.phone && form.email);
  const step1OK = !!(form.service && form.city);

  return (
    <>
      {/* Overlay */}
      <div ref={overlayRef} onClick={toggle}
        className="fixed inset-0 z-[70] bg-black/55 backdrop-blur-sm"
        style={{ opacity: 0, pointerEvents: open ? "auto" : "none" }} />

      {/* Card — fixed size, no internal scroll */}
      <div ref={cardRef}
        className="fixed z-[80] inset-x-4 top-1/2 -translate-y-1/2 md:inset-x-auto md:left-1/2 md:-translate-x-1/2 md:w-[860px] flex rounded-2xl overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.45)]"
        style={{ opacity: 0, maxHeight: "calc(100dvh - 40px)", pointerEvents: open ? "auto" : "none" }}
      >

        {/* ── LEFT panel ──────────────────────── */}
        <div className="hidden md:flex w-[260px] shrink-0 flex-col justify-between p-7 relative"
         style={{
  background:
    "linear-gradient(135deg, var(--blue-dark) 0%, var(--blue) 45%, var(--blue-bright) 100%)",
}}>
          {/* texture */}
          <div className="absolute inset-0 opacity-10" style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,.15) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.15) 1px,transparent 1px)",
            backgroundSize: "28px 28px"
          }} />

          <div className="relative flex flex-col gap-6">
            <LogoSVG height={36} variant="dark" />

            <div>
              <h3 className="text-white text-lg font-extrabold leading-snug">
                Get Your Free<br />Site Estimate
              </h3>
              <p className="text-white/55 text-xs mt-1.5 leading-relaxed">
                Our engineers respond within 2 hours on business days.
              </p>
            </div>

            <ul className="flex flex-col gap-2.5">
              {trust.map(t => (
                <li key={t} className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                    <svg className="w-2.5 h-2.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-white/70 text-[12px]">{t}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative border-t border-white/15 pt-5">
            <p className="text-white/65 text-[12px] italic leading-relaxed">
              &ldquo;Impeccable safety record. The ride quality is exceptional.&rdquo;
            </p>
            <p className="text-white/40 text-[11px] mt-2 font-semibold">— Rajiv Mehta · Skyline Developers</p>
          </div>
        </div>

        {/* ── RIGHT panel ─────────────────────── */}
        <div className="flex-1 bg-white flex flex-col">

          {/* Header — step indicators */}
          <div className="px-6 pt-5 pb-4 border-b border-gray-100 flex items-center justify-between shrink-0">
            <div className="flex items-center gap-2">
              {STEPS.map((s, i) => (
                <div key={s} className="flex items-center gap-1.5">
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center text-[11px] font-bold transition-all duration-300 ${
                    i < step  ? "bg-green-500 text-white" :
                    i === step ? "bg-blue-600 text-white"  :
                    "bg-gray-100 text-gray-400"
                  }`}>
                    {i < step ? "✓" : i + 1}
                  </div>
                  <span className={`text-[11px] font-semibold hidden sm:block ${i === step ? "text-gray-800" : "text-gray-300"}`}>{s}</span>
                  {i < STEPS.length - 1 && (
                    <div className={`w-5 h-px mx-0.5 ${i < step ? "bg-green-400" : "bg-gray-200"}`} />
                  )}
                </div>
              ))}
            </div>
            <button onClick={toggle}
              className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:border-blue-500 hover:text-blue-500 transition-all">
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Body — NO scroll, all content fits */}
          <div ref={bodyRef} className="flex-1 px-6 py-5 overflow-hidden">

            {sent ? (
              /* Success */
              <div className="h-full flex flex-col items-center justify-center gap-4 text-center">
                <div className="w-16 h-16 bg-green-50 border-2 border-green-400 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-gray-900 text-xl font-extrabold mb-1">Enquiry Submitted!</h3>
                  <p className="text-gray-400 text-sm max-w-xs leading-relaxed">
                    Our team will contact you within <strong className="text-gray-700">2 business hours.</strong>
                  </p>
                </div>
                <div className="bg-gray-50 rounded-xl border border-gray-100 p-4 w-full max-w-sm text-left">
                  <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                    {[
                      { l: "Name",    v: form.name },
                      { l: "Phone",   v: `+91 ${form.phone}` },
                      { l: "Service", v: services.find(s => s.id === form.service)?.label ?? "—" },
                      { l: "City",    v: form.city },
                    ].map(r => (
                      <div key={r.l}>
                        <span className="text-gray-400 text-[10px] uppercase tracking-wider block">{r.l}</span>
                        <span className="text-gray-800 text-sm font-semibold">{r.v}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex gap-3">
                  <button onClick={() => { setSent(false); setStep(0); setForm({ name:"",phone:"",email:"",company:"",service:"",floors:"",city:"",buildingType:"",timeline:"",message:"" }); }}
                    className="text-sm border border-gray-200 text-gray-600 px-5 py-2.5 rounded-lg hover:bg-gray-50 transition-colors">
                    New Enquiry
                  </button>
                  <button onClick={toggle}
                    className="text-sm bg-blue-600 text-white px-5 py-2.5 rounded-lg hover:bg-blue-500 font-semibold transition-colors">
                    Close
                  </button>
                </div>
              </div>
            ) : (
              <>
                {/* ── Step 0: Details ── */}
                {step === 0 && (
                  <div className="flex flex-col gap-4">
                    <div>
                      <h2 className="text-lg font-extrabold text-gray-900">Tell us about yourself</h2>
                      <p className="text-gray-400 text-xs mt-0.5">We&apos;ll use this to send your quote and follow up.</p>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className={lbl}>Full Name *</label>
                        <input type="text" required value={form.name}
                          onChange={e => f("name", e.target.value)}
                          placeholder="Rajiv Mehta" className={inp} />
                      </div>
                      <div>
                        <label className={lbl}>Company</label>
                        <input type="text" value={form.company}
                          onChange={e => f("company", e.target.value)}
                          placeholder="Company name" className={inp} />
                      </div>
                    </div>

                    <div>
                      <label className={lbl}>Phone Number *</label>
                      <div className="flex gap-2">
                        <div className="flex items-center gap-2 bg-gray-50 border border-gray-200 px-3 rounded-lg shrink-0">
                          <span className="text-base">🇮🇳</span>
                          <span className="text-gray-500 text-sm font-medium">+91</span>
                        </div>
                        <input type="tel" required value={form.phone}
                          onChange={e => f("phone", e.target.value)}
                          placeholder="98190 02726" className={inp} />
                      </div>
                    </div>

                    <div>
                      <label className={lbl}>Email Address *</label>
                      <input type="email" required value={form.email}
                        onChange={e => f("email", e.target.value)}
                        placeholder="rajiv@company.com" className={inp} />
                    </div>
                  </div>
                )}

                {/* ── Step 1: Project ── */}
                {step === 1 && (
                  <div className="flex flex-col gap-4">
                    <div>
                      <h2 className="text-lg font-extrabold text-gray-900">Your project details</h2>
                      <p className="text-gray-400 text-xs mt-0.5">Select the lift type and basic project info.</p>
                    </div>

                    {/* Service cards */}
                    <div>
                      <label className={lbl}>Service Required *</label>
                      <div className="grid grid-cols-3 gap-2">
                        {services.map(s => (
                          <button key={s.id} type="button" onClick={() => f("service", s.id)}
                            className={`flex flex-col items-center gap-1.5 py-3 px-2 rounded-xl border-2 text-center transition-all ${
                              form.service === s.id
                                ? "border-blue-600 bg-blue-50"
                                : "border-gray-200 bg-white hover:border-gray-300"
                            }`}>
                            <span className="text-xl leading-none">{s.icon}</span>
                            <span className={`text-[10px] font-semibold leading-tight ${form.service === s.id ? "text-blue-600" : "text-gray-500"}`}>
                              {s.label}
                            </span>
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className={lbl}>Floors</label>
                        <input type="text" value={form.floors}
                          onChange={e => f("floors", e.target.value)}
                          placeholder="e.g. G + 10" className={inp} />
                      </div>
                      <div>
                        <label className={lbl}>City *</label>
                        <input type="text" required value={form.city}
                          onChange={e => f("city", e.target.value)}
                          placeholder="Mumbai" className={inp} />
                      </div>
                    </div>

                    {/* Building type */}
                    <div>
                      <label className={lbl}>Building Type</label>
                      <div className="flex flex-wrap gap-1.5">
                        {["Residential","Commercial","Hospital","Hotel","Industrial","Mall"].map(t => (
                          <button key={t} type="button" onClick={() => f("buildingType", t)}
                            className={`px-3 py-1.5 rounded-full text-[11px] font-semibold border transition-all ${
                              form.buildingType === t
                                ? "bg-blue-600 text-white border-blue-600"
                                : "bg-white text-gray-500 border-gray-200 hover:border-gray-400"
                            }`}>
                            {t}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* ── Step 2: Confirm ── */}
                {step === 2 && (
                  <div className="flex flex-col gap-4">
                    <div>
                      <h2 className="text-lg font-extrabold text-gray-900">Almost done!</h2>
                      <p className="text-gray-400 text-xs mt-0.5">Add a message (optional) and review your details.</p>
                    </div>

                    <div>
                      <label className={lbl}>Expected Timeline</label>
                      <div className="flex flex-wrap gap-1.5">
                        {["Immediately","1–3 Months","3–6 Months","Planning Stage"].map(t => (
                          <button key={t} type="button" onClick={() => f("timeline", t)}
                            className={`px-3 py-1.5 rounded-full text-[11px] font-semibold border transition-all ${
                              form.timeline === t
                                ? "bg-blue-600 text-white border-blue-600"
                                : "bg-white text-gray-500 border-gray-200 hover:border-gray-400"
                            }`}>
                            {t}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className={lbl}>Message (optional)</label>
                      <textarea rows={2} value={form.message}
                        onChange={e => f("message", e.target.value)}
                        placeholder="Special requirements, access constraints, questions..."
                        className={inp + " resize-none"} />
                    </div>

                    {/* Compact summary */}
                    <div className="bg-gray-50 rounded-xl border border-gray-100 p-4">
                      <p className="text-gray-400 text-[10px] uppercase tracking-widest mb-3 font-bold">Enquiry Summary</p>
                      <div className="grid grid-cols-2 gap-x-6 gap-y-2">
                        {[
                          { l: "Name",    v: form.name },
                          { l: "Phone",   v: `+91 ${form.phone}` },
                          { l: "Email",   v: form.email },
                          { l: "Service", v: services.find(s => s.id === form.service)?.label ?? "—" },
                          { l: "Floors",  v: form.floors || "—" },
                          { l: "City",    v: form.city },
                        ].map(r => (
                          <div key={r.l}>
                            <span className="text-gray-400 text-[10px] uppercase tracking-wider block">{r.l}</span>
                            <span className="text-gray-800 text-xs font-semibold truncate block">{r.v}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </>
            )}
          </div>

          {/* Footer nav */}
          {!sent && (
            <div className="shrink-0 px-6 py-4 border-t border-gray-100 flex items-center justify-between bg-white">
              {step > 0 ? (
                <button onClick={goPrev}
                  className="flex items-center gap-1.5 text-sm text-gray-400 hover:text-gray-700 transition-colors font-medium">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                  Back
                </button>
              ) : (
                <a href="tel:+919819002726"
                  className="flex items-center gap-1.5 text-xs text-gray-400 hover:text-blue-600 transition-colors">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  +91 98190 02726
                </a>
              )}

              {step < 2 ? (
                <button onClick={goNext}
                  disabled={step === 0 ? !step0OK : !step1OK}
                  className="btn-red text-sm py-2.5 px-7 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:shadow-none disabled:hover:translate-y-0 group">
                  Continue
                  <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              ) : (
                <button onClick={handleSubmit} disabled={loading}
                  className="btn-red text-sm py-2.5 px-7 group disabled:opacity-60 disabled:cursor-not-allowed">
                  {loading ? (
                    <>
                      <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
                      </svg>
                      Sending…
                    </>
                  ) : (
                    <>
                      Submit Enquiry
                      <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                      </svg>
                    </>
                  )}
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
}

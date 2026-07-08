"use client";

import { useEffect, useState, FormEvent } from "react";
import { createPortal } from "react-dom";
import { useModal } from "@/context/ModalContext";

/* ─────────────────────────────────────────────────────────────
   PRODUCT DATA — from Balvir Lifting product catalogue
   Category → Products (dependent dropdown)
────────────────────────────────────────────────────────────── */
const PRODUCT_MAP: Record<string, string[]> = {
  "Elevator & Escalator Accessories": [
    "Flat Travelling Cables",
    "Wire Bundles",
    "Display Cable Bundles",
    "Steel Wire Ropes — Elevator",
    "LED Lights — 75 mm Cutout, Round / Square",
    "Cabin Fans — 300 mm",
    "Blower Fans — 330 × 45 mm",
    "Overload Sensors — All Types",
    "Infra-Red Door Sensors — 154 Beams",
    "Final Limit Switches",
    "Safety Limit Switches",
    "Maintenance Box",
    "Junction Box",
    "Cable Hangers — Big / Small",
    "Door Springs",
    "Manual Landing Doors — Revati Type",
    "Auto Doors — Fermator / Fermator Type",
    "Door Closers",
    "Door Magnets",
  ],
  "Steel Wire Ropes": [
    "Elevator Wire Ropes",
    "Offshore & Shipping Ropes",
    "Construction, Crane & Material-Handling Ropes",
    "KISWIRE Ropes",
  ],
  "LED Lighting & Elevator Air Conditioning": [
    "Round LED Panels — SMD / COB",
    "Cabin Fans & Blower Fans",
    "Elevator Air Conditioning System",
  ],
  "Cables & Wires": [
    "Flat Travelling Cables",
    "Wire Bundles & Display Cable Bundles",
    "Shielded Multi-Core Cables",
    "CCTV & Multimedia Cables",
    "Industrial Cables & Wires",
  ],
  "Industrial Automation & Analytical": [
    "Industrial Automation Products",
    "Control & Monitoring Systems",
    "Analytical Instruments",
    "Process Equipment",
  ],
  "Other Accessories & Hardware": [
    "Overload & Door Sensors",
    "Limit Switches & Safety Switches",
    "Junction & Maintenance Boxes",
    "Cable Hangers",
    "Motion Sensors & Intercoms",
  ],
};

const QUANTITY_OPTIONS = [
  "1 – 5 units",
  "6 – 25 units",
  "26 – 100 units",
  "100+ units / Bulk order",
  "Not sure — need guidance",
];

const REQUIREMENT_TYPES = [
  "New Installation",
  "Replacement / Spare Parts",
  "Maintenance Contract Supply",
  "Bulk / Dealer Enquiry",
];

/* ─────────────────────────────────────────────────────────────
   ENQUIRY MODAL — wired to ModalContext (no props needed)

   Usage in app/layout.tsx:
     <ModalProvider>
       <Navbar />
       {children}
       <EnquiryModal />
     </ModalProvider>

   FIXES:
   1. createPortal → document.body
      `position: fixed` breaks when any ancestor has transform /
      filter / backdrop-blur (Navbar GSAP y-transform, hero blur
      layers). Portal escapes the animated tree.

   2. Form internal scroll: `flex-1 min-h-0` on the <form>.
      Flex children default to min-height:auto, so the form was
      taking full content height and its overflow-y-auto never
      activated — nothing scrolled inside the card, wheel events
      fell through to the page.

   3. Background scroll lock: overflow hidden on BOTH <html> and
      <body> with scrollbar-width compensation (no layout shift),
      plus `overscroll-contain` on the form so reaching the end
      of the form's scroll never chains to the page.
────────────────────────────────────────────────────────────── */
export default function EnquiryModal() {
  const { open, close } = useModal();
  const [mounted, setMounted] = useState(false);
  const [category, setCategory] = useState("");
  const [product, setProduct] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [sent, setSent] = useState(false);

  // portal only after mount → no hydration mismatch
  useEffect(() => setMounted(true), []);

  // ── SCROLL LOCK (html + body) + Escape close ────────────────
  useEffect(() => {
    if (!open) return;

    const html = document.documentElement;
    const body = document.body;

    // compensate for scrollbar disappearing → no layout jump
    const scrollbarW = window.innerWidth - html.clientWidth;

    const prevHtmlOverflow = html.style.overflow;
    const prevBodyOverflow = body.style.overflow;
    const prevBodyPadding = body.style.paddingRight;

    html.style.overflow = "hidden";
    body.style.overflow = "hidden";
    if (scrollbarW > 0) body.style.paddingRight = `${scrollbarW}px`;

    // If you use Lenis smooth scroll, also uncomment:
    // window.lenis?.stop();
    // If you use GSAP ScrollSmoother, also uncomment:
    // ScrollSmoother.get()?.paused(true);

    const onKey = (e: KeyboardEvent) => e.key === "Escape" && close();
    window.addEventListener("keydown", onKey);

    return () => {
      html.style.overflow = prevHtmlOverflow;
      body.style.overflow = prevBodyOverflow;
      body.style.paddingRight = prevBodyPadding;
      // window.lenis?.start();
      // ScrollSmoother.get()?.paused(false);
      window.removeEventListener("keydown", onKey);
    };
  }, [open, close]);

  // reset form state whenever modal fully closes
  useEffect(() => {
    if (!open) {
      const t = setTimeout(() => {
        setSent(false);
        setCategory("");
        setProduct("");
      }, 300);
      return () => clearTimeout(t);
    }
  }, [open]);

  if (!mounted || !open) return null;

const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  setSubmitting(true);

  const form = e.currentTarget;
  const data = Object.fromEntries(new FormData(form));

  try {
    const res = await fetch("https://formsubmit.co/ajax/kishore@balvir.in", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        // ── FormSubmit config ──
        _subject: `New Enquiry — ${data.product || "Product"} (${data.name})`,
        _template: "table",   // clean table layout in email
        _captcha: "false",    // no captcha page

        // ── Form fields ──
        "Full Name": data.name,
        "Company": data.company || "—",
        "Phone / WhatsApp": data.phone,
        "Email": data.email || "—",
        "City": data.city,
        "Requirement Type": data.requirementType,
        "Product Category": data.category,
        "Product": data.product,
        "Quantity": data.quantity || "—",
        "Details": data.message || "—",
      }),
    });

    const json = await res.json();

    if (res.ok && json.success !== "false") {
      setSent(true);
    } else {
      alert("Something went wrong. Please try again or call us directly.");
    }
  } catch {
    alert("Network error. Please check your connection and try again.");
  } finally {
    setSubmitting(false);
  }
};

  const inputCls =
    "w-full rounded-lg border border-gray-200 bg-white px-4 py-2.5 text-sm text-gray-900 placeholder:text-gray-400 outline-none transition-colors focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--primary)]/15";
  const labelCls =
    "mb-1.5 block text-xs font-semibold uppercase tracking-wide text-gray-600";

  return createPortal(
    <div
      className="fixed inset-0 z-[999] flex items-center justify-center p-4 sm:p-6"
      data-lenis-prevent
      role="dialog"
      aria-modal="true"
      aria-label="Product Enquiry Form"
    >
      {/* Backdrop — blocks wheel/touch from reaching the page */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm overscroll-none touch-none"
        onClick={close}
        onWheel={(e) => e.preventDefault()}
      />

      {/* Card */}
      <div className="relative z-10 flex max-h-[90vh] w-full max-w-lg flex-col overflow-hidden rounded-2xl bg-white shadow-2xl">
        {/* Header */}
        <div className="relative shrink-0 bg-[var(--primary)] px-6 py-5">
          <h3 className="text-lg font-bold text-white">Get a Quote</h3>
          <p className="mt-0.5 text-xs text-white/80">
            Tell us your requirement — our team will share a quote and follow up.
          </p>
          <button
            type="button"
            onClick={close}
            aria-label="Close enquiry form"
            className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full bg-white/15 text-white transition-colors hover:bg-white/30"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        {/* Body */}
        {sent ? (
          <div className="flex flex-col items-center justify-center px-6 py-14 text-center">
            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[var(--primary)]/10 text-[var(--primary)]">
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 6L9 17l-5-5" />
              </svg>
            </div>
            <h4 className="text-lg font-bold text-gray-900">Enquiry sent</h4>
            <p className="mt-1.5 max-w-xs text-sm text-gray-500">
              Thank you. Our team will contact you within one working day with a quotation.
            </p>
            <button
              type="button"
              onClick={close}
              className="mt-6 rounded-lg bg-[var(--primary)] px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[var(--primary-dark)]"
            >
              Done
            </button>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="flex-1 min-h-0 overflow-y-auto overscroll-contain px-6 py-5"
          >
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {/* Name */}
              <div>
                <label htmlFor="enq-name" className={labelCls}>Full Name *</label>
                <input id="enq-name" name="name" required placeholder="Your name" className={inputCls} />
              </div>

              {/* Company */}
              <div>
                <label htmlFor="enq-company" className={labelCls}>Company Name</label>
                <input id="enq-company" name="company" placeholder="Company / Firm" className={inputCls} />
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="enq-phone" className={labelCls}>Phone / WhatsApp *</label>
                <input
                  id="enq-phone" name="phone" type="tel" required
                  inputMode="numeric" pattern="[0-9+\-\s]{10,15}"
                  placeholder="+91 98XXX XXXXX" className={inputCls}
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="enq-email" className={labelCls}>Email</label>
                <input id="enq-email" name="email" type="email" placeholder="you@company.com" className={inputCls} />
              </div>

              {/* City */}
              <div>
                <label htmlFor="enq-city" className={labelCls}>City / Location *</label>
                <input id="enq-city" name="city" required placeholder="e.g. Navi Mumbai" className={inputCls} />
              </div>

              {/* Requirement type */}
              <div>
                <label htmlFor="enq-type" className={labelCls}>Requirement Type *</label>
                <select id="enq-type" name="requirementType" required defaultValue="" className={inputCls}>
                  <option value="" disabled>Select requirement</option>
                  {REQUIREMENT_TYPES.map((t) => (
                    <option key={t} value={t}>{t}</option>
                  ))}
                </select>
              </div>

              {/* Category */}
              <div className="sm:col-span-2">
                <label htmlFor="enq-category" className={labelCls}>Product Category *</label>
                <select
                  id="enq-category" name="category" required value={category}
                  onChange={(e) => { setCategory(e.target.value); setProduct(""); }}
                  className={inputCls}
                >
                  <option value="" disabled>Select category</option>
                  {Object.keys(PRODUCT_MAP).map((c) => (
                    <option key={c} value={c}>{c}</option>
                  ))}
                </select>
              </div>

              {/* Product — dependent on category */}
              <div className="sm:col-span-2">
                <label htmlFor="enq-product" className={labelCls}>Product *</label>
                <select
                  id="enq-product" name="product" required value={product}
                  onChange={(e) => setProduct(e.target.value)}
                  disabled={!category}
                  className={`${inputCls} disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-400`}
                >
                  <option value="" disabled>
                    {category ? "Select product" : "Select a category first"}
                  </option>
                  {(PRODUCT_MAP[category] || []).map((p) => (
                    <option key={p} value={p}>{p}</option>
                  ))}
                </select>
              </div>

              {/* Quantity */}
              <div className="sm:col-span-2">
                <label htmlFor="enq-qty" className={labelCls}>Approximate Quantity</label>
                <select id="enq-qty" name="quantity" defaultValue="" className={inputCls}>
                  <option value="" disabled>Select quantity range</option>
                  {QUANTITY_OPTIONS.map((q) => (
                    <option key={q} value={q}>{q}</option>
                  ))}
                </select>
              </div>

              {/* Message */}
              <div className="sm:col-span-2">
                <label htmlFor="enq-msg" className={labelCls}>Requirement Details</label>
                <textarea
                  id="enq-msg" name="message" rows={3}
                  placeholder="Specifications, core size, dia, brand preference, site details…"
                  className={`${inputCls} resize-none`}
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={submitting}
              className="mt-5 flex w-full items-center justify-center gap-2 rounded-lg bg-[var(--primary)] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[var(--primary-dark)] disabled:opacity-60"
            >
              {submitting ? "Sending…" : "Submit Enquiry"}
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
              </svg>
            </button>

            <p className="mt-3 text-center text-[11px] text-gray-400">
              Your details are used only to respond to this enquiry.
            </p>
          </form>
        )}
      </div>
    </div>,
    document.body
  );
}
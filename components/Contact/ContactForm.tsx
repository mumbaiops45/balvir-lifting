"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const productOptions = [
  "Elevator Accessories",
  "Door Sensors / Light Curtains",
  "Auto Doors & Mechanisms",
  "ARD / UPS",
  "Elevator Drives",
  "Steel Wire Ropes",
  "Flat Travelling Cables",
  "LED Lighting",
  "Elevator Air Conditioning",
  "Industrial Automation",
  "Other",
];

type FormState = {
  name: string;
  company: string;
  phone: string;
  email: string;
  product: string;
  message: string;
};

export default function ContactForm() {
  const sectionRef = useRef<HTMLElement>(null);
  const formRef    = useRef<HTMLDivElement>(null);
  const infoRef    = useRef<HTMLDivElement>(null);

  const [form, setForm] = useState<FormState>({
    name: "", company: "", phone: "", email: "", product: "", message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(infoRef.current,
        { x: -50, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.9, ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 80%" } }
      );
      gsap.fromTo(formRef.current,
        { x: 50, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.9, ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 80%" } }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate form submission — wire up to your backend/email service
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1200);
  };

  const inputCls = "w-full border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors duration-200";

  return (
    <section ref={sectionRef} className="section-pad bg-gray-50 relative overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px bg-gray-200" />
      <div className="absolute -bottom-20 right-0 w-64 h-64 rounded-full bg-blue-100/40 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-5 gap-12 items-start">

          {/* Left info panel */}
          <div ref={infoRef} className="lg:col-span-2">
            <p className="text-blue-600 text-[11px] font-bold uppercase tracking-[0.3em] mb-5">
              Send Us a Message
            </p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight tracking-tight mb-7">
              Request a Quote or<br />
              <span className="text-blue-gradient">Product Enquiry</span>
            </h2>
            <p className="text-gray-500 text-sm leading-relaxed mb-10">
              Fill in the form and our sales team will get back to you within 24 hours with
              pricing, availability and technical details.
            </p>

            <div className="space-y-5">
              {[
                { title: "Quick Response", body: "Our team responds to all enquiries within 24 business hours." },
                { title: "Pan-India Delivery", body: "We maintain stock across key metros for fast delivery." },
                { title: "Competitive Pricing", body: "Best quality products at best prices — always." },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-blue-600 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-white text-xs font-bold">{String(i + 1).padStart(2, "0")}</span>
                  </div>
                  <div>
                    <p className="text-gray-900 font-semibold text-sm mb-1">{item.title}</p>
                    <p className="text-gray-500 text-sm">{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right form */}
          <div ref={formRef} className="lg:col-span-3">
            {submitted ? (
              <div className="border border-green-200 bg-green-50 p-10 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-5">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-gray-900 font-bold text-xl mb-2">Message Sent!</h3>
                <p className="text-gray-500 text-sm">
                  Thank you for reaching out. Our team will contact you within 24 business hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="border border-gray-100 bg-white p-8 space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold text-gray-500 uppercase tracking-widest mb-2">
                      Your Name <span className="text-blue-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="e.g. Ramesh Kumar"
                      className={inputCls}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-500 uppercase tracking-widest mb-2">
                      Company Name
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={form.company}
                      onChange={handleChange}
                      placeholder="Your company / firm"
                      className={inputCls}
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold text-gray-500 uppercase tracking-widest mb-2">
                      Phone Number <span className="text-blue-500">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+91 XXXXX XXXXX"
                      className={inputCls}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-500 uppercase tracking-widest mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      className={inputCls}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-500 uppercase tracking-widest mb-2">
                    Product of Interest
                  </label>
                  <select
                    name="product"
                    value={form.product}
                    onChange={handleChange}
                    className={inputCls}
                  >
                    <option value="">Select a product category</option>
                    {productOptions.map(opt => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-500 uppercase tracking-widest mb-2">
                    Your Message <span className="text-blue-500">*</span>
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Describe your requirement — quantity, specifications, timeline, delivery location..."
                    className={`${inputCls} resize-none`}
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full btn-red py-4 text-sm font-bold tracking-wide justify-center disabled:opacity-70"
                >
                  {loading ? (
                    <span className="flex items-center gap-2">
                      <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                      </svg>
                      Sending...
                    </span>
                  ) : "Send Enquiry"}
                </button>

                <p className="text-center text-gray-400 text-xs">
                  Or call us directly at{" "}
                  <a href="tel:+919819002726" className="text-blue-600 font-semibold hover:underline">
                    +91 98190 02726
                  </a>
                </p>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}

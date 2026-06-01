"use client";

import { useState, useEffect, useRef } from "react";

/* ── Client config ─────────────────────────── */
const CLIENT_WA = "919819002726";   // Country code + number, no +

/* ── 5-question flow ───────────────────────── */
const QUESTIONS = [
  { id: "name",    label: "What is your full name?",                    type: "text",   placeholder: "e.g. Rajiv Mehta" },
  { id: "phone",   label: "Your contact number?",                       type: "tel",    placeholder: "e.g. 98765 43210" },
  { id: "service", label: "Which service do you need?",                 type: "select",
    options: ["Passenger Elevator", "Home / Villa Lift", "Goods Lift", "Hydraulic Lift", "Escalator", "Modernisation", "Annual Maintenance"] },
  { id: "floors",  label: "How many floors does your building have?",   type: "text",   placeholder: "e.g. G + 10" },
  { id: "city",    label: "Which city are you located in?",             type: "text",   placeholder: "e.g. Mumbai" },
];

export default function WhatsAppButton() {
  const [open,       setOpen]       = useState(false);
  const [bubble,     setBubble]     = useState(false);
  const [step,       setStep]       = useState(0);          // 0 = greeting, 1-5 = questions, 6 = done
  const [answers,    setAnswers]    = useState<Record<string, string>>({});
  const [inputVal,   setInputVal]   = useState("");
  const inputRef = useRef<HTMLInputElement | HTMLSelectElement>(null);

  /* Attention bubble after 5 s */
  useEffect(() => {
    const t = setTimeout(() => setBubble(true), 5000);
    return () => clearTimeout(t);
  }, []);

  /* Auto-focus input when step changes */
  useEffect(() => {
    if (step >= 1 && step <= 5) {
      setTimeout(() => (inputRef.current as HTMLInputElement)?.focus(), 100);
    }
  }, [step]);

  /* Send answers to client WhatsApp */
  const sendToWhatsApp = (allAnswers: Record<string, string>) => {
    const lines = [
      "🔔 *New Lift Enquiry — Balvir Lifting Website*",
      "",
      `👤 *Name:*    ${allAnswers.name}`,
      `📞 *Phone:*   ${allAnswers.phone}`,
      `🏗️ *Service:* ${allAnswers.service}`,
      `🏢 *Floors:*  ${allAnswers.floors}`,
      `📍 *City:*    ${allAnswers.city}`,
      "",
      "_Sent via website chatbot_",
    ];
    const msg = encodeURIComponent(lines.join("\n"));
    window.open(`https://wa.me/${CLIENT_WA}?text=${msg}`, "_blank");
  };

  const handleSubmit = () => {
    if (!inputVal.trim()) return;
    const q    = QUESTIONS[step - 1];
    const next = { ...answers, [q.id]: inputVal.trim() };
    setAnswers(next);
    setInputVal("");

    if (step === 5) {
      setStep(6);
      sendToWhatsApp(next);
    } else {
      setStep(s => s + 1);
    }
  };

  const handleKey = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") handleSubmit();
  };

  const reset = () => { setStep(0); setAnswers({}); setInputVal(""); };

  const currentQ = step >= 1 && step <= 5 ? QUESTIONS[step - 1] : null;

  return (
    <>
      {/* ── Popup chat widget ──────────────────
          Positioned bottom-right, max-w-[320px], does NOT overlap hero
      ─────────────────────────────────────── */}
      {open && (
        <div className="fixed bottom-[88px] right-5 z-[60] w-[320px] bg-white rounded-2xl shadow-[0_8px_60px_rgba(0,0,0,0.25)] overflow-hidden font-jakarta border border-gray-100">

          {/* Header */}
          <div className="bg-[#075E54] px-4 py-3.5 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 bg-white/15 rounded-full flex items-center justify-center shrink-0">
                <WhatsAppIcon className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="text-white font-bold text-sm leading-tight">Balvir Lifting</div>
                <div className="flex items-center gap-1.5 mt-0.5">
                  <span className="w-1.5 h-1.5 bg-green-400 rounded-full" />
                  <span className="text-white/70 text-[11px]">Online · Replies instantly</span>
                </div>
              </div>
            </div>
            <button onClick={() => setOpen(false)}
              className="text-white/60 hover:text-white text-xl leading-none px-1">×</button>
          </div>

          {/* Chat area */}
          <div className="bg-[#ECE5DD] px-4 py-4 min-h-[160px] flex flex-col gap-3">

            {/* Greeting bubble */}
            <div className="bg-white rounded-2xl rounded-tl-sm px-4 py-3 shadow-sm max-w-[88%]">
              <p className="text-gray-800 text-sm leading-relaxed">
                {step === 0
                  ? "👋 Hi! I'll help you with a quick enquiry. May I ask you 5 short questions?"
                  : step === 6
                  ? "✅ Thank you! Your enquiry has been sent to our team. We'll call you within 2 hours."
                  : `Question ${step} of 5`}
              </p>
              {step >= 1 && step <= 5 && (
                <p className="text-gray-900 font-semibold text-sm mt-1">{currentQ?.label}</p>
              )}
              <div className="text-[10px] text-gray-400 text-right mt-1">Now</div>
            </div>

            {/* Answer bubbles (previous answers) */}
            {Object.entries(answers).map(([key, val]) => (
              <div key={key} className="flex justify-end">
                <div className="bg-[#DCF8C6] rounded-2xl rounded-tr-sm px-3 py-2 shadow-sm max-w-[80%]">
                  <p className="text-gray-800 text-sm">{val}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Input area */}
          <div className="bg-white px-3 py-3 border-t border-gray-100">
            {step === 0 && (
              <button onClick={() => setStep(1)}
                className="w-full bg-[#25D366] hover:bg-[#22c55e] text-white font-semibold py-3 rounded-full text-sm flex items-center justify-center gap-2 transition-colors">
                <WhatsAppIcon className="w-4 h-4" />
                Start Enquiry
              </button>
            )}

            {step >= 1 && step <= 5 && (
              <div className="flex gap-2">
                {currentQ?.type === "select" ? (
                  <select
                    ref={inputRef as React.Ref<HTMLSelectElement>}
                    value={inputVal}
                    onChange={e => setInputVal(e.target.value)}
                    className="flex-1 border border-gray-200 rounded-full px-4 py-2.5 text-sm text-gray-800 outline-none focus:border-[#25D366] bg-gray-50"
                  >
                    <option value="">Select service…</option>
                    {currentQ.options?.map(o => (
                      <option key={o} value={o}>{o}</option>
                    ))}
                  </select>
                ) : (
                  <input
                    ref={inputRef as React.Ref<HTMLInputElement>}
                    type={currentQ?.type ?? "text"}
                    value={inputVal}
                    onChange={e => setInputVal(e.target.value)}
                    onKeyDown={handleKey}
                    placeholder={currentQ?.placeholder}
                    className="flex-1 border border-gray-200 rounded-full px-4 py-2.5 text-sm text-gray-800 outline-none focus:border-[#25D366] bg-gray-50"
                  />
                )}
                <button onClick={handleSubmit}
                  disabled={!inputVal.trim()}
                  className="w-10 h-10 bg-[#25D366] hover:bg-[#22c55e] disabled:bg-gray-200 rounded-full flex items-center justify-center shrink-0 transition-colors">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </button>
              </div>
            )}

            {step === 6 && (
              <div className="flex gap-2">
                <button onClick={() => { reset(); setOpen(false); }}
                  className="flex-1 border border-gray-200 text-gray-600 text-sm py-2.5 rounded-full hover:bg-gray-50 transition-colors">
                  Close
                </button>
                <button onClick={reset}
                  className="flex-1 bg-[#25D366] text-white text-sm py-2.5 rounded-full font-semibold hover:bg-[#22c55e] transition-colors">
                  New Enquiry
                </button>
              </div>
            )}

            {/* Step progress */}
            {step >= 1 && step <= 5 && (
              <div className="flex gap-1 justify-center mt-2.5">
                {QUESTIONS.map((_, i) => (
                  <div key={i} className={`h-0.5 flex-1 rounded-full transition-colors duration-300 ${i < step ? "bg-[#25D366]" : "bg-gray-200"}`} />
                ))}
              </div>
            )}
          </div>
        </div>
      )}

      {/* Attention bubble */}
      {bubble && !open && (
        <div className="fixed bottom-[88px] right-5 z-[60] bg-white text-gray-700 text-xs font-semibold px-4 py-2.5 rounded-full shadow-lg border border-gray-100 whitespace-nowrap font-jakarta flex items-center gap-2">
          <span>💬</span> Chat with us — Quick enquiry!
          <button onClick={() => setBubble(false)} className="text-gray-400 hover:text-gray-600 ml-1">×</button>
        </div>
      )}

      {/* FAB */}
      <button
        onClick={() => { setOpen(o => !o); setBubble(false); }}
        className="fixed bottom-5 right-5 z-[60] w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-[0_4px_30px_rgba(37,211,102,0.5)] hover:scale-110 hover:shadow-[0_4px_40px_rgba(37,211,102,0.7)] transition-all duration-300"
        aria-label="Chat on WhatsApp"
      >
        <WhatsAppIcon className="w-7 h-7 text-white" />
        {!open && <span className="absolute w-full h-full rounded-full bg-[#25D366] animate-ping opacity-25" />}
      </button>
    </>
  );
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

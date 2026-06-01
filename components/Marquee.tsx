"use client";

const items = [
  "Passenger Lifts",
  "Goods Elevators",
  "Home Lifts",
  "Hydraulic Lifts",
  "Car Parking Lifts",
  "Escalators",
  "Dumbwaiters",
  "Modernisation",
  "Annual Maintenance",
  "24/7 Breakdown Support",
];

export default function Marquee() {
  const doubled = [...items, ...items];

  return (
    <div className="relative bg-red-600 overflow-hidden py-4 font-jakarta select-none">
      {/* Left/right fade */}
      <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-red-600 to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-red-600 to-transparent z-10" />

      <div className="flex animate-marquee whitespace-nowrap">
        {doubled.map((item, i) => (
          <span key={i} className="flex items-center gap-3 mx-6 text-white font-semibold text-sm tracking-widest uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-white/60 shrink-0" />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

"use client";

const items = [
  // Elevator & Escalator Accessories
  { label: "IR Door Sensors",         tag: "Elevator Accessories" },
  { label: "Auto Doors & Mechanisms", tag: "Elevator Accessories" },
  { label: "Manual Landing Doors",    tag: "Elevator Accessories" },
  { label: "ARD / UPS Systems",       tag: "Elevator Accessories" },
  { label: "VFD Elevator Drives",     tag: "Elevator Accessories" },
  { label: "LOP / COP Panels",        tag: "Elevator Accessories" },
  { label: "Wireless CCTV",           tag: "Elevator Accessories" },
  { label: "Door Closers & Springs",  tag: "Elevator Accessories" },
  { label: "Overload Sensors",        tag: "Elevator Accessories" },
  { label: "Limit Switches",          tag: "Elevator Accessories" },
  { label: "Cable Hangers",           tag: "Elevator Accessories" },
  { label: "Maintenance Boxes",       tag: "Elevator Accessories" },

  // Steel Wire Ropes
  { label: "Elevator Wire Ropes",     tag: "Steel Wire Ropes" },
  { label: "Offshore Ropes",          tag: "Steel Wire Ropes" },
  { label: "Crane & Hoist Ropes",     tag: "Steel Wire Ropes" },
  { label: "KISWIRE — Korea",         tag: "Steel Wire Ropes" },

  // LED & AC
  { label: "LED Cabin Lights",        tag: "LED & AC" },
  { label: "Cabin Fans 300 mm",       tag: "LED & AC" },
  { label: "Blower Fans 330×45 mm",   tag: "LED & AC" },
  { label: "Elevator AC System",      tag: "LED & AC" },

  // Cables & Wires
  { label: "Flat Travelling Cables",  tag: "Cables & Wires" },
  { label: "Wire Bundles",            tag: "Cables & Wires" },
  { label: "Display Cable Bundles",   tag: "Cables & Wires" },
  { label: "Shielded Multi-Core",     tag: "Cables & Wires" },

  // Automation
  { label: "P&F Sensors",            tag: "Automation" },
  { label: "Control Systems",        tag: "Automation" },
  { label: "Analytical Instruments", tag: "Automation" },
  { label: "Process Equipment",      tag: "Automation" },
];

// One accent colour per tag — all from the red/neutral palette, no blue
const tagColor: Record<string, string> = {
  "Elevator Accessories": "var(--primary)",        // #b13124
  "Steel Wire Ropes":     "var(--primary-dark)",   // #8d241b
  "LED & AC":             "var(--primary-light)",  // #da2929
  "Cables & Wires":       "var(--primary)",
  "Automation":           "var(--primary-dark)",
};

const doubled = [...items, ...items];

export default function Marquee() {
  return (
    <div
      className="relative overflow-hidden py-3.5 select-none"
      style={{ backgroundColor: "#07192E" }}
    >
      {/* Left / right fade */}
      <div
        className="absolute left-0 top-0 bottom-0 w-20 z-10 pointer-events-none"
        style={{ background: "linear-gradient(to right, #07192E, transparent)" }}
      />
      <div
        className="absolute right-0 top-0 bottom-0 w-20 z-10 pointer-events-none"
        style={{ background: "linear-gradient(to left, #07192E, transparent)" }}
      />

      {/* Top / bottom hairlines */}
      <div className="absolute top-0 inset-x-0 h-px bg-white/8" />
      <div className="absolute bottom-0 inset-x-0 h-px bg-white/8" />

      <div className="flex animate-marquee whitespace-nowrap">
        {doubled.map((item, i) => {
          const accent = tagColor[item.tag] ?? "var(--primary)";
          return (
            <span
              key={i}
              className="inline-flex items-center gap-2.5 mx-5"
            >
              {/* Coloured dot */}
              <span
                className="w-1.5 h-1.5 rounded-full shrink-0"
                style={{ backgroundColor: accent }}
              />

              {/* Product label */}
              <span
                className="text-white font-semibold text-[11px] tracking-[0.18em] uppercase"
              >
                {item.label}
              </span>

              {/* Category tag pill */}
              <span
                className="text-[9px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-sm"
                style={{
                  color: accent,
                  backgroundColor: `color-mix(in srgb, ${accent} 12%, transparent)`,
                  border: `1px solid color-mix(in srgb, ${accent} 25%, transparent)`,
                }}
              >
                {item.tag}
              </span>
            </span>
          );
        })}
      </div>
    </div>
  );
}
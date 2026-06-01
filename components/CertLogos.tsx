/* ── Faithful SVG recreations of actual certification marks ── */

export function ISOLogo() {
  return (
    <svg viewBox="0 0 120 70" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect width="120" height="70" fill="#003087" rx="3" />
      {/* ISO wordmark */}
      <text x="60" y="32" textAnchor="middle" fill="white" fontFamily="Arial Black, Arial" fontWeight="900" fontSize="26" letterSpacing="-1">ISO</text>
      <text x="60" y="48" textAnchor="middle" fill="#FFD700" fontFamily="Arial, sans-serif" fontWeight="700" fontSize="11" letterSpacing="1">9001 : 2015</text>
      <text x="60" y="62" textAnchor="middle" fill="white" fontFamily="Arial, sans-serif" fontWeight="400" fontSize="7.5" letterSpacing="2">CERTIFIED</text>
    </svg>
  );
}

export function BISLogo() {
  return (
    <svg viewBox="0 0 120 70" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect width="120" height="70" fill="#ffffff" rx="3" />
      <rect width="120" height="70" rx="3" stroke="#E63012" strokeWidth="2.5" />
      {/* Ashoka Chakra style ring */}
      <circle cx="30" cy="35" r="22" stroke="#E63012" strokeWidth="2" fill="none" />
      <circle cx="30" cy="35" r="15" stroke="#E63012" strokeWidth="1" fill="none" />
      {/* Spokes */}
      {Array.from({ length: 24 }).map((_, i) => {
        const angle = (i * 15 * Math.PI) / 180;
        const x1 = 30 + 15 * Math.cos(angle);
        const y1 = 35 + 15 * Math.sin(angle);
        const x2 = 30 + 21 * Math.cos(angle);
        const y2 = 35 + 21 * Math.sin(angle);
        return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#E63012" strokeWidth="0.8" />;
      })}
      <text x="30" y="39" textAnchor="middle" fill="#E63012" fontFamily="Arial Black, Arial" fontWeight="900" fontSize="12">ISI</text>
      {/* BIS text */}
      <text x="76" y="28" textAnchor="middle" fill="#E63012" fontFamily="Arial Black, Arial" fontWeight="900" fontSize="20">BIS</text>
      <text x="76" y="42" textAnchor="middle" fill="#333" fontFamily="Arial, sans-serif" fontWeight="600" fontSize="7">Bureau of Indian</text>
      <text x="76" y="52" textAnchor="middle" fill="#333" fontFamily="Arial, sans-serif" fontWeight="600" fontSize="7">Standards</text>
      <text x="76" y="63" textAnchor="middle" fill="#E63012" fontFamily="Arial, sans-serif" fontWeight="700" fontSize="7.5" letterSpacing="1">CERTIFIED</text>
    </svg>
  );
}

export function EN81Logo() {
  return (
    <svg viewBox="0 0 120 70" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect width="120" height="70" fill="#003399" rx="3" />
      {/* EU stars ring */}
      {Array.from({ length: 12 }).map((_, i) => {
        const angle = (i * 30 - 90) * (Math.PI / 180);
        const cx = 30 + 18 * Math.cos(angle);
        const cy = 35 + 18 * Math.sin(angle);
        return (
          <polygon key={i}
            points={`${cx},${cy - 4} ${cx + 1.5},${cy - 1.5} ${cx + 4},${cy - 1.5} ${cx + 2},${cy + 1} ${cx + 2.5},${cy + 4} ${cx},${cy + 2} ${cx - 2.5},${cy + 4} ${cx - 2},${cy + 1} ${cx - 4},${cy - 1.5} ${cx - 1.5},${cy - 1.5}`}
            fill="#FFD700" />
        );
      })}
      {/* EN text */}
      <text x="80" y="30" textAnchor="middle" fill="white" fontFamily="Arial Black, Arial" fontWeight="900" fontSize="22" letterSpacing="-1">EN</text>
      <text x="80" y="48" textAnchor="middle" fill="#FFD700" fontFamily="Arial, sans-serif" fontWeight="700" fontSize="14" letterSpacing="1">81</text>
      <text x="80" y="62" textAnchor="middle" fill="white" fontFamily="Arial, sans-serif" fontWeight="400" fontSize="7" letterSpacing="1.5">CERTIFIED</text>
    </svg>
  );
}

export function IS14665Logo() {
  return (
    <svg viewBox="0 0 120 70" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect width="120" height="70" fill="#FF6B00" rx="3" />
      {/* Indian flag tri-color bar */}
      <rect x="0" y="0" width="120" height="7" fill="#FF9933" rx="3" />
      <rect x="0" y="63" width="120" height="7" fill="#138808" rx="3" />
      {/* IS text */}
      <text x="60" y="30" textAnchor="middle" fill="white" fontFamily="Arial Black, Arial" fontWeight="900" fontSize="22" letterSpacing="2">IS</text>
      <text x="60" y="46" textAnchor="middle" fill="white" fontFamily="Arial, sans-serif" fontWeight="700" fontSize="13" letterSpacing="1">14665</text>
      <text x="60" y="59" textAnchor="middle" fill="rgba(255,255,255,0.85)" fontFamily="Arial, sans-serif" fontSize="7" letterSpacing="1">LIFT STANDARD</text>
    </svg>
  );
}

export function OHSASLogo() {
  return (
    <svg viewBox="0 0 120 70" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect width="120" height="70" fill="#2D7D32" rx="3" />
      {/* Safety shield */}
      <path d="M22 12 L38 12 L38 38 C38 44 30 50 30 50 C30 50 22 44 22 38 Z" fill="white" fillOpacity="0.15" stroke="white" strokeWidth="1.5" />
      <path d="M25 26 L28 29 L35 21" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      {/* OHSAS text */}
      <text x="75" y="26" textAnchor="middle" fill="white" fontFamily="Arial Black, Arial" fontWeight="900" fontSize="13" letterSpacing="-0.5">OHSAS</text>
      <text x="75" y="42" textAnchor="middle" fill="#A5D6A7" fontFamily="Arial, sans-serif" fontWeight="700" fontSize="14" letterSpacing="1">18001</text>
      <text x="75" y="57" textAnchor="middle" fill="rgba(255,255,255,0.75)" fontFamily="Arial, sans-serif" fontSize="7" letterSpacing="1">HEALTH &amp; SAFETY</text>
    </svg>
  );
}

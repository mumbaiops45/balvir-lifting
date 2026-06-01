/**
 * LogoImage — renders the Balvir Lifting brand mark.
 *
 * variant="light"  → for white/light backgrounds  (red diamond, dark text)
 * variant="dark"   → for dark/black backgrounds    (white diamond, red bars, white text)
 *
 * To use your actual PNG logo:
 *   Place the file at  public/logo-light.png  (for light backgrounds)
 *                  or  public/logo-dark.png   (for dark backgrounds)
 * The component will auto-use it; the SVG is the fallback.
 */

"use client";
import { useState } from "react";

interface LogoImageProps {
  height?: number;
  variant?: "light" | "dark";
}

export default function LogoImage({ height = 44, variant = "dark" }: LogoImageProps) {
  const src = variant === "light" ? "/logo-light.png" : "/logo-dark.png";
  const [failed, setFailed] = useState(false);

  return failed ? (
    <LogoSVG height={height} variant={variant} />
  ) : (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt="Balvir Lifting"
      height={height}
      style={{ height, width: "auto", objectFit: "contain" }}
      onError={() => setFailed(true)}
    />
  );
}

/* ── SVG recreation of the uploaded diamond + bars logo ── */
export function LogoSVG({ height = 44, variant = "dark" }: LogoImageProps) {
  const isLight = variant === "light";

  // Light bg: red diamond + white bars + dark text
  // Dark bg:  white diamond + red bars + white text
  const diamondFill = isLight ? "#CC1020" : "#FFFFFF";
  const barFill     = isLight ? "#FFFFFF" : "#CC1020";
  const textColor   = isLight ? "#111111" : "#FFFFFF";
  const subColor    = isLight ? "#666666" : "rgba(255,255,255,0.65)";

  return (
    <div
      className="flex items-center gap-3"
      style={{ fontFamily: "var(--font-plus-jakarta)" }}
    >
      <svg
        width={height}
        height={height}
        viewBox="0 0 80 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Diamond (rotated square) */}
        <rect
          x="10" y="10"
          width="60" height="60"
          rx="4"
          fill={diamondFill}
          transform="rotate(45 40 40)"
        />
        {/* Three rising bars — matches uploaded logo */}
        <rect x="24" y="38" width="8" height="19" rx="1.5" fill={barFill} />
        <rect x="36" y="29" width="8" height="28" rx="1.5" fill={barFill} />
        <rect x="48" y="34" width="8" height="23" rx="1.5" fill={barFill} />
      </svg>

      <div className="flex flex-col leading-none">
        <span style={{ fontSize: height * 0.41, fontWeight: 800, letterSpacing: "0.08em", color: textColor }}>
          BALVIR
        </span>
        <span style={{ fontSize: height * 0.29, fontWeight: 600, letterSpacing: "0.18em", color: subColor }}>
          LIFTING
        </span>
      </div>
    </div>
  );
}

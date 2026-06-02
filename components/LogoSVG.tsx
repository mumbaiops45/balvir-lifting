interface LogoSVGProps {
  size?: number;
  showText?: boolean;
  inverted?: boolean;
}

export default function LogoSVG({ size = 40, showText = true, inverted = false }: LogoSVGProps) {
  const markColor   = inverted ? "#0F3460" : "#ffffff";
  const barColor    = inverted ? "#ffffff" : "#0F3460";
  const textColor   = inverted ? "#080808" : "#ffffff";

  return (
    <div className="flex items-center gap-3">
      {/* Diamond mark */}
      <svg
        width={size}
        height={size}
        viewBox="0 0 80 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Rotated square (diamond) */}
        <rect
          x="11"
          y="11"
          width="58"
          height="58"
          rx="4"
          fill={markColor}
          transform="rotate(45 40 40)"
        />
        {/* Three vertical bars — rising left to right */}
        <rect x="27" y="35" width="7" height="22" rx="1.5" fill={barColor} />
        <rect x="36.5" y="28" width="7" height="29" rx="1.5" fill={barColor} />
        <rect x="46" y="37" width="7" height="20" rx="1.5" fill={barColor} />
      </svg>

      {showText && (
        <div
          className="flex flex-col leading-none"
          style={{ color: textColor, fontFamily: "var(--font-plus-jakarta)" }}
        >
          <span
            style={{
              fontSize: size * 0.42,
              fontWeight: 800,
              letterSpacing: "0.08em",
            }}
          >
            BALVIR
          </span>
          <span
            style={{
              fontSize: size * 0.3,
              fontWeight: 600,
              letterSpacing: "0.18em",
              opacity: 0.75,
            }}
          >
            LIFTING
          </span>
        </div>
      )}
    </div>
  );
}

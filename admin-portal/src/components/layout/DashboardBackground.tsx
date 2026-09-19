/**
 * Premium architectural glass backdrop for the Admin Portal.
 * Oversized pale-blue / white semicircles behind existing UI.
 * Decorative only — pointer-events: none.
 */
export function DashboardBackground() {
  return (
    <div className="dashboard-bg-layer" aria-hidden>
      <svg
        className="dashboard-bg-svg"
        viewBox="0 0 1440 1024"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="ascentiaGlassBase" x1="20%" y1="0%" x2="80%" y2="100%">
            <stop offset="0%" stopColor="#F8FBFF" />
            <stop offset="48%" stopColor="#F1F7FF" />
            <stop offset="100%" stopColor="#EAF3FF" />
          </linearGradient>

          {/* Ascentia brand blue #00AEEF at low opacity */}
          <radialGradient id="ascentiaTopLeft" cx="12%" cy="8%" r="42%">
            <stop offset="0%" stopColor="rgba(0, 174, 239, 0.07)" />
            <stop offset="100%" stopColor="rgba(0, 174, 239, 0)" />
          </radialGradient>

          <radialGradient id="ascentiaLeftWave" cx="0%" cy="78%" r="56%">
            <stop offset="0%" stopColor="rgba(0, 174, 239, 0.14)" />
            <stop offset="40%" stopColor="rgba(116, 171, 255, 0.1)" />
            <stop offset="100%" stopColor="rgba(116, 171, 255, 0)" />
          </radialGradient>

          <radialGradient id="ascentiaUpperRight" cx="96%" cy="0%" r="54%">
            <stop offset="0%" stopColor="rgba(0, 174, 239, 0.13)" />
            <stop offset="42%" stopColor="rgba(151, 196, 255, 0.09)" />
            <stop offset="100%" stopColor="rgba(151, 196, 255, 0)" />
          </radialGradient>

          <radialGradient id="ascentiaRightSweep" cx="108%" cy="50%" r="50%">
            <stop offset="0%" stopColor="rgba(241, 247, 255, 0.95)" />
            <stop offset="35%" stopColor="rgba(0, 174, 239, 0.09)" />
            <stop offset="100%" stopColor="rgba(0, 174, 239, 0)" />
          </radialGradient>

          <radialGradient id="ascentiaLowerRight" cx="88%" cy="108%" r="52%">
            <stop offset="0%" stopColor="rgba(255, 255, 255, 0.85)" />
            <stop offset="38%" stopColor="rgba(234, 243, 255, 0.5)" />
            <stop offset="100%" stopColor="rgba(234, 243, 255, 0)" />
          </radialGradient>

          <radialGradient id="ascentiaBottom" cx="40%" cy="112%" r="58%">
            <stop offset="0%" stopColor="rgba(0, 174, 239, 0.08)" />
            <stop offset="50%" stopColor="rgba(151, 196, 255, 0.07)" />
            <stop offset="100%" stopColor="rgba(151, 196, 255, 0)" />
          </radialGradient>

          <radialGradient id="ascentiaCenterGlass" cx="48%" cy="42%" r="44%">
            <stop offset="0%" stopColor="rgba(255, 255, 255, 0.72)" />
            <stop offset="55%" stopColor="rgba(255, 255, 255, 0.22)" />
            <stop offset="100%" stopColor="rgba(255, 255, 255, 0)" />
          </radialGradient>

          <filter id="ascentiaBlur" x="-25%" y="-25%" width="150%" height="150%">
            <feGaussianBlur stdDeviation="36" />
          </filter>
          <filter id="ascentiaBlurSoft" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="50" />
          </filter>
        </defs>

        <rect width="1440" height="1024" fill="url(#ascentiaGlassBase)" />
        <ellipse
          cx="180"
          cy="80"
          rx="520"
          ry="360"
          fill="url(#ascentiaTopLeft)"
          filter="url(#ascentiaBlurSoft)"
        />
        <ellipse
          cx="700"
          cy="420"
          rx="700"
          ry="420"
          fill="url(#ascentiaCenterGlass)"
          filter="url(#ascentiaBlurSoft)"
        />

        {/* Left / lower-left semicircular wave */}
        <ellipse
          cx="-60"
          cy="880"
          rx="840"
          ry="600"
          fill="url(#ascentiaLeftWave)"
          filter="url(#ascentiaBlur)"
        />

        {/* Bottom atmospheric continuation */}
        <ellipse
          cx="540"
          cy="1200"
          rx="920"
          ry="480"
          fill="url(#ascentiaBottom)"
          filter="url(#ascentiaBlurSoft)"
        />

        {/* Upper-right huge elliptical arc */}
        <ellipse
          cx="1580"
          cy="-80"
          rx="900"
          ry="720"
          fill="url(#ascentiaUpperRight)"
          filter="url(#ascentiaBlur)"
        />

        {/* Right inward sweep */}
        <ellipse
          cx="1600"
          cy="540"
          rx="740"
          ry="560"
          fill="url(#ascentiaRightSweep)"
          filter="url(#ascentiaBlur)"
        />

        {/* Lower-right white glass curve */}
        <ellipse
          cx="1320"
          cy="1140"
          rx="780"
          ry="560"
          fill="url(#ascentiaLowerRight)"
          filter="url(#ascentiaBlurSoft)"
        />

        {/* Soft white highlight bands */}
        <path
          d="M 820 -120 C 1100 20, 1320 190, 1620 300"
          fill="none"
          stroke="rgba(255,255,255,0.58)"
          strokeWidth="140"
          strokeLinecap="round"
          filter="url(#ascentiaBlur)"
          opacity="0.62"
        />
        <path
          d="M -140 500 C 180 410, 400 590, 680 740"
          fill="none"
          stroke="rgba(255,255,255,0.48)"
          strokeWidth="110"
          strokeLinecap="round"
          filter="url(#ascentiaBlurSoft)"
          opacity="0.5"
        />
      </svg>
    </div>
  );
}

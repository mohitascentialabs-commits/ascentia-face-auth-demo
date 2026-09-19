/**
 * Decorative light glass backdrop — white / pale Ascentia blue curves.
 * Non-interactive; sits behind all dashboard UI.
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
          <linearGradient id="glass-bg-base" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#F8FAFC" />
            <stop offset="45%" stopColor="#F7FAFF" />
            <stop offset="100%" stopColor="#EEF5FF" />
          </linearGradient>

          <radialGradient id="glass-bg-tr" cx="92%" cy="6%" r="55%">
            <stop offset="0%" stopColor="rgba(0, 174, 239, 0.14)" />
            <stop offset="50%" stopColor="rgba(0, 174, 239, 0.06)" />
            <stop offset="100%" stopColor="rgba(0, 174, 239, 0)" />
          </radialGradient>

          <radialGradient id="glass-bg-right" cx="100%" cy="52%" r="50%">
            <stop offset="0%" stopColor="rgba(230, 241, 255, 0.95)" />
            <stop offset="40%" stopColor="rgba(0, 174, 239, 0.08)" />
            <stop offset="100%" stopColor="rgba(0, 174, 239, 0)" />
          </radialGradient>

          <radialGradient id="glass-bg-br" cx="86%" cy="100%" r="48%">
            <stop offset="0%" stopColor="rgba(255, 255, 255, 0.92)" />
            <stop offset="45%" stopColor="rgba(239, 246, 255, 0.5)" />
            <stop offset="100%" stopColor="rgba(239, 246, 255, 0)" />
          </radialGradient>

          <radialGradient id="glass-bg-left" cx="0%" cy="70%" r="54%">
            <stop offset="0%" stopColor="rgba(0, 174, 239, 0.11)" />
            <stop offset="55%" stopColor="rgba(0, 174, 239, 0.05)" />
            <stop offset="100%" stopColor="rgba(0, 174, 239, 0)" />
          </radialGradient>

          <radialGradient id="glass-bg-bl" cx="20%" cy="100%" r="44%">
            <stop offset="0%" stopColor="rgba(0, 174, 239, 0.08)" />
            <stop offset="55%" stopColor="rgba(230, 241, 255, 0.4)" />
            <stop offset="100%" stopColor="rgba(230, 241, 255, 0)" />
          </radialGradient>

          <radialGradient id="glass-bg-center" cx="48%" cy="40%" r="40%">
            <stop offset="0%" stopColor="rgba(255, 255, 255, 0.8)" />
            <stop offset="100%" stopColor="rgba(255, 255, 255, 0)" />
          </radialGradient>

          <filter id="glass-blur" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="34" />
          </filter>
          <filter id="glass-blur-soft" x="-25%" y="-25%" width="150%" height="150%">
            <feGaussianBlur stdDeviation="46" />
          </filter>
        </defs>

        <rect width="1440" height="1024" fill="url(#glass-bg-base)" />

        <ellipse
          cx="700"
          cy="400"
          rx="620"
          ry="360"
          fill="url(#glass-bg-center)"
          filter="url(#glass-blur-soft)"
        />
        <ellipse
          cx="1500"
          cy="-20"
          rx="800"
          ry="620"
          fill="url(#glass-bg-tr)"
          filter="url(#glass-blur)"
        />
        <ellipse
          cx="1540"
          cy="540"
          rx="680"
          ry="500"
          fill="url(#glass-bg-right)"
          filter="url(#glass-blur)"
        />
        <ellipse
          cx="1260"
          cy="1080"
          rx="700"
          ry="500"
          fill="url(#glass-bg-br)"
          filter="url(#glass-blur-soft)"
        />
        <ellipse
          cx="-100"
          cy="760"
          rx="760"
          ry="540"
          fill="url(#glass-bg-left)"
          filter="url(#glass-blur)"
        />
        <ellipse
          cx="240"
          cy="1120"
          rx="660"
          ry="400"
          fill="url(#glass-bg-bl)"
          filter="url(#glass-blur-soft)"
        />
        <path
          d="M 880 -60 C 1100 60, 1280 200, 1540 300"
          fill="none"
          stroke="rgba(255,255,255,0.55)"
          strokeWidth="110"
          strokeLinecap="round"
          filter="url(#glass-blur)"
          opacity="0.65"
        />
        <path
          d="M -80 500 C 180 440, 360 590, 580 710"
          fill="none"
          stroke="rgba(255,255,255,0.42)"
          strokeWidth="88"
          strokeLinecap="round"
          filter="url(#glass-blur-soft)"
          opacity="0.5"
        />
      </svg>
    </div>
  );
}

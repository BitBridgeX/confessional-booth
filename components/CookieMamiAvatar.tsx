interface CookieMamiAvatarProps {
  size?: number;
  className?: string;
  animated?: boolean;
}

export default function CookieMamiAvatar({ size = 200, className = "", animated = true }: CookieMamiAvatarProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <radialGradient id="skinGrad" cx="50%" cy="40%" r="60%">
          <stop offset="0%" stopColor="#8B4513" />
          <stop offset="100%" stopColor="#5C2D0A" />
        </radialGradient>
        <radialGradient id="glowGrad" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FF1493" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#FF1493" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="cookieGrad" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#D4A017" />
          <stop offset="100%" stopColor="#8B6914" />
        </radialGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="3" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <linearGradient id="hairGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1a0a1e" />
          <stop offset="100%" stopColor="#2D1B4E" />
        </linearGradient>
        <linearGradient id="lipGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FF1493" />
          <stop offset="100%" stopColor="#C71168" />
        </linearGradient>
        <linearGradient id="haloGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#D4AF37" />
          <stop offset="50%" stopColor="#F0D68A" />
          <stop offset="100%" stopColor="#D4AF37" />
        </linearGradient>
      </defs>

      {/* Background glow */}
      <circle cx="100" cy="110" r="80" fill="url(#glowGrad)" />

      {/* Halo */}
      <ellipse cx="100" cy="48" rx="38" ry="7" fill="none" stroke="url(#haloGrad)" strokeWidth="5" opacity="0.9" filter="url(#glow)">
        {animated && (
          <animateTransform attributeName="transform" type="rotate" from="-5 100 48" to="5 100 48" dur="3s" repeatCount="indefinite" additive="sum" />
        )}
      </ellipse>

      {/* Hair back */}
      <ellipse cx="100" cy="95" rx="52" ry="58" fill="url(#hairGrad)" />

      {/* Long hair sides */}
      <path d="M 52 95 Q 38 130 42 165 Q 48 170 52 160 Q 54 135 58 115 Z" fill="url(#hairGrad)" />
      <path d="M 148 95 Q 162 130 158 165 Q 152 170 148 160 Q 146 135 142 115 Z" fill="url(#hairGrad)" />

      {/* Face */}
      <ellipse cx="100" cy="105" rx="44" ry="50" fill="url(#skinGrad)" />

      {/* Blush cheeks */}
      <ellipse cx="72" cy="115" rx="12" ry="7" fill="#FF1493" opacity="0.25" />
      <ellipse cx="128" cy="115" rx="12" ry="7" fill="#FF1493" opacity="0.25" />

      {/* Eyes */}
      {/* Left eye */}
      <ellipse cx="83" cy="100" rx="10" ry="11" fill="#1a0a1e" />
      <ellipse cx="83" cy="100" rx="6" ry="7" fill="#2D1B4E" />
      <circle cx="83" cy="100" r="4" fill="#FF1493" />
      <circle cx="83" cy="100" r="2.5" fill="#0D0610" />
      <circle cx="86" cy="97" r="1.5" fill="white" opacity="0.9" />
      {/* Left lashes */}
      <line x1="73" y1="93" x2="71" y2="88" stroke="#1a0a1e" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="78" y1="90" x2="77" y2="85" stroke="#1a0a1e" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="83" y1="89" x2="83" y2="84" stroke="#1a0a1e" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="88" y1="90" x2="90" y2="85" stroke="#1a0a1e" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="93" y1="93" x2="95" y2="88" stroke="#1a0a1e" strokeWidth="1.5" strokeLinecap="round" />

      {/* Right eye */}
      <ellipse cx="117" cy="100" rx="10" ry="11" fill="#1a0a1e" />
      <ellipse cx="117" cy="100" rx="6" ry="7" fill="#2D1B4E" />
      <circle cx="117" cy="100" r="4" fill="#FF1493" />
      <circle cx="117" cy="100" r="2.5" fill="#0D0610" />
      <circle cx="120" cy="97" r="1.5" fill="white" opacity="0.9" />
      {/* Right lashes */}
      <line x1="107" y1="93" x2="105" y2="88" stroke="#1a0a1e" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="112" y1="90" x2="111" y2="85" stroke="#1a0a1e" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="117" y1="89" x2="117" y2="84" stroke="#1a0a1e" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="122" y1="90" x2="124" y2="85" stroke="#1a0a1e" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="127" y1="93" x2="129" y2="88" stroke="#1a0a1e" strokeWidth="1.5" strokeLinecap="round" />

      {/* Nose */}
      <path d="M 98 108 Q 100 115 102 108" stroke="#4a2010" strokeWidth="1.5" fill="none" strokeLinecap="round" />

      {/* Lips */}
      <path d="M 88 125 Q 100 132 112 125 Q 106 120 100 121 Q 94 120 88 125 Z" fill="url(#lipGrad)" />
      <path d="M 88 125 Q 100 130 112 125" stroke="#C71168" strokeWidth="1" fill="none" />
      <path d="M 92 124 Q 100 121 108 124" stroke="#FF6EC7" strokeWidth="0.8" fill="none" opacity="0.6" />

      {/* Hair front bangs */}
      <path d="M 56 80 Q 65 60 80 70 Q 75 82 68 88 Z" fill="url(#hairGrad)" />
      <path d="M 144 80 Q 135 60 120 70 Q 125 82 132 88 Z" fill="url(#hairGrad)" />
      <path d="M 80 70 Q 92 55 100 65 Q 100 75 92 78 Z" fill="url(#hairGrad)" />
      <path d="M 120 70 Q 108 55 100 65 Q 100 75 108 78 Z" fill="url(#hairGrad)" />

      {/* Hair highlights */}
      <path d="M 70 72 Q 80 62 90 68" stroke="#6B21A8" strokeWidth="2" fill="none" opacity="0.5" strokeLinecap="round" />
      <path d="M 130 72 Q 120 62 110 68" stroke="#6B21A8" strokeWidth="2" fill="none" opacity="0.5" strokeLinecap="round" />

      {/* Earrings */}
      <circle cx="57" cy="112" r="4" fill="#D4AF37" filter="url(#glow)" />
      <circle cx="57" cy="112" r="2" fill="#FF1493" />
      <circle cx="143" cy="112" r="4" fill="#D4AF37" filter="url(#glow)" />
      <circle cx="143" cy="112" r="2" fill="#FF1493" />

      {/* Shoulders / top */}
      <path d="M 56 155 Q 50 170 48 185 Q 75 175 100 178 Q 125 175 152 185 Q 150 170 144 155 Q 130 148 100 150 Q 70 148 56 155 Z" fill="#1a0a1e" />

      {/* Lace collar detail */}
      <path d="M 65 155 Q 100 162 135 155" stroke="#FF1493" strokeWidth="1.5" fill="none" opacity="0.6" strokeDasharray="3,2" />

      {/* Cookie held in hand */}
      <g transform="translate(130, 148)">
        <circle cx="0" cy="0" r="18" fill="url(#cookieGrad)" />
        <circle cx="0" cy="0" r="18" fill="none" stroke="#8B6914" strokeWidth="1.5" />
        {/* Chocolate chips */}
        <circle cx="-5" cy="-5" r="3" fill="#3d1a00" />
        <circle cx="6" cy="-3" r="2.5" fill="#3d1a00" />
        <circle cx="-2" cy="6" r="2.5" fill="#3d1a00" />
        <circle cx="8" cy="6" r="2" fill="#3d1a00" />
        <circle cx="-8" cy="4" r="2" fill="#3d1a00" />
        {/* Bite mark */}
        <path d="M 10 -14 Q 18 -10 18 0 Q 10 -2 8 -10 Z" fill="#0D0610" />
      </g>

      {/* Sparkles */}
      {animated && (
        <>
          <g opacity="0.8">
            <path d="M 30 60 L 32 55 L 34 60 L 39 62 L 34 64 L 32 69 L 30 64 L 25 62 Z" fill="#D4AF37">
              <animateTransform attributeName="transform" type="rotate" from="0 32 62" to="360 32 62" dur="4s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.8;0.2;0.8" dur="2s" repeatCount="indefinite" />
            </path>
          </g>
          <g opacity="0.6">
            <path d="M 165 75 L 167 70 L 169 75 L 174 77 L 169 79 L 167 84 L 165 79 L 160 77 Z" fill="#FF1493">
              <animateTransform attributeName="transform" type="rotate" from="0 167 77" to="360 167 77" dur="3s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.6;0.1;0.6" dur="1.5s" repeatCount="indefinite" />
            </path>
          </g>
          <g opacity="0.7">
            <path d="M 20 130 L 21 127 L 22 130 L 25 131 L 22 132 L 21 135 L 20 132 L 17 131 Z" fill="#D4AF37">
              <animate attributeName="opacity" values="0.7;0.1;0.7" dur="2.5s" repeatCount="indefinite" />
            </path>
          </g>
        </>
      )}
    </svg>
  );
}

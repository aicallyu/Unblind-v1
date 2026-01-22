interface LogoProps {
  size?: 'sm' | 'md' | 'lg'
  animated?: boolean
}

export default function Logo({ size = 'md', animated = true }: LogoProps) {
  const sizes = {
    sm: { width: 36, height: 36, fontSize: 14 },
    md: { width: 48, height: 48, fontSize: 18 },
    lg: { width: 72, height: 72, fontSize: 28 },
  }

  const { width, height, fontSize } = sizes[size]

  return (
    <div
      className={`logo-container relative ${animated ? 'logo-animated' : ''}`}
      style={{ width, height }}
    >
      {/* Outer glow ring */}
      <div
        className="absolute inset-0 rounded-xl opacity-60"
        style={{
          background: 'linear-gradient(135deg, rgba(0, 240, 255, 0.3), rgba(168, 85, 247, 0.3))',
          filter: 'blur(8px)',
        }}
      />

      {/* Main logo container */}
      <div
        className="relative w-full h-full rounded-xl flex items-center justify-center overflow-hidden"
        style={{
          background: 'linear-gradient(145deg, rgba(8, 8, 14, 0.95), rgba(15, 15, 22, 0.9))',
          border: '1px solid rgba(0, 240, 255, 0.3)',
          boxShadow: `
            0 0 20px rgba(0, 240, 255, 0.2),
            0 0 40px rgba(168, 85, 247, 0.1),
            inset 0 1px 0 rgba(255, 255, 255, 0.1)
          `,
        }}
      >
        {/* Diagonal split line */}
        <div
          className="absolute w-[200%] h-[1px] rotate-45 opacity-30"
          style={{
            background: 'linear-gradient(90deg, transparent, var(--accent-cyan), var(--accent-purple), transparent)',
            top: '50%',
            left: '-50%',
          }}
        />

        {/* X letter */}
        <span
          className="relative z-10 font-display font-black tracking-tight"
          style={{
            fontSize,
            color: 'var(--accent-cyan)',
            textShadow: `
              0 0 10px rgba(0, 240, 255, 0.8),
              0 0 20px rgba(0, 240, 255, 0.5),
              0 0 30px rgba(0, 240, 255, 0.3)
            `,
            marginRight: '-2px',
          }}
        >
          X
        </span>

        {/* P letter */}
        <span
          className="relative z-10 font-display font-black tracking-tight"
          style={{
            fontSize,
            color: 'var(--accent-purple)',
            textShadow: `
              0 0 10px rgba(168, 85, 247, 0.8),
              0 0 20px rgba(168, 85, 247, 0.5),
              0 0 30px rgba(168, 85, 247, 0.3)
            `,
            marginLeft: '-2px',
          }}
        >
          P
        </span>

        {/* Corner accents */}
        <div
          className="absolute top-0 left-0 w-3 h-3"
          style={{
            borderTop: '2px solid var(--accent-cyan)',
            borderLeft: '2px solid var(--accent-cyan)',
            borderTopLeftRadius: '8px',
          }}
        />
        <div
          className="absolute bottom-0 right-0 w-3 h-3"
          style={{
            borderBottom: '2px solid var(--accent-purple)',
            borderRight: '2px solid var(--accent-purple)',
            borderBottomRightRadius: '8px',
          }}
        />
      </div>

      <style>{`
        .logo-animated {
          animation: logoPulse 3s ease-in-out infinite;
        }

        @keyframes logoPulse {
          0%, 100% {
            filter: drop-shadow(0 0 15px rgba(0, 240, 255, 0.4));
          }
          50% {
            filter: drop-shadow(0 0 25px rgba(168, 85, 247, 0.5));
          }
        }

        .logo-container:hover {
          transform: scale(1.05);
          transition: transform 0.3s ease;
        }

        .logo-container:hover > div:first-child {
          opacity: 1;
          filter: blur(12px);
        }
      `}</style>
    </div>
  )
}

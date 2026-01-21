export default function SilentOculusSection() {
  return (
    <div
      className="silent-oculus-section my-16 p-10 rounded-3xl relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, rgba(0, 240, 255, 0.08), rgba(168, 85, 247, 0.06))',
        border: '1px solid rgba(0, 240, 255, 0.2)',
      }}
    >
      {/* Top gradient line */}
      <div
        className="absolute top-0 left-0 right-0 h-1"
        style={{
          background: 'linear-gradient(90deg, var(--accent-cyan), var(--accent-purple), var(--accent-cyan))',
          backgroundSize: '200% 100%',
          animation: 'shimmer 3s linear infinite',
        }}
      />

      {/* Logo and title */}
      <div className="flex items-center gap-4 mb-8">
        <div
          className="w-14 h-14 rounded-xl flex items-center justify-center relative"
          style={{
            border: '2px solid var(--accent-cyan)',
            background: 'rgba(0, 240, 255, 0.1)',
          }}
        >
          <div
            className="absolute w-6 h-6 rounded-full opacity-30 animate-pulse"
            style={{ background: 'var(--accent-cyan)' }}
          />
          <div
            className="absolute w-3 h-3 rounded-full"
            style={{
              background: 'var(--accent-cyan)',
              boxShadow: '0 0 15px var(--accent-cyan)',
            }}
          />
        </div>
        <div>
          <h3
            className="font-display text-2xl font-bold tracking-wide"
            style={{
              background: 'linear-gradient(135deg, var(--accent-cyan), var(--accent-purple))',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            SILENT OCULUS
          </h3>
          <p className="font-mono text-xs tracking-[0.15em] uppercase" style={{ color: 'var(--text-muted)' }}>
            PERCEPTION INFRASTRUCTURE BY ONIOKO
          </p>
        </div>
      </div>

      {/* Description */}
      <div className="space-y-4" style={{ color: 'var(--text-secondary)' }}>
        <p className="text-lg leading-relaxed">
          Silent Oculus is not a lie detector. It is not a mind reader. It is not surveillance infrastructure.
        </p>
        <p className="text-lg leading-relaxed">
          It is a <strong style={{ color: 'var(--text-primary)' }}>Perception Layer</strong>: A system that tracks
          signal alignment across communication channels, surfacing divergences that human perception compresses away.
        </p>
        <p className="text-lg leading-relaxed">
          Where intuition guesses, Silent Oculus observes. Where memory reconstructs, it records. Where attention
          narrows, it maintains full-spectrum awareness.
        </p>
      </div>

      {/* CTA */}
      <div className="mt-8">
        <a
          href="https://onioko.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 px-6 py-3 rounded-xl font-display text-sm font-bold tracking-[0.1em] uppercase transition-all duration-300 hover:-translate-y-0.5"
          style={{
            background: 'linear-gradient(135deg, var(--accent-cyan), var(--accent-blue))',
            color: '#000',
            boxShadow: '0 10px 30px rgba(0, 240, 255, 0.2)',
          }}
        >
          EXPLORE SILENT OCULUS
          <span>→</span>
        </a>
      </div>

      <style>{`
        @keyframes shimmer {
          0% { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }
        [data-theme="light"] .silent-oculus-section {
          background: linear-gradient(135deg, rgba(8, 145, 178, 0.08), rgba(168, 85, 247, 0.06));
          border-color: rgba(8, 145, 178, 0.25);
        }
      `}</style>
    </div>
  )
}
